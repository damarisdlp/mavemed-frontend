import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { allTreatments } from "@/lib/data/allTreatments";

export default function TreatmentCategories() {
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
    categoriesMap[key].services.push({
      name: t.displayName || t.serviceDisplayName,
      slug: t.urlSlug,
      image: t.images?.primary || "/placeholder.jpg",
      description: t.description
    });
  });

  const categories = Object.values(categoriesMap);

  const { locale } = useRouter();

  const getLocalized = (field) => {
    if (typeof field === 'object' && field[locale]) return field[locale];
    if (typeof field === 'object' && field['en']) return field['en'];
    return field;
  };

  const translatedStrings = {
    bookNow: { en: "Book Now", es: "Reservar Ahora" },
    learnMore: { en: "Learn More", es: "Saber Más" },
    top: { en: "↑ Top", es: "↑ Arriba" },
    scrollToTop: { en: "Scroll to top category menu", es: "Desplazarse al menú de categorías superior" },
    bookService: (serviceName) => ({
      en: `Book ${getLocalized(serviceName)} at Mave Medical Spa in Tijuana`,
      es: `Reservar ${getLocalized(serviceName)} en Mave Medical Spa en Tijuana`
    }),
    learnMoreAbout: (serviceName) => ({
      en: `Learn more about ${getLocalized(serviceName)}`,
      es: `Saber más sobre ${getLocalized(serviceName)}`
    })
  };

  // Show/hide scroll-to-top button
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
      <div className="container mx-auto px-4 pt-12 pb-4">

        {/* Sticky Category Menu */}
        <div
          id="category-menu"
          className="flex flex-wrap gap-4 mb-12 justify-center sticky top-[90px] bg-white z-20 py-4 border-b border-gray-200"
        >
          {categories.map((category, i) => (
            <a
              key={i}
              href={`#${getLocalized(category.title).replace(/\s+/g, "-").toLowerCase()}`}
              className="text-sm md:text-base px-4 py-2 rounded-full border border-gray-300 text-black hover:border-black hover:text-[#731a2f] transition"
            >
              {getLocalized(category.title)}
            </a>
          ))}
        </div>

        {/* Services by Category */}
        {categories.map((category, i) => (
          <div
            key={i}
            id={getLocalized(category.title).replace(/\s+/g, "-").toLowerCase()}
            className="mb-16 scroll-mt-60"
          >
            <h2 className="text-2xl text-black md:text-3xl font-serif font-medium mb-6">
              {getLocalized(category.title)}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
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
                      <Link
                        href="https://wa.me/+526642077675"
                        className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition text-center"
                        aria-label={getLocalized(translatedStrings.bookService(service.name))}
                      >
                        {getLocalized(translatedStrings.bookNow)}
                      </Link>
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
