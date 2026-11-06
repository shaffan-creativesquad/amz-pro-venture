"use client";

import { motion } from "framer-motion";

const ctr = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } }
};
const itm = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

export default function HeroSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#f7f7f7" }}>
      <motion.div className="max-w-[1280px] mx-auto px-10 pt-16 pb-16" variants={ctr} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>

        <motion.h1
          variants={itm}
          className="font-bold leading-tight mb-6 uppercase text-center lg:text-left"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4.5vw, 58px)", color: "#000000" }}
        >
          Need Better Amazon Listings<br />
          That Drive <span style={{ color: "#ff9900" }}>More Sales?</span>
        </motion.h1>

        <motion.p variants={itm} className="text-[#67768e] text-[16px] leading-relaxed max-w-[640px] mb-8 text-center lg:text-left mx-auto lg:mx-0">
          A good product can still get overlooked if its listing doesn&apos;t give shoppers a reason to buy. We improve your Amazon listings with better copy, keywords, and product details so customers can find your products, understand what you&apos;re offering, and feel more confident about buying. We also use Rufus AI listing optimization to help your listings keep up with how shoppers search on Amazon.
        </motion.p>

        <motion.div variants={itm} className="space-y-4 mb-10">
          {[
            "Smart keyword and competitor analysis",
            "SEO-optimized titles, bullet points, and descriptions",
            "High-quality, optimized listing images",
            "Rufus AI image audit",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                <circle cx="12" cy="12" r="12" fill="#ff9900" />
                <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[#000000] text-[16px] font-medium">{item}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itm} className="flex justify-center lg:justify-start">
          <a
            href="/contact-us"
            className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[11px] rounded-full hover:bg-black transition-colors"
            style={{ padding: "12px 24px" }}
          >
            Optimize My Amazon Listings
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
