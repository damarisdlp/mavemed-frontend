import { formatMoney, formatMoneyRange, getPriceMinValue } from "./price";
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

const parsePriceValue = (priceText) => {
  if (priceText && typeof priceText === "object") {
    const value = getPriceMinValue(priceText);
    return Number.isFinite(value) ? value : Number.NaN;
  }
  if (typeof priceText !== "string") return Number.NaN;
  const numeric = parseFloat(priceText.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : Number.NaN;
};

const normalizePromoType = (value) => {
  const raw = String(value || "")
    .trim()
    .toLowerCase();
  return raw === "weekly" ? "weekly" : "seasonal";
};

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

const normalizeWeekday = (value) => {
  if (Number.isInteger(value) && value >= 0 && value <= 6) return value;
  const str = String(value || "")
    .trim()
    .toLowerCase();
  if (str === "") return null;
  const numeric = Number(str);
  if (Number.isInteger(numeric) && numeric >= 0 && numeric <= 6) return numeric;
  return WEEKDAY_INDEX_BY_NAME[str] ?? null;
};

const getWeekdayForTimeZone = (now, timeZone) => {
  if (!timeZone || typeof timeZone !== "string") return now.getDay();
  try {
    const weekdayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      timeZone,
    })
      .format(now)
      .toLowerCase();
    return WEEKDAY_INDEX_BY_NAME[weekdayName] ?? now.getDay();
  } catch {
    return now.getDay();
  }
};

const isWeeklyPromoInSchedule = (weeklySchedule, now = new Date()) => {
  if (!weeklySchedule || typeof weeklySchedule !== "object") return true;
  const rawDays = Array.isArray(weeklySchedule.daysOfWeek) ? weeklySchedule.daysOfWeek : [];
  if (!rawDays.length) return true;

  const normalizedDays = rawDays.map(normalizeWeekday).filter((day) => day != null);
  if (!normalizedDays.length) return true;

  const activeWeekday = getWeekdayForTimeZone(now, weeklySchedule.timeZone);
  return normalizedDays.includes(activeWeekday);
};

const isPromoInRange = (validFrom, validTill, now = new Date()) => {
  if (!validFrom && !validTill) return true;
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const fromDate = validFrom ? new Date(`${validFrom}T00:00:00`) : null;
  const tillDate = validTill ? new Date(`${validTill}T00:00:00`) : null;

  if (fromDate && today < fromDate) return false;
  if (tillDate && today > tillDate) return false;
  return true;
};

const getPromoPriceParts = (option, locale) => {
  const raw = option?.optionPromoPrice;
  if (raw && typeof raw === "object" && "amount" in raw) {
    return {
      promoPrice: formatMoney(raw.amount),
      currency: raw.currency || option?.optionPrice?.currency || "",
      value: raw.amount,
    };
  }
  const promoPrice = getLocalized(raw, locale);
  return {
    promoPrice,
    currency: option?.optionPrice?.currency || "",
    value: parsePriceValue(promoPrice),
  };
};

const optionHasPromo = (option, locale) => {
  const { promoPrice, value } = getPromoPriceParts(option, locale);
  if (option?.isOptionPromoActive !== true) return false;
  if (typeof promoPrice !== "string" || promoPrice.trim() === "") return false;
  if (Number.isFinite(value)) return true;
  return Boolean(option?.optionPromoPrice?.text);
};

const buildPromoOption = (option, locale) => {
  const { promoPrice, currency, value } = getPromoPriceParts(option, locale);
  return {
    option,
    promoPrice,
    currency,
    value,
    promoType: normalizePromoType(option?.promoType),
    weeklySchedule: option?.weeklySchedule || null,
  };
};

const normalizeName = (value) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const isPackageOption = (option) =>
  option?.optionType === "package" || option?.isPackage === true;

const buildPromoOptionDateMap = (promoDetails, locale) => {
  const options = promoDetails?.options || [];
  return new Map(
    options
      .map((opt) => {
        const key = opt.optionKey || getLocalized(opt.optionName, locale);
        if (!key) return null;
        return [
          normalizeName(key),
          {
            validFrom: getLocalized(opt.validFrom, locale),
            validTill: getLocalized(opt.validTill, locale),
            promoType: normalizePromoType(opt.promoType || promoDetails?.promoType),
            weeklySchedule: opt.weeklySchedule || promoDetails?.weeklySchedule || null,
          },
        ];
      })
      .filter(Boolean)
  );
};

