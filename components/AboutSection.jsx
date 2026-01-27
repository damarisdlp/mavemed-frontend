"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { allStaff } from "@/lib/data/allStaff";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function AboutSection() {
  const { t } = useTranslation("home");
  const router = useRouter();
  const { locale = "en" } = router;

  const getLocalized = (field) => {
    if (field === null || field === undefined) return "";
    if (typeof field === "object") {
      return field[locale] || field.en || Object.values(field)[0] || "";
    }
    return field;
  };

  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2.2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3.1, spacing: 24 } },
    },
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="aboutus" className="bg-white min-h-screen w-full relative">
      {/* Top Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[85vh] mb-10">
        <div className="relative w-full h-[40vh] md:h-auto mt-9 md:mt-0">
          <Image
            src="/drs.jpg"
            alt="Shot of outside of Mave Medical Spa in Tijuana"
            fill
            className="object-contain md:object-cover"
            priority
          />
        </div>

        <div className="flex items-center justify-center px-6 pt-3 md:pt-24">
          <div className="w-full max-w-md mx-auto text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-serif font-medium mb-2 leading-tight">
              {t("aboutSection.title")}
            </h2>
            <strong className="text-black text-xl block mb-4">
              {t("aboutSection.subtitle")}
            </strong>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              {t("aboutSection.p1")}
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              {t("aboutSection.p2")}
            </p>

            <ul className="list-disc list-outside pl-6 text-left text-gray-700 text-base md:text-lg space-y-2 mb-4">
              <li>{t("aboutSection.list.botox")}</li>
              <li>{t("aboutSection.list.biostimulators")}</li>
              <li>{t("aboutSection.list.rfMicroneedling")}</li>
              <li>{t("aboutSection.list.pdo")}</li>
              <li>{t("aboutSection.list.lasers")}</li>
            </ul>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              {t("aboutSection.p3")}
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {t("aboutSection.p4")}
            </p>
          </div>
        </div>
      </div>

      {/* Team header, now same centered header pattern as ReviewsSection */}
      <div className="max-w-6xl mx-auto text-center mb-8 px-6">
        <h2 className="text-2xl md:text-3xl text-black font-serif font-medium">
          {t("aboutSection.meetTeam")}
        </h2>

        <div className="mt-3 flex items-center justify-end">
          <Link
            href="/ourteam"
            className="text-sm underline text-black hover:text-[#731a2f]"
          >
            {t("aboutSection.viewAll")}
          </Link>
        </div>
      </div>

      {/* Slider wrapper matches ReviewsSection */}
      <div className="flex justify-center px-6">
        <div className="relative w-full max-w-[1100px]">
          <div ref={sliderRef} className="keen-slider overflow-hidden w-full">
            {allStaff.map((s, index) => (
              <div key={index} className="keen-slider__slide px-2 flex justify-center">
                <div className="w-[250px] sm:w-[320px] md:w-[340px] lg:w-[360px]">
                  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                    <div className="relative h-[240px] sm:h-[300px] w-full">
                      <Image
                        src={s.image}
                        alt={`${getLocalized(s.displayName)}, ${getLocalized(s.title)}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h3 className="text-lg font-serif text-black font-medium mb-1">
                        {getLocalized(s.displayName)}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {getLocalized(s.title)}
                      </p>

                      <Link
                        href={`/ourteam/${s.name.toLowerCase()}`}
                        className="inline-flex items-center justify-center border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition w-full"
                      >
                        {t("aboutSection.learnMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {allStaff.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => sliderInstanceRef.current?.prev()}
                className="
                  absolute
                  -left-3 md:-left-10
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
                  -right-3 md:-right-10
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

      <div className="h-1 bg-white w-full" />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm hover:bg-[#731a2f] transition"
          aria-label={t("aboutSection.scrollTop")}
        >
          {t("aboutSection.top")}
        </button>
      )}
    </section>
  );
}
