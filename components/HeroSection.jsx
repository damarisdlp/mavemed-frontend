// components/HeroSection.jsx
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="w-full bg-[#efeee7]">
      <div className="sm:hidden">
        <div className="relative h-[46vh] min-h-[320px] max-h-[440px] overflow-hidden">
          <img
            src="/equipo.jpg"
            alt="Hero background"
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black/60
              via-black/30
              to-black/20
            "
          />
        </div>

        <div className="px-6 pb-12 pt-8">
          <div className="max-w-full">
            <h1
              className="text-[#1f1f1d] font-medium leading-[1.04]"
              style={{ textWrap: "balance" }}
            >
              <span className="block whitespace-nowrap font-serif text-[clamp(1.45rem,5.8vw,2.05rem)]">
                {t("heroSection.heading1")}
              </span>
              <span className="mt-3 block font-serif text-[clamp(1.05rem,4.5vw,1.35rem)] leading-snug text-black/80">
                {t("heroSection.heading2")}
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-black/75">
              {t("heroSection.p1")}
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/75">
              {t("heroSection.p2")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              {t("heroSection.p3")}
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={dispatchChatOpen}
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-white px-8 py-3
                  text-black transition hover:bg-gray-100
                  active:scale-95
                "
              >
                {t("heroSection.cta")}
              </button>
              <Link
                href="/treatments"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#731a2f] px-8 py-3
                  text-white transition hover:bg-[#5d1526]
                "
              >
                View all Treatments
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-screen overflow-hidden rounded-b-[56px] md:rounded-b-[72px] sm:block">
        {/* Background Image */}
        <img
          src="/equipo3.jpg"
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />

        {/* Semi-transparent overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/80
            via-black/50
            to-black/0
          "
        />

        {/* Content */}
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end items-start px-6 pb-16 pt-10 text-left sm:px-8 sm:pb-20 lg:px-16 lg:pb-24 xl:px-20">
          <div className="w-full max-w-[92vw] sm:max-w-3xl lg:max-w-2xl lg:-translate-x-[30%] lg:-translate-y-[30%]">
            <h1
              className="mt-2 mb-5 max-w-full break-words text-white font-medium leading-tight"
              style={{ textWrap: "balance" }}
            >
              <span className="block font-serif text-[clamp(1.84rem,5.2vw,3.45rem)] sm:whitespace-nowrap">
                {t("heroSection.heading1")}
              </span>
              <span className="mt-[0.2625rem] block font-serif text-[clamp(1.0625rem,2.89vw,2rem)] tracking-[0.01em]">
                {t("heroSection.heading2")}
              </span>
            </h1>

            <p className="mt-4 mb-2 max-w-full text-base text-white/90 sm:text-lg">
              {t("heroSection.p1")}
            </p>
            <p className="mt-2 mb-2 max-w-full text-base text-white/90 sm:text-lg">
              {t("heroSection.p2")}
            </p>
            <p className="mt-2 mb-5 max-w-full text-base text-white/90 sm:text-lg">
              {t("heroSection.p3")}
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
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
              <Link
                href="/treatments"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#731a2f] px-8 py-3
                  text-white transition hover:bg-[#5d1526]
                "
              >
                View all Treatments
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle bottom edge for curve definition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10" />
      </div>
    </section>
  );
}
