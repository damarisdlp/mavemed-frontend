import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
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
    subtitle: "Your request has been received.",
    body: [
      "Our team will review your information and contact shortly.",
      "If your request needs additional details, we’ll let you know.",
    ],
    cta: "Continue on WhatsApp",
  },
  es: {
    title: "Gracias",
    subtitle: "Hemos recibido tu solicitud.",
    body: [
      "Nuestro equipo revisará tu información y te contactará pronto.",
      "Si necesitamos más detalles, te lo haremos saber.",
    ],
    cta: "Continuar en WhatsApp",
  },
};

export default function ThankYouTreatment() {
  const { locale = "en", query } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const service = typeof query.service === "string" ? query.service : "";
  const [whatsappLink, setWhatsappLink] = useState(WHATSAPP_LINK);
  const title = `${copy.title} | Mave Medical Spa`;
  const description = copy.subtitle;
  const canonical = `https://www.mavemedspa.com${locale === "es" ? "/es" : ""}/thank-you-treatment`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.sessionStorage.getItem("mave_treatment_inquiry");
    const data = stored ? JSON.parse(stored) : null;

    const lines =
      locale === "es"
        ? [
            "Hola, quiero agendar una cita.",
            data?.firstName ? `Nombre: ${data.firstName}` : null,
            data?.treatmentInterest
              ? `Tratamiento: ${data.treatmentInterest}`
              : service
              ? `Tratamiento: ${service}`
              : null,
            data?.bestDays || data?.bestTimes
              ? `Disponibilidad: ${data?.bestDays || "cualquier día"}, ${
                  data?.bestTimes || "cualquier horario"
                }`
              : null,
          ]
        : [
            "Hi, I'd like to request an appointment.",
            data?.firstName ? `Name: ${data.firstName}` : null,
            data?.treatmentInterest
              ? `Treatment: ${data.treatmentInterest}`
              : service
              ? `Treatment: ${service}`
              : null,
            data?.bestDays || data?.bestTimes
              ? `Availability: ${data?.bestDays || "any day"}, ${
                  data?.bestTimes || "any time"
                }`
              : null,
          ];

    const message = lines.filter(Boolean).join("\n");
    if (message) {
      setWhatsappLink(`https://wa.me/526642077675?text=${encodeURIComponent(message)}`);
    }
  }, [locale]);

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
          {service && (
            <p className="text-sm text-gray-600 mt-2">
              {locale === "es" ? "Tratamiento:" : "Treatment:"} {service}
            </p>
          )}
          <div className="text-sm text-gray-600 mt-6 space-y-2">
            {copy.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href={whatsappLink}
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-[#731a2f] transition"
            >
              {copy.cta}
            </a>
            <a
              href={locale === "es" ? "/es/treatments" : "/treatments"}
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm hover:border-black transition"
            >
              {locale === "es" ? "Ver tratamientos" : "View Treatments"}
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
