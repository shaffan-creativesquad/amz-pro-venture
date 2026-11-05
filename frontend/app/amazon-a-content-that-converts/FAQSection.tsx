"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Do you create A+ Content for brands with many ASINs?",
    answer: "Yes. We often work with brands that manage large catalogs. We offer custom packages for multi-ASIN setups and parent-child listings, so all your products share a consistent, polished look.",
  },
  {
    question: "Do you offer Premium A+ Content design?",
    answer: "Yes. We design Amazon Premium A+ Content for eligible brands, using advanced modules like carousels, hotspots, videos, and comparison charts.",
  },
  {
    question: "Can one A+ Content design be used on several products?",
    answer: "Yes, you can use the same A+ Content for similar products. But if the products have different features or appeal to different buyers, it’s better to create separate content that fits each one.",
  },
  {
    question: "What if I don’t have professional photos or lifestyle images?",
    answer: "That’s fine. We can create lifestyle visuals, infographics, and branded graphics using your product photos or samples, so your A+ Content still looks polished.",
  },
  {
    question: "How long does the A+ Content design process take?",
    answer: "Timing depends on how many modules and products are involved. We’ll share a clear timeline after reviewing your listing, and we’ll keep you updated at every stage.",
  },
  {
    question: "How do you design A+ Content for Amazon’s Rufus AI?",
    answer: "We make sure your product details, images, and text are easy to understand. We also add relevant keywords and descriptive alt text so Rufus can better understand your product and what it offers.",
  },
  {
    question: "Will A+ Content increase my sales and conversion rate?",
    answer: "Yes, because when customers have a clear picture of what the product offers and can get their questions answered, they tend to feel more confident buying it. Amazon claims sales have increased by up to 8% for Basic A+ Content and 20% for Premium A+.",
  },
  {
    question: "Can you improve my current A+ Content, or only create new content?",
    answer: "Both. We can audit and refresh your existing A+ Content, or build brand-new modules from scratch, depending on what your listing needs.",
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
            Have questions about our Amazon A+ content services? You&apos;ll find the answers here. If not, feel free to reach out directly.
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
