// components/TreatmentsSection.jsx

import Link from "next/link";

const treatments = [
  { title: "Botox", slug: "botox", desc: "Smooth expression lines with precision" },
  { title: "Hyaluronic Acid Fillers", slug: "fillers", desc: "Restore volume, balance, and facial harmony" },
  { title: "PDO Threads", slug: "pdo-threads", desc: "Lift and firm without surgery" },
  { title: "RF Microneedling", slug: "rf-microneedling", desc: "Deep collagen stimulation with Scarlet S" },
  { title: "Hydrating Facials", slug: "facials", desc: "Glow, refresh, reset" },
  { title: "Biostimulators", slug: "biostimulators", desc: "Sculptra, HarmonyCA, Rejuran & PDRN" },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Top Aesthetic Treatments We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {treatments.map((item, i) => (
            <Link
              key={i}
              href={`/services/${item.slug}`}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition block"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}