import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoLeadInlinePopupForm from "@/components/PromoLeadInlinePopupForm";

const content = {
  en: {
    title: "Fill out the form below to get our promos",
    deviceLine: "ONLY AT MAVE MEDICAL SPA",
    subtitle:
      "At Mave, self love is not a quick fix or a dramatic change. It’s a mindful commitment to feeling good in your skin through durable, visible, natural looking results, built with intention and a real plan.",
    support:
      "Valentine’s Day is a soft nudge to choose yourself, and spring is a reset, a return, a rebirth. Here, that looks like collagen focused strategies, thoughtful combinations, and long term planning that respects your features and your lifestyle.",
    supportDevice:
      "Fill out the form below, and check your email to explore this seasons promo collection.",
  },
  es: {
    title: "Completa el formulario abajo para recibir nuestras promos",
    deviceLine: "SOLO EN MAVE MEDICAL SPA",
    subtitle:
      "En Mave, el amor propio no es un cambio drástico ni algo de una sola sesión. Es una decisión consciente de sentirte bien en tu piel con resultados visibles, duraderos y naturalmente armónicos, siempre con intención y un plan real.",
    support:
      "San Valentín es un recordatorio suave de elegirte, y la primavera es renovación, renacer, volver a ti. Aquí se traduce en estrategias enfocadas en colágeno, combinaciones inteligentes y planificación a largo plazo que respeta tus rasgos y tu estilo de vida.",
    supportDevice:
      "Completa el formulario de abajo y revisa tu correo para explorar la colección de promos de esta temporada.",
  },
};

export default function SpringValentinesMaveMedicalSpaPromos() {
  const router = useRouter();
  const locale = router.locale || "en";
  const copy = content[locale] || content.en;
  const canonical = `https://www.mavemedspa.com${
    locale === "es" ? "/es" : ""
  }/spring-valentines-mave-medical-spa-promos`;

  return (
    <>
      <Head>
        <title>{copy.title} | Mave Medical Spa</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonical} />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-4xl mx-auto px-6 pt-6 pb-4">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
            <img src="/mavepromo.png" alt="Mave promo" className="w-full h-auto" />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif text-black">{copy.title}</h1>
            {copy.deviceLine ? (
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mt-3">
                {copy.deviceLine}
              </p>
            ) : null}
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
            {copy.support ? <p className="text-sm text-gray-600 mt-2">{copy.support}</p> : null}
            {copy.supportDevice ? (
              <p className="text-sm text-gray-600 mt-2">{copy.supportDevice}</p>
            ) : null}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-12">
          <div id="promo-form" className="scroll-mt-24 md:scroll-mt-28">
            <PromoLeadInlinePopupForm />
          </div>
        </section>
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
        ["layout", "home"],
        nextI18NextConfig
      )),
    },
  };
}
