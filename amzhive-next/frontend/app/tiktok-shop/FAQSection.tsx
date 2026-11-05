"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is a TikTok Shop Agency?",
    answer:
      "A TikTok Shop Agency specializes in setting up, managing, and growing your TikTok Shop. We handle everything from product listings, ad management, influencer marketing, inventory management, and fulfillment, helping your TikTok Shop scale efficiently and effectively.",
  },
  {
    question: "How does TikTok Shop work for e-commerce businesses?",
    answer:
      "TikTok Shop allows businesses to sell directly through the TikTok platform, integrating shopping features into TikTok’s videos, livestreams, and ads. Users can discover products through content and purchase them seamlessly without leaving the app. A TikTok Shop Agency helps you leverage this by optimizing your store and driving sales through targeted marketing.",
  },
  {
    question: "How can AMZ ProVenture help me grow my TikTok Shop?",
    answer:
      "AMZ ProVenture offers a full-service approach to TikTok Shop growth, including store setup, listing optimization, targeted ad campaigns, influencer collaborations, fulfillment strategies, and continuous performance monitoring. We take care of all the details, allowing you to focus on your business while we scale your sales.",
  },
  {
    question: "How much does it cost to work with a TikTok Shop Agency?",
    answer:
      "The cost varies depending on the services you require. AMZ ProVenture offers flexible pricing to suit different needs, whether you need a full-service solution or specific services like ad management. Contact us for a custom quote based on your business goals.",
  },
  {
    question: "Do I need to be an established brand to start a TikTok Shop?",
    answer:
      "No! Whether you’re a new business or an established brand, we can help you set up and grow your TikTok Shop. We tailor our services to your specific needs, whether you’re just getting started or looking to scale.",
  },
  {
    question: "How do TikTok ads work for e-commerce?",
    answer:
      "TikTok offers a variety of ad formats like In-Feed Ads, Collection Ads, and Branded Hashtag Challenges that allow you to target specific audiences. AMZ ProVenture creates and manages these ad campaigns, ensuring they’re optimized to reach the right users and generate sales. We also analyze performance metrics to adjust and improve ads for better results.",
  },
  {
    question: "How do influencers help my TikTok Shop?",
    answer:
      "TikTok influencers can help increase brand visibility and drive sales by promoting your products to their large, engaged following. We connect you with the right influencers who align with your brand, create authentic content, and generate more exposure for your products.",
  },
  {
    question: "Can I sell multiple products in my TikTok Shop?",
    answer:
      "Yes! TikTok Shop supports selling a wide range of products. Whether you sell fashion, beauty, electronics, or more, AMZ ProVenture ensures that your listings are optimized for TikTok’s platform and designed to attract the right customers.",
  },
  {
    question: "How do you optimize product listings for TikTok Shop?",
    answer:
      "We ensure your product listings are optimized for TikTok’s audience by using engaging titles, descriptions, and high-quality images. We also use relevant hashtags, SEO keywords, and eye-catching content to help your products stand out and improve visibility on TikTok.",
  },
  {
    question: "How do I manage inventory for my TikTok Shop?",
    answer:
      "We help streamline inventory management, whether you’re using self-fulfillment or working with a third-party logistics (3PL) provider. We ensure your products are always in stock, reduce the risk of overstocking or stockouts, and maintain fast and efficient order fulfillment.",
  },
  {
    question: "What are TikTok’s shopping features?",
    answer:
      "TikTok offers several shopping features, including shoppable videos, product tagging, live shopping, and TikTok’s Shopping Cart. We help integrate these features into your TikTok strategy, making it easier for users to purchase directly from your content.",
  },
  {
    question: "How long does it take to see results with TikTok Shop?",
    answer:
      "Results vary depending on your product, audience, and marketing efforts, but most businesses start seeing results within 3-6 months of implementing a solid TikTok strategy. Consistent content creation, engagement, and effective ad campaigns will help drive quicker results.",
  },
  {
    question: "How can I track the performance of my TikTok Shop?",
    answer:
      "We provide regular performance reports that track key metrics such as sales, traffic, conversion rates, and ad performance. These reports allow us to refine strategies and continuously optimize your TikTok Shop to drive higher sales.",
  },
  {
    question: "Do I need to be an expert in TikTok to use the platform for sales?",
    answer:
      "No! You don’t need to be a TikTok expert. AMZ ProVenture is here to handle all the complexities of the platform for you. We manage your store, create engaging content, and run effective campaigns to grow your business.",
  },
  {
    question: "Can I integrate my TikTok Shop with my existing eCommerce platform?",
    answer:
      "Yes, we can integrate your TikTok Shop with your existing eCommerce platform (like Shopify or WooCommerce), streamlining inventory management and order fulfillment. This ensures consistency across platforms and a seamless shopping experience for customers.",
  },
  {
    question: "What happens if my TikTok account gets suspended or faces issues?",
    answer:
      "We proactively monitor your account and ensure compliance with TikTok’s policies. If your account faces issues, we handle account recovery and resolve any problems to maintain your store’s health and minimize downtime.",
  },
  {
    question: "Can I sell internationally through TikTok Shop?",
    answer:
      "Yes! TikTok Shop supports international selling in select countries. We help you expand your reach to global audiences and ensure your shop complies with international regulations and shipping requirements.",
  },
  {
    question: "Why should I choose AMZ ProVenture to manage my TikTok Shop?",
    answer:
      "AMZ ProVenture provides expert, hands-on management for your TikTok Shop, offering personalized support, growth strategies, and optimization tailored to your business. We handle the details so you can focus on scaling your sales, making us the perfect partner for your TikTok business.",
  },
  {
    question: "How do I get started with AMZ ProVenture?",
    answer:
      "Getting started is easy! Simply contact us for a free consultation. We’ll discuss your goals, assess your TikTok Shop needs, and create a customized strategy to grow your business.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full py-20"
      style={{ backgroundColor: "#f4f4f4" }}
    >
      <div className="max-w-[1140px] mx-auto px-5 md:px-10 flex flex-col lg:flex-row gap-14">
        {/* Left */}
        <div className="lg:w-[440px] flex-shrink-0 text-center lg:text-left">
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "#000000",
            }}
          >
            Frequently Asked <span style={{ color: "#ff9900" }}>Questions</span>
          </h2>
          <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
            Got questions about our TikTok Shop management services? We have got the answers. If you do not find what you are looking for, feel free to reach out directly.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider text-[12px] text-white overflow-hidden transition-all duration-300"
              style={{ background: "#ff9900", padding: "12px 28px" }}
            >
              <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              <span className="relative z-10 flex items-center gap-2">Let&apos;s Talk</span>
            </Link>
          </div>
        </div>

        {/* Right — Accordion */}
        <div className="flex-1">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: (i % 6) * 0.05 }}
              className="border-b border-gray-300"
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[16px] text-[#000000]">{faq.question}</span>
                <span
                  className="flex-shrink-0 text-[22px] font-light transition-transform duration-300 text-[#000000]"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
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
