import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { dispatchChatOpen } from "@/lib/utils/chat";
import { getActiveLeadForm, isPromoLeadForm } from "@/lib/data/leadForms";
import { getTreatmentsNavigation } from "@/lib/navigation/treatmentsMenu";

function ChevronIcon({ open, className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={["h-4 w-4 transition-transform duration-200", open ? "rotate-180" : "", className]
        .filter(Boolean)
        .join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={["h-5 w-5", className].filter(Boolean).join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      <path d="M5 5l10 10M15 5 5 15" />
    </svg>
  );
}

function BackIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={["h-5 w-5", className].filter(Boolean).join(" ")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11.5 4.5-5 5 5 5" />
    </svg>
  );
}

function TreatmentsMenuList({ title, items, onNavigate }) {
  return (
    <section>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <NextLink
              href={item.href}
              onClick={onNavigate}
              className="block rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-[#f7f4f2] hover:text-[#731a2f]"
            >
              {item.label}
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MobileTreatmentsAccordionSection({
  title,
  items,
  isOpen,
  onToggle,
  onNavigate,
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[1.1rem] font-medium text-gray-900">{title}</span>
        <ChevronIcon open={isOpen} className="text-gray-700" />
      </button>

      {isOpen && (
        <ul className="space-y-4 pb-5">
          {items.map((item) => (
            <li key={item.id}>
              <NextLink
                href={item.href}
                onClick={onNavigate}
                className="block text-base text-gray-800 transition hover:text-[#731a2f]"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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
  const [isMobileTreatmentsMenuOpen, setIsMobileTreatmentsMenuOpen] = useState(false);
  const [isDesktopTreatmentsMenuOpen, setIsDesktopTreatmentsMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const headerRef = useRef(null);
  const desktopTreatmentsTriggerRef = useRef(null);
  const desktopTreatmentsMenuRef = useRef(null);

  const { t } = useTranslation("layout");
  const router = useRouter();
  const { locale, asPath } = router;
  const treatmentsNav = getTreatmentsNavigation(t);
  const isTreatmentsActive = (asPath || "").startsWith("/treatments");
  const activeForm = getActiveLeadForm();
  const hasPromoBanner = isPromoLeadForm(activeForm);

  const forceSolid = [
    "/promos",
    "/spring-valentines-mave-medical-spa-promos",
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
    "/plla-candidacy",
    "/plla-rf-candidacy",
    "/sculptra-candidacy",
    "/sculptra-rf-candidacy",
    "/thank-you-rf-microneedling",
    "/thank-you-plla",
    "/thank-you-plla-rf",
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
      if (window.scrollY > 0) {
        setIsMobileMenuOpen(false);
        setIsMobileTreatmentsMenuOpen(false);
        setIsDesktopTreatmentsMenuOpen(false);
        setExpandedMobileSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!headerRef.current) return;

    const updateHeaderOffset = () => {
      if (!headerRef.current) return;
      const rect = headerRef.current.getBoundingClientRect();
      const offset = Math.round(rect.bottom);
      document.documentElement.style.setProperty("--site-header-offset", `${offset}px`);
    };

    updateHeaderOffset();

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => updateHeaderOffset());
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener("resize", updateHeaderOffset);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateHeaderOffset);
    };
  }, [hasPromoBanner]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileTreatmentsMenuOpen(false);
    setIsDesktopTreatmentsMenuOpen(false);
    setExpandedMobileSection(null);
  }, [asPath, locale]);

  useEffect(() => {
    if (!isDesktopTreatmentsMenuOpen) return;

    const handlePointerDown = (event) => {
      if (desktopTreatmentsMenuRef.current?.contains(event.target)) return;
      if (desktopTreatmentsTriggerRef.current?.contains(event.target)) return;
      setIsDesktopTreatmentsMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isDesktopTreatmentsMenuOpen]);

  const allowTransparent = !forceSolid;
  const isSolid =
    !allowTransparent ||
    scrolled ||
    isMobileMenuOpen ||
    isMobileTreatmentsMenuOpen ||
    isDesktopTreatmentsMenuOpen ||
    (canHover && isHovered);
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
        ref={headerRef}
        className={[
          "fixed inset-x-0 z-50 transition-all duration-300",
          isSolid
            ? "bg-white border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        style={{ top: hasPromoBanner ? PROMO_H : 0 }}
        onMouseEnter={() => canHover && setIsHovered(true)}
        onMouseLeave={() => {
          if (!canHover) return;
          setIsHovered(false);
          setIsDesktopTreatmentsMenuOpen(false);
        }}
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
              onClick={() => {
                setIsMobileMenuOpen((open) => {
                  const nextOpen = !open;
                  if (!nextOpen) {
                    setIsMobileTreatmentsMenuOpen(false);
                    setExpandedMobileSection(null);
                  }
                  return nextOpen;
                });
              }}
              className={`${navText} ${navGlow} focus:outline-none`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              ☰
            </button>
          </div>

          {/* Desktop left nav */}
          <div className={`hidden lg:flex flex-1 gap-5 text-base whitespace-nowrap ${navText} ${navGlow}`}>
            <button
              ref={desktopTreatmentsTriggerRef}
              type="button"
              onMouseEnter={() => {
                if (canHover) setIsDesktopTreatmentsMenuOpen(true);
              }}
              onClick={() => {
                if (canHover) return;
                setIsDesktopTreatmentsMenuOpen((open) => !open);
              }}
              className={[
                "inline-flex items-center gap-1",
                isTreatmentsActive ? "text-black font-semibold" : `${navHover} ${navGlow}`,
              ].join(" ")}
              aria-expanded={isDesktopTreatmentsMenuOpen}
              aria-haspopup="true"
            >
              {t("nav.treatments")}
              <ChevronIcon
                open={isDesktopTreatmentsMenuOpen}
                className={isTreatmentsActive ? "text-black" : navGlow}
              />
            </button>
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

        {isDesktopTreatmentsMenuOpen && (
          <div className="absolute inset-x-0 top-full hidden pt-3 lg:block">
            <nav
              ref={desktopTreatmentsMenuRef}
              className="mx-auto max-w-7xl px-6"
              aria-label={treatmentsNav.title}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_320px] gap-6 rounded-[28px] border border-gray-200 bg-white p-6 shadow-xl">
                <TreatmentsMenuList
                  title={treatmentsNav.byType.label}
                  items={treatmentsNav.byType.items}
                  onNavigate={() => setIsDesktopTreatmentsMenuOpen(false)}
                />

                <TreatmentsMenuList
                  title={treatmentsNav.byGoal.label}
                  items={treatmentsNav.byGoal.items}
                  onNavigate={() => setIsDesktopTreatmentsMenuOpen(false)}
                />

                <aside className="flex flex-col justify-between rounded-3xl bg-[#f7f4f2] p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d655f]">
                      {treatmentsNav.featured.eyebrow}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-gray-900">
                      {treatmentsNav.featured.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">
                      {treatmentsNav.featured.copy}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsDesktopTreatmentsMenuOpen(false);
                        dispatchChatOpen();
                      }}
                      className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm text-white transition hover:bg-[#731a2f]"
                    >
                      {treatmentsNav.featured.primaryLabel}
                    </button>
                    <NextLink
                      href={treatmentsNav.featured.secondaryHref}
                      onClick={() => setIsDesktopTreatmentsMenuOpen(false)}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm text-gray-900 transition hover:border-black hover:text-[#731a2f]"
                    >
                      {treatmentsNav.featured.secondaryLabel}
                    </NextLink>
                  </div>
                </aside>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden fixed left-0 right-0 border-t border-gray-200 bg-white shadow-md z-50"
          style={{ top: (hasPromoBanner ? PROMO_H : 0) + 105 }}
        >
          {isMobileTreatmentsMenuOpen ? (
            <div className="max-h-[calc(100vh-120px)] min-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileTreatmentsMenuOpen(false);
                    setExpandedMobileSection(null);
                  }}
                  className="rounded-full p-1 text-gray-700 transition hover:bg-gray-100"
                  aria-label="Back"
                >
                  <BackIcon />
                </button>
                <span className="font-serif text-xl text-gray-900">{treatmentsNav.title}</span>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileTreatmentsMenuOpen(false);
                    setExpandedMobileSection(null);
                  }}
                  className="rounded-full p-1 text-gray-700 transition hover:bg-gray-100"
                  aria-label="Close treatments menu"
                >
                  <CloseIcon />
                </button>
              </div>

              <div className="px-5">
                <MobileTreatmentsAccordionSection
                  title={treatmentsNav.byType.label}
                  items={treatmentsNav.byType.items}
                  isOpen={expandedMobileSection === treatmentsNav.byType.id}
                  onToggle={() =>
                    setExpandedMobileSection((current) =>
                      current === treatmentsNav.byType.id ? null : treatmentsNav.byType.id
                    )
                  }
                  onNavigate={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileTreatmentsMenuOpen(false);
                    setExpandedMobileSection(null);
                  }}
                />

                <MobileTreatmentsAccordionSection
                  title={treatmentsNav.byGoal.label}
                  items={treatmentsNav.byGoal.items}
                  isOpen={expandedMobileSection === treatmentsNav.byGoal.id}
                  onToggle={() =>
                    setExpandedMobileSection((current) =>
                      current === treatmentsNav.byGoal.id ? null : treatmentsNav.byGoal.id
                    )
                  }
                  onNavigate={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileTreatmentsMenuOpen(false);
                    setExpandedMobileSection(null);
                  }}
                />

                <NextLink
                  href="/treatments"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileTreatmentsMenuOpen(false);
                    setExpandedMobileSection(null);
                  }}
                  className="block py-5 text-base text-gray-900 transition hover:text-[#731a2f]"
                >
                  {treatmentsNav.viewAllLabel}
                </NextLink>

                <div className="border-t border-gray-200 py-5">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileTreatmentsMenuOpen(false);
                      setExpandedMobileSection(null);
                      dispatchChatOpen();
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm text-white transition hover:bg-[#731a2f]"
                  >
                    {treatmentsNav.featured.primaryLabel}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex max-h-[calc(100vh-120px)] flex-col items-center gap-4 overflow-y-auto py-3">
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

              <button
                type="button"
                onClick={() => {
                  setIsMobileTreatmentsMenuOpen(true);
                  setExpandedMobileSection(treatmentsNav.byType.id);
                }}
                className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-black"
                aria-expanded={isMobileTreatmentsMenuOpen}
                aria-haspopup="true"
              >
                {t("nav.treatments")}
                <ChevronIcon open={false} />
              </button>
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
            </div>
          )}
        </nav>
      )}
    </>
  );
}
