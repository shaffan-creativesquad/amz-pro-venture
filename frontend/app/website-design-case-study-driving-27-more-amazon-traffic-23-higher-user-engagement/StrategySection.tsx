"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  {
    title: "Result-Centered Messaging",
    desc: "We restructured the content to highlight key product benefits, making it easier for visitors to understand the value of the products and make informed purchasing decisions.",
  },
  {
    title: "Strategic Amazon Call-to-Actions",
    desc: "Amazon purchase buttons were strategically positioned throughout the page to reduce friction and encourage users to visit the Amazon store.",
  },
  {
    title: "Trust & User Experience Enhancements",
    desc: "To strengthen credibility and improve engagement, we incorporated trust-building elements, improved visual hierarchy, and streamlined navigation.",
  },
  {
    title: "Mobile-First Optimization",
    desc: "The website was optimized for mobile devices to ensure a seamless experience for users browsing and purchasing from smartphones and tablets.",
  },
];

export default function StrategySection() {
  return (
    <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

        {/* LEFT: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex-1"
        >
          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            The Strategy &amp; Solution
          </h2>

          <p className="text-[#ff9900] font-bold text-[17px] mb-3">
            Conversion-Focused Website Redesign
          </p>

          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            We completely redesigned the Davis Wellness landing page with a modern, user-friendly layout that guided visitors through a clear purchasing journey.
          </p>

          <div className="space-y-6 mb-9">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-5 h-5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[#000000] font-bold text-[15px] mb-1">{p.title}</p>
                  <p className="text-[#67768e] text-[15px] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/book-a-call"
            className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md overflow-hidden transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2 overflow-hidden h-[1.2em]">
              <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                Join the Ranks of Our Successful Clients
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex items-center gap-2 absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
                Join the Ranks of Our Successful Clients
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </Link>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex-shrink-0 w-full lg:w-[480px]"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/sOLUTION-FILE-1024x1024.webp"
              alt="Strategy & Solution"
              width={480}
              height={480}
              unoptimized
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
