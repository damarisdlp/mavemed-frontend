import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AddOnSection from "./AddOnSection";
import { optionHasPromo } from "@/lib/utils/promo";
import { formatMoney, formatMoneyRange } from "@/lib/utils/price";
import { getPackageGroupsForTreatment } from "@/lib/utils/linkedPackages";

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

  const normalizeName = (value) =>
    String(value || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const getOptionKey = (opt) => {
    const key = opt?.optionKey || getLocalized(opt?.optionName);
    return normalizeName(key);
  };

  const getPackageTitle = (value) => {
    const label = String(value || "");
    const parts = label.split(" - ");
    return (parts[0] || label).trim() || label;
  };
  const getPackageEdition = (value) => {
    const label = String(value || "");
    const parts = label.split(" - ");
    const edition = parts.slice(1).join(" - ").trim();
    return edition || label;
  };

  const pricingOptions = treatment?.pricing?.options || [];

  const registryPackageGroups = getPackageGroupsForTreatment(treatment, locale);
  const filteredPricingOptions =
    filterConfig && activeFilter !== "all"
      ? pricingOptions.filter((opt) => opt.filterGroupKey === activeFilter)
      : pricingOptions;
  const displayPricingOptions = filteredPricingOptions.filter(
    (opt) => opt.optionType !== "package"
  );
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
  const promoPackageLabel = locale === "es" ? "Paquete promocional" : "Promo package";
  const promoValidTillLabel = locale === "es" ? "Válido hasta" : "Valid until";
  const promoDetails = treatment?.promoDetails || null;
  const globalPromoValidTill = getLocalized(promoDetails?.validTill);
  const promoValidTillByName = new Map(
    (promoDetails?.options || [])
      .map((opt) => {
        const name = opt?.optionKey || getLocalized(opt?.optionName);
        const validTill = getLocalized(opt?.validTill);
        return name ? [normalizeName(name), validTill] : null;
      })
      .filter(Boolean)
  );

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
              {displayPricingOptions.map((p, idx) => {
                const localizedPrice = getLocalizedPrice(p.optionPrice);
                const localizedPromoPrice = getLocalizedPrice(p.optionPromoPrice);
                const optionCurrency = p.optionPrice?.currency || "";
                const promoCurrency =
                  p.optionPromoPrice?.currency || optionCurrency;

                const optionName = getLocalized(p.optionName);
                const optionKey = getOptionKey(p);
                const showPromo = optionHasPromo(p, locale);
                const optionValidTill =
                  promoValidTillByName.get(optionKey) || globalPromoValidTill;

                return (
                  <div
                    key={`zone-${idx}`}
                    className="flex flex-row justify-between items-start border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-[#f9f9f9]"
                  >
                    <div className="text-lg font-medium flex-1">
                      {optionName}
                      {showPromo && optionValidTill ? (
                        <p className="mt-1 text-xs text-gray-600">
                          {promoValidTillLabel} {optionValidTill}
                        </p>
                      ) : null}
                      {p.notes?.length > 0 && (
                        <ul
                          className="mt-1 text-xs italic list-disc list-outside pl-4 mr-5 text-gray-600"
                        >
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
                        <span>{localizedPrice} {optionCurrency}</span>
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

          {(() => {
            const localPackageGroups = (() => {
              const groups = new Map();
              const packageOptions = pricingOptions.filter(
                (opt) => opt.optionType === "package"
              );
              packageOptions.forEach((opt) => {
                const name = getLocalized(opt.optionName);
                if (!name) return;
                const title = getPackageTitle(name);
                const edition = getPackageEdition(name);
                const groupId = normalizeName(title) || normalizeName(name);
                const validTill =
                  promoValidTillByName.get(getOptionKey(opt)) || globalPromoValidTill;
                const priceValue = opt.optionPromoPrice ?? opt.optionPrice ?? null;
                const priceText = priceValue ? getLocalizedPrice(priceValue) : "";
                const currency = priceValue?.currency || "";
                const existing = groups.get(groupId) || {
                  packageId: groupId,
                  title,
                  validTill,
                  options: [],
                };
                existing.options.push({
                  label: edition && edition !== title ? edition : "",
                  priceText,
                  currency,
                });
                groups.set(groupId, existing);
              });
              return Array.from(groups.values());
            })();
            const allPackageGroups = (() => {
              const combined = [...localPackageGroups, ...registryPackageGroups];
              const deduped = new Map();
              combined.forEach((pkg) => {
                if (!pkg.packageId) return;
                if (!deduped.has(pkg.packageId)) deduped.set(pkg.packageId, pkg);
              });
              return Array.from(deduped.values());
            })();
            if (!allPackageGroups.length) return null;
            return (
            <div className="space-y-4 mb-6 max-w-3xl mx-auto">
              <h2 className="text-sm font-semibold text-black">
                {locale === "es"
                  ? "Paquetes de protocolo disponibles"
                  : "Available Protocol Packages"}
              </h2>
              {allPackageGroups.map((pkg) => (
                <div
                  key={pkg.packageId}
                  className="border border-[#731a2f] bg-[#731a2f] text-white p-4 rounded-lg shadow-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-1">
                    {promoPackageLabel}
                  </p>
                  {pkg.validTill ? (
                    <div className="text-xs text-white/80 mb-2">
                      {promoValidTillLabel} {pkg.validTill}
                    </div>
                  ) : null}
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm font-semibold">{pkg.title}</div>
                  </div>
                  <div className="mt-2 space-y-1 text-sm">
                    {pkg.options.map((opt, idx) => (
                      <div key={`${pkg.packageId}-${idx}`}>
                        {opt.label ? `${opt.label}: ` : ""}
                        {opt.priceText ? opt.priceText : ""}
                        {opt.currency ? ` ${opt.currency}` : ""}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            );
          })()}

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
