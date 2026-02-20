import { useRouter } from "next/router";
import Head from "next/head";
import NextLink from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import TreatmentDetails from "@/components/TreatmentDetails";
import PricingTable from "@/components/PricingTable";
import WhatToExpect from "@/components/WhatToExpect";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import PromoPackageSection from "@/components/PromoPackageSection";
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection"
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import { getLocalized } from "@/lib/i18n/getLocalized";

const treatmentLearnLinks = {
  "sylfirm-rf-microneedling": {
    href: "/learn/sylfirm-x-rf-microneedling",
    i18nKey: "sylfirm",
  },
  "ultraformer-mpt": {
    href: "/learn/best-clinic-tijuana-ultraformer-mpt",
    i18nKey: "ultraformer",
  },
  "collagen-biostimulator-plla": {
    href: "/learn/plla-collagen-biostimulator",
    i18nKey: "plla",
  },
  "hybrid-injectable-collagen-biostimulator-ha-caha": {
    href: "/learn/collagen-loss-and-rebuilding-timeline",
    i18nKey: "caha",
  },
};

const BEFORE_AFTER_FILE_PATTERN = /^(\d+)-(before|after)\.(jpe?g|png|webp|avif)$/i;
const BEFORE_AFTER_EXT_PRIORITY = {
  jpg: 0,
  jpeg: 1,
  webp: 2,
  png: 3,
  avif: 4,
};

const getExtensionPriority = (ext) => {
  const normalized = String(ext || "").toLowerCase();
  return Number.isFinite(BEFORE_AFTER_EXT_PRIORITY[normalized])
    ? BEFORE_AFTER_EXT_PRIORITY[normalized]
    : 99;
};

