import Image from "next/image";
import { AccordionToggle } from "./AccordionToggle";

export default function TreatmentDetail({ treatment }) {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[80vh]">
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
        <div className="w-full px-6 md:px-12 py-10 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Treatments / {treatment.category} / {treatment.displayName}
            </p>
            <h1 className="text-4xl font-serif font-medium mt-2 mb-2">
              {treatment.displayName}
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Button Pricing Tiers */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="border p-4 rounded shadow-sm">
              <h2 className="text-md font-semibold">Standard</h2>
              <p className="text-gray-700">{treatment.standardPrice}</p>
              <a
                href="https://wa.me/+526642077675"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block w-full text-center bg-[#374a44] hover:bg-[#a80000] text-white font-medium py-2 rounded transition duration-200"
              >
                Book Now
              </a>
            </div>
            <div className="border p-4 rounded shadow-sm">
              <h2 className="text-md font-semibold">Members</h2>
              <p className="text-gray-700">{treatment.memberPrice}</p>
              <a
                href="/membership"
                className="mt-3 inline-block w-full text-center border border-gray-700 text-gray-800 hover:border-black hover:text-black font-medium py-2 rounded transition duration-200"
              >
                Become A Member
              </a>
            </div>
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
          <AccordionToggle title="Details" defaultOpen>
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