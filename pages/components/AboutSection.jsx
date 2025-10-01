// components/AboutSection.jsx
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function AboutSection() {
  const staff = [
    { name: "Veronica", title: "Founder", image: "/veronica.jpg" },
    { name: "Damaris", title: "Chief Executive Director", image: "/damaris.jpg" },
    { name: "Dra. Nataly", title: "MD", image: "/nataly.jpg" },
    { name: "Dra. Jocelyn", title: "MD", image: "/jocelyn.jpg" },
    { name: "Vicky", title: "Cosmetologist", image: "/vicky.jpg" },
    { name: "Manuel", title: "Cosmetologist & Masseur", image: "/manuel.jpg" },
    { name: "Mayra", title: "Cosmetologist", image: "/mayra.jpg" },
    { name: "Zury", title: "Receptionist", image: "/zury.jpg" },
  ];

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  return (
    <section id="aboutus" className="bg-white min-h-screen w-full">
      {/* Top Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[85vh] mb-5">
        {/* Left: Image */}
        <div className="relative w-full h-[40vh] md:h-auto">
          <Image
            src="/logo-mave.png"
            alt="Shot of outside of Mave Medical Spa in Tijuana"
            fill
            className="object-contain md:object-cover"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md mx-auto text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-serif font-medium mb-2 leading-tight">
              About Mave
            </h2>
            <strong className="text-black text-xl block mb-4">
              Trusted Aesthetic Clinic in Tijuana, Mexico
            </strong>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              At Mave Medical Spa in Tijuana, we combine medical science, aesthetics, and regenerative medicine to deliver personalized, results-driven cosmetic care. Just minutes from the San Diego border, we serve both local clients and patients traveling from across Southern California and beyond; offering safe, ethical treatments with natural-looking results.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Our vision is to be a modern sanctuary for aesthetic wellness, where treatments support confidence, healing, and long-term skin health. We specialize in advanced procedures including:
            </p>

            <ul className="list-disc list-inside pl-4 text-left text-gray-700 text-base md:text-lg space-y-2 mb-4">
              <li><strong>Botox®</strong> wrinkle reduction</li>
              <li><strong>Sculptra®</strong> and other collagen biostimulators</li>
              <li>Radiofrequency microneedling <span className="italic">(Scarlet S RF)</span></li>
              <li>PDO thread lifts</li>
              <li>Medical-grade CO2 lasers and IPL photofacials</li>
            </ul>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Our approach is grounded in COFEPRIS-compliant protocols, physician oversight, and highly personalized treatment plans tailored to your unique goals and facial anatomy.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Every patient is treated with intention, clinical precision, and compassionate care, because your transformation deserves both beauty and integrity.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section Header */}
      <div className="container mx-auto px-4 flex flex-row sm:flex-row justify-between items-center sm:items-center gap-3 mb-6">
        <h2 className="text-3xl md:text-4xl font-serif text-black font-medium mx-auto sm:mx-0 sm:ml-4">
          Meet Our Team
        </h2>
        <Link
          href="/ourteam"
          className="text-sm underline text-gray-600 hover:text-black"
        >
          View All
        </Link>
      </div>

      {/* Slider Controls */}
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

      {/* Slider Cards */}
      <div className="w-full flex justify-center">
        <div
          ref={sliderRef}
          className="keen-slider overflow-hidden px-4 mx-auto max-w-[1100px]"
        >
          {staff.map((staff, index) => (
            <div key={index} className="keen-slider__slide flex justify-center px-2">
              <div className="w-[280px] sm:w-[300px] md:w-[320px] flex flex-col bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-3">
                <div className="relative h-[420px] w-full">
                  <Image
                    src={staff.image}
                    alt={`${staff.name} – ${staff.title}`}
                    fill
                    className="object-cover text-gray-600"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="text-lg font-serif text-black font-medium mb-1">
                      {staff.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{staff.title}</p>
                  </div>
                  <Link
                    href={`/aboutus/${staff.name.toLowerCase()}`}
                    className="inline-block border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Spacer */}
      <div className="h-1 bg-white w-full" />
    </section>
  );
}