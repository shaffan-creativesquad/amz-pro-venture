"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PartnersBar from "../components/PartnersBar";

export default function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ffd9b3 0%, #ffe8cc 50%, #fff3e6 100%)" }}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-14 pb-0 flex flex-col lg:flex-row items-center gap-10">

          {/* LEFT */}
          <motion.div
            className="flex-1 pb-14 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1
              className="font-bold leading-tight mb-8"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 50px)", color: "#000000" }}
            >
              The eCommerce Growth Agency That Gets Your Products{" "}
              <span style={{ color: "#ff9900" }}>Seen, Clicked &amp; Sold</span>
            </h1>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider text-[13px] text-white hover:bg-black transition-colors"
              style={{ background: "#ff9900", padding: "14px 28px" }}
            >
              GET A FREE GROWTH PLAN
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 21 12" fill="none">
                <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-[55%] flex items-end justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/about-us.webp"
              alt="AMZ ProVenture eCommerce Growth Agency"
              width={820}
              height={580}
              unoptimized
              priority
              className="w-full h-auto object-contain"
            />
          </motion.div>

        </div>
      </section>

      <PartnersBar />
    </>
  );
}
