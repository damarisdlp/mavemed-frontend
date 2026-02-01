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
    title: "Sculptra Collagen Biostimulator",
    subtitle:
      "A medical approach to gradual collagen rebuilding, structure, and long term skin support",
    intro: [
      "Sculptra is often described as a filler, but it behaves differently than traditional hyaluronic acid fillers.",
      "Rather than adding immediate volume with gel, Sculptra is designed to support your skin’s own collagen production over time, with results that build gradually.",
      "If you want a clearer understanding of collagen loss with age and why results take time, visit our collagen timeline guide linked below.",
    ],
    sections: [
      {
        title: "What is Sculptra",
        body: [
          "Sculptra is an injectable collagen biostimulator made of poly L lactic acid, PLLA.",
          "Its role is not to act like a gel that fills space immediately, but to trigger a controlled biological response that supports collagen formation in the treated area.",
          "Because the changes develop gradually, it is used for patients who want a subtle, structural improvement rather than a dramatic same day change.",
        ],
      },
      {
        title: "How Sculptra works, collagen stimulation over time",
        body: [
          "After injection, Sculptra particles act as a stimulus for your body to produce new collagen.",
          "This process is gradual and typically becomes noticeable over weeks to months.",
          "Early improvements right after treatment are often due to the injection fluid and swelling, not the final collagen result.",
          "The goal is progressive improvement in firmness, contour support, and skin quality, not instant transformation.",
          "For a deeper explanation of collagen remodeling timelines, see our collagen timeline guide.",
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
          "Sculptra is not the best option for every face, and it is not intended for superficial line filling in very thin skin areas.",
        ],
      },
      {
        title: "How Sculptra differs from hyaluronic acid fillers",
        body: [
          "Hyaluronic acid fillers create immediate volume by placing a gel where support is needed.",
          "Sculptra supports collagen rebuilding over time, which means:",
          "• Results are gradual, not instant",
          "• Treatment is often done in a series",
          "• The focus is long term structural improvement, not same day volume",
          "Some patients benefit from combining Sculptra with other treatments, but combinations should be planned carefully to protect safety and outcome quality.",
        ],
      },
      {
        title: "Why technique and medical planning matter",
        body: [
          "Sculptra is highly technique dependent.",
          "Placement depth, dilution approach, anatomical planning, and aftercare all influence outcomes.",
          "When used improperly, risks can increase, including delayed nodules or uneven texture.",
          "This is why we treat Sculptra as a medical procedure that requires:",
          "• Candidacy assessment",
          "• Anatomy based planning",
          "• Conservative dosing strategy",
          "• Clear follow up guidance",
        ],
      },
      {
        title: "How many sessions are typically needed",
        body: [
          "Most patients require a series rather than a single session.",
          "Common planning factors include:",
          "• Degree of volume loss and skin laxity",
          "• Age and baseline collagen quality",
          "• Desired subtlety and timeline",
          "• Whether other treatments are being layered into the plan",
          "Because collagen remodeling takes time, results continue to evolve after each session.",
          "If you are unsure what collagen remodeling typically looks like month to month, review our collagen timeline guide.",
        ],
      },
      {
        title: "Safety considerations and who may not be a candidate",
        body: [
          "Sculptra may not be appropriate for patients who are:",
          "• Pregnant or breastfeeding",
          "• Experiencing active skin infection or inflammation in the area",
          "• Seeking immediate dramatic results from a single session",
          "• Unable or unlikely to follow post treatment instructions",
          "Patients with a history of problematic scarring, autoimmune conditions, or prior complications from injectables require individualized assessment.",
        ],
      },
      {
        title: "A note on expectations, gradual and natural results",
        body: [
          "Sculptra is designed for patients who value a gradual, natural change.",
          "It is not a shortcut, and it is not a one visit transformation.",
          "The best outcomes come from:",
          "• Realistic planning",
          "• Appropriate dosing over time",
          "• Good skin health fundamentals",
          "• Follow up and maintenance strategy",
        ],
      },
    ],
    nextTitle: "From education to next steps",
    nextCopy:
      "If you are considering Sculptra and want to understand whether it fits your goals, the next step is a candidacy assessment reviewed by a medical team. You can also review collagen timelines to better understand why results build gradually.",
    nextCta: "Begin Sculptra candidacy assessment",
    collagenCardTitle: "Collagen education",
    collagenCardCopy:
      "Collagen remodeling is gradual. If you want to understand timelines and why results build over months, read our collagen timeline guide.",
    collagenLinkLabel: "Read the collagen timeline guide",
    closingTitle: "A note on safety and ethics",
    closingCopy: [
      "Advanced injectables can support meaningful results, but they do not replace:",
      "• Medical judgment",
      "• Anatomical planning",
      "• Conservative technique",
      "• Long term skin health strategies",
      "Our approach prioritizes safety, realistic outcomes, and ethical treatment planning.",
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
    sections: [
      {
        title: "¿Qué es Sculptra",
        body: [
          "Sculptra es un inyectable bioestimulador de colágeno compuesto por ácido poli L láctico, PLLA.",
          "Su función no es actuar como un gel que rellena de manera inmediata, sino provocar una respuesta biológica controlada que favorece la formación de colágeno en el área tratada.",
          "Como el cambio ocurre de forma gradual, se utiliza en pacientes que buscan una mejora sutil y estructural, no un cambio dramático el mismo día.",
        ],
      },
      {
        title: "Cómo funciona, estimulación de colágeno con el tiempo",
        body: [
          "Después de la aplicación, las partículas de Sculptra actúan como estímulo para que el cuerpo produzca nuevo colágeno.",
          "Este proceso es gradual y suele hacerse visible en semanas a meses.",
          "Las mejoras inmediatas pueden deberse al líquido de inyección o inflamación, no al resultado final del colágeno.",
          "El objetivo es mejorar progresivamente firmeza, soporte y calidad de piel, no una transformación instantánea.",
          "Para una explicación más clara de tiempos de remodelación, revisa nuestra guía de línea de tiempo del colágeno.",
        ],
      },
      {
        title: "¿Qué puede ayudar a mejorar Sculptra",
        body: [
          "Cuando está clínicamente indicado, Sculptra puede apoyar:",
          "• Pérdida de volumen relacionada con la edad",
          "• Soporte estructural y restauración de contorno suave",
          "• Firmeza de la piel y textura crepé en áreas seleccionadas",
          "• Mejoría gradual en armonía facial",
          "Los resultados varían según la calidad basal del colágeno, estilo de vida, metabolismo y consistencia del plan.",
          "Sculptra no es ideal para todos los rostros, ni está diseñado para líneas superficiales en zonas de piel muy delgada.",
        ],
      },
      {
        title: "Diferencias frente a rellenos de ácido hialurónico",
        body: [
          "Los rellenos de ácido hialurónico aportan volumen inmediato colocando un gel donde se requiere soporte.",
          "Sculptra estimula colágeno con el tiempo, por lo que:",
          "• Los resultados son graduales, no inmediatos",
          "• Normalmente se recomienda un protocolo en serie",
          "• El enfoque es estructural y a largo plazo, no volumen en el momento",
          "En algunos casos se combinan tratamientos, pero siempre debe planearse con criterio médico para proteger seguridad y calidad del resultado.",
        ],
      },
      {
        title: "Por qué la técnica y la planificación médica importan",
        body: [
          "Sculptra es altamente dependiente de la técnica.",
          "La profundidad, el plan anatómico, el enfoque de dilución y los cuidados posteriores influyen en el resultado.",
          "Cuando se aplica de forma inadecuada, pueden aumentar riesgos como nódulos tardíos o irregularidades.",
          "Por eso se considera un procedimiento médico que requiere:",
          "• Evaluación de candidatura",
          "• Planificación basada en anatomía",
          "• Estrategia conservadora de dosis",
          "• Indicaciones claras de seguimiento",
        ],
      },
      {
        title: "¿Cuántas sesiones suelen ser necesarias",
        body: [
          "La mayoría de los pacientes requieren un protocolo en serie, no una sola sesión.",
          "Factores comunes para planear incluyen:",
          "• Nivel de pérdida de volumen y flacidez",
          "• Edad y calidad del colágeno",
          "• Objetivo estético y cronograma",
          "• Si se recomiendan terapias complementarias",
          "La remodelación de colágeno toma tiempo, por lo que los resultados continúan evolucionando después de cada sesión.",
          "Si tienes dudas sobre tiempos mes a mes, revisa nuestra guía de línea de tiempo del colágeno.",
        ],
      },
      {
        title: "Consideraciones de seguridad y quién puede no ser candidato",
        body: [
          "Sculptra puede no ser adecuado para pacientes que:",
          "• Están embarazadas o lactando",
          "• Tienen infección o inflamación activa en el área",
          "• Buscan resultados inmediatos y dramáticos en una sola visita",
          "• No pueden o no planean seguir indicaciones post tratamiento",
          "Pacientes con antecedentes de cicatrización problemática, condiciones autoinmunes o complicaciones previas requieren evaluación individual.",
        ],
      },
      {
        title: "Nota sobre expectativas, resultados graduales y naturales",
        body: [
          "Sculptra está diseñado para quienes valoran un cambio gradual y natural.",
          "No es un atajo, ni es una transformación de una sola visita.",
          "Los mejores resultados se obtienen con:",
          "• Planificación realista",
          "• Dosis adecuada a lo largo del tiempo",
          "• Fundamentos de salud de piel",
          "• Seguimiento y estrategia de mantenimiento",
        ],
      },
    ],
    nextTitle: "Siguiente paso",
    nextCopy:
      "Si estás considerando Sculptra y quieres saber si se alinea con tus objetivos, el siguiente paso es una evaluación de candidatura revisada por un equipo médico. También puedes revisar los tiempos del colágeno para entender por qué los resultados se construyen gradualmente.",
    nextCta: "Iniciar evaluación de candidatura para Sculptra",
    collagenCardTitle: "Educación sobre colágeno",
    collagenCardCopy:
      "La remodelación del colágeno es gradual. Si quieres entender los tiempos y por qué los resultados se construyen en meses, revisa la guía de colágeno.",
    collagenLinkLabel: "Leer la guía de línea de tiempo del colágeno",
    closingTitle: "Nota sobre seguridad y ética",
    closingCopy: [
      "Los inyectables avanzados pueden apoyar resultados significativos, pero no reemplazan:",
      "• Juicio médico",
      "• Planificación anatómica",
      "• Técnica conservadora",
      "• Estrategias de salud cutánea a largo plazo",
      "Nuestro enfoque prioriza seguridad, resultados realistas y planificación ética del tratamiento.",
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

export default function SculptraEducationPage() {
  const { locale = "en" } = useRouter();
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
              <p key={line}>{line}</p>
            ))}
          </div>

          {/* Cross link card, placed near the top for better UX and internal linking */}
          <div className="mt-8 max-w-3xl">
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
                href={`/${locale === "es" ? "es/" : ""}sculptra-candidacy`}
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
