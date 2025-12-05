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
    locale === "es" ? "Opciones de Complemento" : "Add On Options";
  const priceLabel = locale === "es" ? "Precio:" : "Price:";
  const promoLabel =
    locale === "es" ? "Precio Exclusivo:" : "Exclusive pricing:";
  const learnMorePrefix =
    locale === "es" ? "Más Información Sobre " : "Learn More About ";

  return (
    <div className="mb-6 text-black">
      <h3 className="text-xl font-medium mb-2">{heading}</h3>

      {addOns.map((addonRef, idx) => {
        const addon = allTreatments.find((t) => {
          if (!t) return false;
          const refName = getLocalized(addonRef.serviceParent || addonRef.displayName);
          const serviceName = getLocalized(t.serviceDisplayName || t.displayName);
          const slugMatch = t.urlSlug === addonRef.link?.split("/").pop();
          const nameMatch =
            serviceName &&
            refName &&
            serviceName.toLowerCase() === refName.toLowerCase();
          return slugMatch || nameMatch;
        });

        if (!addon) {
          console.warn("⚠️ No addon match found for:", addonRef.serviceParent);
          return null;
        }

        const matchedOption =
          addon?.pricing?.options?.find((opt) => {
            const optName = getLocalized(opt.optionName);
            const targetName = getLocalized(addonRef.serviceChild || addonRef.displayName);
            return (
              optName &&
              targetName &&
              optName.toLowerCase() === targetName.toLowerCase()
            );
          }) || null;

        const displayPrice =
          matchedOption?.optionPrice || addon?.pricing?.startingPrice;
        const displayCurrency =
          matchedOption?.optionCurrency ||
          addon?.pricing?.startingPriceCurrency;

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
