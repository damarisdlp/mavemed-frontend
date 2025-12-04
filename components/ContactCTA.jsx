// components/ContactCTA.jsx
import { useTranslation } from "next-i18next";

export default function ContactCTA() {
  const { t } = useTranslation("common");

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#731a2f" }}
      className="text-white text-center py-16 px-6"
    >
      <h2 className="text-3xl font-medium font-serif mb-2">
        {t("contactCta.title")}
      </h2>
      <p className="text-gray-100 text-lg">{t("contactCta.line1")}</p>
      <p className="text-gray-100 text-lg mb-6">{t("contactCta.line2")}</p>
      <p className="text-gray-100 font-semibold text-lg mb-5">
        {t("contactCta.line3")}
      </p>

      <a
        href="https://wa.me/+526642077675"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-8 py-3 rounded-full inline-block transition duration-300"
        style={{ backgroundColor: "#ffffff" }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#efeee7")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
        aria-label={t("contactCta.aria")}
      >
        {t("contactCta.cta")}
      </a>
    </section>
  );
}
