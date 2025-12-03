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
  console.log("All treatments:", allTreatments.map((t) => t.urlSlug));

  if (!router.isReady) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const treatment = allTreatments.find((t) => t.urlSlug === slug);

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

  return (
    <>
      <Head>
        <title>{localizedName} | Mave Medical Spa</title>
      </Head>
      <section className="bg-white">
        <PromoBanner />
        <Header />
        {/* locale prop is optional but useful if children need to localize too */}
        <TreatmentDetails treatment={treatment} locale={currentLocale} />
        <PricingTable treatment={treatment} locale={currentLocale} />
        <WhatToExpect expectations={treatment.expectations} locale={currentLocale} />
        <FAQSection faqs={treatment.faq} locale={currentLocale} />
        <ContactCTA />
        <PromoPackageSection />
        <Footer />
      </section>
    </>
  );
}