import Head from "next/head";
import Script from "next/script";
import { useState } from "react";

import LeadForm from "@/pages/components/LeadForm";
import ApproachSection from "./components/ApproachSection";
import PromoBanner from "./components/PromoBanner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PopularTreatments from "./components/PopularTreatments";
import AboutSection from "./components/AboutSection";
import ContactCTA from "./components/ContactCTA";
import LocationMap from "./components/LocationMap";
import ReviewsSection from "./components/ReviewsSection";
import PromoPackageSection from "./components/PromoPackageSection";
import Footer from "./components/Footer";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Mave Medical Spa - Top Medical Spa in Tijuana | Botox, Fillers, Sculptra, PDO Threads & Lasers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mave Medical Spa in Tijuana offers Botox, Sculptra, PDO threads, RF microneedling, and lasers — trusted by patients from San Diego, LA, and across SoCal. Safe, expert, and cross-border accessible."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mavemedspa.com/" />
        <meta
          property="og:title"
          content="Top Medical Spa in Tijuana | Botox, Fillers, Threads & Lasers"
        />
        <meta
          property="og:description"
          content="Cross-border aesthetic care for SoCal and Canadian clients. Botox, Sculptra, RF microneedling, lasers, and more."
        />
        <meta property="og:url" content="https://www.mavemedspa.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <PromoBanner />
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <HeroSection />
      <LeadForm />
      <ApproachSection />
      <PopularTreatments />
      <PromoPackageSection />
      <ContactCTA />
      <LocationMap />

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