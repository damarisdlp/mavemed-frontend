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

const slug = "/learn/revolax-cross-linked-hyaluronic-acid-fillers";
const BASE_URL = "https://www.mavemedspa.com";

const content = {
  en: {
    title: "Revolax Cross-Linked Hyaluronic Acid Fillers",
    subtitle:
      "Educational guide to Revolax Deep and Revolax Sub-Q for structural support and contour planning",
    intro: [
      "Revolax is a cross-linked hyaluronic acid filler line used in treatment plans that need projection, contour support, or deeper tissue integration.",
      "The most important variable is not only product density, but matching that density to the right tissue plane and treatment zone.",
    ],
    trustPoints: [
      "Cross-linked HA structure is selected for shape retention and support over time.",
      "Different density profiles allow staged planning from moderate correction to stronger projection.",
      "Predictability and durability improve with conservative dosing and follow-up refinement.",
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
        product: "Revolax Deep",
        density: "Medium to high",
        zones: "Lips with structure, nasolabial folds, marionette lines, chin and contour refinement",
        durability: "~12–18 months",
      },
      {
        product: "Revolax Sub-Q",
        density: "High to very high",
        zones: "Cheek projection, jawline definition, chin support, and deeper contour correction",
        durability: "~12–18+ months",
      },
    ],
    notes: [
      "Durability ranges are planning estimates and may vary between patients.",
      "Higher-density fillers are not always better; correct selection depends on facial anatomy and movement.",
    ],
    relatedTitle: "Related treatment pages",
    relatedLinks: [
      { label: "Lip Fillers", href: "/treatments/hyaluronic-acid-lip-fillers" },
      { label: "Facial Balancing with Dermal Fillers", href: "/treatments/facial-balancing-fillers" },
    ],
  },
  es: {
    title: "Rellenos Revolax de Ácido Hialurónico Reticulado",
    subtitle:
      "Guía educativa de Revolax Deep y Revolax Sub-Q para soporte estructural y planificación de contorno",
    intro: [
      "Revolax es una línea de rellenos de ácido hialurónico reticulado utilizada cuando el plan requiere proyección, soporte de contorno o integración en planos más profundos.",
      "La variable más importante no es solo la densidad del producto, sino ajustar esa densidad al plano y zona correctos.",
    ],
    trustPoints: [
      "La estructura de AH reticulado se selecciona por retención de forma y soporte en el tiempo.",
      "Perfiles de densidad distintos permiten planificación por etapas, desde corrección moderada hasta proyección marcada.",
      "La predictibilidad y duración mejoran con dosificación conservadora y ajustes en seguimiento.",
    ],
    tableTitle: "Tabla comparativa de productos",
    tableHeaders: {
      product: "Producto",
      density: "Densidad del relleno",
      zones: "Zonas recomendadas",
      durability: "Duración típica",
    },
    rows: [
      {
        product: "Revolax Deep",
        density: "Media a alta",
        zones: "Labios con estructura, surcos nasogenianos, líneas de marioneta, mentón y refinamiento de contorno",
        durability: "~12–18 meses",
      },
      {
        product: "Revolax Sub-Q",
        density: "Alta a muy alta",
        zones: "Proyección de mejillas, definición mandibular, soporte de mentón y corrección de contorno profundo",
        durability: "~12–18+ meses",
      },
    ],
    notes: [
      "Los rangos de duración son estimaciones y pueden variar entre pacientes.",
      "Un relleno de mayor densidad no siempre es mejor; la selección correcta depende de anatomía y dinámica facial.",
    ],
    relatedTitle: "Tratamientos relacionados",
    relatedLinks: [
      { label: "Rellenos de Labios", href: "/treatments/hyaluronic-acid-lip-fillers" },
      { label: "Equilibrio Facial con Rellenos", href: "/treatments/facial-balancing-fillers" },
    ],
  },
};

export default function RevolaxLearnPage() {
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
