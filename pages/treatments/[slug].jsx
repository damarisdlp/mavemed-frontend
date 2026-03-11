import { useRouter } from "next/router";
import Head from "next/head";
import NextLink from "next/link";
import Script from "next/script";

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
import BrandCarousel from "@/components/BrandCarousel";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";
import {
  discoverBeforeAfterGalleryBySlug,
  mergeBeforeAfterSlides,
} from "@/lib/utils/beforeAfterGallery";
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
  "bio-revitalization-french-glow": {
    href: "/learn/nctf-135-ha-skin-quality-guide",
    i18nKey: "nctf",
  },
  "facial-balancing-fillers": {
    href: "/learn/allergan-aesthetics-hyaluronic-acid-fillers",
    i18nKey: "allerganFillers",
  },
  "hyaluronic-acid-lip-fillers": {
    href: "/learn/vivacy-stylage-m-hyaluronic-acid-filler",
    i18nKey: "vivacyFillers",
  },
  "mesotherapy-infusions": {
    href: "/learn/allergan-aesthetics-hyaluronic-acid-fillers",
    i18nKey: "skinviveEducation",
  },
  "wrinkle-reducers-neuromodulator": {
    href: "/learn/allergan-aesthetics-neuromodulator-botox",
    i18nKey: "botoxAllerganGuide",
  },
};

const LIP_FILLER_VIDEO_CARD = {
  profileHref: "https://www.tiktok.com/@mavemedicalspa?refer=embed",
  postHref: "https://www.tiktok.com/@mavemedicalspa/video/7594555458682195255",
  audioHref:
    "https://www.tiktok.com/music/sonido-original-7594555682754480909?refer=embed",
  videoId: "7594555458682195255",
  copy: {
    en: {
      title: "Video explainer",
      body:
        "Watch our full lip correction protocol, from dissolving previous filler to reapplying with Vivacy Hyaluronic Acid Fillers.",
      creatorLabel: "@mavemedicalspa",
      postCaption:
        "Paciente que nos visitó desde San Diego. Primero realizamos la aplicación de hialuronidasa para corregir y preparar la zona, y una semana después regresó para aplicar ácido hialurónico, logrando un resultado más armónico y natural. En Mave Medical Spa cuidamos cada paso del proceso para tu seguridad y resultados. Agenda tu valoración.",
      audioLabel: "sonido original - Mave Medical Spa",
      cta: "Open the TikTok post",
    },
    es: {
      title: "Video explicativo",
      body:
        "Mira nuestro protocolo completo de correccion labial, desde disolver relleno previo hasta reaplicar con rellenos de Acido Hialuronico Vivacy.",
      creatorLabel: "@mavemedicalspa",
      postCaption:
        "Paciente que nos visito desde San Diego. Primero realizamos la aplicacion de hialuronidasa para corregir y preparar la zona, y una semana despues regreso para aplicar acido hialuronico, logrando un resultado mas armonico y natural. En Mave Medical Spa cuidamos cada paso del proceso para tu seguridad y resultados. Agenda tu valoracion.",
      audioLabel: "sonido original - Mave Medical Spa",
      cta: "Abrir la publicacion de TikTok",
    },
  },
};

export default function TreatmentPage({ treatment, packageGroups = [], addonTreatments = [] }) {
  const router = useRouter();
  const { t } = useTranslation("treatments");

  const currentLocale = typeof router.locale === "string" ? router.locale : "en";
  const normalizedLocale = currentLocale.toLowerCase().startsWith("es") ? "es" : "en";
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
  const isLipFillersPage = treatment.urlSlug === "hyaluronic-acid-lip-fillers";
  const lipFillerVideoCopy = LIP_FILLER_VIDEO_CARD.copy[normalizedLocale];

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
          {isLipFillersPage ? (
            <div className="max-w-5xl mx-auto px-6 pb-8">
              <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  {lipFillerVideoCopy.title}
                </p>
                <p className="text-sm text-gray-700">{lipFillerVideoCopy.body}</p>
                <div className="pt-2">
                  <div className="mx-auto flex justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white px-2 py-4">
                    <blockquote
                      className="tiktok-embed"
                      cite={LIP_FILLER_VIDEO_CARD.postHref}
                      data-video-id={LIP_FILLER_VIDEO_CARD.videoId}
                      style={{ maxWidth: "605px", minWidth: "325px" }}
                    >
                      <section>
                        <a
                          target="_blank"
                          title={lipFillerVideoCopy.creatorLabel}
                          href={LIP_FILLER_VIDEO_CARD.profileHref}
                          rel="noreferrer"
                        >
                          {lipFillerVideoCopy.creatorLabel}
                        </a>
                        <p>{lipFillerVideoCopy.postCaption}</p>
                        <a
                          target="_blank"
                          title={lipFillerVideoCopy.audioLabel}
                          href={LIP_FILLER_VIDEO_CARD.audioHref}
                          rel="noreferrer"
                        >
                          {lipFillerVideoCopy.audioLabel}
                        </a>
                      </section>
                    </blockquote>
                  </div>
                  <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
                </div>
                <a
                  href={LIP_FILLER_VIDEO_CARD.postHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {lipFillerVideoCopy.cta}
                </a>
              </div>
            </div>
          ) : null}
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
          <BrandCarousel />
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
