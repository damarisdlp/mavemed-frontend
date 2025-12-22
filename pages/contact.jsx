import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactUs from "@/components/ContactUs"
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection"
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

export default function Contact() {
  return (
    <>
    <Head>
        <title>Contact Us | Mave Medical Spa in Tijuana</title>
        <meta
          name="description"
          content="Get in touch with Mave Medical Spa in Tijuana. Call, WhatsApp, or email our front desk team. Located just 5 minutes from the San Diego border."
        />
        <meta
          name="keywords"
          content="Contact Mave Medical Spa, Tijuana Spa Phone, Medical Spa WhatsApp, Med Spa Email, Cross-border Spa Tijuana"
        />
        <meta property="og:title" content="Contact Us | Mave Medical Spa in Tijuana" />
        <meta
          property="og:description"
          content="Call, WhatsApp, or email Mave Medical Spa in Tijuana to book your next appointment. Easy access for patients visiting from San Diego and beyond."
        />
        <meta property="og:image" content="https://www.mavemedspa.com/logo.png" />
        <meta property="og:url" content="https://www.mavemedspa.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="email" content="info@mavemedspa.com" />
        <link rel="canonical" href="https://www.mavemedspa.com/contact" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Mave Medical Spa",
              "url": "https://www.mavemedspa.com/contact",
              "image": "https://www.mavemedspa.com/logo.png",
              "email": "info@mavemedspa.com",
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
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+52-664-207-7675",
                "email": "info@mavemedspa.com",
                "contactType": "Customer Service",
                "areaServed": "MX",
                "availableLanguage": ["English", "Spanish"]
              },
              "description":
                "Reach out to Mave Medical Spa — Tijuana’s trusted medical aesthetics team. Cross-border access, expert staff, and easy appointment scheduling via WhatsApp or email."
            })
          }}
        />
      </Head>
    <div>
      <PromoBanner/>
        <Header/>
           {/* Hero Banner for Team Member */}
              <div className="bg-white">
                <div className="relative w-full h-[50px] md:h-[60px]">
                        </div>
                </div>
        <ContactUs/>
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
      ...(await serverSideTranslations(locale ?? "en", ["layout", "contact", "home"], nextI18NextConfig)),
    },
  };
}
