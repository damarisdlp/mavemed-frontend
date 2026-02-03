import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const content = {
  en: {
    title: "Sculptra Collagen Biostimulator",
    subtitle:
      "A medical approach to gradual collagen rebuilding, structure, and long term skin support",
    intro: [
      "Sculptra is often described as a filler, but it behaves differently than traditional hyaluronic acid fillers.",
      "Rather than adding immediate volume with gel, Sculptra is designed to support your skin’s own collagen production over time, with results that build gradually.",
      "If you want a clearer understanding of collagen loss with age and why results take time, visit our collagen timeline guide linked below.",
    ],

    collagenCardTitle: "Collagen education",
    collagenCardCopy:
      "Collagen remodeling is gradual. If you want to understand timelines and why results build over months, read our collagen timeline guide.",
    collagenLinkLabel: "Read the collagen timeline guide",

    planCardTitle: "Collagen rebuilding plans at Mave",
    planCardCopy:
      "If you want a structured, staged collagen rebuilding plan, we can map a conservative approach using Sculptra, RF microneedling, and other modalities when appropriate.",
    planCardCta: "Message us about a collagen rebuilding plan",
    treatmentLinkLabel: "View the Sculptra treatment page",
    planInquiryPrefill:
      "Hi Mave, I’m interested in a collagen rebuilding treatment plan with Sculptra. Can you share options and pricing?",
    videosTitle: "Video explainer",
    videosIntro:
      "This Sculptra mechanism video is useful for understanding the biology behind gradual collagen change.",
    videoItems: [
      {
        id: "XETrgeV1x2c",
        title: "Sculptra mechanism overview",
        summary: [
          "Reviews intrinsic and extrinsic skin aging, and explains how collagen quantity and quality decline over time.",
          "Describes Sculptra as a PLLA biostimulator that triggers a controlled fibroblast response and gradual neocollagenesis in the dermis.",
          "Clarifies why early fullness can fade in 24 to 48 hours, and why meaningful results are expected progressively across follow-up months.",
          "Presents manufacturer positioning around gradual, natural-looking support that may last up to about 25 months after the final session.",
        ],
      },
    ],

    sections: [
      {
        title: "What is Sculptra",
        body: [
          "Sculptra is an injectable collagen biostimulator made of poly L lactic acid, PLLA.",
          "Its role is not to act like a gel that fills space immediately, but to trigger a controlled biological response that supports collagen formation in the treated area.",
          "**Because the changes develop gradually, it is used for patients who want subtle, structural improvement rather than a dramatic same day change.**",
        ],
        bullets: [
          "Collagen biostimulator, not a gel filler",
          "Gradual structural support, not instant transformation",
          "Designed for long term planning and staged results",
        ],
      },
      {
        title: "How Sculptra works, collagen signaling over time",
        body: [
          "After injection, Sculptra particles act as a stimulus for your body to produce new collagen.",
          "**Early improvement right after treatment is often due to fluid and swelling, not true collagen yet.**",
          "The goal is progressive improvement in firmness, contour support, and skin quality, not instant volume.",
        ],
        numbered: [
          "A controlled stimulus is placed in the tissue",
          "Fibroblasts are activated over time",
          "New collagen fibers begin to form",
          "Collagen remodels and organizes gradually",
        ],
      },
      {
        title: "Sculptra results timeline, what to expect",
        body: [
          "Sculptra is frequently misunderstood because the first few days can look improved, then settle.",
          "**That is normal. Sculptra is a collagen process, not an instant result.**",
          "This is a general framework, individual timelines vary.",
        ],
        timeline: [
          {
            label: "0 to 7 days",
            text: "**Temporary fullness may appear from dilution fluid and mild swelling. This is not collagen yet.**",
          },
          {
            label: "2 to 6 weeks",
            text: "Early cellular signaling begins, collagen formation is still subtle, many patients feel like nothing is happening yet.",
          },
          {
            label: "6 to 12 weeks",
            text: "**Collagen formation becomes more noticeable, support looks more natural because it is built by your own tissue response.**",
          },
          {
            label: "3 to 6 months",
            text: "**Remodeling continues, results often become most obvious after completing a series.**",
          },
          {
            label: "6 to 12 months",
            text: "Collagen maturation and organization continues, results tend to look more refined and integrated.",
          },
        ],
      },
      {
        title: "What concerns can Sculptra help improve",
        body: [
          "When clinically appropriate, Sculptra may be used to support:",
          "• Volume loss related to aging",
          "• Facial structure support and soft contour restoration",
          "• Skin firmness and crepey texture in selected areas",
          "• Gradual improvement in overall facial balance",
          "Results vary depending on baseline collagen status, lifestyle factors, metabolism, and treatment plan consistency.",
          "**Sculptra is not intended for superficial line filling in very thin skin areas.**",
        ],
        bullets: [
          "Age related volume loss",
          "Structural support, cheeks, temples, jawline in selected cases",
          "Skin firmness and crepey texture in selected areas",
          "Gradual, natural looking improvement",
        ],
      },
      {
        title: "How Sculptra differs from hyaluronic acid fillers",
        body: [
          "Hyaluronic acid fillers create immediate volume by placing a gel where support is needed.",
          "Sculptra supports collagen rebuilding over time, which means:",
          "**Results are gradual, treatment is often done in a series, and the focus is long term structural improvement.**",
          "Some patients benefit from combining Sculptra with other treatments, but combinations should be planned carefully to protect safety and outcome quality.",
        ],
        bullets: [
          "Hyaluronic acid, immediate gel support",
          "Sculptra, gradual collagen signaling and rebuilding",
          "Series based planning is common with Sculptra",
          "Combination therapy can be useful when staged conservatively",
        ],
      },
      {
        title: "How many sessions are typically needed, and how long results can last",
        body: [
          "**Sculptra is typically planned as a series because collagen is built gradually.**",
          "The exact plan depends on anatomy, collagen depletion, goals, and whether other modalities are layered into the plan.",
          "**A common starting plan is 2 to 3 sessions, spaced about 4 to 8 weeks apart.**",
          "With a complete series, results are often described as lasting about **2 years or more**, sometimes longer, depending on individual biology and lifestyle.",
          "**This is not a guarantee. Response varies.**",
        ],
        bullets: [
          "**Common starting plan, 2 to 3 sessions**",
          "Spacing often **4 to 8 weeks** between sessions",
          "Some patients may benefit from additional sessions staged conservatively",
          "**Longevity often about 2 years or more** after completing a series",
        ],
      },
      {
        title: "Why Sculptra does not last forever",
        body: [
          "Sculptra can help you build collagen, but it cannot stop biology.",
          "**Collagen naturally turns over and breaks down over time, and the face continues to change with age.**",
          "Long term change is influenced by sun exposure, chronic inflammation, metabolic health, hormonal shifts, and natural structural aging.",
          "**Maintenance is not because Sculptra failed, it is because aging continues.**",
        ],
        bullets: [
          "Natural collagen turnover and degradation continues",
          "Photoaging and chronic inflammation influence breakdown",
          "Metabolic and hormonal shifts affect collagen quality",
          "Facial structure changes over time, fat compartments and bone support evolve",
        ],
      },
      {
        title: "Why technique and medical planning matter",
        body: [
          "**Sculptra is highly technique dependent.**",
          "Placement depth, dilution approach, anatomical planning, and aftercare all influence outcomes.",
          "When used improperly, risks can increase, including delayed nodules or uneven texture.",
          "This is why we treat Sculptra as a medical procedure that requires candidacy assessment, anatomy based planning, conservative dosing, and clear follow up guidance.",
        ],
        bullets: [
          "Technique dependent outcomes",
          "Depth and plane selection matters",
          "Conservative dosing and staging protects safety",
          "Follow up and aftercare influence outcome quality",
        ],
      },
      {
        title: "Safety considerations and who may not be a candidate",
        body: [
          "Sculptra may not be appropriate for patients who are pregnant or breastfeeding, who have active infection or inflammation in the area, or who are seeking immediate dramatic results from a single session.",
          "Patients with a history of problematic scarring, autoimmune conditions, or prior complications from injectables require individualized assessment.",
        ],
        bullets: [
          "Pregnant or breastfeeding",
          "Active infection or active inflammation in the area",
          "Seeking dramatic same day change",
          "History requiring individualized risk review",
        ],
      },
      {
        title: "A note on expectations, gradual and natural results",
        body: [
          "**Sculptra is designed for patients who value a gradual, natural change.**",
          "It is not a shortcut, and it is not a one visit transformation.",
          "The best outcomes come from realistic planning, appropriate dosing over time, good skin health fundamentals, and a maintenance strategy when needed.",
        ],
        bullets: [
          "Gradual change, natural integration",
          "Series based planning",
          "Skin health fundamentals matter",
          "Maintenance can be part of ethical long term planning",
        ],
        links: [
          {
            label: "Collagen loss and rebuilding timeline",
            href: "/learn/collagen-loss-and-rebuilding-timeline",
          },
        ],
      },
    ],
  },

  es: {
    title: "Sculptra Bioestimulador de Colágeno",
    subtitle:
      "Un enfoque médico para regeneración gradual de colágeno, soporte estructural y resultados a largo plazo",
    intro: [
      "Sculptra a veces se describe como relleno, pero su comportamiento es diferente a los rellenos tradicionales de ácido hialurónico.",
      "En lugar de aportar volumen inmediato con gel, Sculptra está diseñado para estimular la producción de colágeno con el tiempo, con resultados que se construyen de forma gradual.",
      "Si quieres entender mejor cómo cambia el colágeno con la edad y por qué los resultados toman tiempo, visita nuestra guía de línea de tiempo del colágeno enlazada abajo.",
    ],

    collagenCardTitle: "Educación sobre colágeno",
    collagenCardCopy:
      "La remodelación del colágeno es gradual. Si quieres entender los tiempos y por qué los resultados se construyen en meses, revisa la guía de colágeno.",
    collagenLinkLabel: "Leer la guía de línea de tiempo del colágeno",

    planCardTitle: "Planes de reconstrucción de colágeno en Mave",
    planCardCopy:
      "Si quieres un plan estructurado y por etapas, podemos mapear un enfoque conservador usando Sculptra, RF microneedling y otras modalidades cuando sea apropiado.",
    planCardCta: "Escríbenos sobre un plan de colágeno",
    treatmentLinkLabel: "Ver la página del tratamiento Sculptra",
    planInquiryPrefill:
      "Hola Mave, me interesa un plan de reconstrucción de colágeno con Sculptra. Me pueden compartir opciones y precios?",
    videosTitle: "Video explicativo",
    videosIntro:
      "Este video sobre el mecanismo de Sculptra ayuda a entender la biología del cambio gradual del colágeno.",
    videoItems: [
      {
        id: "XETrgeV1x2c",
        title: "Resumen del mecanismo de Sculptra",
        summary: [
          "Explica envejecimiento intrínseco y extrínseco de la piel, y cómo disminuyen cantidad y calidad del colágeno con el tiempo.",
          "Describe Sculptra como bioestimulador de PLLA que induce una respuesta controlada de fibroblastos y neocolagénesis gradual en la dermis.",
          "Aclara por qué el volumen inicial puede disminuir en 24 a 48 horas y por qué los resultados reales se observan de forma progresiva en los meses siguientes.",
          "Presenta el posicionamiento del fabricante sobre soporte gradual y natural que puede durar hasta cerca de 25 meses tras la sesión final.",
        ],
      },
    ],

    sections: [
      {
        title: "Qué es Sculptra",
        body: [
          "Sculptra es un inyectable bioestimulador de colágeno compuesto por ácido poli L láctico, PLLA.",
          "Su función no es actuar como un gel que rellena de manera inmediata, sino provocar una respuesta biológica controlada que favorece la formación de colágeno en el área tratada.",
          "**Como el cambio ocurre de forma gradual, se utiliza en pacientes que buscan mejora sutil y estructural, no un cambio dramático el mismo día.**",
        ],
        bullets: [
          "Bioestimulador de colágeno, no gel",
          "Soporte estructural gradual, no transformación inmediata",
          "Diseñado para planificación y resultados por etapas",
        ],
      },
      {
        title: "Cómo funciona, señalización de colágeno con el tiempo",
        body: [
          "Después de la aplicación, las partículas de Sculptra actúan como estímulo para que el cuerpo produzca nuevo colágeno.",
          "**La mejoría temprana suele deberse al líquido y a la inflamación, no a colágeno verdadero todavía.**",
          "El objetivo es mejorar progresivamente firmeza, soporte y calidad de piel, no volumen instantáneo.",
        ],
        numbered: [
          "Se coloca un estímulo controlado en el tejido",
          "Se activan fibroblastos con el tiempo",
          "Comienzan a formarse nuevas fibras de colágeno",
          "El colágeno se remodela y organiza gradualmente",
        ],
      },
      {
        title: "Línea de tiempo de resultados con Sculptra",
        body: [
          "Sculptra se malinterpreta porque los primeros días a veces se ven “mejor”, y luego se asienta.",
          "**Eso es normal. Sculptra es un proceso de colágeno, no un resultado inmediato.**",
          "Esta es una referencia general, los tiempos varían por persona.",
        ],
        timeline: [
          {
            label: "0 a 7 días",
            text: "**Puede aparecer volumen temporal por el líquido y leve inflamación. Todavía no es colágeno.**",
          },
          {
            label: "2 a 6 semanas",
            text: "Inicia la señalización, el colágeno aún es sutil, muchas personas sienten que todavía no pasa nada.",
          },
          {
            label: "6 a 12 semanas",
            text: "**La formación de colágeno se vuelve más evidente, el soporte se ve más natural porque lo crea tu propio tejido.**",
          },
          {
            label: "3 a 6 meses",
            text: "**La remodelación continúa, el cambio suele ser más notable después de completar una serie.**",
          },
          {
            label: "6 a 12 meses",
            text: "El colágeno madura y se organiza mejor, el resultado se ve más refinado e integrado.",
          },
        ],
      },
      {
        title: "Qué puede ayudar a mejorar Sculptra",
        body: [
          "Cuando está clínicamente indicado, Sculptra puede apoyar:",
          "• Pérdida de volumen relacionada con la edad",
          "• Soporte estructural y restauración de contorno suave",
          "• Firmeza y textura crepé en áreas seleccionadas",
          "• Mejoría gradual en armonía facial",
          "Los resultados varían según colágeno basal, estilo de vida, metabolismo y consistencia del plan.",
          "**Sculptra no está diseñado para rellenar líneas superficiales en zonas de piel muy delgada.**",
        ],
        bullets: [
          "Pérdida de volumen por edad",
          "Soporte estructural en áreas seleccionadas",
          "Firmeza y textura crepé en áreas seleccionadas",
          "Mejoría gradual y natural",
        ],
      },
      {
        title: "Diferencias frente a rellenos de ácido hialurónico",
        body: [
          "Los rellenos de ácido hialurónico aportan volumen inmediato colocando un gel donde se requiere soporte.",
          "Sculptra estimula colágeno con el tiempo.",
          "**Esto implica resultados graduales, planificación en serie, y enfoque estructural a largo plazo.**",
          "En algunos casos se combinan tratamientos, pero siempre debe planearse con criterio médico para proteger seguridad y calidad.",
        ],
        bullets: [
          "Ácido hialurónico, soporte inmediato con gel",
          "Sculptra, señalización y reconstrucción gradual",
          "Con Sculptra es común planear en serie",
          "La combinación puede ser útil si se hace por etapas",
        ],
      },
      {
        title: "Cuántas sesiones se recomiendan, y cuánto puede durar",
        body: [
          "**Sculptra normalmente se planea en serie porque el colágeno se construye poco a poco.**",
          "El plan depende de anatomía, nivel de pérdida de colágeno, objetivos, y si se combinan otras modalidades.",
          "**Un plan inicial común es 2 a 3 sesiones, separadas aproximadamente cada 4 a 8 semanas.**",
          "Después de completar la serie, muchas personas describen duración de **aproximadamente 2 años o más**, a veces más, según biología y estilo de vida.",
          "**No es garantía. La respuesta varía.**",
        ],
        bullets: [
          "**Plan inicial común, 2 a 3 sesiones**",
          "Espaciado común **4 a 8 semanas**",
          "Algunas personas se benefician de sesiones adicionales, de forma conservadora",
          "**Duración frecuente, cerca de 2 años o más** después de completar la serie",
        ],
      },
      {
        title: "Por qué Sculptra no dura para siempre",
        body: [
          "Sculptra ayuda a construir colágeno, pero no detiene el envejecimiento.",
          "**El colágeno se recambia y se degrada con el tiempo, y el rostro continúa cambiando.**",
          "Influyen la exposición solar, inflamación crónica, salud metabólica, cambios hormonales, y cambios estructurales naturales.",
          "**El mantenimiento no es porque Sculptra falló, es porque el envejecimiento continúa.**",
        ],
        bullets: [
          "El colágeno se degrada y se recambia naturalmente",
          "Fotoenvejecimiento e inflamación influyen",
          "Cambios metabólicos y hormonales afectan calidad de colágeno",
          "La estructura facial cambia con el tiempo",
        ],
      },
      {
        title: "Por qué la técnica y la planificación médica importan",
        body: [
          "**Sculptra es altamente dependiente de la técnica.**",
          "La profundidad, el plan anatómico, el enfoque de dilución y los cuidados posteriores influyen en el resultado.",
          "Cuando se aplica de forma inadecuada, pueden aumentar riesgos como nódulos tardíos o irregularidades.",
          "Por eso se considera un procedimiento médico que requiere evaluación de candidatura, planificación basada en anatomía, dosis conservadora, y seguimiento claro.",
        ],
        bullets: [
          "Resultados dependientes de técnica",
          "Importa el plano y la profundidad",
          "Dosis conservadora y por etapas protege seguridad",
          "Seguimiento y cuidados influyen en la calidad",
        ],
      },
      {
        title: "Consideraciones de seguridad y quién puede no ser candidato",
        body: [
          "Sculptra puede no ser adecuado para personas embarazadas o lactando, con infección o inflamación activa en el área, o que buscan un cambio dramático inmediato en una sola sesión.",
          "Personas con antecedentes de cicatrización problemática, condiciones autoinmunes o complicaciones previas requieren evaluación individual.",
        ],
        bullets: [
          "Embarazo o lactancia",
          "Infección o inflamación activa en el área",
          "Búsqueda de resultados inmediatos y dramáticos",
          "Antecedentes que requieren evaluación individual",
        ],
      },
      {
        title: "Nota sobre expectativas, resultados graduales y naturales",
        body: [
          "**Sculptra está diseñado para quienes valoran un cambio gradual y natural.**",
          "No es un atajo, ni es una transformación de una sola visita.",
          "Los mejores resultados se obtienen con planificación realista, dosis adecuada a lo largo del tiempo, fundamentos de salud de piel, y estrategia de mantenimiento cuando sea necesario.",
        ],
        bullets: [
          "Cambio gradual e integrado",
          "Planificación en serie",
          "Fundamentos de salud de piel",
          "Mantenimiento como estrategia a largo plazo",
        ],
        links: [
          {
            label: "Pérdida y reconstrucción del colágeno",
            href: "/learn/collagen-loss-and-rebuilding-timeline",
          },
        ],
      },
    ],
  },
};

