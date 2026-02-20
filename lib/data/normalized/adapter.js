import categories from "./categories.json";
import laserResurfacingTranslations from "./translations/laser-resurfacing.json";
import wrinkleReducersTranslations from "./translations/wrinkle-reducers.json";
import collagenBiostimulatorsTranslations from "./translations/collagen-biostimulators.json";
import dermalFillersTranslations from "./translations/dermal-fillers.json";
import facialsTranslations from "./translations/facials.json";
import bodyTreatmentsTranslations from "./translations/body-medical-treatments.json";
import microneedlingTranslations from "./translations/microneedling-mesotherapy.json";
import skinTighteningTranslations from "./translations/skin-tightening.json";
import podiatryTranslations from "./translations/podiatry.json";
import laserResurfacingServices from "./services/laser-resurfacing.json";
import laserResurfacingOptions from "./options/laser-resurfacing.json";
import laserResurfacingPromos from "./promos/laser-resurfacing.json";
import laserResurfacingAddons from "./addons/laser-resurfacing.json";
import laserResurfacingFaqs from "./faqs/laser-resurfacing.json";
import laserResurfacingExpectations from "./expectations/laser-resurfacing.json";
import wrinkleReducersServices from "./services/wrinkle-reducers.json";
import wrinkleReducersOptions from "./options/wrinkle-reducers.json";
import wrinkleReducersPromos from "./promos/wrinkle-reducers.json";
import wrinkleReducersAddons from "./addons/wrinkle-reducers.json";
import wrinkleReducersFaqs from "./faqs/wrinkle-reducers.json";
import wrinkleReducersExpectations from "./expectations/wrinkle-reducers.json";
import collagenBiostimulatorsServices from "./services/collagen-biostimulators.json";
import collagenBiostimulatorsOptions from "./options/collagen-biostimulators.json";
import collagenBiostimulatorsPromos from "./promos/collagen-biostimulators.json";
import collagenBiostimulatorsAddons from "./addons/collagen-biostimulators.json";
import collagenBiostimulatorsFaqs from "./faqs/collagen-biostimulators.json";
import collagenBiostimulatorsExpectations from "./expectations/collagen-biostimulators.json";
import dermalFillersServices from "./services/dermal-fillers.json";
import dermalFillersOptions from "./options/dermal-fillers.json";
import dermalFillersPromos from "./promos/dermal-fillers.json";
import dermalFillersAddons from "./addons/dermal-fillers.json";
import dermalFillersFaqs from "./faqs/dermal-fillers.json";
import dermalFillersExpectations from "./expectations/dermal-fillers.json";
import facialsServices from "./services/facials.json";
import facialsOptions from "./options/facials.json";
import facialsPromos from "./promos/facials.json";
import facialsAddons from "./addons/facials.json";
import facialsFaqs from "./faqs/facials.json";
import facialsExpectations from "./expectations/facials.json";
import bodyTreatmentsServices from "./services/body-medical-treatments.json";
import bodyTreatmentsOptions from "./options/body-medical-treatments.json";
import bodyTreatmentsPromos from "./promos/body-medical-treatments.json";
import bodyTreatmentsAddons from "./addons/body-medical-treatments.json";
import bodyTreatmentsFaqs from "./faqs/body-medical-treatments.json";
import bodyTreatmentsExpectations from "./expectations/body-medical-treatments.json";
import microneedlingServices from "./services/microneedling-mesotherapy.json";
import microneedlingOptions from "./options/microneedling-mesotherapy.json";
import microneedlingPromos from "./promos/microneedling-mesotherapy.json";
import microneedlingAddons from "./addons/microneedling-mesotherapy.json";
import microneedlingFaqs from "./faqs/microneedling-mesotherapy.json";
import microneedlingExpectations from "./expectations/microneedling-mesotherapy.json";
import skinTighteningServices from "./services/skin-tightening.json";
import skinTighteningOptions from "./options/skin-tightening.json";
import skinTighteningPromos from "./promos/skin-tightening.json";
import skinTighteningAddons from "./addons/skin-tightening.json";
import skinTighteningFaqs from "./faqs/skin-tightening.json";
import skinTighteningExpectations from "./expectations/skin-tightening.json";
import podiatryServices from "./services/podiatry.json";
import podiatryOptions from "./options/podiatry.json";
import podiatryPromos from "./promos/podiatry.json";
import podiatryAddons from "./addons/podiatry.json";
import podiatryFaqs from "./faqs/podiatry.json";
import podiatryExpectations from "./expectations/podiatry.json";
import sharedPromoOptions from "./promos/shared-options.json";
import packages from "./packages.json";

