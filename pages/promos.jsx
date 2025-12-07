import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";

const promoItems = [
  {
    title: "Seasonal Specials",
    description:
      "Limited-time offers on our most-requested treatments. Contact us to confirm current availability.",
  },
  {
    title: "Package Savings",
    description:
      "Bundle sessions for greater value. Our team can tailor a plan based on your goals.",
  },
  {
    title: "VIP & Loyalty Perks",
    description:
      "Ask about loyalty benefits for returning patients and referrals.",
  },
];

export default function PromosPage() {
  return (
    <>
      <Head>
        <title>Promotions | Mave Medical Spa</title>
        <meta
          name="description"
          content="Current promotions and special offers at Mave Medical Spa."
        />
      </Head>

      <PromoBanner />
      <Header />

      <main className="bg-white">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-serif font-medium text-black mb-6">
            Current Promotions
          </h1>
          <p className="text-gray-700 mb-8">
            Explore our latest offers. Reach out through the chat to confirm
            details, book, or personalize a package for your needs.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {promoItems.map((promo, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-5 bg-[#f9f9f9] shadow-sm"
              >
                <h2 className="text-xl font-semibold text-black mb-3">
                  {promo.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {promo.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <InstagramFeed />
        <ReviewsSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "location"],
        nextI18NextConfig
      )),
    },
  };
}
