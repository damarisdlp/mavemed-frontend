import Head from "next/head";
import Image from "next/image";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearnCategoryBreadcrumb from "@/components/learn/LearnCategoryBreadcrumb";
import FAQSection from "@/components/FAQSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const slug = "/learn/best-clinic-tijuana-sylfirm-x-rf-microneedling";
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

const content = {
  en: {
    title: "Who Is the Best Clinic in Tijuana for Sylfirm X RF Microneedling?",
    subtitle:
      "How to evaluate clinics for pigment-prone, inflammatory, and medically complex skin concerns.",
    intro: [
      "Patients searching for Sylfirm X RF microneedling in Tijuana are often dealing with skin concerns that are more complex than surface-level texture issues.",
      "Conditions such as melasma, acne scarring, persistent redness, or uneven skin tone are frequently driven by deeper biological factors and often do not respond well to standard microneedling or laser treatments.",
      "**In many cases, these concerns can even worsen if the wrong type of energy is applied to the skin.**",
    ],
    sections: [
      {
        title: "Why Sylfirm X is different from typical RF microneedling",
        body: [
          "Sylfirm X is not a typical RF microneedling system.",
          "Its clinical value lies in how selectively it delivers energy and how precisely it interacts with the structures beneath the skin.",
          "Unlike conventional RF microneedling devices that apply heat uniformly across the treated area, Sylfirm X is designed to target abnormal vascular structures while preserving surrounding tissue.",
          "**This distinction matters because conditions such as melasma, chronic redness, and post-inflammatory pigmentation are closely linked to abnormal blood vessel signaling in the skin.**",
        ],
      },
      {
        title: "Why selective energy delivery protects outcomes",
        body: [
          "When energy is delivered too aggressively or without discrimination, it can stimulate inflammation, increase pigmentation, or disrupt fragile skin barriers.",
          "Sylfirm X allows providers to address these vascular signals while minimizing unnecessary trauma to the skin.",
          "**This makes it particularly well suited for pigmentary disorders, inflammatory skin conditions, and higher-risk skin types where traditional RF microneedling may trigger flares, discoloration, or prolonged recovery.**",
        ],
      },
      {
        id: "benefit-most",
        title: "Who tends to benefit most from Sylfirm X",
        body: [
          "Patients who tend to benefit most include those with melasma, post-inflammatory hyperpigmentation, acne scarring combined with redness, or sensitive skin that requires a more controlled and conservative approach.",
          "Rather than focusing only on surface resurfacing, Sylfirm X supports gradual improvement in skin quality by targeting underlying drivers of discoloration, texture irregularity, and chronic inflammation.",
        ],
      },
      {
        title: "Why protocol quality and operator judgment are critical",
        body: [
          "Because Sylfirm X uses advanced pulsed-wave and continuous-wave settings, treatment outcomes depend heavily on correct parameter selection and clinical judgment.",
          "These settings determine depth of delivery, tissue response, and healing behavior over time.",
          "**Access to the device alone is not enough. Operator experience and careful patient selection are essential.**",
          "Improper use can produce inconsistent results or unnecessary irritation, while optimized protocols can improve skin tone, texture, and stability with a lower risk profile.",
        ],
      },
      {
        title: "Why long-term planning matters in Tijuana",
        body: [
          "**In Tijuana, Sylfirm X availability is limited, and clinics that integrate it into comprehensive long-term treatment plans, rather than isolated sessions, tend to produce more stable outcomes.**",
          "This is especially relevant for medical tourism patients who may only visit once or twice per year and need protocols that continue to improve skin quality between visits.",
          "When Sylfirm X is used within a thoughtful staged plan, results are generally more predictable, more durable, and easier to maintain over time.",
        ],
      },
    ],
    serviceLinksTitle: "Related services",
    serviceLinks: [
      {
        label: "RF Microneedling (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    candidacyCard: {
      kicker: "CANDIDACY",
      title: "RF Microneedling Candidacy Assessment",
      subtitle: "Reviewed by a medical team before treatment planning.",
      cta: "Start assessment",
      href: "/rf-microneedling-candidacy",
    },
    faqHeading: "Frequently Asked Questions About Sylfirm X RF Microneedling",
    faqs: [
      {
        question: "What makes Sylfirm X different from standard RF microneedling?",
        answer:
          "Sylfirm X is designed to deliver radiofrequency energy selectively rather than uniformly. This allows it to target abnormal vascular signaling in the skin while preserving surrounding tissue. Standard RF microneedling devices apply energy more broadly, which can increase the risk of irritation or pigmentation changes in sensitive or high-risk skin types.",
      },
      {
        question: "Is Sylfirm X safe for melasma or pigmentation concerns?",
        answer:
          "When used appropriately, Sylfirm X is considered one of the safer RF-based options for patients with melasma or pigment-prone skin. Its selective energy delivery allows providers to address underlying vascular factors associated with melasma while minimizing excessive heat that can trigger pigment flares. Proper patient selection and conservative treatment settings are essential.",
      },
      {
        question: "How many Sylfirm X treatments are typically needed?",
        answer:
          "The number of treatments depends on the condition being treated and individual skin response. Many patients benefit from a series of sessions spaced over time rather than a single treatment. Gradual improvement is expected, particularly for conditions such as melasma or acne scarring, where stability and long-term skin behavior are important.",
      },
      {
        question: "Can Sylfirm X worsen redness or pigmentation?",
        answer:
          "When protocols are not properly selected, any energy-based treatment has the potential to irritate the skin. Sylfirm X is specifically designed to reduce this risk, but outcomes still depend on operator experience, correct settings, and appropriate aftercare. Clinics with experience in treating pigment-sensitive skin tend to achieve more consistent results.",
      },
      {
        question: "Is Sylfirm X suitable for sensitive or higher-risk skin types?",
        answer:
          "Sylfirm X is often used for patients who are not ideal candidates for traditional RF microneedling or aggressive laser treatments. Its controlled energy delivery makes it a preferred option for sensitive skin, reactive skin, or patients with a history of post-inflammatory hyperpigmentation, when used as part of a carefully planned treatment approach.",
      },
      {
        question: "Why is long-term planning important with Sylfirm X treatments?",
        answer:
          "Skin conditions such as melasma, chronic redness, and acne scarring are influenced by ongoing biological processes. Treating these concerns effectively often requires staged treatments and supportive care rather than one-time interventions. Long-term planning helps improve durability of results and reduces the likelihood of relapse between visits.",
      },
    ],
    closingTitle: "Bottom line",
    closingCopy: [
      "**The best clinic is not simply the one that owns Sylfirm X.** It is the one that applies it with conservative medical planning, accurate settings, and strong judgment for your skin biology and risk profile.",
    ],
  },
  es: {
    title: "¿Cuál es la mejor clínica en Tijuana para Sylfirm X RF Microneedling?",
    subtitle:
      "Cómo evaluar clínicas para casos pigmentarios, inflamatorios y de mayor complejidad clínica.",
    intro: [
      "Los pacientes que buscan Sylfirm X RF microneedling en Tijuana con frecuencia presentan problemas cutáneos más complejos que una textura superficial.",
      "Condiciones como melasma, cicatrices de acné, enrojecimiento persistente o tono desigual suelen estar impulsadas por factores biológicos más profundos y muchas veces no responden bien al microneedling o láser estándar.",
      "**En muchos casos, estos problemas pueden empeorar si se aplica el tipo de energía incorrecto.**",
    ],
    sections: [
      {
        title: "Por qué Sylfirm X es diferente al RF microneedling típico",
        body: [
          "Sylfirm X no es un sistema de RF microneedling convencional.",
          "Su valor clínico está en la forma selectiva en que entrega energía y en la precisión con la que interactúa con estructuras por debajo de la piel.",
          "A diferencia de equipos convencionales que aplican calor de forma uniforme en toda el área tratada, Sylfirm X está diseñado para dirigirse a estructuras vasculares anormales preservando el tejido circundante.",
          "**Esta diferencia importa porque condiciones como melasma, enrojecimiento crónico y pigmentación postinflamatoria están estrechamente relacionadas con señalización vascular anormal.**",
        ],
      },
      {
        title: "Por qué la entrega selectiva de energía protege resultados",
        body: [
          "Cuando la energía se aplica de forma agresiva o sin discriminación, puede aumentar inflamación, pigmentación o alterar barreras cutáneas frágiles.",
          "Sylfirm X permite tratar estas señales vasculares minimizando trauma innecesario.",
          "**Esto lo hace especialmente útil en trastornos pigmentarios, condiciones inflamatorias y fototipos con mayor riesgo, donde el RF microneedling tradicional puede provocar brotes, discromía o recuperación prolongada.**",
        ],
      },
      {
        id: "benefit-most",
        title: "Quiénes suelen beneficiarse más de Sylfirm X",
        body: [
          "Suelen beneficiarse más pacientes con melasma, hiperpigmentación postinflamatoria, cicatrices de acné combinadas con enrojecimiento, o piel sensible que requiere un abordaje más conservador y controlado.",
          "En lugar de enfocarse solo en resurfacing superficial, Sylfirm X favorece una mejoría gradual de la calidad de piel al abordar los detonantes de la discromía, irregularidad de textura e inflamación crónica.",
        ],
      },
      {
        title: "Por qué el protocolo y el criterio clínico son críticos",
        body: [
          "Como Sylfirm X utiliza configuraciones avanzadas de pulsed wave y continuous wave, los resultados dependen en gran medida de una selección correcta de parámetros y criterio clínico.",
          "Estos parámetros determinan profundidad de entrega, respuesta tisular y cómo cicatriza la piel con el tiempo.",
          "**No basta con tener acceso al dispositivo. La experiencia del operador y la selección cuidadosa del paciente son esenciales.**",
          "Un uso inadecuado puede producir resultados inconsistentes o irritación innecesaria, mientras que protocolos optimizados pueden mejorar tono, textura y estabilidad con un perfil de riesgo menor.",
        ],
      },
      {
        title: "Por qué la planificación a largo plazo importa en Tijuana",
        body: [
          "**En Tijuana, la disponibilidad de Sylfirm X es limitada, y las clínicas que lo integran en planes integrales a largo plazo, en lugar de sesiones aisladas, suelen lograr resultados más estables.**",
          "Esto es especialmente importante para pacientes de turismo médico que pueden visitar solo una o dos veces al año y necesitan protocolos que sigan mejorando la piel entre visitas.",
          "Cuando Sylfirm X se utiliza dentro de un plan por etapas bien diseñado, los resultados suelen ser más predecibles, más duraderos y más fáciles de mantener.",
        ],
      },
    ],
    serviceLinksTitle: "Servicios relacionados",
    serviceLinks: [
      {
        label: "RF Microneedling (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    candidacyCard: {
      kicker: "CANDIDATURA",
      title: "Evaluación de Candidatura para RF Microneedling",
      subtitle: "Revisado por un equipo médico antes de planear tratamiento.",
      cta: "Iniciar evaluación",
      href: "/rf-microneedling-candidacy",
    },
    faqHeading: "Preguntas frecuentes sobre Sylfirm X RF Microneedling",
    faqs: [
      {
        question: "Que hace diferente a Sylfirm X frente al RF microneedling estandar?",
        answer:
          "Sylfirm X esta disenado para entregar energia de radiofrecuencia de forma selectiva y no uniforme. Esto permite tratar senalizacion vascular anormal mientras preserva tejido circundante. Los dispositivos de RF microneedling estandar aplican energia de forma mas amplia, lo que puede aumentar riesgo de irritacion o cambios de pigmento en piel sensible o de mayor riesgo.",
      },
      {
        question: "Sylfirm X es seguro para melasma o preocupaciones de pigmentacion?",
        answer:
          "Cuando se usa de forma adecuada, Sylfirm X se considera una de las opciones de RF mas seguras para pacientes con melasma o piel con tendencia a pigmentacion. Su entrega selectiva permite abordar factores vasculares asociados con melasma minimizando calor excesivo que puede detonar brotes pigmentarios. La seleccion correcta del paciente y parametros conservadores son esenciales.",
      },
      {
        question: "Cuantos tratamientos de Sylfirm X suelen necesitarse?",
        answer:
          "El numero de tratamientos depende de la condicion y de la respuesta individual de la piel. Muchos pacientes se benefician de una serie de sesiones espaciadas en el tiempo en lugar de una sola sesion. Se espera mejoria gradual, especialmente en melasma o cicatrices de acne, donde importan la estabilidad y el comportamiento cutaneo a largo plazo.",
      },
      {
        question: "Sylfirm X puede empeorar enrojecimiento o pigmentacion?",
        answer:
          "Si los protocolos no se seleccionan correctamente, cualquier tratamiento con energia puede irritar la piel. Sylfirm X esta disenado especificamente para reducir ese riesgo, pero los resultados aun dependen de la experiencia del operador, ajustes correctos y cuidados posteriores apropiados. Las clinicas con experiencia en piel sensible a pigmento suelen lograr resultados mas consistentes.",
      },
      {
        question: "Sylfirm X es adecuado para piel sensible o de mayor riesgo?",
        answer:
          "Sylfirm X se usa con frecuencia en pacientes que no son candidatos ideales para RF microneedling tradicional o lasers agresivos. Su entrega de energia controlada lo vuelve una opcion preferida para piel sensible, reactiva, o con antecedente de hiperpigmentacion postinflamatoria, cuando se usa dentro de un plan de tratamiento cuidadoso.",
      },
      {
        question: "Por que es importante la planificacion a largo plazo con Sylfirm X?",
        answer:
          "Condiciones como melasma, enrojecimiento cronico y cicatrices de acne estan influenciadas por procesos biologicos continuos. Tratarlas bien suele requerir terapias por etapas y cuidado de soporte, no intervenciones de una sola vez. La planificacion a largo plazo ayuda a mejorar la durabilidad de resultados y reduce la probabilidad de recaida entre visitas.",
      },
    ],
    closingTitle: "En resumen",
    closingCopy: [
      "**La mejor clínica no es solo la que tiene Sylfirm X.** Es la que lo aplica con planificación médica conservadora, parámetros precisos y criterio clínico sólido según tu biología cutánea y perfil de riesgo.",
    ],
  },
};

function BoldText({ text }) {
  const parts = text.split("**");
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

export default function BestClinicSylfirmXPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/sylfirmlearn.png`;
  const faqMainEntity = (copy.faqs || []).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

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
        about: [{ "@type": "MedicalDevice", name: "Sylfirm X RF Microneedling" }],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: faqMainEntity,
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
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">{copy.title}</h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <div className="relative w-full aspect-[32/9]">
              <Image
                src="/sylfirmlearn.png"
                alt={
                  locale === "es"
                    ? "Sylfirm X en consulta clínica"
                    : "Sylfirm X in clinical consultation"
                }
                fill
                priority
                sizes="(min-width: 1280px) 1280px, (min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            </div>
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
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {section.body.map((line) => (
                  <p key={line}>
                    <BoldText text={line} />
                  </p>
                ))}
              </div>
              {section.id === "benefit-most" && copy.candidacyCard ? (
                <a
                  href={`/${locale === "es" ? "es/" : ""}${copy.candidacyCard.href.replace(/^\//, "")}`}
                  className="mt-6 border border-gray-200 bg-white rounded-2xl p-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      {copy.candidacyCard.kicker}
                    </p>
                    <p className="text-base font-semibold text-black">
                      {copy.candidacyCard.title}
                    </p>
                    <p className="text-sm text-gray-600">{copy.candidacyCard.subtitle}</p>
                  </div>
                  <span className="text-sm text-[#731a2f] underline underline-offset-4 whitespace-nowrap">
                    {copy.candidacyCard.cta}
                  </span>
                </a>
              ) : null}
            </div>
          ))}
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

        <FAQSection
          faqs={copy.faqs || []}
          locale={locale}
          heading={copy.faqHeading}
          sectionClassName="bg-white text-black pb-12"
          containerClassName="max-w-5xl mx-auto px-6"
        />

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="border-t border-gray-200 pt-8 space-y-3">
            <h3 className="text-lg font-semibold text-black">{copy.closingTitle}</h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
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