const translations = [
  ...laserResurfacingTranslations,
  ...wrinkleReducersTranslations,
  ...collagenBiostimulatorsTranslations,
  ...dermalFillersTranslations,
  ...facialsTranslations,
  ...bodyTreatmentsTranslations,
  ...microneedlingTranslations,
  ...skinTighteningTranslations,
  ...podiatryTranslations,
];
const translationMap = new Map(translations.map((entry) => [entry.id, entry]));
const categoryMap = new Map(categories.map((entry) => [entry.id, entry]));
const sharedPromoOptionsMap = new Map(
  (sharedPromoOptions || []).map((entry) => [entry.id, entry])
);

const getTranslation = (key) => {
  const entry = translationMap.get(key);
  if (!entry) return { en: "", es: "" };
  return { en: entry.en || "", es: entry.es || "" };
};

const buildNotes = (keys = []) =>
  keys
    .map((key) => getTranslation(key))
    .filter((note) => note.en || note.es);

const buildBeforeAfterGallery = (service = {}) => {
  const items = Array.isArray(service.beforeAfterGallery)
    ? service.beforeAfterGallery
    : [];
  const fallbackAltKey = service.nameKey || "";
  const normalizedBasePath = String(service.beforeAfterBasePath || "").trim();
  const basePath = normalizedBasePath.replace(/\/$/, "");
  const rawExtension = String(service.beforeAfterFileExtension || "jpg").trim();
  const normalizedExtension = rawExtension.replace(/^\./, "") || "jpg";

  return items
    .map((item) => {
      const id = String(item?.id || "").trim();
      const beforeSrc =
        (typeof item?.beforeSrc === "string" && item.beforeSrc) ||
        (id && basePath ? `${basePath}/${id}-before.${normalizedExtension}` : "");
      const afterSrc =
        (typeof item?.afterSrc === "string" && item.afterSrc) ||
        (id && basePath ? `${basePath}/${id}-after.${normalizedExtension}` : "");

      if (!beforeSrc || !afterSrc) return null;

      const caption = item.captionKey ? getTranslation(item.captionKey) : null;
      return {
        ...(id ? { id } : {}),
        beforeSrc,
        afterSrc,
        alt: getTranslation(item.altKey || fallbackAltKey),
        ...(caption && (caption.en || caption.es) ? { caption } : {}),
      };
    })
    .filter(Boolean);
};

const serviceIdToSlug = new Map([["svc_serum_add_ons", "serum-add-ons"]]);

const buildExpectations = (items = []) => {
  const result = { preTreatment: [], duringTreatment: [], postTreatment: [] };
  items.forEach((item) => {
    const localized = getTranslation(item.textKey);
    if (!(localized.en || localized.es)) return;
    if (item.phase === "pre") result.preTreatment.push(localized);
    if (item.phase === "during") result.duringTreatment.push(localized);
    if (item.phase === "post") result.postTreatment.push(localized);
  });
  return result;
};

const buildFaqs = (items = []) =>
  items.map((item) => ({
    question: getTranslation(item.questionKey),
    answer: getTranslation(item.answerKey),
  }));

const buildAddOns = (items = []) =>
  items.map((item) => ({
    treatmentSlug: serviceIdToSlug.get(item.childServiceId) || item.childServiceId,
    optionName: getTranslation(item.optionNameKey),
  }));

const optionById = new Map();

