import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { allTreatments } from "@/lib/data/allTreatments";
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function PopularTreatments() {
  const { t } = useTranslation("treatments");
  const { locale } = useRouter();
  const popularTreatments = allTreatments.filter((t) => t && t.isPopular);

  const getLocalized = (field) => {
    if (typeof field === 'object' && field[locale]) return field[locale];
    if (typeof field === 'object' && field['en']) return field['en'];
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

  return (
    <section className="bg-white py-10 pb-2">
      <div className="container mx-auto px-4 flex flex-row sm:flex-row justify-between items-center sm:items-center gap-3 mb-6">
        <h2 className="text-3xl md:text-4xl font-serif text-black font-medium mx-auto sm:mx-0 sm:ml-4">
          {t("treatments.popular")}
        </h2>
        <Link
          href="/treatments"
          className="text-sm underline text-gray-600 hover:text-black"
        >
          {t("treatments.all")}
        </Link>
      </div>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {popularTreatments.map((treatment, index) => (
            <div key={index} className="keen-slider__slide min-h-[475px] flex p-2">
              <div className="mx-4 flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full">
                  {(() => {
                    const localizedName = getLocalized(treatment.displayName || treatment.serviceDisplayName);
                    const localizedDesc = getLocalized(treatment.description);
                    return (
                      <Image
                        src={treatment.images?.primary || "/placeholder.jpg"}
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
                      {getLocalized(treatment.displayName || treatment.serviceDisplayName)}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {getLocalized(treatment.description)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={dispatchChatOpen}
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
        {slider && (
          <>
            <button
              type="button"
              onClick={() => slider.current?.prev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => slider.current?.next()}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100"
            >
              ›
            </button>
          </>
        )}
      </div>
    </section>
  );
}