const discoverBeforeAfterGalleryBySlug = async (slug) => {
  if (!slug || typeof slug !== "string") return [];
  const [{ readdir }, path] = await Promise.all([
    import("fs/promises"),
    import("path"),
  ]);
  const folderPath = path.join(process.cwd(), "public", "before-after", slug);
  let entries = [];
  try {
    entries = await readdir(folderPath, { withFileTypes: true });
  } catch {
    return [];
  }

  const byId = new Map();
  entries.forEach((entry) => {
    if (!entry?.isFile?.()) return;
    const match = entry.name.match(BEFORE_AFTER_FILE_PATTERN);
    if (!match) return;
    const [, rawId, sideRaw, extRaw] = match;
    const id = String(rawId).trim();
    const side = sideRaw.toLowerCase();
    const ext = extRaw.toLowerCase();
    const existing = byId.get(id) || { id, before: [], after: [] };
    existing[side].push({
      fileName: entry.name,
      priority: getExtensionPriority(ext),
    });
    byId.set(id, existing);
  });

  const pickPreferred = (items = []) =>
    [...items].sort((a, b) => a.priority - b.priority || a.fileName.localeCompare(b.fileName))[0];

  return Array.from(byId.values())
    .map((item) => {
      const before = pickPreferred(item.before);
      const after = pickPreferred(item.after);
      if (!before || !after) return null;
      return {
        id: item.id,
        beforeSrc: `/before-after/${slug}/${before.fileName}`,
        afterSrc: `/before-after/${slug}/${after.fileName}`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aNum = Number(a.id);
      const bNum = Number(b.id);
      if (Number.isFinite(aNum) && Number.isFinite(bNum) && aNum !== bNum) return aNum - bNum;
      return String(a.id).localeCompare(String(b.id));
    });
};

const mergeBeforeAfterSlides = (configuredSlides = [], discoveredSlides = []) => {
  const configured = Array.isArray(configuredSlides) ? configuredSlides : [];
  const discovered = Array.isArray(discoveredSlides) ? discoveredSlides : [];
  if (!configured.length) return discovered;
  if (!discovered.length) return configured;

  const map = new Map();
  configured.forEach((slide, index) => {
    const key =
      slide?.id != null && String(slide.id).trim() !== ""
        ? `id:${String(slide.id).trim()}`
        : `cfg:${index}`;
    map.set(key, slide);
  });
  discovered.forEach((slide) => {
    const idKey =
      slide?.id != null && String(slide.id).trim() !== ""
        ? `id:${String(slide.id).trim()}`
        : "";
    if (idKey && map.has(idKey)) return;
    const srcKey = `src:${slide.beforeSrc}|${slide.afterSrc}`;
    if (map.has(srcKey)) return;
    map.set(idKey || srcKey, slide);
  });
  return Array.from(map.values());
};

export default function TreatmentPage({ treatment, packageGroups = [], addonTreatments = [] }) {
  const router = useRouter();
  const { t } = useTranslation("treatments");

  const currentLocale = typeof router.locale === "string" ? router.locale : "en";
  const localize = (field) => getLocalized(field, currentLocale);
  const { asPath } = router;

  if (!treatment) {
    return (
      <>
        <PromoBanner />
        <Header />
        <div className="text-center mt-10 text-red-600">
          <p>
            No treatment found for slug: <strong>{String(slug)}</strong>
          </p>
        </div>
        <Footer />
      </>
    );
  }

  const localizedName = localize(
    treatment.displayName || treatment.serviceDisplayName,
  );
  const localizedDescription = localize(treatment.description);
  const isRfMicroneedling = treatment.urlSlug === "sylfirm-rf-microneedling";
  const candidacy = {
    label: t("rfCandidacy.label"),
    title: t("rfCandidacy.title"),
    subtitle: t("rfCandidacy.subtitle"),
    cta: t("rfCandidacy.cta"),
  };
  const learnArticle = treatmentLearnLinks[treatment.urlSlug] || null;
  const learnTitle =
    learnArticle && learnArticle.i18nKey
      ? t(`learnArticle.items.${learnArticle.i18nKey}.title`, { defaultValue: "" })
      : "";
  const learnSubtitle =
    learnArticle && learnArticle.i18nKey
      ? t(`learnArticle.items.${learnArticle.i18nKey}.subtitle`, { defaultValue: "" })
      : "";
  const showLearnArticle = Boolean(learnArticle && learnTitle);

  return (
    <>
      <Head>
        <title>{localizedName} | Mave Medical Spa</title>
        <meta name="description" content={localizedDescription || `${localizedName} at Mave Medical Spa.`} />
        <meta property="og:title" content={`${localizedName} | Mave Medical Spa`} />
        <meta property="og:description" content={localizedDescription || `${localizedName} at Mave Medical Spa.`} />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks asPath={asPath} locale={currentLocale} />
      </Head>
      <section className="bg-white">
        <PromoBanner />
        <Header />
        <div className="pt-[96px] md:pt-[108px]">
          <Breadcrumbs
            className="sr-only"
            items={[
              { label: "Home", href: "/" },
              { label: "Treatments", href: "/treatments" },
              { label: localizedName },
            ]}
          />
          {/* locale prop is optional but useful if children need to localize too */}
          <TreatmentDetails treatment={treatment} locale={currentLocale} packageGroups={packageGroups} />
          <BeforeAfterCarousel
            gallery={treatment.beforeAfterGallery}
            locale={currentLocale}
            serviceName={localizedName}
          />
          <PricingTable
            treatment={treatment}
            locale={currentLocale}
            addonTreatments={addonTreatments}
            packageGroups={packageGroups}
          />
          <WhatToExpect expectations={treatment.expectations} locale={currentLocale} />
          {isRfMicroneedling && (
            <div className="max-w-5xl mx-auto px-6 pb-8">
              <div className="border border-gray-200 bg-white rounded-2xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {candidacy.label}
                  </p>
                  <p className="text-base font-semibold text-black">{candidacy.title}</p>
                  <p className="text-sm text-gray-600">{candidacy.subtitle}</p>
                </div>
                <NextLink
                  href="/rf-microneedling-candidacy"
                  locale={currentLocale}
                  className="inline-flex w-max shrink-0 whitespace-nowrap text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {candidacy.cta}
                </NextLink>
              </div>
            </div>
          )}
          {showLearnArticle && (
            <div className="max-w-5xl mx-auto px-6 pb-8">
              <div className="border border-gray-200 bg-white rounded-2xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {t("learnArticle.label")}
                  </p>
                  <p className="text-base font-semibold text-black">{learnTitle}</p>
                  {learnSubtitle ? <p className="text-sm text-gray-600">{learnSubtitle}</p> : null}
                </div>
                <NextLink
                  href={learnArticle.href}
                  locale={currentLocale}
                  className="inline-flex w-max shrink-0 whitespace-nowrap text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {t("learnArticle.cta")}
                </NextLink>
              </div>
            </div>
          )}
          <FAQSection faqs={treatment.faq} locale={currentLocale} />
          <ContactCTA />
          <PromoPackageSection />
          <InstagramFeed />
          <ReviewsSection />
        </div>
        <Footer />
      </section>
    </>
  );
}

export async function getStaticPaths({ locales = [] }) {
  const { allTreatments } = await import("@/lib/data/allTreatments");
  const paths = allTreatments
    .filter((t) => t?.urlSlug)
    .flatMap((t) =>
      locales.map((loc) => ({
        params: { slug: t.urlSlug },
        locale: loc,
      }))
    );
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ locale, params }) {
  const { allTreatments } = await import("@/lib/data/allTreatments");
  const { getPackageGroupsForTreatment } = await import("@/lib/utils/linkedPackages");
  const treatment = allTreatments.find((t) => t?.urlSlug === params?.slug);
  if (!treatment) {
    return { notFound: true };
  }
  const discoveredBeforeAfterGallery = await discoverBeforeAfterGalleryBySlug(treatment.urlSlug);
  const mergedBeforeAfterGallery = mergeBeforeAfterSlides(
    treatment.beforeAfterGallery,
    discoveredBeforeAfterGallery
  );
  const treatmentWithBeforeAfter =
    mergedBeforeAfterGallery.length > 0
      ? { ...treatment, beforeAfterGallery: mergedBeforeAfterGallery }
      : treatment;

  const addonTreatments = Array.from(
    new Map(
      (treatmentWithBeforeAfter.addOns || [])
        .map((addon) => {
          const match = allTreatments.find((t) => t?.urlSlug === addon.treatmentSlug);
          if (!match) return null;
          return [
            match.urlSlug,
            {
              urlSlug: match.urlSlug,
              serviceDisplayName: match.serviceDisplayName,
              displayName: match.displayName ?? match.serviceDisplayName ?? null,
              description: match.description,
              images: match.images,
              pricing: match.pricing,
              promoDetails: match.promoDetails,
              isPromoActive: match.isPromoActive,
            },
          ];
        })
        .filter(Boolean)
    ).values()
  );

  const packageGroups = getPackageGroupsForTreatment(treatmentWithBeforeAfter, locale);
  return {
    props: {
      treatment: treatmentWithBeforeAfter,
      packageGroups,
      addonTreatments,
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "treatments"],
        nextI18NextConfig
      )),
    },
  };
}
