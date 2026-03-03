import TreatmentDirectoryPage from "@/components/TreatmentDirectoryPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import { buildTreatmentDirectoryCategories } from "@/lib/treatments/buildDirectory";
import {
  getSkinGoalDefinition,
  getLocalizedSkinGoalDescription,
  getLocalizedSkinGoalLabel,
} from "@/lib/navigation/treatmentsMenu";

export default function TreatmentGoalPage({
  categories = [],
  pageTitle,
  pageSubtitle,
  metaTitle,
  metaDescription,
  schemaUrl,
}) {
  return (
    <TreatmentDirectoryPage
      categories={categories}
      pageTitle={pageTitle}
      pageSubtitle={pageSubtitle}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Our Treatments", href: "/treatments" },
        { label: pageTitle },
      ]}
      schemaName={pageTitle}
      schemaDescription={metaDescription}
      schemaUrl={schemaUrl}
    />
  );
}

export async function getStaticPaths({ locales = [] }) {
  const { getSkinGoalDefinitions } = await import("@/lib/navigation/treatmentsMenu");
  const localesToBuild = locales.length ? locales : [undefined];
  const paths = getSkinGoalDefinitions().flatMap((definition) =>
    localesToBuild.map((locale) => ({
      params: { slug: definition.slug },
      ...(locale ? { locale } : {}),
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const currentLocale = locale || "en";
  const { allTreatments } = await import("@/lib/data/allTreatments");

  const goalDefinition = getSkinGoalDefinition(params?.slug);
  if (!goalDefinition) {
    return { notFound: true };
  }

  const categories = buildTreatmentDirectoryCategories({
    allTreatments,
    locale: currentLocale,
    includedServiceSlugs: goalDefinition.serviceSlugs,
  });

  if (!categories.length) {
    return { notFound: true };
  }

  const pageTitle = getLocalizedSkinGoalLabel(goalDefinition, currentLocale);
  const pageSubtitle = getLocalizedSkinGoalDescription(goalDefinition, currentLocale);
  const metaDescription = pageSubtitle;

  return {
    props: {
      categories,
      pageTitle,
      pageSubtitle,
      metaTitle: `${pageTitle} Treatments | Mave Medical Spa`,
      metaDescription,
      schemaUrl: `https://www.mavemedspa.com/treatments/goal/${goalDefinition.slug}`,
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "treatments", "home"],
        nextI18NextConfig
      )),
    },
  };
}
