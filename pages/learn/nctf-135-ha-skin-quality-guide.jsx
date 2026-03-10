import Head from "next/head";
import NextLink from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LearnCategoryBreadcrumb from "@/components/learn/LearnCategoryBreadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const content = {
  en: {
    title: "NCTF 135 HA and Skin Quality",
    subtitle:
      "Evidence-based guide to this Fillmed Laboratories polyrevitalizing protocol for hydration, radiance, and superficial skin quality support",
    intro: [
      "**NCTF 135 HA is not a structural contour filler.**",
      "It is an intradermal skin quality protocol used for aesthetic revitalization and hydration, with support for superficial wrinkles, homogeneity, and radiance.",
    ],
    treatmentCardTitle: "Related treatment",
    treatmentCardCopy:
      "If you are considering this protocol at Mave, our French Bio-Revitalization Therapy page explains pricing, treatment flow, candidacy, and aftercare.",
    treatmentCardLink: "View French Bio-Revitalization Therapy",
    videoCardTitle: "Video explainer",
    videoCardCopy:
      "If you want a short visual overview of this protocol and treatment style, this Instagram post gives a concise explanation.",
    videoCardLink: "Watch the Instagram post",
    sections: [
      {
        title: "What NCTF 135 HA is",
        body: [
          "NCTF 135 HA is a Fillmed Laboratories injectable skin quality complex manufactured in France.",
          "It combines **non-crosslinked hyaluronic acid (5 mg/ml)** with a **polyrevitalizing solution (9 mg/ml)** and is intended for aesthetic skin quality support, not medical disease treatment.",
          "**The treatment target is skin quality improvement rather than contour projection.**",
        ],
        bullets: [
          "12 vitamins, 24 amino acids, 6 minerals, 6 coenzymes, and 5 nucleosides",
          "Designed for intradermal injection by trained healthcare professionals",
          "Used for hydration, radiance, elasticity support, and superficial wrinkle refinement",
        ],
      },
      {
        title: "Where it is used and who should avoid it",
        body: [
          "From the manufacturer indication profile, NCTF 135 HA is used intradermally in the face (including periorbital area), neck, and decollete.",
          "Contraindications and exclusion points are critical to discuss before treatment.",
          "**Selection and safety screening matter as much as product choice.**",
        ],
        bullets: [
          "Do not use in patients under 18",
          "Do not use during pregnancy or breastfeeding",
          "Avoid if there is active skin disease in the treatment area",
          "Avoid with known constituent hypersensitivity/allergy",
          "Avoid in autoimmune history or current immunotherapy",
        ],
      },
      {
        title: "Clinical performance snapshot",
        body: [
          "Across post-market clinical follow-up studies, performance endpoints repeatedly showed improvements in wrinkles, radiance, hydration, and skin quality metrics.",
          "In controlled investigations, wrinkle effects were detected as early as **7 days after the third injection** and remained observable through **Day 120** in studied protocols.",
          "**The clinical pattern is progressive and cumulative, not an instant one-session transformation.**",
        ],
        bullets: [
          "Hydration and radiance improvements reported with persistence up to around 4 months in study timelines",
          "Improved skin density and elasticity endpoints in instrumental and clinical assessments",
          "Reduced superficial wrinkle and pore-related scores in standardized evaluations",
          "High patient and investigator satisfaction signal in GAIS-style evaluations",
        ],
      },
      {
        title: "Safety profile and expected reactions",
        body: [
          "Expected post-injection effects are usually local and temporary: redness, mild edema, small bruising, pinpoint bleeding, and short-lived tenderness.",
          "As with any transcutaneous injection, infection risk exists and sterile technique is essential.",
          "**Post-market incidence rates in the SSCP are very low, with serious treatment-related events reported as rare.**",
        ],
        bullets: [
          "Swelling/Erythema: ~0.002%",
          "Nodule/itching/pain/skin inflammation/burning/rash: ~0.0005%",
          "Hypersensitivity or allergic reaction: ~0.0001%",
          "Other listed events (granuloma, angioedema, dyspnea, etc.): <0.0001%",
        ],
      },
      {
        title: "How we use this evidence in planning",
        body: [
          "At Mave, we frame NCTF 135 HA as a skin quality track: hydration, glow, and superficial texture support without structural overfilling goals.",
          "Planning typically uses a staged protocol, realistic spacing, and follow-up based on skin response and patient priorities.",
          "Aftercare matters: avoid makeup for 12 hours and avoid prolonged sun/UV, extreme cold, sauna, or steam for at least 48 hours.",
        ],
        bullets: [
          "Medical candidacy screening first",
          "Series-based planning with reassessment",
          "Structured aftercare to reduce avoidable irritation",
        ],
        featureEmbed: {
          label: "Mave protocol walkthrough",
          copy:
            "This Mave post shows how we explain NCTF 135 HA in real patient education, focusing on skin quality outcomes and protocol consistency.",
          linkLabel: "Open Mave's Instagram post",
        },
      },
      {
        title: "Why product source and technique both matter",
        body: [
          "In skin quality injectables, product authenticity and clinical evidence are important, but provider technique and patient selection drive real-world outcomes.",
          "Injection depth, pattern, spacing, and aftercare adherence can materially change result quality and comfort.",
          "**The best outcomes come from the right protocol for the right patient at the right time.**",
        ],
        links: [
          {
            label: "View French Bio-Revitalization Therapy",
            href: "/treatments/bio-revitalization-french-glow",
          },
          {
            label: "Read our collagen timeline guide",
            href: "/learn/collagen-loss-and-rebuilding-timeline",
          },
        ],
      },
    ],
  },
  es: {
    title: "NCTF 135 HA y calidad de piel",
    subtitle:
      "Guia basada en evidencia sobre este protocolo polirrevitalizante de Fillmed Laboratories para hidratacion, luminosidad y soporte de calidad cutanea superficial",
    intro: [
      "**NCTF 135 HA no es un filler estructural de contorno.**",
      "Es un protocolo intradermico de calidad de piel usado con fines esteticos para revitalizacion e hidratacion, con apoyo sobre lineas superficiales, homogeneidad y luminosidad.",
    ],
    treatmentCardTitle: "Tratamiento relacionado",
    treatmentCardCopy:
      "Si estas considerando este protocolo en Mave, nuestra pagina de Terapia de Bio-Revitalizacion Francesa explica precios, flujo del tratamiento, candidatura y cuidados posteriores.",
    treatmentCardLink: "Ver Terapia de Bio-Revitalizacion Francesa",
    videoCardTitle: "Video explicativo",
    videoCardCopy:
      "Si quieres una explicacion visual corta de este protocolo y estilo de tratamiento, esta publicacion de Instagram ofrece un resumen claro.",
    videoCardLink: "Ver la publicacion de Instagram",
    sections: [
      {
        title: "Que es NCTF 135 HA",
        body: [
          "NCTF 135 HA es un complejo inyectable de calidad de piel de Fillmed Laboratories, fabricado en Francia.",
          "Combina **acido hialuronico no reticulado (5 mg/ml)** con una **solucion polirrevitalizante (9 mg/ml)** y esta pensado para soporte estetico de calidad cutanea, no para tratar enfermedad.",
          "**El objetivo principal es mejorar calidad de piel, no proyeccion de contorno.**",
        ],
        bullets: [
          "12 vitaminas, 24 aminoacidos, 6 minerales, 6 coenzimas y 5 nucleosidos",
          "Disenado para inyeccion intradermica por personal de salud capacitado",
          "Se usa para hidratacion, luminosidad, soporte de elasticidad y lineas superficiales",
        ],
      },
      {
        title: "Donde se usa y quien debe evitarlo",
        body: [
          "Segun el perfil de indicaciones del fabricante, NCTF 135 HA se utiliza por via intradermica en rostro (incluyendo periorbital), cuello y escote.",
          "Las contraindicaciones y puntos de exclusion son clave antes de iniciar.",
          "**La seleccion de paciente y seguridad importan tanto como el producto.**",
        ],
        bullets: [
          "No usar en menores de 18 anos",
          "No usar durante embarazo o lactancia",
          "Evitar con enfermedad activa de piel en la zona",
          "Evitar con alergia o hipersensibilidad conocida a componentes",
          "Evitar con antecedente autoinmune o inmunoterapia activa",
        ],
      },
      {
        title: "Resumen de desempeno clinico",
        body: [
          "En estudios clinicos y seguimiento post-mercado, los endpoints de desempeno mostraron mejoras repetidas en arrugas, luminosidad, hidratacion y metricas de calidad de piel.",
          "En investigaciones controladas, el efecto sobre arrugas se detecto desde **7 dias despues de la tercera inyeccion** y se mantuvo observable hasta **Dia 120** en protocolos estudiados.",
          "**El patron clinico es progresivo y acumulativo, no una transformacion instantanea en una sola sesion.**",
        ],
        bullets: [
          "Mejoras de hidratacion y luminosidad con persistencia de hasta alrededor de 4 meses en lineas de tiempo de estudio",
          "Mejora de densidad y elasticidad en evaluaciones instrumentales y clinicas",
          "Reduccion de puntajes de lineas superficiales y poros en evaluaciones estandarizadas",
          "Buena senal de satisfaccion de pacientes e investigadores en evaluaciones tipo GAIS",
        ],
      },
      {
        title: "Perfil de seguridad y reacciones esperadas",
        body: [
          "Los efectos esperados suelen ser locales y temporales: enrojecimiento, edema leve, pequenos moretones, sangrado puntual y sensibilidad breve.",
          "Como en cualquier inyeccion transcutanea, existe riesgo de infeccion y la tecnica esteril es esencial.",
          "**Las tasas post-mercado en el SSCP son muy bajas y los eventos serios relacionados al tratamiento se reportan como raros.**",
        ],
        bullets: [
          "Inflamacion/eritema: ~0.002%",
          "Nodulo/picazon/dolor/inflamacion cutanea/ardor/rash: ~0.0005%",
          "Hipersensibilidad o reaccion alergica: ~0.0001%",
          "Otros eventos listados (granuloma, angioedema, disnea, etc.): <0.0001%",
        ],
      },
      {
        title: "Como usamos esta evidencia en la planificacion",
        body: [
          "En Mave, planteamos NCTF 135 HA como una via de calidad de piel: hidratacion, glow y textura superficial sin objetivos de sobre-relleno estructural.",
          "La planificacion suele usar protocolo por etapas, espaciamiento realista y seguimiento segun respuesta cutanea y prioridades de la paciente.",
          "El cuidado posterior importa: evitar maquillaje por 12 horas y evitar exposicion prolongada a sol/UV, frio extremo, sauna o vapor por al menos 48 horas.",
        ],
        bullets: [
          "Tamizaje medico de candidatura primero",
          "Plan en serie con reevaluacion",
          "Aftercare estructurado para reducir irritacion evitable",
        ],
        featureEmbed: {
          label: "Recorrido del protocolo en Mave",
          copy:
            "Esta publicacion de Mave muestra como explicamos NCTF 135 HA en educacion real para pacientes, con enfoque en calidad de piel y constancia del protocolo.",
          linkLabel: "Abrir la publicacion de Instagram de Mave",
        },
      },
      {
        title: "Por que importan el origen y la tecnica",
        body: [
          "En inyectables de calidad de piel, autenticidad del producto y evidencia clinica son importantes, pero tecnica del proveedor y seleccion de paciente definen el resultado real.",
          "Profundidad, patron de inyeccion, espaciamiento y cumplimiento del aftercare pueden cambiar de forma material la calidad del resultado y la comodidad.",
          "**Los mejores resultados salen del protocolo correcto para la paciente correcta en el momento correcto.**",
        ],
        links: [
          {
            label: "Ver Terapia de Bio-Revitalizacion Francesa",
            href: "/treatments/bio-revitalization-french-glow",
          },
          {
            label: "Leer nuestra guia de linea de tiempo del colageno",
            href: "/learn/collagen-loss-and-rebuilding-timeline",
          },
        ],
      },
    ],
  },
};

