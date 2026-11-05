"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { value: "340+", label: "Brands Audited" },
  { value: "40%", label: "Avg. Ad Waste Found" },
  { value: "10", label: "Audit Score Dimensions" },
  { value: "Always", label: "Monthly Reporting" },
];

const faqs = [
  {
    question: "Can you guarantee I'll get to $1m?",
    answer: "We can't possibly give you a specific revenue figure. What we can say is that we'll do a full audit to identify what's stopping you, we'll give you a clear system to fix that and we'll have a team that's done this for 340+ brands. The results will be down to your product, your market and how quickly you're able to act. We'll give you the route map and you'll set the pace.",
  },
  {
    question: "Is this just another generic audit?",
    answer: "No. Every audit scores your brand across the 10 key growth dimensions, using your actual data. You'll know precisely where the gaps are that are costing you the most and what you need to address first.",
  },
  {
    question: "Amazon is working well for us. Why would we want to add any other channels?",
    answer: "It's good that Amazon is working for you, but relying on just one platform can be risky. If your account gets suspended or Amazon changes its rules, your sales could take a hit. Selling on other platforms gives you more ways to reach customers and bring in sales.",
  },
  {
    question: "Do I need to drop my current agency to start?",
    answer: "Not at all. You can kick off with the audit in parallel with your current setup. If we then go on to work with you we'll plan a seamless handover or work with your existing team.",
  },
  {
    question: "When will I start seeing results?",
    answer: "You'll get the audit findings and the quick wins fairly early on. The bigger changes (new channels, better margins etc) happen more gradually over the following months and you'll be kept up to speed on the progress in your monthly reports.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section id="faq" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20 bg-white">
      <div className="max-w-[860px] mx-auto px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "#ff9900" }}>
            Common Questions
          </p>
          <h2
            className="font-black uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#000000" }}
          >
            Questions Brands Ask Us Most
          </h2>
          <p className="text-[16px]" style={{ color: "#ff9900" }}>
            Straight answers about what we do, how it works, and what you can expect
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col items-center text-center py-6 px-4 ${i % 2 !== 0 ? "border-l-2 border-[#ff9900]" : i !== 0 ? "md:border-l-2 md:border-[#ff9900]" : ""}`}
            >
              <span
                className="font-black leading-none mb-1"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#ff9900" }}
              >
                {stat.value}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#67768e" }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.06 }} className="border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between py-6 text-left gap-6"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-[17px] leading-snug"
                  style={{ color: "#000000" }}
                >
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[18px] font-light transition-transform duration-300"
                  style={{
                    color: open === i ? "#ffffff" : "#000000",
                    backgroundColor: open === i ? "#ff9900" : "transparent",
                    border: open === i ? "none" : "1.5px solid #d1d5db",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="text-[#67768e] text-[15px] leading-relaxed pb-6">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
