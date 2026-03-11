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

const slug = "/learn/allergan-aesthetics-hyaluronic-acid-fillers";
const BASE_URL = "https://www.mavemedspa.com";

const content = {
  en: {
    title: "Allergan Aesthetics Hyaluronic Acid Fillers",
    subtitle:
      "Educational overview of the products commonly used for lips, structure, hydration, and facial harmonization",
    intro: [
      "This guide explains why many providers choose Allergan Aesthetics hyaluronic acid lines when treatment goals range from subtle lip refinement to deep structural contouring.",
      "Product choice is always based on anatomy, tissue quality, and treatment goals rather than one universal filler for every area.",
    ],
    trustPoints: [
      "Global manufacturer with long-term clinical use and consistent quality controls.",
      "Multiple rheology profiles, allowing more precise matching between filler behavior and treatment zone.",
      "Predictable integration and durability ranges when injected with anatomy-based technique.",
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
        product: "Juvéderm Volift",
        density: "Medium",
        zones: "Lips with structure, nasolabial folds, marionette lines, selected midface blending",
        durability: "~12–18 months",
      },
      {
        product: "Juvéderm Voluma",
        density: "High",
        zones: "Cheeks, chin, and areas requiring deeper projection/support",
        durability: "~18–24 months",
      },
      {
        product: "Juvéderm Volbella",
        density: "Low",
        zones: "Lip hydration/definition and fine perioral refinement",
        durability: "~9–12 months",
      },
      {
        product: "Skinvive",
        density: "Very low (microdroplet HA)",
        zones: "Cheeks for smoothness, hydration, and glow support",
        durability: "~6 months",
      },
      {
        product: "HarmonyCa",
        density: "Hybrid structural profile",
        zones: "Cheeks, jawline, and lower-face support zones",
        durability: "~12–18 months",
      },
    ],
    notes: [
      "Durability depends on metabolism, injection plane, movement patterns, and total volume used.",
      "Clinical reliability improves when product selection, layering, and aftercare are planned conservatively.",
    ],
    relatedTitle: "Related treatment pages",
    relatedLinks: [
      { label: "Lip Fillers", href: "/treatments/hyaluronic-acid-lip-fillers" },
      { label: "Facial Balancing with Dermal Fillers", href: "/treatments/facial-balancing-fillers" },
      { label: "Mesotherapy Skin Boosters", href: "/treatments/mesotherapy-infusions" },
    ],
  },
  es: {
    title: "Rellenos de Ácido Hialurónico de Allergan Aesthetics",
    subtitle:
      "Guía educativa de productos usados para labios, estructura, hidratación y armonización facial",
    intro: [
      "Esta guía explica por qué muchos proveedores utilizan líneas de Allergan Aesthetics cuando el objetivo va desde refinamiento labial sutil hasta contorno estructural profundo.",
      "La elección del producto siempre depende de anatomía, calidad de tejido y objetivo clínico, no de un solo relleno para todas las zonas.",
    ],
    trustPoints: [
      "Fabricante con uso clínico global prolongado y controles de calidad consistentes.",
      "Perfiles reológicos múltiples para ajustar mejor el comportamiento del relleno según la zona.",
      "Integración y rangos de duración predecibles cuando se aplica con técnica anatómica.",
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
        product: "Juvéderm Volift",
        density: "Media",
        zones: "Labios con estructura, surcos nasogenianos, líneas de marioneta, integración selectiva en tercio medio",
        durability: "~12–18 meses",
      },
      {
        product: "Juvéderm Voluma",
        density: "Alta",
        zones: "Mejillas, mentón y zonas que requieren proyección/soporte profundo",
        durability: "~18–24 meses",
      },
      {
        product: "Juvéderm Volbella",
        density: "Baja",
        zones: "Hidratación/definición labial y refinamiento peribucal fino",
        durability: "~9–12 meses",
      },
      {
        product: "Skinvive",
        density: "Muy baja (microgotas de AH)",
        zones: "Mejillas para mejorar suavidad, hidratación y luminosidad",
        durability: "~6 meses",
      },
      {
        product: "HarmonyCa",
        density: "Perfil híbrido estructural",
        zones: "Mejillas, línea mandibular y zonas de soporte del tercio inferior",
        durability: "~12–18 meses",
      },
    ],
    notes: [
      "La duración depende de metabolismo, plano de inyección, patrones de movimiento y volumen total aplicado.",
      "La confiabilidad clínica mejora con selección conservadora de producto, capas y aftercare.",
    ],
    relatedTitle: "Tratamientos relacionados",
    relatedLinks: [
      { label: "Rellenos de Labios", href: "/treatments/hyaluronic-acid-lip-fillers" },
      { label: "Equilibrio Facial con Rellenos", href: "/treatments/facial-balancing-fillers" },
      { label: "Mesoterapia Skin Boosters", href: "/treatments/mesotherapy-infusions" },
    ],
  },
};

export default function AllerganAestheticsLearnPage() {
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
