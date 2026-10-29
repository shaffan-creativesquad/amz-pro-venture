"use client";

import { motion } from "framer-motion";

const ctr = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } }
};
const itm = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

export default function HeroSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#f7f7f7" }}>
      <motion.div className="max-w-[1440px] mx-auto px-10 pt-16 pb-10" variants={ctr} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>

        <motion.p variants={itm} className="text-[#000000] text-sm font-medium mb-4 tracking-wide">
          Creative
        </motion.p>

        <motion.h1
          variants={itm}
          className="font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "48px", color: "#000000" }}
        >
          Our aim is to give your <span style={{ color: "#ff9900" }}>brand</span> a clear and{" "}
          <span style={{ color: "#ff9900" }}>distinctive</span> identity{" "}
          that is communicated <span style={{ color: "#ff9900" }}>effectively.</span>
        </motion.h1>

        <motion.p variants={itm} className="text-[#67768e] text-[16px] leading-relaxed max-w-[780px] mb-10">
          We create digital and print materials that are based around the user experience and backed by strong visual strategy.
        </motion.p>

      </motion.div>
    </section>
  );
}
