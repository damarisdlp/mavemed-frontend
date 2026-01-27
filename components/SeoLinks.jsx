import { useRouter } from "next/router";
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

export default function SeoLinks() {
  const { asPath, locale } = useRouter();
  const defaultLocale = nextI18NextConfig?.i18n?.defaultLocale || "en";
  const locales = nextI18NextConfig?.i18n?.locales || [defaultLocale];

  const cleanPath = stripLocalePrefix(normalizePath(asPath), locales);
  const canonicalPath = buildLocalePath(
    cleanPath,
    locale || defaultLocale,
    defaultLocale
  );
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      {locales.map((loc) => {
        const href = `${SITE_URL}${buildLocalePath(cleanPath, loc, defaultLocale)}`;
        return <link key={loc} rel="alternate" hrefLang={loc} href={href} />;
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}${buildLocalePath(cleanPath, defaultLocale, defaultLocale)}`}
      />
    </>
  );
}
