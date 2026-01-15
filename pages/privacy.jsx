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
import { privacyContent } from "@/lib/data/pages/privacy";

export default function PrivacyPage() {
  const { locale = "en" } = useRouter();

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
          {locale === "es" ? "Política de Privacidad | Mave Medical Spa" : "Privacy Policy | Mave Medical Spa"}
        </title>
        <meta name="description" content={strings.desc} />
      </Head>

      <PromoBanner />
      <Header />

       {/* Hero Banner for Team Member */}
              <div className="bg-white">
                <div className="relative w-full h-[50px] md:h-[60px]">
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
              {locale === "es" ? "Contacto" : "Contact Us"}
            </p>
            <p>
              {locale === "es"
                ? "Si tiene dudas sobre este Aviso de Privacidad o desea ejercer sus derechos ARCO, contáctenos:"
                : "If you have questions about this Privacy Policy or wish to exercise your ARCO rights, contact us:"}
            </p>
            <p className="mt-2">
              Email:{" "}
              <a href={`mailto:${strings.contactEmail}`} className="underline text-[#731a2f]">
                {strings.contactEmail}
              </a>
            </p>
            <p>
              {locale === "es" ? "Teléfono:" : "Phone:"}{" "}
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
      ...(await serverSideTranslations(locale ?? "en", ["layout", "home", "location"], nextI18NextConfig)),
    },
  };
}
