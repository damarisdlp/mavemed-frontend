import { formatMoney, formatMoneyRange } from "./price";
import { allTreatments } from "@/lib/data/allTreatments";
import { getLocalized as getLocalizedValue } from "@/lib/i18n/getLocalized";

const getLocalized = (field, locale) => {
  if (field == null) return "";
  if (typeof field === "object") {
    if (field.text && typeof field.text === "object") {
      return getLocalizedValue(field.text, locale);
    }
    if ("minAmount" in field || "maxAmount" in field) {
      return formatMoneyRange(field.minAmount, field.maxAmount);
    }
    if ("amount" in field) return formatMoney(field.amount);
  }
  return getLocalizedValue(field, locale);
};

const getLocalizedPrice = (field, locale) => {
  if (field == null) return "";
  if (typeof field === "object") {
    if (field.text && typeof field.text === "object") {
      return getLocalizedValue(field.text, locale);
    }
    if ("minAmount" in field || "maxAmount" in field) {
      return formatMoneyRange(field.minAmount, field.maxAmount);
    }
    if ("amount" in field) return formatMoney(field.amount);
    return getLocalized(field, locale);
  }
  return field;
};

const buildPackageRegistry = (locale) => {
  const registry = new Map();

  allTreatments.forEach((treatment) => {
    const packages = treatment?.packages || [];
    if (!packages.length) return;

    packages.forEach((pkg) => {
      const packageId = pkg.packageId || pkg.id;
      if (!packageId) return;

      const title = getLocalized(pkg.title, locale);
      const validTill = getLocalized(pkg.validTill, locale);
      const notes = (pkg.notes || [])
        .map((note) => getLocalized(note, locale))
        .filter((text) => typeof text === "string" && text.trim() !== "");

      const options = (pkg.options || []).map((opt) => {
        const label = getLocalized(opt.label, locale);
        const priceText = opt.price ? getLocalizedPrice(opt.price, locale) : "";
        const currency = opt.price?.currency || "";
        return {
          label,
          priceText,
          promoPrice: priceText,
          currency,
        };
      });

      registry.set(packageId, {
        packageId,
        sourceServiceId: pkg.sourceServiceId || treatment?.serviceId || "",
        relatedServiceIds: Array.isArray(pkg.relatedServiceIds) ? pkg.relatedServiceIds : [],
        title,
        validTill,
        notes,
        options,
      });
    });
  });

  return registry;
};

const getPackageRegistry = (locale) => {
  return buildPackageRegistry(locale);
};

const getLinkedPackageGroups = (packageIds, locale, packageRegistry = null) => {
  if (!Array.isArray(packageIds) || packageIds.length === 0) return [];
  const registry = packageRegistry || getPackageRegistry(locale);
  return packageIds
    .map((pkgId) => registry.get(pkgId))
    .filter(Boolean)
    .map((entry) => ({
      packageId: entry.packageId,
      title: entry.title,
      validTill: entry.validTill,
      notes: entry.notes || [],
      options: entry.options || [],
    }));
};

const getLinkedPackageGroupsForTreatment = (treatment, locale) => {
  if (!treatment) return [];
  const linkedPackageIds = Array.from(
    new Set(
      (treatment?.pricing?.options || [])
        .flatMap((opt) => (Array.isArray(opt?.linkedPackageIds) ? opt.linkedPackageIds : []))
        .filter(Boolean)
    )
  );
  return getLinkedPackageGroups(linkedPackageIds, locale);
};

const getPackageGroupsForTreatment = (treatment, locale) => {
  if (!treatment) return [];
  const registry = getPackageRegistry(locale);
  const currentServiceId = String(treatment?.serviceId || "").trim();
  const sourcePackageIds = Array.isArray(treatment?.packages)
    ? treatment.packages.map((pkg) => pkg.packageId).filter(Boolean)
    : [];
  const linkedPackageIds = Array.from(
    new Set(
      (treatment?.pricing?.options || [])
        .flatMap((opt) => (Array.isArray(opt?.linkedPackageIds) ? opt.linkedPackageIds : []))
        .filter(Boolean)
    )
  );
  const relatedPackageIds = currentServiceId
    ? Array.from(registry.values())
        .filter((entry) => {
          if (!entry?.packageId || entry.sourceServiceId === currentServiceId) return false;
          return Array.isArray(entry.relatedServiceIds)
            ? entry.relatedServiceIds.includes(currentServiceId)
            : false;
        })
        .map((entry) => entry.packageId)
    : [];
  const allIds = Array.from(
    new Set([...sourcePackageIds, ...linkedPackageIds, ...relatedPackageIds])
  );
  return getLinkedPackageGroups(allIds, locale, registry);
};

export {
  getLinkedPackageGroups,
  getLinkedPackageGroupsForTreatment,
  getPackageGroupsForTreatment,
};
