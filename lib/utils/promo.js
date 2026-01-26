import { formatMoney, formatMoneyRange, getPriceMinValue } from "./price";

const getLocalized = (field, locale) => {
  if (field == null) return "";
  if (typeof field === "object") {
    if (field.text && typeof field.text === "object") {
      return field.text[locale] || field.text.en || "";
    }
    if ("minAmount" in field || "maxAmount" in field) {
      return formatMoneyRange(field.minAmount, field.maxAmount);
    }
    if ("amount" in field) return formatMoney(field.amount);
    if (field[locale]) return field[locale];
    if (field.en) return field.en;
    return "";
  }
  return field;
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
  return typeof promoPrice === "string" && promoPrice.trim() !== "" && Number.isFinite(value);
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

const getPromoOptions = (treatment, locale) => {
  const pricingOptions = treatment?.pricing?.options || [];
  return pricingOptions
    .filter((opt) => optionHasPromo(opt, locale))
    .map((opt) => buildPromoOption(opt, locale));
};

const getPromoSummary = (treatment, locale) => {
  const validFrom = treatment?.promoDetails?.validFrom;
  const validTill =
    typeof treatment?.promoDetails?.validTill === "object"
      ? treatment?.promoDetails?.validTill?.en
      : treatment?.promoDetails?.validTill;

  if (!isPromoInRange(validFrom, validTill)) {
    return { isPromoActive: false, promoOptions: [], showStartingFrom: false, priceText: "" };
  }

  if (!treatment?.isPromoActive) {
    return { isPromoActive: false, promoOptions: [], showStartingFrom: false, priceText: "" };
  }

  const promoOptions = getPromoOptions(treatment, locale);
  const isPromoActive = promoOptions.length > 0;
  if (!isPromoActive) {
    return { isPromoActive, promoOptions: [], showStartingFrom: false, priceText: "" };
  }

  const sorted = [...promoOptions].sort((a, b) => {
    const aVal = Number.isFinite(a.value) ? a.value : Number.POSITIVE_INFINITY;
    const bVal = Number.isFinite(b.value) ? b.value : Number.POSITIVE_INFINITY;
    return aVal - bVal;
  });
  const lowest = sorted[0];
  const showStartingFrom = promoOptions.length > 1;
  const priceText = lowest.promoPrice
    ? `${lowest.promoPrice}${lowest.currency ? ` ${lowest.currency}` : ""}`
    : "";

  return {
    isPromoActive,
    promoOptions,
    showStartingFrom,
    priceText,
    lowestPromo: lowest,
  };
};

export { getPromoSummary, getPromoOptions, optionHasPromo };
