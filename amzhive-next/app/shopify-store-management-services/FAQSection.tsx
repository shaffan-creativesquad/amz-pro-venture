"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Shopify store management, and what does it include?",
    answer: "Shopify store management involves optimizing and maintaining an online store to boost visibility, traffic, and sales. It includes SEO and metadata optimization, broken link fixes, payment gateway setup, theme customization, app integrations, and performance tracking. Services are tailored to enhance user experience and ensure compliance while driving growth.",
  },
  {
    question: "How much do Shopify store management services cost?",
    answer: "Costs vary based on the scope of services, store size, and specific needs like ad campaigns or integrations. For detailed pricing, book a free consultation, and we'll provide customized quotes after a store audit.",
  },
  {
    question: "How to choose a Shopify store management agency?",
    answer: "Look for agencies with proven expertise in Shopify e-commerce, a track record of sales optimization, and comprehensive services like SEO, ads, and app integrations. Check client reviews, case studies, and ensure they offer tailored strategies. Book a consultation to assess if they fit your goals.",
  },
  {
    question: "What are the benefits of professional Shopify store management?",
    answer: "Professional management improves sales through SEO, targeted ads, and user journey optimization. It ensures compliance, smooth operations, and leverages advanced tools. Data-driven insights and ongoing maintenance keep your store competitive and scalable.",
  },
  {
    question: "How to improve sales with Shopify store management?",
    answer: "Sales improve through optimized SEO, targeted Google/Meta ads, and Buy With Prime integration to attract high-intent customers. Enhanced product pages, user journey improvements, and performance tracking drive conversions. Regular optimizations ensure sustained growth.",
  },
  {
    question: "How long does it take to see results from Shopify store management?",
    answer: "Results vary, but initial improvements in SEO, ads, and user experience can show within 4-8 weeks. Full impact, including higher sales and retention, typically emerges after 3-6 months of consistent optimization. Regular tracking ensures continuous growth.",
  },
  {
    question: "Why is a Shopify store audit important?",
    answer: "A store audit identifies gaps in SEO, user experience, and technical performance, providing a roadmap for optimization. It ensures your store is set up for maximum visibility, conversions, and compliance. We provide a free audit so you can better assess your needs.",
  },
  {
    question: "How does Buy With Prime integration benefit my Shopify store?",
    answer: "Buy With Prime taps into Amazon's Prime audience, offering fast shipping and trust signals that increase conversions. We seamlessly integrate it with your Shopify store, enhancing visibility and sales potential.",
  },
  {
    question: "What kind of businesses benefit most from Shopify store management?",
    answer: "Busy entrepreneurs, growing retailers, hands-off professionals, marketing leads, and experienced sellers transitioning to Shopify benefit most. Our services cater to startups and established businesses needing optimized, high-performing stores without in-house tech teams.",
  },
  {
    question: "How do you ensure my Shopify store stays compliant?",
    answer: "We set up secure payment gateways and automated tax calculations to meet regulatory requirements. Regular audits and broken link management maintain technical compliance, while SEO and ads align with platform guidelines.",
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
            Got questions about our Shopify Store Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
