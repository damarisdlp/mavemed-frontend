import nextI18NextConfig from "../next-i18next.config";

const SITE_URL = "https://www.mavemedspa.com";

const normalizePath = (asPath = "/") => {
  const [path] = asPath.split(/[?#]/);
  return path.startsWith("/") ? path : `/${path}`;
};

const stripLocalePrefix = (path, locales) => {
  for (const locale of locales) {
    if (path === `/${locale}`) return "/";
    if (path.startsWith(`/${locale}/`)) return path.replace(`/${locale}`, "");
  }
  return path;
};

const buildLocalePath = (path, locale, defaultLocale) => {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
};

export default function SeoLinks({
  asPath = "/",
  locale,
  locales,
  defaultLocale,
  siteUrl = SITE_URL,
}) {
  const defaultLoc = nextI18NextConfig?.i18n?.defaultLocale || "en";
  const allLocales = locales || nextI18NextConfig?.i18n?.locales || [defaultLoc];
  const activeLocale = locale || defaultLoc;

  const cleanPath = stripLocalePrefix(normalizePath(asPath), allLocales);
  const canonicalPath = buildLocalePath(
    cleanPath,
    activeLocale,
    defaultLocale || defaultLoc
  );
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      {allLocales.map((loc) => {
        const href = `${siteUrl}${buildLocalePath(
          cleanPath,
          loc,
          defaultLocale || defaultLoc
        )}`;
        return <link key={loc} rel="alternate" hrefLang={loc} href={href} />;
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${buildLocalePath(
          cleanPath,
          defaultLocale || defaultLoc,
          defaultLocale || defaultLoc
        )}`}
      />
    </>
  );
}
