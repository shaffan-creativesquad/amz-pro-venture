"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { alt: "WooCommerce", src: "/woo-commerce-slider-logo.webp" },
  { alt: "Shopify",     src: "/shopify-slider-logo.webp" },
  { alt: "Google",      src: "/google-slider-logo.webp" },
  { alt: "Meta",        src: "/meta-slider-logo.webp" },
  { alt: "Square",      src: "/square-slider-logo.webp" },
  { alt: "BigCommerce", src: "/big-commerce-slider-logo.webp" },
  { alt: "TikTok",      src: "/tiktok-slider-logo.webp" },
];

export default function LogoCarousel() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.7 }}
      className="bg-black py-6 overflow-hidden"
    >
      <div className="overflow-hidden">
        <div className="logo-carousel-track flex items-center gap-20 w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image src={logo.src} alt={logo.alt} height={40} width={140} unoptimized className="h-8 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
