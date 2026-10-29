"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need this service if my account is healthy now?",
    answer: "Absolutely, yes. Proactive account health management is your best defense against future issues. While your account may be healthy today, Amazon's policies, algorithms, and enforcement can change rapidly. Most suspensions are preventable with early detection and swift action. Our 24/7 monitoring system and expert team allow us to catch subtle issues, address minor warnings, and implement preventive measures before they escalate into costly problems, giving you a significant edge over reactive chaos and ensuring uninterrupted business operations.",
  },
  {
    question: "What if I have already received a violation notice or my account is at risk?",
    answer: "If you've already received a violation notice or your account health dashboard shows a \"risk of deactivation,\" it's critical to act immediately. We'll prioritize an in-depth investigation into the specific violation, conduct a thorough root cause analysis, and advise on the best course of action. If a Plan of Action (POA) or specific documentation is required by Amazon, our experts will guide you through the process and help draft a clear, Amazon-compliant POA designed for effective resolution.",
  },
  {
    question: "Is this a one-time fix or an ongoing service?",
    answer: "Amazon Account Health Monitoring and Optimization is an ongoing, monthly subscription-based service. Account health isn't a one-time fix; it requires continuous vigilance. Amazon's metrics and policies are dynamic, and customer actions (A-Z claims, feedback) can impact your standing at any moment. Our service provides 24/7 proactive monitoring, real-time alert detection, weekly reporting, and continuous strategic adjustments to ensure your account remains compliant, protected, and optimized for long-term growth without interruptions.",
  },
  {
    question: "Do you guarantee that my account won't be suspended?",
    answer: "While no service can guarantee 100% immunity from suspension (as ultimate control rests with Amazon and factors like product quality or seller compliance with all Amazon's terms are paramount), we can confidently say we significantly lower your risk of suspension. Our proactive 24/7 monitoring, rapid response to violations, expert root cause analysis, and strategic Plan of Action drafting are designed to identify and address threats early, drastically reducing the likelihood of deactivation and protecting your business lifeline.",
  },
  {
    question: "Can this service be combined with your other Amazon services?",
    answer: "Absolutely! Our Account Health Monitoring & Optimization service is designed to be highly complementary and even more effective when integrated with our other Amazon services. For instance — Listing Optimization ensures your product content is compliant and high-converting, reducing potential policy flags. PPC Management prevents ad disapprovals and ensures your ad spend drives traffic to healthy, compliant listings. Account Reinstatement: if an issue does lead to deactivation, our reinstatement team can act swiftly to get you back online, and then our monitoring service will help prevent future issues. This integrated approach provides comprehensive support for your entire Amazon ecosystem.",
  },
  {
    question: "What type of information/access do you need from me?",
    answer: "To deliver the best results, we require Child Access to your Seller Central account with specific permissions for performance and case logs. If Amazon requests documentation for a specific violation, such as invoices or certifications, you will need to provide these. Don't worry, our team will clearly guide you through exactly what's needed and ensure your information remains secure. We do not create compliance documents like invoices or certifications ourselves.",
  },
  {
    question: "How quickly do you respond to new violations or alerts?",
    answer: "Our system is designed for real-time flag detection and immediate action. As soon as a new warning, notice, or critical metric deviation appears on your Account Health Dashboard, our team is alerted. This allows us to begin interpreting the notice and initiating a proactive response, including drafting a Plan of Action if applicable, typically within hours of detection, ensuring swift resolution before issues escalate.",
  },
  {
    question: "How do you handle A-Z Claims or negative customer feedback?",
    answer: "As part of our service, we actively monitor and manage Amazon-specific scenarios that impact account health. This includes tracking your Order Defect Rate (ODR) for A-Z claims and negative feedback. We will appeal eligible A-Z claims on your behalf (as per Amazon's guidelines) and submit feedback removal requests when they fall within Amazon's policy criteria, helping to maintain your key performance metrics and protect your seller rating.",
  },
  {
    question: "What kind of reports will I receive?",
    answer: "Transparency is key. You'll receive weekly Account Health Reports that provide a detailed snapshot of your current metrics, key risk areas, and a summary of all active policy cases. These reports include performance snapshots, actionable next steps, and performance trend summaries for critical metrics like ODR, LSR, and VTR, keeping you fully informed about your account's status and ongoing improvements.",
  },
  {
    question: "What makes SPCTEK's Account Health service stand out from others?",
    answer: "Our service is distinguished by its Compliance-Centric, Proactive by Design, and Strategic Growth Partner approach. We speak Amazon's language, leverage 24/7 real-time monitoring to catch issues before they escalate, and go beyond surface fixes with root cause analysis. We aim to keep you ahead of Amazon's enforcement curve, allowing you to focus on scaling your business while we manage the compliance and backend complexities, ensuring your account stays healthy, active, and profitable.",
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
            Got questions about our Proactive Account Health Monitoring service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
