import Head from "next/head";
import Image from "next/image";

// Shared components
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useTranslation } from "next-i18next";


export default function TeamPage() {
  const { t } = useTranslation("team");

  return (
    <>
      <Head>
        <title>Meet Our Expert Team | Mave Medical Spa in Tijuana</title>
        <meta
          name="description"
          content="Get to know the team behind Mave Medical Spa — licensed doctors, cosmetologists, and aesthetic specialists delivering personalized care in Tijuana, Mexico."
        />
        <meta
          name="keywords"
          content="Tijuana Med Spa Team, Aesthetic Specialists, Cosmetic Doctors Mexico, Injectables Experts, Skin Rejuvenation Tijuana"
        />
        <meta property="og:title" content="Meet Our Expert Team | Mave Medical Spa in Tijuana" />
        <meta property="og:description" content="Discover the talented team of doctors and specialists behind Mave Medical Spa — Tijuana’s top destination for natural, ethical cosmetic results." />
        <meta property="og:image" content="https://www.mavemedspa.com/logo.png" />
        <meta property="og:url" content="https://www.mavemedspa.com/aboutus" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.mavemedspa.com/aboutus" />

        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Mave Medical Spa",
        "url": "https://www.mavemedspa.com/aboutus",
        "logo": "https://www.mavemedspa.com/logo.png",
        "image": "https://www.mavemedspa.com/logo-mave.jpg",
        "description":
          "Meet the expert team behind Mave Medical Spa — a physician-led medical spa in Tijuana, Mexico, specializing in Botox, biostimulators, microneedling, lasers, and regenerative aesthetics.",
        "telephone": "+52-664-207-7675",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso",
          "addressLocality": "Tijuana",
          "addressRegion": "Baja California",
          "postalCode": "22010",
          "addressCountry": "MX"
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Veronica",
            "jobTitle": "Founder",
            "url": "https://www.mavemedspa.com/ourteam/veronica"
          },
          {
            "@type": "Person",
            "name": "Damaris",
            "jobTitle": "Chief Executive Director",
            "url": "https://www.mavemedspa.com/ourteam/damaris"
          },
          {
            "@type": "Person",
            "name": "Dra. Nataly",
            "jobTitle": "MD",
            "url": "https://www.mavemedspa.com/ourteam/drnataly"
          },
          {
            "@type": "Person",
            "name": "Dra. Jocelyn",
            "jobTitle": "MD",
            "url": "https://www.mavemedspa.com/ourteam/drjocelyn"
          },
          {
            "@type": "Person",
            "name": "Vicky",
            "jobTitle": "Cosmetologist",
            "url": "https://www.mavemedspa.com/ourteam/vicky"
          },
          {
            "@type": "Person",
            "name": "Manuel",
            "jobTitle": "Cosmetologist & Masseur",
            "url": "https://www.mavemedspa.com/ourteam/manuel"
          },
          {
            "@type": "Person",
            "name": "Mayra",
            "jobTitle": "Cosmetologist",
            "url": "https://www.mavemedspa.com/ourteam/mayra"
          },
          {
            "@type": "Person",
            "name": "Zury",
            "jobTitle": "Receptionist",
            "url": "https://www.mavemedspa.com/ourteam/zury"
          },
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.521,
          "longitude": -117.038
        },
        "priceRange": "$$",
        "description": "Meet the team behind Mave Medical Spa in Tijuana — expert doctors and licensed providers specializing in Botox, Sculptra, laser treatments, and microneedling. Serving patients from San Diego, Los Angeles, and across Southern California.",
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
              ],
            })
          }}
        />
      </Head>

      {/* Promo + Header */}
      <PromoBanner />
      <Header />

      {/* Hero Banner */}
      <div className="bg-white">
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/logo-mave.jpg"
            alt="Our Team"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-10 md:px-20">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                {t("team.bannerTitle")}
              </h1>
              <p className="text-base md:text-lg">
                {t("team.bannerSubtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <Team />
        <Footer />
        
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["layout", "team"], nextI18NextConfig)),
    },
  };
}
