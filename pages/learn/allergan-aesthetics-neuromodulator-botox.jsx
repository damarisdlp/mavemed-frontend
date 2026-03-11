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

const slug = "/learn/allergan-aesthetics-neuromodulator-botox";
const BASE_URL = "https://www.mavemedspa.com";

const content = {
  en: {
    title: "Botox (Allergan Aesthetics) Educational Guide",
    subtitle: "Answer-first guide to Botulinum Toxin Type A efficacy, safety, and treatment planning",
    answerFirst:
      "Botox is a Botulinum Toxin Type A injectable used to reduce dynamic wrinkles by relaxing targeted facial muscles. Typical onset begins in 3 to 7 days, peak effect appears around 10 to 14 days, and average duration is about 3 to 4 months, depending on dose, muscle strength, and metabolism.",
    sections: [
      {
        question: "What areas does Botox commonly treat?",
        answer:
          "Botox is commonly used for upper-face dynamic lines and selected lower-face muscle patterns when medically appropriate.",
        bullets: [
          "Forehead lines",
          "Glabellar frown lines (between the eyebrows)",
          "Crow’s feet",
          "Selected lower-face balancing patterns",
        ],
      },
      {
        question: "How long does Botox last, and what changes durability?",
        answer:
          "Most patients see a duration window of about 3 to 4 months, but longevity varies by individual biology and treatment strategy.",
        bullets: [
          "Muscle strength and facial movement patterns",
          "Units placed per treatment zone",
          "Metabolism and lifestyle factors",
          "Injection technique and follow-up timing",
        ],
      },
      {
        question: "How is Botox treatment usually planned?",
        answer:
          "A safe, reliable plan is anatomy-based and conservative, with follow-up assessment after full onset.",
        steps: [
          "Map dynamic muscle activity at rest and expression.",
          "Select dose and injection points by zone-specific goals.",
          "Perform treatment with precision placement.",
          "Reassess at approximately 10 to 14 days for final effect.",
        ],
      },
      {
        question: "Botox vs other Botulinum Toxin Type A options: what should patients compare?",
        answer:
          "Comparisons should focus on clinical consistency, diffusion behavior, treatment goals, and injector experience, not only brand familiarity.",
        table: {
          headers: {
            factor: "Factor",
            botox: "Botox (Allergan Aesthetics)",
            other: "Other Botulinum Toxin Type A",
          },
          rows: [
            {
              factor: "Active category",
              botox: "Botulinum Toxin Type A",
              other: "Botulinum Toxin Type A",
            },
            {
              factor: "Typical onset",
              botox: "~3 to 7 days",
              other: "Commonly ~3 to 7 days",
            },
            {
              factor: "Typical duration",
              botox: "~3 to 4 months",
              other: "Often similar range",
            },
            {
              factor: "Key determinant",
              botox: "Injector technique + anatomy",
              other: "Injector technique + anatomy",
            },
          ],
        },
      },
      {
        question: "Is Botox safe when performed correctly?",
        answer:
          "Botox is generally considered safe when administered by trained medical professionals using appropriate assessment, dosing, and sterile technique.",
        bullets: [
          "Medical screening is required before treatment.",
          "Dose selection should be individualized, not copied from generic templates.",
          "Post-treatment instructions reduce avoidable complications.",
        ],
      },
    ],
    relatedTitle: "Related treatment page",
    relatedLinks: [
      {
        label: "Neuromodulator - Botulinum Toxin Type A",
        href: "/treatments/wrinkle-reducers-neuromodulator",
      },
    ],
  },
  es: {
    title: "Guía Educativa de Botox (Allergan Aesthetics)",
    subtitle:
      "Guía de respuesta directa sobre eficacia, seguridad y planificación con Toxina Botulínica Tipo A",
    answerFirst:
      "Botox es un inyectable de Toxina Botulínica Tipo A utilizado para reducir arrugas dinámicas al relajar músculos faciales específicos. El inicio suele aparecer entre 3 y 7 días, el pico de efecto alrededor de 10 a 14 días, y la duración promedio es de 3 a 4 meses según dosis, fuerza muscular y metabolismo.",
    sections: [
      {
        question: "¿Qué zonas trata Botox con mayor frecuencia?",
        answer:
          "Botox se utiliza con mayor frecuencia en líneas dinámicas del tercio superior y en patrones selectivos del tercio inferior cuando hay indicación médica.",
        bullets: [
          "Líneas de la frente",
          "Líneas glabelares (entrecejo)",
          "Patas de gallo",
          "Patrones selectivos de balance en tercio inferior",
        ],
      },
      {
        question: "¿Cuánto dura Botox y qué factores modifican su duración?",
        answer:
          "En la mayoría de pacientes, la duración se mantiene cerca de 3 a 4 meses, aunque puede variar según factores anatómicos y metabólicos.",
        bullets: [
          "Fuerza muscular y patrón de movimiento facial",
          "Unidades aplicadas por zona",
          "Metabolismo y estilo de vida",
          "Técnica de aplicación y control en seguimiento",
        ],
      },
      {
        question: "¿Cómo se planifica normalmente un tratamiento con Botox?",
        answer:
          "Un plan seguro y confiable se basa en anatomía individual, dosificación conservadora y reevaluación tras el pico de efecto.",
        steps: [
          "Mapear la actividad muscular en reposo y expresión.",
          "Definir dosis y puntos de aplicación por objetivo zonal.",
          "Aplicar con técnica precisa.",
          "Reevaluar aproximadamente a los 10 a 14 días.",
        ],
      },
      {
        question: "Botox vs otras opciones de Toxina Botulínica Tipo A: ¿qué conviene comparar?",
        answer:
          "La comparación útil debe centrarse en consistencia clínica, patrón de difusión, objetivo de tratamiento y experiencia del aplicador, no solo en el nombre de marca.",
        table: {
          headers: {
            factor: "Factor",
            botox: "Botox (Allergan Aesthetics)",
            other: "Otras Toxinas Botulínicas Tipo A",
          },
          rows: [
            {
              factor: "Categoría activa",
              botox: "Toxina Botulínica Tipo A",
              other: "Toxina Botulínica Tipo A",
            },
            {
              factor: "Inicio típico",
              botox: "~3 a 7 días",
              other: "Comúnmente ~3 a 7 días",
            },
            {
              factor: "Duración típica",
              botox: "~3 a 4 meses",
              other: "Con frecuencia en rango similar",
            },
            {
              factor: "Determinante clave",
              botox: "Técnica médica + anatomía",
              other: "Técnica médica + anatomía",
            },
          ],
        },
      },
      {
        question: "¿Es seguro Botox cuando se aplica correctamente?",
        answer:
          "Botox se considera generalmente seguro cuando se aplica por profesionales médicos capacitados con valoración adecuada, técnica estéril y dosificación individualizada.",
        bullets: [
          "Se requiere evaluación médica previa.",
          "La dosificación debe personalizarse por anatomía y objetivo.",
          "Las indicaciones posteriores disminuyen efectos evitables.",
        ],
      },
    ],
    relatedTitle: "Tratamiento relacionado",
    relatedLinks: [
      {
        label: "Neuromodulador - Toxina Botulínica Tipo A",
        href: "/treatments/wrinkle-reducers-neuromodulator",
      },
    ],
  },
};

