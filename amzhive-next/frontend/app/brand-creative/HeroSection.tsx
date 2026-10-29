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
            Brand & Creative
          </motion.p>

          <motion.h1 className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 45px)", color: "#ffffff" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Let&apos;s work together to{" "}
            <span style={{ color: "#ff9900" }}>elevate</span> your brand{" "}
            <span style={{ color: "#ff9900" }}>engagement</span> and{" "}
            <span style={{ color: "#ff9900" }}>performance.</span>
          </motion.h1>

          <motion.p className="leading-relaxed w-full mb-12 text-left" style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            Much more than a logo, your branding is the embodiment of your business ethos. As a dedicated brand & creative agency, our team of talented graphic designers take the time to understand your business ethos and goals, so we can draw the strategy and positioning to make a desirable brand.{" "}
            <a href="/contact-us" className="font-semibold hover:underline" style={{ color: "#FFD700" }}>see our work</a>
          </motion.p>

          <motion.div className="w-full relative z-10 mb-[-60px] md:mb-[-180px] flex justify-center"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <Image src="/Component-90-1024x447.webp" alt="Brand & Creative" width={1400} height={700} unoptimized className="w-full h-auto object-contain" />
          </motion.div>

        </div>
      </section>
      <div className="pt-[80px] md:pt-[200px] pb-16" style={{ backgroundColor: "#e2e2e2" }} />
    </>
  );
}
