"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Is this service for private label sellers?",
    answer: "No. This is specifically for Amazon FBA wholesale sellers who are going to be listing under existing ASINs. We take care of the inventory, the pricing and the account health issues that come with wholesale, we don't do private label under this service at all.",
  },
  {
    question: "Do I need to own the brand to use this service?",
    answer: "No. The wholesale sellers will be reselling an established brand under an existing ASIN. You'll need valid invoices from the supplier (and brand approval where required by Amazon).",
  },
  {
    question: "Will you handle sourcing and supplier negotiation?",
    answer: "Not part of the core plan. Amazon wholesale sourcing and supplier negotiation is an add-on that sellers can opt into if they'd like assistance in finding and securing new products.",
  },
  {
    question: "Do you offer reinstatement support if my account is suspended?",
    answer: "Full account reinstatement is a separate service. This plan includes up to one appeal per month to deal with any violations prior to them becoming a problem.",
  },
  {
    question: "What is Amazon brand ungating?",
    answer: "Ungating is getting Amazon's approval to sell in restricted brands or categories. It generally requires you to provide invoices and other documentation to prove that your products are genuine and properly sourced.",
  },
  {
    question: "How long does it take Amazon to ungate a brand or category?",
    answer: "Most requests are handled within 24-72 hours, though timing ultimately depends on Amazon's review.",
  },
  {
    question: "What is the FBA Wholesale Account Management price?",
    answer: "Pricing is based on the size of your catalog and the level of support you require. Book in for a free consultation and we'll recommend the right plan for your business.",
  },
  {
    question: "How do you keep my stock from either running out or piling up?",
    answer: "We use sales data and AI-assisted forecasting to time restocks, monitor your IPI score, and act early on slow movers or stranded stock.",
  },
  {
    question: "Do you manage FBA shipments to the Amazon warehouses?",
    answer: "We'll assist with your replenishment planning and help put together your shipment plans; you or your logistics partner then handles the actual shipping.",
  },
  {
    question: "Do you deal with customer service or returns on the wholesale products?",
    answer: "With FBA Amazon manage most of the customer service and returns. We monitor return trends and feedback and step in if anything comes up that could impact your account health.",
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
            Have questions about our Amazon wholesale account management? You&apos;ll find clear answers below. If not, our team is happy to help.
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
