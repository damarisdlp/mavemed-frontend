import { useState, useEffect } from "react"; // ⬅️ make sure these are imported
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { allStaff } from "@/lib/data/allStaff";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function AboutSection() {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  const getLocalized = (field) => {
    if (typeof field === "object" && field !== null) {
      return field[locale] || field.en || Object.values(field)[0] || "";
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

  // ⬅️ Scroll-to-top state + effect
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
        <div className="relative w-full h-[40vh] md:h-auto">
          <Image
            src="/logo-mave.png"
            alt="Shot of outside of Mave Medical Spa in Tijuana"
            fill
            className="object-contain md:object-cover"
            priority
          />
        </div>

        <div className="flex items-center justify-center px-6 py-10">
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

      {/* Team Section Header */}
      <div className="container mx-auto px-4 flex flex-row sm:flex-row justify-between items-center sm:items-center gap-6 mb-8">
        <h2
          className="font-serif text-black font-medium mx-auto sm:mx-0 sm:ml-4 leading-snug text-[clamp(1.5rem,3.5vw,2.5rem)] whitespace-nowrap"
        >
          {t("aboutSection.meetTeam")}
        </h2>
        <Link
          href="/ourteam"
          className="text-sm underline text-gray-600 hover:text-black whitespace-nowrap"
        >
          {t("aboutSection.viewAll")}
        </Link>
      </div>

  {/* Slider Cards */}
  <div className="w-full flex justify-center relative px-2 md:px-6">
    <div
      ref={sliderRef}
      className="keen-slider overflow-hidden px-0.5 sm:px-1.5 mx-auto w-full max-w-[1400px]"
    >
      {allStaff.map((s, index) => (
        <div key={index} className="keen-slider__slide flex justify-center px-2">
          <div className="w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-3">
            <div className="relative h-80 w-full">
              <Image
                src={s.image}
                alt={`${getLocalized(s.displayName)} – ${getLocalized(s.title)}`}
                fill
                    className="object-cover text-gray-600"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="text-lg font-serif text-black font-medium mb-1">
                      {getLocalized(s.displayName)}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{getLocalized(s.title)}</p>
                  </div>
                  <Link
                    href={`/ourteam/${s.name.toLowerCase()}`}
                    className="inline-block border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
                  >
                    {t("aboutSection.learnMore")}
                  </Link>
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
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => slider.current?.next()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100"
        >
          ›
        </button>
      </>
    )}
  </div>

      {/* Spacer */}
      <div className="h-1 bg-white w-full" />

      {/* Scroll to Top Button */}
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
