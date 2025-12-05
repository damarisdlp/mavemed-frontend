import Image from "next/image";
import { useRouter } from "next/router";
import AddOnSection from "./AddOnSection";

export default function PricingTable({ treatment }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";

  console.log("📌 PricingTable locale:", locale);

  const getLocalized = (field) => {
    if (field == null) return ""; // null or undefined

    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      return "";
    }

    return field;
  };

  const getLocalizedPrice = (field) => {
    if (field == null) return "";
    if (typeof field === "object") return getLocalized(field);
    return field;
  };

  const pricingOptions = treatment?.pricing?.options || [];
  const addOns = treatment?.addOns || [];

  const hasPricing = pricingOptions.length > 0;

  if (!treatment || !hasPricing) {
    return (
      <div className="w-full bg-white px-6 py-4 text-sm text-gray-700">
        {locale === "es"
          ? "No hay precios disponibles para este tratamiento."
          : "No pricing available for this treatment."}
      </div>
    );
  }

  const headingText =
    locale === "es" ? "Opciones de Precio y Complementos" : "Pricing Options and Add Ons";

  const disclaimerText =
    locale === "es"
      ? "Todos los precios se muestran en USD o MXN según se indica. Si el pago se realiza en una moneda diferente a la indicada, por ejemplo pagando en pesos un precio indicado en USD o viceversa, el precio final se calculará usando el tipo de cambio interno vigente de Mave Medical Spa al momento del pago."
      : "All prices are listed in either USD or MXN as indicated. If payment is made in a different currency than the one listed, for example paying in pesos for a USD listed price or vice versa, the final price will be calculated using Mave Medical Spa’s current internal exchange rate at the time of payment.";

  const priceLabel = locale === "es" ? "Precio:" : "Price:";
  const promoLabel = locale === "es" ? "Precio Exclusivo:" : "Exclusive pricing:";

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] mb-4">
        {/* Left: Dynamic Height Content */}
        <div className="w-full max-w-5xl mx-auto text-black px-6 md:px-12 py-5 overflow-y-auto max-h-[600px]">
          <h1 className="text-4xl font-serif font-medium mb-10">
            {headingText}
          </h1>

          {/* Package / General Zones Pricing */}
          {pricingOptions.length > 0 && (
            <div className="space-y-4 mb-4">
              {pricingOptions.map((p, idx) => {
                const localizedPrice = getLocalizedPrice(p.optionPrice);
                const localizedPromoPrice = getLocalizedPrice(
                  p.optionPromoPrice
                );

                const showPromo =
                  p.isPromoEligible === true &&
                  typeof localizedPromoPrice === "string" &&
                  localizedPromoPrice.trim() !== "";

                return (
                  <div
                    key={`zone-${idx}`}
                    className="flex flex-row justify-between items-start bg-[#f9f9f9] border p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-lg font-medium">
                      {getLocalized(p.optionName)}
                      {p.notes?.length > 0 && (
                        <ul className="mt-1 text-xs text-gray-600 italic list-inside">
                          {p.notes.map((note, i) => (
                            <li key={i}>{getLocalized(note)}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="text-sm leading-6 text-right min-w-[150px]">
                      <div className="flex justify-between gap-2">
                        <span className="font-semibold text-left">{priceLabel}</span>
                        <span>
                          {localizedPrice} {p.optionCurrency}
                        </span>
                      </div>

                      {showPromo && (
                        <div className="flex justify-between gap-2">
                          <span className="font-semibold text-left">{promoLabel}</span>
                          <span>
                            {localizedPromoPrice} {p.optionCurrency}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <p className="text-xs text-gray-600 italic mb-4">
            {disclaimerText}
          </p>

          {/* Add On Section */}
          {addOns.length > 0 && (
            <div className="mt-10">
              <AddOnSection addOns={addOns} locale={locale} />
            </div>
          )}
        </div>

        {/* Right: Dynamically Sized Image */}
        <div className="relative w-full h-[75vh]">
          <Image
            src={treatment.images?.secondary || "/placeholder.jpg"}
            alt={`Treatment image for ${getLocalized(treatment.serviceDisplayName)}`}
            fill
            className="object-cover [object-position:center_55%] [object-position:0%_100%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
