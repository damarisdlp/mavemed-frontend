import { useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Header Bar */}
      <div className="relative max-w-7xl mx-auto px-6 py-6 md:py-5 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>

        {/* Left Nav - Desktop */}
        <div className="flex-1 hidden lg:flex gap-5 text-base text-gray-600 whitespace-nowrap">
          <NextLink href="/treatments" className="hover:text-black">{t('nav.treatments')}</NextLink>
          <NextLink href="/aboutus" className="hover:text-black">{t('nav.about')}</NextLink>
          <NextLink href="/contact" className="hover:text-black">{t('nav.contact')}</NextLink>
          <NextLink href="/location" className="hover:text-black">{t('nav.location')}</NextLink>
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
            <button onClick={() => router.push(router.pathname, router.asPath, { locale: 'en' })} className="text-sm text-gray-600 hover:text-black">EN</button>
            <span className="text-gray-400">|</span>
            <button onClick={() => router.push(router.pathname, router.asPath, { locale: 'es' })} className="text-sm text-gray-600 hover:text-black">ES</button>
          </div>
          <a
            href="https://wa.me/+526642077675"
            className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-[#731a2f]"
          >
            {t('nav.bookWhatsApp')}
          </a>
        </div>
      </div>

      {/* ✅ Mobile Menu Below Header */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-gray-300">
          <div className="flex items-center gap-2 mb-2">
            <button onClick={() => router.push(router.pathname, router.asPath, { locale: 'en' })} className="text-sm text-gray-600 hover:text-black">EN</button>
            <span className="text-gray-400">|</span>
            <button onClick={() => router.push(router.pathname, router.asPath, { locale: 'es' })} className="text-sm text-gray-600 hover:text-black">ES</button>
          </div>
          <NextLink href="/treatments" className="text-sm text-gray-700 hover:text-black">{t('nav.treatments')}</NextLink>
          <NextLink href="/aboutus" className="text-sm text-gray-700 hover:text-black">{t('nav.about')}</NextLink>
          <NextLink href="/contact" className="text-sm text-gray-700 hover:text-black">{t('nav.contact')}</NextLink>
          <NextLink href="/location" className="text-sm text-gray-700 hover:text-black">{t('nav.location')}</NextLink>
          <a
            href="https://wa.me/+526642077675"
            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-[#731a2f]"
          >
            {t('nav.bookWhatsApp')}
          </a>
        </nav>
      )}
    </header>
  );
}