import { z } from "zod";

const localizedText = z.union([
  z.string(),
  z.object({
    en: z.string().optional(),
    es: z.string().optional(),
  }),
]);

const pricingOptionSchema = z
  .object({
    id: z.string().optional(),
    optionKey: z.string().optional(),
    optionName: localizedText.optional(),
    packageId: z.string().optional(),
    optionType: z.string().optional(),
    optionPrice: z.unknown().optional(),
    optionPromoPrice: z.unknown().optional(),
    filterGroupKey: z.string().optional(),
    linkedPackageIds: z.array(z.string()).optional(),
    notes: z.array(localizedText).optional(),
  })
  .passthrough();

const beforeAfterSlideSchema = z
  .object({
    id: z.string().optional(),
    beforeSrc: z.string(),
    afterSrc: z.string(),
    alt: localizedText.optional(),
    caption: localizedText.optional(),
  })
  .passthrough();

const treatmentSchema = z
  .object({
    urlSlug: z.string(),
    category: z.string().optional(),
    categoryDisplayName: localizedText.optional(),
    serviceDisplayName: localizedText.optional(),
    description: localizedText.optional(),
    details: localizedText.optional(),
    isPopular: z.boolean().optional(),
    isPromoActive: z.boolean().optional(),
    images: z.record(z.string()).optional(),
    beforeAfterGallery: z.array(beforeAfterSlideSchema).optional(),
    notes: z.array(localizedText).optional(),
    filterConfig: z.unknown().optional(),
    pricing: z
      .object({
        options: z.array(pricingOptionSchema).optional(),
      })
      .optional(),
    promoDetails: z.unknown().optional(),
    packages: z.array(z.unknown()).optional(),
    goals: z.array(localizedText).optional(),
    treatableAreas: z.array(localizedText).optional(),
    addOns: z.array(z.unknown()).optional(),
    expectations: z.unknown().optional(),
    faq: z.array(z.unknown()).optional(),
  })
  .passthrough();

const normalizedTreatmentsSchema = z.array(treatmentSchema);

const formatIssue = (issue) => {
  const path = issue.path.length ? issue.path.join(".") : "root";
  return `${path}: ${issue.message}`;
};

export const validateNormalizedTreatments = (data) => {
  const result = normalizedTreatmentsSchema.safeParse(data);
  if (result.success) return { ok: true };

  const issues = result.error.issues.slice(0, 8).map(formatIssue);
  console.error(
    "[normalized] schema validation failed:",
    issues.join(" | ")
  );
  return { ok: false, errors: result.error.issues };
};
