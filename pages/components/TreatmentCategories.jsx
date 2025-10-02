import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { allTreatments } from "@/data/allTreatments";

export default function TreatmentCategories() {
  // Group treatments by category
  const categoriesMap = {};
  allTreatments.forEach((t) => {
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
              href={`#${category.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-sm md:text-base px-4 py-2 rounded-full border border-gray-300 text-black hover:border-black hover:text-[#731a2f] transition"
            >
              {category.title}
            </a>
          ))}
        </div>

        {/* Services by Category */}
        {categories.map((category, i) => (
          <div
            key={i}
            id={category.title.replace(/\s+/g, "-").toLowerCase()}
            className="mb-16 scroll-mt-60"
          >
            <h2 className="text-2xl text-black md:text-3xl font-serif font-medium mb-6">
              {category.title}
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
                      alt={`${service.name} in Tijuana – ${service.description}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[260px]">
                    <div>
                      <h3 className="text-lg text-black font-serif font-medium mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="https://wa.me/+526642077675"
                        className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition"
                        aria-label={`Book ${service.name} at Mave Medical Spa in Tijuana`}
                      >
                        Book Now
                      </Link>
                      <Link
                        href={`/treatments/${service.slug}`}
                        className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        Learn More
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
            aria-label="Scroll to top category menu"
          >
            ↑ Top
          </button>
        )}
      </div>
    </div>
  );
}