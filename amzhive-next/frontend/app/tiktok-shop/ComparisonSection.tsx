"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const amzPoints = [
  "TikTok-certified experts with years of experience across all niches.",
  "Full-service management, ads, and growth.",
  "Faster growth through data-driven strategies and proven systems.",
  "Dedicated account manager with real-time performance reporting.",
  "Affordable fees designed for long-term profitability and sustainable business growth.",
];

const agencyPoints = [
  "Limited TikTok experience, TikTok's unique challenges often overlooked.",
  "Partial services, requiring you to handle other aspects of your TikTok shop on your own.",
  "Inconsistent results, with higher management fees and minimal measurable success.",
  "Generic approach, without personalized insights, leading to poor customer response times and fees.",
];

const diyPoints = [
  "Requires self-learning on the complex TikTok ad system to optimize listings.",
  "High time effort is needed to monitor inventory, design and implement marketing tools.",
  "Low initial growth due to lack of expertise and proven strategies for TikTok.",
  "Self-managed operations require balancing fulfillment costs and profitability.",
  "High risk of costly mistakes that impact your brand credibility and growth potential.",
];

function CheckIcon() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#22c55e" }}>
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path d="M2 5.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#ef4444" }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-5 md:px-10">

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[13.5px] text-[#67768e] mb-3 max-w-[760px] mx-auto"
        >
          Not sure whether to grow your TikTok business with a full-service AMZ ProVenture agency, or the DIY route? Here&apos;s a quick comparison to help you make the best decision.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center font-bold leading-tight mb-12"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 3vw, 36px)", color: "#000000" }}
        >
          <span style={{ color: "#ff9900" }}>AMZ ProVenture</span> vs. Other Agencies vs. DIY for TikTok Shop Growth
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

          {/* AMZ ProVenture — white */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ border: "1.5px solid #e5e7eb", background: "#ffffff" }}
          >
            <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1.5px solid #e5e7eb" }}>
              <h3
                className="font-bold text-[15px]"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#000000" }}
              >
                AMZ ProVenture (Full-Service TikTok Shop Agency)
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              {amzPoints.map((point) => (
                <div key={point} className="flex gap-3 items-start">
                  <CheckIcon />
                  <p className="text-[13px] text-[#374151] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Other Agencies — dark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: "#111111" }}
          >
            <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1.5px solid #2a2a2a" }}>
              <h3
                className="font-bold text-[15px]"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#ffffff" }}
              >
                Other TikTok Shop Agencies
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              {agencyPoints.map((point) => (
                <div key={point} className="flex gap-3 items-start">
                  <CrossIcon />
                  <p className="text-[13px] text-[#9ca3af] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* DIY — dark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: "#111111" }}
          >
            <div className="px-6 pt-6 pb-4" style={{ borderBottom: "1.5px solid #2a2a2a" }}>
              <h3
                className="font-bold text-[15px]"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#ffffff" }}
              >
                DIY (Doing It Yourself)
              </h3>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              {diyPoints.map((point) => (
                <div key={point} className="flex gap-3 items-start">
                  <CrossIcon />
                  <p className="text-[13px] text-[#9ca3af] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3 mt-12">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center rounded-full font-semibold text-[15px] text-white overflow-hidden"
            style={{ background: "#ff9900", padding: "14px 36px" }}
          >
            <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
            <span className="relative z-10">Let&apos;s get started</span>
          </Link>
          <Link
            href="/contact-us"
            className="text-[14px] font-semibold underline"
            style={{ color: "#000000" }}
          >
            Still Confused? Call Us Now
          </Link>
        </div>

      </div>
    </section>
  );
}
