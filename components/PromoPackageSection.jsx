import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function PromoPackageSection() {
  const { t } = useTranslation("home");

  return (
    <section className="relative w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] min-h-[85vh]">

        {/* Left: Text Content */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md mx-auto text-center md:text-left">
            <h2
              className="text-black font-serif font-medium mb-6 leading-tight text-[clamp(1.75rem,4.5vw,2.8rem)] max-w-[92vw] sm:max-w-xl break-words"
              style={{ textWrap: "balance" }}
            >
              {t("packages.title")}
            </h2>

            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
              {t("packages.subtitle")}
            </p>

            <p className="text-black mb-4 font-semibold text-base md:text-lg">
              {t("packages.planIncludes")}
            </p>

            <ul className="space-y-6 text-base md:text-lg text-gray-700 text-left">
              <li className="flex items-start gap-4">
                <Image src="/money-icon.png" alt="Special pricing on bundles" width={30} height={30} />
                <span>{t("packages.item1")}</span>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/percent-icon.png" alt="20% deposit" width={30} height={30} />
                <span>{t("packages.item2")}</span>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/sparkle-icon.png" alt="20% deposit" width={30} height={30} />
                <span>{t("packages.item3")}</span>
              </li>
              <li className="flex items-start gap-4">
                <Image src="/dr-icon.png" alt="Custom plan" width={30} height={30} />
                <span>{t("packages.item4")}</span>
              </li>
            </ul>

            <p className="text-black mt-8 mb-2 font-semibold text-base md:text-lg">
              {t("packages.bottomTitle")}
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {t("packages.bottomCopy")}
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition text-center"
              >
                {t("packages.cta")}
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
