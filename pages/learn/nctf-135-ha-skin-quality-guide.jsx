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
      "An educational guide to how this Fillmed Laboratories polyrevitalizing complex is used to support hydration, glow, and smoother-looking skin quality",
    intro: [
      "**NCTF 135 HA is not designed to behave like a structural filler.**",
      "It is a polyrevitalizing skin quality protocol that combines hyaluronic acid with a broad mix of vitamins, amino acids, minerals, and co-factors to support hydration and overall skin quality.",
      "At Mave, we use this approach inside our French Bio-Revitalization Therapy when the goal is healthier-looking texture, more glow, and improved hydration rather than added facial volume.",
    ],
    treatmentCardTitle: "Related treatment",
    treatmentCardCopy:
      "If you are reading this because you are considering this protocol at Mave, our French Bio-Revitalization Therapy page explains pricing, treatment flow, and candidacy.",
    treatmentCardLink: "View French Bio-Revitalization Therapy",
    videoCardTitle: "Video explainer",
    videoCardCopy:
      "If you want to see a quick visual explanation of this skin quality protocol, this Instagram post gives a concise overview.",
    videoCardLink: "Watch the Instagram post",
    sections: [
      {
        title: "What NCTF 135 HA is",
        body: [
          "NCTF 135 HA is a skin quality-focused injectable complex manufactured by **Fillmed Laboratories** in France.",
          "It is commonly described as a polyrevitalizing or mesotherapy-style solution because it is built to support the skin environment rather than to sculpt facial structure.",
          "**The practical goal is better skin quality, not immediate contour change.**",
        ],
        bullets: [
          "Includes non-crosslinked hyaluronic acid",
          "Built around hydration and nutrient support",
          "Used for skin quality, not structural projection",
        ],
      },
      {
        title: "How it can support skin quality",
        body: [
          "Skin quality is not just one thing. It includes hydration, surface smoothness, radiance, elasticity, and how refined the skin looks up close.",
          "Protocols built around NCTF 135 HA are typically used when the goal is to support:",
          "• Better hydration and bounce",
          "• Smoother-looking texture",
          "• Softer appearance of very fine dehydration lines",
          "• A brighter, fresher-looking finish",
          "**This is why many patients associate it with a glass-skin look rather than with a filler look.**",
        ],
      },
      {
        title: "What it does differently from filler",
        body: [
          "Traditional hyaluronic acid fillers are designed to create structure, projection, or shape in specific anatomical areas.",
          "NCTF 135 HA is different because it is used as a skin quality protocol with a lighter, more diffuse objective.",
          "**It is not meant to replace cheek filler, chin filler, jawline filler, or lip filler.**",
          "That distinction matters because patients who want glow and hydration often need a very different plan than patients who want contour or volume restoration.",
        ],
        bullets: [
          "Not a contouring filler",
          "Not a structural replacement for volume loss",
          "Best understood as a skin quality support treatment",
        ],
      },
      {
        title: "Who may consider this type of protocol",
        body: [
          "This style of treatment is often considered by patients who feel their skin looks dull, dehydrated, tired, or less resilient even when facial structure is still good.",
          "It may also be useful for patients who want a conservative injectable plan that focuses on skin quality first.",
          "**It is often a better fit for hydration and radiance goals than for dramatic shape change.**",
        ],
        bullets: [
          "Dehydrated or dull-looking skin",
          "Early texture changes or roughness",
          "Patients wanting a conservative glow-focused injectable option",
          "Patients prioritizing skin quality over contouring",
        ],
      },
      {
        title: "How treatment is usually planned",
        body: [
          "Most skin quality protocols work better as a series than as a one-time appointment because hydration support and visible refinement are cumulative.",
          "A common starting framework is multiple sessions spaced a few weeks apart, then maintenance based on response, age, environment, and skin goals.",
          "**Consistency and realistic spacing usually matter more than trying to force a dramatic result in one visit.**",
        ],
        bullets: [
          "Series-based planning is common",
          "Spacing allows the skin to respond between sessions",
          "Maintenance may be useful depending on the patient",
        ],
        featureEmbed: {
          label: "Mave protocol walkthrough",
          copy:
            "This Mave post is useful here because it breaks down how NCTF 135 HA combines hyaluronic acid with 59 revitalizing actives to support fibroblast activity, improve skin quality, and build a more hydrated, luminous result over time.",
          linkLabel: "Open Mave's Instagram post",
        },
      },
      {
        title: "Why source, technique, and medical planning matter",
        body: [
          "With skin quality injectables, the product source is only one part of the outcome.",
          "Provider technique, injection pattern, depth, patient selection, aftercare, and whether the treatment is paired with other modalities all affect the result.",
          "**The best results usually come from a plan that matches the patient, not from chasing a product name alone.**",
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
      "Una guia educativa sobre como este complejo polirrevitalizante de Fillmed Laboratories se utiliza para apoyar hidratacion, glow y una piel visualmente mas uniforme",
    intro: [
      "**NCTF 135 HA no esta disenado para comportarse como un relleno estructural.**",
      "Es un protocolo inyectable enfocado en calidad de piel que combina acido hialuronico con una mezcla amplia de vitaminas, aminoacidos, minerales y cofactores para apoyar hidratacion y calidad cutanea global.",
      "En Mave, utilizamos este enfoque dentro de nuestra Terapia de Bio-Revitalizacion Francesa cuando el objetivo es una mejor textura, mas luminosidad y mejor hidratacion, no agregar volumen facial.",
    ],
    treatmentCardTitle: "Tratamiento relacionado",
    treatmentCardCopy:
      "Si llegaste aqui porque estas considerando este protocolo en Mave, nuestra pagina de Terapia de Bio-Revitalizacion Francesa explica precios, flujo del tratamiento y candidatura.",
    treatmentCardLink: "Ver Terapia de Bio-Revitalizacion Francesa",
    videoCardTitle: "Video explicativo",
    videoCardCopy:
      "Si quieres ver una explicacion visual breve de este protocolo de calidad de piel, esta publicacion de Instagram ofrece un resumen claro.",
    videoCardLink: "Ver la publicacion de Instagram",
    sections: [
      {
        title: "Que es NCTF 135 HA",
        body: [
          "NCTF 135 HA es un complejo inyectable enfocado en calidad de piel fabricado por **Fillmed Laboratories** en Francia.",
          "Suele describirse como una solucion polirrevitalizante o de estilo mesoterapia porque esta pensada para apoyar el entorno cutaneo, no para esculpir estructura facial.",
          "**En la practica, el objetivo es mejorar calidad de piel, no generar contorno inmediato.**",
        ],
        bullets: [
          "Incluye acido hialuronico no reticulado",
          "Enfocado en hidratacion y soporte de nutrientes",
          "Se usa para calidad de piel, no para proyeccion estructural",
        ],
      },
      {
        title: "Como puede apoyar la calidad de piel",
        body: [
          "La calidad de piel no es una sola cosa. Incluye hidratacion, suavidad superficial, luminosidad, elasticidad y que tan refinada se ve la piel de cerca.",
          "Los protocolos con NCTF 135 HA suelen utilizarse cuando el objetivo es apoyar:",
          "• Mejor hidratacion y rebote",
          "• Textura visualmente mas uniforme",
          "• Menor apariencia de lineas finas por deshidratacion",
          "• Un acabado mas luminoso y fresco",
          "**Por eso muchos pacientes lo asocian mas con efecto glass skin que con efecto filler.**",
        ],
      },
      {
        title: "En que se diferencia de un filler",
        body: [
          "Los rellenos tradicionales de acido hialuronico estan disenados para crear estructura, proyeccion o forma en zonas anatomicas especificas.",
          "NCTF 135 HA es diferente porque se utiliza como protocolo de calidad de piel con un objetivo mas ligero y difuso.",
          "**No esta pensado para sustituir relleno de pomulos, menton, mandibula o labios.**",
          "Esa diferencia importa porque una paciente que busca glow e hidratacion suele necesitar un plan muy distinto al de una paciente que busca contorno o reposicion de volumen.",
        ],
        bullets: [
          "No es un filler de contorno",
          "No sustituye el tratamiento de perdida de volumen",
          "Se entiende mejor como terapia de soporte para calidad de piel",
        ],
      },
      {
        title: "Quien puede considerar este tipo de protocolo",
        body: [
          "Este tipo de tratamiento suele considerarse en pacientes cuya piel se ve apagada, deshidratada, cansada o menos resiliente, incluso cuando la estructura facial aun se conserva bien.",
          "Tambien puede ser util para pacientes que desean un plan inyectable conservador enfocado primero en calidad de piel.",
          "**Suele encajar mejor en objetivos de hidratacion y luminosidad que en cambios dramaticos de forma.**",
        ],
        bullets: [
          "Piel apagada o deshidratada",
          "Cambios tempranos de textura",
          "Pacientes que quieren un inyectable conservador enfocado en glow",
          "Pacientes que priorizan calidad de piel sobre contorno",
        ],
      },
      {
        title: "Como suele planearse",
        body: [
          "La mayoria de protocolos de calidad de piel funcionan mejor en serie que en una sola cita, porque el soporte de hidratacion y el refinamiento visible son acumulativos.",
          "Un punto de partida comun es realizar varias sesiones separadas por algunas semanas y luego mantenimiento segun respuesta, edad, ambiente y objetivos.",
          "**La constancia y el espaciamiento realista suelen importar mas que intentar forzar un cambio dramatico en una sola visita.**",
        ],
        bullets: [
          "Es comun planearlo en serie",
          "El espaciamiento permite que la piel responda entre sesiones",
          "El mantenimiento puede ser util segun cada paciente",
        ],
        featureEmbed: {
          label: "Recorrido del protocolo en Mave",
          copy:
            "Esta publicacion de Mave es util aqui porque explica como NCTF 135 HA combina acido hialuronico con 59 activos revitalizantes para apoyar la actividad de los fibroblastos, mejorar la calidad de la piel y construir un resultado mas hidratado y luminoso con el tiempo.",
          linkLabel: "Abrir la publicacion de Instagram de Mave",
        },
      },
      {
        title: "Por que importan el origen, la tecnica y la planificacion medica",
        body: [
          "En los inyectables para calidad de piel, el origen del producto es solo una parte del resultado.",
          "La tecnica, el patron de aplicacion, la profundidad, la seleccion de pacientes, el aftercare y si se combina con otras modalidades tambien influyen.",
          "**Los mejores resultados suelen venir de un plan bien indicado para la paciente, no de perseguir solo un nombre de producto.**",
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
