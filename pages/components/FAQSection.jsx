import { useState } from "react";

export default function FAQSection({ faqs }) {
  if (!faqs?.length) return null;

  return (
    <div className="bg-white text-black mb-10">
      <h3 className="text-2xl m-5 font-serif font-medium text-center">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col items-center space-y-3">
        {faqs.map((faq, idx) => (
          <ToggleItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

function ToggleItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 w-full max-w-xl rounded-lg bg-{#efeee7}">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50"
      >
        <span className="font-medium text-base text-gray-900">{question}</span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-700 transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}