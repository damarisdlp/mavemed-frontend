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
                    {localize(activeTab.items[0])}
                  </p>
                  {activeTab.notes?.length > 0 && (
                    <ul className="list-disc list-outside pl-5 space-y-2 text-base text-[#2f2316] italic">
                      {activeTab.notes.map((note, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {localize(note)}
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
