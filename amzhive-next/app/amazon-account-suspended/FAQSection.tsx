"use client";

import { useState } from "react";

const faqs = [
  {
    question: "My Amazon seller account got suspended; can it be reinstated?",
    answer: "Yes, in most cases, a suspended Amazon seller account can be reinstated. A suspension is a temporary deactivation, not a permanent ban. Amazon gives you the opportunity to appeal the decision by submitting a Plan of Action (POA) that shows you have identified the root cause of the issue and have taken steps to fix it. Our service is built specifically to guide you through this process successfully.",
  },
  {
    question: "How do I write a Plan of Action (POA) to reinstate my Amazon seller account?",
    answer: "A successful Plan of Action (POA) needs three key components: a clear explanation of the root cause that led to the suspension, a detailed list of the immediate corrective actions you have taken to fix the problem, and a robust plan of preventative measures you will implement to ensure it never happens again. It must be professional, factual, and strictly follow Amazon’s guidelines, without making excuses or blaming others. This is where our expertise is invaluable; we craft a tailored POA for your specific case.",
  },
  {
    question: "What if my Amazon reinstatement appeal is denied?",
    answer: "If your initial appeal is denied, don’t panic. This is a common occurrence, especially for sellers who submit generic or templated POAs. Amazon’s denial notice often provides clues about why the appeal was rejected. We specialize in reworking and escalating denied appeals by revising the POA based on Amazon’s feedback, adding new evidence, and resubmitting a stronger case to the right team for reconsideration.",
  },
  {
    question: "If my Amazon seller account is suspended, what happens to the money in my account?",
    answer: "When your account is suspended, Amazon places all your funds on hold. The money will remain in your account but will be inaccessible. In many cases, once the account is successfully reinstated, the funds become available for disbursement again. However, for some severe violations, Amazon may hold the funds for 90 days or longer to cover potential refunds or claims.",
  },
  {
    question: "Can you reinstate my account, which got suspended due to a linked account issue?",
    answer: "Yes, we can help you navigate this issue by identifying the root cause and guiding you on the proper steps to resolve issues related to the linked account suspension. ",
  },
  {
    question: "How long will it take to get my Amazon seller account back?",
    answer: "The timeframe for reinstatement varies greatly depending on the type of suspension, the case’s complexity, and Amazon’s review volume. Amazon doesn’t provide a specific timeframe for account reinstatements; it can range anywhere from hours (for minor issues) to weeks (for more complex cases). We work with urgency to minimize your downtime. ",
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
            Got questions about our Amazon Account Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
