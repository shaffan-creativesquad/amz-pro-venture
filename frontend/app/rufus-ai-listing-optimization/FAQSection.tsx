"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Can you create listings from scratch?",
    answer: "Yes. If you’re launching a new product or adding more products to your store, we can write the listing from scratch. We’ll handle the title, description, bullet points, and keywords to help shoppers understand what you’re selling.",
  },
  {
    question: "Will my product rank higher after optimization?",
    answer: "We aim to improve your product’s ranking by using the right keywords and making the listing more helpful to shoppers. But rankings can also depend on how many other sellers you’re competing with, your reviews, and your sales history.",
  },
  {
    question: "Do you offer A+ Content and image design?",
    answer: "Yes. Every optimization includes 6 listing images, and A+ Content creation is available as an add-on to strengthen your brand story and conversions.",
  },
  {
    question: "Can you run A/B testing for my listings?",
    answer: "Yes. For brand-registered sellers, we can test elements like titles and main images using Amazon’s experiment tools to find which version sells better.",
  },
  {
    question: "When can I expect to see a difference after optimization?",
    answer: "Many sellers notice changes in clicks and conversions within a few weeks. Ranking improvements usually build over time as Amazon picks up stronger sales and engagement.",
  },
  {
    question: "What makes your listing optimization service different from others?",
    answer: "We combine real keyword data, Amazon listing copywriting, and Rufus AI listing optimization in one service. Every listing is built for your product and audience, not from a template.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1280px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0 text-center lg:text-left">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 45px)", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
            Have questions about our Amazon listing optimization services? We have the answers. If you don&apos;t find what you&apos;re looking for, feel free to reach out directly.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Let&apos;s Talk</span>
                <span className="svc-btn-bottom">Let&apos;s Talk</span>
              </span>
            </a>
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
                <span className="font-semibold text-[15px]" style={{ color: "#000000" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[18px] font-light transition-transform duration-300" style={{ color: "#000000", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
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
