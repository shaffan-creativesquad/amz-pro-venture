"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need this service if my account is healthy right now?",
    answer: "Yes. Even a healthy account can change quite rapidly as Amazon continually updates its policies and enforcement. Most suspensions can be prevented with early detection and our 24/7 monitoring is designed to pick up the early warning signs before they escalate into major issues. That way your account remains in good standing and your business can keep running.",
  },
  {
    question: "What if I've already received a violation notice or my account is at risk?",
    answer: "That\'s the right time to get started. We\'ll look at the notice, establish the cause and respond promptly (with a Plan of Action if required) to safeguard your account.",
  },
  {
    question: "Is this a one-time fix or an ongoing service?",
    answer: "It\'s an ongoing monthly service. Your account health changes daily, so continuous monitoring is what keeps it protected.",
  },
  {
    question: "Can you guarantee my account won\'t be suspended?",
    answer: "No one can guarantee that, since Amazon makes the final decisions. We greatly reduce your risk by spotting issues early and acting fast to prevent Amazon suspension.",
  },
  {
    question: "Can this service be combined with your other Amazon services?",
    answer: "Yes. It works alongside our Reinstatement, PPC, and Listing Optimization services, giving you one team for complete account support.",
  },
  {
    question: "What information or access do you need from me?",
    answer: "Child access to Seller Central with performance and case permissions, any recent notices or alerts, and compliance documents if they\'re needed.",
  },
  {
    question: "How quickly do you respond to new violations or alerts?",
    answer: "We\'re monitoring 24/7 and acting as soon as a new flag comes in so we deal with issues before they\'ve had a chance to get out of hand.",
  },
  {
    question: "How do you handle A-to-Z claims or negative feedback?",
    answer: "We appeal eligible A-to-Z claims, request removal of the feedback where permitted under Amazon policy and monitor the trends that impact your Amazon seller performance metrics.",
  },
  {
    question: "What kind of reports will I get?",
    answer: "You\'ll get weekly Account Health reports which will include performance snapshots, any changes to your Amazon Account Health Rating and clear next steps.",
  },
  {
    question: "What makes AMZ ProVenture\'s Account Health service different?",
    answer: "We combine 24/7 monitoring, root cause fixes, and long-term compliance planning in one service, so you\'re protected today and prepared for what\'s ahead.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }} className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0 text-center lg:text-left">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 45px)", color: "#000000" }}>
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Have questions about our Amazon account health monitoring service? You'll find the answers here. If not, feel free to reach out directly.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Lets Talk</span>
                <span className="svc-btn-bottom">Lets Talk</span>
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
