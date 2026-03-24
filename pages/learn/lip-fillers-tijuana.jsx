import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearnCategoryBreadcrumb from "@/components/learn/LearnCategoryBreadcrumb";
import {
  ORGANIZATION_ID,
  PROVIDER_PERSON_IDS,
  SITE_URL,
} from "@/lib/schema/schemaStore";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const slug = "/learn/lip-fillers-tijuana";
const BASE_URL = SITE_URL;
const WHATSAPP_LINK = "https://wa.me/526642077675";
const CONTACT_LINK = "/contact";
const TREATMENT_LINK = "/treatments/hyaluronic-acid-lip-fillers";
const DISSOLVE_LINK = "/treatments/hyaluronidase";
const OG_IMAGE = `${BASE_URL}/lipfillers2.jpg`;
const WHATSAPP_MESSAGES = {
  en: "Hi! I'm interested in the Natural Lip Filler treatment I saw on your site.",
  es: "Hola, me interesa el tratamiento de relleno de labios natural que vi en su sitio.",
};

const content = {
  en: {
    title: "Natural Lip Fillers in Tijuana",
    metaTitle: "Natural Lip Fillers in Tijuana (Minutes from San Diego) | Mave Medical Spa",
    subtitle:
      "A search-friendly guide for patients comparing lip filler options, recovery, results, and next steps before booking.",
    answerFirst:
      "Lip fillers at Mave Medical Spa use hyaluronic acid injectables to add controlled volume, refine lip borders, improve hydration, and correct asymmetry while keeping movement soft and natural. Most appointments take about 30 minutes, swelling usually improves within 24 to 48 hours, and results commonly last 9 to 18 months depending on the product selected and individual metabolism.",
    quickFactsTitle: "Quick facts about lip fillers",
    quickFacts: [
      "Primary goals: volume, definition, hydration, and balance.",
      "Treatment time: usually about 15 to 30 minutes after assessment and numbing.",
      "Typical downtime: mild swelling or bruising for 24 to 48 hours.",
      "Longevity: often 9 to 18 months, depending on the filler plan.",
    ],
    sections: [
      {
        title: "What are lip fillers and what can they improve?",
        paragraphs: [
          "Lip fillers are injectable hyaluronic acid gels used to improve the shape, structure, and hydration of the lips without surgery.",
          "At Mave, lip treatment planning focuses on proportion, symmetry, and natural integration rather than simply making the lips larger.",
        ],
        bullets: [
          "Refine the lip border and cupid's bow.",
          "Restore volume that has been lost over time.",
          "Improve hydration and soften fine perioral lines.",
          "Address asymmetry with conservative, anatomy-based placement.",
        ],
      },
      {
        title: "What happens during a lip filler appointment?",
        paragraphs: [
          "Every appointment begins with an anatomy review and a discussion of your goals, previous filler history, and whether subtle hydration or structural contouring makes more sense for your features.",
          "A numbing protocol is used for comfort, the injector places the filler gradually, and the lips are assessed in motion so the final result looks balanced while speaking and smiling.",
        ],
        bullets: [
          "Consultation: facial balance, lip shape, and treatment plan review.",
          "Comfort: topical numbing and filler formulas that include lidocaine.",
          "Injection: conservative placement with pauses to check symmetry.",
          "Follow-up: guidance for swelling, healing, and touch-up timing if needed.",
        ],
      },
      {
        title: "What is recovery like after lip fillers?",
        paragraphs: [
          "Most patients return to normal daily activities quickly, but mild swelling, tenderness, or pinpoint bruising can happen during the first couple of days.",
          "The lips usually settle progressively, and the most accurate view of shape and symmetry is typically seen once the filler has integrated over the following days.",
        ],
        bullets: [
          "First 24 hours: swelling is common and usually expected.",
          "Days 2 to 3: lips often start to soften and settle.",
          "Around 2 weeks: results are easier to evaluate accurately.",
          "If previous filler migration exists, correction may require dissolving first.",
        ],
      },
      {
        title: "How do we keep lip filler results natural?",
        paragraphs: [
          "Natural-looking lips depend on choosing the right density of hyaluronic acid, respecting lip anatomy, and avoiding overfilling in one session.",
          "Mave's approach is conservative and layered: define what is missing, restore only what supports harmony, and reassess once the tissue settles.",
        ],
        bullets: [
          "Product selection is based on whether you need hydration, shape, or structure.",
          "Volume is built gradually when appropriate instead of forcing dramatic change in one visit.",
          "Correction is available when a previous filler treatment needs refinement or reversal.",
        ],
      },
    ],
    galleryTitle: "Real before and after lip filler examples",
    galleryItems: [
      {
        id: "01",
        title: "Case 1",
        description: "Subtle contour refinement and balanced volume restoration.",
      },
      {
        id: "03",
        title: "Case 2",
        description: "Natural enhancement focused on shape, softness, and hydration.",
      },
    ],
    comparisonTitle: "What is the difference between lip fillers and a lip flip?",
    comparisonHeaders: [
      "Feature",
      "Lip fillers",
      "Lip flip",
    ],
    comparisonRows: [
      ["Primary goal", "Add shape, support, and visible volume", "Create a subtle outward curl of the upper lip"],
      ["Product type", "Hyaluronic acid filler", "Botulinum toxin placed around the lip"],
      ["Best for", "Hydration, contour, asymmetry, and volume loss", "Hidden upper lip or gummy-smile softening"],
      ["How long it lasts", "Usually 9 to 18 months", "Usually about 3 to 4 months"],
      ["Result style", "Structural change you can see", "Subtle movement-based change"],
    ],
    trustTitle: "Why patients use this page before booking",
    trustPoints: [
      "The treatment is performed or overseen by licensed aesthetic providers.",
      "Mave uses a natural-first planning style for lip rejuvenation and correction.",
      "Patients can continue from this guide to the full treatment page, direct contact form, or WhatsApp booking.",
      "If old filler needs correction, hyaluronidase treatment is available before re-treatment.",
    ],
    providerTitle: "Clinical team",
    providers: [
      {
        name: "Dr. Nataly",
        role: "Provider",
        href: "/ourteam/dranataly",
      },
      {
        name: "Dr. Jocelyn",
        role: "Provider",
        href: "/ourteam/drajocelyn",
      },
    ],
    faqTitle: "Frequently asked questions about lip fillers in Tijuana",
    faqs: [
      {
        question: "How long do lip fillers last?",
        answer:
          "Lip filler results typically last 9 to 18 months, depending on the type of hyaluronic acid filler used and individual metabolism.",
      },
      {
        question: "Do lip fillers hurt?",
        answer:
          "Most patients describe the treatment as manageable. A numbing protocol is used, and many filler formulas include lidocaine to improve comfort during the procedure.",
      },
      {
        question: "Will my lips look natural after filler?",
        answer:
          "Yes, when the treatment is planned conservatively. The goal is to support your natural lip shape, not to overfill it.",
      },
      {
        question: "Can lip filler be corrected if I already have old filler?",
        answer:
          "Yes. Hyaluronic acid filler can often be dissolved with hyaluronidase when migration, asymmetry, or an overfilled appearance needs correction.",
      },
      {
        question: "How do I know whether I need lip fillers or a lip flip?",
        answer:
          "Lip fillers are better when you want shape, support, hydration, or true volume. A lip flip is better when you want a subtle outward roll of the upper lip without adding filler volume.",
      },
    ],
    ctaTitle: "Ready for the next step?",
    ctaBody:
      "Use this landing page to compare options, then continue to the full treatment page or message the clinic directly for guidance.",
    primaryCta: "Book on WhatsApp",
    secondaryCta: "View full treatment page",
    contactCta: "Contact the clinic",
    relatedTitle: "Related pages",
    relatedLinks: [
      {
        label: "Lip filler treatment details",
        href: TREATMENT_LINK,
      },
      {
        label: "Hyaluronidase correction treatment",
        href: DISSOLVE_LINK,
      },
      {
        label: "Contact Mave Medical Spa",
        href: CONTACT_LINK,
      },
    ],
    stickyLabel: "Lip filler consultation",
    stickyBody: "Questions, candidacy, or timing? Start on WhatsApp.",
  },
  es: {
    title: "Relleno de labios natural en Tijuana",
    metaTitle: "Relleno de labios natural en Tijuana, a minutos de San Diego | Mave Medical Spa",
    subtitle:
      "Una guía clara para pacientes que comparan opciones de relleno labial, recuperación, resultados y próximos pasos antes de agendar.",
    answerFirst:
      "El relleno de labios en Mave Medical Spa utiliza inyectables de ácido hialurónico para aportar volumen controlado, definir bordes, mejorar hidratación y corregir asimetrías manteniendo un movimiento suave y natural. La mayoría de las citas duran alrededor de 30 minutos, la inflamación suele mejorar en 24 a 48 horas y los resultados con frecuencia duran de 9 a 18 meses según el producto y el metabolismo individual.",
    quickFactsTitle: "Datos rápidos sobre relleno de labios",
    quickFacts: [
      "Objetivos principales: volumen, definición, hidratación y balance.",
      "Tiempo de tratamiento: generalmente 15 a 30 minutos tras la valoración y anestesia tópica.",
      "Tiempo de recuperación: inflamación o moretón leve por 24 a 48 horas.",
      "Duración: con frecuencia de 9 a 18 meses, según el plan elegido.",
    ],
    sections: [
      {
        title: "¿Qué son los rellenos de labios y qué pueden mejorar?",
        paragraphs: [
          "Los rellenos de labios son geles inyectables de ácido hialurónico que se utilizan para mejorar forma, estructura e hidratación sin cirugía.",
          "En Mave, la planeación se enfoca en proporción, simetría e integración natural en lugar de simplemente hacer los labios más grandes.",
        ],
        bullets: [
          "Definir el borde labial y el arco de cupido.",
          "Restaurar volumen que se ha perdido con el tiempo.",
          "Mejorar hidratación y suavizar líneas finas alrededor de la boca.",
          "Corregir asimetrías con una colocación conservadora y basada en anatomía.",
        ],
      },
      {
        title: "¿Qué sucede durante una cita de relleno de labios?",
        paragraphs: [
          "Cada cita inicia con una revisión anatómica y una conversación sobre tus objetivos, antecedentes de relleno previo y si conviene más hidratación sutil o contorno estructural.",
          "Se utiliza un protocolo de comodidad, el inyector coloca el producto de forma gradual y los labios se evalúan en movimiento para que el resultado se vea equilibrado al hablar y sonreír.",
        ],
        bullets: [
          "Valoración: balance facial, forma del labio y plan de tratamiento.",
          "Comodidad: anestesia tópica y fórmulas con lidocaína.",
          "Aplicación: colocación conservadora con pausas para revisar simetría.",
          "Seguimiento: indicaciones sobre inflamación, cicatrización y tiempo de retoque si se requiere.",
        ],
      },
      {
        title: "¿Cómo es la recuperación después del relleno de labios?",
        paragraphs: [
          "La mayoría de las pacientes retoman sus actividades rápidamente, aunque puede presentarse inflamación leve, sensibilidad o pequeños moretones durante los primeros días.",
          "Los labios suelen asentarse progresivamente y la forma final se evalúa mejor cuando el producto ya se integró durante los días posteriores.",
        ],
        bullets: [
          "Primeras 24 horas: la inflamación es común y esperada.",
          "Días 2 a 3: los labios suelen empezar a suavizarse y asentarse.",
          "Alrededor de 2 semanas: es más fácil valorar el resultado real.",
          "Si existe migración de relleno previo, puede ser necesario disolver antes.",
        ],
      },
      {
        title: "¿Cómo mantenemos un resultado natural en labios?",
        paragraphs: [
          "Un resultado natural depende de elegir la densidad correcta de ácido hialurónico, respetar la anatomía labial y evitar sobrellenar en una sola sesión.",
          "El enfoque de Mave es conservador y por capas: definir qué hace falta, restaurar solo lo que aporta armonía y reevaluar cuando el tejido ya se asentó.",
        ],
        bullets: [
          "La selección del producto depende de si necesitas hidratación, forma o estructura.",
          "El volumen se construye gradualmente cuando corresponde en lugar de forzar un cambio dramático en una sola visita.",
          "Existe corrección cuando un relleno previo necesita refinamiento o reversión.",
        ],
      },
    ],
    galleryTitle: "Ejemplos reales de antes y después de relleno de labios",
    galleryItems: [
      {
        id: "01",
        title: "Caso 1",
        description: "Refinamiento sutil del contorno y restauración equilibrada de volumen.",
      },
      {
        id: "03",
        title: "Caso 2",
        description: "Mejora natural enfocada en forma, suavidad e hidratación.",
      },
    ],
    comparisonTitle: "¿Cuál es la diferencia entre relleno de labios y lip flip?",
    comparisonHeaders: ["Característica", "Relleno de labios", "Lip flip"],
    comparisonRows: [
      ["Objetivo principal", "Agregar forma, soporte y volumen visible", "Crear un giro sutil hacia afuera del labio superior"],
      ["Tipo de producto", "Relleno de ácido hialurónico", "Toxina botulínica alrededor del labio"],
      ["Ideal para", "Hidratación, contorno, asimetría y pérdida de volumen", "Labio superior escondido o sonrisa gingival suave"],
      ["Cuánto dura", "Generalmente 9 a 18 meses", "Generalmente 3 a 4 meses"],
      ["Tipo de resultado", "Cambio estructural visible", "Cambio sutil basado en movimiento"],
    ],
    trustTitle: "Por qué esta página ayuda antes de agendar",
    trustPoints: [
      "El tratamiento es realizado o supervisado por proveedores estéticos con licencia.",
      "Mave utiliza una planeación natural-first para rejuvenecimiento y corrección labial.",
      "Desde esta guía puedes pasar a la página completa del tratamiento, al formulario de contacto o a WhatsApp.",
      "Si un relleno previo necesita corrección, existe tratamiento con hialuronidasa antes del retratamiento.",
    ],
    providerTitle: "Equipo clínico",
    providers: [
      {
        name: "Dr. Nataly",
        role: "Proveedor estético",
        href: "/ourteam/dranataly",
      },
      {
        name: "Dr. Jocelyn",
        role: "Proveedor estético",
        href: "/ourteam/drajocelyn",
      },
    ],
    faqTitle: "Preguntas frecuentes sobre relleno de labios en Tijuana",
    faqs: [
      {
        question: "¿Cuánto duran los rellenos de labios?",
        answer:
          "Los resultados del relleno labial suelen durar de 9 a 18 meses, dependiendo del tipo de ácido hialurónico utilizado y del metabolismo individual.",
      },
      {
        question: "¿Duele el relleno de labios?",
        answer:
          "La mayoría de las pacientes lo describe como tolerable. Se utiliza un protocolo de anestesia y muchas fórmulas incluyen lidocaína para mejorar la comodidad durante el procedimiento.",
      },
      {
        question: "¿Mis labios se verán naturales?",
        answer:
          "Sí, cuando el tratamiento se planifica de forma conservadora. El objetivo es apoyar la forma natural del labio, no sobrellenarlo.",
      },
      {
        question: "¿Se puede corregir un relleno de labios previo?",
        answer:
          "Sí. El ácido hialurónico puede disolverse con hialuronidasa cuando existe migración, asimetría o una apariencia sobrellenada.",
      },
      {
        question: "¿Cómo sé si necesito relleno de labios o un lip flip?",
        answer:
          "El relleno de labios funciona mejor cuando buscas forma, soporte, hidratación o volumen real. El lip flip es mejor cuando deseas un giro sutil del labio superior sin agregar volumen con relleno.",
      },
    ],
    ctaTitle: "¿Lista para el siguiente paso?",
    ctaBody:
      "Usa esta landing para comparar opciones y después pasa a la página completa del tratamiento o envía mensaje directo a la clínica.",
    primaryCta: "Agendar por WhatsApp",
    secondaryCta: "Ver página completa del tratamiento",
    contactCta: "Contactar a la clínica",
    relatedTitle: "Páginas relacionadas",
    relatedLinks: [
      {
        label: "Detalles del tratamiento de relleno de labios",
        href: TREATMENT_LINK,
      },
      {
        label: "Tratamiento de corrección con hialuronidasa",
        href: DISSOLVE_LINK,
      },
      {
        label: "Contactar a Mave Medical Spa",
        href: CONTACT_LINK,
      },
    ],
    stickyLabel: "Valoración de relleno labial",
    stickyBody: "¿Tienes dudas sobre candidatura o tiempos? Escríbenos por WhatsApp.",
  },
};

