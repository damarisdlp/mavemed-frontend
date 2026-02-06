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

  const message = t("promoBanner.text");
  const cta = t("promoBanner.cta");
  const items = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="bg-[#731a2f] text-white text-sm py-2 sticky top-0 z-[60]">
      <div className="promo-marquee" aria-label="Promotions">
        <div className="promo-track">
          {items.map((idx) => (
            <div className="promo-item" key={idx}>
              <span
                dangerouslySetInnerHTML={{ __html: message }}
              />
              <button
                type="button"
                onClick={dispatchPromoOpen}
                className="underline"
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .promo-marquee {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .promo-track {
          display: flex;
          align-items: center;
          gap: 32px;
          width: max-content;
          animation: scroll 105.6s linear infinite;
        }

        .promo-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          padding: 0 4px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .promo-track {
            animation-duration: 86.4s;
            gap: 24px;
          }
        }
      `}</style>
    </div>
  );
}
