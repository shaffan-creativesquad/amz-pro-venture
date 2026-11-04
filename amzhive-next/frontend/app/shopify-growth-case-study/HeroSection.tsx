"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const results = [
  "954% Increase in Monthly Revenue",
  "508% Increase in Orders",
  "600% Increase in Website Visitors",
  "19k+ Organic Social Media Views Generated",
];

export default function HeroSection() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff8f0 0%, #ffffff 60%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <p className="text-[#67768e] text-xs font-bold uppercase tracking-widest mb-5">
            Case Study
          </p>

          <h1
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(26px, 4vw, 48px)",
              color: "#000000",
            }}
          >
            Shopify Case Study: Scaling{" "}
            <span style={{ color: "#ff9900" }}>SpeedBump Revenue by 954%</span>{" "}
            Through Full-Funnel E-commerce Growth
          </h1>

          <p className="text-[#67768e] text-[15px] leading-relaxed mb-6 max-w-[520px]">
            In this Shopify case study, we&apos;ll show how AMZ ProVenture helped SpeedBump, a performance and lifestyle consumer brand, scale its monthly revenue by <strong className="text-[#000000]">954%</strong> in three months through a combination of Meta Ads, email marketing, organic social growth, and Shopify conversion optimization.
          </p>

          <p className="text-[#000000] font-bold text-[15px] mb-4">Results:</p>

          <ul className="space-y-3 mb-8 text-left">
            {results.map((r) => (
              <li key={r} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-5 h-5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#67768e] text-[15px]">{r}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/book-a-call"
            className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md overflow-hidden transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2 overflow-hidden h-[1.2em]">
              <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                Schedule a Free Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex items-center gap-2 absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
                Schedule a Free Consultation
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </Link>
        </motion.div>

        {/* RIGHT: Case study image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="flex-shrink-0 w-full lg:w-[480px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Cover.webp"
              alt="Shopify Growth Case Study: 954% Revenue Growth"
              width={440}
              height={440}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
