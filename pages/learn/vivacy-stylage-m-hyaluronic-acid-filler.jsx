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

const slug = "/learn/vivacy-stylage-m-hyaluronic-acid-filler";
const BASE_URL = "https://www.mavemedspa.com";

const content = {
  en: {
    title: "Vivacy Hyaluronic Acid Fillers: Stylage M",
    subtitle:
      "Educational summary of the Stylage M profile for balanced lip and facial correction planning",
    intro: [
      "Stylage M is a medium-density hyaluronic acid filler from Vivacy commonly selected for natural movement with structural support.",
      "It is typically chosen when a plan needs flexibility plus definition, especially in dynamic facial zones.",
    ],
    trustPoints: [
      "Widely used in aesthetic practice with consistent handling behavior in experienced injector hands.",
      "Medium-density profile can support both subtle lip work and moderate contour correction.",
      "Useful when treatment goals prioritize balance and softness instead of rigid projection.",
    ],
    tableTitle: "Product comparison chart",
    tableHeaders: {
      product: "Product",
      density: "Filler density",
      zones: "Recommended zones",
      durability: "Typical durability",
    },
    rows: [
      {
        product: "Stylage M",
        density: "Medium",
        zones: "Lips, nasolabial folds, marionette lines, cheeks, and selected chin contouring",
        durability: "~9–12 months",
      },
    ],
    notes: [
      "Actual longevity varies by metabolism, lifestyle, and injection depth/technique.",
      "For durability and symmetry, conservative layering and follow-up review are usually more reliable than overcorrection.",
    ],
    relatedTitle: "Related treatment pages",
    relatedLinks: [
      { label: "Lip Fillers", href: "/treatments/hyaluronic-acid-lip-fillers" },
      { label: "Facial Balancing with Dermal Fillers", href: "/treatments/facial-balancing-fillers" },
    ],
  },
  es: {
    title: "Rellenos de Ácido Hialurónico Vivacy: Stylage M",
    subtitle:
      "Resumen educativo del perfil de Stylage M para planificación equilibrada de labios y corrección facial",
    intro: [
      "Stylage M es un relleno de ácido hialurónico de densidad media de Vivacy, seleccionado con frecuencia para mantener naturalidad de movimiento con soporte estructural.",
      "Suele elegirse cuando el plan requiere flexibilidad y definición, especialmente en zonas dinámicas del rostro.",
    ],
    trustPoints: [
      "Uso extendido en práctica estética con comportamiento consistente en manos médicas entrenadas.",
      "El perfil de densidad media permite tanto trabajo labial sutil como corrección moderada de contorno.",
      "Útil cuando el objetivo prioriza balance y suavidad sobre proyección rígida.",
    ],
    tableTitle: "Tabla comparativa de producto",
    tableHeaders: {
      product: "Producto",
      density: "Densidad del relleno",
      zones: "Zonas recomendadas",
      durability: "Duración típica",
    },
    rows: [
      {
        product: "Stylage M",
        density: "Media",
        zones: "Labios, surcos nasogenianos, líneas de marioneta, mejillas y contorno selectivo de mentón",
        durability: "~9–12 meses",
      },
    ],
    notes: [
      "La duración real varía por metabolismo, estilo de vida y profundidad/técnica de inyección.",
      "Para durabilidad y simetría, el enfoque conservador por capas con seguimiento suele ser más confiable que sobrecorregir.",
    ],
    relatedTitle: "Tratamientos relacionados",
    relatedLinks: [
      { label: "Rellenos de Labios", href: "/treatments/hyaluronic-acid-lip-fillers" },
      { label: "Equilibrio Facial con Rellenos", href: "/treatments/facial-balancing-fillers" },
    ],
  },
};

export default function VivacyStylageLearnPage() {
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
            categoryLabel={lang === "es" ? "Rellenos dérmicos y marcas" : "Dermal Fillers & Brands"}
            categoryAnchor="dermal-fillers-brands"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-black">{copy.title}</h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>
          <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
            {copy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="border border-gray-200 rounded-2xl p-5 bg-[#f9f9f9]">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
              {lang === "es" ? "Confiabilidad clínica" : "Clinical reliability"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              {copy.trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-serif text-black">{copy.tableTitle}</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-[#f5f5f5]">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-black">{copy.tableHeaders.product}</th>
                    <th className="px-4 py-3 font-semibold text-black">{copy.tableHeaders.density}</th>
                    <th className="px-4 py-3 font-semibold text-black">{copy.tableHeaders.zones}</th>
                    <th className="px-4 py-3 font-semibold text-black">{copy.tableHeaders.durability}</th>
                  </tr>
                </thead>
                <tbody>
                  {copy.rows.map((row) => (
                    <tr key={row.product} className="border-t border-gray-200 align-top">
                      <td className="px-4 py-3 text-black font-medium">{row.product}</td>
                      <td className="px-4 py-3 text-gray-700">{row.density}</td>
                      <td className="px-4 py-3 text-gray-700">{row.zones}</td>
                      <td className="px-4 py-3 text-gray-700">{row.durability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
            {copy.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
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
