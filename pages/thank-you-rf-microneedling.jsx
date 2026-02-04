import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

const WHATSAPP_LINK = "https://wa.me/526642077675";

export default function ThankYouRFMicroneedling() {
  const { locale = "en" } = useRouter();
  const { t } = useTranslation("thankyou");
  const title = `${t("shared.title")} | Mave Medical Spa`;
  const description = t("rfMicroneedling.subtitle");
  const canonical = `https://www.mavemedspa.com${locale === "es" ? "/es" : ""}/thank-you-rf-microneedling`;
  const bodyLines = [
    t("rfMicroneedling.bodyLine1"),
    t("rfMicroneedling.bodyLine2"),
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {/* Google Ads conversion tag: Submit lead form (1) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "gtag('event', 'conversion', {'send_to': 'AW-17411135904/gUVeCN2HmPIbEKCzo-5A'});",
          }}
        />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-black">
            {t("shared.title")}
          </h1>
          <p className="text-base text-gray-700 mt-3">{t("rfMicroneedling.subtitle")}</p>
          <div className="text-sm text-gray-600 mt-6 space-y-2">
            {bodyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-[#731a2f] transition"
            >
              {t("shared.ctaWhatsapp")}
            </a>
            <a
              href={locale === "es" ? "/es" : "/"}
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm hover:border-black transition"
            >
              {t("shared.returnHome")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "thankyou"],
        nextI18NextConfig
      )),
    },
  };
}
