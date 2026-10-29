"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <section className="w-full overflow-visible" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-0 flex flex-col items-start text-left">

          <motion.p className="font-medium mb-4 tracking-wide" style={{ fontSize: "23px", color: "#ffffff" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Social Media Marketing
          </motion.p>

          <motion.h1 className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 45px)", color: "#ffffff" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            From content creation to social media management,{" "}
            <span style={{ color: "#ff9900" }}>improve your presence, draw awareness</span>
            {" "}and bring tangible results.
          </motion.h1>

          <motion.p className="leading-relaxed w-full mb-12 text-left" style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            Our experience with paid advertising has taught us that PPC ads don't have to be expensive. Our strategies are data-driven and targeted towards a focused audience, with personalised content generating high quality leads that help to ensure great returns on interest.
          </motion.p>

          <motion.div className="w-full relative z-10 mb-[-60px] md:mb-[-180px] flex justify-center"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <Image src="/Group-1321317418.webp" alt="Social Media Marketing" width={1400} height={700} unoptimized className="w-full h-auto object-contain" />
          </motion.div>

        </div>
      </section>
      <div className="pt-[80px] md:pt-[200px] pb-16" style={{ backgroundColor: "#e2e2e2" }} />
    </>
  );
}
