import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { getPromoSummary, getPromoOptions } from "@/lib/utils/promo";
import { formatMoney, formatMoneyRange, getPriceMinValue } from "@/lib/utils/price";
import { getLocalized } from "@/lib/i18n/getLocalized";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";

const normalizeName = (value) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const isPackageOption = (opt) => opt?.option?.optionType === "package";

const parsePromoDate = (value) => {
  if (!value) return null;
  const raw = typeof value === "object" ? value.en || value.es : value;
  if (!raw || typeof raw !== "string") return null;
  const date = new Date(`${raw}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
};

const getDaysLeft = (untilDate) => {
  if (!untilDate) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(untilDate);
  end.setHours(0, 0, 0, 0);
  const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? diff : null;
};

const formatPackagePrice = (price, locale) => {
  if (!price) return "";
  if (price.text && typeof price.text === "object") {
    return getLocalized(price.text, locale);
  }
  if ("minAmount" in price || "maxAmount" in price) {
    return formatMoneyRange(price.minAmount, price.maxAmount);
  }
  if ("amount" in price) return formatMoney(price.amount);
  return "";
};

const buildPromoCategories = (allTreatments, locale, options = {}) => {
  const { pricePrefix = "" } = options;
  const isMicroneedlingCategoryFn = (t) => t?.category === "microneedling-mesotherapy";
  const hasLinkedPackages = (t) =>
    isMicroneedlingCategoryFn(t) &&
    (t.pricing?.options || []).some(
      (opt) => Array.isArray(opt?.linkedPackageIds) && opt.linkedPackageIds.length > 0
    );

  const promoTreatments = allTreatments.filter(
    (t) => getPromoSummary(t, locale).isPromoActive || hasLinkedPackages(t)
  );
  const packageRegistry = new Map();
  allTreatments.forEach((t) => {
    (t.packages || []).forEach((pkg) => {
      if (!pkg?.packageId) return;
      packageRegistry.set(pkg.packageId, { pkg, source: t });
    });
  });

  const categoriesMap = {};
  const packageKeysByCategory = new Map();
  promoTreatments.forEach((t) => {
    const promoDetails = t.promoDetails || null;
    const promoOptions = getPromoOptions(t, locale, { excludeLinkedPackageOptions: true });
    const isMicroneedlingCategory = isMicroneedlingCategoryFn(t);
    const linkedPackageIds = isMicroneedlingCategory
      ? Array.from(
          new Set(
            (t.pricing?.options || [])
              .flatMap((opt) =>
                Array.isArray(opt?.linkedPackageIds) ? opt.linkedPackageIds : []
              )
              .filter(Boolean)
          )
        )
      : [];
    const hasLinkedPackages = linkedPackageIds.length > 0;
    if (!promoOptions.length && !(t.packages || []).length && !hasLinkedPackages) return;
    const catKey = t.category || getLocalized(t.categoryDisplayName, locale) || "Other";
    if (!categoriesMap[catKey]) {
      categoriesMap[catKey] = {
        title: t.categoryDisplayName || catKey,
        cards: [],
      };
    }
    const packageKeySet = packageKeysByCategory.get(catKey) || new Set();
    const optionValidTillMap = new Map(
      (promoDetails?.options || [])
        .map((opt) => {
          const key = opt?.optionKey || getLocalized(opt?.optionName, locale);
          const validTill = getLocalized(opt?.validTill, locale);
          return key ? [normalizeName(key), validTill] : null;
        })
        .filter(Boolean)
    );

    const promoDescription = getLocalized(promoDetails?.description, locale);
    const description = promoDescription || getLocalized(t.description, locale);
    const serviceName = getLocalized(t.serviceDisplayName, locale);
    const serviceOptions = promoOptions.filter((opt) => !isPackageOption(opt));
    const packageOptions = promoOptions.filter((opt) => isPackageOption(opt));
    const registryPackages = t.packages || [];

    if (serviceOptions.length > 0) {
      const sorted = [...serviceOptions].sort((a, b) => a.value - b.value);
      const lowest = sorted[0];
      const pricePrefixLabel =
        serviceOptions.length > 1 && pricePrefix ? `${pricePrefix} ` : "";
      const price = `${pricePrefixLabel}${lowest.promoPrice}${
        lowest.currency ? ` ${lowest.currency}` : ""
      }`;
      const summaryName = promoDetails?.summaryName
        ? getLocalized(promoDetails.summaryName, locale)
        : "";
      const singlePromoOption =
        serviceOptions.length === 1 && promoDetails?.options?.length === 1
          ? promoDetails.options[0]
          : null;
      const singlePromoOptionName = singlePromoOption
        ? getLocalized(singlePromoOption.optionName, locale)
        : "";
      const serviceOptionValidTills = serviceOptions
        .map((opt) => {
          const optKey = opt.option?.optionKey || getLocalized(opt.option?.optionName, locale);
          return (
            optionValidTillMap.get(normalizeName(optKey)) ||
            getLocalized(promoDetails?.validTill, locale) ||
            ""
          );
        })
        .filter(Boolean);
      if (singlePromoOption?.validTill) {
        serviceOptionValidTills.push(getLocalized(singlePromoOption.validTill, locale));
      }
      const hasUniformValidTill =
        serviceOptionValidTills.length > 0 &&
        serviceOptionValidTills.every((value) => value === serviceOptionValidTills[0]);
      const serviceValidTillValue = hasUniformValidTill ? serviceOptionValidTills[0] : null;
      const serviceValidTillDate = parsePromoDate(serviceValidTillValue);
      const serviceValidTillLabel = serviceValidTillDate
        ? new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(serviceValidTillDate)
        : null;
      const serviceDaysLeft = getDaysLeft(serviceValidTillDate);
      const serviceOptionName =
        serviceOptions.length === 1
          ? summaryName || singlePromoOptionName || serviceName
          : summaryName || serviceName;

      categoriesMap[catKey].cards.push({
        optionName: serviceOptionName,
        description,
        price,
        priceValue: Number.isFinite(lowest?.value) ? lowest.value : null,
        image: t.images?.primary || "/placeholder.jpg",
        slug: t.urlSlug,
        validTillLabel: serviceValidTillLabel,
        daysLeft: serviceDaysLeft,
        isPackage: false,
      });
    }

    if (isMicroneedlingCategory) {
      const linkedPackages = linkedPackageIds
        .map((pkgId) => packageRegistry.get(pkgId))
        .filter(Boolean);
      const order = ["prp", "pn", "pdrn"];
      linkedPackages.sort((a, b) => {
        const aKey = (a.pkg?.title?.en || a.pkg?.title || "").toLowerCase();
        const bKey = (b.pkg?.title?.en || b.pkg?.title || "").toLowerCase();
        const aRank = order.findIndex((key) => aKey.includes(key));
        const bRank = order.findIndex((key) => bKey.includes(key));
        if (aRank !== bRank) return (aRank === -1 ? 99 : aRank) - (bRank === -1 ? 99 : bRank);
        return aKey.localeCompare(bKey);
      });

      linkedPackages.forEach(({ pkg, source }) => {
        if (!pkg?.packageId || packageKeySet.has(pkg.packageId)) return;
        const priceEntries = (pkg.options || [])
          .map((opt) => ({
            price: opt.price || null,
            currency: opt.price?.currency || "",
          }))
          .filter((entry) => entry.price);
        const lowestEntry = priceEntries
          .map((entry) => ({
            ...entry,
            value: getPriceMinValue(entry.price),
          }))
          .filter((entry) => Number.isFinite(entry.value))
          .sort((a, b) => a.value - b.value)[0];
        const hasMultiplePackageOptions = priceEntries.length > 1;
        const packagePricePrefix =
          hasMultiplePackageOptions && pricePrefix ? `${pricePrefix} ` : "";
        const packagePrice = lowestEntry
          ? `${packagePricePrefix}${formatPackagePrice(lowestEntry.price, locale)}${
              lowestEntry.currency ? ` ${lowestEntry.currency}` : ""
            }`
          : "";
        const packagePriceValue = lowestEntry?.value ?? null;
        const packageValidTillValue = getLocalized(pkg.validTill, locale) || "";
        const packageValidTillDate = parsePromoDate(packageValidTillValue);
        const packageValidTillLabel = packageValidTillDate
          ? new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(packageValidTillDate)
          : null;
        const packageDaysLeft = getDaysLeft(packageValidTillDate);
        categoriesMap[catKey].cards.push({
          optionName: getLocalized(pkg.title, locale),
          description,
          price: packagePrice,
          priceValue: packagePriceValue,
          image: source?.images?.primary || "/placeholder.jpg",
          slug: source?.urlSlug || t.urlSlug,
          validTillLabel: packageValidTillLabel,
          daysLeft: packageDaysLeft,
          isPackage: true,
        });
        packageKeySet.add(pkg.packageId);
      });
    }

    if (!isMicroneedlingCategory && registryPackages.length === 0) {
      packageOptions.forEach((opt) => {
        const optName = getLocalized(opt.option?.optionName, locale);
        const optKey =
          opt.option?.optionKey || opt.option?.nameKey || opt.option?.id || optName;
        const normalizedKey = normalizeName(optKey);
        if (packageKeySet.has(normalizedKey)) return;
        const optionValidTillValue =
          optionValidTillMap.get(normalizeName(optKey)) ||
          getLocalized(promoDetails?.validTill, locale) ||
          "";
        const optionValidTillDate = parsePromoDate(optionValidTillValue);
        const optionValidTillLabel = optionValidTillDate
          ? new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(optionValidTillDate)
          : null;
        const optionDaysLeft = getDaysLeft(optionValidTillDate);
        categoriesMap[catKey].cards.push({
          optionName: optName,
          description,
          price: `${opt.promoPrice}${opt.currency ? ` ${opt.currency}` : ""}`,
          priceValue: Number.isFinite(opt?.value) ? opt.value : null,
          image: t.images?.primary || "/placeholder.jpg",
          slug: t.urlSlug,
          validTillLabel: optionValidTillLabel,
          daysLeft: optionDaysLeft,
          isPackage: true,
        });
        packageKeySet.add(normalizedKey);
      });
    }
    packageKeysByCategory.set(catKey, packageKeySet);
  });

  return Object.values(categoriesMap).filter((cat) => cat.cards.length > 0);
};

export default function PromosPage({ promoCategories = [] }) {
  const router = useRouter();
  const locale = router.locale || "en";
  const { asPath } = router;
  const { t } = useTranslation("promos");
  const cardActionBaseClass =
    "inline-flex w-full items-center justify-center min-h-[36px] px-4 py-2 rounded-full text-xs leading-none transition text-center";
  const [sortOption, setSortOption] = useState("default");
  const categories = promoCategories;
  const [categoryMenuRef, categoryMenuInstanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: "auto", spacing: 12 },
  });
  const sortedCategories =
    sortOption === "default"
      ? categories
      : (() => {
          const sortKey = sortOption.startsWith("days") ? "days" : "price";
          const sortDir = sortOption.endsWith("desc") ? "desc" : "asc";
          const getCardSortValue = (card) => {
            if (sortKey === "days") {
              return Number.isFinite(card.daysLeft) ? card.daysLeft : null;
            }
            return Number.isFinite(card.priceValue) ? card.priceValue : null;
          };
          const compareValues = (a, b) => {
            const aMissing = !Number.isFinite(a);
            const bMissing = !Number.isFinite(b);
            if (aMissing && bMissing) return 0;
            if (aMissing) return 1;
            if (bMissing) return -1;
            return sortDir === "asc" ? a - b : b - a;
          };
          const getCategorySortValue = (cards) => {
            const values = cards.map(getCardSortValue).filter(Number.isFinite);
            if (!values.length) return null;
            return sortDir === "asc" ? Math.min(...values) : Math.max(...values);
          };
          return categories
            .map((cat) => ({
              ...cat,
              cards: [...cat.cards].sort((a, b) =>
                compareValues(getCardSortValue(a), getCardSortValue(b))
              ),
            }))
            .sort((a, b) =>
              compareValues(getCategorySortValue(a.cards), getCategorySortValue(b.cards))
            );
        })();
  const promoEligibleCategories = sortedCategories.filter(
    (cat) => Array.isArray(cat.cards) && cat.cards.length > 0
  );

  useEffect(() => {
    if (!categoryMenuInstanceRef.current) return;
    const handle = window.requestAnimationFrame(() => {
      categoryMenuInstanceRef.current?.update();
    });
    return () => window.cancelAnimationFrame(handle);
  }, [promoEligibleCategories.length, locale]);

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.title")} />
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks asPath={asPath} locale={locale} />
      </Head>

      <PromoBanner />
      <Header />

              {/* Hero Banner for Team Member */}
              <div className="bg-white">
                <div className="relative w-full h-[50px] md:h-[60px]">
                        </div>
                </div>

      <div className="bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: t("breadcrumbs.home"), href: "/" },
              { label: t("breadcrumbs.promos"), href: "/promos" },
            ]}
          />
        </div>
      </div>

      <main className="bg-white">
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 md:pt-24">
          <h1 className="text-black font-serif font-medium mb-4 leading-tight text-[clamp(2rem,5vw,3rem)]">
            {t("hero.title")}
          </h1>
          <p className="text-gray-700 mb-8 max-w-3xl">
            {t("hero.subtitle")}
          </p>
          <div
            className="-mx-4 sm:-mx-6 lg:-mx-8 sticky bg-white z-30 border-b border-gray-200 px-4 sm:px-6 lg:px-8 mb-10"
            style={{ top: "var(--site-header-offset)" }}
          >
            <div className="py-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <label htmlFor="promo-sort" className="text-sm text-gray-600">
                  {t("sort.label")}
                </label>
                <div className="relative w-full sm:w-auto">
                  <select
                    id="promo-sort"
                    value={sortOption}
                    onChange={(event) => setSortOption(event.target.value)}
                    className="w-full sm:w-auto border border-gray-300 rounded-full px-4 py-2 pr-10 text-sm text-black bg-white appearance-none"
                  >
                    <option value="default">
                      {t("sort.options.default")}
                    </option>
                    <option value="days-asc">
                      {t("sort.options.daysAsc")}
                    </option>
                    <option value="days-desc">
                      {t("sort.options.daysDesc")}
                    </option>
                    <option value="price-asc">
                      {t("sort.options.priceAsc")}
                    </option>
                    <option value="price-desc">
                      {t("sort.options.priceDesc")}
                    </option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {promoEligibleCategories.length > 1 && (
                <div className="mt-4">
                  <div className="flex justify-center">
                    <div className="relative w-full">
                      <div className="px-9 sm:px-10 md:px-0">
                        <div
                          ref={categoryMenuRef}
                          className="keen-slider overflow-hidden w-full pb-2 sm:pb-3"
                        >
                          {promoEligibleCategories.map((cat, idx) => {
                            const label = getLocalized(cat.title, locale);
                            const anchor = label.replace(/\s+/g, "-").toLowerCase();
                            return (
                              <div
                                key={`${anchor}-${idx}`}
                                className="keen-slider__slide px-2"
                                style={{ width: "max-content", flex: "0 0 auto" }}
                              >
                                <a
                                  href={`#${anchor}`}
                                  className="inline-flex min-w-max items-center text-sm md:text-base px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 text-black hover:border-black hover:text-[#731a2f] transition whitespace-nowrap min-h-[36px]"
                                >
                                  {label}
                                </a>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => categoryMenuInstanceRef.current?.prev()}
                        aria-label={t("categoryMenu.scrollLeft", {
                          defaultValue: "Scroll categories left",
                        })}
                        className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() => categoryMenuInstanceRef.current?.next()}
                        aria-label={t("categoryMenu.scrollRight", {
                          defaultValue: "Scroll categories right",
                        })}
                        className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {categories.length === 0 && (
            <div className="text-gray-600">{t("empty")}</div>
          )}

          {promoEligibleCategories.map((cat, idx) => (
            <div
              key={idx}
              id={getLocalized(cat.title, locale).replace(/\s+/g, "-").toLowerCase()}
              className="mb-12"
            >
              <h2 className="text-xl sm:text-2xl text-black font-serif font-medium mb-4">
                {getLocalized(cat.title, locale)}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.cards.map((card, j) => (
                  <div
                    key={`${card.optionName}-${j}`}
                    className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col ${
                      card.isPackage ? "bg-[#731a2f] text-white" : "bg-[#f9f9f9]"
                    }`}
                  >
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <div>
                        <h3
                          className={`text-lg font-serif font-medium ${
                            card.isPackage ? "text-white" : "text-black"
                          }`}
                        >
                          {card.optionName}
                        </h3>
                        {card.isPackage && (
                          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mt-1">
                            {t("card.promoPackage")}
                          </p>
                        )}
                        {card.price && (
                          <p
                            className={`font-semibold text-sm mt-1 ${
                              card.isPackage ? "text-white" : "text-[#731a2f]"
                            }`}
                          >
                            {card.price}
                          </p>
                        )}
                        {card.validTillLabel && (
                          <p
                            className={`text-xs mt-1 ${
                              card.isPackage ? "text-white/70" : "text-gray-500"
                            }`}
                          >
                            {t("card.validThru")}{" "}
                            <span
                              className={`font-medium ${
                                card.isPackage ? "text-white" : "text-gray-700"
                              }`}
                            >
                              {card.validTillLabel}
                            </span>
                          </p>
                        )}
                        {typeof card.daysLeft === "number" && (
                          <p
                            className={`text-xs mt-1 ${
                              card.isPackage ? "text-white/70" : "text-gray-500"
                            }`}
                          >
                          {t("card.daysLeft", { count: card.daysLeft })}
                          </p>
                        )}
                        <p
                          className={`text-sm mt-2 ${
                            card.isPackage ? "text-white/80" : "text-gray-600"
                          }`}
                        >
                          {card.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        <button
                          type="button"
                          onClick={() => router.push(`/treatments/${card.slug}?lead=open`)}
                          className={`${cardActionBaseClass} ${
                            card.isPackage
                              ? "bg-black text-white border border-black hover:bg-white hover:text-black"
                              : "bg-black text-white hover:bg-[#731a2f]"
                          }`}
                        >
                          {t("card.bookNow")}
                        </button>
                        <Link
                          href={`/treatments/${card.slug}`}
                          className={`${cardActionBaseClass} ${
                            card.isPackage
                              ? "bg-white text-black border border-white hover:bg-black hover:text-white hover:border-black"
                              : "border border-gray-300 text-black hover:border-black"
                          }`}
                        >
                          {t("card.learnMore")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <InstagramFeed />
        <ReviewsSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { allTreatments } = await import("@/lib/data/allTreatments");
  const currentLocale = locale ?? "en";
  const translations = await serverSideTranslations(
    currentLocale,
    ["layout", "home", "location", "promos"],
    nextI18NextConfig
  );
  const pricePrefix =
    translations?._nextI18Next?.initialI18nStore?.[currentLocale]?.promos?.pricePrefix || "";
  const promoCategories = buildPromoCategories(allTreatments, currentLocale, { pricePrefix });
  return {
    props: {
      promoCategories,
      ...translations,
    },
  };
}
