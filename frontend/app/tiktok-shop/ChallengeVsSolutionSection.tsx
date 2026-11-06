"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const problems = [
  "Not knowing where to begin with setting up the Shopify store",
  "Struggling to create optimized product listings that convert",
  "Deciding how much to spend on Shopify ads to achieve real returns",
  "Navigating Shopify's apps and integrations for maximum efficiency",
  "Managing inventory and fulfillment across multiple channels",
  "Building enough traffic and engagement to gain early momentum",
  "Understanding Shopify's marketing features and strategies",
  "Staying compliant with Shopify's rules and platform requirements",
];

const solutions = [
  "Seamless store setup and full integration with your products",
  "Optimized product listings designed for TikTok's audience and algorithm",
  "Expert ad management to maximize your ROI on TikTok ads",
  "Strategic influencer marketing campaigns to boost brand awareness",
  "Streamlined inventory management and fulfillment recommendations",
  "Data-driven strategies to build early traction and boost sales",
  "Full utilization of TikTok's shopping features and integrations",
  "Ongoing compliance monitoring to keep your store safe and growing",
];

export default function ChallengeVsSolutionSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 44px)", color: "#000000" }}
        >
          Struggling to Launch or Scale on TikTok Shop?{" "}
          <span style={{ color: "#ff9900" }}>AMZ ProVenture Builds Profitable TikTok Shops</span>
        </motion.h2>

        {/* Two columns with TikTok badge centered on top */}
        <div className="relative mt-4">

          {/* TikTok badge — centered, overlapping both cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="absolute left-1/2 -translate-x-1/2 z-10 flex justify-center"
            style={{ top: "110px" }}
          >
            <div className="relative flex items-center justify-center" style={{ width: "170px", height: "170px" }}>
              <svg viewBox="0 0 170 170" className="absolute inset-0 w-full h-full">
                <circle cx="85" cy="85" r="80" fill="white" stroke="#000000" strokeWidth="2.5" />
                <defs>
                  <path id="tiktokCirclePath" d="M85,85 m-63,0 a63,63 0 1,1 126,0 a63,63 0 1,1 -126,0" />
                </defs>
                <g style={{ transformOrigin: "85px 85px", animation: "spinText 10s linear infinite" }}>
                  <text fontSize="13" fontWeight="700" fill="#222222" letterSpacing="4" fontFamily="Poppins, sans-serif">
                    <textPath href="#tiktokCirclePath">✦ UNLOCK YOUR BUSINESS POTENTIAL ✦</textPath>
                  </text>
                </g>
                <style>{`@keyframes spinText { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
              </svg>
              <div className="relative z-10 flex items-center justify-center" style={{ width: "90px", height: "90px" }}>
                <Image
                  src="/feature-Tiktok.svg"
                  alt="TikTok"
                  width={90}
                  height={90}
                  unoptimized
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-14">

          {/* LEFT — Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "#fff5f5", border: "1px solid #fde8e8" }}
          >
            <div className="w-full overflow-hidden" style={{ height: "220px" }}>
              <Image
                src="/starting-or-growing-an-amazon-business-can-feel-overwhelming.png"
                alt="Starting or growing a TikTok Shop can feel overwhelming"
                width={560}
                height={220}
                unoptimized
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8">
              <p className="font-bold text-[15px] text-[#000000] leading-snug mb-6">
                Starting or growing a TikTok Shop can be challenging. Many businesses face difficulties such as:
              </p>
              <ul className="space-y-4">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#ef4444" }}>
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[#67768e] text-[14px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT — Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "#f0fdf4", border: "1px solid #d1fae5" }}
          >
            <div className="w-full overflow-hidden" style={{ height: "220px" }}>
              <Image
                src="/starterx-takes-your-guesswork-and-provides-a-step-by-step-plan-for-success.png"
                alt="AMZ ProVenture provides a step-by-step plan for TikTok Shop success"
                width={560}
                height={220}
                unoptimized
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-8">
              <p className="font-bold text-[15px] text-[#000000] leading-snug mb-6">
                AMZ ProVenture eliminates the uncertainty, offering an actionable plan to help your TikTok shop succeed:
              </p>
              <ul className="space-y-4">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ background: "#22c55e" }}>
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[#67768e] text-[14px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
        </div>{/* end relative wrapper */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4 mt-10"
        >
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider text-[13px] text-white overflow-hidden"
            style={{ background: "#ff9900", padding: "14px 40px" }}
          >
            <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
            <span className="relative z-10">Let&apos;s get started</span>
          </Link>
          <a
            href="tel:+18022096796"
            className="text-[#000000] text-[14px] font-semibold hover:text-[#ff9900] transition-colors"
            style={{ textDecoration: "underline", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}
          >
            Still Confused? Call Us Now
          </a>
        </motion.div>

      </div>
    </section>
  );
}
