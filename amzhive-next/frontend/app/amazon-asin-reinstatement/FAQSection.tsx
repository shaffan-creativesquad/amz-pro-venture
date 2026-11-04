"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "How long does Amazon ASIN reinstatement usually take?",
    answer: "It varies from case to case. A straightforward issue can be resolved in a few days, whereas others can take a few weeks depending on the complexity of the violation, what Amazon asks for, and how busy their review team is. We'll move quickly to submit a strong appeal and get you back online as soon as possible, since every day offline hurts your sales and rankings.",
  },
  {
    question: "Can you help reinstate my listing if I don't have all the required documents?",
    answer: "We can still review your case and tell you exactly what's missing. In many situations, there are other ways to show Amazon what they need, such as different supporting documents or a supplier letter. We'll guide you on what to get, but all documents must be genuine and come from you.",
  },
  {
    question: "Can you guarantee Amazon ASIN reinstatement?",
    answer: "No one can vouch for it, as Amazon always makes the final decision. What we can promise is a thorough review, a properly constructed appeal, and a free re-appeal if the first appeal is rejected and the case is still valid. If we don't believe your case has any real merit, we'll let you know before you submit an appeal.",
  },
  {
    question: "Can you deal with multiple ASIN suspensions at the same time?",
    answer: "Yes. We sort the suspended ASINs by issue, tackle the most urgent ones first, and prepare the right appeal for each. That way, nothing gets missed, and your listings come back as quickly as possible.",
  },
  {
    question: "What are the most common causes of an ASIN suspension?",
    answer: "The most common causes are authenticity or counterfeit claims, IP complaints, safety reports, condition complaints, listing policy issues, and unapproved health claims. A suppressed listing on Amazon can also come from smaller problems, like missing details or images that don't meet Amazon's rules.",
  },
  {
    question: "What role does a Plan of Action (POA) play in ASIN reinstatement?",
    answer: "A Plan of Action (POA) tells Amazon what went wrong, how you've fixed it, and what you'll do to avoid the same problem in the future. It helps Amazon understand your response and plays an important role in getting your ASIN reinstated.",
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
            Have questions about our Amazon ASIN reinstatement service? Here are the ones sellers ask most. If yours isn&apos;t here, reach out anytime.
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
