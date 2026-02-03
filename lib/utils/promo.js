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

const isPromoInRange = (validFrom, validTill) => {
  if (!validFrom && !validTill) return true;
  const today = new Date();
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
          },
        ];
      })
      .filter(Boolean)
  );
};

const getPromoOptions = (treatment, locale) => {
  const pricingOptions = treatment?.pricing?.options || [];
  const promoDetails = treatment?.promoDetails || null;
  const defaultValidFrom = promoDetails?.validFrom || "";
  const defaultValidTill =
    typeof promoDetails?.validTill === "object"
      ? promoDetails?.validTill?.en
      : promoDetails?.validTill || "";
  const optionDateMap = buildPromoOptionDateMap(promoDetails, locale);

  return pricingOptions
    .filter((opt) => {
      if (!optionHasPromo(opt, locale)) return false;
      const key = normalizeName(opt?.optionKey || opt?.optionName || "");
      const optionDates = optionDateMap.get(key) || {};
      const validFrom = optionDates.validFrom || defaultValidFrom;
      const validTill = optionDates.validTill || defaultValidTill;
      return isPromoInRange(validFrom, validTill);
    })
    .map((opt) => buildPromoOption(opt, locale));
};

const getPromoSummary = (treatment, locale) => {
  if (!treatment?.isPromoActive) {
    return { isPromoActive: false, promoOptions: [], showStartingFrom: false, priceText: "" };
  }

  const promoOptions = getPromoOptions(treatment, locale);
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
