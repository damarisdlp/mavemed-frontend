const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  ns: ["common"],
  fallbackLng: "en",
  defaultNS: "common",
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
