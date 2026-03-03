import TreatmentDirectoryPage from "@/components/TreatmentDirectoryPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { buildTreatmentDirectoryCategories } from "@/lib/treatments/buildDirectory";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function TreatmentsPage({ categories = [] }) {
  const { t } = useTranslation("treatments");
  const { locale } = useRouter();
  const isSpanish = typeof locale === "string" && locale.startsWith("es");

  return (
    <TreatmentDirectoryPage
      categories={categories}
      pageTitle={
        isSpanish
          ? t("treatmentsPage.bannerTitle", {
              lng: "es",
              defaultValue: "Nuestros Tratamientos",
            })
          : t("treatmentsPage.bannerTitle", {
              lng: "en",
              defaultValue: "Our Treatments",
            })
      }
      pageSubtitle={
        isSpanish
          ? t("treatmentsPage.bannerSubtitle", {
              lng: "es",
              defaultValue:
                "Especialistas en inyectables cosméticos, rejuvenecimiento de la piel y terapias de grado médico para resultados que sí se notan.",
            })
          : t("treatmentsPage.bannerSubtitle", {
              lng: "en",
              defaultValue:
                "Specializing in cosmetic injectables, skin rejuvenation, and medical-grade therapies for results-driven beauty.",
            })
      }
      metaTitle="Advanced Aesthetic Treatments in Tijuana | Mave Medical Spa"
      metaDescription="Explore neuromodulators, dermal fillers, microneedling, CO2 lasers, and thread lifts at Mave Medical Spa — trusted by patients from Tijuana, San Diego, Los Angeles, and Southern California."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Our Treatments", href: "/treatments" },
      ]}
      schemaName="Advanced Aesthetic Treatments in Tijuana | Mave Medical Spa"
      schemaDescription="Explore neuromodulators, dermal fillers, microneedling, CO2 lasers, and thread lifts at Mave Medical Spa."
      schemaUrl="https://www.mavemedspa.com/treatments"
    />
  );
}

export async function getStaticProps({ locale }) {
  const { allTreatments } = await import("@/lib/data/allTreatments");
  const categories = buildTreatmentDirectoryCategories({
    allTreatments,
    locale: locale || "en",
  });

  return {
    props: {
      categories,
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "treatments", "home"],
        nextI18NextConfig
      )),
    },
  };
}
