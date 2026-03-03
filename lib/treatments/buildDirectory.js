import categoryOrder from "@/lib/data/normalized/categories.json";
import { getLocalized } from "@/lib/i18n/getLocalized";

export function buildTreatmentDirectoryCategories({
  allTreatments = [],
  locale = "en",
  includedCategorySlugs = null,
  includedServiceSlugs = null,
}) {
  const localize = (field) => getLocalized(field, locale);
  const allowedCategories = Array.isArray(includedCategorySlugs)
    ? new Set(includedCategorySlugs)
    : null;
  const allowedServices = Array.isArray(includedServiceSlugs)
    ? new Set(includedServiceSlugs)
    : null;

  const categoriesMap = {};

  allTreatments.forEach((treatment) => {
    if (!treatment || !treatment.category || !treatment.urlSlug) return;
    if (allowedCategories && !allowedCategories.has(treatment.category)) return;
    if (allowedServices && !allowedServices.has(treatment.urlSlug)) return;

    const categorySlug = treatment.category;
    if (!categoriesMap[categorySlug]) {
      categoriesMap[categorySlug] = {
        slug: categorySlug,
        title: localize(treatment.categoryDisplayName),
        services: [],
      };
    }

    const optionFields = (treatment.pricing?.options || []).flatMap((option) => [
      localize(option.optionName),
      ...(option.notes || []).map((note) => localize(note)),
    ]);

    categoriesMap[categorySlug].services.push({
      name: localize(treatment.displayName || treatment.serviceDisplayName),
      slug: treatment.urlSlug,
      image: treatment.images?.primary || "/placeholder.jpg",
      description: localize(treatment.description),
      searchFields: [
        localize(treatment.displayName || treatment.serviceDisplayName),
        localize(treatment.description),
        localize(treatment.details),
        ...(treatment.notes || []).map((note) => localize(note)),
        ...(treatment.goals || []).map((goal) => localize(goal)),
        ...(treatment.treatableAreas || []).map((area) => localize(area)),
        ...optionFields,
      ].filter(Boolean),
    });
  });

  return categoryOrder
    .map((entry) => categoriesMap[entry.slug])
    .filter((category) => category?.services?.length);
}
