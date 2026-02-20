"use client";

import Image from "next/image";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-i18next";
import { getLocalized } from "@/lib/i18n/getLocalized";

const isValidSlide = (slide) =>
  Boolean(
    slide &&
      typeof slide.beforeSrc === "string" &&
      slide.beforeSrc &&
      typeof slide.afterSrc === "string" &&
      slide.afterSrc,
  );

const clampSplit = (value) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 50;
  return Math.min(95, Math.max(5, numeric));
};

export default function BeforeAfterCarousel({
  gallery = [],
  locale = "en",
  serviceName = "",
}) {
  const { t } = useTranslation("treatments");
  const slides = (Array.isArray(gallery) ? gallery : []).filter(isValidSlide);
  const hasMultiple = slides.length > 1;
  const [splits, setSplits] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);

  const [sliderRef, sliderInstanceRef] = useKeenSlider(
    {
      loop: hasMultiple,
      slideChanged(slider) {
        setActiveSlide(slider.track.details.rel);
      },
      slides: {
        perView: 1,
        spacing: 16,
      },
    },
    [],
  );

  if (!slides.length) return null;

  const localize = (value, fallback = "") => getLocalized(value, locale) || fallback;

  return (
    <section className="max-w-5xl mx-auto px-6 pb-10">
      <div className="mb-4">
        <h2 className="text-2xl md:text-3xl text-black font-serif font-medium">
          {t("beforeAfter.heading")}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{t("beforeAfter.subtitle")}</p>
      </div>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider overflow-hidden w-full">
          {slides.map((slide, index) => {
            const split = splits[index] ?? 50;
            const fallbackAlt = `${serviceName || t("beforeAfter.heading")} ${index + 1}`;
            const altText = localize(slide.alt, fallbackAlt);
            const caption = localize(slide.caption, "");

            return (
              <div key={`${slide.beforeSrc}-${slide.afterSrc}-${index}`} className="keen-slider__slide">
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] bg-gray-100">
                    <Image
                      src={slide.afterSrc}
                      alt={altText}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 960px, 100vw"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
                    >
                      <Image
                        src={slide.beforeSrc}
                        alt={altText}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 960px, 100vw"
                      />
                    </div>

                    <div
                      className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] pointer-events-none"
                      style={{ left: `${split}%` }}
                    />

                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/70 text-white text-xs tracking-wide uppercase">
                      {t("beforeAfter.beforeLabel")}
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/70 text-white text-xs tracking-wide uppercase">
                      {t("beforeAfter.afterLabel")}
                    </div>
                  </div>

                  <div className="px-4 py-3">
                    <label className="sr-only" htmlFor={`before-after-range-${index}`}>
                      {t("beforeAfter.compareAria", { index: index + 1 })}
                    </label>
                    <input
                      id={`before-after-range-${index}`}
                      type="range"
                      min="5"
                      max="95"
                      step="1"
                      value={split}
                      onChange={(event) => {
                        const nextValue = clampSplit(event.target.value);
                        setSplits((prev) => ({ ...prev, [index]: nextValue }));
                      }}
                      className="w-full accent-[#731a2f]"
                      aria-label={t("beforeAfter.compareAria", { index: index + 1 })}
                    />
                    {caption ? <p className="mt-2 text-sm text-gray-600">{caption}</p> : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => sliderInstanceRef.current?.prev()}
              aria-label={t("beforeAfter.prevAria")}
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => sliderInstanceRef.current?.next()}
              aria-label={t("beforeAfter.nextAria")}
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
            >
              ›
            </button>
            <div className="flex justify-center gap-2 mt-3">
              {slides.map((_, index) => {
                const isActive = activeSlide === index;
                return (
                  <button
                    key={`before-after-dot-${index}`}
                    type="button"
                    onClick={() => sliderInstanceRef.current?.moveToIdx(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      isActive ? "bg-[#731a2f]" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={t("beforeAfter.compareAria", { index: index + 1 })}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
