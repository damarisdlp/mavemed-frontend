import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AccordionToggle } from "./AccordionToggle";

export default function TreatmentDetails({ treatment }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";

  console.log("🔥 TreatmentDetails locale:", locale);

  const getLocalized = (field) => {
    if (field == null) return ""; // handles null and undefined

    // If it is a localized object like { en: "...", es: "..." }
    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      // Explicitly avoid returning the object itself
      return "";
    }

    // For plain strings or numbers
    return field;
  };

  const getLocalizedPrice = (field) => {
    if (field == null) return "";
    if (typeof field === "object") {
      return getLocalized(field);
    }
    return field;
  };

  const pricing = treatment?.pricing || {};
  const localizedPromoPrice = getLocalizedPrice(pricing.promoPrice);
  const hasPromo =
    treatment?.isPromoEligible === true &&
    typeof localizedPromoPrice === "string" &&
    localizedPromoPrice.trim() !== "";

  const parsePriceValue = (priceString) => {
    const priceText = getLocalizedPrice(priceString);
    if (typeof priceText !== "string") return Infinity;
    const numeric = parseFloat(priceText.replace(/[^0-9.]/g, ""));
    return Number.isFinite(numeric) ? numeric : Infinity;
  };

  const priceCandidates = [];
  if (pricing?.startingPrice) {
    priceCandidates.push({
      value: parsePriceValue(pricing.startingPrice),
      display: `${getLocalizedPrice(pricing.startingPrice)} ${
        pricing.startingPriceCurrency || ""
      }`.trim()
    });
  }
  (pricing?.options || []).forEach((opt) => {
    if (opt?.optionPrice) {
      priceCandidates.push({
        value: parsePriceValue(opt.optionPrice),
        display: `${getLocalizedPrice(opt.optionPrice)} ${
          opt.optionCurrency || ""
        }`.trim()
      });
    }
  });

  const sortedPrices = priceCandidates.filter((p) => p.value !== Infinity).sort((a, b) => a.value - b.value);
  const lowestPriceDisplay =
    sortedPrices[0]?.display ||
    `${pricing.startingPrice || ""} ${pricing.startingPriceCurrency || ""}`.trim();
  const showStartingLabel = sortedPrices.length > 1;
  const startingPriceText = showStartingLabel
    ? `${locale === "es" ? "Desde" : "Starting from"} ${lowestPriceDisplay}`
    : lowestPriceDisplay;

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[50vh]">
        {/* Image */}
        <div className="relative w-full h-[60vh]">
          <Image
            src={treatment.images?.primary || "/placeholder.jpg"}
            alt={`Treatment image for ${getLocalized(
              treatment.serviceDisplayName
            )}`}
            fill
            className="object-cover [object-position:center_55%] [object-position:0%_60%]"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full text-black px-6 md:px-12 py-5 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              <Link
                href="/treatments"
                className="hover:underline hover:text-black"
              >
                {locale === "es" ? "Tratamientos" : "Treatments"}
              </Link>{" "}
              /{" "}
              <Link
                href={`/treatments/#${getLocalized(
                  treatment.categoryDisplayName
                )
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:underline hover:text-black"
              >
                {getLocalized(treatment.categoryDisplayName)}
              </Link>{" "}
              /{" "}
              <Link
                href={`/treatments/${treatment.urlSlug}`}
                className="text-gray-700 underline"
              >
                {getLocalized(treatment.serviceDisplayName)}
              </Link>{" "}
            </p>

            <h1 className="text-4xl font-serif text-black font-medium mt-2 mb-2">
              {getLocalized(treatment.serviceDisplayName)}
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              {getLocalized(treatment.description)}
            </p>
          </div>

          {/* Pricing */}
          <div
            className={`grid ${
              hasPromo ? "grid-cols-2" : "grid-cols-1"
            } gap-4 mb-6`}
          >
            <div className="border p-4 rounded shadow-sm">
              <h2 className="text-md font-semibold text-black">
                {locale === "es" ? "Precio" : "Price"}
              </h2>
              <p className="text-gray-700">
                {startingPriceText}
              </p>
              <a
                href="https://wa.me/+526642077675"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block w-full text-center bg-black hover:bg-[#731a2f] text-white font-medium py-2 rounded transition duration-200"
              >
                {locale === "es" ? "Agendar" : "Book Now"}
              </a>
            </div>

            {hasPromo && (
              <div className="border p-4 rounded shadow-sm">
                <h2 className="text-md font-semibold text-black">
                  {locale === "es"
                    ? "Precio Exclusivo"
                    : "Exclusive Pricing"}
                </h2>
                <p className="text-gray-700">
                  {localizedPromoPrice} {pricing.promoPriceCurrency}
                </p>
                <a
                  href="https://wa.me/+526642077675"
                  className="mt-3 inline-block w-full text-center border border-gray-700 text-gray-800 hover:bg-[#731a2f] hover:text-white font-medium py-2 rounded transition duration-200"
                >
                  {locale === "es" ? "Más Información" : "Inquire"}
                </a>
              </div>
            )}
          </div>

          {/* Notes */}
          {treatment.notes?.length > 0 && (
            <ul className="text-sm text-gray-600 italic mb-4 space-y-1 list-disc list-outside pl-5">
              {treatment.notes.map((note, idx) => (
                <li key={idx}>{getLocalized(note)}</li>
              ))}
            </ul>
          )}

          {/* Accordion Details */}
          {treatment.details && (
            <AccordionToggle
              title={locale === "es" ? "Detalles" : "Details"}
            >
              <p className="text-gray-700">
                {getLocalized(treatment.details)}
              </p>
            </AccordionToggle>
          )}

          {treatment.goals?.length > 0 && (
            <AccordionToggle
              title={locale === "es" ? "Objetivos" : "Goals"}
            >
              <ul className="list-disc list-inside text-gray-700">
                {treatment.goals.map((goal, idx) => (
                  <li key={idx}>{getLocalized(goal)}</li>
                ))}
              </ul>
            </AccordionToggle>
          )}

          {treatment.treatableAreas?.length > 0 && (
            <AccordionToggle
              title={
                locale === "es"
                  ? "Zonas Tratables"
                  : "Treatable Areas"
              }
            >
              <ul className="list-disc list-inside text-gray-700">
                {treatment.treatableAreas.map((area, idx) => (
                  <li key={idx}>{getLocalized(area)}</li>
                ))}
              </ul>
            </AccordionToggle>
          )}

          <AccordionToggle
            title={
              locale === "es"
                ? "Sucursales Disponibles"
                : "Available Locations"
            }
          >
            <p className="text-gray-700">Tijuana, B.C.</p>
          </AccordionToggle>
        </div>
      </div>
    </div>
  );
}
