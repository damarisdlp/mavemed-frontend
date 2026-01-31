import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

const WHATSAPP_LINK = "https://wa.me/526642077675";

const content = {
  en: {
    title: "Thank You",
    subtitle: "Your Sculptra + RF package candidacy assessment has been received.",
    body: [
      "Our team will review your information and contact you.",
      "If the package isn’t the best option, we’ll guide you to safer alternatives.",
    ],
    cta: "Continue on WhatsApp",
  },
  es: {
    title: "Gracias",
    subtitle: "Hemos recibido tu evaluación de candidatura para Sculptra + RF.",
    body: [
      "Nuestro equipo revisará tu información y te contactará pronto.",
      "Si el paquete no es la mejor opción, te orientaremos con alternativas seguras.",
    ],
    cta: "Continuar en WhatsApp",
  },
};

export default function ThankYouSculptraRf() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const title = `${copy.title} | Mave Medical Spa`;
  const description = copy.subtitle;
  const canonical = `https://www.mavemedspa.com${locale === "es" ? "/es" : ""}/thank-you-sculptra-rf`;

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
          <h1 className="text-3xl md:text-4xl font-serif text-black">{copy.title}</h1>
          <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          <div className="text-sm text-gray-600 mt-6 space-y-2">
            {copy.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-[#731a2f] transition"
            >
              {copy.cta}
            </a>
            <a
              href={locale === "es" ? "/es" : "/"}
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm hover:border-black transition"
            >
              {locale === "es" ? "Volver al inicio" : "Return Home"}
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
      ...(await serverSideTranslations(locale ?? "en", ["layout", "home"], nextI18NextConfig)),
    },
  };
}
