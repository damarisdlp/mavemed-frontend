import { redis } from "@/lib/redis";
import { rateLimit, requireLeadAuth } from "@/lib/server/leadSecurity";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const auth = requireLeadAuth(req);
  if (!auth.ok) {
    return res.status(auth.status).json({ error: auth.error });
  }

  const limit = await rateLimit(req, { key: "lead-treatment", limit: 10, windowSec: 60 * 10 });
  if (!limit.ok) {
    return res.status(limit.status).json({ error: limit.error });
  }
  res.setHeader("X-RateLimit-Limit", limit.limit);
  res.setHeader("X-RateLimit-Remaining", limit.remaining);
  res.setHeader("X-RateLimit-Reset", limit.reset);

  const incoming = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const {
    utm_source = "",
    utm_medium = "",
    utm_campaign = "",
    utm_term = "",
    utm_content = "",
    gclid = "",
    landingPagePath = "",
    referrer = "",
  } = incoming;
  const treatmentInterest =
    incoming.treatmentInterest ||
    incoming.primaryTreatmentInterest ||
    (incoming.primaryTreatment === "Other"
      ? incoming.primaryTreatmentOther || "Other"
      : incoming.primaryTreatment);

  const leadId = incoming.leadId || makeLeadId();
  const payload = {
    ...incoming,
    leadId,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
    gclid,
    landingPagePath,
    referrer,
    phoneNumber: incoming.phoneNumber || incoming.phone || "",
    treatmentInterest: treatmentInterest || "",
    whenToVisit: incoming.whenToVisit || incoming.visitTiming || "",
    visitingFrom:
      incoming.visitingFrom ||
      (incoming.locationOrigin === "Other"
        ? incoming.locationOriginOther || "Other"
        : incoming.locationOrigin) ||
      "",
    prefCom: incoming.prefCom || incoming.preferredChannel || "",
    treatmentBefore: incoming.treatmentBefore || incoming.hadTreatmentBefore || "",
    bestDay: incoming.bestDay || incoming.bestDays || "",
    bestTime: incoming.bestTime || incoming.bestTimes || "",
    mainConcernGoal: incoming.mainConcernGoal || incoming.mainConcern || "",
    funnelType: incoming.funnelType || "rf_microneedling",
    createdAtIso: new Date().toISOString(),
  };

  try {
    const leadKey = `lead:${leadId}`;
    const leadMetaKey = `leadmeta:${leadId}`;
    const pendingKey = `pending:${leadId}`;
    const pendingSetKey = "pending:leads";
    const phone = (payload.phoneNumber || "").trim();
    const countryCode = String(payload.countryCode || "")
      .trim()
      .replace(/[^\d+]/g, "");
    let normalizedPhone = phone.replace(/[^\d+]/g, "");
    if (countryCode && normalizedPhone && !normalizedPhone.startsWith("+")) {
      normalizedPhone = `${countryCode}${normalizedPhone.replace(/^\+/, "")}`;
    }
    const funnel = String(payload.funnelType || "unknown").trim().toLowerCase();
    if (normalizedPhone) {
      const dedupeKey = `dedupe:${normalizedPhone}:${funnel}`;
      const didSet = await redis.set(dedupeKey, leadId, { ex: 60 * 60 * 24, nx: true });
      if (!didSet) {
        const existingLeadId = await redis.get(dedupeKey);
        const existingId =
          typeof existingLeadId === "string" ? existingLeadId : String(existingLeadId || "");
        return res.status(200).json({
          success: true,
          leadId: existingId,
          sheetStatus: "duplicate",
        });
      }
    }

    await redis.set(leadKey, payload, { ex: 60 * 60 * 24 * 30 });
    await redis.set(pendingKey, payload, { ex: 60 * 60 * 24 * 30 });
    await redis.sadd(pendingSetKey, leadId);

    const sheetResult = await tryWriteToSheets(payload);
    if (sheetResult.ok) {
      await redis.del(pendingKey);
      await redis.srem(pendingSetKey, leadId);
      await redis.hset(leadMetaKey, {
        sheetStatus: "written",
        sheetWrittenAtIso: new Date().toISOString(),
      });
      await redis.expire(leadMetaKey, 60 * 60 * 24 * 30);
      return res.status(200).json({ success: true, leadId, sheetStatus: "written" });
    }

    await redis.hset(leadMetaKey, {
      sheetStatus: "pending",
      lastSheetError: sheetResult.detail || "unknown",
      lastSheetAttemptAtIso: new Date().toISOString(),
    });
    await redis.expire(leadMetaKey, 60 * 60 * 24 * 30);

    return res.status(200).json({ success: true, leadId, sheetStatus: "pending" });
  } catch (error) {
    console.error("Treatment lead submission error:", error);
    return res.status(500).json({ error: "Internal server error", detail: error?.message });
  }
}

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
}

function makeLeadId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

async function tryWriteToSheets(payload) {
  const funnel = String(payload?.funnelType || "").toLowerCase();
  const isRfCandidacy = funnel === "rf_microneedling";
  const isSculptraCandidacy = funnel === "sculptra-candidacy";
  const isSculptraRfPackage = funnel === "sculptra-rf-candidacy";
  const rawUrl = isRfCandidacy
    ? process.env.GOOGLE_SCRIPT_CANDIDACY_URL
    : isSculptraCandidacy
    ? process.env.GOOGLE_SCRIPT_SCULPTRA_CANDIDACY_URL
    : isSculptraRfPackage
    ? process.env.GOOGLE_SCRIPT_SCULPTRA_RF_PACKAGE_URL
    : process.env.GOOGLE_SCRIPT_TREATMENT_URL;
  if (!rawUrl) {
    return { ok: false, detail: "Treatment script URL is not configured." };
  }
  const scriptUrl =
    rawUrl && (rawUrl.startsWith("http://") || rawUrl.startsWith("https://"))
      ? rawUrl
      : null;
  if (!scriptUrl) {
    return { ok: false, detail: "Treatment script URL is invalid." };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const sheetResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!sheetResponse.ok) {
      const text = await sheetResponse.text().catch(() => "");
      console.error("Treatment sheet submission failed:", text);
      return { ok: false, detail: text || `status ${sheetResponse.status}` };
    }

    const sheetText = await sheetResponse.text().catch(() => "");
    return { ok: true, detail: sheetText || "OK" };
  } catch (error) {
    const detail = error?.name === "AbortError" ? "timeout" : error?.message || "unknown";
    console.error("Treatment sheet submission error:", detail);
    return { ok: false, detail };
  }
}
