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
      <motion.div className="max-w-[1440px] mx-auto px-10 pt-16 pb-16" variants={ctr} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>

        <motion.h1
          variants={itm}
          className="font-bold leading-tight mb-6 uppercase"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4.5vw, 58px)", color: "#000000" }}
        >
          STRUGGLING TO RECOVER<br />
          <span style={{ color: "#ff9900" }}>AMAZON FBA FUNDS?</span>
        </motion.h1>

        <motion.p variants={itm} className="text-[#67768e] text-[16px] leading-relaxed max-w-[480px] mb-8">
          We audit your Amazon FBA account, pinpoint the discrepancies, and recover the reimbursements you&apos;re owed, fast.
        </motion.p>

        <motion.div variants={itm} className="space-y-4 mb-10">
          {[
            "Comprehensive FBA auditing",
            "Accurate claim documentation",
            "End-to-end claim management",
            "Fast, reliable fund recovery",
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

        <motion.a
          variants={itm}
          href="/contact-us"
          className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[14px] rounded-full hover:bg-black transition-colors"
          style={{ padding: "14px 32px" }}
        >
          RECOVER FBA FUNDS NOW →
        </motion.a>

      </motion.div>
    </section>
  );
}
