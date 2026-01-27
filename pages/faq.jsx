import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import FAQSection from "@/components/FAQSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import { generalFaqs } from "@/lib/data/faqs/faqs";

export default function GeneralFaqPage() {
  return (
    <>
      <Head>
        <title>FAQ – Mave Medical Spa</title>
        <meta name="description" content="General questions about payments, scheduling, policies and more at Mave Medical Spa." />
        <meta property="og:title" content="FAQ – Mave Medical Spa" />
        <meta
          property="og:description"
          content="General questions about payments, scheduling, policies and more at Mave Medical Spa."
        />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:url" content="https://www.mavemedspa.com/faq" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.mavemedspa.com/faq" />
      </Head>

      <PromoBanner />
      <Header />

      <div className="bg-white">
        <div className="w-full max-w-4xl mx-auto px-4 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faq" },
            ]}
          />
        </div>
      </div>

      <main className="px-4 pt-[30%] md:pt-[5%] pb-20 max-w-4xl mx-auto bg-white">
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
