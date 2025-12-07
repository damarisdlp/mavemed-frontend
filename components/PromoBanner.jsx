// components/PromoBanner.jsx
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function PromoBanner() {
  const { t } = useTranslation("layout");

  return (
    <div className="bg-[#731a2f] text-white text-sm text-center py-2 px-4">
      {t("promoBanner.text")}{" "}
      <button
        type="button"
        onClick={dispatchChatOpen}
        className="underline"
      >
        {t("promoBanner.cta")}
      </button>
    </div>
  );
}
