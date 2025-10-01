import Image from "next/image";
import { treatments } from "@/data/treatments";
import AddOnSection from "./AddOnSection";

export default function PricingTable({ treatment }) {
  if (!treatment || !treatment.pricing?.length) {
    return <div><p>No pricing available.</p></div>;
  }

  const pricing = treatment.pricing;
  const addOns = treatment.addOns;

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[80vh]">
        
        {/* Left: Scrollable Content */}
        <div className="w-full text-black px-6 md:px-12 py-5 overflow-y-scroll h-[80vh]">
          <h1 className="text-4xl font-serif font-medium mb-3">
            Pricing Options & Packages
          </h1>
          <p className="text-sm text-gray-600 italic mb-4">
            All prices listed are in either USD or MXN as indicated. If payment is made in a different currency than the one listed (e.g., paying in pesos for a USD-listed price or vice versa), the final price will be calculated using Mave Medical Spa’s current internal exchange rate at the time of payment.
          </p>

          <div className="space-y-4">
            {pricing.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-row justify-between items-start bg-[#f9f9f9] border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Zone Name */}
                <div className="text-lg font-medium">{p.zone}</div>

                {/* Pricing Info */}
                <div className="text-sm leading-6 text-left max-w-[60%]">
                  {/* Standard Price */}
                  <p>
                    <span className="font-semibold">Standard:</span> {p.standardPrice}
                  </p>

                  {/* Exclusive Price if valid */}
                  {p.promoPrice && p.memberPrice !== "Not eligible for exclusive pricing" && (
                    <p>
                      <span className="font-semibold">Exclusive Pricing:</span> {p.promoPrice}
                    </p>
                  )}

                  {/* Promo Note if not "Standard rate only" */}
                  {p.promoNote &&
                    p.promoNote !== "Standard rate only" && (
                      <ul className="mt-1 text-xs text-gray-600 italic list-disc list-inside">
                        {Array.isArray(p.promoNote)
                          ? p.promoNote.map((note, i) => <li key={i}>{note}</li>)
                          : <li>{p.promoNote}</li>}
                      </ul>
                  )}

                  {/* Extra Notes */}
                  {p.notes?.length > 0 && (
                    <ul className="mt-1 text-xs text-gray-600 italic  list-inside">
                      {p.notes.map((note, i) => (
                        <li key={i}>{note}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add-On Section */}
          {addOns?.length > 0 && (
            <div className="mt-10">
              <AddOnSection addOns={addOns} />            
              </div>
          )}
        </div>

        {/* Right: Static Image */}
        <div className="relative w-full h-[80vh]">
          <Image
            src={treatment.image2}
            alt={`Treatment image for ${treatment.displayName}`}
            fill
            className="object-cover [object-position:center_10%] [object-position:0%_60%]"
            priority
          />
        </div>
      </div>
    </div>
  );
}