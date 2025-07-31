import Link from "next/link";

export default function AddOnSection({ addOns }) {
  if (!addOns?.length) return null;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-medium mb-2">Add‑On Options</h3>
      {addOns.map((addon, idx) => (
        <div key={idx} className="mb-4">
          <p className="text-md font-semibold">{addon.name}</p>
          <p className="text-sm text-gray-700">{addon.description}</p>

          <p className="text-sm text-gray-700 mt-1">
            <span className="font-semibold">Standard:</span> {addon.standardPrice}
            {
              // Only show Exclusive Pricing if promoNote is NOT "Standard rate only"
              addon.promoNote !== "Standard rate only" && (
                <>
                  {" "} |{" "}
                  <span className="font-semibold">Exclusive Pricing:</span>{" "}
                  {addon.promoPrice
                    ? addon.promoPrice
                    : addon.promoNote
                    ? <span className="italic text-gray-500">{addon.promoNote}</span>
                    : <span className="italic text-gray-400">Not Available</span>
                  }
                </>
              )
            }
          </p>

          <Link
            href={addon.link}
            className="text-sm underline text-black mt-1 inline-block hover:text-[#731a2f]"
          >
            Learn more about {addon.name}
          </Link>
        </div>
      ))}
    </div>
  );
}