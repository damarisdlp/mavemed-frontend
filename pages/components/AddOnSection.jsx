import Link from "next/link";
import { allTreatments } from "@/data/allTreatments";

export default function AddOnSection({ addOns }) {
  if (!addOns?.length || !allTreatments?.length) return null;

  return (
    <div className="mb-6 text-black">
      <h3 className="text-xl font-medium mb-2">Add‑On Options</h3>

      {addOns.map((addonRef, idx) => {
        const addon = allTreatments.find(
          (t) =>
            t.serviceDisplayName === addonRef.serviceParent ||
            t.urlSlug === addonRef.link?.split("/").pop()
        );

        if (!addon) {
          console.warn("⚠️ No addon match found for:", addonRef.serviceParent);
          return null;
        }

        // Try to match the specific variation from pricing options
        const matchedOption =
          addon.pricing?.options?.find(
            (opt) =>
              opt.optionName === addonRef.serviceChild ||
              opt.optionName === addonRef.displayName
          ) || null;

        const displayPrice = matchedOption?.optionPrice || addon.pricing?.startingPrice;
        const displayCurrency = matchedOption?.optionCurrency || addon.pricing?.startingPriceCurrency;

        const hasPromo =
          matchedOption?.isPromoEligible &&
          matchedOption.optionPromoPrice?.trim() !== "";

        return (
          <div key={idx} className="mb-4">
            <p className="text-md font-semibold">{addonRef.displayName}</p>

            {addon.description && (
              <p className="text-sm text-gray-700">{addon.description}</p>
            )}

            {displayPrice && (
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Price:</span>{" "}
                {displayPrice} {displayCurrency}
                {hasPromo && (
                  <>
                    {" "} |{" "}
                    <span className="font-semibold">Exclusive Pricing:</span>{" "}
                    {matchedOption.optionPromoPrice} {matchedOption.optionPromoPriceCurrency}
                  </>
                )}
              </p>
            )}

            {addonRef.link && (
              <Link
                href={addonRef.link}
                className="text-sm underline text-black mt-1 inline-block hover:text-[#731a2f]"
              >
                Learn more about {addonRef.displayName}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}