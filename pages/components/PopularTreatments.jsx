import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";
import { popularTreatments } from "@/data/treatments";

const treatments = [
  {
    title: "Botox Wrinkle Reducers",
    slug: "botulinum-toxin",
    image: "/botox.jpg",
    description:
      "Reduce frown lines, forehead creases, and crow’s feet with FDA‑approved Botox treatments for a smoother, youthful appearance.",
  },
  {
    title: "Hyaluronic Acid Lip Fillers",
    slug: "hyaluronic-filler",
    image: "/fillers.jpg",
    description:
      "Restore and add volume and contour lips using hyaluronic acid dermal fillers with immediate visible results.",
  },
  {
    title: "Sculptra PLLA Collagen Stimulator",
    slug: "sculptra",
    image: "/sculptra.jpg",
    description:
      "Stimulate natural collagen production with Sculptra injections for long‑term volume restoration and firmer, youthful skin.",
  },
  {
    title: "Microneedling Skin Renewal",
    slug: "microneedling",
    image: "/microneedling.jpg",
    description:
      "Stimulate the skin’s natural healing process using microneedling technology to reduce fine lines, pores and scarring.",
  },
  {
    title: "Microneedling with Radio Frequency (Scarlet S RF)",
    slug: "rf-microneedling",
    image: "/rf-microneedling.jpg",
    description:
      "Precision microneedling to rejuvenate skin, stimulate collagen, refine texture, shrink pores, and reduce scars.",
  },
  {
    title: "CO₂ Laser Resurfacing (AcuPulse)",
    slug: "co2-laser",
    image: "/laser-co2.jpg",
    description:
      "Fractional CO₂ laser for treating sun damage, deep wrinkles, texture, pigmentation, and skin renewal.",
  },
  {
    title: "HydraFacial MD (Face & Back)",
    slug: "hydrafacial",
    image: "/hydrafacial.jpg",
    description:
      "Vortex‑powered deep cleansing, exfoliation, extraction, and hydration for radiant, smooth skin.",
  },
  {
    title: "Laser Hair Removal (Soprano Titanium ICE)",
    slug: "laser-hair-removal",
    image: "/hair-removal.jpg",
    description:
      "Pain‑free permanent hair reduction with Alma Soprano Titanium ICE laser, suitable for all skin types.",
  },
  {
    title: "IPL Photofacial (Harmony XL)",
    slug: "ipl",
    image: "/ipl.jpg",
    description:
      "Intense pulsed light treatment to correct pigmentation, rosacea, sun spots, and improve skin clarity.",
  },
  {
    title: "Radio Frequency Body Sculpting",
    slug: "venus-freeze",
    image: "/radiofrequency.jpg",
    description:
      "Pain‑free radiofrequency therapy targeting localized fat, fibrosis, and laxity to tighten skin and smooth surfaces.",
  },
  {
    title: "PDO Thread Lift Skin Tightening",
    slug: "pdo-threads",
    image: "/threads.jpg",
    description:
      "Subtle non‑surgical face and neck lift using dissolvable PDO threads for improved contour, collagen, and skin firmness.",
  },
  {
    title: "Ultraformer MPT Ultrasound Lift",
    slug: "ultraformer-mpt",
    image: "/hifu.jpg",
    description:
      "Non‑surgical high‑intensity focused ultrasound for face and body lifting, collagen stimulation, and contour refinement.",
  },
];

export default function PopularTreatments() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.1, spacing: 24 },
      },
    },
  });

  return (
    <section className="bg-white py-10 pb-2">
      <div className="container mx-auto px-4 flex flex-row sm:flex-row justify-between items-center sm:items-center gap-3 mb-6">
        <h2 className="text-3xl md:text-4xl font-serif text-black font-medium mx-auto sm:mx-0 sm:ml-4">
          Popular Treatments
        </h2>
        <Link
          href="/treatments"
          className="text-sm underline text-gray-600 hover:text-black"
        >
          View All
        </Link>
      </div>

      {slider && (
        <div className="container mx-auto px-6 flex justify-end gap-4 mb-6">
          <button
            onClick={() => slider.current?.prev()}
            className="bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-full text-lg"
          >
            ←
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="bg-gray-200 hover:bg-gray-300 text-black p-2 rounded-full text-lg"
          >
            →
          </button>
        </div>
      )}

      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {popularTreatments.map((treatment, index) => (
          <div key={index} className="keen-slider__slide min-h-[475px] flex p-2">
            <div className="mx-4 flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-[200px] sm:h-[220px] md:h-[240px] w-full">
                <Image
                  src={treatment.image}
                  alt={`${treatment.displayName} – ${treatment.description}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif text-black font-medium mb-1">
                    {treatment.displayName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{treatment.description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href="https://wa.me/+526642077675"
                    className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] text-center"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}