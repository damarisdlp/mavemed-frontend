import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import LeadForm from "@/components/LeadForm";
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

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
     <Head>
  <title>Mave Medical Spa | Top Tijuana Med Spa for U.S. Patients – Botox, Fillers, Threads & Lasers</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Mave Medical Spa in Tijuana offers Botox, Sculptra, PDO threads, facial balancing, RF microneedling, and CO2 lasers — trusted by patients from San Diego, Los Angeles, and beyond. Safe, expert, and cross-border convenient."
  />
  <meta
    name="keywords"
    content="Tijuana med spa, Botox Tijuana, Fillers Mexico, Sculptra Tijuana, RF microneedling, facial balancing, PDO threads, CO2 laser, laser treatments Tijuana, medical tourism, cross-border med spa"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.mavemedspa.com/" />

  {/* Open Graph for Facebook/LinkedIn */}
  <meta property="og:title" content="Mave Medical Spa – Tijuana’s Best Med Spa for U.S. Clients" />
  <meta property="og:description" content="Experience expert facial rejuvenation at our modern Tijuana clinic. Botox, fillers, threads, microneedling, and lasers — just minutes from the U.S. border." />
  <meta property="og:url" content="https://www.mavemedspa.com/" />
  <meta property="og:image" content="https://www.mavemedspa.com/logo.png" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mave Medical Spa | Tijuana Aesthetic Experts for U.S. Patients" />
  <meta name="twitter:description" content="Top-rated med spa for Botox, Sculptra, PDO threads, and more — serving SoCal & Tijuana patients looking for safe, natural results in Mexico." />
  <meta name="twitter:image" content="https://www.mavemedspa.com/logo.png" />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Mave Medical Spa",
        "url": "https://www.mavemedspa.com",
        "image": "https://www.mavemedspa.com/logo.png",
        "description": "Cross-border med spa offering injectables, laser treatments, and non-surgical rejuvenation for patients from the U.S. and Mexico.",
        "telephone": "+52 664 207 7675",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso",
          "addressLocality": "Tijuana",
          "addressRegion": "Baja California",
          "postalCode": "22010",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.521,
          "longitude": -117.038
        },
        "priceRange": "$$",
        "description": "Mave Medical Spa in Tijuana offers expert-level aesthetic services including facial balancing with dermal fillers, microneedling, Sculptra, CO2 laser resurfacing, and non-surgical skin lifting. Located 35 minutes from San Diego.",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
          }
        ],
        "areaServed": [
                { "@type": "Place", "name": "Tijuana, Mexico" },
                { "@type": "Place", "name": "San Diego, California" },
                { "@type": "Place", "name": "Chula Vista, California" },
                { "@type": "Place", "name": "Los Angeles, California" },
                { "@type": "Place", "name": "East Los Angeles, California" },
                { "@type": "Place", "name": "Santa Ana, California" },
                { "@type": "Place", "name": "Anaheim, California" },
                { "@type": "Place", "name": "Long Beach, California" },
                { "@type": "Place", "name": "Riverside, California" },
                { "@type": "Place", "name": "Ontario, California" },
                { "@type": "Place", "name": "El Centro, California" },
                { "@type": "Place", "name": "Calexico, California" },
                { "@type": "Place", "name": "Brawley, California" },
                { "@type": "Place", "name": "Oxnard, California" },
                { "@type": "Place", "name": "Bakersfield, California" },
                { "@type": "Place", "name": "Fontana, California" },
                { "@type": "Place", "name": "Pomona, California" },
                { "@type": "Place", "name": "San Bernardino, California" }
        ]
      })
    }}
  />
</Head>
      <ScrollToTopButton />
      <PromoBanner />
      <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <HeroSection />
      <LeadForm />
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
