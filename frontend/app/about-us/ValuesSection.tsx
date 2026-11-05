"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Customer Centric",
    description: "We strive to exceed customer expectations and build strong relationships.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#fff3e0" />
        <path d="M18 10a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#ff9900" />
        <path d="M10 26c0-4 3.6-7 8-7s8 3 8 7" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M24 11l1.2 2.4 2.8.4-2 1.9.5 2.7-2.5-1.3-2.5 1.3.5-2.7-2-1.9 2.8-.4z" fill="#ff9900" />
      </svg>
    ),
  },
  {
    title: "Team Work",
    description: "We believe that together we can achieve more than we can as individuals.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#fff3e0" />
        <circle cx="12" cy="14" r="3" fill="#ff9900" />
        <circle cx="24" cy="14" r="3" fill="#ff9900" />
        <circle cx="18" cy="13" r="3.5" fill="#ff9900" />
        <path d="M6 26c0-3 2.7-5 6-5" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M30 26c0-3-2.7-5-6-5" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M12 26c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We believe in doing the right thing, even when it's not easy.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#fff3e0" />
        <path d="M12 18c1.5-1 3-1.5 6-1.5s4.5.5 6 1.5" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M10 15s2-4 8-4 8 4 8 4v8s0 4-8 4-8-4-8-4v-8z" stroke="#ff9900" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
        <path d="M15 20l2 2 4-4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "We encourage creativity and fresh thinking to drive progress and growth.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#fff3e0" />
        <path d="M18 9a7 7 0 0 1 4 12.7V24a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2.3A7 7 0 0 1 18 9z" stroke="#ff9900" strokeWidth="1.8" fill="none" />
        <path d="M15 25h6M16 27h4" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 12v4M15.5 14.5l3 3" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description: "We take ownership of our actions and accept responsibility for our mistakes.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#fff3e0" />
        <circle cx="17" cy="17" r="6" stroke="#ff9900" strokeWidth="1.8" fill="none" />
        <path d="M22 22l4 4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.5 17l2 2 4-4" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We pursue excellence in everything we do, setting high standards and constantly pushing ourselves to improve.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#fff3e0" />
        <path d="M18 9l2.3 4.6 5.1.7-3.7 3.6.9 5-4.6-2.4-4.6 2.4.9-5-3.7-3.6 5.1-.7z" fill="#ff9900" stroke="#ff9900" strokeWidth="1" strokeLinejoin="round" />
        <path d="M14 26v2M18 27v2M22 26v2" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13 26h12" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-[#fafafa] border border-gray-100 rounded-2xl p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="font-bold text-[16px] text-[#000000] mb-2" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                {value.title}
              </h3>
              <p className="text-[#67768e] text-[13.5px] leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
