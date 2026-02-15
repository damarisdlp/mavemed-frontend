import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getLocalized } from "@/lib/i18n/getLocalized";

export default function FAQSection({
  faqs = [],
  faqSections = [],
  locale: propLocale,
  heading = "",
  sectionClassName = "bg-white text-black py-12",
  containerClassName = "max-w-4xl mx-auto px-4",
}) {
  const router = useRouter();
  const locale = propLocale || router.locale || "en";
  const { t } = useTranslation("treatments");

  const localize = (field) => getLocalized(field, locale);
  const hasSections = Array.isArray(faqSections) && faqSections.length > 0;
  const hasFaqs = Array.isArray(faqs) && faqs.length > 0;

  if (!hasSections && !hasFaqs) return null;

  const headingText = heading || t("faq.heading");

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h3 className="text-2xl font-serif font-medium text-center mb-6">
          {headingText}
        </h3>
        {hasSections ? (
          <div className="space-y-8">
            {faqSections.map((section, sectionIdx) => {
              const sectionTitle = localize(section?.title);
              const sectionFaqs = Array.isArray(section?.faqs) ? section.faqs : [];
              if (!sectionFaqs.length) return null;

              const sectionKey = section?.id || sectionTitle || sectionIdx;
              return (
                <div key={sectionKey} className="space-y-3">
                  {sectionTitle ? (
                    <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      {sectionTitle}
                    </h4>
                  ) : null}
                  <div className="space-y-4">
                    {sectionFaqs.map((faq, idx) => (
                      <ToggleItem
                        key={`${sectionKey}-${idx}`}
                        question={localize(faq.question)}
                        answer={localize(faq.answer)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ToggleItem
                key={idx}
                question={localize(faq.question)}
                answer={localize(faq.answer)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ToggleItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 w-full rounded-lg bg-[#efeee7]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50"
      >
        <span className="font-medium text-base text-gray-900">
          {question}
        </span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 py-4 pb-4 text-sm text-gray-700 transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}
