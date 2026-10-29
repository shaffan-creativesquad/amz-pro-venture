"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "OVERVIEW", href: "#hero" },
  { label: "FREE AUDIT", href: "#audit" },
  { label: "REVENUE LEAKS", href: "#revenue-leaks" },
  { label: "ROADMAP", href: "#roadmap" },
  { label: "MULTI-CHANNEL", href: "#multi-channel" },
  { label: "FAQ", href: "#faq" },
];

export default function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-10 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/amz-logo-without-background.png"
            alt="AMZ Pro Venture"
            width={200}
            height={55}
            priority
            className="h-14 w-auto"
            unoptimized
          />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="px-3 py-2 text-[12px] font-semibold text-[#000000] hover:text-[#ff9900] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#audit"
            onClick={(e) => handleScroll(e, "#audit")}
            className="bg-[#ff9900] text-white rounded-[7px] text-[13px] font-semibold uppercase hover:bg-black transition-colors whitespace-nowrap"
            style={{ padding: "10px 20px" }}
          >
            GET FREE AUDIT
          </a>
          <a
            href="tel:2067046094"
            className="bg-black text-white rounded-[7px] text-[13px] font-semibold uppercase hover:bg-[#ff9900] transition-colors whitespace-nowrap"
            style={{ padding: "10px 20px" }}
          >
            CALL NOW
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#000000] p-2"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-[#000000] mb-1 transition-all" style={{ transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "" }} />
          <div className="w-5 h-0.5 bg-[#000000] mb-1 transition-all" style={{ opacity: mobileOpen ? 0 : 1 }} />
          <div className="w-5 h-0.5 bg-[#000000] transition-all" style={{ transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-2.5 text-sm font-semibold text-[#000000] hover:text-[#ff9900] hover:bg-[#fff8f0] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <a
              href="#audit"
              onClick={(e) => handleScroll(e, "#audit")}
              className="flex-1 text-center bg-[#ff9900] text-white rounded-[7px] text-[13px] font-semibold uppercase hover:bg-black transition-colors py-3"
            >
              GET FREE AUDIT
            </a>
            <a
              href="tel:2067046094"
              className="flex-1 text-center bg-black text-white rounded-[7px] text-[13px] font-semibold uppercase hover:bg-[#ff9900] transition-colors py-3"
            >
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
