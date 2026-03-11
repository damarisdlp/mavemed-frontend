import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getLocalized } from "@/lib/i18n/getLocalized";

export default function TreatmentInfoTabs({ treatment, locale: propLocale }) {
  const { locale: routerLocale } = useRouter();
  const locale = propLocale || routerLocale || "en";
  const { t } = useTranslation("treatments");

  const localize = (field) => getLocalized(field, locale);

  const tabs = useMemo(() => {
    const detailsLabel = t("treatmentInfoTabs.details");
    const goalsLabel = t("treatmentInfoTabs.goals");
    const areasLabel = t("treatmentInfoTabs.areas");
    const locationsLabel = t("treatmentInfoTabs.locations");

    const details = localize(treatment?.details);
    const notes = treatment?.notes || [];
    const goals = treatment?.goals || [];
    const areas = treatment?.treatableAreas || [];
    const locations = treatment?.locations || [
      { en: "Tijuana, B.C.", es: "Tijuana, B.C." },
    ];

    return [
      {
        key: "details",
        label: detailsLabel,
        type: "text",
        items: details ? [details] : [],
        notes,
      },
      { key: "goals", label: goalsLabel, type: "list", items: goals },
      { key: "areas", label: areasLabel, type: "list", items: areas },
      { key: "locations", label: locationsLabel, type: "list", items: locations },
    ];
  }, [locale, treatment]);

  const firstWithItems = tabs.find((tab) => tab.items?.length) || tabs[0];
  const [activeKey, setActiveKey] = useState(firstWithItems.key);
  const activeTab = tabs.find((tab) => tab.key === activeKey) || firstWithItems;

  const withLocalePath = (path) => `/${locale === "es" ? "es/" : ""}${path.replace(/^\//, "")}`;

  const normalizeInlineToken = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  const shouldLinkFillerEducation = [
    "facial-balancing-fillers",
    "hyaluronic-acid-lip-fillers",
    "mesotherapy-infusions",
  ].includes(treatment?.urlSlug);

  const getInlineEducationHref = (token) => {
    const normalized = normalizeInlineToken(token);
    if (normalized === "fillmed laboratories" && treatment?.urlSlug === "bio-revitalization-french-glow") {
      return withLocalePath("/learn/nctf-135-ha-skin-quality-guide");
    }
    if (!shouldLinkFillerEducation) return "";
    if (normalized === "allergan aesthetics") {
      return withLocalePath("/learn/allergan-aesthetics-hyaluronic-acid-fillers");
    }
    if (normalized === "vivacy") {
      return withLocalePath("/learn/vivacy-stylage-m-hyaluronic-acid-filler");
    }
    if (
      normalized.includes("cross-linked hyaluronic acid") ||
      normalized.includes("acido hialuronico reticulado") ||
      (normalized.includes("generic") && normalized.includes("hyaluronic acid filler"))
    ) {
      return withLocalePath("/learn/revolax-cross-linked-hyaluronic-acid-fillers");
    }
    return "";
  };

  const renderTextWithLinks = (value, keyPrefix = "detail") => {
    const text = typeof value === "string" ? value : localize(value);
    if (typeof text !== "string" || !text.trim()) return text;

    const parts = text.split(
      /(Fillmed Laboratories|Allergan Aesthetics|Vivacy|Generic Name: Cross-Linked Hyaluronic Acid|generic cross-linked hyaluronic acid|generic Hyaluronic Acid Filler|generic hyaluronic acid filler|Nombre genérico: ácido hialurónico reticulado|Nombre genérico: acido hialuronico reticulado|acido hialuronico reticulado|ácido hialurónico reticulado)/gi
    );
    if (parts.length === 1) return text;

    return parts.map((part, idx) => {
      const href = getInlineEducationHref(part);
      if (!href) {
        return <span key={`${keyPrefix}-text-${idx}`}>{part}</span>;
      }

      return (
        <Link key={`${keyPrefix}-link-${idx}`} href={href} className="underline underline-offset-4">
          {part}
        </Link>
      );
    });
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 bg-[#efeee7] backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab.key;
              const hasItems = tab.items?.length > 0;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveKey(tab.key)}
                  className={`w-full rounded-xl px-4 py-3 text-base font-semibold transition border ${
                    isActive
                      ? "bg-black text-white border-white shadow-md"
                      : "bg-white text-black border-transparent hover:bg-white/80"
                  } ${hasItems ? "" : "opacity-70 cursor-default"}`}
                  disabled={!hasItems}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            {activeTab.items?.length ? (
              activeTab.type === "text" ? (
                <div className="space-y-4">
                  <p className="text-base text-[#2f2316] leading-relaxed">
                    {renderTextWithLinks(activeTab.items[0], "tab-item")}
                  </p>
                  {activeTab.notes?.length > 0 && (
                    <ul className="list-disc list-outside pl-5 space-y-2 text-base text-[#2f2316] italic">
                      {activeTab.notes.map((note, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {renderTextWithLinks(note, `tab-note-${idx}`)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <ul
                  className={`list-disc pl-5 space-y-3 text-base text-[#2f2316] ${
                    activeTab.key === "areas" ? "columns-2 gap-8 space-y-0" : ""
                  }`}
                >
                  {activeTab.items.map((item, idx) => (
                    <li key={idx} className="leading-relaxed break-inside-avoid">
                      {localize(item)}
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <p className="text-[#2f2316] text-base">
                {t("treatmentInfoTabs.comingSoon")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
