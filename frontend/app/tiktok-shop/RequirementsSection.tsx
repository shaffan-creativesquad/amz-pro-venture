"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="38" rx="16" ry="4" fill="#ff9900" opacity="0.2"/>
        <rect x="10" y="30" width="28" height="6" rx="3" fill="#ff9900"/>
        <rect x="12" y="22" width="24" height="6" rx="3" fill="#ff9900" opacity="0.85"/>
        <rect x="14" y="14" width="20" height="6" rx="3" fill="#ff9900" opacity="0.65"/>
        <rect x="16" y="7" width="16" height="6" rx="3" fill="#ff9900" opacity="0.5"/>
      </svg>
    ),
    title: "Initial Capital Investment",
    desc: "You'll need startup funds to cover setup, inventory, and initial marketing for a successful launch.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="26" r="16" fill="#ff9900" opacity="0.15"/>
        <path d="M24 10C17.37 10 12 15.37 12 22c0 4.5 2.4 8.44 6 10.6V36h12v-3.4c3.6-2.16 6-6.1 6-10.6 0-6.63-5.37-12-12-12z" fill="#ff9900"/>
        <rect x="20" y="36" width="8" height="3" rx="1.5" fill="#ff9900"/>
        <rect x="21" y="39" width="6" height="2" rx="1" fill="#ff9900" opacity="0.7"/>
        <text x="24" y="27" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">$</text>
      </svg>
    ),
    title: "Inventory Funding",
    desc: "A steady inventory investment ensures smooth operations, high seller ratings, and increased sales velocity.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 8C17.5 8 12 13 12 19.5c0 3.5 1.5 6.6 4 8.8V32h16v-3.7c2.5-2.2 4-5.3 4-8.8C36 13 30.5 8 24 8z" fill="#ff9900"/>
        <rect x="16" y="32" width="16" height="3" rx="1.5" fill="#ff9900" opacity="0.8"/>
        <rect x="18" y="35" width="12" height="3" rx="1.5" fill="#ff9900" opacity="0.6"/>
        <circle cx="20" cy="20" r="2" fill="white" opacity="0.6"/>
        <circle cx="28" cy="20" r="2" fill="white" opacity="0.6"/>
        <path d="M20 24 Q24 27 28 24" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      </svg>
    ),
    title: "A Long-Term Mindset",
    desc: "We build sustainable brands, but growth takes time, consistency, and a shared vision for long-term success.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" fill="#ff9900" opacity="0.15"/>
        <path d="M14 28c0-3 2-5 5-5h2l3 3 3-3h2c3 0 5 2 5 5v4H14v-4z" fill="#ff9900"/>
        <circle cx="19" cy="19" r="4" fill="#ff9900" opacity="0.8"/>
        <circle cx="29" cy="19" r="4" fill="#ff9900" opacity="0.8"/>
        <path d="M20 23l4 4 4-4" stroke="#ff9900" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: "Positive Collaboration",
    desc: "A cooperative, responsive partnership helps us execute strategies that drive better performance and profitability.",
  },
];

export default function RequirementsSection() {
  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f9fafb" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="font-bold mb-14"
          style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", color: "#000000" }}
        >
          Requirements to Partner with <span style={{ color: "#ff9900" }}>AMZ ProVenture</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div>{item.icon}</div>
              <h3
                className="font-bold text-[17px]"
                style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#000000" }}
              >
                {item.title}
              </h3>
              <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="/contact-us"
            className="group relative inline-flex items-center gap-2 rounded-full font-semibold text-[15px] text-white overflow-hidden"
            style={{ background: "#ff9900", padding: "14px 36px" }}
          >
            <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
            <span className="relative z-10">Let&apos;s get started</span>
          </Link>
          <Link
            href="/contact-us"
            className="text-[14px] font-semibold underline"
            style={{ color: "#000000" }}
          >
            Still Confused? Call Us Now
          </Link>
        </div>

      </div>
    </section>
  );
}
