import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const content = {
  en: {
    title: "Sylfirm X RF Microneedling",
    subtitle: "A medical approach to skin remodeling, texture, and pigmentation",
    intro: [
      "RF microneedling has become widely discussed in aesthetic medicine, but not all RF microneedling systems interact with the skin in the same way.",
      "Sylfirm X is an advanced RF microneedling platform designed to address concerns such as acne scarring, uneven skin texture, enlarged pores, early skin laxity, and pigmentation disorders, including melasma, when clinically appropriate.",
      "RF microneedling supports collagen remodeling, but collagen change is gradual. If you want to understand what collagen loss looks like with age and why results take time, visit our collagen timeline guide linked below.",
    ],
    sections: [
      {
        title: "What is RF microneedling?",
        body: [
          "RF microneedling combines two mechanisms:",
          "• Microneedles create controlled microchannels in the skin",
          "• Radiofrequency energy is delivered at specific depths within the dermis",
          "The goal is not surface exfoliation, but structural skin improvement through controlled thermal stimulation of collagen and supporting tissue.",
          "Because RF energy produces heat within biologically sensitive structures, device design, energy delivery, and operator control play a critical role in safety and outcomes.",
        ],
      },
      {
        title: "What makes Sylfirm X different from traditional RF microneedling systems?",
        body: [
          "Not all RF microneedling devices deliver energy in the same manner.",
          "Sylfirm X was developed to allow greater precision and flexibility in how RF energy is delivered, which is especially relevant for patients prone to pigmentation issues.",
        ],
      },
      {
        title: "Pulsed Wave and Continuous Wave RF",
        body: [
          "Sylfirm X offers multiple RF delivery modes, allowing providers to adjust how energy interacts with the skin based on the indication.",
          "This flexibility supports:",
          "• Customized treatment planning",
          "• Reduced thermal stress in pigmentation-prone skin",
          "• More controlled collagen stimulation",
          "This level of adaptability is not universal across RF microneedling platforms.",
          "For a deeper explanation of collagen remodeling timelines, see our collagen timeline guide.",
        ],
      },
      {
        title: "Precision depth control",
        body: [
          "Sylfirm X allows precise adjustment of needle depth and energy delivery based on:",
          "• Skin thickness",
          "• Treatment area",
          "• Clinical goal, such as acne scarring versus pigmentation",
          "Accurate depth control is essential when treating different skin types and conditions.",
        ],
      },
      {
        title: "Focus on vascular and pigment-related pathways",
        body: [
          "Sylfirm X was designed with conditions such as melasma and redness in mind, where vascular signaling and inflammation contribute to pigment dysregulation.",
          "This does not mean Sylfirm X is appropriate for all melasma cases, but it allows more conservative, risk-aware treatment planning when indicated.",
        ],
      },
      {
        title: "What skin concerns can Sylfirm X help improve?",
        body: [
          "When used appropriately and with medical oversight, Sylfirm X may be considered for:",
          "• Acne scarring",
          "• Uneven skin texture",
          "• Enlarged pores",
          "• Early to moderate skin laxity",
          "• Certain types of melasma or pigmentation disorders",
          "Results vary depending on:",
          "• Skin type and tone",
          "• Treatment consistency",
          "• Combination with other therapies",
          "• Adherence to post-treatment care",
          "No single device guarantees results, and RF microneedling is not always the best option for every concern.",
        ],
      },
      {
        title: "Is Sylfirm X safe for darker skin tones?",
        body: [
          "One reason Sylfirm X has gained attention is its potential use across a wider range of skin tones, when conservative protocols are followed.",
          "Safety depends on:",
          "• Proper patient selection",
          "• Individualized energy settings",
          "• Medical evaluation of pigmentation risk",
          "• Strict post-treatment care",
          "Patients with a history of post-inflammatory hyperpigmentation, keloid scarring, or inflammatory skin conditions require individual assessment before treatment planning.",
        ],
      },
      {
        title: "Why medical evaluation matters before RF microneedling",
        body: [
          "RF microneedling is a medical procedure, not a cosmetic facial.",
          "Before treatment, it is important to evaluate:",
          "• Skin tone and pigmentation history",
          "• Previous procedures and skin responses",
          "• Active inflammation or infection",
          "• Realistic expectations regarding outcomes",
          "This is why treatment planning should begin with a candidacy assessment, rather than immediate booking.",
          "Device choice alone does not determine safety or results. Medical oversight and thoughtful planning are equally important.",
        ],
      },
      {
        title: "How many sessions are typically needed?",
        body: [
          "Most patients require a series of treatments, rather than a single session.",
          "The number of sessions depends on:",
          "• Severity of the concern",
          "• Biological response of the skin",
          "• Whether combination therapies are recommended",
          "Collagen remodeling is gradual, and results continue to evolve over time.",
          "If you want a clearer month by month expectation, review our collagen timeline guide.",
        ],
      },
      {
        title: "Who may not be a candidate for Sylfirm X?",
        body: [
          "RF microneedling may not be appropriate for patients who are:",
          "• Pregnant or breastfeeding",
          "• Prone to keloid scarring",
          "• Experiencing active skin infections or inflammation",
          "• Seeking immediate or dramatic results from a single session",
          "These factors should be reviewed before proceeding with treatment.",
        ],
      },
    ],
    nextTitle: "From education to next steps",
    nextCopy:
      "If you are exploring RF microneedling and want to understand whether Sylfirm X is appropriate for your skin, the next step is a candidacy assessment reviewed by a medical team. You can also review collagen timelines to understand why results build gradually.",
    nextCta: "Begin RF microneedling candidacy assessment",
    collagenCardTitle: "Collagen education",
    collagenCardCopy:
      "Collagen remodeling is gradual. If you want to understand timelines and why results build over months, read our collagen timeline guide.",
    serviceLinksTitle: "Related services",
    serviceLinks: [
      {
        label: "RF Microneedling (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    collagenLinkLabel: "Read the collagen timeline guide",
    closingTitle: "A note on expectations",
    closingCopy: [
      "Advanced technology can support better outcomes, but it does not replace:",
      "• Medical judgment",
      "• Conservative treatment planning",
      "• Long-term skin health strategies",
      "Our approach prioritizes safety, realistic outcomes, and ethical use of technology.",
    ],
  },

  es: {
    title: "Sylfirm X RF Microneedling",
    subtitle: "Un enfoque médico para la remodelación de la piel, textura y pigmentación",
    intro: [
      "El RF microneedling se ha popularizado ampliamente en la medicina estética, sin embargo, no todos los dispositivos de RF microneedling actúan de la misma manera en la piel.",
      "Sylfirm X es una plataforma avanzada de RF microneedling diseñada para abordar preocupaciones como cicatrices de acné, textura irregular, poros dilatados, flacidez leve a moderada y trastornos de pigmentación, incluido el melasma, cuando está clínicamente indicado.",
      "El RF microneedling apoya la remodelación del colágeno, pero el colágeno cambia de forma gradual. Si quieres entender cómo se pierde colágeno con la edad y por qué los resultados toman tiempo, visita nuestra guía de línea de tiempo del colágeno enlazada abajo.",
    ],
    sections: [
      {
        title: "¿Qué es el RF microneedling?",
        body: [
          "El RF microneedling combina dos mecanismos:",
          "• Micropunciones controladas mediante microagujas",
          "• Energía de radiofrecuencia aplicada a profundidades específicas",
          "El objetivo no es exfoliar la superficie, sino estimular la remodelación del colágeno en la dermis de forma controlada.",
          "Dado que la radiofrecuencia genera calor en estructuras sensibles de la piel, el diseño del dispositivo y el control de parámetros son determinantes para la seguridad y los resultados.",
        ],
      },
      {
        title: "¿Qué diferencia a Sylfirm X de otros sistemas de RF microneedling?",
        body: [
          "No todos los dispositivos de RF microneedling entregan la energía de la misma forma.",
          "Sylfirm X fue desarrollado para ofrecer mayor control sobre cómo y dónde se libera la energía, lo cual es especialmente relevante en pacientes con riesgo de hiperpigmentación.",
        ],
      },
      {
        title: "RF de onda pulsada y continua",
        body: [
          "Sylfirm X permite diferentes modos de energía, lo que brinda flexibilidad clínica para:",
          "• Personalizar tratamientos",
          "• Reducir estrés térmico en pieles con tendencia a pigmentación",
          "• Estimular colágeno de manera más controlada",
          "Este nivel de precisión no está presente en todos los sistemas de RF microneedling.",
          "Para una explicación más clara de tiempos de remodelación, revisa nuestra guía de línea de tiempo del colágeno.",
        ],
      },
      {
        title: "Control preciso de profundidad",
        body: [
          "La profundidad de las agujas y la energía pueden ajustarse según:",
          "• Grosor de la piel",
          "• Zona a tratar",
          "• Indicación clínica, como cicatrices vs pigmentación",
          "Este nivel de precisión no está presente en todos los sistemas de RF microneedling.",
        ],
      },
      {
        title: "Enfoque en vías vasculares y pigmentarias",
        body: [
          "Sylfirm X fue diseñado considerando condiciones como el melasma, donde la inflamación y la señalización vascular juegan un papel importante.",
          "Esto no significa que sea adecuado para todos los casos de melasma, sino que permite una planificación más conservadora y segura cuando está indicado.",
        ],
      },
      {
        title: "¿Qué condiciones puede ayudar a mejorar Sylfirm X?",
        body: [
          "Cuando se utiliza de forma adecuada y con supervisión médica, Sylfirm X puede considerarse para:",
          "• Cicatrices de acné",
          "• Textura irregular de la piel",
          "• Poros dilatados",
          "• Flacidez leve a moderada",
          "• Algunos tipos de melasma o alteraciones de pigmentación",
          "Los resultados dependen de múltiples factores, incluyendo el tipo de piel, la constancia del tratamiento y el cumplimiento del cuidado posterior.",
        ],
      },
      {
        title: "¿Sylfirm X es seguro para tonos de piel más oscuros?",
        body: [
          "Uno de los aspectos que distingue a Sylfirm X es su potencial uso en una mayor variedad de fototipos, siempre que se utilicen protocolos adecuados.",
          "La seguridad depende de:",
          "• Selección correcta del paciente",
          "• Parámetros conservadores",
          "• Evaluación médica del riesgo pigmentario",
          "• Cuidado post tratamiento estricto",
          "Ningún tratamiento es universal. Pacientes con antecedentes de hiperpigmentación, queloides o inflamación activa requieren evaluación individual.",
        ],
      },
      {
        title: "¿Por qué es importante la evaluación médica antes del RF microneedling?",
        body: [
          "El RF microneedling es un procedimiento médico, no un tratamiento cosmético superficial.",
          "Antes de tratar, es fundamental evaluar:",
          "• Tono de piel y antecedentes pigmentarios",
          "• Tratamientos previos",
          "• Estado inflamatorio actual",
          "• Expectativas realistas",
          "Por esta razón, el proceso debe iniciar con una evaluación de candidatura, no con una reservación automática.",
        ],
      },
      {
        title: "¿Cuántas sesiones suelen ser necesarias?",
        body: [
          "La mayoría de los pacientes requieren múltiples sesiones.",
          "La cantidad depende de:",
          "• Severidad de la condición",
          "• Respuesta biológica de la piel",
          "• Uso de terapias combinadas",
          "La remodelación del colágeno es progresiva y continúa con el tiempo.",
          "Si quieres expectativas más claras por mes, revisa nuestra guía de línea de tiempo del colágeno.",
        ],
      },
      {
        title: "¿Quiénes pueden no ser candidatos?",
        body: [
          "Sylfirm X puede no ser adecuado para pacientes que:",
          "• Están embarazadas o lactando",
          "• Tienen tendencia a formar queloides",
          "• Presentan infecciones o inflamación activa",
          "• Buscan resultados inmediatos en una sola sesión",
        ],
      },
    ],
    nextTitle: "Siguiente paso",
    nextCopy:
      "Si estás considerando RF microneedling y deseas saber si Sylfirm X es adecuado para tu piel, el siguiente paso es una evaluación de candidatura revisada por un equipo médico. También puedes revisar los tiempos del colágeno para entender por qué los resultados se construyen gradualmente.",
    nextCta: "Iniciar evaluación de candidatura para RF microneedling",
    collagenCardTitle: "Educación sobre colágeno",
    collagenCardCopy:
      "La remodelación del colágeno es gradual. Si quieres entender los tiempos y por qué los resultados se construyen en meses, revisa la guía de colágeno.",
    serviceLinksTitle: "Servicios relacionados",
    serviceLinks: [
      {
        label: "Microneedling con RF (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    collagenLinkLabel: "Leer la guía de línea de tiempo del colágeno",
    closingTitle: "Nota sobre expectativas",
    closingCopy: [
      "La tecnología avanzada puede apoyar mejores resultados, pero no reemplaza:",
      "• Juicio médico",
      "• Planificación conservadora",
      "• Estrategias de salud cutánea a largo plazo",
      "Nuestro enfoque prioriza seguridad, resultados realistas y uso ético de la tecnología.",
    ],
  },
};

const slug = "/learn/sylfirm-x-rf-microneedling";
const BASE_URL = "https://www.mavemedspa.com";
const BUSINESS_PHONE = "+52-664-207-7675";
const WHATSAPP_LINK = "https://wa.me/526642077675";
const BUSINESS_ADDRESS = {
  streetAddress:
    "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso, Revolución",
  addressLocality: "Tijuana",
  addressRegion: "BC",
  postalCode: "22010",
  addressCountry: "MX",
};

const COLLAGEN_TIMELINE_SLUG = "/learn/collagen-loss-and-rebuilding-timeline";

export default function SylfirmXEducationPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/sylfirmx2.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${BASE_URL}/#medicalbusiness`,
        name: "Mave Medical Spa",
        url: BASE_URL,
        image: `${BASE_URL}/logo-mave.png`,
        telephone: BUSINESS_PHONE,
        address: {
          "@type": "PostalAddress",
          ...BUSINESS_ADDRESS,
        },
        sameAs: [WHATSAPP_LINK],
      },
      {
        "@type": "Website",
        "@id": `${BASE_URL}/#website`,
        name: "Mave Medical Spa",
        url: BASE_URL,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Learn",
            item: `${BASE_URL}/learn`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: copy.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${copy.title} | Mave Medical Spa`,
        description: copy.subtitle,
        inLanguage: locale === "es" ? "es" : "en",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: { "@id": `${BASE_URL}/#medicalbusiness` },
        about: { "@id": `${canonicalUrl}#medicalprocedure` },
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${canonicalUrl}#medicalprocedure`,
        name: "Sylfirm X RF Microneedling",
        alternateName: [
          "Sylfirm X melasma education",
          "Sylfirm X vs Morpheus8 education",
          "RF microneedling for acne scars",
        ],
        description:
          "Sylfirm X is an RF microneedling procedure used in aesthetic medicine to support collagen remodeling and improve concerns such as acne scars, texture, pores, early laxity, and certain pigmentation conditions including melasma when clinically appropriate.",
        procedureType: "Therapeutic",
        howPerformed:
          "A provider delivers radiofrequency energy through microneedles at controlled depths and settings based on skin type, skin condition, and treatment goal.",
        bodyLocation: ["Face", "Neck"],
        relevantSpecialty: ["Dermatology", "PlasticSurgery"],
        preparation:
          "Clinical assessment is performed to evaluate skin type, pigmentation risk, medical history, and treatment suitability.",
        followup:
          "Post treatment care and follow up recommendations vary by skin type and indication. Multiple sessions are commonly recommended.",
        riskFactor: [
          "Post inflammatory hyperpigmentation risk in pigmentation prone skin",
          "Not suitable for pregnancy or breastfeeding",
          "Not suitable for patients prone to keloid scarring",
          "Not suitable with active skin infection or active inflammation",
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{copy.title} | Mave Medical Spa</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${copy.title} | Mave Medical Spa`} />
        <meta property="og:description" content={copy.subtitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Mave Medical Spa" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${copy.title} | Mave Medical Spa`} />
        <meta name="twitter:description" content={copy.subtitle} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <PromoBanner />
      <Header />

      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-left max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Learn</p>
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">
              {copy.title}
            </h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
            {copy.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          {/* Cross link card, placed near the top for better UX and internal linking */}
          <div className="mt-8 max-w-3xl">
            <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {copy.collagenCardTitle}
              </p>
              <p className="text-sm text-gray-700">
                {copy.collagenCardCopy}
              </p>
              <a
                href={`/${locale === "es" ? "es/" : ""}${COLLAGEN_TIMELINE_SLUG.replace(
                  /^\//,
                  ""
                )}`}
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.collagenLinkLabel}
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-10">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xl font-serif text-black">{section.title}</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-black">{copy.nextTitle}</h3>
            <p className="text-sm text-gray-700">{copy.nextCopy}</p>

            <div className="flex flex-col gap-2">
              <a
                href={`/${locale === "es" ? "es/" : ""}rf-microneedling-candidacy`}
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.nextCta}
              </a>

              <a
                href={`/${locale === "es" ? "es/" : ""}${COLLAGEN_TIMELINE_SLUG.replace(
                  /^\//,
                  ""
                )}`}
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.collagenLinkLabel}
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-black">{copy.serviceLinksTitle}</h3>
            <div className="flex flex-col gap-2">
              {(copy.serviceLinks || []).map((link) => (
                <a
                  key={link.href}
                  href={`/${locale === "es" ? "es/" : ""}${link.href.replace(/^\//, "")}`}
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="border-t border-gray-200 pt-8 space-y-3">
            <h3 className="text-lg font-semibold text-black">{copy.closingTitle}</h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {copy.closingCopy.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export { slug };

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "treatments"],
        nextI18NextConfig
      )),
    },
  };
}
