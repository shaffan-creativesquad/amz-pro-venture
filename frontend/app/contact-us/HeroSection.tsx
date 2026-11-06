"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#e2e2e2" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-16 flex flex-col items-center md:items-start text-center md:text-left">

        <motion.p className="font-medium mb-4 tracking-wide" style={{ fontSize: "16px", color: "#000000" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          Contact Us
        </motion.p>

        <motion.h1 className="font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 45px)", color: "#000000" }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          New Brands, Long-Time Clients and Old Friends {" "}
          <span style={{ color: "#ff9900" }}>Are Always Welcome Here.</span>
        </motion.h1>

        <motion.p className="leading-relaxed w-full" style={{ fontSize: "16px", color: "#000000", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
Ready to hire an Amazon agency, or just want an honest opinion on where your store stands? Get in touch. You can book a free Amazon consultation, ask for a free Shopify consultation, or send us a project brief for a full quote. A real person from our team will get back to you.
        </motion.p>

      </div>
    </section>
  );
}