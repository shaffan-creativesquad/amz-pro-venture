"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-16 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            #1 Full-Service TikTok Shop Agency to Start &amp; Scale Your Store
          </h1>

          <p className="text-[#374151] text-[15px] leading-relaxed mb-4">
            Looking to start or scale your TikTok Shop? As a full-service TikTok shop agency, we take care of everything from setting up your store, optimizing your product listings, and running targeted ad campaigns that drive sales.
          </p>
          <p className="text-[#374151] text-[15px] leading-relaxed mb-8">
            Partner with us to manage the details while you sit back and watch your sales grow, turning your TikTok Shop presence into a reliable source of passive income.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider text-[13px] text-white overflow-hidden"
              style={{ background: "#ff9900", padding: "14px 28px" }}
            >
              <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                Let&apos;s Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider text-[13px] border-2 border-black text-black overflow-hidden"
              style={{ padding: "14px 28px" }}
            >
              <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Talk to an Expert</span>
            </Link>
          </div>

          {/* TikTok Badges */}
          <div className="flex items-center gap-6">
            {["TikTok", "TikTok Shop", "TikTok Ads"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.26 8.26 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" fill="#000000"/>
                </svg>
                <span className="text-[12px] font-semibold text-[#000000]">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — composed images */}
        <motion.div
          className="flex-shrink-0 w-full lg:w-[55%] relative flex items-end justify-center"
          style={{ minHeight: "480px" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* TikTok Shop dashboard — top left (behind) */}
          <motion.div
            className="absolute top-0 left-0 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Image
              src="/asset01.png"
              alt="TikTok Shop Dashboard"
              width={240}
              height={200}
              unoptimized
              className="rounded-xl shadow-lg h-auto"
              style={{ maxWidth: "240px" }}
            />
          </motion.div>

          {/* Performance card — bottom right (behind) */}
          <motion.div
            className="absolute bottom-8 right-0 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Image
              src="/asset03.png"
              alt="TikTok Performance Metrics"
              width={200}
              height={155}
              unoptimized
              className="rounded-xl shadow-lg h-auto"
              style={{ maxWidth: "200px" }}
            />
          </motion.div>

          {/* Character — front */}
          <Image
            src="/character.png"
            alt="TikTok Shop Expert"
            width={400}
            height={480}
            unoptimized
            priority
            className="relative z-20 h-auto object-contain"
            style={{ maxWidth: "400px" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
