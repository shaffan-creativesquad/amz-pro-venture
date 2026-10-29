"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "How does your reimbursement service work?",
    answer: "We take the complexity out of FBA reimbursements! Our process starts with a thorough audit of your FBA data (up to 18 months back). We then identify all eligible discrepancies, gather the necessary evidence, and file the claims directly with Amazon on your behalf. Finally, we meticulously manage each claim until funds are successfully returned to your account.",
  },
  {
    question: "What types of FBA issues qualify for reimbursement?",
    answer: "We’re experts at finding and recovering funds for a wide range of FBA errors. This includes, but isn’t limited to: lost or damaged inventory (inbound, in-warehouse, or during transfers), overcharged fees (like pick & pack, storage), incorrect returns processing, lost removal orders, unused shipping charges, and many other common (and uncommon) discrepancies. Our deep auditing process constantly discovers new opportunities.",
  },
  {
    question: "How far back can you audit my data?",
    answer: "We can audit your Amazon FBA data for up to 18 months to identify historical discrepancies. However, it’s crucial to note that Amazon has recently shortened its filing window for most fulfillment center-related issues to just 60 days. This makes our proactive monitoring and rapid claim filing even more vital to ensure you don’t miss out on eligible reimbursements.",
  },
  {
    question: "How long do reimbursements typically take to process?",
    answer: "While each case can vary depending on Amazon’s internal review times, most claims we file are typically resolved and reimbursed within 1 to 4 weeks after submission. We actively monitor and follow up on all claims to ensure the fastest possible resolution for you.",
  },
  {
    question: "Is my Amazon account safe when you access it?",
    answer: "Absolutely. Your account security is our top priority. We only request secure, limited \"child permissions\" through Amazon Seller Central, specifically tailored to the data we need for auditing and claim filing. This ensures we don’t have full access to your account, and all our actions are fully compliant with Amazon’s strict policies.",
  },
  {
    question: "Do I need to be involved after setup, or do you handle everything?",
    answer: "Very little involvement is needed from your side! Once you grant us secure access and provide any initial required documents (like invoices for lost shipments), we handle the entire reimbursement process end-to-end. We’ll notify you of major updates, but you won’t need to file anything yourself. We take care of all the complex paperwork and follow up with Amazon.",
  },
  {
    question: "What happens if Amazon previously denied a claim that I filed?",
    answer: "Don’t worry! We specialize in identifying and resolving previously denied or overlooked claims. We will review any past denied claims you’ve shared. If it was filed incorrectly, we can often refile it with the correct documentation and approach. Our expertise frequently leads to the approval of claims that were initially rejected.",
  },
  {
    question: "What is the initial $99 audit fee for?",
    answer: "The $99 one-time fee provides you with a comprehensive, in-depth audit of your entire 18-month FBA account history. This includes detailed reporting of all potential discrepancies we find, regardless of whether you choose to proceed with claims filing. It’s an investment in understanding your account’s recovery potential upfront. We only proceed with filing claims if we find valid opportunities worth pursuing.",
  },
  {
    question: "How do I track the progress of my reimbursement claims?",
    answer: "Once you’re onboarded, you’ll gain access to your personalized claims dashboard. This intuitive portal allows you to track the real-time status of every claim we’ve filed on your behalf, giving you full transparency and peace of mind.",
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
            Got questions about our Amazon reimbursement claims service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
