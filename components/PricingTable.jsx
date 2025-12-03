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
    locale === "es" ? "Opciones de precio y complementos" : "Pricing Options and Add Ons";

  const disclaimerText =
    locale === "es"
      ? "Todos los precios se muestran en USD o MXN según se indica. Si el pago se realiza en una moneda diferente a la indicada, por ejemplo pagando en pesos un precio indicado en USD o viceversa, el precio final se calculará usando el tipo de cambio interno vigente de Mave Medical Spa al momento del pago."
      : "All prices are listed in either USD or MXN as indicated. If payment is made in a different currency than the one listed, for example paying in pesos for a USD listed price or vice versa, the final price will be calculated using Mave Medical Spa’s current internal exchange rate at the time of payment.";

  const priceLabel = locale === "es" ? "Precio:" : "Price:";
  const promoLabel = locale === "es" ? "Precio exclusivo:" : "Exclusive pricing:";

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
        {/* Left: Dynamic Height Content */}
        <div className="w-full max-w-3xl mx-auto text-black px-6 md:px-12 py-5">
          <h1 className="text-4xl font-serif font-medium mb-3">
            {headingText}
          </h1>
          <p className="text-sm text-gray-600 italic mb-4">
            {disclaimerText}
          </p>

          {/* Package / General Zones Pricing */}
          {pricingOptions.length > 0 && (
            <div className="space-y-4 mb-8">
              {pricingOptions.map((p, idx) => {
                const showPromo =
                  p.isPromoEligible === true &&
                  typeof p.optionPromoPrice === "string" &&
                  p.optionPromoPrice.trim() !== "";

                return (
                  <div
                    key={`zone-${idx}`}
                    className="flex flex-row justify-between items-start bg-[#f9f9f9] border p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-lg font-medium">
                      {getLocalized(p.optionName)}
                      {p.notes?.length > 0 && (
                        <ul className="mt-1 text-xs text-gray-600 italic list-disc list-inside">
                          {p.notes.map((note, i) => (
                            <li key={i}>{getLocalized(note)}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="text-sm leading-6 text-right min-w-[180px]">
                      <div className="flex justify-between gap-2">
                        <span className="font-semibold text-left">{priceLabel}</span>
                        <span>
                          {p.optionPrice} {p.optionCurrency}
                        </span>
                      </div>

                      {showPromo && (
                        <div className="flex justify-between gap-2">
                          <span className="font-semibold text-left">{promoLabel}</span>
                          <span>
                            {p.optionPromoPrice} {p.optionCurrency}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Add On Section */}
          {addOns.length > 0 && (
            <div className="mt-10">
              <AddOnSection addOns={addOns} locale={locale} />
            </div>
          )}
        </div>

        {/* Right: Dynamically Sized Image */}
        <div className="relative w-full h-full min-h-[400px] md:min-h-[600px]">
          <Image
            src={treatment.images?.secondary || "/placeholder.jpg"}
            alt={`Treatment image for ${getLocalized(treatment.serviceDisplayName)}`}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}