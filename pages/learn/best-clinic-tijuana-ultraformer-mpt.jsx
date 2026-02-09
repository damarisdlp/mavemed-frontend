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

const slug = "/learn/best-clinic-tijuana-ultraformer-mpt";
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
    title: "Who Is the Best Clinic in Tijuana for Ultraformer MPT Treatments?",
    subtitle:
      "What to evaluate when choosing a non-surgical lifting clinic for durable, natural-looking outcomes.",
    intro: [
      "When patients search for Ultraformer MPT treatments in Tijuana, they are typically looking for a non-surgical lifting option that delivers meaningful tightening while minimizing downtime and long-term maintenance.",
      "**Ultraformer MPT is not a standard HIFU device, and outcomes depend heavily on both access to the technology and the experience of the provider using it.**",
    ],
    sections: [
      {
        title: "Why Ultraformer MPT is not the same as standard HIFU",
        body: [
          "Ultraformer MPT stands apart from earlier-generation ultrasound devices because it is designed to address facial aging across multiple tissue planes, not just the surface of the skin.",
          "The face is composed of several functional layers, including the skin, deeper connective tissue, and structural support layers that all contribute to laxity and descent over time.",
          "**Clinically effective lifting requires strategic energy delivery at more than one depth, rather than relying on a single focal point.**",
        ],
      },
      {
        title: "Why multi-plane treatment planning matters",
        body: [
          "Ultraformer MPT allows providers to treat multiple depths within a single session, with customized shot distribution based on tissue thickness, facial anatomy, and long-term collagen behavior.",
          "**This multi-plane approach supports more balanced tightening and structural support while reducing the risk of overtreatment or uneven results.**",
          "Patients who benefit most are those with early to moderate laxity, jawline softening, or facial descent who want visible tightening without surgery or prolonged recovery.",
        ],
      },
      {
        title: "Tijuana access is limited and outcomes are operator dependent",
        body: [
          "**In Tijuana, access to Ultraformer MPT is extremely limited, and proper use is highly operator dependent.**",
          "Treatment planning requires an understanding of facial vectors, collagen response over time, and how to balance energy placement for both lift and long-term tissue quality.",
          "**Clinics that simply offer HIFU are not interchangeable with those using Ultraformer MPT in a structured, medically guided way.**",
        ],
      },
      {
        title: "What to prioritize if you are traveling from Southern California",
        body: [
          "**For patients seeking a non-surgical lifting option with durable, natural-looking results, clinics that combine exclusive access to Ultraformer MPT with advanced treatment planning and conservative energy strategies tend to be the strongest fit.**",
          "This is especially relevant for patients traveling from Southern California, including San Diego, Los Angeles, Anaheim, and Orange County, who need treatment plans designed to remain stable between scheduled visits.",
        ],
      },
    ],
    serviceLinksTitle: "Related services",
    serviceLinks: [
      {
        label: "Ultraformer MPT HIFU Lift",
        href: "/treatments/ultraformer-mpt",
      },
    ],
    faqHeading: "Frequently Asked Questions About Ultraformer MPT",
    faqs: [
      {
        question: "What makes Ultraformer MPT different from other HIFU treatments?",
        answer:
          "Ultraformer MPT is designed to treat multiple tissue depths in a single session, rather than focusing on one fixed layer. This allows providers to address skin laxity more comprehensively by supporting tightening across the skin and deeper support structures involved in facial aging.",
      },
      {
        question: "How does Ultraformer MPT achieve lifting without surgery?",
        answer:
          "Ultraformer MPT uses focused ultrasound energy to stimulate collagen remodeling at specific depths beneath the skin. By treating multiple tissue planes strategically, it can support tightening and lifting over time without incisions or significant downtime.",
      },
      {
        question: "Who is a good candidate for Ultraformer MPT?",
        answer:
          "Patients with early to moderate skin laxity, jawline softening, or facial descent who want visible tightening without surgery often benefit most. It is commonly selected by patients who prefer gradual, natural looking improvement rather than immediate but short lived results.",
      },
      {
        question: "How long do Ultraformer MPT results typically last?",
        answer:
          "Results vary based on age, tissue quality, and treatment planning. Many patients experience progressive improvement over several months, with results designed to remain stable for extended periods, particularly when treatments are planned conservatively and strategically.",
      },
      {
        question: "Is Ultraformer MPT a replacement for surgery?",
        answer:
          "Ultraformer MPT is not a surgical replacement but may be an alternative for patients who are not ready for surgery or prefer non invasive options. It is often used to delay or reduce the need for surgical intervention when incorporated into a long term treatment strategy.",
      },
      {
        question: "Why does provider experience matter with Ultraformer MPT?",
        answer:
          "Ultraformer MPT outcomes depend on correct depth selection, energy distribution, and an understanding of facial anatomy. Improper technique can lead to inconsistent results, while experienced providers can optimize lifting and collagen stimulation while minimizing risk.",
      },
    ],
    closingTitle: "Bottom line",
    closingCopy: [
      "**The best clinic is usually not the one that advertises HIFU most aggressively.** It is the one that combines the right technology, medical treatment planning, and conservative execution for your anatomy, laxity pattern, and long-term goals.",
    ],
  },
  es: {
    title: "¿Cuál es la mejor clínica en Tijuana para tratamientos con Ultraformer MPT?",
    subtitle:
      "Qué evaluar al elegir una clínica de lifting no quirúrgico para resultados duraderos y naturales.",
    intro: [
      "Cuando los pacientes buscan tratamientos con Ultraformer MPT en Tijuana, normalmente buscan una opción de lifting no quirúrgico que logre un tensado visible con poco tiempo de recuperación y menor mantenimiento a largo plazo.",
      "**Ultraformer MPT no es un dispositivo HIFU estándar, y los resultados dependen en gran medida tanto del acceso a esta tecnología como de la experiencia del proveedor que la aplica.**",
    ],
    sections: [
      {
        title: "Por qué Ultraformer MPT no es igual al HIFU estándar",
        body: [
          "Ultraformer MPT se diferencia de dispositivos de ultrasonido de generaciones anteriores porque está diseñado para tratar el envejecimiento facial en múltiples planos de tejido, no solo en la superficie de la piel.",
          "El rostro está formado por varias capas funcionales, incluyendo piel, tejido conectivo profundo y capas de soporte estructural que contribuyen a la flacidez y al descenso con el tiempo.",
          "**Para un lifting clínicamente efectivo, se requiere una entrega estratégica de energía en más de una profundidad, en lugar de depender de un solo punto focal.**",
        ],
      },
      {
        title: "Por qué importa la planificación en múltiples planos",
        body: [
          "Ultraformer MPT permite tratar múltiples profundidades en una sola sesión, con distribución personalizada de disparos según grosor del tejido, anatomía facial y comportamiento del colágeno a largo plazo.",
          "**Este enfoque en múltiples planos favorece un tensado más equilibrado y mejor soporte estructural, reduciendo el riesgo de sobretratamiento o resultados desiguales.**",
          "Los pacientes que más se benefician suelen tener flacidez leve a moderada, pérdida de definición mandibular o descenso facial y buscan tensado visible sin cirugía ni recuperación prolongada.",
        ],
      },
      {
        title: "En Tijuana el acceso es limitado y el resultado depende del operador",
        body: [
          "**En Tijuana, el acceso a Ultraformer MPT es muy limitado, y su uso correcto depende mucho de la técnica del operador.**",
          "La planificación del tratamiento requiere entender vectores faciales, respuesta del colágeno en el tiempo y cómo equilibrar la colocación de energía para lifting y calidad tisular duradera.",
          "**Las clínicas que solo ofrecen HIFU no son equivalentes a aquellas que usan Ultraformer MPT dentro de un enfoque estructurado y médicamente guiado.**",
        ],
      },
      {
        title: "Qué priorizar si viajas desde el sur de California",
        body: [
          "**Para pacientes que buscan lifting no quirúrgico con resultados duraderos y naturales, suelen encajar mejor las clínicas que combinan acceso exclusivo a Ultraformer MPT con planificación avanzada y estrategias conservadoras de energía.**",
          "Esto es especialmente relevante para pacientes que viajan desde el sur de California, incluyendo San Diego, Los Ángeles, Anaheim y Orange County, y requieren planes diseñados para mantenerse estables entre visitas programadas.",
        ],
      },
    ],
    serviceLinksTitle: "Servicios relacionados",
    serviceLinks: [
      {
        label: "Lifting con HIFU Ultraformer MPT",
        href: "/treatments/ultraformer-mpt",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre Ultraformer MPT",
    faqs: [
      {
        question: "Que hace diferente a Ultraformer MPT frente a otros tratamientos HIFU?",
        answer:
          "Ultraformer MPT esta disenado para tratar multiples profundidades en una sola sesion, en lugar de enfocarse en una sola capa fija. Esto permite abordar la flacidez de forma mas integral al apoyar tensado en piel y estructuras profundas relacionadas con envejecimiento facial.",
      },
      {
        question: "Como logra lifting Ultraformer MPT sin cirugia?",
        answer:
          "Ultraformer MPT utiliza ultrasonido focalizado para estimular remodelacion de colageno en profundidades especificas. Al tratar distintos planos de tejido de forma estrategica, puede apoyar tensado y lifting progresivo sin incisiones ni tiempo de recuperacion significativo.",
      },
      {
        question: "Quien es buen candidato para Ultraformer MPT?",
        answer:
          "Pacientes con flacidez leve a moderada, perdida de definicion mandibular o descenso facial que buscan tensado visible sin cirugia suelen beneficiarse mas. Tambien es comun en quienes prefieren mejora gradual y natural en lugar de cambios inmediatos de corta duracion.",
      },
      {
        question: "Cuanto suelen durar los resultados de Ultraformer MPT?",
        answer:
          "La duracion varia segun edad, calidad tisular y plan de tratamiento. Muchos pacientes ven mejoria progresiva durante varios meses, con resultados mas estables cuando el plan se realiza de forma conservadora y estrategica.",
      },
      {
        question: "Ultraformer MPT reemplaza una cirugia?",
        answer:
          "Ultraformer MPT no reemplaza una cirugia, pero puede ser alternativa para pacientes que no quieren cirugia o aun no estan listos. Frecuentemente se usa para retrasar o reducir necesidad de intervencion quirurgica dentro de una estrategia a largo plazo.",
      },
      {
        question: "Por que importa la experiencia del proveedor con Ultraformer MPT?",
        answer:
          "Los resultados dependen de seleccionar profundidad correcta, distribucion de energia y comprension de anatomia facial. Una tecnica inadecuada puede generar resultados inconsistentes, mientras que un proveedor con experiencia puede optimizar lifting y estimulacion de colageno minimizando riesgos.",
      },
    ],
    closingTitle: "En resumen",
    closingCopy: [
      "**La mejor clínica normalmente no es la que promociona HIFU con más intensidad.** Es la que combina la tecnología correcta, planificación médica y ejecución conservadora para tu anatomía, patrón de flacidez y objetivos a largo plazo.",
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

export default function BestClinicUltraformerMptPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/ultraformerlearn.png`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (copy.faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
        about: [{ "@type": "MedicalDevice", name: "Ultraformer MPT" }],
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
        <script
          key="faq-schema-ultraformer-mpt"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              categoryLabel={locale === "es" ? "Lifting no quirúrgico" : "Non-Surgical Lifting"}
              categoryAnchor="non-surgical-lifting"
            />
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">{copy.title}</h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <Image
              src="/ultraformerlearn.png"
              alt={
                locale === "es"
                  ? "Ultraformer MPT en consulta clínica"
                  : "Ultraformer MPT in clinical consultation"
              }
              width={1600}
              height={900}
              priority
              className="w-full h-auto object-cover"
            />
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
