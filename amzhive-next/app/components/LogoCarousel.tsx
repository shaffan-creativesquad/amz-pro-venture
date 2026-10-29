"use client";

import { motion } from "framer-motion";

const logos = [
  {
    alt: "WooCommerce",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" fill="white" className="h-8 w-auto">
        <text x="0" y="30" fontSize="28" fontWeight="700" fontFamily="Arial, sans-serif" fill="white">(woo) COMMERCE</text>
      </svg>
    ),
  },
  {
    alt: "Shopify",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" className="h-8 w-auto">
        <text x="26" y="29" fontSize="24" fontWeight="500" fontFamily="Arial, sans-serif" fill="white">shopify</text>
        <path d="M14 6c-0.1-0.7-0.7-1-1.2-1.1-0.5 0-1.7-0.1-1.7-0.1s-1.1-1.1-1.3-1.2V34l7.5-1.6L20 8.5C19.5 8.3 14.1 6.7 14 6z" fill="white"/>
      </svg>
    ),
  },
  {
    alt: "Google",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" className="h-8 w-auto">
        <text x="0" y="30" fontSize="30" fontWeight="400" fontFamily="Arial, sans-serif" fill="white">Google</text>
      </svg>
    ),
  },
  {
    alt: "Square",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 40" className="h-8 w-auto">
        <rect x="0" y="6" width="28" height="28" rx="4" fill="white"/>
        <rect x="7" y="13" width="14" height="14" rx="2" fill="black"/>
        <text x="36" y="29" fontSize="24" fontWeight="500" fontFamily="Arial, sans-serif" fill="white">Square</text>
      </svg>
    ),
  },
  {
    alt: "BigCommerce",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 40" className="h-8 w-auto">
        <polygon points="4,32 4,8 12,8 12,20 20,8 28,8 18,22 28,32 20,32 12,22 12,32" fill="white"/>
        <text x="34" y="29" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif" fill="white">COMMERCE</text>
      </svg>
    ),
  },
  {
    alt: "Meta",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 40" className="h-8 w-auto">
        <path d="M6 20c0-4 2-8 5-8 2 0 3.5 1.5 5 4 1.5-2.5 3-4 5-4 3 0 5 4 5 8 0 2-0.5 3.5-1.5 3.5-1.2 0-2-1.8-3.5-4.5C20 21 19 23.5 16 23.5c-3 0-4-2.5-5.5-4.5C9 21.7 8.2 23.5 7 23.5 6.5 23.5 6 22 6 20z" fill="white" transform="scale(1.4) translate(0, -2)"/>
        <text x="44" y="29" fontSize="24" fontWeight="500" fontFamily="Arial, sans-serif" fill="white">Meta</text>
      </svg>
    ),
  },
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
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