const resolveOptionUnitPrice = (option) => {
  if (!option) return null;
  const promoPrice =
    option.isOptionPromoActive && option.promoPrice && typeof option.promoPrice === "object"
      ? option.promoPrice
      : null;
  const basePrice = option.price && typeof option.price === "object" ? option.price : null;
  const selected = promoPrice?.amount != null ? promoPrice : basePrice;
  if (!selected || selected.amount == null) return null;
  return {
    amount: selected.amount,
    currency: selected.currency || basePrice?.currency || promoPrice?.currency || "",
  };
};

const computePackageEditionPrice = (edition) => {
  const components = Array.isArray(edition?.components) ? edition.components : [];
  if (!components.length) return edition.price || null;

  let total = 0;
  let currency = "";
  for (const component of components) {
    if (!component?.optionId) return edition.price || null;
    const option = optionById.get(component.optionId);
    const unitPrice = resolveOptionUnitPrice(option);
    if (!unitPrice) return edition.price || null;
    const qty = Number.isFinite(component.quantity) ? component.quantity : 1;
    total += unitPrice.amount * qty;
    if (!currency) currency = unitPrice.currency || "";
    if (unitPrice.currency && currency && unitPrice.currency !== currency) {
      return edition.price || null;
    }
  }

  if (!Number.isFinite(total)) return edition.price || null;
  return {
    amount: total,
    currency: currency || "USD",
  };
};

const derivePackageRelatedServiceIds = (pkg, sourceServiceId) => {
  const explicit = Array.isArray(pkg?.relatedServiceIds) ? pkg.relatedServiceIds : [];
  const explicitNormalized = Array.from(
    new Set(
      explicit
        .map((serviceId) => String(serviceId || "").trim())
        .filter((serviceId) => serviceId && serviceId !== sourceServiceId)
    )
  );
  if (explicitNormalized.length > 0) return explicitNormalized;

  const inferred = new Set();
  (pkg?.editions || []).forEach((edition) => {
    (edition?.components || []).forEach((component) => {
      const optionServiceId = optionById.get(component?.optionId)?.serviceId;
      if (!optionServiceId || optionServiceId === sourceServiceId) return;
      inferred.add(optionServiceId);
    });
  });
  return Array.from(inferred);
};

const buildPackagesForService = (serviceId, servicePackageIds = []) => {
  const allowlist = Array.isArray(servicePackageIds) && servicePackageIds.length
    ? new Set(servicePackageIds)
    : null;

  return (packages || [])
    .filter((pkg) => {
      if (pkg.sourceServiceId !== serviceId) return false;
      if (!allowlist) return true;
      return allowlist.has(pkg.id);
    })
    .map((pkg) => ({
      packageId: pkg.id,
      sourceServiceId: pkg.sourceServiceId || serviceId,
      relatedServiceIds: derivePackageRelatedServiceIds(pkg, serviceId),
      title: getTranslation(pkg.titleKey),
      validTill: pkg.validTill || "",
      notes: buildNotes(pkg.notesKeys || []),
      options: (pkg.editions || []).map((edition) => ({
        editionId: edition.id,
        label: getTranslation(edition.labelKey),
        price: computePackageEditionPrice(edition),
      })),
    }));
};

const normalizePromoType = (value) => {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  return raw === "weekly" ? "weekly" : "seasonal";
};

