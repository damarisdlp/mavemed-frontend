import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex-1 hidden lg:flex gap-5 text-base text-gray-600 whitespace-nowrap">          <Link href="/treatments" className="hover:text-black">Treatments</Link>
          <a href="/aboutus" className="hover:text-black">About Us</a>
          <a href="/contact" className="hover:text-black">Contact Us</a>
          <a href="/location" className="hover:text-black">Location</a>
        </div>

        {/* Centered Logo */}
        <div className="flex-shrink-0 mx-auto">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo-mave.png" alt="Mave Logo" width={130} height={30} />
          </Link>
        </div>

        {/* Right CTA - Desktop */}
        <div className="flex-1 hidden lg:flex justify-end">
          <a
            href="https://wa.me/+526642077675"
            className="bg-black text-white px-4 py-2 rounded-full text-m hover:bg-[#731a2f]"
          >
            Book via WhatsApp
          </a>
        </div>
      </div>

      {/* ✅ Mobile Menu Below Header */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-gray-300">
          <Link href="/treatments" className="text-sm text-gray-700 hover:text-black">Treatments</Link>
          <Link href="/aboutus" className="text-sm text-gray-700 hover:text-black">About Us</Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-black">Contact Us</Link>
          <Link href="/location" className="text-sm text-gray-700 hover:text-black">Location</Link>
          <a
            href="https://wa.me/+526642077675"
            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-[#731a2f]"
          >
            Book via WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}