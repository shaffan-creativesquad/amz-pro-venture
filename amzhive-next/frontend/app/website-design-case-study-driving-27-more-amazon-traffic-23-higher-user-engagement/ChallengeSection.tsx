"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const challenges = [
  "The website's outdated design reduced credibility and trust.",
  "Content hierarchy made it difficult for users to quickly understand product benefits.",
  "Amazon buy links lacked visibility and strategic placement.",
  "The customer journey was not optimized for conversions.",
  "Mobile responsiveness issues impacted user experience, engagement and sales.",
];

export default function ChallengeSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="flex-shrink-0 w-full lg:w-[460px]"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Problem.webp"
              alt="The Challenge"
              width={460}
              height={500}
              unoptimized
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex-1"
        >
          <h2
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            The Challenge
          </h2>

          <p className="text-[#67768e] text-[16px] leading-relaxed mb-4">
            The existing Davis Wellness website was not effectively supporting the brand&apos;s primary objective of driving customers to its Amazon storefront. While the site provided information about the products, it lacked the structure and user experience needed to encourage visitors to take action and purchase.
          </p>

          <p className="text-[#000000] font-semibold text-[16px] mb-5">
            As a result, the business faced several challenges:
          </p>

          <ul className="space-y-3 mb-7">
            {challenges.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5 w-5 h-5" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#67768e] text-[15px] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            To increase product sales, the brand needed a website experience designed specifically to guide users toward purchasing through Amazon.
          </p>

          <Link
            href="/book-a-call"
            className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-md overflow-hidden transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2 overflow-hidden h-[1.2em]">
              <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                Let&apos;s Discuss Your Requirements
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex items-center gap-2 absolute top-full transition-transform duration-300 group-hover:-translate-y-full">
                Let&apos;s Discuss Your Requirements
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 21 12" fill="none">
                  <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
