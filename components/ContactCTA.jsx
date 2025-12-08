// components/ContactCTA.jsx
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function ContactCTA() {
  const { t } = useTranslation("home");

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#731a2f" }}
      className="text-white text-center py-16 px-6"
    >
      <h2
        className="font-medium font-serif mb-3 leading-tight text-[clamp(2rem,5vw,2.6rem)] max-w-[92vw] mx-auto"
        style={{ textWrap: "balance" }}
      >
        {t("contactCta.title")}
      </h2>
      <p className="text-gray-100 text-lg">{t("contactCta.line1")}</p>
      <p className="text-gray-100 text-lg mb-6">{t("contactCta.line2")}</p>
      <p className="text-gray-100 font-semibold text-lg mb-5">
        {t("contactCta.line3")}
      </p>

      <button
        type="button"
        onClick={dispatchChatOpen}
        className="bg-white text-black px-8 py-3 rounded-full inline-block transition duration-300 hover:bg-[#efeee7]"
        aria-label={t("contactCta.aria")}
      >
        {t("contactCta.cta")}
      </button>
    </section>
  );
}
