import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { allTreatments } from "@/lib/data/allTreatments";

const getLocalized = (field, locale) => {
  if (field && typeof field === "object") {
    return field[locale] || field.en || Object.values(field)[0] || "";
  }
  return field ?? "";
};

export default function StaffFavorites({ favorites = [], locale = "en", displayName = "" }) {
  if (!favorites.length) return null;

  const favoriteCards = favorites.map((fav) => {
    const serviceName = getLocalized(fav.serviceName, locale);
    const match =
      allTreatments.find(
        (t) =>
          getLocalized(t.serviceDisplayName, locale) === serviceName ||
          t.urlSlug === fav.link?.split("/").pop()
      ) || {};
    const description = getLocalized(match.description, locale);
    const image = match.images?.primary || "/placeholder.jpg";
    const slug = match.urlSlug || fav.link || "#";
    const startingPrice = match?.pricing?.startingPrice
      ? `${getLocalized(match.pricing.startingPrice, locale)} ${match.pricing.startingPriceCurrency || ""}`.trim()
      : "";
    const promoPrice = match?.promoDetails?.options?.[0]?.optionPromoPrice
      ? `${match.promoDetails.options[0].optionPromoPrice}${
          match.promoDetails.options[0].optionPromoPriceCurrency
            ? ` ${match.promoDetails.options[0].optionPromoPriceCurrency}`
            : ""
        }`
      : "";

    return {
      serviceName,
      description,
      image,
      slug,
      startingPrice,
      promoPrice,
    };
  });

  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1.05,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <div className="mt-12">
      <h2 className="text-2xl text-black font-serif font-medium mb-4">
        {locale === "es" ? `Tratamientos Favoritos de ${displayName}` : `${displayName}'s Favorite Treatments`}
      </h2>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {favoriteCards.map((card, idx) => (
            <div key={idx} className="keen-slider__slide px-2">
              <div className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={card.image} alt={card.serviceName} fill className="object-cover" />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div>
                    <h3 className="text-lg text-black font-serif font-medium">
                      {card.serviceName}
                    </h3>
                    {card.promoPrice ? (
                      <p className="text-[#731a2f] text-sm font-semibold">
                        {locale === "es" ? "Precio exclusivo:" : "Exclusive price:"} {card.promoPrice}
                      </p>
                    ) : card.startingPrice ? (
                      <p className="text-gray-700 text-sm">
                        {locale === "es" ? "Desde" : "From"} {card.startingPrice}
                      </p>
                    ) : null}
                    {card.description && (
                      <p className="text-sm text-gray-700 mt-2">{card.description}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <button
                      type="button"
                      onClick={() => {
                        const target = card.slug.startsWith("/treatments")
                          ? card.slug
                          : `/treatments/${card.slug}`;
                        window.location.href = `${target}?lead=open`;
                      }}
                      className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition text-center"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => slider.current?.next()}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 text-gray-700 rounded-full shadow px-3 py-2 hover:bg-gray-100"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
