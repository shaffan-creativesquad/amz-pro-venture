"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "What does the $1 15-day trial include?",
    answer: "The 15-day trial for $1 includes a full audit of your Etsy shop, optimization of listings, a test promotion, and a performance report to demonstrate measurable results. You'll get access to our expert management services with no long-term commitment.",
  },
  {
    question: "How do you ensure my Etsy shop remains compliant with Etsy's policies?",
    answer: "We proactively monitor Etsy's standards, fees, and updates, taking corrective actions to prevent policy violations or intellectual property issues. Our team also handles disputes and appeals to keep your account in good standing.",
  },
  {
    question: "What kind of results can I expect from your Etsy account management?",
    answer: "Our service focuses on measurable growth, including increased shop visibility, higher conversion rates, and improved sales through optimized listings, Etsy Ads, and seasonal promotions. Weekly reports track views, favorites, sales, and ROI.",
  },
  {
    question: "Can you help with branding and visuals if I don't have them ready?",
    answer: "Yes. We provide custom branding assets, including shop banners, logos, and listing templates. If you don't have high-quality product images, our image editing service can enhance or create them for you.",
  },
  {
    question: "How does your Etsy Ads management work?",
    answer: "We create and optimize Etsy PPC campaigns tailored to your product niche and seasonal demand, focusing on metrics like Return on Ad Spend (RoAS) and Advertising Cost of Sale (ACoS) to maximize visibility and sales.",
  },
  {
    question: "What happens during the 3-phase growth plan?",
    answer: "In Phase 1, we audit and optimize your shop's foundation (branding, listings, policies). Phase 2 focuses on growth through ads, promotions, and social/email integration. Phase 3 expands your business to other platforms like Shopify or Amazon and explores new revenue streams.",
  },
  {
    question: "Do I need to provide anything to get started?",
    answer: "To deliver the best results, we'll need access to your Etsy business account, product details and pricing, high-resolution product images, and any branding files or style guidelines. We guide you through the process and offer support if you need help preparing these materials.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Got questions about our Etsy Account Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
          </p>
          <a href="/contact-us" className="svc-btn">
            <span className="svc-btn-inner">
              <span className="svc-btn-top">Lets Talk</span>
              <span className="svc-btn-bottom">Lets Talk</span>
            </span>
          </a>
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
