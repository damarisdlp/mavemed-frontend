import PromoBanner from "../components/PromoBanner";
import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutSection from "../components/AboutSection"
import InstagramFeed from "../components/InstagramFeed"
import Head from "next/head";

export default function AboutUs() {
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
    content="About Mave Medical Spa, Tijuana Med Spa, Medical Aesthetics Mexico, Aesthetic Clinic Mission, Cross-Border Cosmetic Care"
  />
  <meta property="og:title" content="About Us | Mave Medical Spa in Tijuana" />
  <meta property="og:description" content="Discover the philosophy behind Mave Medical Spa — blending ethical aesthetic care with cross-border accessibility and expert providers in Tijuana." />
  <meta property="og:image" content="https://www.mavemedspa.com/logo.png" />
  <meta property="og:url" content="https://www.mavemedspa.com/about-us" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://www.mavemedspa.com/about-us" />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Mave Medical Spa",
        "url": "https://www.mavemedspa.com",
        "logo": "https://www.mavemedspa.com/logo.png",
        "description": "Mave Medical Spa blends aesthetic expertise with ethical care, offering Botox, fillers, lasers, and regenerative treatments in Tijuana, Mexico — just minutes from the San Diego border.",
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
        "telephone": "+52-664-207-7675",
        "email": "info@mavemedspa.com",
        "priceRange": "$$",
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
        "sameAs": [
          "https://www.instagram.com/mavemedicalspa",
          "https://www.facebook.com/mavemedicalspa",
          "https://www.tiktok.com/mavemedicalspa",
        ]
      })
    }}
  />
</Head>
    <section>
        <PromoBanner/>
        <Header />
        <AboutSection />
        <InstagramFeed />
        <Footer />
    </section>
    </>
  )
}
