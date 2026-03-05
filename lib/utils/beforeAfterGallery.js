const BEFORE_AFTER_FILE_PATTERN = /^(\d+)-(before|after)\.(jpe?g|png|webp|avif)$/i;
const BEFORE_AFTER_EXT_PRIORITY = {
  jpg: 0,
  jpeg: 1,
  webp: 2,
  png: 3,
  avif: 4,
};

const getExtensionPriority = (ext) => {
  const normalized = String(ext || "").toLowerCase();
  return Number.isFinite(BEFORE_AFTER_EXT_PRIORITY[normalized])
    ? BEFORE_AFTER_EXT_PRIORITY[normalized]
    : 99;
};

const pickPreferredFile = (items = []) =>
  [...items].sort((a, b) => a.priority - b.priority || a.fileName.localeCompare(b.fileName))[0];

const parseBeforeAfterEntries = (entries = [], slug = "") => {
  const byId = new Map();

  entries.forEach((entry) => {
    if (!entry?.isFile?.()) return;
    const match = entry.name.match(BEFORE_AFTER_FILE_PATTERN);
    if (!match) return;
    const [, rawId, sideRaw, extRaw] = match;
    const id = String(rawId).trim();
    const side = sideRaw.toLowerCase();
    const ext = extRaw.toLowerCase();
    const existing = byId.get(id) || { id, before: [], after: [] };
    existing[side].push({
      fileName: entry.name,
      priority: getExtensionPriority(ext),
    });
    byId.set(id, existing);
  });

  return Array.from(byId.values())
    .map((item) => {
      const before = pickPreferredFile(item.before);
      const after = pickPreferredFile(item.after);
      if (!before || !after) return null;
      return {
        id: item.id,
        beforeSrc: `/before-after/${slug}/${before.fileName}`,
        afterSrc: `/before-after/${slug}/${after.fileName}`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aNum = Number(a.id);
      const bNum = Number(b.id);
      if (Number.isFinite(aNum) && Number.isFinite(bNum) && aNum !== bNum) return aNum - bNum;
      return String(a.id).localeCompare(String(b.id));
    });
};

const discoverBeforeAfterGalleryBySlug = async (slug) => {
  if (!slug || typeof slug !== "string") return [];
  const [{ readdir }, path] = await Promise.all([
    import("fs/promises"),
    import("path"),
  ]);
  const folderPath = path.join(process.cwd(), "public", "before-after", slug);
  let entries = [];
  try {
    entries = await readdir(folderPath, { withFileTypes: true });
  } catch {
    return [];
  }
  return parseBeforeAfterEntries(entries, slug);
};

const discoverAllBeforeAfterBySlug = async () => {
  const [{ readdir }, path] = await Promise.all([
    import("fs/promises"),
    import("path"),
  ]);
  const rootPath = path.join(process.cwd(), "public", "before-after");
  let rootEntries = [];
  try {
    rootEntries = await readdir(rootPath, { withFileTypes: true });
  } catch {
    return [];
  }

  const slugs = rootEntries
    .filter((entry) => entry?.isDirectory?.())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const galleries = await Promise.all(
    slugs.map(async (slug) => ({
      slug,
      slides: await discoverBeforeAfterGalleryBySlug(slug),
    })),
  );

  return galleries.filter((gallery) => Array.isArray(gallery.slides) && gallery.slides.length > 0);
};

const mergeBeforeAfterSlides = (configuredSlides = [], discoveredSlides = []) => {
  const configured = Array.isArray(configuredSlides) ? configuredSlides : [];
  const discovered = Array.isArray(discoveredSlides) ? discoveredSlides : [];
  if (!configured.length) return discovered;
  if (!discovered.length) return configured;

  const map = new Map();
  configured.forEach((slide, index) => {
    const key =
      slide?.id != null && String(slide.id).trim() !== ""
        ? `id:${String(slide.id).trim()}`
        : `cfg:${index}`;
    map.set(key, slide);
  });
  discovered.forEach((slide) => {
    const idKey =
      slide?.id != null && String(slide.id).trim() !== ""
        ? `id:${String(slide.id).trim()}`
        : "";
    if (idKey && map.has(idKey)) return;
    const srcKey = `src:${slide.beforeSrc}|${slide.afterSrc}`;
    if (map.has(srcKey)) return;
    map.set(idKey || srcKey, slide);
  });
  return Array.from(map.values());
};

export { discoverBeforeAfterGalleryBySlug, discoverAllBeforeAfterBySlug, mergeBeforeAfterSlides };
