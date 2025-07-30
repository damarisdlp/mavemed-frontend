import Image from "next/image";
import Link from "next/link";

export default function PromoPackageSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] min-h-[85vh]">

        {/* Left: Text Content */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md mx-auto text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-serif font-medium mb-7 leading-tight">
              Flexible Med Spa Packages with Exclusive Savings
            </h2>

            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
              Get long-lasting aesthetic results without paying full price upfront. Our multi-session packages are perfect for U.S. patients crossing from San Diego and Tijuana locals alike.
            </p>

            <p className="text-black mb-4 font-semibold text-base md:text-lg">
              Your Plan Includes:
            </p>

            <ul className="space-y-6 text-base md:text-lg text-gray-700 text-left">
              <li className="flex items-start gap-4">
                <Image src="/money-icon.png" alt="Special pricing on bundles" width={30} height={30} />
                <span><strong>Special pricing on bundled services</strong> - including collagen stimulators (like Sculptra), RF microneedling (Scarlet RF), Ultraformer, fillers, PDO threads, and more.</span>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/percent-icon.png" alt="20% deposit" width={30} height={30} />
                <span><strong>Only 20% deposit required per session</strong> - skip the financial pressure of full prepayment. Your deposit is fully credited toward your next visit.</span>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/sparkle-icon.png" alt="20% deposit" width={30} height={30} />
                <span><strong>Personalized plans</strong> combining advanced technologies and proven aesthetic techniques for natural-looking, long-term skin rejuvenation.</span>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/dr-icon.png" alt="Custom plan" width={30} height={30} />
                <span><strong>Doctor-led care</strong> at every stage to ensure safe, effective results from Tijuana’s trusted medical spa professionals.</span>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/date-icon.png" alt="Custom plan" width={30} height={30} />
                <span><strong>VIP treatment perks</strong> — including priority scheduling, complimentary upgrades, bonus boosters, and access to limited-time med spa promotions.</span>
              </li>
            </ul>

            <p className="text-black mt-8 mb-2 font-semibold text-base md:text-lg">
              Ready to start your transformation?
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Book your consultation today and discover what’s possible with flexible care at Mave Medical Spa.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition text-center"
              >
                Explore Packages
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-[40vh] md:h-auto">
          <Image
            src="/package-promo.jpg"
            alt="Happy patient with glowing skin"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

    </section>
  );
}