import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import { privacyContent } from "@/lib/data/pages/privacy";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";

export default function PrivacyPage() {
  const { locale = "en", asPath } = useRouter();
  const { t } = useTranslation("legal");

  const strings = {
    title: privacyContent.title[locale] || privacyContent.title.en,
    desc: privacyContent.intro[locale] || privacyContent.intro.en,
    consent: privacyContent.consent[locale] || privacyContent.consent.en,
    lastUpdated: privacyContent.lastUpdated[locale] || privacyContent.lastUpdated.en,
    contactEmail: privacyContent.contact.email,
    contactPhone: locale === "es" ? privacyContent.contact.esPhone : privacyContent.contact.phone,
  };

  return (
    <>
      <Head>
        <title>
          {t("privacy.metaTitle")}
        </title>
        <meta name="description" content={strings.desc} />
        <meta
          property="og:title"
          content={t("privacy.metaTitle")}
        />
        <meta property="og:description" content={strings.desc} />
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
              { label: t("breadcrumbs.home"), href: "/" },
              { label: t("breadcrumbs.privacy"), href: "/privacy" },
            ]}
          />
        </div>
      </div>

      <main className="bg-white">
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-15 pb-15">
          <h1 className="text-black font-serif font-medium mb-4 leading-tight text-[clamp(2rem,5vw,3rem)]">
            {strings.title}
          </h1>
          <p className="text-sm text-gray-500 mb-2">{strings.lastUpdated}</p>
          <p className="text-gray-700 mb-4">{strings.desc}</p>
          <p className="text-gray-700 mb-6">{strings.consent}</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {privacyContent.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-lg font-semibold text-black">
                  {section.heading[locale] || section.heading.en}
                </h2>
                <div className="space-y-2">
                  {(section.body[locale] || section.body.en).map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-gray-700">
            <p className="font-semibold text-black mb-2">
              {t("privacy.contactTitle")}
            </p>
            <p>
              {t("privacy.contactText")}
            </p>
            <p className="mt-2">
              {t("privacy.emailLabel")}{" "}
              <a href={`mailto:${strings.contactEmail}`} className="underline text-[#731a2f]">
                {strings.contactEmail}
              </a>
            </p>
            <p>
              {t("privacy.phoneLabel")}{" "}
              <a href={`tel:${strings.contactPhone}`} className="underline text-[#731a2f]">
                {strings.contactPhone}
              </a>
            </p>
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
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "location", "legal"],
        nextI18NextConfig
      )),
    },
  };
}
