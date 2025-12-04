import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import FAQSection from "@/components/FAQSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import { generalFaqs } from "@/lib/data/faqs/faqs";

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["layout"], nextI18NextConfig)),
    },
  };
}
