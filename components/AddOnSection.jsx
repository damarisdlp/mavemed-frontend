import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { allTreatments } from "@/lib/data/allTreatments";

export default function AddOnSection({ addOns = [] }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";

  const labels = {
    en: {
      heading: "Add On Options",
      price: "Price:",
      promo: "Exclusive pricing:",
      learn: "Learn More About ",
    },
    es: {
      heading: "Opciones de Complemento",
      price: "Precio:",
      promo: "Precio Exclusivo:",
      learn: "Más Información Sobre ",
    },
  };
  const ui = labels[locale] || labels.en;

  const getLocalized = (field) => {
    if (field == null) return ""; // handles null / undefined

    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      return "";
    }

    return field;
  };

  const normalize = (str) => (str || "").toLowerCase().trim();

  if (!addOns.length || !allTreatments?.length) return null;

  const getNumericPrice = (priceField) => {
    const localized = getLocalized(priceField);
    if (!localized) return null;
    const cleaned = `${localized}`.replace(/[^0-9.,]/g, "").replace(/,/g, "");
    const value = parseFloat(cleaned);
    return Number.isFinite(value) ? value : null;
  };

  const treatmentMaps = useMemo(() => {
    const bySlug = new Map();
    const byName = new Map();
    allTreatments.forEach((t) => {
      if (!t) return;
      if (t.urlSlug) bySlug.set(normalize(t.urlSlug), t);
      const name = getLocalized(t.serviceDisplayName || t.displayName);
      if (name) byName.set(normalize(name), t);
    });
    return { bySlug, byName };
  }, [locale]);

  const buildOptionMap = (treatment) => {
    const map = new Map();
    treatment?.pricing?.options?.forEach((opt) => {
      const name = getLocalized(opt.optionName);
      if (name) map.set(normalize(name), opt);
    });
    return map;
  };

  return (
    <div className="mb-6 text-black">
      <h3 className="text-xl font-medium mb-2">{ui.heading}</h3>

      {addOns.map((addonRef, idx) => {
        const refName = getLocalized(
          addonRef.serviceParent || addonRef.optionName || addonRef.displayName
        );
        const slugFromLink = addonRef.link
          ? addonRef.link.split("/").filter(Boolean).pop()
          : "";
        const targetSlug = addonRef.treatmentSlug || slugFromLink;

        const addon =
          treatmentMaps.bySlug.get(normalize(targetSlug)) ||
          treatmentMaps.byName.get(normalize(refName));

        if (!addon) {
          console.warn("⚠️ No addon match found for:", addonRef.serviceParent);
          return null;
        }

        const optionMap = buildOptionMap(addon);
        const targetOptionName = getLocalized(
          addonRef.optionName || addonRef.serviceChild || addonRef.displayName
        );
        const matchedOption = optionMap.get(normalize(targetOptionName)) || null;

        const displayPrice =
          getLocalized(
            matchedOption?.optionPrice ||
              (addon?.pricing?.options || [])
                .reduce((lowest, opt) => {
                  const val = getNumericPrice(opt.optionPrice);
                  if (val == null) return lowest;
                  if (!lowest || val < lowest.val) {
                    return { val, price: opt.optionPrice };
                  }
                  return lowest;
                }, null)?.price ||
              addon?.pricing?.startingPrice
          );

        const lowestOptionForCurrency =
          (addon?.pricing?.options || []).reduce((lowest, opt) => {
            const val = getNumericPrice(opt.optionPrice);
            if (val == null) return lowest;
            if (!lowest || val < lowest.val) {
              return { val, currency: opt.optionCurrency };
            }
            return lowest;
          }, null) || null;

        const displayCurrency =
          matchedOption?.optionCurrency ||
          lowestOptionForCurrency?.currency ||
          addon?.pricing?.startingPriceCurrency;

        const promoPrice = getLocalized(matchedOption?.optionPromoPrice);
        const hasPromo = typeof promoPrice === "string" && promoPrice.trim();

        const hasMultipleOptions = (addon?.pricing?.options || []).length > 1;
        const fromLabel = hasMultipleOptions ? (locale === "es" ? "Desde " : "From ") : "";

        const localizedAddOnName =
          getLocalized(addonRef.optionName) ||
          getLocalized(addonRef.displayName) ||
          getLocalized(addon.serviceDisplayName || addon.displayName);
        const localizedDescription = getLocalized(addon.description);

        const href =
          addonRef.link ||
          (targetSlug ? `/treatments/${targetSlug}` : null);

        return (
          <div key={idx} className="mb-4">
            {/* Add on name */}
            <p className="text-md font-semibold">{localizedAddOnName}</p>

            {/* Add on description */}
            {localizedDescription && (
              <p className="text-sm text-gray-700">{localizedDescription}</p>
            )}

            {/* Pricing */}
            {displayPrice && (
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">{ui.price}</span>{" "}
                {fromLabel}
                {displayPrice} {displayCurrency}
                {hasPromo && (
                  <>
                    {" "}
                    |{" "}
                    <span className="font-semibold text-[#731a2f]">{ui.promo}</span>{" "}
                    <span className="text-[#731a2f]">
                      {promoPrice} {matchedOption.optionPromoPriceCurrency}
                    </span>
                  </>
                )}
              </p>
            )}

            {/* Link */}
            {href && (
              <Link
                href={href}
                className="text-sm underline text-black mt-1 inline-block hover:text-[#731a2f]"
              >
                {ui.learn}
                {localizedAddOnName}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
