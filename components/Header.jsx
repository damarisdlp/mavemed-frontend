import { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { dispatchChatOpen } from "@/lib/utils/chat";
import { getActiveLeadForm, isPromoLeadForm } from "@/lib/data/leadForms";

export default function Header() {
  const PROMO_H = 35;
  const PHONE_NUMBER = "+526642077675";
  const PHONE_DISPLAY = "(664) 207 - 7675";
  const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/mavemedicalspa",
    facebook: "https://www.facebook.com/mavemedicalspa",
    tiktok: "https://www.tiktok.com/@mavemedicalspa",
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  const { t } = useTranslation("layout");
  const router = useRouter();
  const { locale, asPath } = router;
  const activeForm = getActiveLeadForm();
  const hasPromoBanner = isPromoLeadForm(activeForm);

  const forceSolid = [
    "/promos",
    "/contact",
    "/location",
    "/privacy",
    "/terms",
    "/accessibility",
    "/aboutus",
    "/ourteam",
    "/treatments",
    "/faq",
    "/rf-microneedling-candidacy",
    "/sculptra-candidacy",
    "/sculptra-rf-candidacy",
    "/thank-you-rf-microneedling",
    "/thank-you-sculptra",
    "/thank-you-sculptra-rf",
    "/thank-you-treatment",
    "/learn",
  ].some((path) => (asPath || "").startsWith(path));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(Boolean(mq.matches));

    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const s = window.scrollY > 10;
      setScrolled(s);
      if (window.scrollY > 0) setIsMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const allowTransparent = !forceSolid;
  const isSolid =
    !allowTransparent || scrolled || isMobileMenuOpen || (canHover && isHovered);
  const isTransparent = !isSolid;

  const navText = isTransparent ? "text-white" : "text-gray-700";
  const navHover = isTransparent ? "hover:text-white" : "hover:text-black";
  const divider = isTransparent ? "text-white/60" : "text-gray-400";
  const langOff = isTransparent ? "text-white/80" : "text-gray-600";
  const langOn = isTransparent ? "text-white font-semibold" : "text-black font-semibold";
  const navGlow = isTransparent ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]" : "";

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 z-50 transition-all duration-300",
          isSolid
            ? "bg-white border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        style={{ top: hasPromoBanner ? PROMO_H : 0 }}
        onMouseEnter={() => canHover && setIsHovered(true)}
        onMouseLeave={() => canHover && setIsHovered(false)}
      >
        <div
          className={`
            relative max-w-8xl mx-auto px-6
            pt-10 pb-3 mb-3 md:pt-6 md:pb-5
            grid grid-cols-3 items-center
            lg:flex lg:items-center lg:justify-between
          `}
        >
          {/* Mobile menu toggle */}
          <div className="justify-self-start lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`${navText} ${navGlow} focus:outline-none`}
              aria-label="Open menu"
              type="button"
            >
              ☰
            </button>
          </div>

          {/* Desktop left nav */}
          <div className={`hidden lg:flex flex-1 gap-5 text-base whitespace-nowrap ${navText} ${navGlow}`}>
            <NextLink href="/treatments" className={`${navHover} ${navGlow}`}>
              {t("nav.treatments")}
            </NextLink>
            <NextLink href="/promos" className={`${navHover} ${navGlow}`}>
              {t("nav.promos") || "Promos"}
            </NextLink>
            <NextLink href="/learn" className={`${navHover} ${navGlow}`}>
              {t("nav.learn") || "Learn"}
            </NextLink>
            <NextLink href="/aboutus" className={`${navHover} ${navGlow}`}>
              {t("nav.about")}
            </NextLink>
            <NextLink href="/contact" className={`${navHover} ${navGlow}`}>
              {t("nav.contact")}
            </NextLink>
            <NextLink href="/location" className={`${navHover} ${navGlow}`}>
              {t("nav.location")}
            </NextLink>
            <NextLink href="/faq" className={`${navHover} ${navGlow}`}>
              {t("nav.faq") || "FAQs"}
            </NextLink>
          </div>

          {/* Logo – truly centered on mobile */}
          <div className="justify-self-center lg:flex-shrink-0 lg:mx-auto">
            <NextLink href="/" className="flex items-center justify-center">
              <Image
                src="/logo-mave.png"
                alt="Mave Logo"
                width={130}
                height={30}
                priority
                className={isTransparent ? "brightness-0 invert" : ""}
              />
            </NextLink>
          </div>

          {/* Mobile CTA */}
          <div className="justify-self-end lg:hidden">
            {!isMobileMenuOpen && (
              <div className="flex flex-col items-end gap-2">
                <div className={`grid grid-cols-2 gap-x-3 gap-y-2 ${navText} ${navGlow}`}>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:opacity-80 transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                    </svg>
                  </a>
                  <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v3H6v3h3v5h3v-5h3l1-3h-4v-3c0-.6.4-1 1-1z" />
                  </svg>
                </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="hover:opacity-80 transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M14 3h2c.2 1.6 1.1 3 2.6 3.7.7.3 1.5.5 2.4.5v2.2c-1.2 0-2.3-.3-3.3-.8-.6-.3-1.1-.7-1.5-1.1V15a6 6 0 1 1-6-6c.2 0 .4 0 .6.1v2.4a3.6 3.6 0 1 0 3.4 3.6V3z" />
                    </svg>
                  </a>
                  <a
                    href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`}
                    aria-label="Phone"
                    className="hover:opacity-80 transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M6.6 3.6c.4-.4 1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4l-1.2 1.2c-.2.2-.3.6-.2.9.5 1.6 1.8 3.4 3.4 5 .6.6 1.2 1.1 1.9 1.6.3.2.7.2.9 0l1.3-1.3c.4-.4 1-.4 1.4 0l2.2 2.2c.4.4.4 1 0 1.4l-1.6 1.6c-.7.7-1.8 1-2.8.7-2.2-.7-4.6-2.2-6.7-4.3-2.1-2.1-3.6-4.5-4.3-6.7-.3-1 0-2.1.7-2.8l1.5-1.5z" />
                    </svg>
                  </a>
                </div>
                <button
                  onClick={dispatchChatOpen}
                  className={
                    isTransparent
                      ? "bg-white text-black px-3 py-2 rounded-full text-xs hover:bg-gray-100"
                      : "bg-black text-white px-3 py-2 rounded-full text-xs hover:bg-[#731a2f]"
                  }
                  type="button"
                >
                  {t("nav.bookWhatsApp")}
                </button>
              </div>
            )}
          </div>

          {/* Desktop right CTA */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
            <div className={`flex items-center gap-2 ${navGlow}`}>
              <NextLink
                href={asPath}
                locale="en"
                className={`text-sm ${locale === "en" ? langOn : langOff} ${navGlow}`}
              >
                EN
              </NextLink>
              <span className={`${divider} ${navGlow}`}>|</span>
              <NextLink
                href={asPath}
                locale="es"
                className={`text-sm ${locale === "es" ? langOn : langOff} ${navGlow}`}
              >
                ES
              </NextLink>
            </div>

            <button
              onClick={dispatchChatOpen}
              className={
                isTransparent
                  ? "bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-100"
                  : "bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-[#731a2f]"
              }
              type="button"
            >
              {t("nav.bookWhatsApp")}
            </button>

            <div className={`flex flex-col items-center gap-2 ${navText} ${navGlow}`}>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v3H6v3h3v5h3v-5h3l1-3h-4v-3c0-.6.4-1 1-1z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="hover:opacity-80 transition"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M16 3a5 5 0 0 0 3 1v3a8 8 0 0 1-3-.6V14a5 5 0 1 1-5-5h1v3h-1a2 2 0 1 0 2 2V3h3z" />
                  </svg>
                </a>
              </div>
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-sm hover:opacity-80 transition whitespace-nowrap"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden fixed left-0 right-0 flex flex-col items-center gap-4 py-3 bg-white border-t border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto shadow-md z-50"
          style={{ top: (promoVisible ? PROMO_H : 0) + 105 }}
        >
          <div className="flex items-center gap-2 mb-1">
            <NextLink
              href={asPath}
              locale="en"
              className={`text-sm ${locale === "en" ? "text-black font-semibold" : "text-gray-600"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EN
            </NextLink>
            <span className="text-gray-400">|</span>
            <NextLink
              href={asPath}
              locale="es"
              className={`text-sm ${locale === "es" ? "text-black font-semibold" : "text-gray-600"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ES
            </NextLink>
          </div>

          <NextLink href="/treatments" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.treatments")}
          </NextLink>
          <NextLink href="/promos" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.promos") || "Promos"}
          </NextLink>
          <NextLink href="/learn" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.learn") || "Learn"}
          </NextLink>
          <NextLink href="/aboutus" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.about")}
          </NextLink>
          <NextLink href="/contact" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.contact")}
          </NextLink>
          <NextLink href="/location" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.location")}
          </NextLink>
          <NextLink href="/faq" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.faq") || "FAQs"}
          </NextLink>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              dispatchChatOpen();
            }}
            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-[#731a2f]"
            type="button"
          >
            {t("nav.bookWhatsApp")}
          </button>
        </nav>
      )}
    </>
  );
}
