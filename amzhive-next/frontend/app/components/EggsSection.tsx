"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EggsSection() {
  return (
    <section className="w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #fff8f0 0%, #ffffff 60%)" }}>
      <div className="w-full flex flex-col lg:flex-row items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 py-16 pl-10 pr-8 lg:pl-16"
        >
          <h2
            className="font-black leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 3vw, 48px)", color: "#000000" }}
          >
            ONLY SELLING ON AMAZON =<br />
            <span style={{
              color: "#ff9900",
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "#000000",
              textDecorationThickness: "3px",
              textUnderlineOffset: "8px",
            }}>ALL EGGS IN ONE BASKET…</span>
            <br />A BEAUTIFUL WAY TO LOSE EVERYTHING AT ONCE.
          </h2>
          <p className="text-[#67768e] text-[15px] leading-relaxed mb-8 max-w-[480px]">
            We move your products onto other marketplaces, your own DTC store, and TikTok Shop, so one rough day on Amazon stays a tough day instead of the whole story.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-white text-[13px] font-bold uppercase tracking-wide rounded-full transition-colors duration-300 hover:bg-black"
            style={{ backgroundColor: "#ff9900", padding: "14px 36px" }}
          >
            TRY MULTI-CHANNEL NOW →
          </Link>
        </motion.div>

        {/* Right: GIF */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="flex-1 flex items-end justify-end self-stretch"
        >
          <Image
            src="/eggs.gif"
            alt="All eggs in one basket"
            width={800}
            height={500}
            unoptimized
            className="w-full h-full object-cover object-left"
          />
        </motion.div>

      </div>
    </section>
  );
}