const hasLinkedPackages = (option) =>
  Array.isArray(option?.linkedPackageIds) && option.linkedPackageIds.length > 0;

const getPromoOptions = (treatment, locale, options = {}) => {
  const {
    excludeLinkedPackageOptions = false,
    promoTypeFilter = "all",
    ignoreWeeklySchedule = false,
    now = new Date(),
  } = options;
  const pricingOptions = treatment?.pricing?.options || [];
  const promoDetails = treatment?.promoDetails || null;
  const defaultValidFrom = promoDetails?.validFrom || "";
  const defaultValidTill =
    typeof promoDetails?.validTill === "object"
      ? promoDetails?.validTill?.en
      : promoDetails?.validTill || "";
  const defaultPromoType = normalizePromoType(promoDetails?.promoType);
  const defaultWeeklySchedule = promoDetails?.weeklySchedule || null;
  const normalizedPromoTypeFilter = ["seasonal", "weekly"].includes(
    String(promoTypeFilter || "").toLowerCase()
  )
    ? String(promoTypeFilter).toLowerCase()
    : "all";
  const optionDateMap = buildPromoOptionDateMap(promoDetails, locale);

  return pricingOptions
    .map((opt) => {
      const key = normalizeName(opt?.optionKey || opt?.optionName || "");
      const optionDates = optionDateMap.get(key) || {};
      const promoType = normalizePromoType(optionDates.promoType || defaultPromoType);
      return {
        opt,
        promoType,
        weeklySchedule: optionDates.weeklySchedule || defaultWeeklySchedule,
        validFrom: optionDates.validFrom || defaultValidFrom,
        validTill: optionDates.validTill || defaultValidTill,
      };
    })
    .filter(({ opt, promoType, weeklySchedule, validFrom, validTill }) => {
      if (!optionHasPromo(opt, locale)) return false;
      if (excludeLinkedPackageOptions && hasLinkedPackages(opt)) return false;
      if (normalizedPromoTypeFilter !== "all" && promoType !== normalizedPromoTypeFilter) {
        return false;
      }
      if (!isPromoInRange(validFrom, validTill, now)) return false;
      if (
        promoType === "weekly" &&
        !ignoreWeeklySchedule &&
        !isWeeklyPromoInSchedule(weeklySchedule, now)
      ) {
        return false;
      }
      return true;
    })
    .map(({ opt, promoType, weeklySchedule }) =>
      buildPromoOption({ ...opt, promoType, weeklySchedule }, locale)
    );
};

const getPromoSummary = (treatment, locale, options = {}) => {
  if (!treatment?.isPromoActive) {
    return { isPromoActive: false, promoOptions: [], showStartingFrom: false, priceText: "" };
  }

  const promoOptions = getPromoOptions(treatment, locale, options);
  const servicePromoOptions = promoOptions.filter((opt) => !isPackageOption(opt?.option));
  const hasPromoPrices = servicePromoOptions.length > 0;
  if (!hasPromoPrices) {
    return {
      isPromoActive: true,
      promoOptions,
      servicePromoOptions,
      showStartingFrom: false,
      priceText: "",
    };
  }

  const sorted = [...servicePromoOptions].sort((a, b) => {
    const aVal = Number.isFinite(a.value) ? a.value : Number.POSITIVE_INFINITY;
    const bVal = Number.isFinite(b.value) ? b.value : Number.POSITIVE_INFINITY;
    return aVal - bVal;
  });
  const lowest = sorted[0];
  const showStartingFrom = servicePromoOptions.length > 1;
  const priceText = lowest.promoPrice
    ? `${lowest.promoPrice}${lowest.currency ? ` ${lowest.currency}` : ""}`
    : "";

  return {
    isPromoActive: true,
    promoOptions,
    servicePromoOptions,
    showStartingFrom,
    priceText,
    lowestPromo: lowest,
  };
};

export { getPromoSummary, getPromoOptions, optionHasPromo };
