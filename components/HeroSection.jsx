// components/HeroSection.jsx
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    // Outer background that will be revealed on scroll
    <section className="bg-[#efeee7] w-full">
      {/* White hero panel that fills the viewport */}
      <div className="bg-white relative min-h-screen rounded-b-[40px] sm:rounded-b-[56px] md:rounded-b-[72px]">
        <div className="min-h-screen flex flex-col justify-center items-center px-6 py-10 text-center">
          <h1
            className="text-black font-serif font-medium leading-tight max-w-[92vw] sm:max-w-4xl text-[clamp(1.6rem,4.5vw,3rem)] mt-2 break-words"
            style={{ textWrap: "balance" }}
          >
            {t("heroSection.heading1")}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-4xl">
            {t("heroSection.p1")}
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-4xl">
            {t("heroSection.p2")}
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-4xl">
            {t("heroSection.p3")}
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={dispatchChatOpen}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-[#731a2f] transition active:scale-95"
            >
              {t("heroSection.cta")}
            </button>
          </div>
        </div>

        {/* Optional subtle edge line so the curve reads cleanly */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/5" />
      </div>
    </section>
  );
}