const slug = "/learn/nctf-135-ha-skin-quality-guide";
const BASE_URL = "https://www.mavemedspa.com";
const FRENCH_BIO_TREATMENT_SLUG = "/treatments/bio-revitalization-french-glow";
const INSTAGRAM_VIDEO_LINK = "https://www.instagram.com/p/DVJfazgEfeH/";
const INSTAGRAM_EMBED_LINK = "https://www.instagram.com/p/DVJfazgEfeH/embed/captioned/";
const MAVE_INSTAGRAM_VIDEO_LINK = "https://www.instagram.com/p/DVUQeAMEj6t/";
const MAVE_INSTAGRAM_EMBED_LINK = "https://www.instagram.com/p/DVUQeAMEj6t/embed/captioned/";

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

export default function NctfSkinQualityGuidePage() {
  const { locale = "en" } = useRouter();
  const { t } = useTranslation("learn");
  const copy = useMemo(() => content[locale] || content.en, [locale]);

  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/nctf.jpg`;

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
      </Head>

      <PromoBanner />
      <Header />

      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-left max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Learn</p>
            <LearnCategoryBreadcrumb
              locale={locale}
              categoryLabel={
                locale === "es"
                  ? "Calidad de piel y bioestimulacion"
                  : "Skin Quality & Biostimulation"
              }
              categoryAnchor="skin-quality-biostimulation"
            />
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">{copy.title}</h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed max-w-3xl">
            {copy.intro.map((line) => (
              <p key={line}>
                <BoldText text={line} />
              </p>
            ))}
          </div>

          <div className="mt-8 max-w-3xl space-y-4">

            <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {copy.treatmentCardTitle}
              </p>
              <p className="text-sm text-gray-700">{copy.treatmentCardCopy}</p>
              <NextLink
                href={FRENCH_BIO_TREATMENT_SLUG}
                locale={locale}
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.treatmentCardLink}
              </NextLink>
            </div>

            <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {copy.videoCardTitle}
              </p>
              <p className="text-sm text-gray-700">{copy.videoCardCopy}</p>
              <div className="pt-2">
                <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <iframe
                    src={INSTAGRAM_EMBED_LINK}
                    title={copy.videoCardTitle}
                    className="block h-[760px] w-full"
                    loading="lazy"
                  />
                </div>
              </div>
              <a
                href={INSTAGRAM_VIDEO_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.videoCardLink}
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-10">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-4 max-w-3xl">
              <h2 className="text-xl font-serif text-black">{section.title}</h2>

              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                {(section.body || []).map((line) => (
                  <p key={line}>
                    <BoldText text={line} />
                  </p>
                ))}
              </div>

              {section.bullets?.length ? (
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {section.bullets.map((item) => (
                    <li key={item}>
                      <BoldText text={item} />
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.featureEmbed ? (
                <div className="mt-4 border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    {section.featureEmbed.label}
                  </p>
                  <p className="text-sm text-gray-700">{section.featureEmbed.copy}</p>
                  <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <iframe
                      src={MAVE_INSTAGRAM_EMBED_LINK}
                      title={section.featureEmbed.label}
                      className="block h-[760px] w-full"
                      loading="lazy"
                    />
                  </div>
                  <a
                    href={MAVE_INSTAGRAM_VIDEO_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                  >
                    {section.featureEmbed.linkLabel}
                  </a>
                </div>
              ) : null}

              {section.links?.length ? (
                <div className="mt-4 border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-3">
                  <p className="text-sm font-semibold text-black">{t("relatedEducation")}</p>
                  <div className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <NextLink
                        key={link.href}
                        href={link.href}
                        locale={locale}
                        className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                      >
                        {link.label}
                      </NextLink>
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
