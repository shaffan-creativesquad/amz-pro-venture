"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function ArrowIcon({ color = "white" }: { color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
      <path d="M1 5.5L19.5809 5.50003" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const createServices = [
  {
    href: "/amazon-a-content-that-converts",
    title: "Brand & Creative",
    description: "Collaborate with us to elevate your brand's performance and engagement to new heights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <g clipPath="url(#clip0)">
          <path d="M21 45H27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35.9999 24C36.008 21.7538 35.3854 19.5504 34.203 17.6406C33.0207 15.7307 31.326 14.1911 29.3118 13.1968C27.2976 12.2025 25.0448 11.7935 22.8097 12.0163C20.5745 12.2391 18.4468 13.0848 16.6685 14.4571C14.8903 15.8295 13.5329 17.6734 12.7508 19.779C11.9688 21.8847 11.7934 24.1676 12.2447 26.3681C12.696 28.5685 13.7558 30.5981 15.3036 32.2259C16.8514 33.8537 18.825 35.0145 20.9999 35.576V39H26.9999V35.576C29.5711 34.9171 31.8503 33.4225 33.4795 31.3271C35.1086 29.2316 35.9952 26.6542 35.9999 24Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 6V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 21H45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 24H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36.7266 35.228L38.8486 37.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.15039 7.65002L11.2724 9.77203" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M36.7266 9.7719L38.8486 7.6499" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.15039 37.35L11.2724 35.228" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs><clipPath id="clip0"><rect width="48" height="48" fill="white" /></clipPath></defs>
      </svg>
    ),
  },
  {
    href: "#",
    title: "UX & UI",
    description: "Embrace your role as a market disruptor and make a visual impact with our innate expertise in UX and UI design.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
        <path d="M17.5 17V48" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 25.5H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 32.5H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 39.5H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.5 24H38.5C38.5 24 40 24 40 25.5V39.5C40 39.5 40 41 38.5 41H25.5C25.5 41 24 41 24 39.5V25.5C24 25.5 24 24 25.5 24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 32H40" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 32V41" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 8H43.5C43.5 8 46.5 8 46.5 11V45C46.5 45 46.5 48 43.5 48H4.5C4.5 48 1.5 48 1.5 45V11C1.5 11 1.5 8 4.5 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 17H46.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/web-design",
    title: "Web Design",
    description: "Capture attention and foster curiosity about your business with a visually striking, robust, and engaging website.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="42" viewBox="0 0 48 42" fill="none">
        <path d="M9.5 15H38.5C38.5 15 40 15 40 16.5V20.5C40 20.5 40 22 38.5 22H9.5C9.5 22 8 22 8 20.5V16.5C8 16.5 8 15 9.5 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.5 28H16.5C16.5 28 18 28 18 29.5V33.5C18 33.5 18 35 16.5 35H9.5C9.5 35 8 35 8 33.5V29.5C8 29.5 8 28 9.5 28Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 28H40" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 35H40" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 1H43.5C43.5 1 46.5 1 46.5 4V38C46.5 38 46.5 41 43.5 41H4.5C4.5 41 1.5 41 1.5 38V4C1.5 4 1.5 1 4.5 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 10H46.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/ecommerce",
    title: "Ecommerce",
    description: "Rise above the digital commerce fray with tailor-made Shopify and WooCommerce stores that set you apart from the competition.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M36 43.5H43.5C44.2956 43.5 45.0588 43.184 45.6214 42.6214C46.184 42.0588 46.5 41.2956 46.5 40.5V7.73C46.4974 6.87382 46.156 6.05348 45.5504 5.44826C44.9448 4.84302 44.1242 4.5021 43.268 4.5H4.714C3.8624 4.50264 3.04644 4.8421 2.44428 5.44428C1.8421 6.04644 1.50264 6.8624 1.5 7.714V40.268C1.50211 41.1242 1.84303 41.9448 2.44826 42.5504C3.05348 43.156 3.87382 43.4974 4.73 43.5H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 13.5H46.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34.5 21L30 36H18L15 27H32.7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.75 42C18.3358 42 18 41.6642 18 41.25C18 40.8358 18.3358 40.5 18.75 40.5" stroke="white" strokeWidth="1.5" />
        <path d="M18.75 42C19.1642 42 19.5 41.6642 19.5 41.25C19.5 40.8358 19.1642 40.5 18.75 40.5" stroke="white" strokeWidth="1.5" />
        <path d="M29.25 42C28.8358 42 28.5 41.6642 28.5 41.25C28.5 40.8358 28.8358 40.5 29.25 40.5" stroke="white" strokeWidth="1.5" />
        <path d="M29.25 42C29.6642 42 30 41.6642 30 41.25C30 40.8358 29.6642 40.5 29.25 40.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #030060 0%, #060097 50%, #040070 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-5 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: heading + description + button */}
        <motion.div
          className="lg:w-[340px] flex-shrink-0 text-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          <div
            className="inline-block border border-white/20 rounded-xl px-5 py-3 mb-6"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <div className="text-2xl font-bold text-white font-[var(--font-jakarta)]">Creativity</div>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-8">
            AMZ Pro Venture: Where Creativity Meets Innovation. Crafting captivating identities and user interfaces powered by UX research and visual strategy. Unparalleled websites, apps, and digital platforms brought to life through robust development.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/account-management-for-amazon"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all"
            >
              <ArrowIcon color="white" />
              OUR WORK
            </Link>
          </div>
        </motion.div>

        {/* Right: 2x2 service cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {createServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
            <Link
              href={service.href}
              className="group block rounded-2xl p-6 border border-white/10 hover:border-[#ffcd57]/40 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 font-[var(--font-jakarta)] group-hover:text-[#ffcd57] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
