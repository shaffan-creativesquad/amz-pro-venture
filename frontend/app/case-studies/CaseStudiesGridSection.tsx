"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const filters = [
  "ALL",
  "AMAZON",
  "EMAIL MARKETING",
  "GOOGLE ADS",
  "INFLUENCER MARKETING",
  "META ADS",
  "SEO",
  "SOCIAL MEDIA MARKETING",
  "WEB DEVELOPMENT",
];

const cases = [
  {
    img: "/case-6",
    desc: "Shopify Case Study: Scaling SpeedBump Revenue by 954% Through Full-Funnel E-commerce Growth",
    href: "/shopify-growth-case-study/",
    tags: ["ALL", "SOCIAL MEDIA MARKETING", "EMAIL MARKETING"],
  },
  {
    img: "/case-2",
    desc: "Amazon Listing Optimization Service Case Study: Increasing Annual Sales by 215%",
    href: "/amazon-listing-optimization-service-case-study/",
    tags: ["ALL", "AMAZON"],
  },
  {
    img: "/case-1",
    desc: "Website Design Case Study: Driving 27% More Amazon Traffic & 23% Higher User Engagement",
    href: "/website-design-case-study-driving-27-more-amazon-traffic-23-higher-user-engagement/",
    tags: ["ALL", "WEB DEVELOPMENT"],
  },
  {
    img: "/case-3",
    desc: "Meta Ads Case Study: Growing Shopify Revenue by 238% in One Month",
    href: "/meta-ads-case-study-238-percent-growth/",
    tags: ["ALL", "META ADS", "SOCIAL MEDIA MARKETING"],
  },
  {
    img: "/case-4",
    desc: "WooCommerce Case Study: How Walmart Integration Increased Sales by 23%",
    href: "/woocommerce-case-study-how-walmart-integration-increased-sales/",
    tags: ["ALL", "WEB DEVELOPMENT"],
  },
  {
    img: "/case-5",
    desc: "Facebook Ads Case Study: From 42 Leads in 3 Years to 908 Leads in Under 3 Months",
    href: "/facebook-ads-case-study/",
    tags: ["ALL", "META ADS", "SOCIAL MEDIA MARKETING"],
  },
];

export default function CaseStudiesGridSection() {
  const [active, setActive] = useState("ALL");

  const filtered = cases.filter((c) => c.tags.includes(active));

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[780px] mx-auto mb-6"
        >
          Explore our case studies on e-commerce, PPC, SEO, B2B, marketing, paid social, and AI to see how AMZ ProVenture helps brands succeed across every stage of the online selling journey.
        </motion.p>

        {/* Border center SVG divider */}
        <div className="flex justify-center mb-8 overflow-hidden">
          <Image
            src="/border-center.svg"
            alt=""
            width={1281}
            height={41}
            unoptimized
            className="w-full max-w-[900px] opacity-40"
          />
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide transition-all duration-200 border"
              style={{
                background: active === f ? "#ff9900" : "#ffffff",
                color: active === f ? "#ffffff" : "#67768e",
                borderColor: active === f ? "#ff9900" : "#e5e7eb",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Case study grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((c, i) => (
              <motion.div
                key={c.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={c.href}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.08)", border: "1px solid #f0f0f0" }}
                >
                  {/* Image */}
                  <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: "350px" }}>
                    <Image
                      src={c.img}
                      alt={c.desc}
                      fill
                      unoptimized
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">
                    {/* Category tag */}
                    <span
                      className="self-start text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: "#fff8f0", color: "#ff9900" }}
                    >
                      {c.tags.find((t) => t !== "ALL") ?? "Case Study"}
                    </span>

                    {/* Title */}
                    <p
                      className="font-bold leading-snug text-[#000000] group-hover:text-[#ff9900] transition-colors duration-200 flex-1"
                      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "14px" }}
                    >
                      {c.desc}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-[#f0f0f0]" />

                    {/* Read more */}
                    <span className="inline-flex items-center gap-2 text-[#ff9900] text-[12px] font-black uppercase tracking-widest">
                      Read Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 21 12" fill="none">
                        <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>

                  {/* Orange bottom strip */}
                  <div className="h-[4px] flex-shrink-0 transition-all duration-300" style={{ background: "#ff9900" }} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-[#67768e] py-16 text-[15px]">
            No case studies found for this category.
          </p>
        )}

      </div>
    </section>
  );
}
