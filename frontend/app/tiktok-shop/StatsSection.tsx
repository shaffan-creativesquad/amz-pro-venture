"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "150+",
    label: "TikTok Shop Sellers",
    description: "Supporting over 150 eCommerce entrepreneurs with end-to-end TikTok Shop setup, management, and growth strategies.",
  },
  {
    number: "15,000+",
    label: "Successful Campaigns",
    description: "Managing high-performing TikTok ad campaigns with precision, engagement, and results-driven strategies as top priorities.",
  },
  {
    number: "$2M+",
    label: "in Revenue",
    description: "Driving over $2 million in collective TikTok Shop revenue for partnered brands through data-driven advertising and influencer marketing.",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        <motion.p
          className="text-white font-bold text-[14px] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Changing the Lives of TikTok Shop Sellers
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p
                className="font-bold text-white leading-none mb-1"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(48px, 6vw, 72px)" }}
              >
                {stat.number}
              </p>
              <p className="font-semibold text-[#ff9900] text-[15px] mb-3">{stat.label}</p>
              <p className="text-white/90 text-[13.5px] leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
