import { rateLimit, requireLeadAuth } from "@/lib/server/leadSecurity";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const auth = requireLeadAuth(req);
  if (!auth.ok) {
    return res.status(auth.status).json({ error: auth.error });
  }

  const limit = await rateLimit(req, { key: "promo-lead", limit: 10, windowSec: 60 * 10 });
  if (!limit.ok) {
    return res.status(limit.status).json({ error: limit.error });
  }
  res.setHeader("X-RateLimit-Limit", limit.limit);
  res.setHeader("X-RateLimit-Remaining", limit.remaining);
  res.setHeader("X-RateLimit-Reset", limit.reset);

  const incoming = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const payload = {
    ...incoming,
    phoneNumber: incoming.phoneNumber || incoming.phone,
  };

  const scriptUrl =
    process.env.GOOGLE_PROMO_SCRIPT_URL || process.env.GOOGLE_SCRIPT_PROMO_URL;
  if (!scriptUrl) {
    return res.status(500).json({ error: "Promo script URL is not configured." });
  }

  try {
    const sheetResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!sheetResponse.ok) {
      const text = await sheetResponse.text();
      console.error("Promo sheet submission failed:", text);
      return res.status(502).json({ error: "Promo sheet submission failed", detail: text });
    }

    const sheetText = await sheetResponse.text().catch(() => "");
    return res.status(200).json({ success: true, detail: sheetText || "OK" });
  } catch (error) {
    console.error("Promo lead submission error:", error);
    return res.status(500).json({ error: "Internal server error", detail: error?.message });
  }
}

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}
