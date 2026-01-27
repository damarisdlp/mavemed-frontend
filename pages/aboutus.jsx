import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import Image from "next/image";
import Head from "next/head";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useTranslation } from "next-i18next";
import SeoLinks from "@/components/SeoLinks";

export default function AboutUs() {
  const { t } = useTranslation("home");

  const bannerTitle = t("aboutHero.title");
  const bannerSubtitle = t("aboutHero.subtitle");

  return (
    <>
      <Head>
        <title>About Us | Mave Medical Spa in Tijuana</title>
        <meta
          name="description"
          content="Learn about the mission and values of Mave Medical Spa — a leading destination for aesthetic medicine in Tijuana, Mexico, serving patients from San Diego and Southern California."
        />
        <meta
          name="keywords"
          content="About Mave Medical Spa, Tijuana Med Spa, Medical Aesthetics Mexico, Aesthetic Clinic Mission, Cross-Border Cosmetic Care, Medical Tourism, Tijuana Medical Tourism"
        />
        <meta property="og:title" content="About Us | Mave Medical Spa in Tijuana" />
        <meta
          property="og:description"
          content="Discover the philosophy behind Mave Medical Spa — blending ethical aesthetic care with cross-border accessibility and expert providers in Tijuana."
        />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "@id": "https://www.mavemedspa.com/aboutus#webpage",
              name: "About Us | Mave Medical Spa in Tijuana",
              url: "https://www.mavemedspa.com/aboutus",
              description:
                "Learn about the mission and values of Mave Medical Spa — a leading destination for aesthetic medicine in Tijuana, Mexico.",
              about: {
                "@id": "https://www.mavemedspa.com/#organization",
              },
            }),
          }}
        />
      </Head>

      <section>
        <PromoBanner />
        <Header />

        {/* Hero Banner */}
        <div className="bg-white">
          <div className="relative w-full h-[50px] md:h-[60px]">
          </div>
        </div>

        <div className="bg-white">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/aboutus" },
              ]}
            />
          </div>
        </div>

        <AboutSection />
        <InstagramFeed />
        <ReviewsSection />
        <Footer />
      </section>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home"],
        nextI18NextConfig
      )),
    },
  };
}
