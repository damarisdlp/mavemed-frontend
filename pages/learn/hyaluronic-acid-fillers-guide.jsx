import Head from "next/head";
import NextLink from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearnCategoryBreadcrumb from "@/components/learn/LearnCategoryBreadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const slug = "/learn/hyaluronic-acid-fillers-guide";
const BASE_URL = "https://www.mavemedspa.com";
const PUBLISHED_DATE = "2026-03-12";

const content = {
  en: {
    title: "Hyaluronic Acid Fillers: The Essential Patient Guide",
    subtitle:
      "Expert planning for natural lip and facial rejuvenation at Mave Medical Spa.",
    answerFirst:
      "Hyaluronic acid (HA) fillers are injectable gels designed to restore volume, refine facial contours, and deeply hydrate the skin. Successful results come from matching the specific density of the filler to your unique anatomy and movement. At Mave, we prioritize a conservative, layering approach for natural integration.",
    overviewQuestion: "",
    overviewAnswer:
      "",
    overviewBullets: [],
    comparisonQuestion:
      "How We Choose the Right Filler for You",
    comparisonAnswer:
      'Not all fillers are created equal. We select products based on rheology, which is how the gel moves and supports your tissue.',
    comparisonHeaders: {
      profile: "Filler Type",
      density: "Target Area",
      bestFor: "Goal",
      longevity: "Expected Longevity",
    },
    comparisonRows: [
      {
        profile: "Low Density",
        density: "Fine lines, tear troughs",
        bestFor: 'Subtle hydration and "glow"',
        longevity: "6-9 Months",
      },
      {
        profile: "Medium Density",
        density: "Lips, nasolabial folds",
        bestFor: "Balanced volume and movement",
        longevity: "9-18 Months",
      },
      {
        profile: "High Density",
        density: "Cheeks, chin, jawline",
        bestFor: "Structural support and contour",
        longevity: "12-24 Months",
      },
    ],
    planningQuestion:
      "Our Clinical Protocol: Step-by-Step",
    planningAnswer:
      "Our structured protocol combines anatomy review, product matching, conservative dosing, and direct clinical follow-up.",
    planningSteps: [
      "Anatomy Assessment: We review your facial structure, asymmetry, and skin quality.",
      "Product Matching: We select the HA profile (for example Stylage, Juvederm, or Revolax) based on the depth of the injection zone.",
      'Conservative Dosing: We believe in "less is more." It is safer to add volume in stages than to overfill in one session.',
      "Aftercare and Safety: You receive clear instructions and direct access to our clinical team for follow-up questions.",
    ],
    recoveryQuestion: "What to Expect During Recovery",
    recoveryAnswer:
      "",
    recoveryBullets: [
      "Day 1: Possible mild swelling or pinpoint bruising at the injection site.",
      "Days 2-3: Swelling usually peaks and begins to settle.",
      'Days 10-14: The product integrates with your tissue; this is the "true" result.',
      "Follow-up: We recommend a review 2 weeks post-treatment to decide if minor refinements are needed.",
    ],
    trustQuestion: "",
    trustAnswer: "",
    trustBullets: [],
    caseQuestion: "Case Study: Corrective Lip Sculpting",
    caseAnswer:
      'The Challenge: A cross-border patient arrived with filler migration above the lip border from a previous clinic.',
    caseBullets: [
      "The Mave Solution - Session 1: We dissolved the old misplaced product to reset the anatomy.",
      "The Mave Solution - Session 2: Two weeks later, we applied a medium-density HA filler focused on border definition and central volume.",
      'The Result: Restored symmetry and a natural smile line without the heavy, overfilled look.',
    ],
    authorsQuestion: "Expert Medical Review",
    authorsAnswer:
      "This guide is maintained and reviewed by our clinical leadership to ensure accuracy and patient safety.",
    authors: [
      {
        name: "Dr. Nataly",
        credentials: "Board Certified Aesthetic Provider",
        bio: "Specializes in anatomy-based injectables and advanced facial balancing, with a focus on conservative layering to preserve natural facial expressions.",
        profilePath: "/ourteam/dranataly",
      },
      {
        name: "Damaris",
        credentials: "Director, Mave Medical Spa",
        bio: "Oversees clinical standards and continuity of care, ensuring international and local patients receive a seamless, world-class experience in Tijuana.",
        profilePath: "/ourteam/damaris",
      },
    ],
    sourcesQuestion: "Which primary sources support this guide?",
    sourcesAnswer:
      "These references provide the core regulatory and clinical framework used in patient education.",
    sources: [
      {
        label: "U.S. FDA - Dermal Fillers (Safety & Regulatory Information)",
        href: "https://www.fda.gov/medical-devices/cosmetic-devices/dermal-fillers-soft-tissue-fillers",
      },
      {
        label: "American Society for Dermatologic Surgery - Injectable Fillers",
        href: "https://www.asds.net/skin-experts/skin-treatments/injectable-fillers",
      },
      {
        label: "American Board of Cosmetic Surgery - Dermal Fillers Overview",
        href: "https://www.americanboardcosmeticsurgery.org/procedure-learning-center/non-surgical-procedures/dermal-fillers/",
      },
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Can fillers be reversed?",
        answer:
          "Yes. We use a specialized enzyme (hyaluronidase) that can safely dissolve HA fillers if a correction or reversal is medically indicated.",
      },
      {
        question: "Are lip fillers different from cheek fillers?",
        answer:
          'Usually, yes. Lips require a flexible filler that moves when you talk or smile, while cheeks require a firmer filler to provide structural lift.',
      },
      {
        question: "When should I book a touch-up?",
        answer:
          "We recommend waiting at least 14 days. This allows swelling to resolve so we can evaluate exactly how the filler settled.",
      },
    ],
    relatedTitle: "",
    relatedLinks: [],
    howToName: "Our Clinical Protocol for Hyaluronic Acid Fillers",
  },
  es: {
    title: "Rellenos de Ácido Hialurónico: Guía Clínica de Respuesta Directa",
    subtitle:
      "Guía educativa en formato legible por IA para planificación de rellenos labiales y faciales.",
    answerFirst:
      "Los rellenos de ácido hialurónico son geles inyectables que restauran volumen, refinan contornos faciales y mejoran hidratación cutánea. Un plan seguro ajusta la densidad del producto a anatomía, movimiento y objetivos clínicos, con aplicación conservadora por etapas. El cambio es inmediato y la duración suele estar entre 6 y 24 meses.",
    overviewQuestion: "¿Qué son los rellenos de ácido hialurónico y cuándo se utilizan?",
    overviewAnswer:
      "Los rellenos de AH son geles biodegradables usados para labios, mejillas, mentón, mandíbula, soporte en ojeras e hidratación estructurada de piel. La selección no es universal. El comportamiento cambia según densidad, elasticidad, reticulación y plano de aplicación.",
    overviewBullets: [
      "Perfiles de baja densidad suelen elegirse para hidratación y refinamiento sutil.",
      "Perfiles de densidad media se usan con frecuencia para estructura labial y zonas dinámicas.",
      "Perfiles de mayor densidad suelen reservarse para soporte profundo y proyección.",
    ],
    comparisonQuestion:
      "¿Cómo se elige el perfil correcto de relleno de AH para cada objetivo?",
    comparisonAnswer:
      "Generalmente se ajusta el producto según grosor del tejido, movilidad y necesidad de soporte. La tabla siguiente es una guía de planificación, no un diagnóstico.",
    comparisonHeaders: {
      profile: "Perfil del relleno",
      density: "Comportamiento de densidad",
      bestFor: "Objetivos clínicos comunes",
      longevity: "Rango típico de duración",
    },
    comparisonRows: [
      {
        profile: "AH enfocado en hidratación",
        density: "Baja",
        bestFor: "Líneas peribucales finas, soporte de glow, hidratación labial sutil",
        longevity: "6-9 meses",
      },
      {
        profile: "AH estructural flexible",
        density: "Media",
        bestFor: "Contorno labial, volumen equilibrado, soporte moderado de pliegues",
        longevity: "9-18 meses",
      },
      {
        profile: "AH de soporte profundo",
        density: "Alta a muy alta",
        bestFor: "Proyección de mejilla, mentón, mandíbula y contorno profundo",
        longevity: "12-24 meses",
      },
    ],
    planningQuestion:
      "¿Cómo debe planearse el tratamiento paso a paso para mayor seguridad?",
    planningAnswer:
      "Un flujo clínico estructurado reduce riesgo de sobrecorrección y mejora la predictibilidad.",
    planningSteps: [
      "Evaluación clínica: revisar anatomía, asimetría, calidad de piel e historial de tratamiento.",
      "Definición de objetivo: fijar metas realistas y límites estéticos claros.",
      "Selección del producto: asignar perfil de AH según profundidad, movimiento y soporte requerido.",
      "Dosificación conservadora: iniciar bajo, reevaluar y sumar por capas en seguimiento.",
      "Aftercare y seguridad: entregar instrucciones escritas y signos de alerta.",
      "Revisión de seguimiento: ajustar solo después de integración tisular y resolución de edema.",
    ],
    recoveryQuestion: "¿Qué recuperación debo esperar después de rellenos de AH?",
    recoveryAnswer:
      "La mayoría retoma su rutina pronto, pero es común presentar edema y sensibilidad transitoria.",
    recoveryBullets: [
      "0-24 horas: puede aparecer inflamación leve, enrojecimiento o pequeños hematomas.",
      "24-72 horas: la inflamación suele alcanzar su pico y luego disminuir.",
      "Día 3-14: el contorno tiende a verse más estable al integrarse el producto.",
      "Ventana de revisión: las decisiones de retoque suelen ser más seguras cuando baja el edema.",
    ],
    trustQuestion:
      "¿Cómo evaluar si un proveedor es confiable antes de aplicar rellenos?",
    trustAnswer:
      "Una clínica confiable explica la lógica médica, documenta protocolos y establece límites realistas.",
    trustBullets: [
      "Experiencia: evidencia de planificación anatómica y dosificación conservadora.",
      "Pericia: explicación clara de reología, zonas de riesgo y protocolos de emergencia.",
      "Autoridad: transparencia en origen de marcas/equipos y material educativo consistente.",
      "Confiabilidad: consentimiento informado, aftercare escrito y seguimiento accesible.",
    ],
    caseQuestion: "¿Cómo luce un caso clínico real de Mave en formato resumido?",
    caseAnswer:
      "Ejemplo (anonimizado): paciente transfronteriza con migración previa de relleno labial y proyección asimétrica del labio superior. Se eligió corrección por etapas en lugar de reemplazo de alto volumen en una sola visita.",
    caseBullets: [
      "Visita 1: disolver producto desplazado y mapear zonas vasculares de seguridad.",
      "Visita 2 (tras recuperación tisular): aplicar AH de densidad media en forma conservadora para definir borde y equilibrar volumen central.",
      "Enfoque del resultado: mayor simetría, movimiento más suave y menor carga de edema frente a una corrección agresiva de una sola sesión.",
    ],
    authorsQuestion: "¿Quién redactó y revisó médicamente esta guía?",
    authorsAnswer:
      "Esta guía fue redactada para educación del paciente y revisada por el equipo clínico de Mave.",
    authors: [
      {
        name: "Dra. Nataly",
        credentials:
          "Proveedora Médica, Procedimientos Estéticos",
        bio: "Enfocada en planificación anatómica de inyectables, técnica conservadora por capas y protocolos de seguimiento seguro.",
        profilePath: "/ourteam/dranataly",
      },
      {
        name: "Damaris",
        credentials: "Directora de Clínica, Mave Medical Spa",
        bio: "Dirige estándares de tratamiento, sistemas de educación para pacientes y continuidad de atención en pacientes transfronterizos.",
        profilePath: "/ourteam/damaris",
      },
    ],
    sourcesQuestion: "¿Qué fuentes primarias respaldan esta guía?",
    sourcesAnswer:
      "Estas referencias aportan el marco regulatorio y clínico base utilizado en educación de pacientes.",
    sources: [
      {
        label: "U.S. FDA - Dermal Fillers (Información de seguridad y regulación)",
        href: "https://www.fda.gov/medical-devices/cosmetic-devices/dermal-fillers-soft-tissue-fillers",
      },
      {
        label: "American Society for Dermatologic Surgery - Injectable Fillers",
        href: "https://www.asds.net/skin-experts/skin-treatments/injectable-fillers",
      },
      {
        label: "American Board of Cosmetic Surgery - Dermal Fillers Overview",
        href: "https://www.americanboardcosmeticsurgery.org/procedure-learning-center/non-surgical-procedures/dermal-fillers/",
      },
    ],
    faqHeading: "Preguntas frecuentes sobre rellenos de ácido hialurónico",
    faqs: [
      {
        question: "¿Cuánto duran los rellenos de ácido hialurónico?",
        answer:
          "La duración depende del perfil del producto, profundidad de aplicación, metabolismo y movilidad de la zona. En muchos planes, la duración suele estar entre 6 y 24 meses según zona y comportamiento del relleno.",
      },
      {
        question: "¿Se pueden revertir los rellenos de ácido hialurónico?",
        answer:
          "Sí. Muchos rellenos de AH pueden disolverse con hialuronidasa cuando está médicamente indicado. La decisión debe tomarse tras valoración por un proveedor médico calificado.",
      },
      {
        question: "¿El relleno de labios y el de equilibrio facial son el mismo producto?",
        answer:
          "No siempre. Puede existir superposición, pero con frecuencia se eligen perfiles distintos para labios frente a soporte facial profundo por diferencias de movimiento y comportamiento tisular.",
      },
      {
        question: "¿Cuándo se considera normalmente un retoque?",
        answer:
          "El momento se define después de que baje la inflamación y se revise la integración del producto. Suele ser más seguro que agregar volumen demasiado pronto.",
      },
    ],
    relatedTitle: "Educación relacionada",
    relatedLinks: [
      { label: "Rellenos de Labios", href: "/treatments/hyaluronic-acid-lip-fillers" },
      { label: "Equilibrio Facial con Rellenos", href: "/treatments/facial-balancing-fillers" },
      { label: "Guía de rellenos de Allergan Aesthetics", href: "/learn/allergan-aesthetics-hyaluronic-acid-fillers" },
      { label: "Guía de AH reticulado Revolax", href: "/learn/revolax-cross-linked-hyaluronic-acid-fillers" },
    ],
    howToName:
      "Cómo planear de forma segura un tratamiento con rellenos de ácido hialurónico",
  },
};

