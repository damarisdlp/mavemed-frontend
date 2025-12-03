import { useState } from "react";
import { useRouter } from "next/router";

export default function FAQSection({ faqs = [], locale: propLocale }) {
  const router = useRouter();
  const locale = propLocale || router.locale || "en";

  console.log("📌 FAQSection locale:", locale);

  const getLocalized = (field) => {
    if (typeof field === "object" && field !== null) {
      return field[locale] || field["en"] || "";
    }
    return field || "";
  };

  if (!faqs.length) return null;

  const headingText =
    locale === "es" ? "Preguntas frecuentes" : "Frequently Asked Questions";

  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-serif font-medium text-center mb-6">
          {headingText}
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ToggleItem
              key={idx}
              question={getLocalized(faq.question)}
              answer={getLocalized(faq.answer)}
            />
          ))}
        </div>
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