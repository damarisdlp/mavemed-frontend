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
      const treatment =
        allTreatments.find((t) => t.urlSlug === fav.treatmentSlug) ||
        allTreatments.find(
          (t) =>
            getLocalized(t.displayName || t.serviceDisplayName, locale) ===
              getLocalized(fav.serviceName, locale) ||
            t.urlSlug === fav.link?.split("/").pop()
        ) ||
        {};

      const title = getLocalized(
        treatment.displayName || treatment.serviceDisplayName || fav.serviceName || fav.optionName,
        locale
      );
      const description = getLocalized(treatment.description, locale);
      const image = treatment.images?.primary || "/placeholder.jpg";
      const slug = treatment.urlSlug || fav.treatmentSlug || fav.link || "#";

      return {
        serviceName: title,
        description,
        image,
        slug,
      };
    })
    .filter((c) => c.serviceName);

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

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-black font-serif font-medium mb-4">
        {locale === "es" ? `Tratamientos Favoritos de ${displayName}` : `${displayName}'s Favorite Treatments`}
      </h2>
      <div className="relative block md:hidden mb-8">
        <div
          ref={sliderRef}
          className="keen-slider overflow-hidden px-0.5 sm:px-1.5 mx-auto w-full max-w-[1400px]"
        >
          {favoriteCards.map((card, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center px-2">
              <div className="w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-3">
                <div className="relative h-50 w-full">
                  <Image src={card.image} alt={card.serviceName} fill className="object-cover" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="text-lg font-serif text-black font-medium mb-1">
                      {card.serviceName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{card.description}</p>
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
                      {locale === "es" ? "Reservar Ahora" : "Book Now"}
                    </button>
                    <Link
                      href={card.slug.startsWith("/treatments") ? card.slug : `/treatments/${card.slug}`}
                      className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition text-center"
                    >
                      {locale === "es" ? "Más Información" : "Learn More"}
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
              className="absolute left-0 sm:left-1 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => slider.current?.next()}
              className="absolute right-0 sm:right-1 top-[35%] sm:top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100 z-10"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
