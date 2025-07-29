import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";

const treatments = [
  {
    title: "Wrinkle Reducers (Botox)",
    slug: "wrinkle-reducers",
    image: "/wrinkle-reducers.jpg",
    description: "Reduce the appearance of fine lines and wrinkles for a smoother, more refreshed look."
  },
  {
    title: "Dermal Filler (Hyaluronic Acid)",
    slug: "fillers",
    image: "/fillers.jpg",
    description: "Add volume to areas such as the lips, cheeks, undereyes and jawline with immediately visible results."
  },
  {
    title: "Biostimulatory Filler (Sculptra)",
    slug: "sculptra",
    image: "/sculptra.jpg",
    description: "Correct volume loss and wrinkles naturally by restoring collagen production with long-lasting results."
  },
  {
    title: "Microneedling",
    slug: "microneedling",
    image: "/microneedling.jpg",
    description: "Stimulate the skin’s natural healing process using microneedling technology to reduce fine lines, pores and scarring."
  },
  {
    title: "Microneedling with Radio Frequency (Scarlet S RF)",
    slug: "rf-microneedling",
    image: "/rf-microneedling.jpg",
    description: "Improve fine lines and scarring with added skin laxity tightening and reduced downtime."
  },
  {
    title: "CO2 Resurfacing Laser (AcuPulse)",
    slug: "co2-resurfacing-laser",
    image: "/co2-resurfacing-laser.jpg",
    description: "Skin resurfacing and deep dermal remodeling, treating sun damage, deeper wrinkles, skin texture and sagging."
  },
  {
    title: "Hydrafacial",
    slug: "hydrafacial",
    image: "/hydrafacial.jpg",
    description: "Deeply cleanse, exfoliate, and hydrate your skin with this signature facial for glow and radiance."
  },
  {
    title: "Laser Hair Removal (Alma Soprano Titanium ICE)",
    slug: "laser-hair-removal",
    image: "/laser-hair-removal.jpg",
    description: "Pain-free, fast, and effective laser hair removal using state-of-the-art Alma Soprano Titanium ICE technology."
  },
  {
    title: "IPL Photofacial (Alma Harmony XL)",
    slug: "ipl",
    image: "/ipl.jpg",
    description: "Target sunspots, redness, and pigmentation with this light-based therapy that revitalizes skin clarity."
  },
  {
    title: "Body Contouring with Radiofrequency (Venus Freeze)",
    slug: "radiofrequency",
    image: "/radiofrequency.jpg",
    description: "Lift and tighten skin non-invasively with Venus Freeze radiofrequency technology for face and body."
  },
  {
    title: "Skin Tightening with PDO Threads",
    slug: "pdo-threads",
    image: "/pdo-threads.jpg",
    description: "Non-surgical lifting and contouring treatment that repositions tissue and stimulates collagen."
  },
  {
  title: "High Intensity Frequency Ultrasound (Ultraformer MPT)",
  slug: "ultraformer-mpt",
  image: "/ultraformer-mpt.jpg",
  description: "Lift and tighten the skin with non-invasive ultrasound energy. Ultraformer MPT targets multiple layers to stimulate collagen and redefine facial contours."
}
];

export default function PopularTreatments() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3.1,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1.2, spacing: 12 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
    },
  });

  return (
    <section className="bg-white py-5">
      {/* Header */}
      <div className="container mx-auto px-4 flex justify-between items-center mb-10">
        <h2 className="text-4xl font-serif text-black font-medium mb-10">Popular Treatments</h2>
        <Link
          href="/treatments"
          className="text-sm underline text-gray-600 hover:text-black"
        >
          View All
        </Link>
      </div>

      {/* Arrows */}
      {slider && (
        <div className="container mx-auto px-4 flex justify-end gap-4 mb-6">
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

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {treatments.map((treatment, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="mx-4 h-full flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative h-52 w-full">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif text-black font-medium mb-2">{treatment.title}</h3>
                  <p className="text-2lg text-gray-600 mb-4">{treatment.description}</p>
                </div>
                <div className="mt-auto flex gap-2">
                  <Link
                    href="https://wa.me/+526642077675"
                    className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={`/services/${treatment.slug}`}
                    className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
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