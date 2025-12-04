"use client"; // add this if you're in app directory or Next.js 13+

import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function ScrollToTopButton() {
  const { t } = useTranslation("layout");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm hover:bg-[#731a2f] transition"
      aria-label={t("scrollTop.aria")}
    >
      {t("scrollTop.label")}
    </button>
  );
}
