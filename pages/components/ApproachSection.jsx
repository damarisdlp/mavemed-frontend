// components/ApproachSection.jsx
import Image from "next/image";
import Link from "next/link";

export default function ApproachSection() {
  return (
    <section className="bg-white py-10 px-0">
      <div className="grid md:grid-cols-[minmax(0,_1.7fr)_1fr] items-center max-w-none w-full">

        {/* Image – full bleed */}
        <div className="relative w-full h-[835px]">
          <Image
            src="/approach-section.jpg"
            alt="Close-up of rejuvenated skin after aesthetic treatment"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content – constrained */}
        <div className="px-10 md:px-20 max-w-xl mx-auto">

          <h2 className="text-4xl text-black font-serif font-medium mb-7 mt-10">
            Our Results-Driven Skincare Philosophy in Tijuana
          </h2>

          {/* Safety */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/safety-icon.png" alt="Medical-grade skincare safety icon" width={35} height={35} />
              <h3 className="text-lg text-black font-semibold">Medical-Grade Safety</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              All cosmetic procedures at Mave Medical Spa in Tijuana are performed or overseen by licensed aesthetic doctors. We adhere to COFEPRIS-compliant safety standards for treatments such as Botox, RF microneedling, Sculptra, and PDO threads.
            </p>
          </div>

          {/* Efficacy */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/tech-icon.png" alt="Technology and skin treatment efficacy icon" width={35} height={35} />
              <h3 className="text-lg text-black font-semibold">Proven Efficacy</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              From collagen stimulation to advanced skin tightening, our treatments use FDA-approved technologies and high-performance products that are clinically proven to transform skin health and appearance.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/experience-icon.png" alt="Personalized skincare experience icon" width={35} height={35} />
              <h3 className="text-lg text-black font-semibold">Personalized Aesthetic Experience</h3>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Your aesthetic journey begins with a skin consultation tailored to your goals. Whether you're seeking wrinkle reduction, skin tightening, or collagen rejuvenation, we create a custom treatment plan with real results.
            </p>
          </div>

          <Link href="/treatments">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition">
              Explore Our Med Spa Treatments
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}