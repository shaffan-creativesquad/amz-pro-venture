"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1140px] mx-auto px-5 md:px-10">

        {/* Text content */}
        <motion.div
          className="space-y-5 mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          <p className="text-[#374151] text-[15px] leading-relaxed">
            We&apos;re a team of eCommerce and digital marketing professionals who&apos;ve spent 15+ years helping sellers grow smarter across Amazon, Walmart, Shopify, and beyond.
          </p>
          <p className="text-[#374151] text-[15px] leading-relaxed">
            Whether you&apos;re launching your first product or managing a 7-figure ad budget, we&apos;ve been in the trenches with sellers just like you, navigating Amazon&apos;s ever-changing rules, chasing ROAS targets, fixing surprise suspensions, and scaling across platforms like Walmart and Shopify.
          </p>
          <p className="text-[#374151] text-[15px] leading-relaxed">
            We combine real marketplace experience with smart digital marketing and AI-powered tools to help you move faster, spend smarter, and grow stronger. But more than anything, we&apos;re hands-on partners who treat your business like our own.
          </p>
          <p className="text-[#374151] text-[15px] leading-relaxed">
            From PPC and SEO to listing optimization, reinstatement, and strategy, we&apos;re here to help you <strong className="text-[#000000]">launch, sell, and scale with confidence.</strong>
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
