import { parsePhoneNumberFromString } from "libphonenumber-js";

const normalizePhoneDigits = (value) => (value || "").replace(/\D/g, "");

const validatePhoneNumber = (phone, countryCode = "", defaultRegion) => {
  const digits = normalizePhoneDigits(phone);
  const codeDigits = normalizePhoneDigits(countryCode);
  if (!digits) return false;

  const fullNumber = codeDigits ? `+${codeDigits}${digits}` : digits;
  let parsed = parsePhoneNumberFromString(fullNumber);
  if (!parsed && defaultRegion) {
    parsed = parsePhoneNumberFromString(digits, defaultRegion);
  }
  return Boolean(parsed && parsed.isValid());
};

export { normalizePhoneDigits, validatePhoneNumber };
