import { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function Header() {
  const PROMO_H = 35; // matches h-10

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  const { t } = useTranslation("layout");
  const router = useRouter();
  const { locale, asPath } = router;
  const forceSolid = ["/promos", "/contact", "/location", "/privacy", "/terms", "/accessibility"].some((path) =>
    (asPath || "").startsWith(path)
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(Boolean(mq.matches));

    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
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

  // Background: solid on scroll, on hover (desktop), mobile menu open, or forced by page
  const isSolid = forceSolid || scrolled || isMobileMenuOpen || (canHover && isHovered);
  const isTransparent = !isSolid;

  // Text colors invert while transparent
  const navText = isTransparent ? "text-white" : "text-gray-700";
  const navHover = isTransparent ? "hover:text-white" : "hover:text-black";
  const divider = isTransparent ? "text-white/60" : "text-gray-400";
  const langOff = isTransparent ? "text-white/80" : "text-gray-600";
  const langOn = isTransparent ? "text-white font-semibold" : "text-black font-semibold";

  // Promo visible only when NOT scrolled
  const promoVisible = !scrolled;

  return (
    <>

      {/* Header, fixed, smoothly moves up when promo disappears */}
      <header
        className={[
          "fixed inset-x-0 z-50 transition-all duration-300",
          isSolid
            ? "bg-white border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        style={{
          top: promoVisible ? PROMO_H : 0, // this is the gap fix
        }}
        onMouseEnter={() => {
          if (canHover) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (canHover) setIsHovered(false);
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-4 md:pt-6 md:pb-5 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className={`lg:hidden ${navText} focus:outline-none`}
            aria-label="Open menu"
            type="button"
          >
            ☰
          </button>

          {/* Left Nav, Desktop */}
          <div className={`flex-1 hidden lg:flex gap-5 text-base whitespace-nowrap ${navText}`}>
            <NextLink href="/treatments" className={navHover}>
              {t("nav.treatments")}
            </NextLink>
            <NextLink href="/promos" className={navHover}>
              {t("nav.promos") || "Promos"}
            </NextLink>
            <NextLink href="/aboutus" className={navHover}>
              {t("nav.about")}
            </NextLink>
            <NextLink href="/contact" className={navHover}>
              {t("nav.contact")}
            </NextLink>
            <NextLink href="/location" className={navHover}>
              {t("nav.location")}
            </NextLink>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 mx-auto">
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
          <div className="lg:hidden flex items-center">
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

          {/* Right CTA, Desktop */}
          <div className="flex-1 hidden lg:flex justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <NextLink
                href={asPath}
                locale="en"
                className={`text-sm hover:opacity-100 ${locale === "en" ? langOn : langOff}`}
              >
                EN
              </NextLink>
              <span className={divider}>|</span>
              <NextLink
                href={asPath}
                locale="es"
                className={`text-sm hover:opacity-100 ${locale === "es" ? langOn : langOff}`}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-gray-200">
            <NextLink href="/treatments" className="text-sm text-gray-700 hover:text-black">
              {t("nav.treatments")}
            </NextLink>
            <NextLink href="/promos" className="text-sm text-gray-700 hover:text-black">
              {t("nav.promos") || "Promos"}
            </NextLink>
            <NextLink href="/aboutus" className="text-sm text-gray-700 hover:text-black">
              {t("nav.about")}
            </NextLink>
            <NextLink href="/contact" className="text-sm text-gray-700 hover:text-black">
              {t("nav.contact")}
            </NextLink>
            <NextLink href="/location" className="text-sm text-gray-700 hover:text-black">
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
      </header>

      {/* Optional: reserve space ONLY for non-hero pages so content doesn't hide under fixed bars.
          If your homepage hero already accounts for the overlay, remove this entirely. */}
      {/* <div className="h-[calc(40px+96px)]" /> */}
    </>
  );
}
