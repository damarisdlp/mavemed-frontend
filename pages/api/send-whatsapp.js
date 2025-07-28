export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { firstName, lastName, email, phone, whatsapp } = req.body;

    console.log("Incoming lead:", { firstName, lastName, email, phone, whatsapp });

    const apiKey = "6608832"; // CallMeBot API key
    const receptionPhone = "+5216642077675"; // Reception WhatsApp in full international format

    const message = `Nuevo prospecto desde el sitio web de Mave\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nWhatsApp?: ${whatsapp}`;
    const encodedMsg = encodeURIComponent(message);

    const url = `https://api.callmebot.com/whatsapp.php?phone=${receptionPhone}&text=${encodedMsg}&apikey=${apiKey}`;

    const response = await fetch(url);
    const result = await response.text();

    console.log("CallMeBot response:", result);

    if (!response.ok) {
      throw new Error(`CallMeBot error: ${result}`);
    }

    return res.status(200).json({ success: true, message: "WhatsApp alert sent" });
  } catch (error) {
    console.error("WhatsApp send error:", error);
    return res.status(500).json({ error: "Failed to send WhatsApp message", details: error.message });
  }
}