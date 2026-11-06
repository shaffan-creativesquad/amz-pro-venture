"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "How does your reimbursement service work?",
    answer: "We make FBA reimbursements simple. First, we audit your FBA data, going back up to 18 months. Then we find every eligible discrepancy, gather the evidence, and file claims with Amazon. We manage each claim until the money is back in your account.",
  },
  {
    question: "Which FBA issues qualify for reimbursement?",
    answer: "Common ones include lost or damaged inventory, inbound shipment discrepancies, wrongly disposed stock, lost removal orders, customer returns that never came back, and fee overcharges from incorrect dimensions or weights.",
  },
  {
    question: "How far back can you review my account?",
    answer: "We can review up to 18 months of data. However, Amazon now allows only 60 days for most fulfillment center claims, so starting early helps you recover as much as possible.",
  },
  {
    question: "How long does it take to get reimbursed?",
    answer: "Our audit takes 3–5 business days after we get access. After we file claims, Amazon's response time varies, but many reimbursements arrive within a few weeks.",
  },
  {
    question: "Is my Amazon account safe with you?",
    answer: "Yes. We only work through secure child user permissions, never your main login, and every claim follows Amazon's policies to protect your account health.",
  },
  {
    question: "Will I need to stay involved after setup?",
    answer: "Very little. Once we have access, we handle the audit, filing, and follow-ups. We'll only reach out if we need a document from you, like an invoice.",
  },
  {
    question: "What if Amazon already denied a claim I filed?",
    answer: "We can often help. We review the denied claim, identify what was missing, and reopen it with stronger evidence when eligible.",
  },
  {
    question: "What does the $99 audit fee cover?",
    answer: "It covers a full review of your account history, a detailed report of what we find, and filing for all valid claims. We only move forward if we find claims worth pursuing.",
  },
  {
    question: "How can I check on my claims?",
    answer: "You'll have your own claims dashboard showing submitted claims, status updates, and recovered amounts in real time. Your specialist is also available if you have questions.",
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
            Have questions about our FBA reimbursement services? You&apos;ll find the answers here. If not, feel free to reach out directly.
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
