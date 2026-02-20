import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { getPromoSummary, getPromoOptions } from "@/lib/utils/promo";
import { formatMoney, formatMoneyRange, getPriceMinValue } from "@/lib/utils/price";
import { getLocalized } from "@/lib/i18n/getLocalized";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";

const normalizeName = (value) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const isPackageOption = (opt) => opt?.option?.optionType === "package";

const parsePromoDate = (value) => {
  if (!value) return null;
  const raw = typeof value === "object" ? value.en || value.es : value;
  if (!raw || typeof raw !== "string") return null;
  const date = new Date(`${raw}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
};

const getDaysLeft = (untilDate) => {
  if (!untilDate) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(untilDate);
  end.setHours(0, 0, 0, 0);
  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? diff : null;
};

const formatPackagePrice = (price, locale) => {
  if (!price) return "";
  if (price.text && typeof price.text === "object") {
    return getLocalized(price.text, locale);
  }
  if ("minAmount" in price || "maxAmount" in price) {
    return formatMoneyRange(price.minAmount, price.maxAmount);
  }
  if ("amount" in price) return formatMoney(price.amount);
  return "";
};

const PROMO_TYPE_SEASONAL = "seasonal";
const PROMO_TYPE_WEEKLY = "weekly";
const WEEKDAY_INDEX_BY_NAME = {
  sunday: 0,
  sun: 0,
  monday: 1,
  mon: 1,
  tuesday: 2,
  tue: 2,
  tues: 2,
  wednesday: 3,
  wed: 3,
  thursday: 4,
  thu: 4,
  thur: 4,
  thurs: 4,
  friday: 5,
  fri: 5,
  saturday: 6,
  sat: 6,
};

const normalizePromoTypeFilter = (value) =>
  String(value || "").toLowerCase() === PROMO_TYPE_WEEKLY
    ? PROMO_TYPE_WEEKLY
    : PROMO_TYPE_SEASONAL;

const normalizeWeekday = (value) => {
  if (Number.isInteger(value) && value >= 0 && value <= 6) return value;
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  if (raw === "") return null;
  const numeric = Number(raw);
  if (Number.isInteger(numeric) && numeric >= 0 && numeric <= 6) return numeric;
  return WEEKDAY_INDEX_BY_NAME[raw] ?? null;
};

const getMondayFirstWeekdayIndex = (weekday) => {
  if (!Number.isInteger(weekday)) return null;
  if (weekday < 0 || weekday > 6) return null;
  return weekday === 0 ? 7 : weekday;
};

const getWeeklySortIndexFromSchedule = (weeklySchedule) => {
  if (!weeklySchedule || typeof weeklySchedule !== "object") return null;
  const rawDays = Array.isArray(weeklySchedule.daysOfWeek) ? weeklySchedule.daysOfWeek : [];
  const normalizedDays = Array.from(
    new Set(rawDays.map(normalizeWeekday).filter((day) => day != null))
  );
  if (!normalizedDays.length) return null;
  const mondayFirstDays = normalizedDays
    .map((day) => getMondayFirstWeekdayIndex(day))
    .filter((day) => day != null);
  if (!mondayFirstDays.length) return null;
  return Math.min(...mondayFirstDays);
};

const getWeeklySortIndexFromPromoOptions = (promoOptions = []) => {
  const values = (promoOptions || [])
    .map((opt) => getWeeklySortIndexFromSchedule(opt?.weeklySchedule))
    .filter((value) => Number.isFinite(value));
  if (!values.length) return null;
  return Math.min(...values);
};

const formatWeeklyScheduleLabel = (weeklySchedule, locale) => {
  if (!weeklySchedule || typeof weeklySchedule !== "object") return "";
  const rawDays = Array.isArray(weeklySchedule.daysOfWeek) ? weeklySchedule.daysOfWeek : [];
  const normalizedDays = Array.from(
    new Set(rawDays.map(normalizeWeekday).filter((day) => day != null))
  ).sort((a, b) => a - b);
  if (!normalizedDays.length) return "";
  const dayNames =
    locale === "es"
      ? ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
      : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return normalizedDays.map((day) => dayNames[day]).join(", ");
};

const getWeeklyLabelFromPromoOptions = (promoOptions, locale) => {
  const labels = Array.from(
    new Set(
      (promoOptions || [])
        .map((opt) => formatWeeklyScheduleLabel(opt?.weeklySchedule, locale))
        .filter(Boolean)
    )
  );
  return labels.join(" / ");
};

const buildPromoCategories = (allTreatments, locale, options = {}) => {
  const { pricePrefix = "", promoTypeFilter = PROMO_TYPE_SEASONAL } = options;
  const normalizedPromoTypeFilter = normalizePromoTypeFilter(promoTypeFilter);
  const ignoreWeeklySchedule = normalizedPromoTypeFilter === PROMO_TYPE_WEEKLY;
  const getPromoOptionsForTreatment = (treatment) =>
    getPromoOptions(treatment, locale, {
      promoTypeFilter: normalizedPromoTypeFilter,
      ignoreWeeklySchedule,
      excludeLinkedPackageOptions: false,
    });

  const packageRegistry = new Map();
  allTreatments.forEach((t) => {
    (t.packages || []).forEach((pkg) => {
      if (!pkg?.packageId) return;
      packageRegistry.set(pkg.packageId, { pkg, source: t });
    });
  });

  const getPackagePromoOptionsFromSource = (packageId) => {
    const sourceEntry = packageRegistry.get(packageId);
    if (!sourceEntry?.source) return [];
    return getPromoOptionsForTreatment(sourceEntry.source).filter(
      (promoOption) => promoOption?.option?.packageId === packageId
    );
  };

  const getLinkedPackageIds = (t) => {
    const currentServiceId = String(t?.serviceId || "").trim();
    const linkedPromoOptions = getPromoOptionsForTreatment(t).filter((promoOption) =>
      Array.isArray(promoOption?.option?.linkedPackageIds)
    );
    const linkedFromPromoOptions = linkedPromoOptions.flatMap((promoOption) =>
      Array.isArray(promoOption?.option?.linkedPackageIds)
        ? promoOption.option.linkedPackageIds
        : []
    );
    const linkedFromAllPricingOptions = (t?.pricing?.options || []).flatMap((option) =>
      Array.isArray(option?.linkedPackageIds) ? option.linkedPackageIds : []
    );
    const linkedFromSourcePromo = linkedFromAllPricingOptions.filter((pkgId) => {
      if (!pkgId) return false;
      return getPackagePromoOptionsFromSource(pkgId).length > 0;
    });
    const linkedFromRelatedServices = currentServiceId
      ? Array.from(packageRegistry.values())
          .filter(({ pkg }) => {
            if (!pkg?.packageId) return false;
            if (String(pkg?.sourceServiceId || "").trim() === currentServiceId) return false;
            if (!Array.isArray(pkg?.relatedServiceIds)) return false;
            if (!pkg.relatedServiceIds.includes(currentServiceId)) return false;
            return getPackagePromoOptionsFromSource(pkg.packageId).length > 0;
          })
          .map(({ pkg }) => pkg.packageId)
      : [];
    return Array.from(
      new Set(
        [...linkedFromPromoOptions, ...linkedFromSourcePromo, ...linkedFromRelatedServices]
      )
    ).filter(Boolean);
  };
  const hasLinkedPackages = (t) => getLinkedPackageIds(t).length > 0;

  const promoTreatments = allTreatments.filter(
    (t) =>
      getPromoSummary(t, locale, {
        promoTypeFilter: normalizedPromoTypeFilter,
        ignoreWeeklySchedule,
      }).isPromoActive ||
      hasLinkedPackages(t)
  );

  const getCategoryKeyForTreatment = (treatment) =>
    treatment?.category || getLocalized(treatment?.categoryDisplayName, locale) || "Other";
  const promoCategoryKeys = new Set(promoTreatments.map((t) => getCategoryKeyForTreatment(t)));
  const packageCategoryOwnerById = new Map();
  const shouldDisplayPackageInCategory = (packageId, currentCategoryKey) => {
    if (!packageId) return true;
    if (packageCategoryOwnerById.has(packageId)) {
      return packageCategoryOwnerById.get(packageId) === currentCategoryKey;
    }
    const sourceEntry = packageRegistry.get(packageId);
    const sourceCategoryKey = sourceEntry?.source
      ? getCategoryKeyForTreatment(sourceEntry.source)
      : null;
    const ownerCategoryKey =
      sourceCategoryKey && promoCategoryKeys.has(sourceCategoryKey)
        ? sourceCategoryKey
        : currentCategoryKey;
    packageCategoryOwnerById.set(packageId, ownerCategoryKey);
    return ownerCategoryKey === currentCategoryKey;
  };

  const categoriesMap = {};
  const packageKeysByCategory = new Map();
  promoTreatments.forEach((t) => {
    const promoDetails = t.promoDetails || null;
    const promoOptions = getPromoOptions(t, locale, {
      promoTypeFilter: normalizedPromoTypeFilter,
      ignoreWeeklySchedule,
      excludeLinkedPackageOptions: true,
    });
    const linkedPackageIds = getLinkedPackageIds(t);
    const hasLinkedPackagesForTreatment = linkedPackageIds.length > 0;
    if (!promoOptions.length && !(t.packages || []).length && !hasLinkedPackagesForTreatment) {
      return;
    }
    const catKey = getCategoryKeyForTreatment(t);
    if (!categoriesMap[catKey]) {
      categoriesMap[catKey] = {
        title: t.categoryDisplayName || catKey,
        cards: [],
      };
    }
    const packageKeySet = packageKeysByCategory.get(catKey) || new Set();
    const optionValidTillMap = new Map(
      (promoDetails?.options || [])
        .map((opt) => {
          const key = opt?.optionKey || getLocalized(opt?.optionName, locale);
          const validTill = getLocalized(opt?.validTill, locale);
          return key ? [normalizeName(key), validTill] : null;
        })
        .filter(Boolean)
    );

    const promoDescription = getLocalized(promoDetails?.description, locale);
    const description = promoDescription || getLocalized(t.description, locale);
    const serviceName = getLocalized(t.serviceDisplayName, locale);
    const serviceOptions = promoOptions.filter((opt) => !isPackageOption(opt));
    const packageOptions = promoOptions.filter((opt) => isPackageOption(opt));
    if (serviceOptions.length > 0) {
      const sorted = [...serviceOptions].sort((a, b) => a.value - b.value);
      const lowest = sorted[0];
      const pricePrefixLabel =
        serviceOptions.length > 1 && pricePrefix ? `${pricePrefix} ` : "";
      const price = `${pricePrefixLabel}${lowest.promoPrice}${
        lowest.currency ? ` ${lowest.currency}` : ""
      }`;
      const summaryName = promoDetails?.summaryName
        ? getLocalized(promoDetails.summaryName, locale)
        : "";
      const singlePromoOption =
        serviceOptions.length === 1 && promoDetails?.options?.length === 1
          ? promoDetails.options[0]
          : null;
      const singlePromoOptionName = singlePromoOption
        ? getLocalized(singlePromoOption.optionName, locale)
        : "";
      const serviceOptionValidTills = serviceOptions
        .map((opt) => {
          const optKey = opt.option?.optionKey || getLocalized(opt.option?.optionName, locale);
          return (
            optionValidTillMap.get(normalizeName(optKey)) ||
            getLocalized(promoDetails?.validTill, locale) ||
            ""
          );
        })
        .filter(Boolean);
      if (singlePromoOption?.validTill) {
        serviceOptionValidTills.push(getLocalized(singlePromoOption.validTill, locale));
      }
      const hasUniformValidTill =
        serviceOptionValidTills.length > 0 &&
        serviceOptionValidTills.every((value) => value === serviceOptionValidTills[0]);
      const serviceValidTillValue = hasUniformValidTill ? serviceOptionValidTills[0] : null;
      const serviceValidTillDate = parsePromoDate(serviceValidTillValue);
      const serviceValidTillLabel = serviceValidTillDate
        ? new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(serviceValidTillDate)
        : null;
      const serviceDaysLeft = getDaysLeft(serviceValidTillDate);
      const serviceOptionName =
        serviceOptions.length === 1
          ? summaryName || singlePromoOptionName || serviceName
          : summaryName || serviceName;
      const serviceWeeklySortIndex =
        normalizedPromoTypeFilter === PROMO_TYPE_WEEKLY
          ? getWeeklySortIndexFromPromoOptions(serviceOptions)
          : null;

      categoriesMap[catKey].cards.push({
        optionName: serviceOptionName,
        description,
        price,
        priceValue: Number.isFinite(lowest?.value) ? lowest.value : null,
        image: t.images?.primary || "/placeholder.jpg",
        slug: t.urlSlug,
        validTillLabel: serviceValidTillLabel,
        daysLeft: serviceDaysLeft,
        weeklyLabel:
          normalizedPromoTypeFilter === PROMO_TYPE_WEEKLY
            ? getWeeklyLabelFromPromoOptions(serviceOptions, locale)
            : "",
        weeklySortIndex: serviceWeeklySortIndex,
        isPackage: false,
      });
    }

    if (linkedPackageIds.length > 0) {
      const linkedPackages = linkedPackageIds
        .map((pkgId) => packageRegistry.get(pkgId))
        .filter(Boolean);
      const order = ["prp", "pn", "pdrn"];
      linkedPackages.sort((a, b) => {
        const aKey = (a.pkg?.title?.en || a.pkg?.title || "").toLowerCase();
        const bKey = (b.pkg?.title?.en || b.pkg?.title || "").toLowerCase();
        const aRank = order.findIndex((key) => aKey.includes(key));
        const bRank = order.findIndex((key) => bKey.includes(key));
        if (aRank !== bRank) return (aRank === -1 ? 99 : aRank) - (bRank === -1 ? 99 : bRank);
        return aKey.localeCompare(bKey);
      });

      linkedPackages.forEach(({ pkg, source }) => {
        if (!pkg?.packageId || packageKeySet.has(pkg.packageId)) return;
        if (!shouldDisplayPackageInCategory(pkg.packageId, catKey)) return;
        const priceEntries = (pkg.options || [])
          .map((opt) => ({
            price: opt.price || null,
            currency: opt.price?.currency || "",
          }))
          .filter((entry) => entry.price);
        const lowestEntry = priceEntries
          .map((entry) => ({
            ...entry,
            value: getPriceMinValue(entry.price),
          }))
          .filter((entry) => Number.isFinite(entry.value))
          .sort((a, b) => a.value - b.value)[0];
        const hasMultiplePackageOptions = priceEntries.length > 1;
        const packagePricePrefix =
          hasMultiplePackageOptions && pricePrefix ? `${pricePrefix} ` : "";
        const packagePrice = lowestEntry
          ? `${packagePricePrefix}${formatPackagePrice(lowestEntry.price, locale)}${
              lowestEntry.currency ? ` ${lowestEntry.currency}` : ""
            }`
          : "";
        const packagePriceValue = lowestEntry?.value ?? null;
        const packageValidTillValue = getLocalized(pkg.validTill, locale) || "";
        const packageValidTillDate = parsePromoDate(packageValidTillValue);
        const packageValidTillLabel = packageValidTillDate
          ? new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(packageValidTillDate)
          : null;
        const packageDaysLeft = getDaysLeft(packageValidTillDate);
        const linkedPromoOptions = getPromoOptionsForTreatment(t).filter((promoOption) =>
          Array.isArray(promoOption?.option?.linkedPackageIds) &&
          promoOption.option.linkedPackageIds.includes(pkg.packageId)
        );
        const sourcePackagePromoOptions = getPackagePromoOptionsFromSource(pkg.packageId);
        const packageScheduleOptions = sourcePackagePromoOptions.length
          ? sourcePackagePromoOptions
          : linkedPromoOptions;
        categoriesMap[catKey].cards.push({
          optionName: getLocalized(pkg.title, locale),
          description,
          price: packagePrice,
          priceValue: packagePriceValue,
          image: source?.images?.primary || "/placeholder.jpg",
          slug: source?.urlSlug || t.urlSlug,
          validTillLabel: packageValidTillLabel,
          daysLeft: packageDaysLeft,
          weeklyLabel:
            normalizedPromoTypeFilter === PROMO_TYPE_WEEKLY
              ? getWeeklyLabelFromPromoOptions(packageScheduleOptions, locale)
              : "",
          weeklySortIndex:
            normalizedPromoTypeFilter === PROMO_TYPE_WEEKLY
              ? getWeeklySortIndexFromPromoOptions(packageScheduleOptions)
              : null,
          isPackage: true,
        });
        packageKeySet.add(pkg.packageId);
      });
    }

    const shouldRenderDirectPackageOptions = packageOptions.length > 0;
    if (shouldRenderDirectPackageOptions) {
      packageOptions.forEach((opt) => {
        const optName = getLocalized(opt.option?.optionName, locale);
        const optKey =
          opt.option?.optionKey || opt.option?.nameKey || opt.option?.id || optName;
        const normalizedKey = normalizeName(optKey);
        const packageEntryKey = opt.option?.packageId || normalizedKey;
        if (packageKeySet.has(packageEntryKey)) return;
        if (opt.option?.packageId && !shouldDisplayPackageInCategory(opt.option.packageId, catKey)) {
          return;
        }
        const optionValidTillValue =
          optionValidTillMap.get(normalizeName(optKey)) ||
          getLocalized(promoDetails?.validTill, locale) ||
          "";
        const optionValidTillDate = parsePromoDate(optionValidTillValue);
        const optionValidTillLabel = optionValidTillDate
          ? new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(optionValidTillDate)
          : null;
        const optionDaysLeft = getDaysLeft(optionValidTillDate);
        const packageWeeklySortIndex =
          normalizedPromoTypeFilter === PROMO_TYPE_WEEKLY
            ? getWeeklySortIndexFromSchedule(opt.weeklySchedule)
            : null;
        categoriesMap[catKey].cards.push({
          optionName: optName,
          description,
          price: `${opt.promoPrice}${opt.currency ? ` ${opt.currency}` : ""}`,
          priceValue: Number.isFinite(opt?.value) ? opt.value : null,
          image: t.images?.primary || "/placeholder.jpg",
          slug: t.urlSlug,
          validTillLabel: optionValidTillLabel,
          daysLeft: optionDaysLeft,
          weeklyLabel:
            normalizedPromoTypeFilter === PROMO_TYPE_WEEKLY
              ? formatWeeklyScheduleLabel(opt.weeklySchedule, locale)
              : "",
          weeklySortIndex: packageWeeklySortIndex,
          isPackage: true,
        });
        packageKeySet.add(packageEntryKey);
      });
    }
    packageKeysByCategory.set(catKey, packageKeySet);
  });

  return Object.values(categoriesMap).filter((cat) => cat.cards.length > 0);
};

export default function PromosPage({ promoCategoriesByType = {} }) {
  const router = useRouter();
  const locale = router.locale || "en";
  const { asPath } = router;
  const { t } = useTranslation("promos");
  const cardActionBaseClass =
    "inline-flex w-full items-center justify-center min-h-[36px] px-4 py-2 rounded-full text-xs leading-none transition text-center";
  const [promoTypeFilter, setPromoTypeFilter] = useState(PROMO_TYPE_SEASONAL);
  const [sortOption, setSortOption] = useState("default");
  const categoryMenuWheelCarryRef = useRef(0);
  const categories = useMemo(() => {
    const selectedType = normalizePromoTypeFilter(promoTypeFilter);
    if (
      promoCategoriesByType &&
      typeof promoCategoriesByType === "object" &&
      !Array.isArray(promoCategoriesByType)
    ) {
      return Array.isArray(promoCategoriesByType[selectedType])
        ? promoCategoriesByType[selectedType]
        : [];
    }
    return Array.isArray(promoCategoriesByType) ? promoCategoriesByType : [];
  }, [promoCategoriesByType, promoTypeFilter]);
  const [categoryMenuRef, categoryMenuInstanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: "auto", spacing: 12 },
  });
  const sortedCategories =
    sortOption === "default"
      ? (() => {
          const selectedType = normalizePromoTypeFilter(promoTypeFilter);
          if (selectedType !== PROMO_TYPE_WEEKLY) return categories;

          const getCardWeeklySortValue = (card) =>
            Number.isFinite(card?.weeklySortIndex) ? card.weeklySortIndex : Number.POSITIVE_INFINITY;
          const getCardPriceValue = (card) =>
            Number.isFinite(card?.priceValue) ? card.priceValue : Number.POSITIVE_INFINITY;
          const sortCardsByWeeklyOrder = (cards = []) =>
            [...cards].sort((a, b) => {
              const weeklyDiff = getCardWeeklySortValue(a) - getCardWeeklySortValue(b);
              if (weeklyDiff !== 0) return weeklyDiff;
              const priceDiff = getCardPriceValue(a) - getCardPriceValue(b);
              if (priceDiff !== 0) return priceDiff;
              return String(a?.optionName || "").localeCompare(String(b?.optionName || ""));
            });
          const getCategoryWeeklySortValue = (cards = []) => {
            const values = (cards || []).map(getCardWeeklySortValue).filter(Number.isFinite);
            return values.length ? Math.min(...values) : Number.POSITIVE_INFINITY;
          };

          return [...categories]
            .map((cat) => ({
              ...cat,
              cards: sortCardsByWeeklyOrder(cat.cards),
            }))
            .sort((a, b) => {
              const weeklyDiff =
                getCategoryWeeklySortValue(a.cards) - getCategoryWeeklySortValue(b.cards);
              if (weeklyDiff !== 0) return weeklyDiff;
              return getLocalized(a.title, locale).localeCompare(getLocalized(b.title, locale));
            });
        })()
      : (() => {
          const sortKey = sortOption.startsWith("days") ? "days" : "price";
          const sortDir = sortOption.endsWith("desc") ? "desc" : "asc";
          const getCardSortValue = (card) => {
            if (sortKey === "days") {
              return Number.isFinite(card.daysLeft) ? card.daysLeft : null;
            }
            return Number.isFinite(card.priceValue) ? card.priceValue : null;
          };
          const compareValues = (a, b) => {
            const aMissing = !Number.isFinite(a);
            const bMissing = !Number.isFinite(b);
            if (aMissing && bMissing) return 0;
            if (aMissing) return 1;
            if (bMissing) return -1;
            return sortDir === "asc" ? a - b : b - a;
          };
          const getCategorySortValue = (cards) => {
            const values = cards.map(getCardSortValue).filter(Number.isFinite);
            if (!values.length) return null;
            return sortDir === "asc" ? Math.min(...values) : Math.max(...values);
          };
          return categories
            .map((cat) => ({
              ...cat,
              cards: [...cat.cards].sort((a, b) =>
                compareValues(getCardSortValue(a), getCardSortValue(b))
              ),
            }))
            .sort((a, b) =>
              compareValues(getCategorySortValue(a.cards), getCategorySortValue(b.cards))
            );
        })();
  const promoEligibleCategories = sortedCategories.filter(
    (cat) => Array.isArray(cat.cards) && cat.cards.length > 0
  );
  const categoryMenuSignature = useMemo(
    () =>
      promoEligibleCategories
        .map((cat) => getLocalized(cat.title, locale).replace(/\s+/g, "-").toLowerCase())
        .join("|"),
    [promoEligibleCategories, locale]
  );

  useEffect(() => {
    if (!categoryMenuInstanceRef.current) return;
    const handle = window.requestAnimationFrame(() => {
      categoryMenuInstanceRef.current?.update();
    });
    return () => window.cancelAnimationFrame(handle);
  }, [categoryMenuSignature, sortOption, locale]);

  useEffect(() => {
    const slider = categoryMenuInstanceRef.current;
    const container = slider?.container;
    if (!container) return;

    const STEP_THRESHOLD = 36;
    categoryMenuWheelCarryRef.current = 0;

    const handleWheel = (event) => {
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!Number.isFinite(delta) || Math.abs(delta) < 1) return;
      event.preventDefault();
      categoryMenuWheelCarryRef.current += delta;

      while (Math.abs(categoryMenuWheelCarryRef.current) >= STEP_THRESHOLD) {
        if (categoryMenuWheelCarryRef.current > 0) {
          slider.next();
          categoryMenuWheelCarryRef.current -= STEP_THRESHOLD;
        } else {
          slider.prev();
          categoryMenuWheelCarryRef.current += STEP_THRESHOLD;
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [categoryMenuInstanceRef, categoryMenuSignature, sortOption, locale]);

  const handleSortChange = (event) => {
    const nextValue = event.target.value;
    setSortOption(nextValue);
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      ?.matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handlePromoTypeChange = (nextType) => {
    const normalized = normalizePromoTypeFilter(nextType);
    setPromoTypeFilter(normalized);
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")
      ?.matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks asPath={asPath} locale={locale} />
      </Head>

      <PromoBanner />
      <Header />

              {/* Hero Banner for Team Member */}
              <div className="bg-white">
                <div className="relative w-full h-[50px] md:h-[60px]">
                        </div>
                </div>

      <div className="bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: t("breadcrumbs.home"), href: "/" },
              { label: t("breadcrumbs.promos"), href: "/promos" },
            ]}
          />
        </div>
      </div>

      <main className="bg-white">
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 md:pt-24">
          <h1 className="text-black font-serif font-medium mb-4 leading-tight text-[clamp(2rem,5vw,3rem)]">
            {t("hero.title")}
          </h1>
          <p className="text-gray-700 mb-8 max-w-3xl">
            {t("hero.subtitle")}
          </p>
          <div
            className="-mx-4 sm:-mx-6 lg:-mx-8 sticky bg-white z-30 border-b border-gray-200 px-4 sm:px-6 lg:px-8 mb-10"
            style={{ top: "calc(var(--site-header-offset) - 0.5%)" }}
          >
            <div className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <span className="text-sm text-gray-600">{t("typeToggle.label")}</span>
                <div className="inline-flex w-full sm:w-auto rounded-full border border-gray-300 p-1">
                  <button
                    type="button"
                    onClick={() => handlePromoTypeChange(PROMO_TYPE_SEASONAL)}
                    aria-pressed={promoTypeFilter === PROMO_TYPE_SEASONAL}
                    className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-full text-sm transition ${
                      promoTypeFilter === PROMO_TYPE_SEASONAL
                        ? "bg-black text-white"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {t("typeToggle.options.seasonal")}
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePromoTypeChange(PROMO_TYPE_WEEKLY)}
                    aria-pressed={promoTypeFilter === PROMO_TYPE_WEEKLY}
                    className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-full text-sm transition ${
                      promoTypeFilter === PROMO_TYPE_WEEKLY
                        ? "bg-black text-white"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {t("typeToggle.options.weekly")}
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label htmlFor="promo-sort" className="text-sm text-gray-600">
                  {t("sort.label")}
                </label>
                <div className="relative w-full sm:w-auto">
                  <select
                    id="promo-sort"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="w-full sm:w-auto border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm text-black bg-white appearance-none"
                  >
                    <option value="default">
                      {t("sort.options.default")}
                    </option>
                    <option value="days-asc">
                      {t("sort.options.daysAsc")}
                    </option>
                    <option value="days-desc">
                      {t("sort.options.daysDesc")}
                    </option>
                    <option value="price-asc">
                      {t("sort.options.priceAsc")}
                    </option>
                    <option value="price-desc">
                      {t("sort.options.priceDesc")}
                    </option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {promoEligibleCategories.length > 1 && (
                <div className="mt-4">
                  <div className="flex justify-center">
                    <div className="relative w-full">
                      <div className="px-9 sm:px-10 md:px-0">
                        <div
                          key={`${locale}-${sortOption}-${categoryMenuSignature}`}
                          ref={categoryMenuRef}
                          className="keen-slider overflow-hidden w-full pb-2 sm:pb-3"
                        >
                          {promoEligibleCategories.map((cat, idx) => {
                            const label = getLocalized(cat.title, locale);
                            const anchor = label.replace(/\s+/g, "-").toLowerCase();
                            return (
                              <div
                                key={`${anchor}-${idx}`}
                                className="keen-slider__slide px-2"
                                style={{ width: "max-content", flex: "0 0 auto" }}
                              >
                                <a
                                  href={`#${anchor}`}
                                  className="inline-flex min-w-max items-center text-sm md:text-base px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 text-black hover:border-black hover:text-[#731a2f] transition whitespace-nowrap min-h-[36px]"
                                >
                                  {label}
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => categoryMenuInstanceRef.current?.prev()}
                        aria-label={t("categoryMenu.scrollLeft", {
                          defaultValue: "Scroll categories left",
                        })}
                        className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() => categoryMenuInstanceRef.current?.next()}
                        aria-label={t("categoryMenu.scrollRight", {
                          defaultValue: "Scroll categories right",
                        })}
                        className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {categories.length === 0 && (
            <div className="text-gray-600">{t("empty")}</div>
          )}

          {promoEligibleCategories.map((cat, idx) => (
            <div
              key={idx}
              id={getLocalized(cat.title, locale).replace(/\s+/g, "-").toLowerCase()}
              className="mb-12 scroll-mt-[calc(var(--site-header-offset)+175px)] sm:scroll-mt-[calc(var(--site-header-offset)+150px)] md:scroll-mt-[calc(var(--site-header-offset)+160px)]"
            >
              <h2 className="text-xl sm:text-2xl text-black font-serif font-medium mb-4">
                {getLocalized(cat.title, locale)}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.cards.map((card, j) => (
                  <div
                    key={`${card.optionName}-${j}`}
                    className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col ${
                      card.isPackage ? "bg-[#731a2f] text-white" : "bg-[#f9f9f9]"
                    }`}
                  >
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <div>
                        <h3
                          className={`text-lg font-serif font-medium ${
                            card.isPackage ? "text-white" : "text-black"
                          }`}
                        >
                          {card.optionName}
                        </h3>
                        {card.isPackage && (
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mt-1">
                            {t("card.promoPackage")}
                          </p>
                        )}
                        {card.price && (
                          <p
                            className={`font-semibold text-sm mt-1 ${
                              card.isPackage ? "text-white" : "text-[#731a2f]"
                            }`}
                          >
                            {card.price}
                          </p>
                        )}
                        {card.weeklyLabel && (
                          <p
                            className={`text-xs mt-1 ${
                              card.isPackage ? "text-white/80" : "text-gray-600"
                            }`}
                          >
                            {t("card.availableOn", { days: card.weeklyLabel })}
                          </p>
                        )}
                        {card.validTillLabel && (
                          <p
                            className={`text-xs mt-1 ${
                              card.isPackage ? "text-white/70" : "text-gray-500"
                            }`}
                          >
                            {t("card.validThru")}{" "}
                            <span
                              className={`font-medium ${
                                card.isPackage ? "text-white" : "text-gray-700"
                              }`}
                            >
                              {card.validTillLabel}
                            </span>
                          </p>
                        )}
                        {typeof card.daysLeft === "number" && (
                          <p
                            className={`text-xs mt-1 ${
                              card.isPackage ? "text-white/70" : "text-gray-500"
                            }`}
                          >
                          {t("card.daysLeft", { count: card.daysLeft })}
                          </p>
                        )}
                        <p
                          className={`text-sm mt-2 ${
                            card.isPackage ? "text-white/80" : "text-gray-600"
                          }`}
                        >
                          {card.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        <button
                          type="button"
                          onClick={() => router.push(`/treatments/${card.slug}?lead=open`)}
                          className={`${cardActionBaseClass} ${
                            card.isPackage
                              ? "bg-black text-white border border-black hover:bg-white hover:text-black"
                              : "bg-black text-white hover:bg-[#731a2f]"
                          }`}
                        >
                          {t("card.bookNow")}
                        </button>
                        <Link
                          href={`/treatments/${card.slug}`}
                          className={`${cardActionBaseClass} ${
                            card.isPackage
                              ? "bg-white text-black border border-white hover:bg-black hover:text-white hover:border-black"
                              : "border border-gray-300 text-black hover:border-black"
                          }`}
                        >
                          {t("card.learnMore")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <InstagramFeed />
        <ReviewsSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { allTreatments } = await import("@/lib/data/allTreatments");
  const currentLocale = locale ?? "en";
  const translations = await serverSideTranslations(
    currentLocale,
    ["layout", "home", "location", "promos"],
    nextI18NextConfig
  );
  const pricePrefix =
    translations?._nextI18Next?.initialI18nStore?.[currentLocale]?.promos?.pricePrefix || "";
  const promoCategoriesByType = {
    [PROMO_TYPE_SEASONAL]: buildPromoCategories(allTreatments, currentLocale, {
      pricePrefix,
      promoTypeFilter: PROMO_TYPE_SEASONAL,
    }),
    [PROMO_TYPE_WEEKLY]: buildPromoCategories(allTreatments, currentLocale, {
      pricePrefix,
      promoTypeFilter: PROMO_TYPE_WEEKLY,
    }),
  };
  return {
    props: {
      promoCategoriesByType,
      ...translations,
    },
  };
}
