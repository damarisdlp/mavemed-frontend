// components/MembershipSection.jsx
import Image from "next/image";

export default function PromoPackageSection() {
  return (
    <section className="bg-white py-5 px-0">
      <div className="grid md:grid-cols-2 items-center max-w-none w-full">
        
        {/* Text Side */}
        <div className="px-6 md:px-20 py-10 md:py-0 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-medium mb-10">
            Exclusive Savings When You Commit to Results
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-base">
            Our multi-sessional and multi-modal packages are designed for patients who are committed to long-term transformation. Join our exclusive program and receive access to tiered pricing, bundled savings, and ongoing perks.
          </p>

          <ul className="space-y-6 text-base text-gray-700">
            <li className="flex items-start gap-4">
              <Image src="/money-icon.png" alt="Money icon" width={35} height={35} />
              <span><strong>Exclusive pricing</strong> on treatment bundles, including collagen stimulators, RF microneedling, Ultraformer, fillers, and more.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/percent-icon.png" alt="Percent icon" width={35} height={35} />
              <span><strong>20% pre-payment</strong> is applied toward your next session — flexible, manageable, and fully credited.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/sparkle-icon.png" alt="Sparkle icon" width={35} height={35} />
              <span><strong>Personalized plans</strong> that combine technologies and techniques for natural, long-term results.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/dr-icon.png" alt="Doctor icon" width={35} height={35} />
              <span><strong>Doctor-guided protocols</strong> to ensure efficacy, safety, and proper progression with each session.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/date-icon.png" alt="Date icon" width={35} height={35} />
              <span><strong>Priority consultations</strong> and access to limited-time upgrades or complimentary enhancements.</span>
            </li>
          </ul>

          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition">
            Explore Packages
          </button>
        </div>

        {/* Image Side */}
        <div className="relative w-full h-[600px] md:h-[700px]">
          <Image
            src="/package-promo.jpg"
            alt="Happy patient with healthy skin"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}