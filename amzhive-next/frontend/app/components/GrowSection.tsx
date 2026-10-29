"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function ArrowIcon({ color = "white" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
      <path d="M1 5.5L19.5809 5.50003" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const growServices = [
  {
    href: "#",
    title: "Organic Marketing SEO",
    description: "Ensure your business stands out and is easily discoverable by your target audience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g clipPath="url(#g1)">
          <path d="M21 45H27" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35.9999 24C36.008 21.7538 35.3854 19.5504 34.203 17.6406C33.0207 15.7307 31.326 14.1911 29.3118 13.1968C27.2976 12.2025 25.0448 11.7935 22.8097 12.0163C20.5745 12.2391 18.4468 13.0848 16.6685 14.4571C14.8903 15.8295 13.5329 17.6734 12.7508 19.779C11.9688 21.8847 11.7934 24.1676 12.2447 26.3681C12.696 28.5685 13.7558 30.5981 15.3036 32.2259C16.8514 33.8537 18.825 35.0145 20.9999 35.576V39H26.9999V35.576C29.5711 34.9171 31.8503 33.4225 33.4795 31.3271C35.1086 29.2316 35.9952 26.6542 35.9999 24Z" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 6V3" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 21H45" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 24H6" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36.7266 35.228L38.8486 37.35" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.15039 7.65002L11.2724 9.77203" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36.7266 9.7719L38.8486 7.6499" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.15039 37.35L11.2724 35.228" stroke="#060097" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs><clipPath id="g1"><rect width="48" height="48" fill="white" /></clipPath></defs>
      </svg>
    ),
  },
  {
    href: "#",
    title: "Paid Advertisement",
    description: "Leverage social media, PPC campaigns, and programmatic ads to optimize visibility and skyrocket ad spend returns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <path d="M17.5 17V48" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 25.5H11" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 32.5H11" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 39.5H11" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.5 24H38.5C38.5 24 40 24 40 25.5V39.5C40 39.5 40 41 38.5 41H25.5C25.5 41 24 41 24 39.5V25.5C24 25.5 24 24 25.5 24Z" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 32H40" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 32V41" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 8H43.5C43.5 8 46.5 8 46.5 11V45C46.5 45 46.5 48 43.5 48H4.5C4.5 48 1.5 48 1.5 45V11C1.5 11 1.5 8 4.5 8Z" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 17H46.5" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/social-media-marketing",
    title: "Social Media Marketing",
    description: "Enhance engagement via compelling content, enriching your social media presence with exceptional value for your audience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="42" viewBox="0 0 48 42" fill="none">
        <path d="M9.5 15H38.5C38.5 15 40 15 40 16.5V20.5C40 20.5 40 22 38.5 22H9.5C9.5 22 8 22 8 20.5V16.5C8 16.5 8 15 9.5 15Z" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 28H16.5C16.5 28 18 28 18 29.5V33.5C18 33.5 18 35 16.5 35H9.5C9.5 35 8 35 8 33.5V29.5C8 29.5 8 28 9.5 28Z" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 28H40" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 35H40" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 1H43.5C43.5 1 46.5 1 46.5 4V38C46.5 38 46.5 41 43.5 41H4.5C4.5 41 1.5 41 1.5 38V4C1.5 4 1.5 1 4.5 1Z" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 10H46.5" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/drive-engagement",
    title: "Drive Engagement",
    description: "Foster brand loyalty and top-of-mind awareness with targeted email campaigns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M36 43.5H43.5C44.2956 43.5 45.0588 43.184 45.6214 42.6214C46.184 42.0588 46.5 41.2956 46.5 40.5V7.73C46.4974 6.87382 46.156 6.05348 45.5504 5.44826C44.9448 4.84302 44.1242 4.5021 43.268 4.5H4.714C3.8624 4.50264 3.04644 4.8421 2.44428 5.44428C1.8421 6.04644 1.50264 6.8624 1.5 7.714V40.268C1.50211 41.1242 1.84303 41.9448 2.44826 42.5504C3.05348 43.156 3.87382 43.4974 4.73 43.5H12" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 13.5H46.5" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34.5 21L30 36H18L15 27H32.7" stroke="#060097" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function GrowSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-5 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: heading + description + button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:w-[340px] flex-shrink-0"
        >
          <div
            className="inline-block border border-[#060097]/20 rounded-xl px-5 py-3 mb-6 bg-[#f9f6fe]"
          >
            <div className="text-2xl font-bold text-[#060097] font-[var(--font-jakarta)]">Grow</div>
          </div>

          <p className="text-[#67768e] text-sm leading-relaxed mb-8">
            After establishing your online presence, it&apos;s time to cultivate growth. Seamlessly reach and engage your target audience with our tailored growth packages designed to maximize your digital impact.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#060097] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#0a00c8] transition-all"
            >
              <ArrowIcon color="white" />
              OUR WORK
            </Link>
          </div>
        </motion.div>

        {/* Right: 2x2 service cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {growServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.08 }}
            >
            <Link
              href={service.href}
              className="group block rounded-2xl p-6 border border-gray-100 hover:border-[#060097]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-[#f9f6fe]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-[#000000] font-bold text-lg mb-2 font-[var(--font-jakarta)] group-hover:text-[#060097] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#67768e] text-sm leading-relaxed">{service.description}</p>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
