"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { src: "/Amazon-Ads-Partner-Badge-1.webp", alt: "Amazon Ads Verified Partner" },
  { src: "/Amazon-SPN-Badge-1.webp", alt: "Amazon Service Partner" },
  { src: "/Google-Badge-1.webp", alt: "Google Partner" },
  { src: "/Walmart-Marketplace-Badge-1.webp", alt: "Walmart Trusted Partner" },
  { src: "/Shopify-Badge-4.webp", alt: "Shopify Partner" },
  { src: "/Tiktok-Badge-1.webp", alt: "TikTok Shop Partner" },
];

export default function HeroSection() {
  return (
    <section
      className="w-full overflow-hidden mx-auto"
      style={{
        background: "linear-gradient(135deg, #fff8f0 0%, #ffffff 60%)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
      }}
    >
      {/* Hero content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 md:pt-24 pb-10 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <p className="text-[#ff9900] text-xs font-bold uppercase tracking-widest mb-4">
            Case Studies
          </p>

          <h1
            className="font-bold leading-tight mb-5"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#000000",
            }}
          >
            Real Case Studies Across{" "}
            <span style={{ color: "#ff9900" }}>Marketplace, E-Commerce,</span>{" "}
            and Digital Marketing
          </h1>

          <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[480px]">
            Read our e-commerce and digital marketing case studies to see the real business results we achieve for our clients.
          </p>
        </motion.div>

        {/* RIGHT: Banner image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="flex-shrink-0 w-full lg:w-[460px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-[420px]">
            <Image
              src="/Case-Studies-Main-Banner-550x550.webp"
              alt="Real Case Studies Across Marketplace, E-Commerce, and Digital Marketing"
              width={420}
              height={420}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>

      {/* Partners bar — inside same section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3 }}
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pb-10"
      >
        <div style={{ borderTop: "1px solid #f0e8df" }} className="pt-8 flex flex-col items-center gap-6">
          <span className="text-[13px] font-black uppercase tracking-[0.2em] text-[#000000]">
            Partners With
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <div
                key={p.alt}
                className="flex items-center justify-center px-5 py-3"
                style={{ minWidth: "140px" }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={220}
                  height={90}
                  unoptimized
                  className="h-[72px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
