// components/HeroSection.jsx
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="w-full bg-[#efeee7]">
      <div className="relative min-h-screen rounded-b-[40px] sm:rounded-b-[56px] md:rounded-b-[72px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/equipo.jpg"
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
        <div className="relative min-h-screen flex flex-col justify-center items-center px-6 py-10 text-center -translate-y-[5%] md:translate-y-0">
          <h1
            className="text-white font-medium mb-5 leading-tight max-w-[92vw] sm:max-w-4xl mt-2 break-words"
            style={{ textWrap: "balance" }}
          >
            <span className="block font-serif text-[clamp(1.6rem,4.5vw,3rem)]">
              {t("heroSection.heading1")}
            </span>
            <span className="mt-1 block font-serif text-[clamp(1.25rem,3.4vw,2.35rem)] tracking-[0.01em]">
              {t("heroSection.heading2")}
            </span>
          </h1>

          <p className="text-base mb-2 sm:text-lg text-white/90 mt-4 max-w-4xl">
            {t("heroSection.p1")}
          </p>
          <p className="text-base mb-2 sm:text-lg text-white/90 mt-2 max-w-4xl">
            {t("heroSection.p2")}
          </p>
          <p className="text-base mb-5 sm:text-lg text-white/90 mt-2 max-w-4xl">
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
