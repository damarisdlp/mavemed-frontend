import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactUs from "@/components/ContactUs"
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection"
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";

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
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:url" content="https://www.mavemedspa.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="email" content="info@mavemedspa.com" />
        <SeoLinks />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "@id": "https://www.mavemedspa.com/contact#webpage",
              name: "Contact Us | Mave Medical Spa in Tijuana",
              url: "https://www.mavemedspa.com/contact",
              description:
                "Call, WhatsApp, or email Mave Medical Spa in Tijuana to book your next appointment.",
              about: {
                "@id": "https://www.mavemedspa.com/#organization",
              },
              mainEntity: {
                "@type": "ContactPoint",
                telephone: "+52-664-207-7675",
                email: "info@mavemedspa.com",
                contactType: "Customer Service",
                areaServed: "MX",
                availableLanguage: ["English", "Spanish"],
              },
            })
          }}
        />
      </Head>
    <div>
      <PromoBanner/>
        <Header/>
        <div className="bg-white">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>
        </div>
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
