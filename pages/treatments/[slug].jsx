import { useRouter } from "next/router";
import Head from "next/head";
import { treatments } from "../../data/treatments";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromoBanner from "../components/PromoBanner";
import TreatmentDetails from "../components/TreatmentDetails";
import PricingTable from "../components/PricingTable";
import WhatToExpect from "../components/WhatToExpect";
import FAQSection from "../components/FAQSection";
import ContactCTA from "../components/ContactCTA";
import PromoPackageSection from "../components/PromoPackageSection";

export default function TreatmentPage() {
  const router = useRouter();
  const { slug } = router.query;
  if (!router.isReady) return <p className="text-center mt-10">Loading...</p>;

  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) {
    return (
      <>
        <PromoBanner />
        <Header />
        <div className="text-center mt-10 text-red-600">
          <p>No treatment found for slug: <strong>{slug}</strong></p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{treatment.displayName} | Mave Medical Spa</title>
      </Head>
      <section className="bg-white">
      <PromoBanner />
      <Header />
      <TreatmentDetails treatment={treatment} />
      <PricingTable treatment={treatment} />
      <WhatToExpect expectations={treatment.expectations} />
      <FAQSection faqs={treatment.faq} />
      <ContactCTA/>
      <PromoPackageSection/>
<Footer />
</section>
    </>
  );
}