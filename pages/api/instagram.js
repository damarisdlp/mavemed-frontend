const cache = {
  data: null,
  timestamp: 0,
};

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.INSTAGRAM_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) {
    return res.status(500).json({ error: "Missing Instagram configuration" });
  }

  const pinnedIds = (process.env.INSTAGRAM_PINNED_IDS || "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
  const pinnedOrder = new Map();
  pinnedIds.forEach((id, idx) => pinnedOrder.set(id, idx));

  const isPinned = (post) => {
    if (!post) return false;
    const codeFromPermalink = post.permalink
      ? post.permalink.split("/").filter(Boolean).pop()
      : "";
    return pinnedOrder.has(post.id) || (codeFromPermalink && pinnedOrder.has(codeFromPermalink));
  };

  const now = Date.now();
  const ttl = 1000 * 60 * 10; // 10 minutes
  if (cache.data && now - cache.timestamp < ttl) {
    return res.status(200).json(cache.data);
  }

  const fields = [
    "id",
    "caption",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp",
    "username",
    "like_count"
  ].join(",");

  const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${token}`;
  const accountUrl = `https://graph.instagram.com/me?fields=id,username&access_token=${token}`;

  try {
    // Fetch account info to help diagnose linkage
    const accountRes = await fetch(accountUrl);
    let account = null;
    if (accountRes.ok) {
      account = await accountRes.json();
    } else {
      const text = await accountRes.text();
      console.warn("Instagram account lookup failed:", text);
    }

    const igRes = await fetch(url);
    if (!igRes.ok) {
      const text = await igRes.text();
      console.error("Instagram API error:", text);
      return res.status(502).json({ error: "Instagram fetch failed", detail: text, account });
    }
    const data = await igRes.json();

    const sorted = Array.isArray(data?.data) ? [...data.data] : [];
    if (sorted.length) {
      sorted.sort((a, b) => {
        const aPinned = isPinned(a);
        const bPinned = isPinned(b);
        if (aPinned && bPinned) {
          const aKey = pinnedOrder.has(a.id)
            ? a.id
            : a.permalink?.split("/").filter(Boolean).pop();
          const bKey = pinnedOrder.has(b.id)
            ? b.id
            : b.permalink?.split("/").filter(Boolean).pop();
          return pinnedOrder.get(aKey) - pinnedOrder.get(bKey);
        }
        if (aPinned) return -1;
        if (bPinned) return 1;
        return new Date(b.timestamp || 0) - new Date(a.timestamp || 0);
      });
    }

    const payload = { ...data, data: sorted, account };
    cache.data = payload;
    cache.timestamp = now;
    return res.status(200).json(payload);
  } catch (error) {
    console.error("Instagram fetch exception:", error);
    return res.status(500).json({ error: "Internal server error", detail: error?.message });
  }
}
