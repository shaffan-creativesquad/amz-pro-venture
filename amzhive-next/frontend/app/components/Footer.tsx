"use client";

import Link from "next/link";
import Image from "next/image";
import InfoBar from "./InfoBar";

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-10 h-10 rounded-full bg-[#ff9900] flex items-center justify-center text-white hover:bg-[#c0144a] transition-colors flex-shrink-0"
      aria-label="Scroll to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}


export default function Footer() {
  return (
    <footer className="w-full">
      <InfoBar />

      {/* Main footer */}
      <div className="bg-white py-14" style={{ borderTop: "2px solid #bfbfbf" }}>
        <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <Link href="/">
              <Image src="/amz-logo-without-background.png" alt="AMZ Pro Venture" width={220} height={70} className="h-16 w-auto" unoptimized />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#000000] font-bold text-base mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#ff9900] text-sm hover:underline transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-[#67768e] text-sm hover:text-[#ff9900] transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-[#67768e] text-sm hover:text-[#ff9900] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-[#000000] font-bold text-base mb-5">Follow</h4>
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "#",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.22 8.22 0 0 0 4.8 1.54V7a4.85 4.85 0 0 1-1.03-.31z"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                  style={{ backgroundColor: "#000000" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#ff9900")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#000000")}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Gradient line */}
      <div className="w-full">
        <Image src="/Line-3.png" alt="" width={1440} height={6} className="w-full h-auto" unoptimized />
      </div>

      {/* Bottom bar */}
      <div className="bg-white py-4">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#000000] text-sm">Copyright 2026 AMZ Pro Venture</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-[#000000] text-sm hover:text-[#ff9900] transition-colors">Privacy Policy</Link>
            <span className="text-[#bfbfbf]">|</span>
            <Link href="/terms-condition" className="text-[#000000] text-sm hover:text-[#ff9900] transition-colors">Terms &amp; Condition</Link>
            <span className="text-[#bfbfbf]">|</span>
            <Link href="/refund-policy" className="text-[#000000] text-sm hover:text-[#ff9900] transition-colors">Refund policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
