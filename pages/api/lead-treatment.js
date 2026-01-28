export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const incoming = typeof req.body === "string" ? safeParse(req.body) : req.body || {};
  const treatmentInterest =
    incoming.treatmentInterest ||
    incoming.primaryTreatmentInterest ||
    (incoming.primaryTreatment === "Other"
      ? incoming.primaryTreatmentOther || "Other"
      : incoming.primaryTreatment);

  const payload = {
    ...incoming,
    phoneNumber: incoming.phoneNumber || incoming.phone,
    treatmentInterest,
    whenToVisit: incoming.whenToVisit || incoming.visitTiming,
    visitingFrom:
      incoming.visitingFrom ||
      (incoming.locationOrigin === "Other"
        ? incoming.locationOriginOther || "Other"
        : incoming.locationOrigin),
    prefCom: incoming.prefCom || incoming.preferredChannel,
    treatmentBefore: incoming.treatmentBefore || incoming.hadTreatmentBefore,
    bestDay: incoming.bestDay || incoming.bestDays,
    bestTime: incoming.bestTime || incoming.bestTimes,
    mainConcernGoal: incoming.mainConcernGoal || incoming.mainConcern,
  };

  const scriptUrl =
    process.env.GOOGLE_SCRIPT_TREATMENT_URL ||
    "https://script.google.com/macros/s/AKfycbxplXntV5GS2XYQ7WDYtzJ-Ifl6FMcK2_jrcUDRuwAHtGsVwAZmyB79p9pxmnsQS2s/exec";

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
      console.error("Treatment sheet submission failed:", text);
      return res.status(502).json({ error: "Sheet submission failed", detail: text });
    }

    const sheetText = await sheetResponse.text().catch(() => "");
    return res.status(200).json({ success: true, detail: sheetText || "OK" });
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
