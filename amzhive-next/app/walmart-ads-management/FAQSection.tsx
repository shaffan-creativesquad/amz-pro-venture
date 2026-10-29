"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Walmart Ads a one-time setup or ongoing?",
    answer: "Walmart Ads is an ongoing, dynamic service, not a one-time setup. The initial setup is just the beginning; continuous management, budget adjustments, and ongoing optimizations (like keyword refinements and bid strategies) are essential due to constant marketplace changes.",
  },
  {
    question: "Will I see results right away?",
    answer: "There's typically a 4–8 week learning phase where Walmart's algorithm gathers data. During this time, performance metrics may fluctuate, which is normal. Early results aren't indicative of long-term success. Our goal is to collect meaningful data, identify winning elements, and then leverage this for scaling and sustainable, profitable growth in subsequent optimization phases.",
  },
  {
    question: "What if my listings aren't optimized for advertising?",
    answer: "Listing quality directly impacts Walmart Ad performance. We'll assess your product listings (images, content, reviews) during onboarding or via the $1 Audit. If gaps are found that could hinder ad performance, we'll recommend pre-ads optimizations as separate services. This ensures your ad spend is directed towards listings ready to convert.",
  },
  {
    question: "What budgets do you recommend?",
    answer: "Budget depends on your brand goals, product category, and competition. We generally suggest starting with $300–$1000 per Product per month. This allows for sufficient data collection during the learning phase and initial optimizations. We'll help determine an optimal budget tailored to your specific objectives, which will be adjusted based on ongoing performance.",
  },
  {
    question: "What's not included in this service?",
    answer: "Our core ad management focuses on advertising. Product photography, listing creation, external influencer marketing, etc., are not included in the monthly service. However, we offer these as separate, optional add-ons. If we identify that these areas need improvement to boost your ad performance, we will recommend them.",
  },
  {
    question: "How do you measure success, and what kind of reports will I receive?",
    answer: "We focus on key performance indicators (KPIs) such as Return on Ad Spend (RoAS), total sales driven by ads, conversion rates, and overall profitability. You'll receive comprehensive weekly performance reports, along with monthly RoAS analysis and insights into your competitors' ad activities, ensuring full transparency on where your budget is going and the results it's generating.",
  },
  {
    question: "How often will we communicate, and what level of client involvement is required?",
    answer: "We believe in proactive communication. You'll receive weekly updates on campaign performance and optimizations. We also schedule regular strategic calls (e.g., bi-weekly or monthly, depending on your preference and campaign phase) to discuss performance trends, new opportunities, and adjust strategies as needed. Your involvement is minimal on a day-to-day basis, but we do require timely feedback and approval on strategic recommendations.",
  },
  {
    question: "Do you work with all product categories on Walmart?",
    answer: "Yes, our team has cross-niche experience, having successfully scaled products across a wide range of categories, from supplements and electronics to apparel and home goods. Our data-driven approach and deep understanding of Walmart's algorithm are adaptable to various product types and competitive landscapes.",
  },
  {
    question: "Can you guarantee specific sales or RoAS results?",
    answer: "While we strive to maximize your Return on Ad Spend and drive significant sales growth, it's important to understand that no reputable agency can guarantee specific financial outcomes due to factors outside of our control (e.g., market fluctuations, Walmart algorithm changes, competitor actions, product quality, listing content). However, we commit to relentless optimization, data-driven strategies, and transparent reporting to continuously improve your campaign performance and achieve your growth goals.",
  },
  {
    question: "What happens if my Walmart advertising account gets suspended or has policy violations?",
    answer: "Our ad strategies are 100% Walmart Terms-compliant. We stay updated with Walmart's ever-changing rules and ensure all campaigns adhere to their guidelines. While we cannot control all factors related to account health, we take proactive steps to minimize risks associated with advertising and will promptly communicate any potential issues that arise within the advertising console.",
  },
  {
    question: "How do I set up Walmart PPC campaigns?",
    answer: "Sign into your Walmart Advertising Console, create a campaign, select an ad type (Sponsored Products, Brands, or Display), set your budget, choose keywords or targeting, and launch. AMZ Hive handles this end-to-end for optimal setup.",
  },
  {
    question: "What is the cost of Walmart PPC advertising?",
    answer: "Costs vary based on bids, keywords, and competition. You only pay for clicks, with daily budgets you control.",
  },
  {
    question: "How to improve Walmart Ads campaign performance?",
    answer: "Optimize keywords, refine bids, improve listing quality (images, copy), and analyze performance data weekly. AMZ Hive's full-service management maximizes RoAS with these strategies.",
  },
  {
    question: "How does keyword bidding work on Walmart?",
    answer: "You set bids for keywords in Sponsored Product or Brand campaigns. Higher bids can improve ad placement, but smart targeting ensures cost efficiency. AMZ Hive optimizes bids for maximum ROI.",
  },
  {
    question: "What are Walmart's PPC advertising options?",
    answer: "Walmart offers Sponsored Products (search results), Sponsored Brands (branded banners), and Display Ads (on-site and off-site). AMZ Hive leverages all types for full-funnel impact.",
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
            Got questions about our Walmart Ads Management service? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
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
