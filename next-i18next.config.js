const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  ns: [
    "layout",
    "home",
    "treatments",
    "team",
    "contact",
    "location",
    "learn",
    "promos",
    "legal",
    "thankyou",
  ],
  fallbackLng: "en",
  defaultNS: "layout",
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
