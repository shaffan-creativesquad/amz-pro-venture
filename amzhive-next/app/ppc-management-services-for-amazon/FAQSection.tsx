"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is PPC a one-time setup or ongoing?",
    answer: "Amazon PPC is an ongoing, dynamic service, not a one-time setup. The initial setup is just the beginning; continuous management, budget adjustments, and ongoing optimizations (like keyword refinements and bid strategies) are essential due to constant marketplace changes.",
  },
  {
    question: "Will I see results right away?",
    answer: "There’s typically a 4–8 week learning phase where Amazon’s algorithm gathers data. During this time, performance metrics may fluctuate, which is normal. Early results aren’t indicative of long-term success. Our goal is to collect meaningful data, identify winning elements, and then leverage this for scaling and sustainable, profitable growth in subsequent optimization phases.",
  },
  {
    question: "What if my listings aren’t optimized for advertising?",
    answer: "Listing quality directly impacts ad performance. We’ll assess your product listings (images, content, reviews) during onboarding or via the $1 Audit. If gaps are found that could hinder ad performance, we’ll recommend Pre-PPC Optimizations (e.g., image fixes, A+ Content, Vine enrollment) as separate services. This ensures your ad spend is directed towards listings ready to convert.",
  },
  {
    question: "What budgets do you recommend?",
    answer: "Budget depends on your brand goals, product category, and competition. We generally suggest starting with $300–$1000 per ASIN per month. This allows for sufficient data collection during the learning phase and initial optimizations. We’ll help determine an optimal budget tailored to your specific objectives, which will be adjusted based on ongoing performance.",
  },
  {
    question: "What’s not included in this service?",
    answer: "Our core PPC management focuses on advertising. Product photography, listing creation, external influencer marketing, etc., are not included in the monthly service. However, we offer these as separate, optional add-ons. If we identify that these areas need improvement to boost your ad performance, we will recommend them.",
  },
  {
    question: "How do you measure success, and what kind of reports will I receive?",
    answer: "We focus on key performance indicators (KPIs) such as Return on Ad Spend (RoAS), Advertising Cost of Sale (ACoS), total sales driven by ads, conversion rates, and overall profitability. You’ll receive comprehensive weekly performance reports, along with monthly RoAS analysis and insights into your competitors’ ad activities, ensuring full transparency on where your budget is going and the results it’s generating.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
            Frequently Asked <span style={{ color: "#E91C59" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Got questions about our Amazon PPC Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
            <div key={i} className="border-b border-gray-300">
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[16px]" style={{ color: "#1e293b" }}>{faq.question}</span>
                <span className="flex-shrink-0 text-[22px] font-light transition-transform duration-300" style={{ color: "#1e293b", transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
              </button>
              {open === i && (
                <p className="text-[#67768e] text-[15px] leading-relaxed pb-5">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
