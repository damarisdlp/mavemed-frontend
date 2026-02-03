import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function StaffFavorites({ cards = [], displayName = "" }) {
  if (!cards.length) return null;
  const router = useRouter();
  const { t } = useTranslation("team");

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
    <div className="mt-12">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-4">
        <h2 className="text-2xl text-black font-serif font-medium leading-snug">
          {t("team.favoritesHeading")}
          <br />
          {displayName}
        </h2>
        <Link
          href="/treatments"
          className="text-sm underline text-black hover:text-[#731a2f] transition"
        >
          {t("team.viewAllTreatments")}
        </Link>
      </div>
      <div className="relative block mb-8">
        <div
          ref={sliderRef}
          className="keen-slider overflow-hidden px-0.5 sm:px-1.5 mx-auto w-full max-w-[1400px]"
        >
          {cards.map((card, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center px-2">
              <div className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-3">
                <div className="relative h-[200px] w-full">
                  <Image src={card.image} alt={card.serviceName} fill className="object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-lg font-serif text-black font-medium mb-1">
                      {card.serviceName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const target = card.slug.startsWith("/treatments")
                          ? card.slug
                          : `/treatments/${card.slug}`;
                        const href = `${target}?lead=open`;
                        if (router?.push) {
                          router.push(href);
                        } else {
                          window.location.href = href;
                        }
                      }}
                      className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] text-center"
                    >
                      {t("team.bookNow")}
                    </button>
                    <Link
                      href={card.slug.startsWith("/treatments") ? card.slug : `/treatments/${card.slug}`}
                      className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition text-center"
                    >
                      {t("team.learnMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {slider && cards.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => slider.current?.prev()}
              className="absolute -left-4 sm:-left-6 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => slider.current?.next()}
              className="absolute -right-4 sm:-right-6 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
