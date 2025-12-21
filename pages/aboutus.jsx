import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import Image from "next/image";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useTranslation } from "next-i18next";

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
        <meta property="og:image" content="https://www.mavemedspa.com/logo.png" />
        <meta property="og:url" content="https://www.mavemedspa.com/aboutus" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.mavemedspa.com/aboutus" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Mave Medical Spa",
              url: "https://www.mavemedspa.com",
              logo: "https://www.mavemedspa.com/logo.png",
              description:
                "Mave Medical Spa blends aesthetic expertise with ethical care, offering Botox, fillers, lasers, and regenerative treatments in Tijuana, Mexico — just minutes from the San Diego border.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso",
                addressLocality: "Tijuana",
                addressRegion: "Baja California",
                postalCode: "22010",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.521,
                longitude: -117.038,
              },
              telephone: "+52-664-207-7675",
              email: "info@mavemedspa.com",
              priceRange: "$$",
              areaServed: [
                { "@type": "Place", name: "Tijuana, Mexico" },
                { "@type": "Place", name: "San Diego, California" },
                { "@type": "Place", name: "Chula Vista, California" },
                { "@type": "Place", name: "Los Angeles, California" },
                { "@type": "Place", name: "East Los Angeles, California" },
                { "@type": "Place", name: "Santa Ana, California" },
                { "@type": "Place", name: "Anaheim, California" },
                { "@type": "Place", name: "Long Beach, California" },
                { "@type": "Place", name: "Riverside, California" },
                { "@type": "Place", name: "Ontario, California" },
                { "@type": "Place", name: "El Centro, California" },
                { "@type": "Place", name: "Calexico, California" },
                { "@type": "Place", name: "Brawley, California" },
                { "@type": "Place", name: "Oxnard, California" },
                { "@type": "Place", name: "Bakersfield, California" },
                { "@type": "Place", name: "Fontana, California" },
                { "@type": "Place", name: "Pomona, California" },
                { "@type": "Place", name: "San Bernardino, California" },
              ],
              sameAs: [
                "https://www.instagram.com/mavemedicalspa",
                "https://www.facebook.com/mavemedicalspa",
                "https://www.tiktok.com/mavemedicalspa",
              ],
            }),
          }}
        />
      </Head>

      <section>
        <PromoBanner />
        <Header />

        {/* Hero Banner */}
        <div className="bg-white">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/logo-mave.jpg"
              alt="About Mave Medical Spa"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-10 md:px-20">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                  {bannerTitle}
                </h1>
                <p className="text-base md:text-lg">{bannerSubtitle}</p>
              </div>
            </div>
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
