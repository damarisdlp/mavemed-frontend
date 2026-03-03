import TreatmentDirectoryPage from "@/components/TreatmentDirectoryPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import { buildTreatmentDirectoryCategories } from "@/lib/treatments/buildDirectory";
import { getTreatmentTypeDefinition } from "@/lib/navigation/treatmentsMenu";

const TYPE_PAGE_SUBTITLE = {
  en: "Explore treatments in this category and compare the services that best match your goals.",
  es: "Explora los tratamientos de esta categoría y compara los servicios que mejor se adaptan a tus objetivos.",
};

export default function TreatmentTypePage({
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
  const { getTreatmentTypeDefinitions } = await import("@/lib/navigation/treatmentsMenu");
  const localesToBuild = locales.length ? locales : [undefined];
  const paths = getTreatmentTypeDefinitions().flatMap((definition) =>
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
  const { getLocalized } = await import("@/lib/i18n/getLocalized");
  const { allTreatments } = await import("@/lib/data/allTreatments");

  const typeDefinition = getTreatmentTypeDefinition(params?.slug);
  if (!typeDefinition) {
    return { notFound: true };
  }

  const categories = buildTreatmentDirectoryCategories({
    allTreatments,
    locale: currentLocale,
    includedCategorySlugs: [typeDefinition.slug],
  });

  if (!categories.length) {
    return { notFound: true };
  }

  const pageTitle = categories[0].title;
  const pageSubtitle = getLocalized(TYPE_PAGE_SUBTITLE, currentLocale);
  const metaDescription = pageSubtitle;

  return {
    props: {
      categories,
      pageTitle,
      pageSubtitle,
      metaTitle: `${pageTitle} | Mave Medical Spa Treatments`,
      metaDescription,
      schemaUrl: `https://www.mavemedspa.com/treatments/type/${typeDefinition.slug}`,
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "treatments", "home"],
        nextI18NextConfig
      )),
    },
  };
}
