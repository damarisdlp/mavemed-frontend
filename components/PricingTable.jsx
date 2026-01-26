import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AddOnSection from "./AddOnSection";
import { optionHasPromo } from "@/lib/utils/promo";
import { formatMoney, formatMoneyRange } from "@/lib/utils/price";

export default function PricingTable({ treatment }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";
  const filterConfig = treatment?.filterConfig || null;
  const [activeFilter, setActiveFilter] = useState(filterConfig?.defaultKey || "all");

  useEffect(() => {
    setActiveFilter(filterConfig?.defaultKey || "all");
  }, [filterConfig?.defaultKey, treatment?.urlSlug]);

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
    if (typeof field === "object") {
      if (field.text && typeof field.text === "object") {
        return field.text[locale] || field.text.en || "";
      }
      if ("minAmount" in field || "maxAmount" in field) {
        return formatMoneyRange(field.minAmount, field.maxAmount);
      }
      if ("amount" in field) return formatMoney(field.amount);
      return getLocalized(field);
    }
    return field;
  };

  const pricingOptions = treatment?.pricing?.options || [];
  const filteredPricingOptions =
    filterConfig && activeFilter !== "all"
      ? pricingOptions.filter((opt) => opt.filterGroupKey === activeFilter)
      : pricingOptions;
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
        <div className="w-full mx-auto text-black px-6 md:px-12 py-5 overflow-y-auto max-h-[600px] show-scrollbar">
          <h1
            className="font-serif font-medium mb-10 leading-snug text-[clamp(1.6rem,4vw,2.4rem)] break-words"
            style={{ textWrap: "balance" }}
          >
            {headingText}
          </h1>

          {/* Package / General Zones Pricing */}
          {pricingOptions.length > 0 && (
            <div className="space-y-4 mb-4 max-w-3xl mx-auto">
              {filterConfig?.filters?.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {filterConfig.filters.map((filter) => (
                    <button
                      key={filter.key}
                      type="button"
                      onClick={() => setActiveFilter(filter.key)}
                      className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
                        activeFilter === filter.key
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black/20 hover:border-black"
                      }`}
                    >
                      {getLocalized(filter.label)}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setActiveFilter("all")}
                    className="text-xs underline text-gray-600 hover:text-black ml-1"
                  >
                    {getLocalized(filterConfig.viewAllLabel) ||
                      (locale === "es" ? "Ver todo" : "View all")}
                  </button>
                </div>
              )}
              {filteredPricingOptions.map((p, idx) => {
                const localizedPrice = getLocalizedPrice(p.optionPrice);
                const localizedPromoPrice = getLocalizedPrice(p.optionPromoPrice);
                const optionCurrency = p.optionPrice?.currency || "";
                const promoCurrency =
                  p.optionPromoPrice?.currency || optionCurrency;

                const showPromo = optionHasPromo(p, locale);

                return (
                  <div
                    key={`zone-${idx}`}
                    className="flex flex-row justify-between items-start bg-[#f9f9f9] border p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-lg font-medium flex-1">
                      {getLocalized(p.optionName)}
                      {p.notes?.length > 0 && (
                        <ul className="mt-1 text-xs text-gray-600 italic list-disc list-outside pl-4 mr-5">
                          {p.notes.map((note, i) => (
                            <li key={i}>{getLocalized(note)}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="text-sm leading-6 text-right w-max flex-shrink-0">
                      <div className="flex justify-between gap-2">
                        <span className="font-semibold text-left whitespace-nowrap">
                          {priceLabel}
                        </span>
                        <span>
                          {localizedPrice} {optionCurrency}
                        </span>
                      </div>

                      {showPromo && (
                        <div className="flex justify-between gap-2 text-[#731a2f]">
                          <span className="font-semibold text-left whitespace-nowrap">
                            {promoLabel}
                          </span>
                          <span>
                            {localizedPromoPrice} {promoCurrency}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <p className="text-xs text-gray-600 italic mb-4">
            {disclaimerText}
          </p>
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
