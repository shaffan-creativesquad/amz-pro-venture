"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "What is Amazon FBA inventory management?",
    answer: "FBA inventory management is all about tracking and managing your inventory in the FBA warehouses to match demand. It's about auditing your inventory, forecasting your future needs and managing your stock levels to avoid both stockouts and overstocking. The aim is to keep your stock available, your rankings protected and your costs as low as possible.",
  },
  {
    question: "How often will I get inventory reports?",
    answer: "You'll get a full report every month on inventory health, restock recommendations and forecast accuracy, plus alerts when something requires immediate attention.",
  },
  {
    question: "Can you promise I'll never run out of stock?",
    answer: "No one can guarantee that of course, given that supplier delays and sudden demand spikes are completely out of our control. We mitigate that risk through the use of safety stock and early warnings.",
  },
  {
    question: "What if my sales are seasonal?",
    answer: "That's where Amazon FBA inventory forecasting really comes into its own. We look at your historical seasonal patterns and plan your restocks well in advance so you're fully stocked up for the busy periods and have no stock left over in the lulls.",
  },
  {
    question: "Do you place purchase orders for me?",
    answer: "No you stay in control of your orders. We tell you precisely what to reorder, how much and when so you can order from your suppliers with complete confidence.",
  },
  {
    question: "What if I sell new products with little sales history?",
    answer: "We can still forecast them using the same products, category trends and early sales data and then of course tune the plan as the real numbers come in.",
  },
  {
    question: "Is this service automated or managed by people?",
    answer: "Both. The AI tools look at the data and our team then go through it all and turn it into clear, actionable advice.",
  },
  {
    question: "How can I avoid stockouts using Amazon's inventory tools?",
    answer: "Amazon's restock reports and alerts are a decent starting point, but they don't always take into account supplier lead times or promotions. We superimpose our own forecasting for restock timing on top of those.",
  },
  {
    question: "How can I optimize Amazon inventory to boost sales?",
    answer: "Keep best sellers in stock, clear slow movers, avoid long-term storage fees, and maintain a healthy Amazon IPI score to protect storage capacity for top products.",
  },
  {
    question: "How much do Amazon inventory management solutions cost?",
    answer: "It depends on your number of SKUs and the support you need. Contact us for a free consultation, and we'll suggest a monthly plan that fits your store.",
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
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Have questions about our FBA inventory audit and forecasting service? You&apos;ll find the answers here. If not, feel free to reach out directly.
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
