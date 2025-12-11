import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { allTreatments } from "@/lib/data/allTreatments";
import { useTranslation } from "next-i18next";

export default function PopularTreatments() {
  const { t } = useTranslation("treatments");
  const router = useRouter();
  const { locale } = router;
  const popularTreatments = allTreatments.filter((t) => t && t.isPopular);

  const getLocalized = (field) => {
    if (field == null) return "";
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
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });

  return (
    <section className="bg-white py-10 pb-2">
      {/* Heading row */}
      <div className="container mx-auto px-4 flex flex-row justify-between items-center gap-3 mb-6">
        <h2 className="font-serif text-black font-medium mx-auto sm:mx-0 sm:ml-4 leading-snug text-[clamp(1.5rem,3.5vw,2.5rem)] whitespace-nowrap">
          {t("treatments.popular")}
        </h2>
        <Link
          href="/treatments"
          className="text-sm underline text-gray-600 hover:text-black whitespace-nowrap"
        >
          {t("treatments.all")}
        </Link>
      </div>

      {/* Outer wrapper just for vertical spacing */}
      <div className="mb-8">
        {/* Inner wrapper: constrained width + relative, arrows anchor here */}
        <div className="relative mx-auto w-full max-w-[1400px]">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="keen-slider overflow-hidden w-full"
          >
            {popularTreatments.map((treatment, index) => (
              <div
                key={index}
                className="keen-slider__slide flex justify-center px-2"
              >
                <div className="w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-3">
                  <div className="relative h-50 w-full">
                    {(() => {
                      const localizedName = getLocalized(
                        treatment.displayName || treatment.serviceDisplayName
                      );
                      const localizedDesc = getLocalized(
                        treatment.description
                      );
                      return (
                        <Image
                          src={
                            treatment.images?.primary || "/placeholder.jpg"
                          }
                          alt={`${localizedName} – ${localizedDesc}`}
                          fill
                          className="object-cover"
                        />
                      );
                    })()}
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif text-black font-medium mb-1">
                        {getLocalized(
                          treatment.displayName ||
                            treatment.serviceDisplayName
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {getLocalized(treatment.description)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          router.push(
                            `/treatments/${treatment.urlSlug}?lead=open`
                          );
                        }}
                        className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] text-center"
                      >
                        {t("treatments.bookNow")}
                      </button>
                      <Link
                        href={`/treatments/${treatment.urlSlug}`}
                        className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black text-center"
                      >
                        {t("treatments.learnMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows: positioned relative to the max-w-[1400px] wrapper */}
          {slider && (
            <>
              <button
                type="button"
                onClick={() => slider.current?.prev()}
                className="
                  absolute
                  -left-4 md:-left-6
                  top-1/2 -translate-y-1/2
                  bg-white border border-gray-300 text-gray-700
                  rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20
                "
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => slider.current?.next()}
                className="
                  absolute
                  -right-4 md:-right-6
                  top-1/2 -translate-y-1/2
                  bg-white border border-gray-300 text-gray-700
                  rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20
                "
              >
                ›
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}