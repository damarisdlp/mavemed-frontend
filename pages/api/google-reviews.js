const cache = {
  data: null,
  timestamp: 0,
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) {
    return res.status(500).json({ error: "Missing Google Places configuration" });
  }

  const now = Date.now();
  const ttl = 1000 * 60 * 60 * 6; // 6 hours
  if (cache.data && now - cache.timestamp < ttl) {
    return res.status(200).json(cache.data);
  }

  const fields = "name,rating,user_ratings_total,reviews";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const text = await resp.text();
      console.error("Google Places error:", text);
      return res.status(502).json({ error: "Failed to fetch reviews", detail: text });
    }
    const data = await resp.json();
    const payload = {
      name: data?.result?.name || "",
      rating: data?.result?.rating || null,
      total: data?.result?.user_ratings_total || 0,
      reviews: data?.result?.reviews || [],
    };
    cache.data = payload;
    cache.timestamp = now;
    return res.status(200).json(payload);
  } catch (error) {
    console.error("Google reviews exception:", error);
    return res.status(500).json({ error: "Internal server error", detail: error?.message });
  }
}
