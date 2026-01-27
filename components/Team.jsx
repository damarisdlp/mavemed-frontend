import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { allStaff } from "@/lib/data/allStaff";
import { useTranslation } from "next-i18next";

export default function Team() {
  const router = useRouter();
  const { t, i18n } = useTranslation("team");
  const currentLocale =
    (typeof router?.locale === "string" && router.locale) ||
    (typeof i18n?.language === "string" && i18n.language) ||
    "en";

  const getLocalized = (field) => {
    if (field && typeof field === "object") {
      return (
        field[currentLocale] ||
        field.en ||
        Object.values(field)[0] ||
        ""
      );
    }
    return field ?? "";
  };

  // Group staff by category (not title)
  const categoriesMap = {};
  allStaff.forEach((s) => {
    const categoryLabel = getLocalized(s.category || s.title || "Team");
    const title = getLocalized(s.title);
    const displayName = getLocalized(s.displayName);
    const bio = getLocalized(s.bio);
    const key = categoryLabel || "Team";
    if (!categoriesMap[key]) {
      categoriesMap[key] = {
        category: key,
        staff: []
      };
    }
    categoriesMap[key].staff.push({
      name: displayName,
      slug: s.name,
      image: s.image || "/placeholder.jpg",
      title,
      description: bio
    });
  });

  const categories = Object.values(categoriesMap);
  const learnMoreLabel =
    currentLocale?.startsWith("es")
      ? t("team.learnMore", { lng: "es", defaultValue: "Más Información" })
      : t("team.learnMore", { lng: "en", defaultValue: "Learn More" });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white scroll-smooth relative">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        {/* Sticky Category Menu */}
        <div
          id="category-menu"
          className="flex flex-nowrap items-center gap-3 sm:gap-4 mb-12 justify-start sticky top-[110px] sm:top-[113px] bg-white z-30 py-2 sm:py-3 border-b border-gray-200 overflow-x-auto no-scrollbar px-3"
        >
          {categories.map((category, i) => (
            <CategoryLink key={i} category={category.category} />
          ))}
        </div>

        {/* Staff by Category */}
        {categories.map((category, i) => (
          <CategorySection
            key={i}
            category={category.category}
            staff={category.staff}
            learnMoreLabel={learnMoreLabel}
          />
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm hover:bg-[#731a2f] transition"
          aria-label="Scroll to top of page"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

function CategoryLink({ category }) {
  const categorySlug = (category || "team")
    .toString()
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <a
      href={`#${categorySlug}`}
      className="text-sm md:text-base px-4 py-2 rounded-full border border-gray-300 text-black hover:border-black hover:text-[#731a2f] transition"
    >
      {category}
    </a>
  );
}

function CategorySection({ category, staff, learnMoreLabel }) {
  const categorySlug = (category || "team")
    .toString()
    .replace(/\s+/g, "-")
    .toLowerCase();

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
    <div id={categorySlug} className="mb-16 scroll-mt-60">
      <h2
        className="text-black font-serif font-medium mb-6 leading-snug text-[clamp(1.8rem,4vw,2.6rem)] whitespace-nowrap"
        style={{ textWrap: "balance" }}
      >
        {category}
      </h2>

      {/* Mobile slider, now matches ReviewsSection wrapper + arrows */}
      <div className="md:hidden">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[1100px]">
            <div ref={sliderRef} className="keen-slider overflow-hidden w-full">
              {staff.map((staffMember, j) => (
                <div
                  key={j}
                  className="keen-slider__slide px-2 flex justify-center"
                >
                  <div className="w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px]">
                    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                      <div className="relative h-[300px] w-full">
                        <Image
                          src={staffMember.image}
                          alt={`${staffMember.name} in Tijuana, ${staffMember.title}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-4 text-center">
                        <h3 className="text-lg text-black font-serif font-medium mb-1">
                          {staffMember.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {staffMember.title}
                        </p>

                        <Link
                          href={`/ourteam/${staffMember.slug.toLowerCase()}`}
                          className="inline-flex items-center justify-center border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition w-full"
                          aria-label={`${learnMoreLabel} ${staffMember.name}`}
                        >
                          {learnMoreLabel}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {staff.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => sliderInstanceRef.current?.prev()}
                  className="
                    absolute
                    -left-3 md:-left-6
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
                    -right-3 md:-right-6
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

      {/* Desktop grid, unchanged */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {staff.map((staffMember, j) => (
          <div
            key={j}
            className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-[420px] w-full">
              <Image
                src={staffMember.image}
                alt={`${staffMember.name} in Tijuana – ${staffMember.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex-col justify-between text-center">
              <div>
                <h3 className="text-lg text-black font-serif font-medium mb-1">
                  {staffMember.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {staffMember.title}
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <Link
                  href={`/ourteam/${staffMember.slug.toLowerCase()}`}
                  className="inline-block border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
                  aria-label={`${learnMoreLabel} ${staffMember.name}`}
                >
                  {learnMoreLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}