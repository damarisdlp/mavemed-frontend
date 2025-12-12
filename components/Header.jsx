import { useState, useEffect } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileToggle, setShowMobileToggle] = useState(true);
  const { t } = useTranslation("layout");
  const router = useRouter();
  const { locale, asPath } = router;

  // Hide the mobile toggle when scrolling on mobile
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = typeof window !== "undefined" ? window.innerWidth < 1024 : false;
      if (isMobile && window.scrollY > 0) {
        setShowMobileToggle(false);
        setIsMobileMenuOpen(false);
      } else {
        setShowMobileToggle(true);
      }
    };
    const handleResize = () => {
      const isMobile = typeof window !== "undefined" ? window.innerWidth < 1024 : false;
      if (!isMobile) {
        setShowMobileToggle(true);
      } else if (window.scrollY > 0) {
        setShowMobileToggle(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="relative max-w-7xl mx-auto px-6 py-6 md:py-5 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        {showMobileToggle && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        )}

        {/* Left Nav - Desktop */}
        <div className="flex-1 hidden lg:flex gap-5 text-base text-gray-600 whitespace-nowrap">
          <NextLink href="/treatments" className="hover:text-black">
            {t("nav.treatments")}
          </NextLink>
          <NextLink href="/promos" className="hover:text-black">
            {t("nav.promos") || "Promos"}
          </NextLink>
          <NextLink href="/aboutus" className="hover:text-black">
            {t("nav.about")}
          </NextLink>
          <NextLink href="/contact" className="hover:text-black">
            {t("nav.contact")}
          </NextLink>
          <NextLink href="/location" className="hover:text-black">
            {t("nav.location")}
          </NextLink>
        </div>

        {/* Centered Logo */}
        <div className="flex-shrink-0 mx-auto">
          <NextLink href="/" className="flex justify-center items-center">
            <Image src="/logo-mave.png" alt="Mave Logo" width={130} height={30} />
          </NextLink>
        </div>

        {/* Right CTA - Desktop */}
        <div className="flex-1 hidden lg:flex justify-end items-center gap-4">
          <div className="flex items-center gap-2">
            <NextLink
              href={asPath}
              locale="en"
              className={`text-sm hover:text-black ${
                locale === "en" ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              EN
            </NextLink>
            <span className="text-gray-400">|</span>
            <NextLink
              href={asPath}
              locale="es"
              className={`text-sm hover:text-black ${
                locale === "es" ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              ES
            </NextLink>
          </div>
          <button
            onClick={dispatchChatOpen}
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-[#731a2f]"
            type="button"
          >
            {t("nav.bookWhatsApp")}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-gray-300">
          <div className="flex items-center gap-2 mb-2">
            <NextLink
              href={asPath}
              locale="en"
              className={`text-sm hover:text-black ${
                locale === "en" ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              EN
            </NextLink>
            <span className="text-gray-400">|</span>
            <NextLink
              href={asPath}
              locale="es"
              className={`text-sm hover:text-black ${
                locale === "es" ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              ES
            </NextLink>
          </div>
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
            onClick={dispatchChatOpen}
            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-[#731a2f]"
            type="button"
          >
            {t("nav.bookWhatsApp")}
          </button>
        </nav>
      )}
    </header>
  );
}
