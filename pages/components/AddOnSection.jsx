import Link from "next/link";

export default function AddOnSection({ addOns, treatments }) {
  if (!addOns?.length || !treatments?.length) return null;

  return (
    <div className="mb-6 text-black">
      <h3 className="text-xl font-medium mb-2">Add‑On Options</h3>

      {addOns.map((addonRef, idx) => {
        const addon = treatments.find((t) => t.displayName === addonRef.name);
        if (!addon) return null;

        return (
          <div key={idx} className="mb-4">
            <p className="text-md font-semibold">{addonRef.displayName}</p>
            <p className="text-sm text-gray-700">{addon.description}</p>

            <p className="text-sm text-gray-700 mt-1">
              <span className="font-semibold">Standard:</span> {addon.standardPrice}
              {addon.isPromoEligible !== false && addon.memberPrice && (
                <>
                  {" "} |{" "}
                  <span className="font-semibold">Exclusive Pricing:</span> {addon.memberPrice}
                </>
              )}
            </p>

            {addonRef.link && (
              <Link
                href={addonRef.link}
                className="text-sm underline text-black mt-1 inline-block hover:text-[#731a2f]"
              >
                Learn more about {addon.displayName}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}