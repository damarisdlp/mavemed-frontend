import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getPromoSummary, optionHasPromo } from "@/lib/utils/promo";
import { formatMoney, formatMoneyRange, getPriceMinValue } from "@/lib/utils/price";
import { getLocalized } from "@/lib/i18n/getLocalized";

export default function AddOnSection({ addOns = [], addonTreatments = [] }) {
  const { locale: routerLocale } = useRouter();
  const locale = routerLocale || "en";
  const { t } = useTranslation("treatments");

  const localize = (field) => {
    if (field == null) return "";
    if (typeof field === "object") {
      if (field.text && typeof field.text === "object") {
        return field.text[locale] || field.text.en || "";
      }
      if ("minAmount" in field || "maxAmount" in field) {
        return formatMoneyRange(field.minAmount, field.maxAmount);
      }
      if ("amount" in field) return formatMoney(field.amount);
    }
    return getLocalized(field, locale);
  };

  const normalize = (str) => (str || "").toLowerCase().trim();

  if (!addOns.length || !addonTreatments?.length) return null;

  const getNumericPrice = (priceField) => {
    if (!priceField || typeof priceField !== "object") return null;
    const value = getPriceMinValue(priceField);
    return Number.isFinite(value) ? value : null;
  };

  const treatmentMaps = useMemo(() => {
    const bySlug = new Map();
    const byName = new Map();
    addonTreatments.forEach((t) => {
      if (!t) return;
      if (t.urlSlug) bySlug.set(normalize(t.urlSlug), t);
      const name = localize(t.serviceDisplayName || t.displayName);
      if (name) byName.set(normalize(name), t);
    });
    return { bySlug, byName };
  }, [addonTreatments, locale]);

  const buildOptionMap = (treatment) => {
    const map = new Map();
    treatment?.pricing?.options?.forEach((opt) => {
      const name = localize(opt.optionName);
      if (name) map.set(normalize(name), opt);
    });
    return map;
  };

  return (
    <div className="mb-6 text-black">
      <h3 className="text-xl font-medium mb-2">{t("addOns.heading")}</h3>

      {addOns.map((addonRef, idx) => {
        const refName = localize(
          addonRef.serviceParent || addonRef.optionName || addonRef.displayName
        );
        const slugFromLink = addonRef.link
          ? addonRef.link.split("/").filter(Boolean).pop()
          : "";
        const targetSlug = addonRef.treatmentSlug || slugFromLink;

        const addon =
          treatmentMaps.bySlug.get(normalize(targetSlug)) ||
          treatmentMaps.byName.get(normalize(refName));

        if (!addon) {
          console.warn("⚠️ No addon match found for:", addonRef.serviceParent);
          return null;
        }

        const optionMap = buildOptionMap(addon);
        const targetOptionName = localize(
          addonRef.optionName || addonRef.serviceChild || addonRef.displayName
        );
        const matchedOption = optionMap.get(normalize(targetOptionName)) || null;

        const displayPrice =
          localize(
            matchedOption?.optionPrice ||
              (addon?.pricing?.options || [])
                .reduce((lowest, opt) => {
                  const val = getNumericPrice(opt.optionPrice);
                  if (val == null) return lowest;
                  if (!lowest || val < lowest.val) {
                    return { val, price: opt.optionPrice };
                  }
                  return lowest;
                }, null)?.price
          );

        const lowestOptionForCurrency =
          (addon?.pricing?.options || []).reduce((lowest, opt) => {
            const val = getNumericPrice(opt.optionPrice);
            if (val == null) return lowest;
            if (!lowest || val < lowest.val) {
              return { val, currency: opt.optionPrice?.currency || "" };
            }
            return lowest;
          }, null) || null;

        const displayCurrency =
          matchedOption?.optionPrice?.currency ||
          lowestOptionForCurrency?.currency ||
          "";

        const promoPrice = localize(matchedOption?.optionPromoPrice);
        const hasPromo = optionHasPromo(matchedOption, locale);

        const hasMultipleOptions = (addon?.pricing?.options || []).length > 1;
        const fromLabel = hasMultipleOptions ? t("addOns.from") : "";

        const localizedAddOnName =
          localize(addonRef.optionName) ||
          localize(addonRef.displayName) ||
          localize(addon.serviceDisplayName || addon.displayName);
        const localizedDescription = localize(addon.description);
        const promoSummary = getPromoSummary(addon, locale);
        const hasPromoBanner = promoSummary?.isPromoActive;

        const href =
          addonRef.link ||
          (targetSlug ? `/treatments/${targetSlug}` : null);

        return (
          <div key={idx} className="mb-4">
            {/* Add on name */}
            <p className="text-md font-semibold">{localizedAddOnName}</p>
            {hasPromoBanner && (
              <p className="text-xs uppercase tracking-wide text-[#731a2f] mt-0.5">
                {t("addOns.promoAvailable")}
              </p>
            )}

            {/* Add on description */}
            {localizedDescription && (
              <p className="text-sm text-gray-700">{localizedDescription}</p>
            )}

            {/* Pricing */}
            {displayPrice && (
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">{t("addOns.price")}</span>{" "}
                {fromLabel}
                {displayPrice} {displayCurrency}
                {hasPromo && (
                  <>
                    {" "}
                    |{" "}
                    <span className="font-semibold text-[#731a2f]">{t("addOns.promo")}</span>{" "}
                    <span className="text-[#731a2f]">
                      {promoPrice} {matchedOption?.optionPromoPrice?.currency}
                    </span>
                  </>
                )}
              </p>
            )}

            {/* Link */}
            {href && (
              <Link
                href={href}
                className="text-sm underline text-black mt-1 inline-block hover:text-[#731a2f]"
              >
                {t("addOns.learnMoreAbout", { service: localizedAddOnName })}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
