import Head from "next/head";
import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import PromoBanner from "../pages/components/PromoBanner";
import FAQSection from "../pages/components/FAQSection";

import { generalFaqs } from "@/data/faqs/faqs";

export default function GeneralFaqPage() {
  return (
    <>
      <Head>
        <title>FAQ – Mave Medical Spa</title>
        <meta name="description" content="General questions about payments, scheduling, policies and more at Mave Medical Spa." />
      </Head>

      <PromoBanner />
      <Header />

      <main className="px-4 pt-10 pb-20 max-w-4xl mx-auto">
        <FAQSection faqs={generalFaqs} />
      </main>

      <Footer />
    </>
  );
}