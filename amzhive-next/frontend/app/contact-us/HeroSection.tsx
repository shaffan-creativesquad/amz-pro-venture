"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#e2e2e2" }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-10 md:pb-16 flex flex-col items-start text-left">

        <motion.p className="font-medium mb-4 tracking-wide" style={{ fontSize: "16px", color: "#000000" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          Contact Us
        </motion.p>

        <motion.h1 className="font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 45px)", color: "#000000" }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          AMZ Pro Venture doors are always open{" "}
          <span style={{ color: "#ff9900" }}>to new faces, existing clients and old friends,</span>
          {" "}so come and say hey... don't be shy!
        </motion.h1>

        <motion.p className="leading-relaxed w-full" style={{ fontSize: "16px", color: "#000000", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
          Pop in to visit the team in our Herndon, Lewisville or Miami offices, check up on your project progress in real time, or just say stop by to say hello and join for a brew or a cold drink. Or perhaps, get in touch to arrange a screen share call. See our contact information below, and feel free to drop by at any time. Alternatively, if you are considering sending a new project brief to get a full quote or if you wish to arrange a discovery briefing session, please complete this form.
        </motion.p>

      </div>
    </section>
  );
}