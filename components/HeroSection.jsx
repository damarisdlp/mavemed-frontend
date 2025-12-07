// components/HeroSection.jsx
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function HeroSection() {
  const { t } = useTranslation("home");

  return (
    <section className="bg-white min-h-[65vh] md:min-h-[75vh] flex flex-col justify-center items-center px-6 py-6 text-center relative">
      <h1 className="text-4xl text-black sm:text-5xl md:text-6xl font-serif font-medium leading-tight max-w-4xl">
        {t("heroSection.heading1")}
      </h1>
      <h1 className="text-4xl text-black sm:text-4xl md:text-4xl font-serif font-medium leading-tight max-w-4xl">
        {t("heroSection.heading2")}
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
      <div className="mt-8 mb-4">
        <button
          type="button"
          onClick={dispatchChatOpen}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-[#731a2f] transition active:scale-95"
        >
          {t("heroSection.cta")}
        </button>
      </div>
    </section>
  );
}
