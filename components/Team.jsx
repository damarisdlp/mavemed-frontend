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
      ? t("team.learnMore", { lng: "es", defaultValue: "Saber Más" })
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
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        {/* Sticky Category Menu */}
        <div
          id="category-menu"
          className="flex flex-nowrap items-center gap-3 sm:gap-4 mb-12 justify-start sticky top-[102px] sm:top-[95px] bg-white z-30 py-2 sm:py-3 border-b border-gray-200 overflow-x-auto no-scrollbar px-3"
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

  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  });

  return (
    <div
      id={categorySlug}
      className="mb-16 scroll-mt-60"
    >
      <h2 className="text-2xl text-black md:text-3xl font-serif font-medium mb-6">
        {category}
      </h2>

      {/* Mobile slider */}
      <div className="relative block md:hidden mb-8">
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {staff.map((staffMember, j) => (
            <div key={j} className="keen-slider__slide flex justify-center px-2">
              <div className="w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-3">
                <div className="relative h-[420px] w-full">
                  <Image
                    src={staffMember.image}
                    alt={`${staffMember.name} in Tijuana – ${staffMember.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center flex flex-col gap-2 flex-1 justify-between">
                  <div>
                    <h3 className="text-lg text-black font-serif font-medium mb-1">
                      {staffMember.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {staffMember.title}
                    </p>
                  </div>
                  <div className="flex justify-center">
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
            </div>
          ))}
        </div>
        {slider && (
          <>
            <button
              type="button"
              onClick={() => slider.current?.prev()}
              className="absolute left-3 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => slider.current?.next()}
              className="absolute right-3 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Desktop grid */}
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
