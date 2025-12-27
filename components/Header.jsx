import { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function Header() {
  const PROMO_H = 35;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  const { t } = useTranslation("layout");
  const router = useRouter();
  const { locale, asPath } = router;

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

  const isSolid = forceSolid || scrolled || isMobileMenuOpen || (canHover && isHovered);
  const isTransparent = !isSolid;

  const navText = isTransparent ? "text-white" : "text-gray-700";
  const navHover = isTransparent ? "hover:text-white" : "hover:text-black";
  const divider = isTransparent ? "text-white/60" : "text-gray-400";
  const langOff = isTransparent ? "text-white/80" : "text-gray-600";
  const langOn = isTransparent ? "text-white font-semibold" : "text-black font-semibold";
  const navGlow = isTransparent ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]" : "";

  const promoVisible = !scrolled;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 z-50 transition-all duration-300",
          isSolid
            ? "bg-white border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        style={{ top: promoVisible ? PROMO_H : 0 }}
        onMouseEnter={() => canHover && setIsHovered(true)}
        onMouseLeave={() => canHover && setIsHovered(false)}
      >
        <div
          className={`
            relative max-w-7xl mx-auto px-6
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
            <NextLink href="/aboutus" className={`${navHover} ${navGlow}`}>
              {t("nav.about")}
            </NextLink>
            <NextLink href="/contact" className={`${navHover} ${navGlow}`}>
              {t("nav.contact")}
            </NextLink>
            <NextLink href="/location" className={`${navHover} ${navGlow}`}>
              {t("nav.location")}
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
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden fixed left-0 right-0 flex flex-col items-center gap-4 py-3 bg-white border-t border-gray-200 max-h-[calc(100vh-120px)] overflow-y-auto shadow-md z-50"
          style={{ top: (promoVisible ? PROMO_H : 0) + 120 }}
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
          <NextLink href="/aboutus" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.about")}
          </NextLink>
          <NextLink href="/contact" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.contact")}
          </NextLink>
          <NextLink href="/location" className="text-sm text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
            {t("nav.location")}
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
