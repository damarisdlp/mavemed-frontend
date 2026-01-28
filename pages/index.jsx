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

  return (
    <>
     <Head>
  <title>Mave Medical Spa | Top Tijuana Med Spa for U.S. Patients – Botox, Fillers, Threads & Lasers</title>
  <meta
    name="description"
    content="Mave Medical Spa in Tijuana offers Botox, Sculptra, PDO threads, facial balancing, RF microneedling, and CO2 lasers — trusted by patients from San Diego, Los Angeles, and beyond. Safe, expert, and cross-border convenient."
  />
  <meta
    name="keywords"
    content="Tijuana med spa, Botox Tijuana, Fillers Mexico, Sculptra Tijuana, RF microneedling, facial balancing, PDO threads, CO2 laser, laser treatments Tijuana, medical tourism, cross-border med spa"
  />
  <SeoLinks asPath={asPath} locale={locale} />

  {/* Open Graph for Facebook/LinkedIn */}
  <meta property="og:title" content="Mave Medical Spa – Tijuana’s Best Med Spa for U.S. Clients" />
  <meta property="og:description" content="Experience expert facial rejuvenation at our modern Tijuana clinic. Botox, fillers, threads, microneedling, and lasers — just minutes from the U.S. border." />
  <meta property="og:image" content="https://www.mavemedspa.com/logo-mave.png" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:title" content="Mave Medical Spa | Tijuana Aesthetic Experts for U.S. Patients" />
  <meta name="twitter:description" content="Top-rated med spa for Botox, Sculptra, PDO threads, and more — serving SoCal & Tijuana patients looking for safe, natural results in Mexico." />
  <meta name="twitter:image" content="https://www.mavemedspa.com/logo-mave.png" />

</Head>
      <ScrollToTopButton />
      <LeadPopupGate />
      <PromoBanner />
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <HeroSection />
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
