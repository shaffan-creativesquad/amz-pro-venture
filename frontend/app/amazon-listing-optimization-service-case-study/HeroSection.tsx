"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff8f0 0%, #ffffff 60%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">

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
            Amazon Listing Optimization Service Case Study:{" "}
            <span style={{ color: "#ff9900" }}>Increasing Annual Sales by 215%</span>
          </h1>

          <p className="text-[#67768e] text-[15px] leading-relaxed mb-8 max-w-[520px]">
            In this Amazon listing optimization service case study, we&apos;ll show how AMZ ProVenture helped SpeedBump increase product sales by <strong className="text-[#000000]">215%</strong>, grow units ordered by <strong className="text-[#000000]">190%</strong>, and boost total orders by <strong className="text-[#000000]">178%</strong> through a comprehensive Amazon product listing optimization strategy.
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

        {/* RIGHT: Case image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="flex-shrink-0 w-full lg:w-[480px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/Cover-2-1024x1024.webp"
              alt="Amazon Listing Optimization Case Study"
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
