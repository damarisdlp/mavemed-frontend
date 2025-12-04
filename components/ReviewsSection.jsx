// components/ReviewsSection.jsx
import Script from "next/script";
import { useTranslation } from "next-i18next";

export default function ReviewsSection() {
  const { t } = useTranslation("common");

  return (
    <>
      {/* Elfsight Script for Google Reviews */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        async
      />

      {/* Reviews Section */}
      <section className="bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-black font-medium mb-6">
            {t("reviews.title")}
          </h2>
          <p className="text-gray-600 mb-8">{t("reviews.subtitle")}</p>
          <div
            className="elfsight-app-4b91b54f-5db7-48aa-b928-695638fda232"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
    </>
  );
}
