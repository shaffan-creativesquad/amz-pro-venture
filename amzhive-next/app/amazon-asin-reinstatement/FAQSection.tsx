"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does Amazon ASIN reinstatement typically take?",
    answer: "The timeframe for Amazon ASIN reinstatement can vary significantly. Some straightforward cases might resolve in a few days, while others can take several weeks, depending on the complexity of the violation, Amazon’s specific requirements, and their current review queue. Our team works with urgency to submit effective appeals quickly and minimize your listing’s downtime, because we understand every minute offline impacts your sales and rank.",
  },
  {
    question: "Can you help me reinstate my listing if I don’t have all the required documents?",
    answer: "Unfortunately, Amazon ASIN reinstatement relies heavily on complete and verifiable documentation. While our Amazon listing experts will provide precise guidance on exactly what Amazon requires (such as invoices, COAs, LOAs, or MSDS), we can only proceed if proper and genuine documentation is available from your side. We’ll advise you during the initial assessment if your documentation is insufficient, as Amazon does not accept incomplete or fabricated paperwork.",
  },
  {
    question: "Can you guarantee Amazon ASIN reinstatement?",
    answer: "No service, including ours, can offer a 100% guarantee for ASIN reinstatement, as the final approval rests solely with Amazon. However, as a dedicated Amazon ASIN reinstatement service provider, we significantly increase your chances of success. Our proven process, deep understanding of Amazon’s policies, custom-crafted Plans of Action (POAs), and strategic follow-ups are designed to maximize your listing’s opportunity for reinstatement.",
  },
  {
    question: "Can you handle multiple Amazon ASIN suspensions at once?",
    answer: "Yes, we can certainly handle cases involving multiple Amazon ASIN suspended listings. While each ASIN is treated with individual focus to address its specific suspension reason, our team can manage these cases concurrently to streamline the resolution process for your entire catalog. We’ll discuss the most efficient strategy for your situation during your initial assessment.",
  },
  {
    question: "What are the most common causes for an Amazon ASIN suspension?",
    answer: "An Amazon ASIN suspension can be triggered by various issues. Common causes include product authenticity complaints, \"used sold as new\" claims, intellectual property infringement (trademark or copyright), product safety concerns, restricted product violations, and detail page policy violations (e.g., incorrect titles or images). Our Amazon listing experts are skilled at diagnosing the precise reason your ASIN was suspended.",
  },
  {
    question: "What is the role of a Plan of Action (POA) in ASIN reinstatement?",
    answer: "A Plan of Action (POA) is a critical document required by Amazon for ASIN reinstatement. It’s your opportunity to explain to Amazon the root cause of the suspension, detail the immediate corrective actions you’ve taken to resolve the issue, and outline the preventative measures you’ve implemented to ensure the violation won’t recur. Our service specializes in drafting custom, compliant POAs that effectively communicate your commitment to policy adherence.",
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
            Got questions about our Amazon ASIN Reinstatement service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