function BotoxTimelineDiagram({ lang = "en" }) {
  const copy =
    lang === "es"
      ? {
          title: "Línea de tiempo visual de Botox",
          steps: [
            {
              phase: "Aplicación",
              time: "Día 0",
              detail: "Se aplican unidades por zona según mapeo muscular.",
            },
            {
              phase: "Inicio típico",
              time: "Días 3-7",
              detail: "Comienza a notarse la relajación de líneas dinámicas.",
            },
            {
              phase: "Pico de efecto",
              time: "Días 10-14",
              detail: "Se observa el resultado completo para reevaluación.",
            },
            {
              phase: "Duración promedio",
              time: "Meses 3-4",
              detail: "El efecto suele mantenerse en esta ventana.",
            },
          ],
        }
      : {
          title: "Botox visual timeline",
          steps: [
            {
              phase: "Treatment day",
              time: "Day 0",
              detail: "Units are placed by zone after muscle mapping.",
            },
            {
              phase: "Typical onset",
              time: "Days 3-7",
              detail: "Early softening of dynamic lines usually begins.",
            },
            {
              phase: "Peak effect",
              time: "Days 10-14",
              detail: "Full effect is typically assessed at follow-up.",
            },
            {
              phase: "Average duration",
              time: "Months 3-4",
              detail: "Results often remain in this average window.",
            },
          ],
        };

  return (
    <div className="border border-gray-200 rounded-2xl p-4 bg-[#f9f9f9] space-y-3">
      <h3 className="text-base font-semibold text-black">{copy.title}</h3>
      <div className="grid gap-3 md:grid-cols-4">
        {copy.steps.map((step) => (
          <div key={step.phase} className="bg-white border border-gray-200 rounded-xl p-3">
            <p className="text-xs uppercase tracking-[0.12em] text-gray-500">{step.phase}</p>
            <p className="text-sm font-semibold text-black mt-1">{step.time}</p>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function AllerganNeuromodulatorLearnPage() {
  const { locale = "en" } = useRouter();
  const lang = locale.toLowerCase().startsWith("es") ? "es" : "en";
  const copy = content[lang];

  const canonical = useMemo(
    () => `${BASE_URL}${lang === "es" ? `/es${slug}` : slug}`,
    [lang]
  );

  return (
    <>
      <Head>
        <title>{copy.title} | Mave Medical Spa</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonical} />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white pt-36 md:pt-40 pb-16">
        <section className="max-w-5xl mx-auto px-6 space-y-6">
          <LearnCategoryBreadcrumb
            locale={lang}
            categoryLabel={lang === "es" ? "Neuromoduladores" : "Neuromodulators"}
            categoryAnchor="neuromodulators"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-black">{copy.title}</h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <p className="text-base text-gray-700 leading-relaxed">{copy.answerFirst}</p>

          {copy.sections.map((section, index) => (
            <section key={section.question} className="space-y-3">
              {index === 0 ? (
                <div className="space-y-4">
                  <BotoxTimelineDiagram lang={lang} />
                </div>
              ) : null}
              <h2 className="text-xl font-serif text-black">{section.question}</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">{section.answer}</p>

              {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {Array.isArray(section.steps) && section.steps.length > 0 ? (
                <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}

              {section.table ? (
                <div className="overflow-x-auto border border-gray-200 rounded-2xl">
                  <table className="min-w-full text-sm text-left">
                    <thead className="bg-[#f5f5f5]">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-black">{section.table.headers.factor}</th>
                        <th className="px-4 py-3 font-semibold text-black">{section.table.headers.botox}</th>
                        <th className="px-4 py-3 font-semibold text-black">{section.table.headers.other}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.factor} className="border-t border-gray-200 align-top">
                          <td className="px-4 py-3 text-black font-medium">{row.factor}</td>
                          <td className="px-4 py-3 text-gray-700">{row.botox}</td>
                          <td className="px-4 py-3 text-gray-700">{row.other}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}

          <div className="border border-gray-200 rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-black">{copy.relatedTitle}</h2>
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
          </div>
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
