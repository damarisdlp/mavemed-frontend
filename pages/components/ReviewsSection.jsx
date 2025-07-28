// components/ReviewsSection.jsx
import Script from "next/script";

export default function ReviewsSection() {
  return (
    <>
      {/* Elfsight Script for Google Reviews */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        async
      />

      {/* Reviews Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What Our Patients Say</h2>
          <p className="text-gray-600 mb-8">
            Verified reviews from cross-border clients and locals who’ve trusted Mave.
          </p>
          <div
            className="elfsight-app-4b91b54f-5db7-48aa-b928-695638fda232"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
    </>
  );
}