"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cases = [
  {
    label: "Shopify Growth Case Study:",
    stat: "954%",
    statDesc: "Revenue Growth",
    img: "/case-1",
    desc: "Website Design Case Study: Driving 27% More Amazon Traffic & 23% Higher User Engagement",
    href: "/website-design-case-study-driving-27-more-amazon-traffic-23-higher-user-engagement/",
  },
  {
    label: "Growing Sales by 215%",
    stat: "215%",
    statDesc: "With Amazon Listing Optimization",
    img: "/case-2",
    desc: "Amazon Listing Optimization Service Case Study: Increasing Annual Sales by 215%",
    href: "/amazon-listing-optimization-service-case-study/",
  },
  {
    label: "WooCommerce Store Case Study:",
    stat: "380%",
    statDesc: "Traffic Growth",
    img: "/case-3",
    desc: "Meta Ads Case Study: Growing Shopify Revenue by 238% in One Month",
    href: "/meta-ads-case-study-238-percent-growth/",
  },
  {
    label: "eBay Account Management:",
    stat: "3x",
    statDesc: "Revenue Scaled",
    img: "/case-4",
    desc: "WooCommerce Case Study: How Walmart Integration Increased Sales by 23%",
    href: "/woocommerce-case-study-how-walmart-integration-increased-sales/",
  },
  {
    label: "Amazon PPC Case Study:",
    stat: "61%",
    statDesc: "ACoS Reduction",
    img: "/case-5",
    desc: "Facebook Ads Case Study: From 42 Leads in 3 Years to 908 Leads in Under 3 Months",
    href: "/facebook-ads-case-study/",
  },
  {
    label: "Etsy Store Case Study:",
    stat: "5x",
    statDesc: "Sales Growth",
    img: "/case-6",
    desc: "Shopify Case Study: Scaling SpeedBump Revenue by 954% Through Full-Funnel E-commerce Growth",
    href: "/shopify-growth-case-study/",
  },
];

export default function CaseStudiesSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = cases.length;

  const prev = () => { setDir(-1); setIndex((i) => (i - 1 + total) % total); };
  const next = () => { setDir(1); setIndex((i) => (i + 1) % total); };

  const visible = [cases[index % total], cases[(index + 1) % total]];

  return (
    <section className="w-full bg-white pt-20 pb-6 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex-shrink-0 w-full lg:w-[420px] text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* <p className="text-[#ff9900] text-xs font-bold uppercase tracking-widest mb-4">Case Studies</p> */}
          <h2
            className="font-bold leading-tight mb-5"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 3.2vw, 38px)" }}
          >
            Read Our Clients{" "}
            <span className="text-[#ff9900]">Success Stories</span>
          </h2>
          <p className="text-[#67768e] text-[15px] leading-relaxed mb-8 max-w-[280px]">
            Explore how we&apos;ve helped businesses overcome challenges and scale profitably.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#ff9900] text-[13px] font-black uppercase tracking-widest hover:underline transition-colors"
          >
            Explore All Case Studies
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
              <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        {/* RIGHT: Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="w-full lg:max-w-[720px] min-w-0"
        >
          <div className="flex items-center gap-3">

            {/* Prev arrow */}
            <button
              onClick={prev}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff9900] text-white flex items-center justify-center hover:bg-black transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Cards */}
            <div className="flex-1 overflow-hidden min-w-0">
              <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  initial={{ x: dir > 0 ? "55%" : "-55%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: dir > 0 ? "-55%" : "55%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch"
                >
                  {visible.map((c, i) => (
                    <Link
                      href={c.href}
                      key={i}
                      className={`group flex flex-col h-full rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300${i === 1 ? " hidden sm:flex" : ""}`}
                      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.13)" }}
                    >
                      {/* Image + overlay */}
                      <div className="relative w-full flex-1" style={{ minHeight: "320px" }}>
                        <Image
                          src={c.img}
                          alt={c.desc}
                          fill
                          unoptimized
                          className="object-cover object-top"
                        />
                        {/* Bottom overlay text */}
                        <div className="absolute mx-4 px-4 py-3 rounded-lg" style={{ bottom: "16px", left: 0, right: 0, background: "rgba(0,0,0,0.55)" }}>
                          <p className="text-white text-[13px] font-semibold leading-snug">{c.desc}</p>
                        </div>
                      </div>

                      {/* Orange footer - keep strip, no text */}
                      <div className="bg-[#ff9900] h-2 flex-shrink-0" />
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ff9900] text-white flex items-center justify-center hover:bg-black transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === index ? "#ff9900" : "#d1d5db",
                  width: i === index ? "24px" : "8px",
                }}
              />
            ))}
          </div>

          {/* Mobile-only CTA */}
          <div className="flex justify-center mt-6 sm:hidden">
            <Link
              href="/case-studies"
              className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-md overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE ALL CASE STUDIES
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