const slug = "/learn/sculptra-collagen-biostimulator";
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
const SCULPTRA_TREATMENT_SLUG = "/treatments/sculptra";

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

export default function SculptraEducationPage() {
  const { locale = "en" } = useRouter();
  const { t } = useTranslation("learn");
  const copy = useMemo(() => content[locale] || content.en, [locale]);

  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/sculptra.jpg`;

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
        about: { "@id": `${canonicalUrl}#medicalprocedure` },
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${canonicalUrl}#medicalprocedure`,
        name: "Sculptra Collagen Biostimulator",
        alternateName: [
          "PLLA collagen biostimulator",
          "Sculptra facial collagen stimulation",
          "Sculptra for volume loss education",
        ],
        description:
          "Sculptra is an injectable collagen biostimulator containing poly L lactic acid, PLLA. It is used in aesthetic medicine to support gradual collagen production and improve structural support, contour balance, and selected skin quality concerns when clinically appropriate.",
        procedureType: "Therapeutic",
        howPerformed:
          "A medical provider injects a PLLA based biostimulator into selected anatomical planes following an individualized plan designed around facial structure, degree of collagen loss, and treatment goals.",
        bodyLocation: ["Face", "Temples", "Cheeks", "Jawline"],
        relevantSpecialty: ["Dermatology", "PlasticSurgery"],
        preparation:
          "Clinical assessment is performed to evaluate facial anatomy, medical history, risk factors, and suitability for collagen biostimulation.",
        followup:
          "Post treatment care and follow up recommendations are provided. Multiple sessions are commonly recommended, with results developing gradually over weeks to months.",
        riskFactor: [
          "Technique dependent outcomes",
          "Potential for nodules or irregular texture if placed improperly",
          "Not suitable for pregnancy or breastfeeding",
          "Not suitable with active skin infection or active inflammation in the area",
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
              <p key={line}>
                <BoldText text={line} />
              </p>
            ))}
          </div>

          <div className="mt-8 max-w-3xl space-y-4">
            <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {copy.collagenCardTitle}
              </p>
              <p className="text-sm text-gray-700">{copy.collagenCardCopy}</p>
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

            <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {copy.planCardTitle}
              </p>
              <p className="text-sm text-gray-700">{copy.planCardCopy}</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(copy.planInquiryPrefill)}`}
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {copy.planCardCta}
                </a>
                <a
                  href={`/${locale === "es" ? "es/" : ""}${SCULPTRA_TREATMENT_SLUG.replace(
                    /^\//,
                    ""
                  )}`}
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {copy.treatmentLinkLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-serif text-black">{copy.videosTitle}</h2>
            <p className="text-sm text-gray-700 mt-2">{copy.videosIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {(copy.videoItems || []).map((video) => (
              <article
                key={video.id}
                className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-4 space-y-3"
              >
                <div className="aspect-video overflow-hidden rounded-xl bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-base font-semibold text-black leading-snug">{video.title}</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {(video.summary || []).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-12">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xl font-serif text-black">{section.title}</h2>

              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {section.body?.map((line) => (
                  <p key={line}>
                    <BoldText text={line} />
                  </p>
                ))}
              </div>

              {section.numbered?.length ? (
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                  {section.numbered.map((item) => (
                    <li key={item}>
                      <BoldText text={item} />
                    </li>
                  ))}
                </ol>
              ) : null}

              {section.bullets?.length ? (
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {section.bullets.map((item) => (
                    <li key={item}>
                      <BoldText text={item} />
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.timeline?.length ? (
                <div className="mt-4 border border-gray-200 rounded-2xl overflow-hidden">
                  {section.timeline.map((row, idx) => (
                    <div
                      key={row.label}
                      className={`px-5 py-4 text-sm ${
                        idx !== 0 ? "border-t border-gray-200" : ""
                      }`}
                    >
                      <p className="font-semibold text-black">{row.label}</p>
                      <p className="text-gray-700 mt-1">
                        <BoldText text={row.text} />
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.links?.length ? (
                <div className="mt-4 border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-3">
                  <p className="text-sm font-semibold text-black">
                    {t("relatedEducation")}
                  </p>
                  <div className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <a
                        key={link.href}
                        href={`/${locale === "es" ? "es" : ""}${link.href}`}
                        className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
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
