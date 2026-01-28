// components/PromoBanner.jsx
import { useTranslation } from "next-i18next";
import { getActiveLeadForm, isPromoLeadForm } from "@/lib/data/leadForms";
const dispatchPromoOpen = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("promo-popup-open"));
};

export default function PromoBanner() {
  const { t } = useTranslation("layout");
  const activeForm = getActiveLeadForm();
  if (!isPromoLeadForm(activeForm)) return null;

  return (
    <div className="bg-[#731a2f] text-white text-sm text-center py-2 px-4">
      <span
        dangerouslySetInnerHTML={{ __html: t("promoBanner.text") }}
      />{" "}
      <button
        type="button"
        onClick={dispatchPromoOpen}
        className="underline"
      >
        {t("promoBanner.cta")}
      </button>
    </div>
  );
}
