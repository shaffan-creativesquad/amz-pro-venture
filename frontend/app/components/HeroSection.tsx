"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none">
      <path d="M1 5.5L19.5809 5.50003" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.6914 11.5L20.0002 6L14.6914 0.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const expertStats = [
  {
    number: "$1,557,809",
    label: "Managed Across Google & Facebook Ads",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M23 6l-9.5 9.5-5-5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 6h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    number: "$5,573,590",
    label: "Generated in Revenue for Our Clients So Far",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    number: "400+",
    label: "Completed Projects",
    icon: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/></svg>,
  },
  {
    number: "350+",
    label: "Stores Created and Deployed",
    icon: <svg viewBox="0 0 616 512" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor"><path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z"/></svg>,
  },
  {
    number: "100%",
    label: "Satisfaction Guaranteed or Refunded",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    number: "10+",
    label: "Years of Client Partnerships",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
];

const stats = [
  {
    number: "400+",
    label: "Projects\nDelivered",
    icon: (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor">
        <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
      </svg>
    ),
  },
  {
    number: "350+",
    label: "Stores Built\nand Launched",
    icon: (
      <svg viewBox="0 0 616 512" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="currentColor">
        <path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z" />
      </svg>
    ),
  },
  {
    number: "$5,573,590",
    label: "Revenue Generated\nfor Our Clients",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden" style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-0 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT */}
        <div className="flex-1 pb-14 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center mb-6 overflow-hidden rounded-sm max-w-full"
          >
            <span className="bg-[#ff9900] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2">Ecommerce Growth Agency</span>
            <span className="bg-black text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2">Amazon Specialists</span>
          </motion.div>

          {/* Mobile-only hero image */}
          <div className="block lg:hidden w-full mb-6">
            <Image
              src="/Layer 3.png"
              alt="AMZ ProVenture Hero"
              width={1446}
              height={1088}
              priority
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="leading-tight mb-5 max-w-[900px]"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            <span className="text-[#000000]">Building E-Commerce Brands That </span>
            <span className="text-[#ff9900]">Sell, Scale </span>
            <span className="text-[#000000]">and </span>
            <span className="text-[#ff9900]">Stay Ahead.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#67768e] text-[15px] leading-relaxed mb-6 max-w-[520px]"
          >
            AMZ ProVenture is an ecommerce growth agency for brands that expect more from every sale. We build Shopify, WooCommerce and WordPress stores people actually buy from. Then we take them further on Amazon, Walmart, eBay and Etsy with sharper listings, smarter ad spend and decisions based on real numbers.
          </motion.p>

          {/* Links row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mb-8 text-sm font-semibold justify-center lg:justify-start"
          >
            <Link href="/amazon-influencer-marketing-service" className="text-[#ff9900] hover:underline transition-colors">
              Marketing
            </Link>
            <span className="text-[#67768e]">I</span>
            <Link href="/contact-us" className="text-[#67768e] hover:text-[#000000] transition-colors">
              Tell us about your project
            </Link>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-md overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                OUR WORK
                <ArrowIcon />
              </span>
            </Link>
            <Link
              href="/account-management-for-amazon"
              className="group relative inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-md overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#ff9900] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300">
                SERVICES
                <ArrowIcon />
              </span>
            </Link>
          </motion.div>

          {/* Mobile-only Expert Stats */}
          <div className="grid lg:hidden grid-cols-2 gap-4 w-full mt-8">
            {expertStats.map((s, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center border border-transparent hover:border-[#ff9900] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#ff9900] text-white flex items-center justify-center mb-3">
                  {s.icon}
                </div>
                <div className="text-lg font-bold text-[#000000] mb-1">{s.number}</div>
                <div className="text-[#67768e] text-xs leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Hero Image + Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-shrink-0 w-full lg:w-[680px] flex flex-col items-center max-w-full"
        >
          <div className="hidden lg:flex w-full mb-6 relative justify-center">
            <Image
              src="/Layer 3.png"
              alt="AMZ ProVenture Hero"
              width={1446}
              height={1088}
              priority
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
          {/* Stats Cards */}
          <div className="hidden lg:grid grid-cols-3 gap-4 w-full pb-10">
            {stats.map((s, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-md p-5 flex flex-col items-center text-center border border-transparent hover:border-[#060097] transition-all duration-300 cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-[#ff9900] text-white group-hover:bg-white group-hover:border-2 group-hover:border-[#000000] group-hover:text-[#ff9900] flex items-center justify-center mb-4 transition-all duration-300">
                  {s.icon}
                </div>
                <div className="text-xl font-bold text-[#000000] mb-1">{s.number}</div>
                <div className="text-[#67768e] text-xs leading-tight whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
