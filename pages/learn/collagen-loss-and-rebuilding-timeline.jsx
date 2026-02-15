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
    title: "Collagen Over Time",
    subtitle:
      "Why collagen changes with age, what that looks like in the skin, and what realistic rebuilding timelines can be",
    intro: [
      "**Collagen is one of the main structural proteins that helps skin stay firm, resilient, and supported.**",
      "As we age, collagen production slows and existing collagen fibers become less organized. This is normal biology, not a personal failure.",
      "Many treatments, including RF microneedling and collagen biostimulators such as Galderma-manufactured PLLA, aim to support collagen remodeling. **The key is understanding that collagen change is gradual, and timelines matter.**",
    ],
    sections: [
      {
        title: "What collagen does in the skin",
        body: [
          "**Collagen acts like structural support for the dermis, helping the skin resist folding, sagging, and thinning.**",
          "It works alongside elastin, hyaluronic acid, and healthy vascular and barrier function.",
          "When collagen support declines, common changes include softer facial structure, fine lines that linger, crepey texture, and reduced elasticity.",
        ],
      },
      {
        title: "Why collagen declines with age",
        body: [
          "Collagen change is driven by both intrinsic aging and environmental factors.",
          "Common contributors include:",
          "• Slower fibroblast activity, meaning the skin produces collagen less efficiently",
          "• Ongoing collagen breakdown from inflammation and oxidative stress",
          "• Sun exposure over time, which accelerates collagen disorganization and degradation",
          "• Hormonal shifts that can affect skin thickness and repair capacity",
          "**This is why collagen focused treatment planning is usually long term, not one appointment.**",
        ],
      },
      {
        title: "What collagen rebuilding actually means",
        body: [
          "**In aesthetic medicine, collagen rebuilding usually means collagen remodeling.**",
          "That includes stimulating new collagen formation and improving the organization of collagen fibers over time.",
          "This is different from instant volume from gels. Collagen remodeling is slower, more subtle, and more dependent on the patient’s biology and consistency.",
        ],
      },
      {
        title: "A realistic timeline for visible change",
        body: [
          "**Collagen remodeling is not immediate.** Even when a treatment triggers collagen signaling quickly, the visible structural change takes time.",
          "A typical timeline many patients experience looks like this:",
          "Some patients build collagen faster, others more slowly. **This is why we avoid promising exact timelines or identical results.**",
        ],
        timeline: [
          {
            label: "0 to 2 weeks",
            text: "Early changes are often swelling or temporary hydration effects, **not mature collagen change yet.**",
          },
          {
            label: "3 to 6 weeks",
            text: "**Early signaling phase.** Initial improvements may begin in texture and skin resilience.",
          },
          {
            label: "2 to 4 months",
            text: "**Collagen changes become more noticeable,** especially with series-based treatment planning.",
          },
          {
            label: "4 to 6 months",
            text: "**Remodeling phase.** Results often look more settled and structural.",
          },
          {
            label: "6 to 12 months",
            text: "**Maturation phase.** Continued improvement may appear as collagen fibers organize over time.",
          },
        ],
      },
      {
        title: "Why most collagen plans are series based",
        body: [
          "**Collagen focused treatments often work best as a series because the stimulus is cumulative.**",
          "Each session supports ongoing remodeling, and spacing allows the skin to respond and recover.",
          "This is common with RF microneedling series and also with collagen biostimulation protocols that are designed to build gradually.",
        ],
      },
      {
        title: "What affects your response to collagen treatments",
        body: [
          "Collagen response is influenced by more than the device or injectable alone.",
          "Key factors include:",
          "• Age and baseline collagen quality",
          "• Sun exposure history and current daily protection",
          "• Smoking or vaping, which can impair repair processes",
          "• Inflammation, including acne, dermatitis, or uncontrolled skin sensitivity",
          "• Nutrition, sleep, and overall metabolic health",
          "• Consistency with aftercare and treatment spacing",
          "**This is why candidacy and planning matter, and why two patients can receive similar treatments with different outcomes.**",
        ],
      },
      {
        title: "How RF microneedling and biostimulators fit into collagen strategy",
        body: [
          "RF microneedling can support collagen remodeling by delivering controlled energy at specific depths, which can improve texture, pores, and firmness when used appropriately.",
          "Collagen biostimulators can support longer term structural improvement by triggering gradual collagen formation over time.",
          "Some patients benefit from combining approaches, but **combination therapy should be individualized** based on skin type, risk profile, and goals.",
        ],
      },
      {
        title: "Safety and expectations, what collagen treatments cannot do",
        body: [
          "**Collagen focused treatments can improve skin quality and structural support, but they do not stop time.**",
          "They also cannot replace:",
          "• Good sun protection and barrier care",
          "• Healthy healing capacity",
          "• Realistic treatment planning",
          "**A conservative plan that protects long term skin health usually delivers better results than aggressive or rushed treatments.**",
        ],
      },
    ],
    nextTitle: "Explore related treatment education",
    nextCopy:
      "If you are learning about collagen timelines because you are considering RF microneedling or PLLA collagen biostimulator treatment, you can explore those pages next, then book a candidacy assessment to build a plan that fits your skin and goals. **Series-based planning is often safer and more realistic than one-session expectations.**",
    nextLinks: [
      { label: "Learn about RF microneedling", href: "/learn/sylfirm-x-rf-microneedling" },
      { label: "Learn about PLLA collagen biostimulator", href: "/learn/plla-collagen-biostimulator" },
    ],
    serviceLinksTitle: "Related services",
    serviceLinks: [
      {
        label: "RF Microneedling (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
      {
        label: "Collagen Biostimulator (PLLA)",
        href: "/treatments/collagen-biostimulator-plla",
      },
    ],
    closingTitle: "A note on planning",
    closingCopy: [
      "**Collagen is a long game.**",
      "The best results usually come from a structured plan, consistent spacing, and protecting the skin between sessions.",
      "**Our approach prioritizes medical judgment, conservative planning, and outcomes that look natural over time.**",
    ],
  },
  es: {
    title: "El Colágeno con el Paso del Tiempo",
    subtitle:
      "Por qué el colágeno cambia con la edad, cómo se refleja en la piel, y cuáles son los tiempos realistas para reconstruirlo",
    intro: [
      "**El colágeno es una de las principales proteínas estructurales que ayudan a que la piel se mantenga firme, resistente y con soporte.**",
      "Con la edad, la producción de colágeno se vuelve más lenta y las fibras existentes se desorganizan. Esto es biología normal, no un error personal.",
      "Muchos tratamientos, incluyendo RF microneedling y bioestimuladores como PLLA fabricado por Galderma, buscan apoyar la remodelación del colágeno. **La clave es entender que el cambio es gradual y que el tiempo importa.**",
    ],
    sections: [
      {
        title: "Qué hace el colágeno en la piel",
        body: [
          "**El colágeno funciona como soporte estructural en la dermis, ayudando a que la piel resista pliegues, flacidez y adelgazamiento.**",
          "Trabaja junto con elastina, ácido hialurónico, y una barrera cutánea y vascular saludable.",
          "Cuando disminuye el soporte de colágeno, suelen aparecer cambios como pérdida de estructura, líneas finas más marcadas, textura crepé y menor elasticidad.",
        ],
      },
      {
        title: "Por qué el colágeno disminuye con la edad",
        body: [
          "El cambio del colágeno depende del envejecimiento interno y también de factores ambientales.",
          "Contribuyentes comunes incluyen:",
          "• Menor actividad de fibroblastos, la piel produce colágeno con menos eficiencia",
          "• Degradación continua por inflamación y estrés oxidativo",
          "• Exposición solar acumulada, que acelera desorganización y degradación del colágeno",
          "• Cambios hormonales que pueden afectar grosor y capacidad de reparación",
          "**Por eso los planes enfocados en colágeno suelen ser de mediano a largo plazo, no de una sola cita.**",
        ],
      },
      {
        title: "Qué significa realmente reconstruir colágeno",
        body: [
          "**En medicina estética, hablar de reconstrucción suele referirse a remodelación de colágeno.**",
          "Esto incluye estimular formación de colágeno nuevo y mejorar la organización de las fibras con el tiempo.",
          "Es diferente a volumen inmediato con geles. La remodelación es más lenta, más sutil y depende de la biología y la constancia del paciente.",
        ],
      },
      {
        title: "Un tiempo realista para cambios visibles",
        body: [
          "**La remodelación de colágeno no es inmediata.** Aunque una terapia active señales rápido, el cambio estructural visible tarda.",
          "Un patrón común en muchos pacientes se ve así:",
          "Cada persona responde diferente. **Por eso evitamos prometer tiempos exactos o resultados idénticos.**",
        ],
        timeline: [
          {
            label: "0 a 2 semanas",
            text: "Los cambios tempranos suelen ser inflamación o hidratación temporal, **todavía no es colágeno maduro.**",
          },
          {
            label: "3 a 6 semanas",
            text: "**Fase de señalización temprana.** Pueden iniciar mejoras en textura y resiliencia.",
          },
          {
            label: "2 a 4 meses",
            text: "**El cambio de colágeno se vuelve más notable,** especialmente en tratamientos por serie.",
          },
          {
            label: "4 a 6 meses",
            text: "**Fase de remodelación.** Los resultados suelen verse más estables y estructurales.",
          },
          {
            label: "6 a 12 meses",
            text: "**Fase de maduración.** Puede haber mejora continua a medida que las fibras se organizan.",
          },
        ],
      },
      {
        title: "Por qué la mayoría de planes son en serie",
        body: [
          "**Los tratamientos orientados a colágeno suelen funcionar mejor en serie porque el estímulo es acumulativo.**",
          "Cada sesión apoya remodelación continua, y el espaciamiento permite respuesta y recuperación de la piel.",
          "Esto es común en protocolos de RF microneedling y también en bioestimulación diseñada para construir gradualmente.",
        ],
      },
      {
        title: "Qué influye en tu respuesta",
        body: [
          "La respuesta no depende solo del dispositivo o del inyectable.",
          "Factores clave incluyen:",
          "• Edad y calidad basal del colágeno",
          "• Historia de sol y protección diaria actual",
          "• Fumar o vapear, que afecta reparación",
          "• Inflamación activa, como acné o dermatitis",
          "• Nutrición, sueño y salud metabólica general",
          "• Constancia en cuidados posteriores y tiempos entre sesiones",
          "**Por eso la evaluación y la planificación importan, y dos pacientes pueden responder distinto a tratamientos similares.**",
        ],
      },
      {
        title: "Cómo encajan RF microneedling y bioestimuladores en una estrategia",
        body: [
          "El RF microneedling puede apoyar remodelación de colágeno al entregar energía controlada a profundidades específicas, mejorando textura, poros y firmeza cuando está indicado.",
          "Los bioestimuladores pueden apoyar mejora estructural a largo plazo al estimular formación gradual de colágeno.",
          "En algunos casos se combinan enfoques, pero **siempre debe individualizarse según tipo de piel, perfil de riesgo y objetivos.**",
        ],
      },
      {
        title: "Seguridad y expectativas, lo que no pueden hacer",
        body: [
          "**Los tratamientos de colágeno pueden mejorar calidad y soporte, pero no detienen el tiempo.**",
          "Tampoco reemplazan:",
          "• Protección solar y cuidado de barrera",
          "• Capacidad de reparación saludable",
          "• Planificación realista",
          "**Un plan conservador que proteja la salud cutánea suele dar mejores resultados que tratamientos agresivos o apresurados.**",
        ],
      },
    ],
    nextTitle: "Explora educación relacionada",
    nextCopy:
      "Si llegaste aquí por RF microneedling o tratamiento con bioestimulador de colágeno PLLA, te recomendamos leer esas páginas y después agendar una evaluación para construir un plan alineado a tu piel y objetivos. **La planificación por etapas suele ser más segura y realista.**",
    nextLinks: [
      { label: "Conocer RF microneedling", href: "/learn/sylfirm-x-rf-microneedling" },
      { label: "Conocer bioestimulador de colágeno PLLA", href: "/learn/plla-collagen-biostimulator" },
    ],
    serviceLinksTitle: "Servicios relacionados",
    serviceLinks: [
      {
        label: "Microneedling con RF (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
      {
        label: "Bioestimulador de Colágeno (PLLA)",
        href: "/treatments/collagen-biostimulator-plla",
      },
    ],
    closingTitle: "Nota sobre planificación",
    closingCopy: [
      "**El colágeno es un proceso a largo plazo.**",
      "Los mejores resultados suelen venir de un plan estructurado, tiempos consistentes, y protección de la piel entre sesiones.",
      "**Nuestro enfoque prioriza criterio médico, planificación conservadora y resultados naturales con el tiempo.**",
    ],
  },
};

const slug = "/learn/collagen-loss-and-rebuilding-timeline";
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

export default function CollagenTimelineEducationPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/collagen.jpg`;

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
        about: { "@id": `${canonicalUrl}#topic` },
      },
      {
        "@type": "Thing",
        "@id": `${canonicalUrl}#topic`,
        name: "Collagen in skin, aging, and remodeling timelines",
        description:
          "Educational overview of how collagen changes with age, what that looks like in skin structure, and why collagen focused treatments require gradual timelines and series based planning.",
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
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-black">{copy.nextTitle}</h3>
            <p className="text-sm text-gray-700">
              <BoldText text={copy.nextCopy} />
            </p>

            <div className="flex flex-col gap-2">
              {(copy.nextLinks || []).map((link) => (
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
