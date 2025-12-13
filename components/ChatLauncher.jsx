"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

const WHATSAPP_PHONE = "+526642077675";
const INSTAGRAM_HANDLE = "mavemedicalspa";
const BRAND_COLOR = "#731a2f"; // matches promo banner
const MIN_TOP = 88; // keep chat popover below header

export default function ChatLauncher() {
  const { t, i18n } = useTranslation("layout");
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [hideOnMobile, setHideOnMobile] = useState(false);
  const popoverRef = useRef(null);
  const lastLeadOpen = useRef(false);

  // allow external triggers with optional anchor location
  useEffect(() => {
    const handler = (e) => {
      if (e?.detail && typeof e.detail.x === "number" && typeof e.detail.y === "number") {
        setAnchor({
          x: e.detail.x,
          y: e.detail.y
        });
      } else {
        setAnchor(null);
      }
      setOpen(true);
    };
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  // react to lead modal state to hide chat button on small screens
  useEffect(() => {
    const computeHide = (leadOpen) => {
      lastLeadOpen.current = leadOpen;
      const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
      setHideOnMobile(Boolean(leadOpen && isMobile));
    };
    const handleLeadChange = (e) => computeHide(e?.detail?.open);
    const handleResize = () => computeHide(lastLeadOpen.current);
    window.addEventListener("lead-open-change", handleLeadChange);
    window.addEventListener("resize", handleResize);
    // initialize from body class
    computeHide(document.body.classList.contains("lead-open"));
    return () => {
      window.removeEventListener("lead-open-change", handleLeadChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // close on outside click or scroll
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (popoverRef.current && popoverRef.current.contains(e.target)) return;
      setOpen(false);
      setAnchor(null);
    };
    const handleScroll = () => {
      setOpen(false);
      setAnchor(null);
    };
    document.addEventListener("mousedown", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  // compute dynamic position when anchor exists
  const positionStyles = anchor
    ? {
        position: "fixed",
        top: Math.max(
          MIN_TOP,
          Math.min(
            anchor.y + 12,
            typeof window !== "undefined" ? window.innerHeight - 260 : anchor.y
          )
        ),
        left: Math.max(
          12,
          Math.min(
            anchor.x - 140,
            typeof window !== "undefined" ? window.innerWidth - 280 : anchor.x
          )
        ),
      }
    : {
        position: "fixed",
        bottom: "4rem",
        right: "1rem",
      };

  return (
    <div className="z-60" style={positionStyles}>
      {open && (
        <div
          ref={popoverRef}
          className="mb-3 bg-white border border-gray-200 rounded-xl shadow-lg w-64 overflow-hidden"
        >
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-900">
              {t("chat.title", { defaultValue: "Chat with us" })}
            </p>
            <p className="text-xs text-gray-600">
              {t("chat.subtitle", { defaultValue: "Choose your preferred channel" })}
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
                t("chat.whatsappMessage", {
                  defaultValue:
                    i18n.language === "es"
                      ? "Hola, me gustaría saber más sobre sus tratamientos."
                      : "Hi! I'd like to learn more about your treatments.",
                })
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition text-sm text-gray-900"
            >
              <span className="text-lg">💬</span>
              <span>{t("chat.whatsapp", { defaultValue: "WhatsApp" })}</span>
            </a>
            <a
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition text-sm text-gray-900 border-t border-gray-200"
            >
              <span className="text-lg">📷</span>
              <span>{t("chat.instagram", { defaultValue: "Instagram" })}</span>
            </a>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => {
          setAnchor(null);
          setOpen((prev) => !prev);
        }}
        className={`inline-flex items-center gap-2 text-white px-3 py-2.5 rounded-full shadow-lg transition ${
          hideOnMobile ? "opacity-0 pointer-events-none" : ""
        }`}
        style={{ backgroundColor: BRAND_COLOR }}
      >
        <span className="text-lg">{open ? "✕" : "✉️"}</span>
        <span className="text-sm font-semibold">
          {open
            ? t("chat.close", { defaultValue: "Close" })
            : i18n.language?.startsWith("es")
            ? "Chatea"
            : "Chat"}
        </span>
      </button>
    </div>
  );
}
