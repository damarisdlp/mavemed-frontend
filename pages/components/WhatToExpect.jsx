import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function WhatToExpect({ expectations = [] }) {
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

  if (!expectations.length) return null;

  // 🧠 Sort expectations: all "Pre-Treatment" first, then "Post-Treatment"
  const sortedExpectations = [...expectations].sort((a, b) => {
    if (a.label === b.label) return 0;
    if (a.label === "Pre-Treatment") return -1;
    if (b.label === "Pre-Treatment") return 1;
    return 0;
  });

  return (
    <section className="bg-[#c4b7a6] py-7">
      <div className="container mx-auto px-4 mb-3">
        <h2 className="text-3xl md:text-4xl font-serif text-white font-medium text-center">
          What to Expect
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
        {sortedExpectations.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide p-2 min-h-[180px] flex"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition p-4 flex flex-col justify-center w-full">
              <h4 className="text-sm font-semibold text-gray-600 mb-1">
                {item.label}
              </h4>
              <p className="text-sm text-black leading-snug">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}