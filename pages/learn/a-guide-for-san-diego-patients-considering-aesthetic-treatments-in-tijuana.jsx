import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearnCategoryBreadcrumb from "@/components/learn/LearnCategoryBreadcrumb";
import FAQSection from "@/components/FAQSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const slug =
  "/learn/a-guide-for-san-diego-patients-considering-aesthetic-treatments-in-tijuana";
const BASE_URL = "https://www.mavemedspa.com";

const content = {
  en: {
    title: "A Guide for San Diego Patients Considering Aesthetic Treatments in Tijuana",
    subtitle:
      "A calm framework for cross-border treatment planning, safety, and long-term outcomes.",
    intro: [
      "For many residents of San Diego, crossing the border into Tijuana for aesthetic treatments has become an increasingly common and practical decision.",
      "The proximity of the two cities makes access convenient, but patients still have important questions about safety, planning, and long-term results.",
      "**This guide is designed to help San Diego patients evaluate options carefully and make informed decisions when considering treatment in Tijuana.**",
    ],
    sections: [
      {
        title: "Why Do San Diego Patients Consider Tijuana for Aesthetic Care?",
        body: [
          "The primary reasons are usually practical and planning-related, not impulsive:",
        ],
        bullets: [
          "Geographic proximity",
          "Access to advanced technologies",
          "Scheduling flexibility",
          "Structured long-term treatment planning",
        ],
        closing:
          "Tijuana is located directly across the San Diego border, and travel time is often shorter than commuting across parts of Southern California. For patients who prioritize advanced device access and staged treatment strategies, proximity can become an advantage rather than a compromise.",
      },
      {
        title: "How to Evaluate a Clinic Before Crossing the Border",
        body: [
          "San Diego patients should evaluate clinics using the same standards they would apply in the United States.",
        ],
        bullets: [
          "**1. Technology and equipment**: Ask whether the clinic uses authentic, internationally distributed medical devices. Not all technologies are equal, and outcomes vary depending on device generation and quality.",
          "**2. Treatment philosophy**: Clinics that emphasize long-term planning, staged collagen stimulation, and conservative pacing often produce more stable results than those focused on aggressive one-time procedures.",
          "**3. Communication and follow-up**: Clear communication before and after treatment is essential for cross-border patients. Patients should confirm that follow-up guidance is available after returning home.",
          "**4. Recovery expectations**: Understanding downtime and recovery timelines helps San Diego patients plan border crossing appropriately. Many non-surgical treatments allow same-day return, but realistic expectations prevent unnecessary stress.",
        ],
      },
      {
        title: "Planning Treatments If You Live in San Diego",
        body: [
          "Many San Diego patients prefer to minimize visit frequency. This makes structured treatment planning especially important.",
          "Instead of scheduling isolated sessions, thoughtful sequencing of collagen-stimulating treatments can allow for longer intervals between visits while maintaining results.",
          "**This approach prioritizes durability and tissue stability rather than short-term intensity.**",
        ],
        bullets: [
          "Energy-based treatments may be staged to support gradual remodeling",
          "Maintenance intervals can be extended with conservative protocols",
          "Treatment combinations may be spaced strategically to reduce recovery overlap",
        ],
        closing:
          "Patients who live within driving distance of the border often benefit from a clear long-term roadmap rather than reactive scheduling.",
      },
      {
        title: "Border Crossing Considerations",
        body: [
          "Most San Diego patients cross through the San Ysidro or Otay Mesa ports of entry. Travel timing should account for traffic patterns and recovery comfort.",
          "Non-surgical treatments such as RF microneedling, focused ultrasound tightening, or injectable procedures typically allow same-day return. However, temporary redness or swelling may be present.",
          "Planning appointments earlier in the day can allow for a more comfortable return.",
        ],
      },
      {
        title: "Is Choosing Tijuana a Risk?",
        body: [
          "The decision to seek aesthetic treatment in Tijuana should not be based solely on cost.",
          "Safety depends on:",
        ],
        bullets: [
          "Proper patient evaluation",
          "Device authenticity",
          "Clinical protocol discipline",
          "Realistic treatment pacing",
        ],
        closing:
          "For San Diego patients who prioritize structured planning and advanced technology access, crossing the border can be a practical and well-considered choice when evaluation standards remain high.",
      },
    ],
    internalLinksTitle: "Contextual Treatment Pathways",
    internalLinks: [
      {
        prefix: "When discussing long-term planning, many patients consider ",
        label: "collagen-stimulating treatments such as Ultraformer MPT",
        href: "/treatments/ultraformer-mpt",
        suffix: " to support gradual remodeling and wider spacing between visits.",
      },
      {
        prefix: "For texture, pores, and pigmentation-sensitive planning, patients may evaluate ",
        label: "RF microneedling treatments including Sylfirm X",
        href: "/treatments/sylfirm-rf-microneedling",
        suffix:
          " as part of a staged protocol based on skin response and medical assessment.",
      },
    ],
    finalTitle: "Final Considerations for San Diego Patients",
    finalChecks: [
      "Confirm device type and generation",
      "Review treatment planning strategy",
      "Understand recovery expectations",
      "Clarify follow-up communication",
    ],
    finalCopy:
      "When these elements are addressed clearly, San Diego residents often find that access to Tijuana expands their options without compromising safety or quality.",
    faqHeading: "Frequently Asked Questions for San Diego Patients",
    faqs: [
      {
        question: "How long does it take to drive from San Diego to Tijuana for treatment?",
        answer:
          "Tijuana is directly across the border from San Diego. Travel time depends on traffic and port-of-entry conditions, but many patients plan for a short drive followed by border crossing time. Scheduling appointments earlier in the day can help reduce delays.",
      },
      {
        question: "Can I return to San Diego the same day after treatment?",
        answer:
          "For most non-surgical aesthetic procedures, same-day return is common. Some treatments may involve temporary redness or swelling, so patients should review recovery expectations before scheduling.",
      },
      {
        question: "Which border crossing is most convenient?",
        answer:
          "San Ysidro and Otay Mesa are the primary ports of entry for San Diego residents. The most convenient option may depend on traffic patterns and your location within San Diego County.",
      },
      {
        question: "How often would I need to travel for collagen treatments?",
        answer:
          "Many collagen-stimulating treatments are designed to be staged over time. Patients who live in San Diego often schedule treatments strategically to allow for extended intervals between visits.",
      },
      {
        question: "What if I have a question after I return to San Diego?",
        answer:
          "Reputable clinics provide post-treatment guidance and communication channels for follow-up concerns. Clear aftercare planning is particularly important for cross-border patients.",
      },
      {
        question: "Is it safe to cross the border after receiving treatment?",
        answer:
          "Most non-invasive treatments do not restrict travel. However, patients should ensure they feel comfortable and understand expected temporary swelling or redness before returning home.",
      },
    ],
    travelTitle: "From San Diego to Tijuana: A Step-by-Step Travel Overview",
    travelSteps: [
      {
        step: "Step 1: Schedule a consultation",
        text: "Discuss your treatment goals, timeline, and recovery expectations before selecting a date. Confirm whether same-day return is appropriate.",
      },
      {
        step: "Step 2: Plan border crossing",
        text: "Choose San Ysidro or Otay Mesa based on convenience. Consider morning appointments to allow flexibility for return timing.",
      },
      {
        step: "Step 3: Undergo treatment",
        text: "Most non-surgical procedures are completed within a few hours. Review post-treatment instructions before leaving the clinic.",
      },
      {
        step: "Step 4: Return to San Diego",
        text: "Temporary redness or swelling is common for some treatments. Ensure you feel comfortable before crossing back.",
      },
      {
        step: "Step 5: Follow post-treatment plan",
        text: "Follow aftercare guidelines carefully and maintain communication with the clinic if questions arise.",
      },
    ],
  },
  es: {
    title: "Guia para pacientes de San Diego que consideran tratamientos esteticos en Tijuana",
    subtitle:
      "Un marco claro y sereno para planificacion transfronteriza, seguridad y resultados a largo plazo.",
    intro: [
      "Para muchos residentes de San Diego, cruzar a Tijuana para tratamientos esteticos se ha convertido en una decision cada vez mas comun y practica.",
      "La cercania entre ambas ciudades facilita el acceso, pero siguen existiendo preguntas importantes sobre seguridad, planificacion y resultados a largo plazo.",
      "**Esta guia ayuda a pacientes de San Diego a evaluar opciones con criterio y tomar decisiones informadas al considerar tratamiento en Tijuana.**",
    ],
    sections: [
      {
        title: "Por que pacientes de San Diego consideran Tijuana para cuidado estetico?",
        body: [
          "Las razones principales suelen ser practicas y relacionadas con planificacion, no impulsivas:",
        ],
        bullets: [
          "Proximidad geografica",
          "Acceso a tecnologias avanzadas",
          "Flexibilidad de agenda",
          "Planificacion estructurada a largo plazo",
        ],
        closing:
          "Tijuana se encuentra directamente junto a la frontera de San Diego, y el tiempo de traslado suele ser menor que algunos recorridos dentro del sur de California. Para pacientes que priorizan acceso a tecnologia avanzada y estrategias por etapas, la cercania puede convertirse en ventaja y no en compromiso.",
      },
      {
        title: "Como evaluar una clinica antes de cruzar la frontera",
        body: [
          "Pacientes de San Diego deben evaluar clinicas con los mismos estandares que aplicarian en Estados Unidos.",
        ],
        bullets: [
          "**1. Tecnologia y equipo**: Pregunta si la clinica utiliza dispositivos medicos autenticos y de distribucion internacional. No todas las tecnologias son iguales, y los resultados varian segun generacion y calidad del equipo.",
          "**2. Filosofia de tratamiento**: Clinicas que priorizan planificacion a largo plazo, estimulacion escalonada de colageno y ritmo conservador suelen lograr resultados mas estables que aquellas enfocadas en procedimientos agresivos de una sola sesion.",
          "**3. Comunicacion y seguimiento**: La comunicacion clara antes y despues del tratamiento es esencial para pacientes transfronterizos. Debe confirmarse que exista orientacion posterior al regresar a casa.",
          "**4. Expectativas de recuperacion**: Entender tiempos de recuperacion ayuda a planear el cruce de regreso. Muchos tratamientos no quirurgicos permiten retorno el mismo dia, pero expectativas realistas evitan estres innecesario.",
        ],
      },
      {
        title: "Planificacion de tratamientos si vives en San Diego",
        body: [
          "Muchos pacientes de San Diego prefieren minimizar la frecuencia de visitas. Por eso la planificacion estructurada es especialmente importante.",
          "En lugar de agendar sesiones aisladas, la secuenciacion de tratamientos estimuladores de colageno puede permitir intervalos mas largos entre visitas mientras se mantiene el resultado.",
          "**Este enfoque prioriza durabilidad y estabilidad tisular, no intensidad a corto plazo.**",
        ],
        bullets: [
          "Tratamientos basados en energia pueden escalonarse para favorecer remodelacion gradual",
          "Los intervalos de mantenimiento pueden extenderse con protocolos conservadores",
          "Las combinaciones de tratamiento pueden espaciarse para reducir superposicion de recuperacion",
        ],
        closing:
          "Pacientes que viven a distancia manejable de la frontera suelen beneficiarse mas de un mapa de ruta a largo plazo que de una agenda reactiva.",
      },
      {
        title: "Consideraciones para el cruce fronterizo",
        body: [
          "La mayoria de pacientes de San Diego cruzan por San Ysidro u Otay Mesa. El horario debe contemplar trafico y comodidad durante recuperacion.",
          "Tratamientos no quirurgicos como RF microneedling, tensado por ultrasonido focalizado o procedimientos inyectables suelen permitir retorno el mismo dia. Sin embargo, puede haber enrojecimiento o inflamacion temporal.",
          "Agendar citas temprano suele facilitar un regreso mas comodo.",
        ],
      },
      {
        title: "Elegir Tijuana implica riesgo?",
        body: [
          "La decision de buscar tratamiento estetico en Tijuana no debe basarse solo en costo.",
          "La seguridad depende de:",
        ],
        bullets: [
          "Evaluacion adecuada del paciente",
          "Autenticidad de dispositivos",
          "Disciplina en protocolos clinicos",
          "Ritmo de tratamiento realista",
        ],
        closing:
          "Para pacientes de San Diego que priorizan planificacion estructurada y acceso a tecnologia avanzada, cruzar la frontera puede ser una decision practica y bien razonada cuando los estandares de evaluacion se mantienen altos.",
      },
    ],
    internalLinksTitle: "Rutas de tratamiento contextual",
    internalLinks: [
      {
        prefix: "En planificacion a largo plazo, muchos pacientes consideran ",
        label: "tratamientos estimuladores de colageno como Ultraformer MPT",
        href: "/treatments/ultraformer-mpt",
        suffix:
          " para apoyar remodelacion gradual y mayor espaciamiento entre visitas.",
      },
      {
        prefix:
          "Para textura, poros y manejo de pigmentacion, pacientes suelen evaluar ",
        label: "tratamientos de RF microneedling incluyendo Sylfirm X",
        href: "/treatments/sylfirm-rf-microneedling",
        suffix:
          " como parte de un protocolo por etapas segun respuesta cutanea y evaluacion medica.",
      },
    ],
    finalTitle: "Consideraciones finales para pacientes de San Diego",
    finalChecks: [
      "Confirmar tipo y generacion del dispositivo",
      "Revisar estrategia de planificacion",
      "Entender expectativas de recuperacion",
      "Aclarar comunicacion de seguimiento",
    ],
    finalCopy:
      "Cuando estos elementos se abordan con claridad, pacientes de San Diego suelen encontrar que Tijuana amplia sus opciones sin comprometer seguridad o calidad.",
    faqHeading: "Preguntas frecuentes para pacientes de San Diego",
    faqs: [
      {
        question:
          "Cuanto tiempo toma manejar de San Diego a Tijuana para tratamiento?",
        answer:
          "Tijuana esta directamente junto a San Diego. El tiempo depende del trafico y condiciones del puerto de entrada, pero muchos pacientes planean un trayecto corto mas tiempo de cruce. Agendar temprano puede reducir demoras.",
      },
      {
        question: "Puedo regresar a San Diego el mismo dia despues del tratamiento?",
        answer:
          "En la mayoria de procedimientos esteticos no quirurgicos, regresar el mismo dia es comun. Algunos tratamientos pueden causar enrojecimiento o inflamacion temporal, por lo que conviene revisar recuperacion antes de agendar.",
      },
      {
        question: "Que cruce fronterizo suele ser mas conveniente?",
        answer:
          "San Ysidro y Otay Mesa son los cruces principales para residentes de San Diego. La opcion mas conveniente depende del trafico y de tu ubicacion dentro del condado.",
      },
      {
        question: "Con que frecuencia tendria que viajar para tratamientos de colageno?",
        answer:
          "Muchos tratamientos estimuladores de colageno se disenan por etapas. Pacientes que viven en San Diego suelen programarlos estrategicamente para permitir intervalos mas amplios entre visitas.",
      },
      {
        question: "Que pasa si tengo dudas al regresar a San Diego?",
        answer:
          "Clinicas serias ofrecen orientacion posterior al tratamiento y canales de comunicacion para seguimiento. Un plan claro de aftercare es especialmente importante para pacientes transfronterizos.",
      },
      {
        question: "Es seguro cruzar la frontera despues de un tratamiento?",
        answer:
          "La mayoria de tratamientos no invasivos no restringen traslado. Aun asi, cada paciente debe sentirse comodo y entender posibles efectos temporales como inflamacion o enrojecimiento antes de regresar.",
      },
    ],
    travelTitle: "De San Diego a Tijuana: guia breve paso a paso",
    travelSteps: [
      {
        step: "Paso 1: Agenda una consulta",
        text: "Define objetivos, tiempos y recuperacion antes de elegir fecha. Confirma si aplica retorno el mismo dia.",
      },
      {
        step: "Paso 2: Planea el cruce",
        text: "Elige San Ysidro u Otay Mesa segun conveniencia. Considera citas por la manana para mayor flexibilidad al regresar.",
      },
      {
        step: "Paso 3: Realiza el tratamiento",
        text: "Muchos procedimientos no quirurgicos se completan en pocas horas. Revisa instrucciones de cuidado antes de salir de la clinica.",
      },
      {
        step: "Paso 4: Regresa a San Diego",
        text: "Enrojecimiento o inflamacion temporal es posible en algunos tratamientos. Asegura comodidad antes de cruzar.",
      },
      {
        step: "Paso 5: Sigue el plan posterior",
        text: "Cumple cuidados posteriores y manten comunicacion con la clinica si surgen dudas.",
      },
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

export default function SanDiegoGuidePage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

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
        <meta property="og:site_name" content="Mave Medical Spa" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${copy.title} | Mave Medical Spa`} />
        <meta name="twitter:description" content={copy.subtitle} />
        <script
          key="faq-schema-san-diego-guide"
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
              categoryLabel={locale === "es" ? "Turismo medico" : "Medical Tourism"}
              categoryAnchor="medical-tourism"
            />
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">{copy.title}</h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
            {copy.intro.map((line, idx) => (
              <p key={`${line}-${idx}`}>
                <BoldText text={line} />
              </p>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-8 space-y-10">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xl font-serif text-black">{section.title}</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {(section.body || []).map((line, idx) => (
                  <p key={`${section.title}-line-${idx}`}>
                    <BoldText text={line} />
                  </p>
                ))}
                {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {section.bullets.map((item, idx) => (
                      <li key={`${section.title}-bullet-${idx}`}>
                        <BoldText text={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.closing ? (
                  <p>
                    <BoldText text={section.closing} />
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-10">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-black">{copy.internalLinksTitle}</h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
              {(copy.internalLinks || []).map((item, idx) => (
                <p key={`internal-link-${idx}`}>
                  {item.prefix}
                  <a
                    href={`/${locale === "es" ? "es/" : ""}${item.href.replace(/^\//, "")}`}
                    className="text-[#731a2f] underline underline-offset-4"
                  >
                    {item.label}
                  </a>
                  {item.suffix}
                </p>
              ))}
            </div>
          </div>
        </section>

        <FAQSection
          faqs={copy.faqs || []}
          locale={locale}
          heading={copy.faqHeading}
          sectionClassName="bg-white text-black pb-10"
          containerClassName="max-w-5xl mx-auto px-6"
        />

        <section className="max-w-5xl mx-auto px-6 pb-10">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-black">{copy.travelTitle}</h3>
            <div className="space-y-4">
              {(copy.travelSteps || []).map((item) => (
                <div key={item.step} className="border border-gray-200 rounded-xl p-4 bg-white">
                  <p className="text-sm font-semibold text-black">{item.step}</p>
                  <p className="text-sm text-gray-700 mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="border-t border-gray-200 pt-8 space-y-3">
            <h3 className="text-lg font-semibold text-black">{copy.finalTitle}</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
              {(copy.finalChecks || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <BoldText text={copy.finalCopy} />
            </p>
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
        ["layout", "home", "treatments", "learn"],
        nextI18NextConfig
      )),
    },
  };
}
