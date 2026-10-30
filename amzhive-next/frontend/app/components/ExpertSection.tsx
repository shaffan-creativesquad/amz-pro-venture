"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const stats = [
  {
    number: "$1,557,809",
    label: "Over Spent On Google & Facebook Ads",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    number: "$5,573,590",
    label: "Generated in Revenue for Our Clients So Far",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "400+",
    label: "Completed Projects",
    icon: (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor">
        <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z" />
      </svg>
    ),
  },
  {
    number: "350+",
    label: "Successful Stores Created. Deployed",
    icon: (
      <svg viewBox="0 0 616 512" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor">
        <path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z" />
      </svg>
    ),
  },
  {
    number: "100%",
    label: "Satisfaction Guaranteed / Refund",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "10+",
    label: "Years of Client Relationship",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const tags = ["WooCommerce Agency", "Shopify Agency", "Social Media Marketing Agency"];

export default function ExpertSection() {
  return (
    <section className="py-20 w-full" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1"
        >
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 45px)" }}>
            <span className="text-[#000000]">You&apos;ve Got Business, </span>
            <span className="text-[#ff9900]">Speak with an Expert!</span>
          </h2>

          <div className="text-black text-[18px] leading-relaxed space-y-4 mb-8">
            <p>
              <strong className="text-[#000000]">At AMZ Pro Venture,</strong> we&apos;re more than just a eCommerce agency – we&apos;re your partners in accelerating growth. With over <strong className="text-[#000000]">10 years of expertise</strong> specializing primarily as e-commerce web designers, we&apos;ve earned a stellar reputation for crafting brands and crafting websites using cutting-edge technologies including <strong className="text-[#000000]">Shopify, WooCommerce, WordPress, Adobe Commerce/Magento, and BigCommerce.</strong>
            </p>
            <p>
              But a stunning website is just the beginning. That&apos;s why we&apos;ve evolved into a full-service digital marketing agency, equipped to deliver comprehensive <strong className="text-[#000000]">social media marketing</strong> campaigns, targeted <strong className="text-[#000000]">e-CRM email communications,</strong> strategic <strong className="text-[#000000]">search engine marketing,</strong> and impactful paid advertising across social media platforms, <strong className="text-[#000000]">pay-per-click (PPC),</strong> and programmatic display ads. Plus, our expertise in <strong className="text-[#000000]">CRO (conversion rate optimization)</strong> ensures that every visitor converts into a valued customer.
            </p>
            <p>
              We&apos;re eagerly awaiting the opportunity to collaborate with ambitious companies like yours. Our commitment is to become your trusted <strong className="text-[#000000]">e-commerce web design partner agency,</strong> guiding you through every step of your digital journey, from initial design and development to scaling your business with our proven digital marketing strategies. Let&apos;s embark on this journey together and unlock your full potential.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-0">
            {tags.map((tag, i) => (
              <span key={tag} className="flex items-center">
                <span className="text-[#ff9900] text-sm font-medium">{tag}</span>
                {i < tags.length - 1 && <span className="text-[#ff9900] mx-4">|</span>}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Stats grid */}
        <div className="flex-shrink-0 lg:w-[420px] grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 }}
              className="group bg-white rounded-2xl p-5 flex flex-col items-center text-center shadow-sm border border-transparent hover:border-[#060097] transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#ff9900] text-white group-hover:bg-white group-hover:border-2 group-hover:border-[#000000] group-hover:text-[#ff9900] flex items-center justify-center mb-4 transition-all duration-300">
                {s.icon}
              </div>
              <div className="text-[#000000] font-bold text-xl mb-1">{s.number}</div>
              <div className="text-[#67768e] text-xs leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
