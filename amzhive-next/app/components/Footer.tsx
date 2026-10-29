"use client";

import Link from "next/link";
import Image from "next/image";
import InfoBar from "./InfoBar";

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-10 h-10 rounded-full bg-[#E91C59] flex items-center justify-center text-white hover:bg-[#c0144a] transition-colors flex-shrink-0"
      aria-label="Scroll to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#1e293b] hover:text-[#E91C59] transition-colors text-sm">
      <span className="w-7 h-7 rounded bg-[#E91C59] flex items-center justify-center text-white flex-shrink-0">
        {children}
      </span>
      {label}
    </Link>
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
              <Image src="/AMZ-HIVE-New.png" alt="AMZ HIVE" width={160} height={50} className="h-12 w-auto" unoptimized />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#1e293b] font-bold text-base mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#E91C59] text-sm hover:underline transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-[#67768e] text-sm hover:text-[#E91C59] transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="text-[#67768e] text-sm hover:text-[#E91C59] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-[#1e293b] font-bold text-base mb-5">Follow</h4>
            <ul className="space-y-3">
              <li>
                <SocialIcon href="https://www.facebook.com/amzhivellc" label="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://www.instagram.com/amzhivellc/" label="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </SocialIcon>
              </li>
              <li>
                <SocialIcon href="https://www.linkedin.com/company/amz-hive-llc/" label="Linkedin">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </SocialIcon>
              </li>
            </ul>
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
          <p className="text-[#1e293b] text-sm">Copyright 2026 Amzhive</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-[#1e293b] text-sm hover:text-[#E91C59] transition-colors">Privacy Policy</Link>
            <span className="text-[#bfbfbf]">|</span>
            <Link href="/terms-condition" className="text-[#1e293b] text-sm hover:text-[#E91C59] transition-colors">Terms &amp; Condition</Link>
            <span className="text-[#bfbfbf]">|</span>
            <Link href="/refund-policy" className="text-[#1e293b] text-sm hover:text-[#E91C59] transition-colors">Refund policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
