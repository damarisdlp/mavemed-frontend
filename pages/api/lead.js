export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const incoming = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const payload = {
    ...incoming,
    phoneNumber: incoming.phoneNumber || incoming.phone,
    primaryTreatmentInterest:
      incoming.primaryTreatmentInterest ||
      (incoming.primaryTreatment === "Other"
        ? incoming.primaryTreatmentOther || "Other"
        : incoming.primaryTreatment),
    whenToVisit: incoming.whenToVisit || incoming.visitTiming,
    visitingFrom:
      incoming.visitingFrom ||
      (incoming.locationOrigin === "Other"
        ? incoming.locationOriginOther || "Other"
        : incoming.locationOrigin),
  };
  const scriptUrl =
    process.env.GOOGLE_SCRIPT_URL ||
    "https://script.google.com/macros/s/AKfycby6s-AnbrPpBvel2wtHZNbk_PDboWf-DFcWWoLBhpovYwO96eFGQiQ7_h94Dd98m98/exec";
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

    const sheetText = await sheetResponse.text().catch(() => "");
    return res.status(200).json({ success: true, detail: sheetText || "OK" });
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
