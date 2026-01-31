import { redis } from "@/lib/redis";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
    entryUrl = "",
    entryPath = "",
  } = incoming;

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
    referrer: referrer || "direct",
    entryUrl,
    entryPath,
    phoneNumber: incoming.phoneNumber || incoming.phone || "",
    funnelType: incoming.funnelType || "promo_lead",
    createdAtIso: new Date().toISOString(),
  };

  try {
    const leadKey = `lead:${leadId}`;
    const leadMetaKey = `leadmeta:${leadId}`;
    const pendingKey = `pending:${leadId}`;
    const pendingSetKey = "pending:leads";
    const phoneDigits = String(payload.phoneNumber || "")
      .trim()
      .replace(/[^\d]/g, "");
    let countryCode = String(payload.countryCode || "")
      .trim()
      .replace(/[^\d+]/g, "");
    if (countryCode && !countryCode.startsWith("+")) countryCode = `+${countryCode}`;
    const normalizedPhone = countryCode && phoneDigits ? `${countryCode}${phoneDigits}` : "";
    payload.normalizedPhone = normalizedPhone;
    const funnel = String(payload.funnelType || "promo_lead").trim().toLowerCase();
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
    console.error("Promo lead submission error:", error);
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
  const rawUrl = process.env.GOOGLE_SCRIPT_PROMO_URL || process.env.GOOGLE_PROMO_SCRIPT_URL;
  const fallbackUrl =
    "https://script.google.com/macros/s/AKfycbxJpnMq0ltjATpVoQ6Pr_r5SosD9ToINfvPTTcD0Tg-h9SqfG5jRzTkcyWxf8ZfFBE/exec";
  const scriptUrl =
    rawUrl && (rawUrl.startsWith("http://") || rawUrl.startsWith("https://"))
      ? rawUrl
      : fallbackUrl;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const sheetResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!sheetResponse.ok) {
      const text = await sheetResponse.text().catch(() => "");
      console.error("Promo sheet submission failed:", text);
      return { ok: false, detail: text || `status ${sheetResponse.status}` };
    }

    const sheetText = await sheetResponse.text().catch(() => "");
    return { ok: true, detail: sheetText || "OK" };
  } catch (error) {
    const detail = error?.name === "AbortError" ? "timeout" : error?.message || "unknown";
    console.error("Promo sheet submission error:", detail);
    return { ok: false, detail };
  }
}
