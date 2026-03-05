"use client";

import Image from "next/image";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-i18next";
import { getLocalized } from "@/lib/i18n/getLocalized";

const isValidItem = (item) =>
  Boolean(
    item &&
      typeof item.beforeSrc === "string" &&
      item.beforeSrc &&
      typeof item.afterSrc === "string" &&
      item.afterSrc,
  );

export default function HomeBeforeAfterShowcase({ items = [], locale = "en" }) {
  const { t } = useTranslation("home");
  const slides = (Array.isArray(items) ? items : []).filter(isValidItem);
  const hasMultiple = slides.length > 1;
  const [activeSlide, setActiveSlide] = useState(0);

  const [sliderRef, sliderInstanceRef] = useKeenSlider(
    {
      loop: hasMultiple,
      slideChanged(slider) {
        setActiveSlide(slider.track.details.rel);
      },
      slides: {
        perView: 1.06,
        spacing: 18,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 1.4, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 2.2, spacing: 24 },
        },
        "(min-width: 1400px)": {
          slides: { perView: 3.05, spacing: 28 },
        },
      },
    },
    [],
  );

  if (!slides.length) return null;

  const localize = (value, fallback = "") => getLocalized(value, locale) || fallback;

  return (
    <section className="w-full bg-[#ecebea] py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-[1.95rem] leading-tight text-[#1f2328] md:text-[3.0rem]">
          {t("beforeAfterShowcase.heading")}
        </h2>

        <div className="relative mt-8 md:mt-10">
          <div ref={sliderRef} className="keen-slider">
            {slides.map((slide, index) => {
              const categoryLabel = localize(
                slide.categoryLabel,
                t("beforeAfterShowcase.fallbackCategory"),
              );
              const serviceLabel = localize(
                slide.serviceLabel,
                t("beforeAfterShowcase.fallbackService"),
              );
              const beforeAlt = localize(slide.alt, serviceLabel)
                ? `${localize(slide.alt, serviceLabel)} ${t("beforeAfterShowcase.before")}`
                : t("beforeAfterShowcase.before");
              const afterAlt = localize(slide.alt, serviceLabel)
                ? `${localize(slide.alt, serviceLabel)} ${t("beforeAfterShowcase.after")}`
                : t("beforeAfterShowcase.after");

              return (
                <article
                  key={`${slide.slug || "service"}-${slide.id || index}-${slide.beforeSrc}`}
                  className="keen-slider__slide"
                >
                  <div className="bg-transparent">
                    <div className="grid grid-cols-2 gap-0.5 bg-white">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={slide.beforeSrc}
                          alt={beforeAlt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1400px) 420px, (min-width: 1024px) 36vw, (min-width: 640px) 44vw, 92vw"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-black/65 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
                          {t("beforeAfterShowcase.before")}
                        </span>
                      </div>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={slide.afterSrc}
                          alt={afterAlt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1400px) 420px, (min-width: 1024px) 36vw, (min-width: 640px) 44vw, 92vw"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-black/65 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
                          {t("beforeAfterShowcase.after")}
                        </span>
                      </div>
                    </div>

                    <div className="px-0 pb-1 pt-4">
                      <p className="font-serif text-[2rem] leading-none text-[#1f2328]">
                        {categoryLabel}
                      </p>
                      <p className="mt-2 text-[1.03rem] leading-snug text-[#1f2328]">
                        {serviceLabel}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={() => sliderInstanceRef.current?.prev()}
                aria-label={t("beforeAfterShowcase.prevAria")}
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
                aria-label={t("beforeAfterShowcase.nextAria")}
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
              <div className="mt-5 flex justify-center gap-2 md:hidden">
                {slides.map((_, index) => (
                  <button
                    key={`home-before-after-dot-${index}`}
                    type="button"
                    onClick={() => sliderInstanceRef.current?.moveToIdx(index)}
                    className={`h-2.5 w-2.5 rounded-full ${
                      activeSlide === index ? "bg-[#1f2328]" : "bg-[#bcc3c7]"
                    }`}
                    aria-label={`${t("beforeAfterShowcase.heading")} ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
