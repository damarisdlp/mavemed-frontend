// components/ApproachSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function ApproachSection() {
  return (
    <section className="bg-white py-10 px-0">
      <div className="grid md:grid-cols-[minmax(0,_1.7fr)_1fr] items-center max-w-none w-full">

        {/* Image – full bleed */}
        <div className="relative w-full h-[815px]">
          <Image
            src="/approach-section.jpg"
            alt="Close-up of glowing skin"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content – constrained */}
        <div className="px-10 md:px-20 max-w-xl mx-auto">

          <h2 className="text-4xl text-black font-serif font-medium mb-10 mt-15">
            A New Approach to Skincare
          </h2>

          {/* Safety */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/safety-icon.png" alt="Safety icon" width={35} height={35} />
              <h3 className="text-lg text-black font-semibold">Safety</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Safety is our top priority. All procedures at Mave are performed or overseen by licensed medical professionals specializing in aesthetic medicine. We follow strict COFEPRIS-compliant clinical protocols to ensure your health and wellbeing.
            </p>
          </div>

          {/* Efficacy */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/tech-icon.png" alt="Technology icon" width={35} height={35} />
              <h3 className="text-lg text-black font-semibold">Efficacy</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              We believe in delivering real, visible results. Our services are built on medical-grade technologies and high-performing ingredients that are clinically proven to stimulate change in the skin.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/experience-icon.png" alt="Experience icon" width={35} height={35} />
              <h3 className="text-lg text-black font-semibold">Experience</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              We provide a carefully curated experience. Every appointment is personalized to your skin goals, and our team works with you to build a treatment plan that feels right — and gets results.
            </p>
          </div>

          <Link href="/treatments">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition">
              View Our Treatments
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}