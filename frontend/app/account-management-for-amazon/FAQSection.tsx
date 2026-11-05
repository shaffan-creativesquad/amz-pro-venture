"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Does this service include all A+ Content types?",
    answer: "Yes. We create standard A+ Content (up to 5 modules) using the images and details you give us. Premium A+ Content has more advanced features. It's available as a paid upgrade if your brand meets Amazon's requirements.",
  },
  {
    question: "Are PPC advertising and customer support part of the core service?",
    answer: "No, both are add-ons, so you only pay for what you need. Your account manager will explain each one and tell you honestly whether your store needs it right now.",
  },
  {
    question: "Will you create visuals for our Brand Story and Storefront?",
    answer: "Yes. We'll help you plan and build your Brand Story and Amazon Storefront so they look professional and fit your brand. Tell us what you already have, and we'll let you know what else is needed.",
  },
  {
    question: "How do you access our Seller Central account securely?",
    answer: "We never ask for your password. You add us as a user through Seller Central's permission settings and choose what we can see and do. The account stays yours, and you can change or remove our access at any time.",
  },
  {
    question: "Do you handle logistics, storage or fulfillment?",
    answer: "We focus on managing and growing your seller account, and that includes planning your inventory. We work with whatever storage and fulfillment setup you already use, whether that's FBA or your own partner, so everything runs smoothly together.",
  },
  {
    question: "How does onboarding work, and how long does it take?",
    answer: "First, we have a call to learn about your brand, your goals and how things are set up now. Then we audit your account, send you the steps to grant access, and plan the first few months. Most stores are fully set up with us within a couple of weeks, depending on how many products they have.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0 text-center lg:text-left">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 45px)", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Have questions about our Amazon account management services? Check here first. If you don&apos;t see your answer, feel free to contact us.
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Let&apos;s Talk</span>
                <span className="svc-btn-bottom">Let&apos;s Talk</span>
              </span>
            </a>
            </div>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }} className="border-b border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[16px]" style={{ color: "#000000" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[22px] font-light transition-transform duration-300" style={{ color: "#000000", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
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
