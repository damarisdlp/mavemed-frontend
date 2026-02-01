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
    title: "Collagen Loss and Rebuilding Timeline",
    subtitle:
      "What happens to collagen as we age, what actually stimulates rebuilding, and why results take time",
    intro: [
      "Collagen is frequently mentioned in aesthetic medicine, but it is rarely explained accurately.",
      "Many treatments are described as collagen stimulating without explaining how collagen changes with age, how slow rebuilding truly is, or why results unfold over months instead of days.",
      "This page explains how collagen degrades over time, what actually triggers new collagen formation, and what realistic timelines look like for treatments such as RF microneedling, Sculptra, lasers, and ultrasound based therapies.",
    ],
    sections: [
      {
        title: "What collagen is and why it matters",
        body: [
          "Collagen is a structural protein that provides strength, elasticity, and resistance to deformation within the skin.",
          "It acts as an internal scaffold that supports skin thickness, firmness, texture, and long term integrity.",
          "Because collagen exists in deeper layers of the skin, true collagen change cannot occur overnight or at the surface level.",
        ],
      },
      {
        title: "How collagen changes with age",
        body: [
          "Collagen loss is gradual, cumulative, and often unnoticed in its early stages.",
          "On average, collagen production begins to decline in the mid to late twenties, accelerates in the thirties and forties, and becomes more clinically apparent in the fifties and beyond.",
          "This process is influenced by genetics, sun exposure, inflammation, hormonal changes, and overall metabolic health.",
          "Importantly, collagen loss affects more than wrinkles. It contributes to reduced skin density, loss of support, and decreased tolerance to aesthetic procedures.",
        ],
      },
      {
        title: "Why collagen rebuilding takes time",
        body: [
          "Collagen formation is a biological process, not a cosmetic one.",
          "After a controlled stimulus, the body must recognize the signal, activate fibroblasts, produce new collagen fibers, and gradually remodel that collagen over time.",
          "This process unfolds over weeks to months, not days.",
          "Any treatment promising immediate collagen rebuilding is typically referring to temporary swelling or inflammation rather than true structural change.",
        ],
      },
      {
        title: "What actually stimulates collagen",
        body: [
          "True collagen stimulation requires controlled injury or thermal signaling at the appropriate depth, followed by adequate recovery time.",
          "Examples of treatments that may stimulate collagen include RF microneedling, collagen biostimulators such as Sculptra, medical grade laser resurfacing, and focused ultrasound therapies.",
          "Each modality works through a different biological mechanism and carries its own risk profile, timeline, and ideal candidate criteria.",
        ],
      },
      {
        title: "General collagen rebuilding timeline",
        body: [
          "While individual responses vary, collagen remodeling generally follows a predictable biological sequence.",
          "From zero to four weeks, inflammation and early cellular signaling occur without true collagen formation.",
          "Between four and eight weeks, early collagen production may begin.",
          "From eight to sixteen weeks, gradual improvements in firmness or texture may become noticeable.",
          "Between three and six months, collagen remodeling continues and results become more apparent.",
          "Between six and twelve months, collagen fibers mature and organize, often representing peak structural change.",
          "This is why collagen focused treatments are typically planned as a series rather than a single session.",
        ],
      },
      {
        title: "Why combination treatments are often recommended",
        body: [
          "Different treatments stimulate collagen in different layers of the skin.",
          "For example, RF microneedling may improve skin texture and density, while biostimulators like Sculptra support deeper structural collagen.",
          "When planned conservatively, combination therapy can support more balanced and longer lasting outcomes.",
          "This layered approach is why many medical treatment plans are staged rather than performed all at once.",
        ],
      },
      {
        title: "Why expectations matter",
        body: [
          "Understanding collagen timelines protects patients from over treatment, unrealistic expectations, and unnecessary risk.",
          "Slow, progressive change is often a sign that biology is being respected rather than rushed.",
        ],
      },
    ],
    closingTitle: "How this applies to your treatment plan",
    closingCopy: [
      "If you are considering treatments such as RF microneedling or Sculptra, this timeline explains why results build gradually, why multiple sessions may be recommended, and why maintenance matters.",
      "Collagen focused treatment planning prioritizes safety, long term outcomes, and biological realism.",
    ],
  },

  es: {
    title: "Pérdida y Reconstrucción del Colágeno",
    subtitle:
      "Qué ocurre con el colágeno con la edad, cómo se reconstruye y por qué los resultados toman tiempo",
    intro: [
      "El colágeno se menciona con frecuencia en la medicina estética, pero pocas veces se explica de forma clara.",
      "Muchos tratamientos se describen como estimuladores de colágeno sin explicar cómo se pierde con la edad o por qué su regeneración es lenta.",
      "Esta página explica cómo cambia el colágeno con el tiempo, qué tratamientos realmente lo estimulan y cuáles son los tiempos realistas de resultados.",
    ],
    sections: [
      {
        title: "Qué es el colágeno y por qué es importante",
        body: [
          "El colágeno es una proteína estructural que da soporte, firmeza y resistencia a la piel.",
          "Funciona como un andamiaje interno que sostiene el grosor, la textura y la integridad de la piel.",
          "El colágeno se encuentra en capas profundas, por lo que su regeneración no puede ser inmediata.",
        ],
      },
      {
        title: "Cómo cambia el colágeno con la edad",
        body: [
          "La pérdida de colágeno es gradual y acumulativa.",
          "Generalmente comienza a finales de los veinte, se acelera en los treinta y cuarenta, y se vuelve más evidente a partir de los cincuenta.",
          "Influyen factores como genética, exposición solar, inflamación, hormonas y estilo de vida.",
          "La pérdida de colágeno no solo produce arrugas, también afecta soporte y densidad cutánea.",
        ],
      },
      {
        title: "Por qué la reconstrucción toma tiempo",
        body: [
          "La formación de colágeno es un proceso biológico complejo.",
          "Después de un estímulo, el cuerpo debe activar fibroblastos, producir nuevas fibras y remodelarlas progresivamente.",
          "Este proceso ocurre en semanas y meses, no en días.",
        ],
      },
      {
        title: "Qué tratamientos estimulan colágeno",
        body: [
          "La estimulación real de colágeno requiere señalización térmica o mecánica controlada a la profundidad adecuada.",
          "Ejemplos incluyen RF microneedling, bioestimuladores como Sculptra, láseres médicos y ultrasonido focalizado.",
          "Cada tratamiento actúa de manera distinta y con tiempos diferentes.",
        ],
      },
      {
        title: "Línea general de tiempo de reconstrucción",
        body: [
          "Aunque varía por persona, existe un patrón general.",
          "De cero a cuatro semanas, ocurre inflamación y señalización inicial.",
          "De cuatro a ocho semanas, comienza la formación de colágeno.",
          "De ocho a dieciséis semanas, aparecen mejoras graduales.",
          "De tres a seis meses, continúa la remodelación.",
          "De seis a doce meses, el colágeno madura y se organiza.",
        ],
      },
      {
        title: "Por qué se combinan tratamientos",
        body: [
          "Cada tratamiento actúa en capas distintas.",
          "La combinación bien planificada puede mejorar soporte, textura y durabilidad de resultados.",
        ],
      },
      {
        title: "Importancia de expectativas realistas",
        body: [
          "Entender los tiempos del colágeno ayuda a evitar sobre tratamiento y riesgos innecesarios.",
          "Los cambios lentos suelen ser los más estables.",
        ],
      },
    ],
    closingTitle: "Cómo se relaciona con tu plan",
    closingCopy: [
      "Esta información ayuda a entender por qué tratamientos como RF microneedling y Sculptra se planifican en etapas.",
      "La prioridad es seguridad, resultados realistas y salud cutánea a largo plazo.",
    ],
  },
};

const slug = "/learn/collagen-loss-and-rebuilding-timeline";
const BASE_URL = "https://www.mavemedspa.com";

export default function CollagenTimelinePage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  return (
    <>
      <Head>
        <title>{copy.title} | Mave Medical Spa</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <PromoBanner />
      <Header />

      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Learn
            </p>
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
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-10">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-xl font-serif text-black">
                {section.title}
              </h2>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {section.body.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="border-t border-gray-200 pt-8 space-y-3">
            <h3 className="text-lg font-semibold text-black">
              {copy.closingTitle}
            </h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
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