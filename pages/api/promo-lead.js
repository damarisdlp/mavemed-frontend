export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const incoming = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const payload = {
    ...incoming,
    phoneNumber: incoming.phoneNumber || incoming.phone,
  };

  const scriptUrl =
    process.env.GOOGLE_PROMO_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycbxJpnMq0ltjATpVoQ6Pr_r5SosD9ToINfvPTTcD0Tg-h9SqfG5jRzTkcyWxf8ZfFBE/exec";

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
