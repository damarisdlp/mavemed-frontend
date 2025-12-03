import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/router";

export default function WhatToExpect({ expectations = {} }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";

  const getLocalized = (field) => {
    if (field == null) return ""; // null or undefined
    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      return "";
    }
    return field;
  };

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.1, spacing: 24 },
      },
    },
  });

  const preLabel = locale === "es" ? "Antes del tratamiento" : "Pre Treatment";
  const postLabel = locale === "es" ? "Después del tratamiento" : "Post Treatment";

  const combined = [
    ...(expectations.preTreatment || []).map((note) => ({
      label: preLabel,
      note,
    })),
    ...(expectations.postTreatment || []).map((note) => ({
      label: postLabel,
      note,
    })),
  ];

  if (!combined.length) return null;

  const sectionTitle =
    locale === "es" ? "Qué puedes esperar" : "What to Expect";

  return (
    <section className="bg-[#c4b7a6] py-7">
      <div className="container mx-auto px-4 mb-3">
        <h2 className="text-3xl md:text-4xl font-serif text-white font-medium text-center">
          {sectionTitle}
        </h2>
      </div>

      {slider && (
        <div className="container mx-auto px-6 flex justify-end gap-4 mb-6">
          <button
            onClick={() => slider.current?.prev()}
            className="bg-white hover:bg-gray-100 text-black p-2 rounded-full text-lg"
          >
            ←
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="bg-white hover:bg-gray-100 text-black p-2 rounded-full text-lg"
          >
            →
          </button>
        </div>
      )}

      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {combined.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide p-2 min-h-[180px] flex"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-4 flex flex-col justify-center w-full">
              <h4 className="text-sm font-semibold text-gray-600 mb-1">
                {item.label}
              </h4>
              <p className="text-sm text-black leading-snug">
                {getLocalized(item.note)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}