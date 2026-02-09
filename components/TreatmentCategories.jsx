import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useKeenSlider } from "keen-slider/react";
import { useTranslation } from "next-i18next";
import { getLocalized as getLocalizedValue } from "@/lib/i18n/getLocalized";

export default function TreatmentCategories({ categories = [] }) {
  const orderedCategories = Array.isArray(categories) ? categories : [];
  const router = useRouter();
  const { locale = "en" } = router;
  const { t } = useTranslation("treatments");
  const localize = (field) => getLocalizedValue(field, locale);
  const cardActionBaseClass =
    "inline-flex w-full items-center justify-center min-h-[36px] px-4 py-2 rounded-full text-xs leading-none transition text-center";

  const CategorySlider = ({ services }) => {
    // ReviewsSection slider behavior
    const [sliderRef, sliderInstanceRef] = useKeenSlider({
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 768px)": { slides: { perView: 2.2, spacing: 16 } },
        "(min-width: 1024px)": { slides: { perView: 3.1, spacing: 24 } },
      },
    });

    return (
      <div className="md:hidden">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[1100px]">
            <div ref={sliderRef} className="keen-slider overflow-hidden w-full">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide px-2 flex justify-center"
                >
                  <div className="w-[275px] sm:w-[320px] md:w-[340px] lg:w-[360px]">
                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                      <div className="relative h-[200px] w-full">
                        <Image
                          src={service.image}
                          alt={`${localize(service.name)} – ${localize(
                            service.description
                          )}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div className="mb-4">
                          <h3 className="text-lg text-black font-serif font-medium mb-1">
                            {localize(service.name)}
                          </h3>
                          <p className="text-sm text-gray-700 line-clamp-4">
                            {localize(service.description)}
                          </p>
                        </div>

                        <div className="flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              router.push(`/treatments/${service.slug}?lead=open`)
                            }
                            className={`${cardActionBaseClass} bg-black text-white hover:bg-[#731a2f]`}
                            aria-label={t("treatmentCategories.bookService", {
                              service: localize(service.name),
                            })}
                          >
                            {t("treatments.bookNow")}
                          </button>

                          <Link
                            href={`/treatments/${service.slug}`}
                            className={`${cardActionBaseClass} border border-gray-300 text-black hover:border-black`}
                            aria-label={t("treatmentCategories.learnMoreAbout", {
                              service: localize(service.name),
                            })}
                          >
                            {t("treatments.learnMore")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {services.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => sliderInstanceRef.current?.prev()}
                  className="
                    absolute
                    -left-2 md:-left-6
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
                    -right-2 md:-right-6
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
      </div>
    );
  };

  // Show/hide scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const normalizeText = (value) =>
    (value || "")
      .toLowerCase()
      .replace(/₂/g, "2")
      .replace(/₀/g, "0")
      .replace(/₁/g, "1")
      .replace(/₃/g, "3")
      .replace(/₄/g, "4")
      .replace(/₅/g, "5")
      .replace(/₆/g, "6")
      .replace(/₇/g, "7")
      .replace(/₈/g, "8")
      .replace(/₉/g, "9");
  const normalizedQuery = normalizeText(searchTerm.trim());
  const visibleCategories = orderedCategories
    .map((category) => {
      const services = category.services.filter((service) => {
        if (!normalizedQuery) return true;
        const name = normalizeText(localize(service.name));
        const description = normalizeText(localize(service.description));
        const extra = normalizeText(
          (service.searchFields || []).map((field) => localize(field)).join(" ")
        );
        return (
          name.toLowerCase().includes(normalizedQuery) ||
          description.toLowerCase().includes(normalizedQuery) ||
          extra.includes(normalizedQuery)
        );
      });
      return { ...category, services };
    })
    .filter((category) => category.services.length > 0);

  const [menuRef, menuInstanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: "auto", spacing: 12 },
  });

  useEffect(() => {
    if (!menuInstanceRef.current) return;
    const handle = window.requestAnimationFrame(() => {
      menuInstanceRef.current?.update();
    });
    return () => window.cancelAnimationFrame(handle);
  }, [visibleCategories.length, locale]);

  return (
    <div className="bg-white scroll-smooth relative">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        {/* Sticky Search + Category Menu */}
        <div
          className="-mx-4 sm:-mx-6 lg:-mx-8 -mt-0 sm:mt-0 sticky bg-white z-30 border-b border-gray-200 px-4 sm:px-6 lg:px-8"
          style={{ top: "calc(var(--site-header-offset) - 10px)" }}
        >
          <div className="py-2 sm:py-3">
            <label className="sr-only" htmlFor="treatment-search">
              {t("treatmentCategories.searchPlaceholder")}
            </label>
            <div className="relative mx-auto w-full md:w-1/2">
              <input
                id="treatment-search"
                type="text"
                inputMode="search"
                enterKeyHint="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.currentTarget.blur();
                  }
                }}
                placeholder={t("treatmentCategories.searchPlaceholder")}
                className="w-full rounded-full border border-gray-300 px-4 py-2 pr-12 text-sm md:text-base focus:border-black focus:outline-none"
              />
              {searchTerm ? (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label={t("treatmentCategories.clearSearch")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-2xl font-semibold text-gray-500 hover:text-black flex items-center justify-center"
                >
                  ×
                </button>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full">
              <div className="px-9 sm:px-10 md:px-0">
                <div
                  id="category-menu"
                  ref={menuRef}
                  className="keen-slider overflow-hidden w-full pb-2 sm:pb-3"
                >
                  {visibleCategories.map((category, i) => (
                    <div
                      key={i}
                      className="keen-slider__slide px-2"
                      style={{ width: "max-content", flex: "0 0 auto" }}
                    >
                      <a
                        href={`#${localize(category.title).replace(/\s+/g, "-").toLowerCase()}`}
                        className="inline-flex min-w-max items-center text-sm md:text-base px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 text-black hover:border-black hover:text-[#731a2f] transition whitespace-nowrap min-h-[36px]"
                      >
                        {localize(category.title)}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {visibleCategories.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => menuInstanceRef.current?.prev()}
                    aria-label={t("treatmentCategories.scrollLeft", {
                      defaultValue: "Scroll categories left",
                    })}
                    className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() => menuInstanceRef.current?.next()}
                    aria-label={t("treatmentCategories.scrollRight", {
                      defaultValue: "Scroll categories right",
                    })}
                    className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-20"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Services by Category */}
        {visibleCategories.map((category, i) => (
          <div
            key={i}
            id={localize(category.title).replace(/\s+/g, "-").toLowerCase()}
            className="mb-16 mt-8 scroll-mt-[calc(var(--site-header-offset)+150px)] sm:scroll-mt-[calc(var(--site-header-offset)+165px)] md:scroll-mt-[calc(var(--site-header-offset)+170px)]"
          >
            <h2
              className="text-black font-serif font-medium mb-6 leading-snug text-[clamp(1.6rem,3.8vw,2.6rem)]"
            >
              {localize(category.title)}
            </h2>

            {/* Mobile slider per category */}
            <CategorySlider services={category.services} />

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {category.services.map((service, j) => (
                <div
                  key={j}
                  className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={`${localize(service.name)} in Tijuana – ${localize(service.description)}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between min-h-[260px]">
                    <div>
                      <h3 className="text-lg text-black font-serif font-medium mb-2">
                        {localize(service.name)}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {localize(service.description)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => router.push(`/treatments/${service.slug}?lead=open`)}
                        className={`${cardActionBaseClass} bg-black text-white hover:bg-[#731a2f]`}
                        aria-label={t("treatmentCategories.bookService", {
                          service: localize(service.name),
                        })}
                      >
                        {t("treatments.bookNow")}
                      </button>
                      <Link
                        href={`/treatments/${service.slug}`}
                        className={`${cardActionBaseClass} border border-gray-300 text-black hover:border-black`}
                        aria-label={t("treatmentCategories.learnMoreAbout", {
                          service: localize(service.name),
                        })}
                      >
                        {t("treatments.learnMore")}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {!visibleCategories.length && (
          <p className="mt-10 text-sm text-gray-600">
            {t("treatmentCategories.noResults")}
          </p>
        )}

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed bottom-6 right-6 z-40 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm hover:bg-[#731a2f] transition"
            aria-label={t("treatmentCategories.scrollToTop")}
          >
            {t("treatmentCategories.top")}
          </button>
        )}
      </div>
    </div>
  );
}
