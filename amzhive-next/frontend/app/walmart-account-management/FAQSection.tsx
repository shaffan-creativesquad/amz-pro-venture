"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "What is Walmart Marketplace Account Management, and do I really need it?",
    answer: "Walmart Marketplace Account Management is a comprehensive service where we handle all the day-to-day operations of your seller account. We manage everything from optimizing your listings and inventory to ensuring policy compliance and resolving issues. You need this service to save time, reduce stress, and ensure your account is positioned for long-term growth and profitability without risking costly policy violations.",
  },
  {
    question: "How do your services help me increase sales?",
    answer: "We focus on a strategic, growth-oriented framework. This starts with optimizing your listings for Walmart SEO to increase visibility. We then use promotions, pricing strategies, and ongoing optimization to boost conversion rates and sales. Our work is driven by data to ensure every action contributes to your bottom line.",
  },
  {
    question: "What kind of results can I expect to see, and how long does it take?",
    answer: "While results vary, our clients typically see a significant improvement in account health, visibility, and sales. We measure success through clear KPIs and provide a detailed weekly report. Our three-phase framework is designed to show results in a structured way: a clean, stable store in Phase 1, strategic growth in Phase 2, and long-term expansion in Phase 3.",
  },
  {
    question: "What's included in your monthly management plan?",
    answer: "Our plan is a full-service solution. It includes a detailed account audit, product listing optimization, catalog and inventory management, policy compliance, brand protection, and support for product launches. We also include one listing reinstatement per month and weekly performance reports to keep you informed.",
  },
  {
    question: "Do you manage Walmart PPC ads?",
    answer: "Walmart PPC Management is offered as an optional add-on service. Our core plan focuses on organic growth and operational excellence. If you want to use targeted ads to drive additional conversions, our team can set up and manage your campaigns for a powerful, full-funnel approach.",
  },
  {
    question: "How do you handle policy violations or account issues?",
    answer: "We proactively monitor your account for any alerts, ensuring you stay in full compliance to avoid issues. In the event a product is flagged or suppressed, our service includes one listing reinstatement per month to minimize downtime and get your products back online quickly.",
  },
  {
    question: "How do you handle communication and customer support?",
    answer: "We provide clear, weekly reports with performance insights and are always available for any immediate support needs. For a more collaborative approach, we offer bi-weekly strategy calls. Customer support assistance, where we handle direct customer messages and feedback, is available as an optional add-on service.",
  },
  {
    question: "How do you protect my data and ensure account security?",
    answer: "We prioritize your security by maintaining ad and catalog backups for your data. We ensure that our processes align with Walmart's security standards, giving you peace of mind that your account is in safe hands.",
  },
  {
    question: "How do I get started with AMZ Pro Venture?",
    answer: "Getting started is simple. Just provide us with your Walmart documentation, complete product information, and high-quality photography. We will then walk you through our onboarding process, starting with a comprehensive account audit to build your success roadmap.",
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
            Got questions about our Walmart Account Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
