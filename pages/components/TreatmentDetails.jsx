import Link from "next/link";
import Image from "next/image";
import { AccordionToggle } from "./AccordionToggle";

export default function TreatmentDetail({ treatment }) {
  const showExclusivePricing =
    treatment.memberPrice &&
    treatment.memberPrice !== "Not eligible for exclusive pricing";

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[50vh]">
        {/* Left: Full Bleed Image */}
        <div className="relative w-full h-[60vh]">
          <Image
            src={treatment.image}
            alt={`Treatment image for ${treatment.displayName}`}
            fill
            className="object-cover [object-position:center_55%] [object-position:0%_60%]"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="w-full text-black px-6 md:px-12 py-5 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              <Link href="/treatments" className="hover:underline hover:text-black">
                Treatments
              </Link>{" "}
              /{" "}
              <Link
                href={`/treatments/category/${treatment.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline hover:text-black"
              >
                {treatment.category}
              </Link>{" "}
              /{" "}
              <span className="text-gray-700 underline">{treatment.displayName}</span>
            </p>

            <h1 className="text-4xl font-serif text-black font-medium mt-2 mb-2">
              {treatment.displayName}
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Pricing Tiers */}
          <div
            className={`grid ${
              showExclusivePricing ? "grid-cols-2" : "grid-cols-1"
            } gap-4 mb-6`}
          >
            {/* Standard */}
            <div className="border p-4 rounded shadow-sm">
              <h2 className="text-md font-semibold text-black">Standard</h2>
              <p className="text-gray-700">{treatment.standardPrice}</p>
              <a
                href="https://wa.me/+526642077675"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block w-full text-center bg-black hover:bg-[#731a2f] text-white font-medium py-2 rounded transition duration-200"
              >
                Book Now
              </a>
            </div>

            {/* Exclusive Pricing - only if valid */}
            {showExclusivePricing && (
              <div className="border p-4 rounded shadow-sm">
                <h2 className="text-md font-semibold text-black">Exclusive Pricing</h2>
                <p className="text-gray-700">{treatment.memberPrice}</p>
                <a
                  href="/membership"
                  className="mt-3 inline-block w-full text-center border border-gray-700 text-gray-800 hover:border-black hover:text-black font-medium py-2 rounded transition duration-200"
                >
                  Inquire
                </a>
              </div>
            )}
          </div>

          {/* Notes */}
          {treatment.notes?.length > 0 && (
            <ul className="text-sm text-gray-600 italic mb-4 space-y-1">
              {treatment.notes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          )}

          {/* Accordion Sections */}
          <AccordionToggle title="Details">
            <p className="text-gray-700">{treatment.details}</p>
          </AccordionToggle>

          {treatment.goals?.length > 0 && (
            <AccordionToggle title="Goals">
              <ul className="list-disc list-inside text-gray-700">
                {treatment.goals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </AccordionToggle>
          )}

          {treatment.treatableAreas?.length > 0 && (
            <AccordionToggle title="Treatable Areas">
              <ul className="list-disc list-inside text-gray-700">
                {treatment.treatableAreas.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </AccordionToggle>
          )}

          <AccordionToggle title="Available Locations">
            <p className="text-gray-700">Tijuana, B.C.</p>
          </AccordionToggle>
        </div>
      </div>
    </div>
  );
}