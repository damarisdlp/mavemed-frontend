import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { allTreatments } from "@/lib/data/allTreatments";
import { useRouter } from "next/router";

const getLocalized = (field, locale) => {
  if (field && typeof field === "object") {
    return field[locale] || field.en || Object.values(field)[0] || "";
  }
  return field ?? "";
};

export default function StaffFavorites({ favorites = [], locale = "en", displayName = "" }) {
  if (!favorites.length) return null;
  const router = useRouter();

  const favoriteCards = favorites
    .map((fav) => {
      const serviceName = getLocalized(fav.serviceName, locale);
      const match =
        allTreatments.find(
          (t) =>
            getLocalized(t.serviceDisplayName, locale) === serviceName ||
            getLocalized(t.displayName, locale) === serviceName ||
            t.urlSlug === fav.link?.split("/").pop()
        ) || {};
      const title = getLocalized(match.displayName || match.serviceDisplayName || serviceName, locale);
      const description = getLocalized(match.description, locale);
      const image = match.images?.primary || "/placeholder.jpg";
      const slug = match.urlSlug || fav.link || "#";
      return {
        serviceName: title,
        description,
        image,
        slug,
      };
    })
    .filter((c) => c.serviceName);

  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.05, spacing: 18 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2.65, spacing: 22 },
      },
    },
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-black font-serif font-medium mb-4">
        {locale === "es" ? `Tratamientos favoritos de ${displayName}` : `${displayName}'s Favorite Treatments`}
      </h2>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {favoriteCards.map((card, idx) => (
            <div key={idx} className="keen-slider__slide min-h-[475px] flex p-1">
              <div className="mx-3 flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full">
                  <Image
                    src={card.image}
                    alt={card.serviceName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif text-black font-medium mb-1">
                      {card.serviceName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const target = card.slug.startsWith("/treatments")
                          ? card.slug
                          : `/treatments/${card.slug}`;
                        router?.push
                          ? router.push(`${target}?lead=open`)
                          : (window.location.href = `${target}?lead=open`);
                      }}
                      className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] text-center"
                    >
                      {locale === "es" ? "Reservar" : "Book Now"}
                    </button>
                    <Link
                      href={
                        card.slug.startsWith("/treatments")
                          ? card.slug
                          : `/treatments/${card.slug}`
                      }
                      className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition text-center"
                    >
                      {locale === "es" ? "Más información" : "Learn More"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {slider && favoriteCards.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => slider.current?.prev()}
              className="absolute left-0 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => slider.current?.next()}
              className="absolute right-0 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
