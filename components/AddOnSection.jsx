import Link from "next/link";
import { useRouter } from "next/router";
import { allTreatments } from "@/lib/data/allTreatments";

export default function AddOnSection({ addOns = [] }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";

  console.log("📌 AddOnSection locale:", locale);

  const getLocalized = (field) => {
    if (field == null) return ""; // handles null / undefined

    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      return "";
    }

    return field;
  };

  if (!addOns.length || !allTreatments?.length) return null;

  const heading =
    locale === "es" ? "Opciones de complemento" : "Add On Options";
  const priceLabel = locale === "es" ? "Precio:" : "Price:";
  const promoLabel =
    locale === "es" ? "Precio exclusivo:" : "Exclusive pricing:";
  const learnMorePrefix =
    locale === "es" ? "Más información sobre " : "Learn more about ";

  return (
    <div className="mb-6 text-black">
      <h3 className="text-xl font-medium mb-2">{heading}</h3>

      {addOns.map((addonRef, idx) => {
        const addon = allTreatments.find(
          (t) =>
            // if serviceDisplayName is localized, you probably want to match on urlSlug only
            t.serviceDisplayName === addonRef.serviceParent ||
            t.urlSlug === addonRef.link?.split("/").pop()
        );

        if (!addon) {
          console.warn("⚠️ No addon match found for:", addonRef.serviceParent);
          return null;
        }

        const matchedOption =
          addon.pricing?.options?.find(
            (opt) =>
              opt.optionName === addonRef.serviceChild ||
              opt.optionName === addonRef.displayName
          ) || null;

        const displayPrice =
          matchedOption?.optionPrice || addon.pricing?.startingPrice;
        const displayCurrency =
          matchedOption?.optionCurrency ||
          addon.pricing?.startingPriceCurrency;

        const hasPromo =
          matchedOption?.isPromoEligible &&
          typeof matchedOption.optionPromoPrice === "string" &&
          matchedOption.optionPromoPrice.trim() !== "";

        const localizedAddOnName = getLocalized(
          addonRef.displayName || addon.serviceDisplayName
        );
        const localizedDescription = getLocalized(addon.description);

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
                <span className="font-semibold">{priceLabel}</span>{" "}
                {displayPrice} {displayCurrency}
                {hasPromo && (
                  <>
                    {" "}
                    |{" "}
                    <span className="font-semibold">{promoLabel}</span>{" "}
                    {matchedOption.optionPromoPrice}{" "}
                    {matchedOption.optionPromoPriceCurrency}
                  </>
                )}
              </p>
            )}

            {/* Link */}
            {addonRef.link && (
              <Link
                href={addonRef.link}
                className="text-sm underline text-black mt-1 inline-block hover:text-[#731a2f]"
              >
                {learnMorePrefix}
                {localizedAddOnName}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}