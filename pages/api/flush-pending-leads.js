import { redis } from "@/lib/redis";

export default async function handler(req, res) {
  const auth = req.headers.authorization || "";
  const token = process.env.CRON_SECRET || "";
  if (!token || auth !== `Bearer ${token}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const pendingSetKey = "pending:leads";

  try {
    const leadIds = await redis.smembers(pendingSetKey);
    if (!leadIds?.length) {
      return res.status(200).json({ ok: true, flushed: 0 });
    }

    let flushed = 0;

    for (const leadId of leadIds) {
      const pendingKey = `pending:${leadId}`;
      const leadMetaKey = `leadmeta:${leadId}`;
      const raw = await redis.get(pendingKey);
      const payload = normalizePayload(raw);
      if (!payload) {
        await redis.hset(leadMetaKey, {
          sheetStatus: "pending",
          lastSheetError: "invalid_payload",
          lastSheetAttemptAtIso: new Date().toISOString(),
        });
        await redis.expire(leadMetaKey, 60 * 60 * 24 * 30);
        await redis.del(pendingKey);
        await redis.srem(pendingSetKey, leadId);
        continue;
      }

      const result = await tryWriteToSheets(payload);
      if (result.ok) {
        await redis.del(pendingKey);
        await redis.srem(pendingSetKey, leadId);
        await redis.hset(leadMetaKey, {
          sheetStatus: "written",
          sheetWrittenAtIso: new Date().toISOString(),
        });
        await redis.expire(leadMetaKey, 60 * 60 * 24 * 30);
        flushed += 1;
      } else {
        await redis.hset(leadMetaKey, {
          sheetStatus: "pending",
          lastSheetError: result.detail || "unknown",
          lastSheetAttemptAtIso: new Date().toISOString(),
        });
        await redis.expire(leadMetaKey, 60 * 60 * 24 * 30);
      }
    }

    return res.status(200).json({ ok: true, flushed, pending: leadIds.length - flushed });
  } catch (error) {
    console.error("Flush error:", error);
    return res.status(500).json({ error: "Internal server error", detail: error?.message || "unknown" });
  }
}

function normalizePayload(raw) {
  if (!raw) return null;
  if (typeof raw === "object") return raw;
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : null;
    } catch {
      return null;
    }
  }
  return null;
}

async function tryWriteToSheets(payload) {
  const funnel = String(payload?.funnelType || "").toLowerCase();
  const isRfCandidacy = funnel === "rf_microneedling";
  const isSculptraCandidacy = funnel === "sculptra-candidacy";
  const isSculptraRfPackage = funnel === "sculptra-rf-candidacy";
  const isPromo = funnel === "promo_lead";
  const rawUrl = isRfCandidacy
    ? process.env.GOOGLE_SCRIPT_CANDIDACY_URL
    : isSculptraCandidacy
    ? process.env.GOOGLE_SCRIPT_SCULPTRA_CANDIDACY_URL
    : isSculptraRfPackage
    ? process.env.GOOGLE_SCRIPT_SCULPTRA_RF_PACKAGE_URL
    : isPromo
    ? process.env.GOOGLE_SCRIPT_PROMO_URL || process.env.GOOGLE_PROMO_SCRIPT_URL
    : process.env.GOOGLE_SCRIPT_TREATMENT_URL;
  const fallbackUrl = isRfCandidacy
    ? "https://script.google.com/macros/s/AKfycbwMSvX_5blsHgx6bIa9MxseP9s0hXRplnNcLhSEA4OtsdB67g9yMcWIyf0t0zaPGs7K/exec"
    : isSculptraCandidacy
    ? "https://script.google.com/macros/s/AKfycbzUU2Y-jPcNwJ5q126k3k6WwEZJGkn4yZY-HQZrrLpqVL8UCfGVqQzxA6Xw1ytYoWYw/exec"
    : isSculptraRfPackage
    ? "https://script.google.com/macros/s/AKfycbxG_CBT1dWnQjHzvTNwFIV2stQ5THrhj2z1Zkc1JFnY7L3NDZirY9FOHhzsLzgIGQMx/exec"
    : isPromo
    ? "https://script.google.com/macros/s/AKfycbxJpnMq0ltjATpVoQ6Pr_r5SosD9ToINfvPTTcD0Tg-h9SqfG5jRzTkcyWxf8ZfFBE/exec"
    : "https://script.google.com/macros/s/AKfycbxplXntV5GS2XYQ7WDYtzJ-Ifl6FMcK2_jrcUDRuwAHtGsVwAZmyB79p9pxmnsQS2s/exec";
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
      return { ok: false, detail: text || `status ${sheetResponse.status}` };
    }

    return { ok: true, detail: "OK" };
  } catch (error) {
    const detail = error?.name === "AbortError" ? "timeout" : error?.message || "unknown";
    return { ok: false, detail };
  }
}
