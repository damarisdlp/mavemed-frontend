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
    description: privacyContent.description[locale] || privacyContent.description.en,
    documentHeading: privacyContent.document.heading[locale] || privacyContent.document.heading.en,
    documentLabel: privacyContent.document.label[locale] || privacyContent.document.label.en,
    documentHint: privacyContent.document.hint[locale] || privacyContent.document.hint.en,
    rightsHeading: privacyContent.rights.heading[locale] || privacyContent.rights.heading.en,
    rightsBody: privacyContent.rights.body[locale] || privacyContent.rights.body.en,
    contactText: privacyContent.contact.text[locale] || privacyContent.contact.text.en,
    contactEmail: privacyContent.contact.email,
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

      <div className="h-[50px] bg-white md:h-[60px]" aria-hidden="true" />

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
          <p className="text-gray-700 mb-4">{strings.desc}</p>
          <p className="text-gray-700 mb-6">{strings.description}</p>

          <div className="mb-8">
            <p className="font-semibold text-black mb-3">{strings.documentHeading}</p>
            <a
              href={privacyContent.document.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="privacy-document-hint"
              className="inline-flex items-center gap-2 rounded bg-[#731a2f] px-5 py-3 font-semibold text-white hover:bg-[#591424] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#731a2f]"
            >
              {strings.documentLabel}
              <span aria-hidden="true">↗</span>
            </a>
            <p id="privacy-document-hint" className="mt-3 text-sm italic text-gray-600">
              {strings.documentHint}
            </p>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-lg font-semibold text-black">{strings.rightsHeading}</h2>
            <p>{strings.rightsBody}</p>
            <p>{strings.contactText}</p>
            <p>
              <a href={`mailto:${strings.contactEmail}`} className="font-semibold underline text-[#731a2f]">
                {strings.contactEmail}
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
