const formatAmount = (amount) => {
  if (!Number.isFinite(amount)) return "";
  const isWhole = Number.isInteger(amount);
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: isWhole ? 0 : 2,
    maximumFractionDigits: isWhole ? 0 : 2,
  }).format(amount);
};

const formatMoney = (amount) => {
  const formatted = formatAmount(amount);
  return formatted ? `$${formatted}` : "";
};

const formatMoneyRange = (minAmount, maxAmount) => {
  const hasMin = Number.isFinite(minAmount);
  const hasMax = Number.isFinite(maxAmount);
  if (!hasMin && !hasMax) return "";
  if (hasMin && hasMax) {
    if (minAmount === maxAmount) return formatMoney(minAmount);
    return `${formatMoney(minAmount)}–${formatMoney(maxAmount)}`;
  }
  return hasMin ? formatMoney(minAmount) : formatMoney(maxAmount);
};

const getPriceMinValue = (price) => {
  if (!price || typeof price !== "object") return null;
  if (Number.isFinite(price.minAmount)) return price.minAmount;
  if (Number.isFinite(price.amount)) return price.amount;
  return null;
};

export { formatAmount, formatMoney, formatMoneyRange, getPriceMinValue };
