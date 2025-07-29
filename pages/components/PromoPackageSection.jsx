import Image from "next/image";

export default function PromoPackageSection() {
  return (
    <section className="bg-white pt-2 pb-4">
      <div className="grid md:grid-cols-2 items-center max-w-none w-full">

        {/* Text Side */}
        <div className="px-6 md:px-20 pb-5 md:py-0 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-black font-medium mb-5">
            Flexible Med Spa Packages with Exclusive Savings
          </h2>
          <p className="text-gray-700 mb-6 text-base leading-relaxed">
            Get long-lasting aesthetic results without paying full price upfront. Our multi-session packages are perfect for U.S. patients crossing from San Diego and Tijuana locals alike.
          </p>

          <p className="text-black mb-4 font-semibold text-base">
            Your Plan Includes:
          </p>
          <ul className="space-y-6 text-base text-gray-700">
            <li className="flex items-start gap-4">
              <Image src="/money-icon.png" alt="Special pricing on bundles" width={30} height={30} />
              <span><strong>Discounted bundle pricing</strong> on services like Botox, Sculptra, RF microneedling, Ultraformer, and fillers.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/percent-icon.png" alt="20% deposit" width={30} height={30} />
              <span><strong>20% deposit per session</strong> — flexible payments without full prepay. Your deposit goes toward the next visit.</span>
            </li>
            <li className="flex items-start gap-4">
              <Image src="/sparkle-icon.png" alt="Custom plan" width={30} height={30} />
              <span><strong>Doctor-guided personalized plan</strong> combining advanced techniques for natural, long-term results.</span>
            </li>
          </ul>

          <p className="text-black mt-8 mb-2 font-semibold text-base">
            Ready to start your transformation?
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Book your consultation today and discover what’s possible with flexible care at Mave Medical Spa.
          </p>
          
          <div className="mt-6 flex justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition">
              Explore Packages
              </button>
              </div>
              </div>

        {/* Image Side */}
        <div className="relative w-full h-[45vh] md:h-[75vh]">
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