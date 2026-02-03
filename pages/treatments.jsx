import Head from "next/head";
import Image from "next/image";

// Shared components
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import TreatmentCategories from "@/components/TreatmentCategories";
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection"
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getLocalized } from "@/lib/i18n/getLocalized";


export default function TreatmentsPage({ categories = [] }) {
  const { t } = useTranslation("treatments");
  const { locale, asPath } = useRouter();
  const currentLocale = typeof locale === "string" ? locale : "en";
  const bannerTitle =
    currentLocale?.startsWith("es")
      ? t("treatmentsPage.bannerTitle", {
          lng: "es",
          defaultValue: "Nuestros Tratamientos",
        })
      : t("treatmentsPage.bannerTitle", {
          lng: "en",
          defaultValue: "Our Treatments",
        });
  const bannerSubtitle =
    currentLocale?.startsWith("es")
      ? t("treatmentsPage.bannerSubtitle", {
          lng: "es",
          defaultValue:
            "Especialistas en inyectables cosméticos, rejuvenecimiento de la piel y terapias de grado médico para resultados que sí se notan.",
        })
      : t("treatmentsPage.bannerSubtitle", {
          lng: "en",
          defaultValue:
            "Specializing in cosmetic injectables, skin rejuvenation, and medical-grade therapies for results-driven beauty.",
        });

  return (
    <>
      <Head>
        <title>Advanced Aesthetic Treatments in Tijuana | Mave Medical Spa</title>
        <meta
          name="description"
          content="Explore Botox®, dermal fillers, microneedling, CO2 lasers, and thread lifts at Mave Medical Spa — trusted by patients from Tijuana, San Diego, Los Angeles, and Southern California."
        />
        <meta
          name="keywords"
          content="Tijuana Medical Spa, Botox® Tijuana, Sculptra®, Microneedling Mexico, CO2 Laser Tijuana, PDO Threads, RF Microneedling, Facial Rejuvenation"
        />
        <meta property="og:title" content="Advanced Aesthetic Treatments in Tijuana | Mave Medical Spa" />
        <meta property="og:description" content="Non-surgical aesthetic solutions: Botox®, fillers, lasers, and more at Mave Medical Spa. Serving cross-border clients from Southern California." />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks asPath={asPath} locale={locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": "https://www.mavemedspa.com/treatments#webpage",
              name: "Advanced Aesthetic Treatments in Tijuana | Mave Medical Spa",
              url: "https://www.mavemedspa.com/treatments",
              description:
                "Explore Botox®, dermal fillers, microneedling, CO2 lasers, and thread lifts at Mave Medical Spa.",
              about: {
                "@id": "https://www.mavemedspa.com/#organization",
              },
              mainEntity: {
                "@type": "OfferCatalog",
                name: "Advanced Aesthetic Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Botox® for Wrinkle Reduction",
                      description:
                        "FDA-approved wrinkle relaxing injections to smooth frown lines, crow’s feet, and forehead lines.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Facial Balancing Fillers",
                      description:
                        "Strategically placed hyaluronic acid fillers to restore facial symmetry, enhance contours, and create harmonious proportions.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "RF Microneedling (Scarlet S)",
                      description:
                        "Radiofrequency microneedling for skin tightening, pore reduction, and scar remodeling.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "PDO Thread Lifts",
                      description:
                        "Minimally invasive skin lifting using dissolvable threads to redefine facial contours and stimulate collagen.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CO2 Laser Resurfacing",
                      description:
                        "Fractional ablative laser to improve texture, fine lines, sun damage, and skin laxity.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      {/* Promo + Header */}
      <PromoBanner />
      <Header />

      {/* Hero Banner */}
      <div className="bg-white pt-[4%] md:pt-0 md:mt-15">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Treatments", href: "/treatments" },
            ]}
          />
        </div>
        <div className="relative w-full h-[320px] md:h-[300px]">
          <div className="absolute inset-0 bg-white flex items-center justify-start px-10 md:px-20">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-black font-serif font-medium mt-15 mb-4">
                {bannerTitle}
              </h1>
              <p className="mb-6 text-base md:text-lg text-black">
                {bannerSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Treatment Categories */}
        <TreatmentCategories categories={categories} />
        <InstagramFeed />
        <ReviewsSection />
        <Footer />
        
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { allTreatments } = await import("@/lib/data/allTreatments");
  const { default: categoryOrder } = await import("@/lib/data/normalized/categories.json");
  const currentLocale = locale || "en";
  const localize = (field) => getLocalized(field, currentLocale);

  const categoriesMap = {};
  allTreatments.forEach((t) => {
    if (!t || !t.category) return;
    const key = t.category;
    if (!categoriesMap[key]) {
      categoriesMap[key] = {
        title: localize(t.categoryDisplayName),
        services: [],
      };
    }
    const optionFields = (t.pricing?.options || []).flatMap((opt) => [
      localize(opt.optionName),
      ...(opt.notes || []).map((note) => localize(note)),
    ]);
    categoriesMap[key].services.push({
      name: localize(t.displayName || t.serviceDisplayName),
      slug: t.urlSlug,
      image: t.images?.primary || "/placeholder.jpg",
      description: localize(t.description),
      searchFields: [
        localize(t.displayName || t.serviceDisplayName),
        localize(t.description),
        localize(t.details),
        ...(t.notes || []).map((note) => localize(note)),
        ...(t.goals || []).map((goal) => localize(goal)),
        ...(t.treatableAreas || []).map((area) => localize(area)),
        ...optionFields,
      ].filter(Boolean),
    });
  });

  const categories = categoryOrder
    .map((entry) => categoriesMap[entry.slug])
    .filter(Boolean);

  return {
    props: {
      categories,
      ...(await serverSideTranslations(locale ?? "en", ["layout", "treatments", "home"], nextI18NextConfig)),
    },
  };
}
