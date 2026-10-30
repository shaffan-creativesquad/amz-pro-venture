"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ExpensesCard from "./ExpensesCard";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
      <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function UnlockSection() {
  return (
    <section className="py-20 w-full" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center mb-6 overflow-hidden rounded-sm">
            <span className="bg-[#ff9900] text-white text-sm font-semibold px-4 py-2">THE E-COMMERCE</span>
            <span className="bg-black text-white text-sm font-semibold px-4 py-2">WEB DESIGN EXPERTS</span>
          </div>

          {/* Heading */}
          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 45px)" }}
          >
            <span className="text-[#000000]">Unlocking </span>
            <span className="text-[#ff9900]">the Power of Online<br />Growth</span>
          </h2>

          {/* Paragraph */}
          <p className="text-black text-[16px] leading-relaxed mb-8 max-w-[560px]">
            AMZ Pro Venture stands as your premier digital marketing and web design agency, specializing in WooCommerce and Shopify e-commerce solutions tailored for exponential growth. Based in the vibrant heart of Miami, Florida, our team comprises seasoned designers, developers, and marketing aficionados, poised to elevate your online presence to unprecedented heights.
          </p>

          {/* Links row */}
          <div className="flex items-center gap-3 mb-8 text-sm font-semibold">
            <Link href="/amazon-influencer-marketing-service" className="text-[#ff9900] hover:underline transition-colors">
              Marketing
            </Link>
            <span className="text-[#67768e]">I</span>
            <Link href="/contact-us" className="text-[#67768e] hover:text-[#000000] transition-colors">
              Tell us about your project
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about-us"
              className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-md overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                ABOUT <ArrowIcon />
              </span>
            </Link>
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-md overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                CONTACT <ArrowIcon />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: Chart GIF */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="flex-shrink-0 w-full lg:w-[580px]"
        >
          <ExpensesCard />
        </motion.div>

      </div>
    </section>
  );
}
