// components/MembershipSection.jsx
import Image from "next/image";

export default function PromoPackageSection() {
  return (
    <section className="bg-white py-5 px-0">
      <div className="grid md:grid-cols-2 items-center max-w-none w-full">
        
        {/* Text Side */}
        <div className="px-6 md:px-20 py-10 md:py-0 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-black font-medium mb-5">
            Unlock Long-Term Results with Flexible Med Spa Packages in Tijuana
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-base">
            Looking for natural, long-lasting results from trusted aesthetic treatments — without paying the full price upfront? Our multi-session treatment packages in Tijuana are ideal for patients who want to commit to visible transformation while enjoying exclusive savings and flexible payment options.          </p>
            <p className="text-black mb-6 font-semibold leading-relaxed text-base">What You’ll Get with Our Treatment Plans:</p>
          <ul className="space-y-6 text-base text-gray-700">
            <li className="flex items-start gap-4">
              <Image src="/money-icon.png" alt="Money icon" width={35} height={35} />
              <span><strong>Special pricing on bundled services</strong> - including collagen stimulators (like Sculptra), RF microneedling (Scarlet RF), Ultraformer, fillers, PDO threads, and more.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/percent-icon.png" alt="Percent icon" width={35} height={35} />
              <span><strong>Only 20% deposit required per session </strong> - skip the financial pressure of full prepayment. Your deposit is fully credited toward your next visit.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/sparkle-icon.png" alt="Sparkle icon" width={35} height={35} />
              <span><strong>Personalized protocols</strong> combining advanced technologies and proven aesthetic techniques for natural-looking, long-term skin rejuvenation.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/dr-icon.png" alt="Doctor icon" width={35} height={35} />
              <span><strong>Doctor-led care</strong> at every stage to ensure safe, effective results from Tijuana’s trusted medical spa professionals.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/date-icon.png" alt="Date icon" width={35} height={35} />
              <span><strong>VIP treatment perks</strong> — including priority scheduling, complimentary upgrades, bonus boosters, and access to limited-time med spa promotions.</span>
            </li>
          </ul>
          
          <p className="text-black mt-10 mb-3 font-semibold leading-relaxed text-base">Ready to Save on Botox, Fillers, RF Microneedling & More?</p>
          <p className="text-gray-700  leading-relaxed text-base">
            Explore our flexible treatment plan options in Tijuana — perfect for U.S. patients crossing from San Diego and locals alike. Reserve your consultation today to start your personalized skin journey.</p>
<button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition">
            Explore Packages
          </button>
        </div>

        {/* Image Side */}
        <div className="relative w-full h-[600px] md:h-[1000px]">
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