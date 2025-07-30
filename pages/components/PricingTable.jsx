export default function PricingTable({ pricing }) {
  if (!pricing?.length) return (
    <div><p>nope nothing</p></div>
  );

  return (
    <div className="mb-6 mt-8">
      <h3 className="text-xl font-medium mb-2">Pricing Options</h3>
      <ul className="space-y-2">
        {pricing.map((p, idx) => (
          <li key={idx} className="flex justify-between border-b pb-2">
            <span>{p.zone}</span>
            <span>
              Standard: {p.standardPrice} | Members: {p.promoPrice}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}