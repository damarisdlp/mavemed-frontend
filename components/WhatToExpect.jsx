import { useMemo, useState } from "react";
import { useRouter } from "next/router";

export default function WhatToExpect({ expectations = {}, locale: propLocale }) {
  const { locale: routerLocale } = useRouter();
  const locale = propLocale || routerLocale || "en";

  const getLocalized = (field) => {
    if (field == null) return "";
    if (typeof field === "object") {
      if (field[locale]) return field[locale];
      if (field.en) return field.en;
      return "";
    }
    return field;
  };

  const tabs = useMemo(() => {
    const beforeItems = expectations.beforeTreatment || expectations.preTreatment || [];
    const duringItems = expectations.duringTreatment || [];
    const afterItems = expectations.afterTreatment || expectations.postTreatment || [];

    const beforeLabel = locale === "es" ? "Antes del tratamiento" : "Before Treatment";
    const duringLabel = locale === "es" ? "Durante el tratamiento" : "During Treatment";
    const afterLabel = locale === "es" ? "Después del tratamiento" : "After Treatment";

    return [
      { key: "before", label: beforeLabel, items: beforeItems },
      { key: "during", label: duringLabel, items: duringItems },
      { key: "after", label: afterLabel, items: afterItems },
    ];
  }, [expectations, locale]);

  const firstWithItems = tabs.find((tab) => tab.items?.length) || tabs[0];
  const [activeKey, setActiveKey] = useState(firstWithItems.key);

  const activeTab = tabs.find((tab) => tab.key === activeKey) || firstWithItems;

  const sectionTitle = locale === "es" ? "Qué puedes esperar" : "What to Expect";

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
                      ? "bg-white text-black border-white shadow-md"
                      : "bg-black text-white border-transparent hover:bg-white/80"
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
                    {getLocalized(item)}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#2f2316] text-base">
                {locale === "es" ? "Próximamente" : "Details coming soon."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
