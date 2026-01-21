const getLocalized = (field, locale) => {
  if (field == null) return "";
  if (typeof field === "object") {
    if (field[locale]) return field[locale];
    if (field.en) return field.en;
    return "";
  }
  return field;
};

const parsePriceValue = (priceText) => {
  if (typeof priceText !== "string") return Number.NaN;
  const numeric = parseFloat(priceText.replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : Number.NaN;
};

const optionHasPromo = (option, locale) => {
  const promoPrice = getLocalized(option?.optionPromoPrice, locale);
  if (option?.optionPromoActive === false) return false;
  if (option?.optionPromoActive === true) {
    return typeof promoPrice === "string" && promoPrice.trim() !== "";
  }
  return typeof promoPrice === "string" && promoPrice.trim() !== "";
};

const buildPromoOption = (option, locale) => {
  const promoPrice = getLocalized(option?.optionPromoPrice, locale);
  const currency = option?.optionPromoPriceCurrency || option?.optionCurrency || "";
  return {
    option,
    promoPrice,
    currency,
    value: parsePriceValue(promoPrice),
  };
};

const getPromoOptions = (treatment, locale) => {
  const pricingOptions = treatment?.pricing?.options || [];
  const promoFromPricing = pricingOptions
    .filter((opt) => optionHasPromo(opt, locale))
    .map((opt) => buildPromoOption(opt, locale));

  if (promoFromPricing.length > 0) return promoFromPricing;

  const promoDetailsOptions = treatment?.promoDetails?.options || [];
  return promoDetailsOptions
    .filter((opt) => optionHasPromo(opt, locale))
    .map((opt) => buildPromoOption(opt, locale));
};

const getPromoSummary = (treatment, locale) => {
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

  return { isPromoActive, promoOptions, showStartingFrom, priceText };
};

export { getPromoSummary, getPromoOptions, optionHasPromo };
