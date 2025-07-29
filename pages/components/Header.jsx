// components/Header.jsx

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="relative max-w-7xl mx-auto px-6 py-6 md:py-5 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          ☰
        </button>

        {/* Left Nav - Desktop */}
        <nav className="hidden md:flex gap-6 text-base text-gray-600">
          <Link href="/treatments" className="hover:text-black">Treatments</Link>
          <a href="#about" className="hover:text-black">About Us</a>
          <a href="#contact" className="hover:text-black">Contact Us</a>
          <a href="#location" className="hover:text-black">Location</a>
        </nav>

        {/* Centered Logo */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
        >
          <Image src="/logo-mave.png" alt="Mave Logo" width={130} height={30} />
        </Link>

        {/* Right CTA - Desktop */}
        <a
          href="https://wa.me/+526642077675"
          className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-full text-m hover:bg-[#731a2f]"
        >
          Book via WhatsApp
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-4 bg-white border-t">
          <Link href="/treatments" className="text-sm text-gray-700 hover:text-black">Treatments</Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-black">About Us</Link>
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