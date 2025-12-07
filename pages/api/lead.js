export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const scriptUrl =
    process.env.GOOGLE_SCRIPT_URL ||
"https://script.google.com/macros/s/AKfycbyrscQ6GGcXSbgl7IIdJsbDIEX0swrPoA8ZXynw7n9uiePCuYCKvBnuHOrAYLG2bWM/exec";

  try {
    const sheetResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!sheetResponse.ok) {
      const text = await sheetResponse.text();
      console.error("Sheet submission failed:", text);
      return res.status(502).json({ error: "Sheet submission failed", detail: text });
    }

    // Optional: notify reception via WhatsApp if endpoint is available
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/send-whatsapp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("WhatsApp notification failed (continuing):", err);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
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
