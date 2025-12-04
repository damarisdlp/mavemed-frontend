// components/PromoBanner.jsx
import { useTranslation } from "next-i18next";

export default function PromoBanner() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-[#731a2f] text-white text-sm text-center py-2 px-4">
      {t("promoBanner.text")}{" "}
      <a href="https://wa.me/+526642077675" className="underline">
        {t("promoBanner.cta")}
      </a>
    </div>
  );
}
