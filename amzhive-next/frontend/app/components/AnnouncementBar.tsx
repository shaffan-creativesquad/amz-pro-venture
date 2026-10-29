"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const announcements = [
  "Free Shopify Consultation",
  "20% Off on Bundle Offer with Shopify & TikTok Shop!",
  "Unlock Your E-Commerce Potential Today!",
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white py-2 px-3 sm:px-4 border-b border-white/10 overflow-hidden w-full max-w-full">
      <div className="max-w-[1247px] mx-auto flex items-center justify-between gap-2">
        {/* Left: 24/7 Support */}
        <Link
          href="/contact-us"
          className="flex items-center gap-1.5 font-medium text-white hover:text-[#ff9900] transition-colors flex-shrink-0 text-xs sm:text-sm md:text-[15px]"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>24/7 Support</span>
        </Link>

        {/* Center: Rotating announcement */}
        <div className="flex-1 text-center text-xs sm:text-sm md:text-[15px] font-medium overflow-hidden h-5 sm:h-6 relative mx-1 sm:mx-6 min-w-0">
          {announcements.map((text, i) => (
            <span
              key={i}
              className="absolute inset-0 flex items-center justify-center truncate px-1 transition-all duration-500 whitespace-nowrap"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? "translateY(0)" : i < current ? "translateY(-100%)" : "translateY(100%)",
              }}
            >
              {text}
            </span>
          ))}
        </div>

        {/* Right: Social icons */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <Link
            href="https://www.facebook.com/amzhivellc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-white/40 hover:border-white hover:text-white transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/amzhivellc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-white/40 hover:border-white hover:text-white transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/company/amz-hive-llc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-white/40 hover:border-white hover:text-white transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
