"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 1",
    title: "Choosing Profitable Products for TikTok Shop",
    bullets: [
      "Analyze competitors and spot profitable niches with growing market demand.",
      "Identify winning products that match TikTok's audience and characteristics.",
      "Source high-quality, cost-effective products to maximize your profit margins.",
    ],
    img: "/Choosing-Profitable-Products-for-TikTok-Shop.png",
    cardRight: true,
  },
  {
    step: "Step 2",
    title: "Optimizing TikTok Shop Listings to Rank Higher & Convert More",
    bullets: [
      "Use targeted keywords to improve visibility and rank on TikTok search.",
      "Craft engaging, clear product titles and descriptions for better engagement.",
      "Use eye-catching images and videos to encourage more conversions and sales.",
    ],
    img: "/Optimizing-TikTok-Shop-Listings.png",
    cardRight: false,
  },
  {
    step: "Step 3",
    title: "Running High-ROI TikTok Ads",
    bullets: [
      "Create highly targeted TikTok ads that reach your ideal audience.",
      "Adjust your ad budget and targeting to maximize ROI and engagement.",
      "Scale successful campaigns to drive more traffic, sales, and brand awareness.",
    ],
    img: "/High-ROI-TikTok-Ads.png",
    cardRight: true,
  },
  {
    step: "Step 4",
    title: "Optimizing Inventory & Fulfillment for Seamless Sales",
    bullets: [
      "Choose the best fulfillment method to meet customer demand and expectations.",
      "Ensure fast, reliable shipping to provide an excellent customer experience.",
      "Keep inventory levels balanced to avoid stockouts or overstocking issues.",
    ],
    img: "/Optimizing-Inventory.png",
    cardRight: false,
  },
  {
    step: "Step 5",
    title: "Maintaining Compliance and Monitoring Account Health",
    bullets: [
      "Follow TikTok's selling policies to avoid account suspension or penalties.",
      "Proactively address policy changes to stay in good standing with TikTok.",
      "Regularly check account health to ensure everything is running smoothly.",
    ],
    img: "/Monitoring-Account-Health.png",
    cardRight: true,
  },
  {
    step: "Step 6",
    title: "Utilizing Performance Data for Ongoing Optimization",
    bullets: [
      "Analyze performance metrics to understand what's driving sales and growth.",
      "Monitor trends and make necessary changes to keep improving results.",
      "Adjust product pricing, listings, and ads using data-driven insights.",
    ],
    img: "/Performance-Data-for-Ongoing-Optimization.png",
    cardRight: false,
  },
  {
    step: "Step 7",
    title: "Scaling Your TikTok Shop Sales for Continued Success",
    bullets: [
      "Refine your strategies and processes to sustain long-term growth.",
      "Expand your product offerings and reach new customer segments.",
      "Automate key tasks to streamline operations and make scaling easier.",
    ],
    img: "/Scaling-Your-TikTok-Shop-Sales-for-Continued-Success.png",
    cardRight: true,
  },
];

export default function StepByStepSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#fff8f0" }}>
      <div className="max-w-[1140px] mx-auto px-5 md:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="font-bold leading-tight mb-16"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", color: "#000000" }}
        >
          The Step-by-Step Process to Grow Your TikTok Shop Sales to{" "}
          <span style={{ color: "#ff9900" }}>7 Figures</span>
        </motion.h2>

        <div className="relative flex flex-col gap-10">

          {/* Single continuous vertical line */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 z-0"
            style={{ background: "#ffcc80" }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="hidden lg:grid relative"
              style={{ gridTemplateColumns: "1fr 40px 1fr", alignItems: "center" }}
            >
              {/* LEFT slot */}
              {s.cardRight ? (
                /* Title on left */
                <div className="pr-8 flex flex-col gap-4">
                  <span
                    className="inline-block text-white text-[13px] font-bold rounded-full px-4 py-1.5 w-fit"
                    style={{ background: "#ff9900", fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                  >
                    {s.step}
                  </span>
                  <h3
                    className="font-bold leading-snug"
                    style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(18px, 1.8vw, 26px)", color: "#000000" }}
                  >
                    {s.title}
                  </h3>
                </div>
              ) : (
                /* Card on left */
                <div className="pr-8">
                  <div className="rounded-2xl p-3 pb-5" style={{ background: "#fff8f0" }}>
                    <div className="relative w-full rounded-xl overflow-hidden" style={{ height: "220px" }}>
                      <Image src={s.img} alt={s.title} fill unoptimized className="object-cover object-center" />
                    </div>
                    <div className="pt-4 px-2 flex flex-col gap-3">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex gap-2 items-start">
                          <span className="flex-shrink-0 mt-[7px] w-[6px] h-[6px] rounded-full" style={{ background: "#000" }} />
                          <p className="text-[13px] leading-relaxed" style={{ color: "#374151" }}>{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CENTER — dot only (line is behind via absolute) */}
              <div className="flex items-center justify-center z-10">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ background: "#ff9900", border: "3px solid #fff8f0" }}
                />
              </div>

              {/* RIGHT slot */}
              {s.cardRight ? (
                /* Card on right */
                <div className="pl-8">
                  <div className="rounded-2xl p-3 pb-5" style={{ background: "#fff8f0" }}>
                    <div className="relative w-full rounded-xl overflow-hidden" style={{ height: "220px" }}>
                      <Image src={s.img} alt={s.title} fill unoptimized className="object-cover object-center" />
                    </div>
                    <div className="pt-4 px-2 flex flex-col gap-3">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex gap-2 items-start">
                          <span className="flex-shrink-0 mt-[7px] w-[6px] h-[6px] rounded-full" style={{ background: "#000" }} />
                          <p className="text-[13px] leading-relaxed" style={{ color: "#374151" }}>{b}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Title on right */
                <div className="pl-8 flex flex-col gap-4">
                  <span
                    className="inline-block text-white text-[13px] font-bold rounded-full px-4 py-1.5 w-fit"
                    style={{ background: "#ff9900", fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                  >
                    {s.step}
                  </span>
                  <h3
                    className="font-bold leading-snug"
                    style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(18px, 1.8vw, 26px)", color: "#000000" }}
                  >
                    {s.title}
                  </h3>
                </div>
              )}
            </motion.div>
          ))}

          {/* Mobile fallback — simple stacked */}
          {steps.map((s) => (
            <div key={`mob-${s.step}`} className="flex flex-col gap-4 lg:hidden">
              <span
                className="inline-block text-white text-[13px] font-bold rounded-full px-4 py-1.5 w-fit"
                style={{ background: "#ff9900", fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              >
                {s.step}
              </span>
              <h3
                className="font-bold leading-snug"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "22px", color: "#000000" }}
              >
                {s.title}
              </h3>
              <div className="rounded-2xl overflow-hidden" style={{ background: "#f0e6cc" }}>
                <div className="relative w-full" style={{ height: "200px" }}>
                  <Image src={s.img} alt={s.title} fill unoptimized className="object-cover object-center" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  {s.bullets.map((b) => (
                    <div key={b} className="flex gap-2 items-start">
                      <span className="flex-shrink-0 mt-[7px] w-[6px] h-[6px] rounded-full" style={{ background: "#000" }} />
                      <p className="text-[13px] leading-relaxed" style={{ color: "#374151" }}>{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
