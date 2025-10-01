import Link from "next/link";
import { allTreatments } from "@/data/allTreatments";

export default function AddOnSection({ addOns }) {
  if (!addOns?.length || !allTreatments?.length) return null;

  return (
    <div className="mb-6 text-black">
      <h3 className="text-xl font-medium mb-2">Add‑On Options</h3>

      {addOns.map((addonRef, idx) => {
        const addon =
          allTreatments.find((t) =>
            t.displayName === addonRef.displayName ||
            t.urlSlug === addonRef.link?.split("/").pop()
          );

        if (!addon) {
          console.warn("No addon match found for:", addonRef.displayName);
          return null;
        }

        return (
          <div key={idx} className="mb-4">
            <p className="text-md font-semibold">
              {addonRef.displayName}
            </p>

            <p className="text-sm text-gray-700">{addon.description}</p>

            {addon?.pricing && (
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Price:</span>{" "}
                {addon.pricing.startingPrice} {addon.pricing.startingPriceCurrency}
                {addon.isPromoEligible && addon.pricing.promoPrice && (
                  <>
                    {" "} |{" "}
                    <span className="font-semibold">Exclusive Pricing:</span>{" "}
                    {addon.pricing.promoPrice} {addon.pricing.promoPriceCurrency}

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