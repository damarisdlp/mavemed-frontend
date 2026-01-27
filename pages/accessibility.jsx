import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import { accessibilityContent } from "@/lib/data/pages/accessibility";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";

export default function AccessibilityPage() {
  const { locale = "en", asPath } = useRouter();

  const renderParagraph = (para, key) => {
    const email = "info@mavemedspa.com";
    const phoneDisplay = "+52 (664) 207 7675";
    const phoneHref = "+526642077675";

    if (para.includes(email)) {
      const [label = "", rest = ""] = para.split(":");
      return (
        <p key={key}>
          {label || para.replace(email, "").trim()}
          {label ? ":" : ""}{" "}
          <a href={`mailto:${email}`} className="text-[#731a2f] underline">
            {email}
          </a>
          {rest && rest.replace(email, "")}
        </p>
      );
    }

    if (para.includes(phoneDisplay)) {
      const [label = "", rest = ""] = para.split(":");
      return (
        <p key={key}>
          {label || para.replace(phoneDisplay, "").trim()}
          {label ? ":" : ""}{" "}
          <a href={`tel:${phoneHref}`} className="text-[#731a2f] underline">
            {phoneDisplay}
          </a>
          {rest && rest.replace(phoneDisplay, "")}
        </p>
      );
    }

    return <p key={key}>{para}</p>;
  };

  return (
    <>
      <Head>
        <title>
          {locale === "es" ? "Accesibilidad | Mave Medical Spa" : "Accessibility | Mave Medical Spa"}
        </title>
        <meta
          name="description"
          content={accessibilityContent.intro[locale] || accessibilityContent.intro.en}
        />
        <meta
          property="og:title"
          content={locale === "es" ? "Accesibilidad | Mave Medical Spa" : "Accessibility | Mave Medical Spa"}
        />
        <meta
          property="og:description"
          content={accessibilityContent.intro[locale] || accessibilityContent.intro.en}
        />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks asPath={asPath} locale={locale} />
      </Head>

      <PromoBanner />
      <Header />

       {/* Hero Banner for Team Member */}
              <div className="bg-white">
                <div className="relative w-full h-[50px] md:h-[60px]">
                        </div>
                </div>

      <div className="bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: locale === "es" ? "Accesibilidad" : "Accessibility", href: "/accessibility" },
            ]}
          />
        </div>
      </div>

      <main className="bg-white">
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-15 pb-15">
          <h1 className="text-black font-serif font-medium mb-2 leading-tight text-[clamp(2rem,5vw,3rem)]">
            {accessibilityContent.title[locale] || accessibilityContent.title.en}
          </h1>
          <p className="text-sm text-gray-500 mb-3">
            {accessibilityContent.lastUpdated[locale] || accessibilityContent.lastUpdated.en}
          </p>
          <p className="text-gray-700 mb-6">
            {accessibilityContent.intro[locale] || accessibilityContent.intro.en}
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {accessibilityContent.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-lg font-semibold text-black">
                  {section.heading[locale] || section.heading.en}
                </h2>
                <div className="space-y-2">
                  {(section.body[locale] || section.body.en).map((para, pIdx) =>
                    renderParagraph(para, pIdx)
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <InstagramFeed />
        <ReviewsSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["layout", "home", "location"], nextI18NextConfig)),
    },
  };
}
