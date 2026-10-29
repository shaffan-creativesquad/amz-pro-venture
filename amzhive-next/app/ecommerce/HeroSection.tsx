"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <section className="w-full overflow-visible" style={{ backgroundColor: "#21242f" }}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-10 md:pt-16 pb-0 flex flex-col items-start text-left">

          <motion.p className="text-sm font-medium mb-4 tracking-wide" style={{ color: "rgba(255,255,255,0.7)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Ecommerce
          </motion.p>

          <motion.h1 className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 48px)", color: "#ffffff" }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            WooCommerce, Adobe Commerce,{" "}
            <span style={{ color: "#E91C59" }}>CS Cart and Shopify specialists.</span>
          </motion.h1>

          <motion.p className="text-[16px] leading-relaxed w-full mb-12 text-left" style={{ color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            AMZHIVE is a leading London ecommerce agency. We build e-commerce websites using the latest payment processing systems, providing you with a platform that takes care of everything 24/7. From product management to payment processing, we ensure that your e-commerce website offers a smooth user journey and an easy to manage back end.{" "}
            <a href="/ecommerce" className="hover:underline" style={{ color: "rgba(255,255,255,0.6)" }}>view e-commerce case studies</a>
          </motion.p>

          <motion.div className="w-full max-w-[1100px] relative z-10 mb-[-60px] md:mb-[-180px]"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
            <Image src="/gif-3.gif" alt="Ecommerce" width={1100} height={600} unoptimized className="w-full h-auto object-contain" />
          </motion.div>

        </div>
      </section>
      <div className="bg-white pt-[80px] md:pt-[200px]" />
    </>
  );
}
