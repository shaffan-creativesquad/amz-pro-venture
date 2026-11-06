"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Can you help if Amazon already rejected my appeal?",
    answer: "Yes. Rejected appeals are a significant part of our workload. We go through your case in detail, work out why the previous appeal was unsuccessful, and then construct a much stronger, clearer, and more compliant response for resubmission.",
  },
  {
    question: "Is success guaranteed when using your service?",
    answer: "No agency can guarantee any results, as the final decision always rests with Amazon. All we can promise is a full review, a properly constructed Plan of Action, and consistent follow-up. If we don't believe your case has any real prospect, we will be absolutely up front with you prior to you committing.",
  },
  {
    question: "What if I have multiple ASINs flagged for the same or different violations?",
    answer: "We can deal with them together. We'll sort the flagged ASINs by type of violation, deal with the most pressing ones first, and have the appropriate response ready for each so nothing is missed and your account health gets back on track as quickly as possible.",
  },
  {
    question: "Can I use this service even if my account isn't fully suspended yet?",
    answer: "Yes, and that's actually the best time to get in touch. It's generally quicker and a lot less stressful to resolve an Amazon account health violation whilst it's still just a warning than it is if it's escalated to a full suspension.",
  },
  {
    question: "What types of Amazon policy violations do you handle?",
    answer: "We help with different types of Amazon policy issues, including trademark and intellectual property complaints, product authenticity claims, listing problems, restricted products, and safety warnings. Whether you're dealing with an IP complaint or a general policy warning, we can help you understand the issue and work on a response.",
  },
  {
    question: "How do you find out what caused a violation?",
    answer: "First, we look at the notice Amazon sent you. Then we check your product listing, account history, customer feedback, supplier documents, and any previous cases. This helps us understand where things went wrong so we can help you prepare a clear Plan of Action that addresses Amazon's concerns.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <style>{`
        .svc-btn {
          position: relative;
          overflow: hidden;
          display: inline-block;
          background-color: #000000;
          color: #ffffff;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 12px 28px;
          font-size: 13px;
          border-radius: 6px;
          text-decoration: none;
        }
        .svc-btn::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background-color: #ff9900;
          transition: height 0.35s ease;
          z-index: 0;
        }
        .svc-btn:hover::before { height: 100%; }
        .svc-btn-inner {
          position: relative;
          z-index: 1;
          display: block;
          overflow: hidden;
          height: 1.2em;
        }
        .svc-btn-top { display: block; transition: transform 0.35s ease; }
        .svc-btn:hover .svc-btn-top { transform: translateY(-100%); }
        .svc-btn-bottom {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          transition: transform 0.35s ease;
        }
        .svc-btn:hover .svc-btn-bottom { transform: translateY(-100%); }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0 text-center lg:text-left">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 45px)", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Have questions about our Amazon policy violation resolution service? Here are the answers sellers ask about most. If yours isn&apos;t here, reach out.
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Talk to an Expert</span>
                <span className="svc-btn-bottom">Talk to an Expert</span>
              </span>
            </a>
            </div>
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
