import { useState } from "react";

export function AccordionToggle({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className="border-t py-4"
      onClick={(e) => {
        // Only toggle when clicking the container area (not inner content)
        if (e.currentTarget === e.target) toggle();
      }}
      role="presentation"
    >
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left text-lg font-medium focus:outline-none"
      >
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="mt-2 text-gray-700">{children}</div>}
    </div>
  );
}
