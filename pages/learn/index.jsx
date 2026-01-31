import Head from "next/head";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const content = {
  en: {
    title: "Learn",
    subtitle: "Educational guides organized by treatment focus.",
    intro:
      "These resources explain devices, protocols, and candidacy considerations so you can make informed decisions before booking.",
    categories: [
      {
        title: "RF Microneedling",
        description: "Device selection, candidacy, and treatment planning.",
        items: [
          {
            title: "Sylfirm X RF Microneedling",
            excerpt:
              "How Sylfirm X differs, who it may be suitable for, and why medical evaluation matters.",
            href: "/learn/sylfirm-x-rf-microneedling",
          },
        ],
      },
      {
        title: "Collagen Biostimulation",
        description: "Collagen rebuilding, structural support, and long term outcomes.",
        items: [
          {
            title: "Sculptra Collagen Biostimulator",
            excerpt:
              "What Sculptra is, how it works over time, and why technique and medical planning matter.",
            href: "/learn/sculptra-collagen-biostimulator",
          },
        ],
      },
    ],
  },
  es: {
    title: "Aprende",
    subtitle: "Guías educativas organizadas por enfoque de tratamiento.",
    intro:
      "Estos recursos explican dispositivos, protocolos y criterios de candidatura para que tomes decisiones informadas antes de reservar.",
    categories: [
      {
        title: "RF Microneedling",
        description: "Selección de dispositivo, candidatura y planificación clínica.",
        items: [
          {
            title: "Sylfirm X RF Microneedling",
            excerpt:
              "Cómo se diferencia Sylfirm X, para quién puede ser adecuado y por qué la evaluación médica es clave.",
            href: "/learn/sylfirm-x-rf-microneedling",
          },
        ],
      },
      {
        title: "Bioestimulación de colágeno",
        description: "Regeneración de colágeno, soporte estructural y resultados a largo plazo.",
        items: [
          {
            title: "Sculptra Bioestimulador de Colágeno",
            excerpt:
              "Qué es Sculptra, cómo actúa con el tiempo y por qué la técnica médica importa.",
            href: "/learn/sculptra-collagen-biostimulator",
          },
        ],
      },
    ],
  },
};

export default function LearnIndexPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const visibleCategories = copy.categories.filter(
    (category) => !activeCategory || category.title === activeCategory
  );

  return (
    <>
      <Head>
        <title>{copy.title} | Mave Medical Spa</title>
        <meta name="description" content={copy.subtitle} />
      </Head>
      <PromoBanner />
      <Header />
      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-left max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Learn</p>
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">{copy.title}</h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
            <p className="text-sm text-gray-600 mt-3">{copy.intro}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5">
            <label className="text-xs uppercase tracking-[0.25em] text-gray-500">
              {locale === "es" ? "Buscar" : "Search"}
            </label>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={locale === "es" ? "Buscar temas o tratamientos" : "Search topics or treatments"}
              className="mt-2 w-full border border-gray-300 rounded px-3 py-2 text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.categories.map((category) => (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setActiveCategory(category.title)}
                  className={[
                    "text-xs uppercase tracking-[0.2em] px-3 py-2 rounded-full border transition",
                    activeCategory === category.title
                      ? "bg-[#731a2f] text-white border-[#731a2f]"
                      : "text-gray-600 border-gray-300 hover:border-black hover:text-black",
                  ].join(" ")}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16 space-y-10">
          {visibleCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <div>
                <h2 className="text-xl font-serif text-black">{category.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {category.items
                  .filter((item) => {
                    if (!normalizedQuery) return true;
                    const haystack = `${item.title} ${item.excerpt} ${category.title}`.toLowerCase();
                    return haystack.includes(normalizedQuery);
                  })
                  .map((item) => (
                  <a
                    key={item.title}
                    href={`/${locale === "es" ? "es/" : ""}${item.href.replace(/^\//, "")}`}
                    className="border border-gray-200 rounded-2xl p-5 bg-white hover:shadow-sm transition"
                  >
                    <p className="text-base font-semibold text-black">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-2">{item.excerpt}</p>
                    <span className="text-sm text-[#731a2f] underline underline-offset-4 inline-block mt-3">
                      {locale === "es" ? "Leer más" : "Read more"}
                    </span>
                  </a>
                  ))}
              </div>
            </div>
          ))}
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
        ["layout", "home", "treatments"],
        nextI18NextConfig
      )),
    },
  };
}
