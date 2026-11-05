"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const results = [
  { bold: "954% increase", text: " in Monthly Revenue." },
  { bold: "658% increase", text: " in Orders." },
  { bold: "609% increase", text: " in Website Visitors." },
  { bold: "1M+", text: " Organic Social Media Views Generated." },
];

export default function ResultsSection() {
  return (
    <section id="results" className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-24 items-center">

        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex-shrink-0 w-full lg:w-[460px]"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Results-1024x1024-2.webp"
              alt="Shopify Growth Results – 954% Monthly Revenue Increase"
              width={460}
              height={460}
              unoptimized
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex-1"
        >
          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            The Results
          </h2>

          <p className="text-[#67768e] text-[16px] leading-relaxed mb-5">
            Following the implementation of Meta Ads, email marketing, organic social growth, and Shopify optimization, the brand achieved significant growth.
          </p>

          <p className="text-[#000000] font-bold text-[16px] mb-5">
            Performance Growth:
          </p>

          <ul className="space-y-3 mb-6">
            {results.map((item) => (
              <li key={item.bold} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5 w-5 h-5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#67768e] text-[15px] leading-relaxed">
                  <strong className="text-[#000000]">{item.bold}</strong>{item.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-[#67768e] text-[16px] leading-relaxed mb-10">
            By combining paid acquisition, retention marketing, organic growth, and conversion optimization, AMZ ProVenture transformed the SpeedBump Shopify store into a scalable e-commerce growth engine.
          </p>

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

      </div>
    </section>
  );
}
