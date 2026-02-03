import { rateLimit, requireLeadAuth } from "@/lib/server/leadSecurity";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const auth = requireLeadAuth(req);
    if (!auth.ok) {
      return res.status(auth.status).json({ error: auth.error });
    }

    const limit = await rateLimit(req, { key: "send-whatsapp", limit: 4, windowSec: 60 * 10 });
    if (!limit.ok) {
      return res.status(limit.status).json({ error: limit.error });
    }
    res.setHeader("X-RateLimit-Limit", limit.limit);
    res.setHeader("X-RateLimit-Remaining", limit.remaining);
    res.setHeader("X-RateLimit-Reset", limit.reset);

    const { firstName, lastName, email, phone, whatsapp } = req.body || {};
    if (!firstName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const apiKey = process.env.CALLMEBOT_API_KEY;
    const receptionPhone = process.env.WHATSAPP_RECEPTION_PHONE;
    if (!apiKey || !receptionPhone) {
      return res.status(500).json({ error: "WhatsApp integration not configured." });
    }

    const message = `Nuevo prospecto desde el sitio web de Mave\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nWhatsApp?: ${whatsapp}`;
    const encodedMsg = encodeURIComponent(message);

    const url = `https://api.callmebot.com/whatsapp.php?phone=${receptionPhone}&text=${encodedMsg}&apikey=${apiKey}`;

    const response = await fetch(url);
    const result = await response.text();

    if (!response.ok) {
      throw new Error(`CallMeBot error: ${result}`);
    }

    return res.status(200).json({ success: true, message: "WhatsApp alert sent" });
  } catch (error) {
    console.error("WhatsApp send error:", error);
    return res.status(500).json({ error: "Failed to send WhatsApp message", details: error.message });
  }
}
