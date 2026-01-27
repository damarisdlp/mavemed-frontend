import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header"
import LocationSection from "@/components/LocationSection"
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection"
import Footer from "@/components/Footer"
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";

export default function Location() {
  const { asPath, locale } = useRouter();

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
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="place" />
        <SeoLinks asPath={asPath} locale={locale} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.mavemedspa.com/location#webpage",
              name: "Location | Visit Mave Medical Spa in Tijuana",
              url: "https://www.mavemedspa.com/location",
              description:
                "Plan your visit to Mave Medical Spa — conveniently located in Tijuana’s Zona Río, just minutes from the San Diego border.",
              about: {
                "@id": "https://www.mavemedspa.com/#organization",
              },
              mainEntity: {
                "@type": "Place",
                name: "Mave Medical Spa",
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
              },
            })
          }}
        />
      </Head>
    <div>
      <PromoBanner/>
        <Header />
        <div className="bg-[#efeee7]">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Location", href: "/location" },
              ]}
            />
          </div>
        </div>
           {/* Hero Banner for Team Member */}
              <div className="bg-[#efeee7]">
                <div className="relative w-full h-[50px] md:h-[60px]">
                        </div>
                </div>
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
