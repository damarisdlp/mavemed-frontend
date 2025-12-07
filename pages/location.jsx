import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header"
import LocationSection from "@/components/LocationSection"
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection"
import Footer from "@/components/Footer"
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

export default function Location() {
  return (
    <>
    <Head>
        <title>Location | Visit Mave Medical Spa in Tijuana</title>
        <meta
          name="description"
          content="Find Mave Medical Spa in Tijuana’s Zona Río. Just minutes from the San Diego border. View map, hours, and cross-border access info."
        />
        <meta
          name="keywords"
          content="Tijuana Med Spa Location, Mave Medical Spa Address, Medical Spa near San Diego Border, Tijuana Spa Map, How to Get to Mave Spa"
        />
        <meta property="og:title" content="Location | Visit Mave Medical Spa in Tijuana" />
        <meta
          property="og:description"
          content="Plan your visit to Mave Medical Spa — conveniently located in Tijuana’s Zona Río, just 5 minutes from the San Diego border. Cross-border patients welcome."
        />
        <meta property="og:image" content="https://www.mavemedspa.com/logo.png" />
        <meta property="og:url" content="https://www.mavemedspa.com/location" />
        <meta property="og:type" content="place" />
        <link rel="canonical" href="https://www.mavemedspa.com/location" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Mave Medical Spa",
              "image": "https://www.mavemedspa.com/logo.png",
              "url": "https://www.mavemedspa.com/location",
              "telephone": "+52-664-207-7675",
              "address": {
                "@type": "PostalAddress",
                "streetAddress":
                  "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso",
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
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
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
              "priceRange": "$$",
              "description":
                "Visit Mave Medical Spa in Tijuana’s Zona Río — just minutes from the San Diego–Tijuana border. Trusted for advanced facial aesthetics and medical skincare.",
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
    <div>
      <PromoBanner/>
        <Header />
        <LocationSection />
        <InstagramFeed />
        <ReviewsSection />
        <Footer />
    </div>
     </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["layout", "location", "home"], nextI18NextConfig)),
    },
  };
}
