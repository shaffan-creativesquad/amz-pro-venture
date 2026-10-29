"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I know if my product qualifies for the Creator Connections?",
    answer: "We'll verify your product's eligibility during the onboarding process. Generally, products listed under an active Amazon seller account in good standing, with Brand Registry enrollment, and sufficient inventory are good candidates. Certain restricted product categories (e.g., highly regulated items, adult products) may be ineligible.",
  },
  {
    question: "What is Brand Registry, and why is it important for influencer marketing?",
    answer: "Amazon Brand Registry is a program that helps brand owners protect their intellectual property and brand identity on Amazon. It is required for participating in Amazon's Creator Connections program, which is our primary method for seamless influencer partnerships. Brand Registry also gives you access to enhanced brand content (A+ Content), Storefronts, and crucial analytics that benefit influencer campaigns.",
  },
  {
    question: "Are influencer campaigns guaranteed to drive sales?",
    answer: "While influencer content significantly boosts visibility, trust, and targeted traffic, guaranteed sales are not something any marketing strategy can promise. Conversions ultimately depend on several factors, including your product's market fit, competitiveness, customer reviews, pricing, and overall listing quality. Our strategic targeting and optimization efforts are designed to maximize your ROI and increase the likelihood of sales.",
  },
  {
    question: "What kind of return on investment (ROI) can I expect from influencer marketing?",
    answer: "ROI can vary widely based on your niche, product, influencer tier, and campaign goals. However, the benefits extend beyond direct sales to include increased brand awareness, improved organic rankings, valuable social proof (user-generated content), and richer customer insights. We provide clear reporting on campaign performance to help you track these metrics and understand your value.",
  },
  {
    question: "How does AMZ Hive select the right influencers for my product?",
    answer: "Our process involves a rigorous selection. We consider factors such as the influencer's niche relevance, audience demographics, engagement rates, content quality, authenticity, and past performance with similar products. We leverage our vetted network and advanced tools to identify creators whose audience is genuinely interested in what you sell, ensuring maximum impact for your campaign.",
  },
  {
    question: "Is Amazon PPC included in this service?",
    answer: "No, our service for the Amazon Influencer Marketing is separate from Amazon PPC management. However, we highly recommend running Amazon PPC campaigns concurrently with your influencer promotions. The external traffic and boosted sales from influencers can significantly enhance your PPC performance and improve overall product visibility and ranking on Amazon.",
  },
  {
    question: "Can influencer campaigns support new product launches?",
    answer: "Absolutely! Influencer campaigns are a powerful tool for generating early buzz, building initial trust, and driving momentum around new product listings. They can help gather early reviews, create social proof, and signal to Amazon's algorithm that your new product is relevant and in demand, giving it a strong start.",
  },
  {
    question: "What is \"Creator Connections,\" and how does AMZ Hive use it?",
    answer: "Creator Connections is Amazon's marketplace service that streamlines the process for sellers to find and collaborate with Amazon-approved influencers. AMZ Hive leverages this platform to efficiently manage influencer outreach, secure collaborations, track product samples, and monitor campaign performance directly within the Amazon ecosystem, ensuring a smooth and compliant process for your brand.",
  },
  {
    question: "Do I need to provide free product samples to influencers?",
    answer: "Yes, providing free product samples is a standard and essential component of influencer marketing. Influencers need to experience your product firsthand to create authentic and compelling content. We will coordinate the sample delivery process for you.",
  },
  {
    question: "What if an influencer doesn't deliver content, or performance is low?",
    answer: "While we vet our influencer network and aim for high performance, outcomes can vary. Our ongoing monthly campaign management includes monitoring influencer communication and content delivery. We strive to work with reliable influencers and optimize strategies as needed to improve results. Performance is dependent on multiple factors, and we provide transparent reporting on all campaign activities.",
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
            Got questions about our Amazon Influencer Marketing service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
