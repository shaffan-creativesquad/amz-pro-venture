"use client";

import { motion } from "framer-motion";

import { useState } from "react";

const faqs = [
  {
    question: "How do I know if my product qualifies for Creator Connections?",
    answer: "We check your product's eligibility as part of the onboarding process. In most cases, any product that's listed under an active Amazon seller account (in good standing), with Brand Registry and sufficient inventory, will be eligible. Some categories simply aren't eligible (highly regulated products, adult products, for example).",
  },
  {
    question: "What is Brand Registry, and why does it matter for influencer marketing?",
    answer: "Brand Registry is Amazon's program that verifies you own your brand. It gives you access to a range of tools, including A+ Content, Brand Stores, and improved brand protection. For creator campaigns, it helps your listings look more credible and gives you access to a wider range of promotion options, which is why we recommend it.",
  },
  {
    question: "Are influencer campaigns guaranteed to drive sales?",
    answer: "No one can guarantee sales, as it depends on your product, your pricing, your reviews, and how the audience responds. We do a very careful selection of creators, we guide the content, and we're always looking at the data to improve the campaign, so we're always trying to give you the best possible chance of strong results.",
  },
  {
    question: "What kind of return on investment (ROI) can I expect?",
    answer: "ROI depends heavily on the product, niche, and budget. Some products will see a quick uplift in sales; others will take a bit longer to show the full effect through improved rankings, more reviews, and greater brand awareness. We monitor performance on a monthly basis and provide you with full reports so you always know what your campaign is driving.",
  },
  {
    question: "How does AMZ ProVenture choose the right influencers for my product?",
    answer: "We look at each creator's niche, their audience, their engagement and the quality of their content rather than just their follower count. We then match them to your product and your target buyer so the people who are watching are the people most likely to buy.",
  },
  {
    question: "Is Amazon PPC included in this service?",
    answer: "No, PPC is a separate service. Many brands combine the two, as creator traffic and PPC support each other well. We'd be more than happy to go through whether PPC would be of any use to you in achieving your objectives.",
  },
  {
    question: "Can influencer campaigns support new product launches?",
    answer: "Yes, and launches are one of the best times to use them. Creator content is a great way to drive early sales, reviews, and visibility for a new product, which can make a massive difference in how quickly it starts to rank.",
  },
  {
    question: "What is Creator Connections, and how does AMZ ProVenture use it?",
    answer: "Creator Connections is Amazon's program for linking brands with Amazon Creators through bonus-commission campaigns. We handle the full setup inside the platform, choose the right products and commission levels, and manage the campaign so it reaches the right creators and keeps performing.",
  },
  {
    question: "Do I need to provide free product samples to influencers?",
    answer: "In many cases, yes. Creators usually need the product in hand to make honest, high-quality content. We'll tell you which creators need samples, and we coordinate the approvals and shipping with you.",
  },
  {
    question: "What if an influencer doesn't deliver content, or performance is low?",
    answer: "We stay in close contact with every creator and follow up quickly if content is late. If a creator doesn't deliver or results are weak, we adjust the plan, shift focus to better-performing creators, and keep the campaign moving in the right direction.",
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
            Have questions about our Amazon influencer marketing service? Here are the ones we hear most. If yours isn&apos;t here, reach out.
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
