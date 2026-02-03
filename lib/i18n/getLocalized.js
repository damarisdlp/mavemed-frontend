const getLocalized = (field, locale = "en", fallbackLocale = "en") => {
  if (field == null) return "";
  if (typeof field === "object") {
    if (field[locale]) return field[locale];
    if (field[fallbackLocale]) return field[fallbackLocale];
    const firstValue = Object.values(field).find((value) => typeof value === "string");
    return firstValue || "";
  }
  return field;
};

export { getLocalized };
