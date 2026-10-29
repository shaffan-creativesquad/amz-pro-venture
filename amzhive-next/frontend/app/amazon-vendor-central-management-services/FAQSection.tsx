"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "What exactly is Amazon Vendor Central, and how is it different from Seller Central?",
    answer: "Amazon Vendor Central is an invite-only platform where you sell your products directly to Amazon (1P or \"first-party\" selling). Amazon then resells them to customers. This differs significantly from Seller Central (3P or \"third-party\" selling), where you sell directly to customers via the Amazon marketplace. Vendor Central offers larger, bulk Purchase Orders (POs) and access to exclusive marketing programs, but Amazon retains more control over pricing and customer service and often presents unique operational and financial challenges like chargebacks and longer payment terms.",
  },
  {
    question: "My main challenge is excessive chargebacks. How do you specifically help with that?",
    answer: "Chargebacks are a major pain point for many vendors. Our service includes dedicated Chargeback Dispute Management. We don't just dispute them; we conduct root cause analysis to understand why they are occurring (e.g., packaging issues, shipping compliance errors, data discrepancies). We then develop Standard Operating Procedures (SOPs) to prevent future chargebacks, protect your margins, and recover lost revenue.",
  },
  {
    question: "How do you handle inventory forecasting and prevent stockouts or overstocking?",
    answer: "We use a data-driven approach to Inventory Forecasting. Our experts analyze your Amazon Retail Analytics (ARA) data, sales trends, promotional calendars, and Amazon's forecasting models to provide precise recommendations for your Purchase Orders.",
  },
  {
    question: "Can you help us negotiate our annual vendor agreement with Amazon?",
    answer: "Yes, absolutely. Our service includes annual vendor negotiation support. We help you prepare for these critical discussions by leveraging your sales data, profit insights, and our deep understanding of Amazon's negotiation tactics. Our goal is to secure the most favorable terms possible for your co-op fees, damage allowances, and other profitability drivers.",
  },
  {
    question: "What kind of results can I expect from your Vendor Central management services?",
    answer: "While results can vary based on your specific products and market, our goal is to drive concrete improvements in profitability, operational efficiency, and overall growth. Our \"Success By Numbers\" section showcases typical outcomes like increased revenue, better PPC performance, and enhanced account health. We focus on protecting your margins, reducing costs (like chargebacks), and optimizing your strategy to maximize your wholesale potential with Amazon.",
  },
  {
    question: "What is the typical onboarding process like when I start working with SPCTEK?",
    answer: "Our onboarding process is designed to be smooth and efficient. After an initial strategy call to understand your specific needs, we'll request child access to your Vendor Central account. From there, our team conducts a comprehensive audit to identify immediate opportunities and pain points. We then develop a tailored action plan and begin implementing our strategies, keeping you informed every step of the way with transparent communication.",
  },
  {
    question: "How do you handle new product launches or existing catalog expansion within Vendor Central?",
    answer: "We provide comprehensive catalog and content optimization services, which include ASIN setup and launch support. For new products, we ensure proper setup, compliance, and optimization for discoverability. For existing catalogs, we focus on fixing listing errors, removing suppressions, and enhancing A+ Content and Brand Stories to improve conversion rates and overall product performance within the Amazon ecosystem.",
  },
  {
    question: "How does SPCTEK ensure our Vendor Central account remains compliant and avoids suspensions?",
    answer: "Compliance is paramount. We offer 24/7 Account Health Monitoring to detect any potential flags or performance notifications early. In case of issues, we promptly draft and submit effective Plans of Action (POAs) and provide guidance on necessary product safety and documentation support. Our proactive approach aims to prevent minor issues from escalating into costly suspensions or widespread listing suppressions.",
  },
  {
    question: "Will I still have access to and control over my Vendor Central account?",
    answer: "Yes, you will always retain full access and control over your Vendor Central account. We operate with child access, which allows us to manage operations on your behalf without requiring your primary login credentials. This ensures transparency and allows you to monitor our progress and insights whenever you wish.",
  },
  {
    question: "Does your service include advertising management for Vendor Central (AMS/AAP)?",
    answer: "While this landing page focuses on the core Vendor Central operational and strategic management, optimizing advertising within Vendor Central (Amazon Marketing Services – AMS, now part of Amazon Ads) is a critical component of growth. We can discuss and integrate advertising strategy and management as part of a holistic solution, often building on the insights gained from our core Vendor Central management services.",
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
            Got questions about our AI-Powered Vendor Central Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