const buildPromoDetails = (dataset, serviceId) => {
  const promo = dataset.promos.find((entry) => entry.serviceId === serviceId);
  if (!promo) return null;
  const promoType = normalizePromoType(promo.promoType);
  const promoWeeklySchedule = promo.weeklySchedule || null;
  const shared = promo.sharedOptionsId
    ? sharedPromoOptionsMap.get(promo.sharedOptionsId)
    : null;
  const optionTypeByKey = new Map(
    (dataset.options || []).map((opt) => [opt.nameKey, opt.optionType || ""])
  );
  const mergedOptions = [
    ...(shared?.options || []).map((opt) => ({ ...opt, __isShared: true })),
    ...((promo.options || []).map((opt) => ({ ...opt, __isShared: false })) || []),
  ];
  return {
    promoType,
    weeklySchedule: promoWeeklySchedule,
    validFrom: promo.validFrom,
    validTill: {
      en: promo.validTill || shared?.validTill || "",
      es: promo.validTill || shared?.validTill || "",
    },
    headline: getTranslation(promo.headlineKey),
    description: getTranslation(promo.descriptionKey),
    descriptionLink: promo.descriptionLink
      ? typeof promo.descriptionLink === "object"
        ? {
            en: promo.descriptionLink.en || promo.descriptionLink.es || "",
            es: promo.descriptionLink.es || promo.descriptionLink.en || "",
          }
        : { en: promo.descriptionLink, es: promo.descriptionLink }
      : null,
    summaryName: getTranslation(promo.summaryNameKey),
    filterConfig: promo.filterConfig
      ? {
          defaultKey: promo.filterConfig.defaultKey,
          viewAllLabel: getTranslation(promo.filterConfig.viewAllLabelKey),
          filters: (promo.filterConfig.filters || []).map((filter) => ({
            key: filter.key,
            label: getTranslation(filter.labelKey),
          })),
        }
      : null,
    options: mergedOptions.map((opt) => ({
      promoType: normalizePromoType(opt.promoType || promoType),
      weeklySchedule:
        opt.weeklySchedule ||
        (opt.__isShared ? shared?.weeklySchedule : null) ||
        promoWeeklySchedule,
      optionKey: opt.optionNameKey,
      optionName: getTranslation(opt.optionNameKey),
      notes: buildNotes(opt.notesKeys),
      validFrom: opt.validFrom ? { en: opt.validFrom, es: opt.validFrom } : null,
      validTill: opt.validTill ? { en: opt.validTill, es: opt.validTill } : null,
      groupKey: opt.groupKey || "",
      packageId: opt.packageId || (opt.__isShared ? shared?.packageId : "") || "",
      optionType: opt.optionType || optionTypeByKey.get(opt.optionNameKey) || "",
      isPackage:
        (opt.optionType || optionTypeByKey.get(opt.optionNameKey)) === "package" ||
        Boolean(opt.packageId || (opt.__isShared ? shared?.packageId : "")),
    })),
  };
};

const buildPricingOptions = (dataset, serviceId) => {
  return dataset.options
    .filter((opt) => opt.serviceId === serviceId)
    .map((opt) => {
      const optionPrice = { ...(opt.price || {}) };
      if (opt.priceTextKey) {
        optionPrice.text = getTranslation(opt.priceTextKey);
      }
      return {
        id: opt.id,
        optionKey: opt.nameKey,
        optionName: getTranslation(opt.nameKey),
        packageId: opt.packageId || "",
        optionType: opt.optionType || "",
        optionPrice,
        isOptionPromoActive: opt.isOptionPromoActive ?? false,
        optionPromoPrice: opt.promoPrice ?? null,
        filterGroupKey: opt.filterGroupKey || "",
        linkedPackageIds: Array.isArray(opt.linkedPackageIds) ? opt.linkedPackageIds : [],
        notes: buildNotes(opt.notesKeys),
      };
    });
};

const buildService = (dataset, service) => {
  const category = categoryMap.get(service.categoryId);
  return {
    serviceId: service.id,
    urlSlug: service.slug,
    category: category?.slug || "",
    categoryDisplayName: getTranslation(category?.nameKey || ""),
    serviceDisplayName: getTranslation(service.nameKey),
    isPopular: service.isPopular || false,
    isPromoActive: service.isPromoActive || false,
    images: service.images || {},
    beforeAfterGallery: buildBeforeAfterGallery(service),
    description: getTranslation(service.descriptionKey),
    details: getTranslation(service.detailsKey),
    notes: buildNotes(service.notesKeys),
    filterConfig: service.filterConfig
      ? {
          defaultKey: service.filterConfig.defaultKey,
          viewAllLabel: getTranslation(service.filterConfig.viewAllLabelKey),
          filters: (service.filterConfig.filters || []).map((filter) => ({
            key: filter.key,
            label: getTranslation(filter.labelKey),
          })),
        }
      : null,
    pricing: {
      options: buildPricingOptions(dataset, service.id),
    },
    promoDetails: buildPromoDetails(dataset, service.id),
    packages: buildPackagesForService(service.id, service.packageIds),
    goals: buildNotes(service.goalsKeys),
    treatableAreas: buildNotes(service.treatableAreaKeys),
    addOns: buildAddOns(dataset.addons.filter((a) => a.parentServiceId === service.id)),
    expectations: buildExpectations(dataset.expectations.filter((e) => e.serviceId === service.id)),
    faq: buildFaqs(dataset.faqs.filter((f) => f.serviceId === service.id)),
  };
};

