import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getLocalized } from "@/lib/i18n/getLocalized";

export default function WhatToExpect({ expectations = {}, locale: propLocale }) {
  const { locale: routerLocale } = useRouter();
  const locale = propLocale || routerLocale || "en";
  const { t } = useTranslation("treatments");

  const localize = (field) => getLocalized(field, locale);

  const tabs = useMemo(() => {
    const beforeItems = expectations.beforeTreatment || expectations.preTreatment || [];
    const duringItems = expectations.duringTreatment || [];
    const afterItems = expectations.afterTreatment || expectations.postTreatment || [];

    const beforeLabel = t("whatToExpect.before");
    const duringLabel = t("whatToExpect.during");
    const afterLabel = t("whatToExpect.after");

    return [
      { key: "before", label: beforeLabel, items: beforeItems },
      { key: "during", label: duringLabel, items: duringItems },
      { key: "after", label: afterLabel, items: afterItems },
    ];
  }, [expectations, locale]);

  const firstWithItems = tabs.find((tab) => tab.items?.length) || tabs[0];
  const [activeKey, setActiveKey] = useState(firstWithItems.key);

  const activeTab = tabs.find((tab) => tab.key === activeKey) || firstWithItems;

  const sectionTitle = t("whatToExpect.sectionTitle");

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-serif text-black font-medium text-center">
          {sectionTitle}
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 bg-[#efeee7] backdrop-blur-sm rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
              <ul className="list-disc pl-5 space-y-3 text-base text-[#2f2316]">
                {activeTab.items.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {localize(item)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#2f2316] text-base">
                {t("whatToExpect.comingSoon")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
