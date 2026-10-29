"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What does eBay Account Management include?",
    answer: "Our comprehensive eBay account management service includes everything from store setup and bulk product uploads to optimized listings, order and inventory management, and ongoing performance monitoring.",
  },
  {
    question: "Do you optimize eBay listings for SEO and conversion?",
    answer: "Yes. We optimize titles, descriptions, item specifics, images, backend keywords, and pricing using best practices tailored for eBay's algorithm.",
  },
  {
    question: "Can you handle bulk product uploads and catalog management?",
    answer: "Absolutely. Our team specializes in bulk upload workflows, catalog structuring, taxonomy management, accurate SKU and pricing updates, and timely inventory syncing.",
  },
  {
    question: "Will you help me set up my eBay store from scratch?",
    answer: "Yes. We manage full store setup, including store navigation customization, category hierarchy, automation setups, and initial catalog upload.",
  },
  {
    question: "Do you provide image editing and product copywriting services?",
    answer: "We deliver polished image editing aligned with eBay requirements and expert copywriting, ensuring listings are not only compliant but compelling and SEO-driven.",
  },
  {
    question: "How do you ensure data quality and accuracy?",
    answer: "Our process includes rigorous data validation, manual quality checks, and secure handling of client assets.",
  },
  {
    question: "What support do you offer for account health and policy compliance?",
    answer: "We proactively monitor performance metrics (seller ratings, defect rates, complaints), manage policy alerts, and guide reinstatements to mitigate suspensions.",
  },
  {
    question: "Is customer support included in the core service?",
    answer: "Yes. Our Virtual Assistants can manage buyer queries, return handling, dispute resolution, feedback responses, and help maintain high seller satisfaction scores.",
  },
  {
    question: "Do you offer international or multi-channel listing support?",
    answer: "We support eBay stores across multiple regional marketplaces and can integrate your catalog with other platforms like Amazon, Shopify, or Walmart for uniform catalog management.",
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
            Got questions about our eBay Account Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