const datasets = [
  {
    services: laserResurfacingServices,
    options: laserResurfacingOptions,
    promos: laserResurfacingPromos,
    addons: laserResurfacingAddons,
    faqs: laserResurfacingFaqs,
    expectations: laserResurfacingExpectations,
  },
  {
    services: wrinkleReducersServices,
    options: wrinkleReducersOptions,
    promos: wrinkleReducersPromos,
    addons: wrinkleReducersAddons,
    faqs: wrinkleReducersFaqs,
    expectations: wrinkleReducersExpectations,
  },
  {
    services: collagenBiostimulatorsServices,
    options: collagenBiostimulatorsOptions,
    promos: collagenBiostimulatorsPromos,
    addons: collagenBiostimulatorsAddons,
    faqs: collagenBiostimulatorsFaqs,
    expectations: collagenBiostimulatorsExpectations,
  },
  {
    services: dermalFillersServices,
    options: dermalFillersOptions,
    promos: dermalFillersPromos,
    addons: dermalFillersAddons,
    faqs: dermalFillersFaqs,
    expectations: dermalFillersExpectations,
  },
  {
    services: facialsServices,
    options: facialsOptions,
    promos: facialsPromos,
    addons: facialsAddons,
    faqs: facialsFaqs,
    expectations: facialsExpectations,
  },
  {
    services: bodyTreatmentsServices,
    options: bodyTreatmentsOptions,
    promos: bodyTreatmentsPromos,
    addons: bodyTreatmentsAddons,
    faqs: bodyTreatmentsFaqs,
    expectations: bodyTreatmentsExpectations,
  },
  {
    services: microneedlingServices,
    options: microneedlingOptions,
    promos: microneedlingPromos,
    addons: microneedlingAddons,
    faqs: microneedlingFaqs,
    expectations: microneedlingExpectations,
  },
  {
    services: skinTighteningServices,
    options: skinTighteningOptions,
    promos: skinTighteningPromos,
    addons: skinTighteningAddons,
    faqs: skinTighteningFaqs,
    expectations: skinTighteningExpectations,
  },
  {
    services: podiatryServices,
    options: podiatryOptions,
    promos: podiatryPromos,
    addons: podiatryAddons,
    faqs: podiatryFaqs,
    expectations: podiatryExpectations,
  },
];

datasets.forEach((dataset) => {
  (dataset.options || []).forEach((opt) => {
    if (opt?.id) optionById.set(opt.id, opt);
  });
});

datasets.forEach((dataset) => {
  dataset.services.forEach((service) => {
    if (service?.id && service?.slug) {
      serviceIdToSlug.set(service.id, service.slug);
    }
  });
});

const normalizedTreatments = datasets.flatMap((dataset) =>
  dataset.services.map((service) => buildService(dataset, service))
);

if (process.env.NODE_ENV !== "production") {
  void import("./schema")
    .then((mod) => {
      if (typeof mod.validateNormalizedTreatments === "function") {
        mod.validateNormalizedTreatments(normalizedTreatments);
      } else {
        console.warn("[normalized] schema validator unavailable.");
      }
    })
    .catch((error) => {
      console.error("[normalized] schema validation import failed:", error);
    });
}

export { normalizedTreatments };
