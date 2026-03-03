import Head from "next/head";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import TreatmentCategories from "@/components/TreatmentCategories";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";

export default function TreatmentDirectoryPage({
  categories = [],
  pageTitle,
  pageSubtitle,
  metaTitle,
  metaDescription,
  breadcrumbItems = [],
  schemaName,
  schemaDescription,
  schemaUrl,
}) {
  const { locale, asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks asPath={asPath} locale={locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": `${schemaUrl}#webpage`,
              name: schemaName || metaTitle,
              url: schemaUrl,
              description: schemaDescription || metaDescription,
              about: {
                "@id": "https://www.mavemedspa.com/#organization",
              },
            }),
          }}
        />
      </Head>

      <PromoBanner />
      <Header />

      <div className="bg-white pt-[4%] md:pt-0 md:mt-15">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="relative w-full h-[320px] md:h-[300px]">
          <div className="absolute inset-0 bg-white flex items-center justify-start px-6 sm:px-10 md:px-20">
            <div className="max-w-3xl">
              <h1 className="mt-15 mb-4 font-serif text-4xl font-medium text-black md:text-5xl">
                {pageTitle}
              </h1>
              {pageSubtitle ? (
                <p className="mb-6 text-base text-black md:text-lg">{pageSubtitle}</p>
              ) : null}
            </div>
          </div>
        </div>

        <TreatmentCategories categories={categories} />
        <InstagramFeed />
        <ReviewsSection />
        <Footer />
      </div>
    </>
  );
}
