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
            Standard: {addon.standardPrice} | Members: {addon.promoPrice}
          </p>
          <Link
            href={addon.link}
            className="text-sm underline text-black mt-1 inline-block hover:text-[#a80000]"
          >
            Learn more about {addon.name}
          </Link>
        </div>
      ))}
    </div>
  );
}