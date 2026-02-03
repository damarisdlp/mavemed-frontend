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
        title,
        validTill,
        notes,
        options,
      });
    });
  });

  return registry;
};

const packageRegistryByLocale = new Map();

const getPackageRegistry = (locale) => {
  if (packageRegistryByLocale.has(locale)) {
    return packageRegistryByLocale.get(locale);
  }
  const registry = buildPackageRegistry(locale);
  packageRegistryByLocale.set(locale, registry);
  return registry;
};

const getLinkedPackageGroups = (packageIds, locale) => {
  if (!Array.isArray(packageIds) || packageIds.length === 0) return [];
  const registry = getPackageRegistry(locale);
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
  const allIds = Array.from(new Set([...sourcePackageIds, ...linkedPackageIds]));
  return getLinkedPackageGroups(allIds, locale);
};

export {
  getLinkedPackageGroups,
  getLinkedPackageGroupsForTreatment,
  getPackageGroupsForTreatment,
};
