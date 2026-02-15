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

const slug = "/learn/is-it-safe-for-us-patients-to-get-aesthetic-treatments-in-tijuana";
const BASE_URL = "https://www.mavemedspa.com";

const content = {
  en: {
    title: "Is It Safe for US Patients to Get Aesthetic Treatments in Tijuana?",
    subtitle:
      "How to evaluate clinic safety standards before choosing cross-border aesthetic care.",
    intro: [
      "For many patients living in Southern California, including San Diego, Los Angeles, and Orange County, traveling to Tijuana for aesthetic treatments is increasingly common.",
      "**Safety remains the most important consideration when seeking care outside the United States.**",
      "The question is not simply whether it is safe to receive treatments in Tijuana. The more accurate question is how to evaluate safety properly before choosing a clinic.",
    ],
    sections: [
      {
        title: "How US Patients Should Evaluate Safety in Tijuana",
        body: [
          "**1. Device authenticity and technology standards**",
          "Patients should verify that the clinic uses authentic, regulated medical devices. Advanced technologies such as radiofrequency microneedling systems or focused ultrasound platforms vary significantly in quality.",
          "Clinics that invest in verified, internationally distributed devices typically demonstrate a commitment to long-term outcomes rather than short-term volume.",
          "",
          "**2. Provider training and treatment planning**",
          "The effectiveness and safety of aesthetic procedures depend heavily on the provider's understanding of facial anatomy, tissue behavior, and long-term collagen response.",
          "Structured treatment planning reduces the risk of overcorrection, uneven results, or unnecessary inflammation.",
          "Patients should look for clinics that discuss staging, maintenance intervals, and biological pacing rather than promising immediate dramatic changes.",
          "",
          "**3. Sterilization and clinical protocols**",
          "Any reputable clinic should follow clear sterilization standards, single-use consumable practices when appropriate, and documented treatment protocols.",
          "Patients should feel comfortable asking about sanitation procedures and post-treatment instructions.",
          "",
          "**4. Emergency preparedness and follow-up**",
          "Although complications are uncommon when treatments are performed appropriately, clinics should have protocols for managing adverse reactions.",
          "For cross-border patients, clear communication channels and follow-up planning are especially important. A structured clinic will outline how concerns are handled after patients return home.",
        ],
      },
      {
        title: "Why Treatment Planning Matters More for Medical Tourism",
        body: [
          "Patients traveling from Southern California often prefer to minimize the number of visits required per year. This makes conservative, long-term planning especially important.",
          "Aggressive one-time treatments may create more inflammation or require unplanned follow-up.",
          "In contrast, staged collagen stimulation and measured energy delivery tend to support more predictable healing and stability between visits.",
          "",
          "**When aesthetic treatments are approached with long-term structure rather than impulsive intensity, safety improves and outcomes become more durable.**",
        ],
      },
      {
        title: "Is Tijuana a Rational Option for Advanced Aesthetic Treatments?",
        body: [
          "Tijuana has become a destination for aesthetic care not only because of pricing differences, but because of accessibility to advanced technologies and experienced providers.",
          "For patients who prioritize device authenticity, structured planning, and realistic expectations, traveling across the border can be a practical and well-considered decision.",
          "As with any medical decision, the key is not geography alone. It is the quality of evaluation, the clarity of communication, and the discipline of treatment planning.",
          "For patients from San Diego, Los Angeles, and Orange County considering aesthetic treatments in Tijuana, asking the right questions and selecting clinics that emphasize safety, long-term results, and thoughtful pacing remains the most important factor.",
        ],
      },
    ],
    faqHeading: "Frequently Asked Questions for US Patients Considering Treatments in Tijuana",
    faqs: [
      {
        question: "How far is Tijuana from San Diego?",
        answer:
          "Tijuana is directly across the border from San Diego. Many patients cross through the San Ysidro or Otay Mesa ports of entry. Travel time depends on traffic and border conditions, but the geographic distance itself is minimal.",
      },
      {
        question: "Can I return to the US the same day after treatment?",
        answer:
          "For many non-surgical aesthetic treatments, same-day return is common. However, certain procedures may involve temporary swelling, redness, or sensitivity. Patients should discuss timing and recovery expectations with their provider before scheduling travel.",
      },
      {
        question: "How long should I stay in Tijuana after treatment?",
        answer:
          "The length of stay depends on the procedure performed. Some treatments require only a few hours in clinic, while others may benefit from overnight observation. Structured treatment planning helps minimize unnecessary extended stays.",
      },
      {
        question: "What happens if I have concerns after I return home?",
        answer:
          "Reputable clinics provide follow-up communication and post-treatment guidance. Patients should confirm that clear communication channels are available for questions or concerns once they return to the United States.",
      },
      {
        question: "Is medical tourism only about lower cost?",
        answer:
          "While cost differences exist between the United States and Mexico, many patients travel for access to specific technologies, structured treatment planning, and scheduling flexibility. Safety and clinical standards should always be prioritized over price alone.",
      },
      {
        question: "How can I verify that a clinic is reputable?",
        answer:
          "Patients should look for authentic medical devices, transparent communication about treatment plans, clear recovery instructions, documented protocols, and consistent patient reviews. Asking direct questions about safety standards is encouraged.",
      },
    ],
  },
  es: {
    title: "Es seguro para pacientes de Estados Unidos realizarse tratamientos estéticos en Tijuana?",
    subtitle:
      "Cómo evaluar los estándares de seguridad de una clínica antes de elegir atención estética transfronteriza.",
    intro: [
      "Para muchos pacientes del sur de California, incluyendo San Diego, Los Angeles y Orange County, viajar a Tijuana para tratamientos estéticos es cada vez más común.",
      "**La seguridad sigue siendo la consideración más importante al buscar atención fuera de Estados Unidos.**",
      "La pregunta no es solo si es seguro tratarse en Tijuana. La pregunta más precisa es cómo evaluar la seguridad correctamente antes de elegir una clínica.",
    ],
    sections: [
      {
        title: "Cómo deben evaluar la seguridad los pacientes de Estados Unidos en Tijuana",
        body: [
          "**1. Autenticidad de dispositivos y estándares tecnológicos**",
          "Los pacientes deben verificar que la clínica utilice dispositivos médicos auténticos y regulados. Tecnologías como RF microneedling o ultrasonido focalizado pueden variar mucho en calidad.",
          "Las clínicas que invierten en equipos verificados y distribuidos internacionalmente suelen demostrar compromiso con resultados a largo plazo, no con volumen a corto plazo.",
          "",
          "**2. Formación del proveedor y planificación del tratamiento**",
          "La efectividad y seguridad de los procedimientos estéticos dependen en gran medida del conocimiento de anatomía facial, comportamiento tisular y respuesta de colágeno a largo plazo.",
          "La planificación estructurada reduce el riesgo de sobrecorrección, resultados desiguales o inflamación innecesaria.",
          "Los pacientes deben priorizar clínicas que expliquen etapas, intervalos de mantenimiento y tiempos biológicos, en lugar de prometer cambios dramáticos inmediatos.",
          "",
          "**3. Esterilización y protocolos clínicos**",
          "Una clínica seria debe seguir estándares claros de esterilización, prácticas de consumibles de un solo uso cuando corresponda, y protocolos de tratamiento documentados.",
          "Los pacientes deben sentirse cómodos preguntando sobre procesos de higiene y cuidados posteriores.",
          "",
          "**4. Preparación ante emergencias y seguimiento**",
          "Aunque las complicaciones son poco comunes cuando los tratamientos se realizan correctamente, las clínicas deben tener protocolos para manejar eventos adversos.",
          "Para pacientes transfronterizos, la comunicación clara y el seguimiento son especialmente importantes. Una clínica estructurada explica cómo se atienden dudas después de volver a casa.",
        ],
      },
      {
        title: "Por qué la planificación importa más en turismo médico",
        body: [
          "Los pacientes que viajan desde el sur de California suelen buscar minimizar el número de visitas al año. Por eso la planificación conservadora y de largo plazo es clave.",
          "Los tratamientos agresivos en una sola sesión pueden generar más inflamación o requerir seguimiento no planeado.",
          "En cambio, la estimulación gradual de colágeno y una entrega de energía medida favorecen una recuperación más predecible y mayor estabilidad entre visitas.",
          "",
          "**Cuando los tratamientos se abordan con estructura a largo plazo y no con intensidad impulsiva, la seguridad mejora y los resultados tienden a ser más duraderos.**",
        ],
      },
      {
        title: "Es Tijuana una opción racional para tratamientos estéticos avanzados?",
        body: [
          "Tijuana se ha convertido en un destino de atención estética no solo por diferencias de precio, sino también por acceso a tecnologías avanzadas y proveedores con experiencia.",
          "Para pacientes que priorizan autenticidad de dispositivos, planificación estructurada y expectativas realistas, cruzar la frontera puede ser una decisión práctica y bien razonada.",
          "Como en cualquier decisión médica, la clave no es solo la geografía. Es la calidad de la evaluación, la claridad de la comunicación y la disciplina en la planificación.",
          "Para pacientes de San Diego, Los Angeles y Orange County que consideran tratamientos en Tijuana, hacer las preguntas correctas y elegir clínicas que prioricen seguridad, resultados a largo plazo y ritmo clínico adecuado sigue siendo el factor más importante.",
        ],
      },
    ],
    faqHeading: "Preguntas frecuentes para pacientes de Estados Unidos que consideran tratamiento en Tijuana",
    faqs: [
      {
        question: "Qué tan lejos está Tijuana de San Diego?",
        answer:
          "Tijuana está justo al otro lado de la frontera con San Diego. Muchos pacientes cruzan por San Ysidro u Otay Mesa. El tiempo de traslado depende del tráfico y de las condiciones fronterizas, pero la distancia geográfica es mínima.",
      },
      {
        question: "Puedo regresar a Estados Unidos el mismo día después del tratamiento?",
        answer:
          "En muchos tratamientos estéticos no quirúrgicos, regresar el mismo día es común. Sin embargo, algunos procedimientos pueden causar inflamación, enrojecimiento o sensibilidad temporal. Conviene revisar tiempos de recuperación antes de programar el viaje.",
      },
      {
        question: "Cuánto tiempo debo quedarme en Tijuana después del tratamiento?",
        answer:
          "Depende del procedimiento. Algunos tratamientos requieren solo unas horas en clínica, mientras otros pueden beneficiarse de observación nocturna. La planificación estructurada ayuda a evitar estancias innecesariamente largas.",
      },
      {
        question: "Qué pasa si tengo dudas o molestias al regresar a casa?",
        answer:
          "Las clínicas reputables ofrecen seguimiento y orientación posterior al tratamiento. Los pacientes deben confirmar que existan canales claros de comunicación para resolver dudas una vez de regreso en Estados Unidos.",
      },
      {
        question: "El turismo médico es solo por menor costo?",
        answer:
          "Aunque existen diferencias de costo entre Estados Unidos y México, muchos pacientes viajan por acceso a tecnologías específicas, planificación estructurada y flexibilidad de agenda. La seguridad y los estándares clínicos siempre deben estar por encima del precio.",
      },
      {
        question: "Cómo puedo verificar que una clínica sea confiable?",
        answer:
          "Busca dispositivos auténticos, comunicación transparente del plan de tratamiento, instrucciones claras de recuperación, protocolos documentados y reseñas consistentes de pacientes. Hacer preguntas directas sobre seguridad es recomendable.",
      },
    ],
  },
};

function BoldText({ text }) {
  if (!text) return null;
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

export default function MedicalTourismSafetyPage() {
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
          key="faq-schema-medical-tourism"
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
              categoryLabel={locale === "es" ? "Turismo médico" : "Medical Tourism"}
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

        <section className="max-w-5xl mx-auto px-6 pb-10 space-y-10">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xl font-serif text-black">{section.title}</h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {(section.body || []).map((line, idx) =>
                  line ? (
                    <p key={`${section.title}-${idx}`}>
                      <BoldText text={line} />
                    </p>
                  ) : (
                    <div key={`${section.title}-spacer-${idx}`} className="h-1" />
                  )
                )}
              </div>
            </div>
          ))}
        </section>

        <FAQSection
          faqs={copy.faqs || []}
          locale={locale}
          heading={copy.faqHeading}
          sectionClassName="bg-white text-black pb-12"
          containerClassName="max-w-5xl mx-auto px-6"
        />
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