function SectionBlock({ section }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-serif text-black">{section.title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-gray-700">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {section.bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-2xl border border-gray-200 bg-white p-4 text-sm text-gray-700"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function LipFillersTijuanaPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const localePrefix = locale === "es" ? "/es" : "";
  const canonicalPath = `${localePrefix}${slug}`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const whatsAppLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[locale] || WHATSAPP_MESSAGES.en
  )}`;

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
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "es" ? "Inicio" : "Home",
            item: `${BASE_URL}${localePrefix || "/"}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "es" ? "Aprende" : "Learn",
            item: `${BASE_URL}${localePrefix}/learn`,
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
        name: copy.metaTitle,
        description: copy.subtitle,
        inLanguage: locale === "es" ? "es" : "en",
        about: { "@id": `${canonicalUrl}#procedure` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        primaryImageOfPage: OG_IMAGE,
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${canonicalUrl}#procedure`,
        name: locale === "es" ? "Relleno de labios con ácido hialurónico" : "Hyaluronic acid lip fillers",
        alternateName:
          locale === "es"
            ? ["Relleno labial", "Aumento de labios"]
            : ["Lip fillers", "Lip injections"],
        description: copy.answerFirst,
        bodyLocation: ["Upper lip", "Lower lip", "Cupid's bow", "Vermilion border"],
        image: [
          `${BASE_URL}/lipfillers.jpg`,
          `${BASE_URL}/lipfillers2.jpg`,
        ],
        preparation:
          locale === "es"
            ? "Evita anticoagulantes y alcohol durante 24 horas antes del tratamiento."
            : "Avoid blood thinners and alcohol for 24 hours before treatment.",
        followup:
          locale === "es"
            ? "Evita ejercicio intenso durante 24 horas y mantente bien hidratada después del tratamiento."
            : "Avoid strenuous exercise for 24 hours after treatment and stay well hydrated.",
        provider: { "@id": ORGANIZATION_ID },
        performer: PROVIDER_PERSON_IDS.map((id) => ({ "@id": id })),
        mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
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
        <title>{copy.metaTitle}</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={copy.metaTitle} />
        <meta property="og:description" content={copy.subtitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Mave Medical Spa" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={copy.metaTitle} />
        <meta name="twitter:description" content={copy.subtitle} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <PromoBanner />
      <Header />

      <main className="bg-white pt-36 md:pt-40 pb-20">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {locale === "es" ? "Aprende" : "Learn"}
              </p>
              <LearnCategoryBreadcrumb
                locale={locale}
                categoryLabel={locale === "es" ? "Rellenos dérmicos" : "Dermal Fillers"}
                categoryAnchor="dermal-fillers-brands"
              />
              <h1 className="mt-3 text-3xl md:text-5xl font-serif text-black max-w-4xl">
                {copy.title}
              </h1>
              <p className="mt-4 text-base text-gray-700 max-w-3xl">{copy.subtitle}</p>

              <div className="mt-6 rounded-3xl border border-gray-200 bg-[#f9f9f9] p-6">
                <p className="text-base md:text-lg leading-relaxed text-gray-800">
                  {copy.answerFirst}
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/lipfillers2.jpg"
                    alt={copy.title}
                    fill
                    priority
                    sizes="(min-width: 1280px) 768px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6">
                <h2 className="text-xl font-serif text-black">{copy.quickFactsTitle}</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {copy.quickFacts.map((fact) => (
                    <li
                      key={fact}
                      className="rounded-2xl bg-[#efeee7] px-4 py-3 text-sm text-gray-700"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 space-y-4">
              <div className="rounded-3xl border border-gray-200 bg-black p-6 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  {copy.stickyLabel}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{copy.stickyBody}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                  >
                    {copy.primaryCta}
                  </a>
                  <NextLink
                    href={TREATMENT_LINK}
                    locale={locale}
                    className="inline-flex justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white"
                  >
                    {copy.secondaryCta}
                  </NextLink>
                  <NextLink
                    href={CONTACT_LINK}
                    locale={locale}
                    className="inline-flex justify-center text-sm text-white/80 underline underline-offset-4"
                  >
                    {copy.contactCta}
                  </NextLink>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6">
                <h2 className="text-lg font-semibold text-black">{copy.providerTitle}</h2>
                <div className="mt-4 space-y-3">
                  {copy.providers.map((provider) => (
                    <NextLink
                      key={provider.href}
                      href={provider.href}
                      locale={locale}
                      className="block rounded-2xl bg-[#f9f9f9] p-4"
                    >
                      <p className="text-sm font-semibold text-black">{provider.name}</p>
                      <p className="text-sm text-gray-600">{provider.role}</p>
                    </NextLink>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-12 min-w-0">
            {copy.sections.map((section) => (
              <SectionBlock key={section.title} section={section} />
            ))}

            <section className="space-y-5">
              <h2 className="text-2xl font-serif text-black">{copy.galleryTitle}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {copy.galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-gray-200 bg-white p-4 space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                          <Image
                            src={`/before-after/hyaluronic-acid-lip-fillers/${item.id}-before.jpg`}
                            alt={
                              locale === "es"
                                ? "Resultados naturales de relleno de labios antes del tratamiento en Mave Medical Spa"
                                : "Natural lip filler results before treatment at Mave Medical Spa"
                            }
                            fill
                            sizes="(min-width: 768px) 280px, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                          {locale === "es" ? "Antes" : "Before"}
                        </p>
                      </div>
                      <div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                          <Image
                            src={`/before-after/hyaluronic-acid-lip-fillers/${item.id}-after.jpg`}
                            alt={
                              locale === "es"
                                ? "Resultados naturales de relleno de labios después del tratamiento en Mave Medical Spa"
                                : "Natural lip filler results after treatment at Mave Medical Spa"
                            }
                            fill
                            sizes="(min-width: 768px) 280px, 50vw"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                          {locale === "es" ? "Después" : "After"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-serif text-black">{copy.comparisonTitle}</h2>
              <div className="overflow-x-auto rounded-3xl border border-gray-200">
                <table className="min-w-full border-collapse text-sm">
                  <thead className="bg-[#efeee7] text-left text-black">
                    <tr>
                      {copy.comparisonHeaders.map((header) => (
                        <th key={header} className="px-4 py-4 font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {copy.comparisonRows.map((row) => (
                      <tr key={row[0]} className="border-t border-gray-200 align-top">
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className="px-4 py-4 text-gray-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-serif text-black">{copy.trustTitle}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {copy.trustPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl border border-gray-200 bg-[#f9f9f9] p-4 text-sm text-gray-700"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-5" id="faq">
              <h2 className="text-2xl font-serif text-black">{copy.faqTitle}</h2>
              <div className="space-y-4">
                {copy.faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-3xl border border-gray-200 bg-white p-6"
                  >
                    <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-black p-6 md:p-8 text-white">
              <h2 className="text-2xl font-serif">{copy.ctaTitle}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">
                {copy.ctaBody}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                >
                  {copy.primaryCta}
                </a>
                <NextLink
                  href={TREATMENT_LINK}
                  locale={locale}
                  className="inline-flex justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white"
                >
                  {copy.secondaryCta}
                </NextLink>
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-gray-200 bg-[#f9f9f9] p-6">
              <h2 className="text-lg font-semibold text-black">{copy.relatedTitle}</h2>
              <div className="mt-4 flex flex-col gap-3">
                {copy.relatedLinks.map((link) => (
                  <NextLink
                    key={link.href}
                    href={link.href}
                    locale={locale}
                    className="text-sm text-[#731a2f] underline underline-offset-4"
                  >
                    {link.label}
                  </NextLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-4 z-30 px-4 lg:hidden">
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex max-w-md items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-lg"
        >
          {copy.primaryCta}
        </a>
      </div>

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
