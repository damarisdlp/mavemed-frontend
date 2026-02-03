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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import { useTranslation } from "next-i18next";
import { getLocalized } from "@/lib/i18n/getLocalized";

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
          {isRfMicroneedling && (
            <div className="max-w-5xl mx-auto px-6 pb-8">
              <div className="border border-gray-200 bg-white rounded-2xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {candidacy.label}
                  </p>
                  <p className="text-base font-semibold text-black">{candidacy.title}</p>
                  <p className="text-sm text-gray-600">{candidacy.subtitle}</p>
                </div>
                <NextLink
                  href="/rf-microneedling-candidacy"
                  locale={currentLocale}
                  className="text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {candidacy.cta}
                </NextLink>
              </div>
            </div>
          )}
          <PricingTable
            treatment={treatment}
            locale={currentLocale}
            addonTreatments={addonTreatments}
            packageGroups={packageGroups}
          />
          <WhatToExpect expectations={treatment.expectations} locale={currentLocale} />
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

  const addonTreatments = Array.from(
    new Map(
      (treatment.addOns || [])
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

  const packageGroups = getPackageGroupsForTreatment(treatment, locale);
  return {
    props: {
      treatment,
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
