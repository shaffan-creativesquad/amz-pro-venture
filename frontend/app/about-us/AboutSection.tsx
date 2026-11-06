"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        {/* Text content */}
        <motion.div
          className="space-y-5 mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <p className="text-[#374151] text-[15px] leading-relaxed">
            Working with AMZ ProVenture gives you more than a team of specialists. You get people who have worked side by side since 2012, sharing the same values and the same standards. When we take on a project, your goals become ours, and we treat them that way.
          </p>
          <p className="text-[#374151] text-[15px] leading-relaxed">
            We know exactly who we are and what we do best. We’re not a faceless giant passing you between departments. We’re a focused Amazon agency that gives every client real attention, honest advice and a team that genuinely cares how the project turns out.
          </p>
          <p className="text-[#374151] text-[15px] leading-relaxed">
            It starts with a conversation. Our ecommerce consultants want to understand your business, your challenges and where you want to take it. From there, our specialists take over the details and keep you informed at every stage, so you always know what’s happening and why.
          </p>
          <p className="text-[#374151] text-[15px] leading-relaxed">
            Years of building and growing online stores have taught us that no two projects are alike. Whatever your brand needs, our Amazon seller experts follow the same proven three-stage approach: Create, Develop, Grow.

          </p>
        </motion.div>

        {/* Large image */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.65 }}
        >
          <Image
            src="/our-core-values.webp"
            alt="Our Team"
            width={1140}
            height={600}
            unoptimized
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Our values heading */}
        <motion.h2
          className="text-center font-bold mt-16"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          Our <span style={{ color: "#ff9900" }}>values</span>
        </motion.h2>

      </div>
    </section>
  );
}
