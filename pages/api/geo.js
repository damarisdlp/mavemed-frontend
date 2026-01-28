export default function handler(req, res) {
  const ipCountry =
    req.headers["x-vercel-ip-country"] ||
    req.headers["x-vercel-ip-country-region"] ||
    req.headers["x-country-code"];

  const country = Array.isArray(ipCountry) ? ipCountry[0] : ipCountry;
  res.status(200).json({ country: country || null });
}