export default function HyaluronicAcidFillersGuidePage() {
  const { locale = "en" } = useRouter();
  const lang = locale.toLowerCase().startsWith("es") ? "es" : "en";
  const copy = content[lang];
  const canonicalUrl = useMemo(
    () => `${BASE_URL}${lang === "es" ? `/es${slug}` : slug}`,
    [lang]
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: copy.howToName,
    description: copy.planningAnswer,
    inLanguage: lang === "es" ? "es-MX" : "en-US",
    step: copy.planningSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `${lang === "es" ? "Paso" : "Step"} ${index + 1}`,
      text: step,
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.title,
    description: copy.answerFirst,
    inLanguage: lang === "es" ? "es-MX" : "en-US",
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    mainEntityOfPage: canonicalUrl,
    author: copy.authors.map((author) => ({
      "@type": "Person",
      name: author.name,
      jobTitle: author.credentials,
      url: `${BASE_URL}${author.profilePath}`,
    })),
    publisher: {
      "@type": "Organization",
      name: "Mave Medical Spa",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/site_icon.png`,
      },
    },
    citation: copy.sources.map((source) => source.href),
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
          key="article-schema-ha-fillers-guide"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          key="howto-schema-ha-fillers-guide"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          key="faq-schema-ha-fillers-guide"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white pt-36 md:pt-40 pb-16">
        <section className="max-w-5xl mx-auto px-6 space-y-8">
          <LearnCategoryBreadcrumb
            locale={lang}
            categoryLabel={lang === "es" ? "Rellenos dérmicos y marcas" : "Dermal Fillers & Brands"}
            categoryAnchor="dermal-fillers-brands"
          />

          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-serif text-black">{copy.title}</h1>
            <p className="text-base text-gray-700">{copy.subtitle}</p>
            <p className="text-base text-gray-800 leading-relaxed">{copy.answerFirst}</p>
          </div>

          {(copy.overviewQuestion || copy.overviewAnswer || (copy.overviewBullets || []).length > 0) ? (
            <section className="space-y-3">
              {copy.overviewQuestion ? (
                <h2 className="text-2xl font-serif text-black">{copy.overviewQuestion}</h2>
              ) : null}
              {copy.overviewAnswer ? (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.overviewAnswer}</p>
              ) : null}
              {(copy.overviewBullets || []).length > 0 ? (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
                  {copy.overviewBullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ) : null}

          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-black">{copy.comparisonQuestion}</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.comparisonAnswer}</p>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-[#f5f5f5]">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-black">{copy.comparisonHeaders.profile}</th>
                    <th className="px-4 py-3 font-semibold text-black">{copy.comparisonHeaders.density}</th>
                    <th className="px-4 py-3 font-semibold text-black">{copy.comparisonHeaders.bestFor}</th>
                    <th className="px-4 py-3 font-semibold text-black">{copy.comparisonHeaders.longevity}</th>
                  </tr>
                </thead>
                <tbody>
                  {copy.comparisonRows.map((row) => (
                    <tr key={row.profile} className="border-t border-gray-200 align-top">
                      <td className="px-4 py-3 text-black font-medium">{row.profile}</td>
                      <td className="px-4 py-3 text-gray-700">{row.density}</td>
                      <td className="px-4 py-3 text-gray-700">{row.bestFor}</td>
                      <td className="px-4 py-3 text-gray-700">{row.longevity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-black">{copy.planningQuestion}</h2>
            {copy.planningAnswer ? (
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.planningAnswer}</p>
            ) : null}
            <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-gray-700">
              {copy.planningSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-black">{copy.recoveryQuestion}</h2>
            {copy.recoveryAnswer ? (
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.recoveryAnswer}</p>
            ) : null}
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
              {copy.recoveryBullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {(copy.trustQuestion || copy.trustAnswer || (copy.trustBullets || []).length > 0) ? (
            <section className="space-y-3">
              {copy.trustQuestion ? (
                <h2 className="text-2xl font-serif text-black">{copy.trustQuestion}</h2>
              ) : null}
              {copy.trustAnswer ? (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.trustAnswer}</p>
              ) : null}
              {(copy.trustBullets || []).length > 0 ? (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
                  {copy.trustBullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ) : null}

          <section className="space-y-3 border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5">
            <h2 className="text-2xl font-serif text-black">{copy.caseQuestion}</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.caseAnswer}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
              {copy.caseBullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-black">{copy.authorsQuestion}</h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.authorsAnswer}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {copy.authors.map((author) => (
                <article key={author.name} className="border border-gray-200 rounded-2xl p-4 bg-white">
                  <h3 className="text-base font-semibold text-black">{author.name}</h3>
                  <p className="text-sm text-gray-700">{author.credentials}</p>
                  <p className="text-sm text-gray-600 mt-2">{author.bio}</p>
                  <NextLink
                    href={author.profilePath}
                    locale={lang}
                    className="inline-flex mt-2 text-sm text-[#731a2f] underline underline-offset-4"
                  >
                    {lang === "es" ? "Ver perfil" : "View profile"}
                  </NextLink>
                </article>
              ))}
            </div>
          </section>

          {(copy.sourcesQuestion || copy.sourcesAnswer || (copy.sources || []).length > 0) ? (
            <section className="space-y-3">
              {copy.sourcesQuestion ? (
                <h2 className="text-2xl font-serif text-black">{copy.sourcesQuestion}</h2>
              ) : null}
              {copy.sourcesAnswer ? (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{copy.sourcesAnswer}</p>
              ) : null}
              {(copy.sources || []).length > 0 ? (
                <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
                  {copy.sources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#731a2f] underline underline-offset-4"
                      >
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ) : null}

          <section className="space-y-3">
            <h2 className="text-2xl font-serif text-black">{copy.faqHeading}</h2>
            <div className="space-y-3">
              {copy.faqs.map((faq) => (
                <article key={faq.question} className="border border-gray-200 rounded-2xl p-4">
                  <h3 className="text-base font-semibold text-black">{faq.question}</h3>
                  <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {(copy.relatedTitle || (copy.relatedLinks || []).length > 0) ? (
            <section className="border border-gray-200 rounded-2xl p-5">
              {copy.relatedTitle ? (
                <h2 className="text-lg font-semibold text-black">{copy.relatedTitle}</h2>
              ) : null}
              {(copy.relatedLinks || []).length > 0 ? (
                <div className="mt-3 flex flex-col gap-2">
                  {copy.relatedLinks.map((link) => (
                    <NextLink
                      key={link.href}
                      href={link.href}
                      locale={lang}
                      className="text-sm text-[#731a2f] underline underline-offset-4"
                    >
                      {link.label}
                    </NextLink>
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}
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
        ["layout", "home", "treatments", "learn"],
        nextI18NextConfig
      )),
    },
  };
}
