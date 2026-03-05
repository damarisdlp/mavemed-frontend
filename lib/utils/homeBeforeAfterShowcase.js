import { mergeBeforeAfterSlides } from "@/lib/utils/beforeAfterGallery";

const toTitleCaseFromSlug = (value = "") =>
  String(value)
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const withLocaleFallback = (value) => {
  const normalized = String(value || "").trim();
  if (!normalized) return { en: "", es: "" };
  return { en: normalized, es: normalized };
};

const buildHomeBeforeAfterItems = (allTreatments = [], discoveredBySlug = []) => {
  const treatmentBySlug = new Map(
    (Array.isArray(allTreatments) ? allTreatments : [])
      .filter((treatment) => treatment?.urlSlug)
      .map((treatment) => [treatment.urlSlug, treatment]),
  );

  return (Array.isArray(discoveredBySlug) ? discoveredBySlug : []).flatMap((galleryBySlug) => {
    const slug = String(galleryBySlug?.slug || "").trim();
    if (!slug) return [];

    const discoveredSlides = Array.isArray(galleryBySlug?.slides)
      ? galleryBySlug.slides
      : [];
    if (!discoveredSlides.length) return [];

    const treatment = treatmentBySlug.get(slug);
    const mergedSlides = mergeBeforeAfterSlides(
      treatment?.beforeAfterGallery,
      discoveredSlides,
    ).filter((slide) => slide?.beforeSrc && slide?.afterSrc);

    if (!mergedSlides.length) return [];

    const fallbackServiceName = toTitleCaseFromSlug(slug);
    const fallbackCategoryName = toTitleCaseFromSlug(treatment?.category || "treatments");

    const serviceLabel =
      treatment?.displayName ||
      treatment?.serviceDisplayName ||
      withLocaleFallback(fallbackServiceName);

    const categoryLabel =
      treatment?.categoryDisplayName || withLocaleFallback(fallbackCategoryName);

    return mergedSlides.map((slide, index) => ({
      id: slide.id || String(index + 1).padStart(2, "0"),
      slug,
      beforeSrc: slide.beforeSrc,
      afterSrc: slide.afterSrc,
      alt: slide.alt || serviceLabel,
      serviceLabel,
      categoryLabel,
    }));
  });
};

export { buildHomeBeforeAfterItems };
