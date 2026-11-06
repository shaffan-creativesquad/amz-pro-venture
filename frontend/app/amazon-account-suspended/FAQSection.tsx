"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "My Amazon seller account got suspended. Can it be reinstated?",
    answer: "In most cases, yes. A suspension is a deactivation, not a permanent ban, and Amazon gives you the chance to appeal. To do that, you'll need to submit an Amazon plan of action that shows you've found the root cause and taken steps to fix it. Our service guides you through every part of that process.",
  },
  {
    question: "How do I write a Plan of Action (POA) to reinstate my Amazon seller account?",
    answer: "A strong POA covers three things: the root cause of the problem, the corrective actions you've already taken, and the preventive steps that stop it from happening again. It needs to be specific, honest, and easy for Amazon's team to follow. Generic templates usually get rejected, which is why we write every POA around your exact case.",
  },
  {
    question: "What if my Amazon reinstatement appeal is denied?",
    answer: "A denial isn't always the end. We review Amazon's response, identify what's missing, strengthen your Amazon suspension appeal, and resubmit. If needed, we escalate the case through the right channels so it gets a proper second look.",
  },
  {
    question: "If my Amazon seller account is suspended, what happens to the money in my account?",
    answer: "Amazon will generally hold your funds during the suspension period. Once your account is reinstated, payouts will generally resume as normal. If Amazon doesn't reinstate your account, then it may hold the funds for a period to cover any customer claims before releasing the balance, so it's worth acting quickly.",
  },
  {
    question: "Can you reinstate my account if it was suspended for a linked account issue?",
    answer: "Yes, we do handle linked and related account suspensions. We'll look at why Amazon has linked the accounts, collect the appropriate evidence, and then clearly set out the position in your appeal. It's a case-by-case basis, so we'll look at your particular situation first and be upfront with you about what your options are.",
  },
  {
    question: "How long will it take to get my Amazon seller account back?",
    answer: "It varies depending on the type of suspension and how quickly Amazon responds. Some cases are sorted out in a matter of days; others (particularly Section 3 and IP cases) can take a bit longer. We get to work straight away and keep pushing Amazon on it to avoid any unnecessary delays.",
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
            Got questions about Amazon account reinstatement? Here are the answers sellers ask us most. Still unsure? Reach out, and we&apos;ll talk it through.
          </p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Let&apos;s Talk</span>
                <span className="svc-btn-bottom">Let&apos;s Talk</span>
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
