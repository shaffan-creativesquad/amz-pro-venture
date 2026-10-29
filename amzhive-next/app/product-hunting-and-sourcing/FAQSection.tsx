"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is Amazon product hunting, and why is it important?",
    answer: "Amazon product hunting involves identifying high-demand, low-competition products with strong profit potential for your Amazon store. It's critical because choosing the wrong products can lead to low sales, poor margins, or inventory issues. Our data-driven research ensures you invest in products that are likely to succeed, minimizing risks and maximizing profitability.",
  },
  {
    question: "What kind of products will you find for me?",
    answer: "We focus on private label products that have high demand, low competition, and strong profit margins. Each product is analyzed for sales trends, seasonality, and market fit, ensuring it aligns with your budget and target marketplace (e.g., Amazon US, UK, EU). If you're unsure about a category, we'll guide you to the best options.",
  },
  {
    question: "How to hunt products on Amazon?",
    answer: "Hunting products for Amazon requires analyzing sales history, market trends, and margins, using research tools and manual research. You need to identify products with sustainable demand, healthy margins, and low-to-medium competition.",
  },
  {
    question: "How do you ensure the suppliers you source are reliable?",
    answer: "We vet multiple suppliers globally, verifying their reliability, pricing, and compliance with certifications like FDA, CE, and RoHS. We negotiate favorable terms, including pricing and minimum order quantities (MOQs), and order samples for quality checks to ensure you work with trustworthy manufacturers.",
  },
  {
    question: "What is included in the quality assurance process?",
    answer: "We order and test product samples to ensure they meet your standards before you commit to a bulk order. Our team conducts thorough inspections, provides honest feedback, and recommends improvements if needed, ensuring every shipment is market-ready and compliant with Amazon's requirements.",
  },
  {
    question: "Can you guarantee success?",
    answer: "While no product is 100% risk-free, our data-driven approach significantly reduces risk and maximizes your chances of success. We do comprehensive research and quality assessment before recommending the product, so you get the products with the highest chances of success.",
  },
  {
    question: "What happens if I'm not satisfied with the product recommendations?",
    answer: "We work closely with you to ensure the product shortlist aligns with your goals. If you're not satisfied, we refine our research based on your feedback to find better-suited options, ensuring you're confident in your investment.",
  },
  {
    question: "Do you work with suppliers outside China?",
    answer: "Yes. While China remains a strong sourcing hub, we also work with manufacturers in India, Vietnam, Pakistan, and other regions depending on your needs. The goal is to secure the best products for you at the most reasonable prices and from reliable suppliers.",
  },
  {
    question: "Can you help with branding and packaging?",
    answer: "We assist with custom packaging design, logo design, and trademarking to help your product stand out. We also guide you through the Amazon Brand Registry process to protect your brand and provide strategies to differentiate your product from competitors.",
  },
  {
    question: "Do you handle shipping and logistics?",
    answer: "We do not handle shipping and logistics. But we guide you through every step of the process, including freight forwarding, customs, and logistics. However, you'll have the final say on your shipping method and partner.",
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
            Got questions about our Data-Driven Product Hunting &amp; Sourcing service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
