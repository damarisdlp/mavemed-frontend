import { useRouter } from "next/router";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>{localizedName} | Mave Medical Spa</title>
        <meta name="description" content={localizedDescription || `${localizedName} at Mave Medical Spa.`} />
        <meta property="og:title" content={`${localizedName} | Mave Medical Spa`} />
        <meta property="og:description" content={localizedDescription || `${localizedName} at Mave Medical Spa.`} />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks />
      </Head>
      <section className="bg-white">
        <PromoBanner />
        <Header />
            {/* Hero Banner for Team Member */}
        <div className="bg-white">
          <div className="relative w-full h-[90px] md:h-[100px]">
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Treatments", href: "/treatments" },
              { label: localizedName },
            ]}
          />
        </div>
        {/* locale prop is optional but useful if children need to localize too */}
        <TreatmentDetails treatment={treatment} locale={currentLocale} />
        <PricingTable treatment={treatment} locale={currentLocale} />
        <WhatToExpect expectations={treatment.expectations} locale={currentLocale} />
        <FAQSection faqs={treatment.faq} locale={currentLocale} />
        <ContactCTA />
        <PromoPackageSection />
        <InstagramFeed />
        <ReviewsSection />
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
