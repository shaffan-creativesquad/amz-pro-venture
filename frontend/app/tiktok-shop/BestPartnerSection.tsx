"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "TikTok Shop-Exclusive Experts",
    desc: "We specialize in TikTok shop growth strategies and are experienced in all verticals.",
  },
  {
    title: "ROI-Focused Approach",
    desc: "Every decision is driven by data and analytics, maximizing profits, ad performance, and operational efficiency to ensure the best results.",
  },
  {
    title: "Dedicated Account Manager",
    desc: "Work directly with a dedicated expert who understands your business, crafting personalized strategies and hands-on support every step of the way.",
  },
  {
    title: "Monthly Performance Reports",
    desc: "Receive detailed analytics on sales, ads, inventory trends, and key metrics for improving store performance and exceeding your potential.",
  },
];

export default function BestPartnerSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* LEFT — text */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-bold leading-tight mb-10"
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                color: "#000000",
              }}
            >
              What Makes AMZ ProVenture the Best{" "}
              <span style={{ color: "#ff9900" }}>TikTok Shop Growth Partner?</span>
            </motion.h2>

            <div className="flex flex-col gap-7">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "#ff9900" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[16px] mb-1"
                      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#000000" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-[#67768e] text-[14px] leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[480px] flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ minHeight: "420px", position: "relative" }}
          >
            <Image
              src="/Best-TikTok-Shop-Growth-Partner.png"
              alt="Best TikTok Shop Growth Partner"
              fill
              unoptimized
              className="object-cover object-center"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
