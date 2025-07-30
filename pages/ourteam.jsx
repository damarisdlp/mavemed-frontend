import Head from "next/head";
import Image from "next/image";

// Shared components
import Header from "./components/Header";
import PromoBanner from "./components/PromoBanner";
import TreatmentCategories from "./components/TreatmentCategories";
import Footer from "./components/Footer";


export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team | Mave Medical Spa</title>
        <meta
          name="description"
          content="Explore cosmetic injectables, microneedling, laser treatments, and more at Mave Medical Spa — Tijuana’s leading med spa serving Southern California."
        />
        <script
          type="application/ld+json"
dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Mave Medical Spa",
        "image": "https://www.mavemedspa.com/logo.png",
        "url": "https://www.mavemedspa.com",
        "telephone": "+52-664-207-7675",
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
              ],
  "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Advanced Aesthetic Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Botox for Wrinkle Reduction",
                "description": "FDA-approved wrinkle relaxing injections to smooth frown lines, crow’s feet, and forehead lines."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Facial Balancing Fillers",
                "description": "Strategically placed hyaluronic acid fillers to restore facial symmetry, enhance contours, and create harmonious proportions."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "RF Microneedling (Scarlet S)",
                "description": "Radiofrequency microneedling for skin tightening, pore reduction, and scar remodeling."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PDO Thread Lifts",
                "description": "Minimally invasive skin lifting using dissolvable threads to redefine facial contours and stimulate collagen."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CO2 Laser Resurfacing",
                "description": "Fractional ablative laser to improve texture, fine lines, sun damage, and skin laxity."
              }
                    }
                ]
              }
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
            alt="Our Treatments"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-10 md:px-20">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                Our Treatments
              </h1>
              <p className="text-base md:text-lg">
                Specializing in cosmetic injectables, skin rejuvenation, and
                medical-grade therapies for results-driven beauty.
              </p>
            </div>
          </div>
        </div>

        {/* Treatment Categories */}
        <TreatmentCategories />
        <Footer />
        
      </div>
    </>
  );
}