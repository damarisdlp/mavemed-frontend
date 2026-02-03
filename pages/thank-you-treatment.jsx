import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

const WHATSAPP_LINK = "https://wa.me/526642077675";

export default function ThankYouTreatment() {
  const { locale = "en", query } = useRouter();
  const { t } = useTranslation("thankyou");
  const service = typeof query.service === "string" ? query.service : "";
  const [whatsappLink, setWhatsappLink] = useState(WHATSAPP_LINK);
  const title = `${t("shared.title")} | Mave Medical Spa`;
  const description = t("treatment.subtitle");
  const canonical = `https://www.mavemedspa.com${locale === "es" ? "/es" : ""}/thank-you-treatment`;
  const bodyLines = [t("treatment.bodyLine1"), t("treatment.bodyLine2")];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.sessionStorage.getItem("mave_treatment_inquiry");
    const data = stored ? JSON.parse(stored) : null;

    const lines = [
      t("treatment.whatsapp.intro"),
      data?.firstName ? t("treatment.whatsapp.name", { name: data.firstName }) : null,
      data?.treatmentInterest
        ? t("treatment.whatsapp.treatment", { service: data.treatmentInterest })
        : service
        ? t("treatment.whatsapp.treatment", { service })
        : null,
      data?.bestDays || data?.bestTimes
        ? t("treatment.whatsapp.availability", {
            days: data?.bestDays || t("treatment.whatsapp.anyDay"),
            times: data?.bestTimes || t("treatment.whatsapp.anyTime"),
          })
        : null,
    ];

    const message = lines.filter(Boolean).join("\n");
    if (message) {
      setWhatsappLink(`https://wa.me/526642077675?text=${encodeURIComponent(message)}`);
    }
  }, [locale, service, t]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-black">
            {t("shared.title")}
          </h1>
          <p className="text-base text-gray-700 mt-3">{t("treatment.subtitle")}</p>
          {service && (
            <p className="text-sm text-gray-600 mt-2">
              {t("shared.treatmentLabel")} {service}
            </p>
          )}
          <div className="text-sm text-gray-600 mt-6 space-y-2">
            {bodyLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={whatsappLink}
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-[#731a2f] transition"
            >
              {t("shared.ctaWhatsapp")}
            </a>
            <a
              href={locale === "es" ? "/es/treatments" : "/treatments"}
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm hover:border-black transition"
            >
              {t("shared.viewTreatments")}
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
