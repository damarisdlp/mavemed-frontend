// pages/treatments.jsx
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


const categories = [
  {
    title: "Wrinkle Reducers",
    services: [
      {
        name: "Wrinkle Reducers (Botox)",
        image: "/wrinkle-reducers.jpg",
        slug: "wrinkle-reducers",
        description:
          "Reduce the appearance of fine lines and wrinkles for a smoother, more refreshed look.",
      },
    ],
  },
  {
    title: "Fillers",
    services: [
      {
        name: "Dermal Filler (Hyaluronic Acid)",
        image: "/fillers.jpg",
        slug: "fillers",
        description:
          "Add volume to areas such as the lips, cheeks, undereyes and jawline with immediately visible results.",
      },
      {
        name: "Biostimulatory Filler (Sculptra)",
        image: "/sculptra.jpg",
        slug: "sculptra",
        description:
          "Correct volume loss and wrinkles naturally by restoring collagen production with long-lasting results.",
      },
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <>
    <Head>
      <title>Our Treatments | Mave Medical Spa</title>
      </Head>
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="/mave-logo.jpg"
          alt="Our Treatments"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-10 md:px-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
              Our Treatments
            </h1>
            <p className="text-base md:text-lg">
              Specializing in cosmetic injectable and medical-grade skincare
              treatments for people who want to look and feel their best.
            </p>
          </div>
        </div>
      </div>

      {/* Categories + Treatments */}
      <div className="container mx-auto px-4 py-16">
        {categories.map((category, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">
              {category.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, j) => (
                <div
                  key={j}
                  className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[260px]">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Link
                        href="https://wa.me/+526642077675"
                        className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition"
                      >
                        Book Now
                      </Link>
                      <Link
                        href={`/services/${service.slug}`}
                        className="border border-gray-300 px-4 py-2 rounded-full text-xs hover:border-black transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}