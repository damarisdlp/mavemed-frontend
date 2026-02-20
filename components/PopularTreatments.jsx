"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function TreatmentCard({ card, t, router }) {
  return (
    <div className="w-[265px] sm:w-[320px] md:w-[340px] lg:w-[360px]">
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="relative h-[200px] w-full">
          <Image src={card.image} alt={card.title} fill className="object-cover" />
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-lg font-serif text-black font-medium mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-700 line-clamp-4">{card.description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                const href = `/treatments/${card.slug}?lead=open`;
                if (router?.push) router.push(href);
                else window.location.href = href;
              }}
              className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] text-center transition"
            >
              {t("treatments.bookNow")}
            </button>

            <Link
              href={`/treatments/${card.slug}`}
              className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition text-center"
            >
              {t("treatments.learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopularTreatments({ treatments = [] }) {
  const { t } = useTranslation("treatments");
  const router = useRouter();
  const popularCards = Array.isArray(treatments) ? treatments : [];

  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2.2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3.1, spacing: 24 } },
    },
  });
  const sliderWheelCarryRef = useRef(0);

  useEffect(() => {
    const slider = sliderInstanceRef.current;
    const container = slider?.container;
    if (!container) return;

    const STEP_THRESHOLD = 36;
    sliderWheelCarryRef.current = 0;

    const handleWheel = (event) => {
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      const delta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!Number.isFinite(delta) || Math.abs(delta) < 1) return;
      event.preventDefault();
      sliderWheelCarryRef.current += delta;

      while (Math.abs(sliderWheelCarryRef.current) >= STEP_THRESHOLD) {
        if (sliderWheelCarryRef.current > 0) {
          slider.next();
          sliderWheelCarryRef.current -= STEP_THRESHOLD;
        } else {
          slider.prev();
          sliderWheelCarryRef.current += STEP_THRESHOLD;
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [sliderInstanceRef, popularCards.length]);

  if (!popularCards.length) return null;

  return (
    <section className="bg-white px-6 py-12">
      {/* Centered header style, like ReviewsSection */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl text-black font-serif font-medium">
          {t("treatments.popular")}
        </h2>

        <div className="mt-3 flex justify-end">
          <Link
            href="/treatments"
            className="text-sm underline text-black hover:text-[#731a2f]"
          >
            {t("treatments.all")}
          </Link>
        </div>
      </div>

      {/* Same outer and inner wrapper pattern as ReviewsSection */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[1100px]">
          <div ref={sliderRef} className="keen-slider overflow-hidden w-full">
            {popularCards.map((card, idx) => (
              <div key={idx} className="keen-slider__slide px-2 flex justify-center">
                <TreatmentCard card={card} t={t} router={router} />
              </div>
            ))}
          </div>

          {popularCards.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => sliderInstanceRef.current?.prev()}
                className="
                  absolute
                  -left-2 md:-left-8
                  top-1/2 -translate-y-1/2
                  bg-white border border-gray-300 text-gray-700
                  rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20
                "
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => sliderInstanceRef.current?.next()}
                className="
                  absolute
                  -right-2 md:-right-8
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
