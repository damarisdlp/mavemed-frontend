import { useRouter } from "next/router";
import Head from "next/head";
import NextLink from "next/link";
import { allTreatments } from "@/lib/data/allTreatments";

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

const getLocalized = (field, locale) => {
  if (typeof field === "object" && field !== null) {
    return field[locale] || field["en"] || "";
  }
  return field;
};

export default function TreatmentPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentLocale = typeof router.locale === "string" ? router.locale : "en";
  const { asPath } = router;

  console.log("Slug:", slug);
  console.log("Locale:", currentLocale);
  console.log(
    "All treatments:",
    allTreatments.filter(Boolean).map((t) => t.urlSlug)
  );

  if (!router.isReady) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const treatment = allTreatments.find(
    (t) => t && t.urlSlug === slug
  );

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

  const localizedName = getLocalized(
    treatment.displayName || treatment.serviceDisplayName,
    currentLocale
  );
  const localizedDescription = getLocalized(treatment.description, currentLocale);
  const isRfMicroneedling = treatment.urlSlug === "sylfirm-rf-microneedling";
  const candidacyCopy = {
    en: {
      title: "RF Microneedling Candidacy Assessment",
      subtitle: "Reviewed by a medical team before treatment planning.",
      cta: "Start assessment",
    },
    es: {
      title: "Evaluación de Candidatura para RF Microneedling",
      subtitle: "Revisado por un equipo médico antes de planear tratamiento.",
      cta: "Iniciar evaluación",
    },
  };
  const candidacy = candidacyCopy[currentLocale] || candidacyCopy.en;

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
          <TreatmentDetails treatment={treatment} locale={currentLocale} />
          {isRfMicroneedling && (
            <div className="max-w-5xl mx-auto px-6 pb-8">
              <div className="border border-gray-200 bg-white rounded-2xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    {currentLocale === "es" ? "Candidatura" : "Candidacy"}
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
          <PricingTable treatment={treatment} locale={currentLocale} />
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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["layout", "home"], nextI18NextConfig)),
    },
  };
}
