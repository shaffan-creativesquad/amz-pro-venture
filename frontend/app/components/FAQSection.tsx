"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Do I need experience to work with an eCommerce agency like AMZ ProVenture?",
    answer:
      "No experience is needed. AMZ ProVenture was built to support first-time founders and growing brands. Whether you're starting your first eCommerce store or switching platforms, we guide you through everything and handle the heavy lifting for you.",
  },
  {
    question: "What platforms do you use to start and manage my eCommerce store?",
    answer:
      "We build and manage stores on all major eCommerce platforms, including Shopify, Amazon, Walmart, TikTok Shop, eBay, and Etsy. We help you choose the best one for your business and handle the entire setup process for you.",
  },
  {
    question: "How does AMZ ProVenture help me start an eCommerce store from scratch?",
    answer:
      "We take care of everything. That includes product research, store setup, branding, listings, payment and shipping setup, and even marketing. You don't need to worry about technical steps — we've got you covered from day one.",
  },
  {
    question: "Can you help me scale and manage my existing eCommerce store?",
    answer:
      "Yes. If you already have a store, we can take over management and help you grow. That includes improving your product listings, running ads, optimizing performance, and providing customer support. We focus on real growth and long-term results.",
  },
  {
    question: "Will I own the eCommerce store you built for me?",
    answer:
      "Yes, absolutely. You will have full ownership of your store, your brand, and your accounts. Our role is to build and manage it, but everything remains yours.",
  },
  {
    question: "How much does it cost to start or scale my store with AMZ ProVenture?",
    answer:
      "Costs vary based on your platform and the level of service you need. We offer packages for new store launches, full management, and scaling support. We'll walk you through your options on a free call so you know exactly what fits your budget. No hidden fees, ever.",
  },
  {
    question: "How long does it take to launch my eCommerce store?",
    answer:
      "Most stores are launched within 3 to 6 weeks. This depends on the platform, the size of your product catalog, and the services you choose. We'll give you a clear timeline during onboarding.",
  },
  {
    question: "Does AMZ ProVenture help with advertising and getting customers?",
    answer:
      "Yes, we do. We run paid ads on platforms like Facebook, Instagram, Google, TikTok, and Amazon. We also set up email and SMS marketing so you can attract and retain customers without doing it all yourself.",
  },
  {
    question: "Can you help me choose what to sell in my store?",
    answer:
      "Absolutely. We offer data-backed product research to help you find profitable products based on trends, demand, and your goals. Whether you're launching a brand or selling on Amazon, we help you start smart.",
  },
  {
    question: "Do you offer ongoing store management and support?",
    answer:
      "Yes. Our eCommerce agency offers full store management, including inventory updates, order tracking, customer service, and performance optimization. We're your long-term partner, not just a setup service.",
  },
  {
    question: "How do I get started with AMZ ProVenture?",
    answer:
      "It's simple. Book a free consultation and tell us about your goals. We'll explain how our eCommerce agency can help you start, manage, or scale your store — and show you the best package for your needs.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full pt-6 pb-20 lg:py-20"
      style={{ backgroundColor: "#f4f4f4" }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-14">
        {/* Left */}
        <div className="lg:w-[440px] flex-shrink-0 text-center lg:text-left">
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "#000000",
            }}
          >
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
            Have questions about starting or scaling your eCommerce store? Here are answers to the most common questions about our services. If you need more details, our team is always ready to talk.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider text-[12px] text-white overflow-hidden transition-all duration-300"
              style={{ background: "#ff9900", padding: "12px 28px" }}
            >
              <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              <span className="relative z-10 flex items-center gap-2">Let&apos;s Talk</span>
            </Link>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: (i % 6) * 0.05 }}
              className="border-b border-gray-300"
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[15px] text-[#000000]">{faq.question}</span>
                <span
                  className="flex-shrink-0 text-[18px] font-light transition-transform duration-300 text-[#000000]"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="text-[#67768e] text-[15px] leading-relaxed pb-5">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
