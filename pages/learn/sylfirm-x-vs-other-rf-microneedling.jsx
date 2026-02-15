import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearnCategoryBreadcrumb from "@/components/learn/LearnCategoryBreadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const FDA_SAFETY_LINK =
  "https://www.fda.gov/medical-devices/safety-communications/potential-risks-certain-uses-radiofrequency-rf-microneedling-fda-safety-communication";

const COLLAGEN_EDU_SLUG = "/learn/collagen-loss-and-rebuilding-timeline";

const content = {
  en: {
    title: "Sylfirm X vs Other RF Microneedling Devices",
    subtitle:
      "How RF microneedling platforms differ, and what the FDA safety communication means for patients",
    intro: [
      "RF microneedling is often spoken about as one category, but **device design and energy delivery can vary significantly across platforms.**",
      "Because radiofrequency delivers heat into living tissue, **differences in control, depth, needle design, and treatment logic can directly affect both outcomes and risk.**",
      "This page explains what to compare across devices, where Sylfirm X fits clinically, and why the FDA has issued a safety communication about potential risks with certain uses of RF microneedling.",
    ],
    sections: [
      {
        title: "RF microneedling is not one uniform treatment",
        body: [
          "Two devices can both be called RF microneedling while **behaving very differently in tissue.**",
          "Differences can include needle configuration, depth range, energy mode, and how heat is distributed in the dermis.",
          "This is why a device name alone does not predict safety or results, **the treatment plan and provider technique matter just as much.**",
        ],
      },
      {
        title: "What patients should compare across RF microneedling platforms",
        body: [
          "When you compare devices, **focus on clinical control, not marketing language.**",
          "Key variables include:",
          "• Energy delivery mode, for example pulsed RF versus continuous RF",
          "• Depth control and whether depth can be adjusted precisely by zone",
          "• Needle and electrode design, including how the device concentrates heat at the needle tip",
          "• Tip options, pin count, treatment footprint, and how evenly energy is distributed",
          "• Safety features and parameter monitoring, especially for heat based procedures",
          "• Protocol adaptability for different skin tones and pigment risk profiles",
          "• Training expectations for operators and medical oversight requirements",
        ],
      },
      {
        title: "Where Sylfirm X fits",
        body: [
          "Sylfirm X is known for offering multiple RF modes that allow providers to adjust how energy interacts with the skin based on the clinical goal.",
          "This flexibility can be useful when planning conservative protocols for patients who are pigmentation prone, as long as the provider is trained and settings are individualized.",
          "Clinically, it is commonly considered for texture, pores, early laxity, acne scarring, and selected pigmentation related concerns when appropriate.",
          "If you want a deeper explanation of collagen remodeling timelines and why results take time, you can review our collagen education page linked below.",
        ],
      },
      {
        title: "How other popular RF microneedling devices may differ",
        body: [
          "Many RF microneedling devices use fractional multi electrode pin arrays, and some are commonly marketed around tightening and deeper remodeling.",
          "These platforms can differ from each other and from Sylfirm X in:",
          "• Needle array geometry and treatment footprint",
          "• Typical depth ranges used in practice",
          "• How heat concentrates at the needle tip",
          "• Treatment endpoints and the amount of thermal stress delivered per pass",
          "**Important note:** FDA clearance and real world aesthetic marketing are not always the same thing. If you are considering any RF microneedling platform, ask your provider what the device is cleared for, what it is being used for in your case, and what risk mitigation steps are in place.",
        ],
      },
      {
        title: "FDA safety communication, why it matters for any RF microneedling device",
        body: [
          "On October 15, 2025, the FDA issued a safety communication stating that serious complications have been reported with certain uses of RF microneedling devices for dermatologic or aesthetic skin procedures intended to improve the appearance of the skin.",
          "The FDA specifically lists reported complications including burns, scarring, fat loss, disfigurement, and nerve damage, sometimes requiring medical intervention.",
          "**The FDA also states that RF microneedling is a medical procedure, not a cosmetic treatment, and that these devices should not be used at home.**",
          "This communication is not about one brand. It is guidance that applies to the category of RF microneedling, and it reinforces why device choice, provider training, and patient selection are essential.",
        ],
      },
      {
        title: "Questions to ask before you book",
        body: [
          "**A careful consult should feel like medical decision making, not a sales pitch.**",
          "Consider asking:",
          "• Which device will be used, and why it fits my skin type and goals",
          "• What settings will be adjusted for pigment risk, scarring risk, and skin thickness",
          "• What complications you see most often, and how you reduce risk",
          "• What aftercare is required to reduce inflammation and pigment shift risk",
          "• How many sessions are realistically needed, and what timeline to expect",
          "• Whether a collagen support plan is part of the strategy, since collagen remodeling is slow and cumulative",
        ],
      },
    ],
    resourcesTitle: "Resources and related education",
    resourcesCopy: [
      "If you want to go deeper, these references can help you make more informed decisions.",
      "**We recommend reading the FDA safety communication in full, and using it as a starting point for questions during your consultation.**",
    ],
    fdaLinkLabel: "Read the FDA safety communication on RF microneedling",
    collagenLinkLabel: "Learn about collagen loss and the timeline to rebuild collagen",
    serviceLinksTitle: "Related services",
    serviceLinks: [
      {
        label: "RF Microneedling (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    closingTitle: "A note on safety",
    closingCopy: [
      "RF microneedling can be valuable when it is clinically appropriate, conservatively planned, and performed by trained providers.",
      "**Our approach prioritizes patient selection, parameter control, and realistic timelines, especially for patients who are pigment prone or have a history of reactive skin.**",
    ],
  },
  es: {
    title: "Sylfirm X vs Otros Dispositivos de RF Microneedling",
    subtitle:
      "En qué se diferencian las plataformas, y qué significa el comunicado de seguridad de la FDA para pacientes",
    intro: [
      "El RF microneedling suele describirse como si fuera un solo tratamiento, pero **el diseño del dispositivo y la forma en que entrega energía puede variar mucho entre plataformas.**",
      "Como la radiofrecuencia genera calor dentro del tejido, **las diferencias en control, profundidad, diseño de agujas y lógica de tratamiento pueden impactar resultados y riesgos.**",
      "Aquí explicamos qué comparar entre dispositivos, dónde encaja Sylfirm X, y por qué la FDA emitió un comunicado de seguridad sobre riesgos potenciales con ciertos usos del RF microneedling.",
    ],
    sections: [
      {
        title: "El RF microneedling no es un tratamiento uniforme",
        body: [
          "Dos dispositivos pueden llamarse RF microneedling y aun así **comportarse de manera distinta en la piel.**",
          "Existen diferencias en configuración de agujas, rango de profundidades, modo de energía, y cómo se distribuye el calor en la dermis.",
          "Por eso el nombre del dispositivo por sí solo no predice seguridad o resultados, **el plan y la técnica del proveedor importan igual o más.**",
        ],
      },
      {
        title: "Qué comparar entre plataformas de RF microneedling",
        body: [
          "Al comparar dispositivos, **prioriza el control clínico, no el marketing.**",
          "Variables clave incluyen:",
          "• Modo de energía, por ejemplo RF pulsada versus RF continua",
          "• Control de profundidad y ajuste por zona",
          "• Diseño de aguja y electrodo, y cómo se concentra el calor en la punta",
          "• Tip disponibles, cantidad de pines, y distribución de energía",
          "• Funciones de seguridad y monitoreo de parámetros",
          "• Adaptabilidad de protocolos según fototipo y riesgo pigmentario",
          "• Nivel de entrenamiento requerido y supervisión médica",
        ],
      },
      {
        title: "Dónde encaja Sylfirm X",
        body: [
          "Sylfirm X ofrece distintos modos de RF que permiten ajustar cómo interactúa la energía con la piel según el objetivo clínico.",
          "Esta flexibilidad puede ser útil para protocolos conservadores en pacientes con tendencia a pigmentación, siempre que exista entrenamiento y parámetros individualizados.",
          "Clínicamente suele considerarse para textura, poros, flacidez leve, cicatrices de acné, y algunas alteraciones pigmentarias cuando está indicado.",
          "Si deseas entender mejor por qué la remodelación toma tiempo, revisa nuestra página educativa sobre colágeno que se enlaza abajo.",
        ],
      },
      {
        title: "Cómo pueden diferir otros dispositivos populares",
        body: [
          "Muchos dispositivos usan arreglos fraccionados de pines con electrodos, y algunos se comercializan alrededor de tightening y remodelación más profunda.",
          "Estas plataformas pueden diferir entre sí y frente a Sylfirm X en:",
          "• Geometría del arreglo y huella de tratamiento",
          "• Profundidades que se usan típicamente",
          "• Cómo se concentra el calor en la punta",
          "• Endpoints de tratamiento y cantidad de estrés térmico por pasada",
          "**Nota importante:** la autorización o clearance y el marketing estético no siempre son lo mismo. Si estás considerando cualquier dispositivo de RF microneedling, pregunta para qué está autorizado, para qué se usará en tu caso, y qué medidas de mitigación de riesgo se aplican.",
        ],
      },
      {
        title: "Comunicado de seguridad de la FDA, por qué importa para cualquier dispositivo",
        body: [
          "El 15 de octubre de 2025, la FDA emitió un comunicado indicando que se han reportado complicaciones serias con ciertos usos de dispositivos de RF microneedling en procedimientos dermatológicos o estéticos para mejorar la apariencia de la piel.",
          "La FDA menciona complicaciones como quemaduras, cicatrices, pérdida de grasa, desfiguración y daño nervioso, a veces requiriendo intervención médica.",
          "**La FDA también afirma que el RF microneedling es un procedimiento médico, no un tratamiento cosmético, y que estos dispositivos no deben usarse en casa.**",
          "Este comunicado no es sobre una sola marca. Es una guía para la categoría, y refuerza por qué el dispositivo, el entrenamiento del proveedor y la selección del paciente son esenciales.",
        ],
      },
      {
        title: "Preguntas útiles antes de agendar",
        body: [
          "**Una valoración responsable debe sentirse como decisión médica, no como venta.**",
          "Considera preguntar:",
          "• Qué dispositivo se usará y por qué encaja con mi piel y mis objetivos",
          "• Qué ajustes se harán por riesgo pigmentario, cicatrización y grosor de piel",
          "• Qué complicaciones ven con mayor frecuencia y cómo reducen riesgos",
          "• Qué cuidados posteriores son necesarios para reducir inflamación y cambios pigmentarios",
          "• Cuántas sesiones suelen requerirse y cuál es un cronograma realista",
          "• Si existe un plan de soporte de colágeno, ya que la remodelación es lenta y acumulativa",
        ],
      },
    ],
    resourcesTitle: "Recursos y educación relacionada",
    resourcesCopy: [
      "Si quieres profundizar, estas referencias te ayudan a tomar decisiones mejor informadas.",
      "**Recomendamos leer el comunicado de la FDA completo y usarlo como base para tus preguntas durante la consulta.**",
    ],
    fdaLinkLabel: "Leer el comunicado de seguridad de la FDA sobre RF microneedling",
    collagenLinkLabel: "Aprender sobre pérdida de colágeno y el tiempo para reconstruirlo",
    serviceLinksTitle: "Servicios relacionados",
    serviceLinks: [
      {
        label: "Microneedling con RF (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    closingTitle: "Nota sobre seguridad",
    closingCopy: [
      "El RF microneedling puede ser valioso cuando está indicado, se planifica de forma conservadora, y se realiza por personal entrenado.",
      "**Nuestro enfoque prioriza selección del paciente, control de parámetros, y cronogramas realistas, especialmente en pacientes con tendencia a pigmentación o piel reactiva.**",
    ],
  },
};

function BoldText({ text }) {
  const parts = String(text || "").split("**");
  return (
    <>
      {parts.map((part, idx) =>
        idx % 2 === 1 ? (
          <strong key={idx} className="font-semibold text-black">
            {part}
          </strong>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
    </>
  );
}

const slug = "/learn/sylfirm-x-vs-other-rf-microneedling";
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

export default function RFMicroneedlingComparisonPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/sylfirmx2.jpg`;

  const collagenHref = locale === "es" ? `/es${COLLAGEN_EDU_SLUG}` : COLLAGEN_EDU_SLUG;

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
        address: { "@type": "PostalAddress", ...BUSINESS_ADDRESS },
        sameAs: [WHATSAPP_LINK],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "Mave Medical Spa",
        url: BASE_URL,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Learn", item: `${BASE_URL}/learn` },
          { "@type": "ListItem", position: 3, name: copy.title, item: canonicalUrl },
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
        about: [
          { "@type": "MedicalDevice", name: "Sylfirm X RF microneedling device" },
          { "@type": "MedicalDevice", name: "RF microneedling devices" },
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
            <LearnCategoryBreadcrumb
              locale={locale}
              categoryLabel="RF Microneedling"
              categoryAnchor="rf-microneedling"
            />
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">
              {copy.title}
            </h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
            {copy.intro.map((line) => (
              <p key={line}>
                <BoldText text={line} />
              </p>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-10">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xl font-serif text-black">{section.title}</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {section.body.map((line) => (
                  <p key={line}>
                    <BoldText text={line} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-black">{copy.resourcesTitle}</h3>

            <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
              {copy.resourcesCopy.map((line) => (
                <p key={line}>
                  <BoldText text={line} />
                </p>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={FDA_SAFETY_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.fdaLinkLabel}
              </a>

              <div>
                <a
                  href={collagenHref}
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {copy.collagenLinkLabel}
                </a>
              </div>
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
                <p key={line}>
                  <BoldText text={line} />
                </p>
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
