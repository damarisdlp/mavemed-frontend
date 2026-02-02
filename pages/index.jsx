import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import HomeLeadForm from "@/components/HomeLeadForm";
import ApproachSection from "@/components/ApproachSection";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandCarousel from "@/components/BrandCarousel";
import PopularTreatments from "@/components/PopularTreatments";
import ContactCTA from "@/components/ContactCTA";
import LocationMap from "@/components/LocationSection";
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection";
import PromoPackageSection from "@/components/PromoPackageSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTop";
import SeoLinks from "@/components/SeoLinks";
import LeadPopupGate from "@/components/LeadPopupGate";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { asPath, locale } = useRouter();
  const isSpanish = locale === "es";
  const siteUrl = "https://www.mavemedspa.com";
  const pageTitle = isSpanish
    ? "Top Med Spa en Tijuana | Botox, Sculptra, RF Microneedling | Mave Medical Spa"
    : "Top Tijuana Med Spa | Botox, Sculptra, RF Microneedling | Mave Medical Spa";
  const pageDescription = isSpanish
    ? "Agenda tratamientos estéticos en Tijuana en Mave Medical Spa: Botox, Sculptra, RF microneedling, láser CO2, rellenos y hilos, a minutos de San Diego."
    : "Book aesthetic treatments in Tijuana at Mave Medical Spa: Botox, Sculptra, RF microneedling, CO2 laser, fillers, and threads-minutes from San Diego.";
  const ogTitle = isSpanish
    ? "Mave Medical Spa en Tijuana | Botox, Sculptra y Tratamientos con Láser"
    : "Mave Medical Spa in Tijuana | Botox, Sculptra & Laser Treatments";
  const ogDescription = isSpanish
    ? "Atención estética médica en Tijuana para pacientes de México y EE.UU. Botox, Sculptra, RF microneedling y tratamientos láser."
    : "Medical aesthetic care in Tijuana for U.S. and Mexico patients. Botox, Sculptra, RF microneedling, and laser treatments.";
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${siteUrl}/#medicalbusiness`,
        name: "Mave Medical Spa",
        url: siteUrl,
        image: `${siteUrl}/logo-mave.png`,
        telephone: "+52-664-207-7675",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Blvd Gral Rodolfo Sanchez Taboada 10512-Interior 8a, Segundo Piso",
          addressLocality: "Tijuana",
          addressRegion: "BC",
          postalCode: "22010",
          addressCountry: "MX",
        },
        sameAs: [
          "https://www.instagram.com/mavemedspa",
          "https://www.facebook.com/mavemedicalspa",
          "https://www.tiktok.com/@mavemedicalspa",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Mave Medical Spa",
        url: siteUrl,
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage-home`,
        url: siteUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: isSpanish ? "es" : "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#medicalbusiness` },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Tijuana med spa, book treatments, Botox Tijuana, Sculptra Tijuana, RF microneedling, CO2 laser, fillers, PDO threads, cross-border med spa"
        />
        <SeoLinks asPath={asPath} locale={locale} />

        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={`${siteUrl}/logo-mave.png`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={`${siteUrl}/logo-mave.png`} />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />
      </Head>
      <ScrollToTopButton />
      <LeadPopupGate />
      <PromoBanner />
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <HeroSection />
      <BrandCarousel />
      <HomeLeadForm />
      <ApproachSection />
      <PopularTreatments />
      <PromoPackageSection />
      <ContactCTA />
      <LocationMap />
      <InstagramFeed />

      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        async
      />

      <ReviewsSection />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "treatments", "location"],
        nextI18NextConfig
      )),
    },
  };
}
