// components/HeroSection.jsx
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="bg-[#efeee7] w-full">
      <div className="relative min-h-screen rounded-b-[40px] sm:rounded-b-[56px] md:rounded-b-[72px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Semi-transparent overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/75
            via-black/60
            to-black/35
          "
        />

        {/* Content */}
        <div className="relative min-h-screen flex flex-col justify-center items-center px-6 py-10 text-center">
          <h1
            className="text-white font-serif font-medium leading-tight max-w-[92vw] sm:max-w-4xl text-[clamp(1.6rem,4.5vw,3rem)] mt-2 break-words"
            style={{ textWrap: "balance" }}
          >
            {t("heroSection.heading1")}
          </h1>

          <p className="text-base sm:text-lg text-white/90 mt-4 max-w-4xl">
            {t("heroSection.p1")}
          </p>
          <p className="text-base sm:text-lg text-white/90 mt-2 max-w-4xl">
            {t("heroSection.p2")}
          </p>
          <p className="text-base sm:text-lg text-white/90 mt-2 max-w-4xl">
            {t("heroSection.p3")}
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={dispatchChatOpen}
              className="
                bg-white text-black
                px-8 py-3 rounded-full
                hover:bg-gray-100
                transition
                active:scale-95
              "
            >
              {t("heroSection.cta")}
            </button>
          </div>
        </div>

        {/* Subtle bottom edge for curve definition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10" />
      </div>
    </section>
  );
}