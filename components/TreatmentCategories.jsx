import Image from "next/image";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useKeenSlider } from "keen-slider/react";
import { allTreatments } from "@/lib/data/allTreatments";
import categoryOrder from "@/lib/data/normalized/categories.json";

export default function TreatmentCategories() {
const CategorySlider = ({ services }) => {
  const router = useRouter();
  const { locale = "en" } = router;

  const getLocalized = (field) => {
    if (typeof field === "object" && field?.[locale]) return field[locale];
    if (typeof field === "object" && field?.en) return field.en;
    return field ?? "";
  };

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
                        alt={`${getLocalized(service.name)} – ${getLocalized(
                          service.description
                        )}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div className="mb-4">
                        <h3 className="text-lg text-black font-serif font-medium mb-1">
                          {getLocalized(service.name)}
                        </h3>
                        <p className="text-sm text-gray-700 line-clamp-4">
                          {getLocalized(service.description)}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            router.push(`/treatments/${service.slug}?lead=open`)
                          }
                          className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition text-center"
                          aria-label={getLocalized(
                            translatedStrings.bookService(service.name)
                          )}
                        >
                          {getLocalized(translatedStrings.bookNow)}
                        </button>

                        <Link
                          href={`/treatments/${service.slug}`}
                          className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition text-center"
                          aria-label={getLocalized(
                            translatedStrings.learnMoreAbout(service.name)
                          )}
                        >
                          {getLocalized(translatedStrings.learnMore)}
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

  // Group treatments by category
  const categoriesMap = {};
  allTreatments.forEach((t) => {
    if (!t || !t.category) return;
    const key = t.category;
    if (!categoriesMap[key]) {
      categoriesMap[key] = {
        title: t.categoryDisplayName,
        services: []
      };
    }
    const optionFields = (t.pricing?.options || []).flatMap((opt) => [
      opt.optionName,
      ...(opt.notes || []),
    ]);
    categoriesMap[key].services.push({
      name: t.displayName || t.serviceDisplayName,
      slug: t.urlSlug,
      image: t.images?.primary || "/placeholder.jpg",
      description: t.description,
      searchFields: [
        t.displayName || t.serviceDisplayName,
        t.description,
        t.details,
        ...(t.notes || []),
        ...(t.goals || []),
        ...(t.treatableAreas || []),
        ...optionFields,
      ],
    });
  });

  const categories = categoryOrder
    .map((entry) => categoriesMap[entry.slug])
    .filter(Boolean);
  const router = useRouter();
  const { locale } = router;

  const getLocalized = (field) => {
    if (typeof field === 'object' && field[locale]) return field[locale];
    if (typeof field === 'object' && field['en']) return field['en'];
    return field;
  };

  const translatedStrings = {
    bookNow: { en: "Book Now", es: "Reservear Ahora" },
    learnMore: { en: "Learn More", es: "Más Información" },
    top: { en: "↑ Top", es: "↑ Arriba" },
    scrollToTop: { en: "Scroll to top category menu", es: "Desplazarse al menú de categorías superior" },
    bookService: (serviceName) => ({
      en: `Book ${getLocalized(serviceName)} at Mave Medical Spa in Tijuana`,
      es: `Reservar ${getLocalized(serviceName)} en Mave Medical Spa en Tijuana`
    }),
    learnMoreAbout: (serviceName) => ({
      en: `Learn more about ${getLocalized(serviceName)}`,
      es: `Saber más sobre ${getLocalized(serviceName)}`
    }),
    searchPlaceholder: { en: "Search treatments", es: "Buscar tratamientos" },
    noResults: { en: "No treatments match your search.", es: "No hay tratamientos que coincidan con tu búsqueda." }
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
  const visibleCategories = categories
    .map((category) => {
      const services = category.services.filter((service) => {
        if (!normalizedQuery) return true;
        const name = normalizeText(getLocalized(service.name));
        const description = normalizeText(getLocalized(service.description));
        const extra = normalizeText(
          (service.searchFields || []).map((field) => getLocalized(field)).join(" ")
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

  return (
    <div className="bg-white scroll-smooth relative">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 sm:pt-8 md:pt-12 pb-4">
        {/* Sticky Search + Category Menu */}
        <div className="mt-6 sm:mt-8 sticky top-[145px] sm:top-[110px] bg-white z-30 border-b border-gray-200">
          <div className="py-2 sm:py-3">
            <label className="sr-only" htmlFor="treatment-search">
              {getLocalized(translatedStrings.searchPlaceholder)}
            </label>
            <input
              id="treatment-search"
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={getLocalized(translatedStrings.searchPlaceholder)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm md:text-base focus:border-black focus:outline-none"
            />
          </div>
          <div
            id="category-menu"
            className="flex flex-nowrap items-center gap-3 sm:gap-4 justify-start overflow-x-auto no-scrollbar px-3 pb-2 sm:pb-3"
          >
            {visibleCategories.map((category, i) => (
              <a
                key={i}
                href={`#${getLocalized(category.title).replace(/\s+/g, "-").toLowerCase()}`}
                className="inline-flex shrink-0 items-center text-sm md:text-base px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 text-black hover:border-black hover:text-[#731a2f] transition whitespace-nowrap min-h-[36px]"
              >
                {getLocalized(category.title)}
              </a>
            ))}
          </div>
        </div>

        {/* Services by Category */}
        {visibleCategories.map((category, i) => (
          <div
            key={i}
            id={getLocalized(category.title).replace(/\s+/g, "-").toLowerCase()}
            className="mb-16 scroll-mt-[200px] sm:scroll-mt-[210px]"
          >
            <h2
              className="text-black font-serif font-medium mb-6 leading-snug text-[clamp(1.6rem,3.8vw,2.6rem)]"
            >
              {getLocalized(category.title)}
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
                      alt={`${getLocalized(service.name)} in Tijuana – ${getLocalized(service.description)}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between min-h-[260px]">
                    <div>
                      <h3 className="text-lg text-black font-serif font-medium mb-2">
                        {getLocalized(service.name)}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {getLocalized(service.description)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => router.push(`/treatments/${service.slug}?lead=open`)}
                        className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition text-center"
                        aria-label={getLocalized(translatedStrings.bookService(service.name))}
                      >
                        {getLocalized(translatedStrings.bookNow)}
                      </button>
                      <Link
                        href={`/treatments/${service.slug}`}
                        className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition text-center"
                        aria-label={getLocalized(translatedStrings.learnMoreAbout(service.name))}
                      >
                        {getLocalized(translatedStrings.learnMore)}
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
            {getLocalized(translatedStrings.noResults)}
          </p>
        )}

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });            }}
            className="fixed bottom-6 right-6 z-40 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm hover:bg-[#731a2f] transition"
            aria-label={getLocalized(translatedStrings.scrollToTop)}
          >
            {getLocalized(translatedStrings.top)}
          </button>
        )}
      </div>
    </div>
  );
}
