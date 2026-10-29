"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can you help if my appeal was already rejected by Amazon?",
    answer: "Yes, absolutely! We specialize in navigating complex cases and are particularly effective at resolving appeals that Amazon has previously rejected. We’ll conduct a thorough review, identify why your previous appeal failed, and craft a stronger, clearer, and more compliant strategy for resubmission.",
  },
  {
    question: "Is success guaranteed when using your service?",
    answer: "While we cannot provide an outright guarantee (as Amazon always makes the final decision on all cases), our proven approach, deep understanding of Amazon’s policies, and strategic plan of action significantly increase your chances of a successful resolution. We are committed to putting your account in the best possible position for reinstatement or violation removal.",
  },
  {
    question: "What if I have multiple ASINs flagged for the same or different violations?",
    answer: "We can definitely help! We’re equipped to handle multiple flagged ASINs. Depending on the type and volume of violations, we can either bundle them into a single comprehensive project or create a phased plan to address each issue strategically, ensuring all your at-risk listings are covered.",
  },
  {
    question: "Can I use this service even if my account isn't fully suspended yet?",
    answer: "Yes, and this is actually where we excel the most! Our service is designed to be proactive. We specialize in identifying and resolving policy violations early, before they escalate into full account suspensions or widespread ASIN deactivations. Getting our help when you first receive a performance notification can prevent much larger problems down the line.",
  },
  {
    question: "What types of Amazon policy violations do you handle?",
    answer: "We handle a wide spectrum of Amazon policy violations. This includes common issues like product authenticity complaints, used sold as new claims, intellectual property infringement, product condition/safety complaints, detail page policy violations, restricted product flags, and documentation requests. If it’s a policy violation that puts your account at risk, we’ve likely seen it and can help resolve it.",
  },
  {
    question: "How do you determine the root cause of a violation?",
    answer: "Determining the root cause is critical for a successful appeal. We conduct a thorough audit of Amazon’s notices, your account health dashboard, relevant ASIN data, and your communication logs. We dig deep into your processes and potential external factors to uncover the exact reasons Amazon flagged your account, which allows us to craft an effective Plan of Action.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
      <style>{`
        .svc-btn {
          position: relative;
          overflow: hidden;
          display: inline-block;
          background-color: #1e293b;
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
          background-color: #E91C59;
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

      <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14">

        {/* Left */}
        <div className="lg:w-[480px] flex-shrink-0">
          <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
            Frequently Asked <span style={{ color: "#E91C59" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Got questions about our Policy Violation Resolution service? We have the answers. If you don&apos;t find what you&apos;re looking for, feel free to reach out directly.
          </p>
          <a href="/contact-us" className="svc-btn">
            <span className="svc-btn-inner">
              <span className="svc-btn-top">Talk to an Expert</span>
              <span className="svc-btn-bottom">Talk to an Expert</span>
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
