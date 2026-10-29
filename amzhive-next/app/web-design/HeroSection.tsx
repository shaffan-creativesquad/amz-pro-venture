"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <section className="w-full overflow-visible" style={{ backgroundColor: "#21242f" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-0 flex flex-col items-start text-left">

          <motion.p
            className="font-medium mb-4 tracking-wide"
            style={{ fontSize: "23px", color: "#ffffff" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Corporate Website
          </motion.p>

          <motion.h1
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4vw, 45px)", color: "#ffffff" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We combine our love of good design and passion{" "}
            <span style={{ color: "#E91C59" }}>for coding, to build websites that create an impact.</span>
          </motion.h1>

          <motion.p
            className="leading-relaxed w-full mb-12 text-left"
            style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Our web design and development teams work closely to build unique websites that give equal priority to aesthetics and functionality. Whatever your business, our web services deliver beautifully designed, user-friendly websites that will attract users and generate leads.{" "}
            <a href="/contact-us" className="font-semibold hover:underline" style={{ color: "rgba(255,255,255,0.6)" }}>discover our web design agency work</a>
          </motion.p>

          <motion.div
            className="w-full relative z-10 mb-[-60px] md:mb-[-180px] flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Image
              src="/img-1-1024x631.webp"
              alt="Corporate Website"
              width={1400}
              height={700}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </motion.div>

        </div>
      </section>

      <div className="pt-[80px] md:pt-[200px] pb-16" style={{ backgroundColor: "#e2e2e2" }} />
    </>
  );
}
