"use client";

import { useState } from "react";

const stats = [
  { value: "340+", label: "Brands Audited" },
  { value: "40%", label: "Avg. Ad Waste Found" },
  { value: "10", label: "Audit Score Dimensions" },
  { value: "Always", label: "Monthly Reporting" },
];

const faqs = [
  {
    question: "Can you promise I'll hit $1 million?",
    answer: "No one can promise a specific revenue number — and anyone who does is lying. What we can promise is a rigorous audit that identifies exactly what's holding you back, a clear system for fixing it, and a team that's done this for 340+ brands. The results depend on your product, your market, and how fast you move. We give you the roadmap; you drive.",
  },
  {
    question: "Is it just another generic audit?",
    answer: "No. Generic audits give you a PDF with observations and no follow-through. Our Growth Audit scores your business across 10 specific dimensions — ad efficiency, channel mix, retention, listing health, and more — and turns that into a prioritized action plan. Every recommendation is tied to a specific revenue lever we believe it can unlock.",
  },
  {
    question: "Amazon is treating me fine. Why would I add other channels?",
    answer: "Because Amazon can stop treating you fine at any moment. A policy change, a new competitor, a listing suppression — any of these can cut your revenue overnight with no warning. Brands that own customer relationships on multiple channels don't have that vulnerability. We don't add channels for the sake of it; we add the ones that make sense for your margin and your product.",
  },
  {
    question: "Do I need to drop my current agency to start?",
    answer: "No. We can work alongside your existing team or agency. Many of our clients come to us because their current setup is missing certain capabilities — multi-channel expansion, retention systems, or a proper growth audit. We identify what's missing and fill those gaps without disrupting what's already working.",
  },
  {
    question: "When will I actually see something happen?",
    answer: "Within the first two weeks, you'll have your full Growth Audit delivered with clear priorities. Most clients see measurable changes in ad performance and account health within the first 30 days. Channel expansion and retention systems typically show results in 60–90 days depending on implementation speed.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[860px] mx-auto px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: "#E91C59" }}>
            Common Questions
          </p>
          <h2
            className="font-black uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 48px)", color: "#1e293b" }}
          >
            What Brands Frequently Ask Us
          </h2>
          <p className="text-[16px]" style={{ color: "#E91C59" }}>
            Honest answers about what we do, how it works, and what you can expect.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 mb-14">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center py-6 px-4"
              style={{ borderLeft: i !== 0 ? "2px solid #E91C59" : undefined }}
            >
              <span
                className="font-black leading-none mb-1"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#E91C59" }}
              >
                {stat.value}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#67768e" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between py-6 text-left gap-6"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="font-semibold text-[17px] leading-snug"
                  style={{ color: "#1e293b" }}
                >
                  {faq.question}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[18px] font-light transition-transform duration-300"
                  style={{
                    color: open === i ? "#ffffff" : "#1e293b",
                    backgroundColor: open === i ? "#E91C59" : "transparent",
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
