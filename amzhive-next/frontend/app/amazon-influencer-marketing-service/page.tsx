import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Amazon Influencer Marketing Service | AMZ Pro Venture",
  description: "Expert Amazon influencer marketing services to grow your brand and boost sales on Amazon. AMZ Pro Venture connects you with the right influencers.",
};

export default function InfluencerMarketing() {
  return (
    <main>
      <style>{`
        .svc-btn {
          position: relative;
          overflow: hidden;
          display: inline-block;
          background-color: #000000;
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
          bottom: 0; left: 0;
          width: 100%; height: 0;
          background-color: #ff9900;
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
          top: 100%; left: 0;
          transition: transform 0.35s ease;
        }
        .svc-btn:hover .svc-btn-bottom { transform: translateY(-100%); }
        .svc-btn-pink { background-color: #ff9900 !important; }
        .svc-btn-pink::before { background-color: #000000 !important; }
        .svc-btn-white { background-color: #ffffff !important; color: #000000 !important; }
        .svc-btn-white::before { background-color: #000000 !important; }
        .svc-btn-white:hover { color: #ffffff !important; }
        .svc-btn-hover-white::before { background-color: #ffffff !important; }
        .svc-btn-hover-white:hover { color: #000000 !important; }
      `}</style>
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="w-full overflow-visible" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-10 pt-16 pb-0 flex flex-col items-start text-left">

          {/* Label */}
          <p className="text-white/70 text-sm font-medium mb-4 tracking-wide">
            Amazon Influencer Marketing
          </p>

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "48px", color: "#ffffff" }}
          >
            Need the Right Amazon<br />Influencers for Your{" "}
            <span style={{ color: "#ff9900" }}>Product?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[720px] mb-5 text-left">
            Partner with the right creators to showcase your products and drive high-intent traffic that leads to real sales.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Targeted reach through niche influencers",
              "Strategic campaign creation",
              "Ongoing campaign optimization and reporting",
              "Full support with sample coordination & operations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-white/80 text-[16px]">{item}</p>
              </div>
            ))}
          </div>

          <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[14px] rounded-[6px] hover:bg-black transition-colors mb-6" style={{ padding: "14px 28px" }}>
            START INFLUENCER CAMPAIGN NOW →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Banner-4.webp"
              alt="Amazon Influencer Marketing Service"
              width={700}
              height={700}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </section>

      {/* Spacer */}
      <div className="bg-white pt-[240px]" />

      <PartnersBar />

      {/* Creator Connection Program Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — text */}
          <FadeIn direction="right" className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,48px)", color: "#000000" }}>
              What Is Amazon&apos;s <span style={{ color: "#ff9900" }}>Creator<br />Connection Program?</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10">
              Creator Connection is a service from Amazon that helps brands connect with Amazon influencers (called Creators). As a brand, you choose which products you want to promote, set a bonus commission for each sale, decide how long the campaign will run, and set a budget. Once your campaign is live, Amazon shares it with Creators, who then make content like videos, posts, and reviews to help promote your products and drive sales.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START INFLUENCER CAMPAIGN →</span>
                <span className="svc-btn-bottom">START INFLUENCER CAMPAIGN →</span>
              </span>
            </a>
          </FadeIn>

          {/* Right — image */}
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/What-We-Offer-in-Our-Amazon-Influencer-Marketing-Service-1.webp" alt="Amazon Influencer Marketing Service" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

        </div>
      </section>

      {/* Why Influencer Marketing Matters Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <FadeIn direction="up"><h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            Why Influencer Marketing Matters for <span style={{ color: "#ff9900" }}>Amazon Sellers</span>
          </h2></FadeIn>
          <FadeIn direction="up" delay={0.1}><p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[720px] mx-auto mb-14">
            If you want to stand out, build trust quickly, and reach ready-to-buy shoppers, influencer marketing gives you a serious edge.
          </p></FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {[
              {
                title: "Instant Credibility",
                desc: "Shoppers trust people over platforms. In fact, 69% of consumers rely more on influencers and peers than on branded messages. A creator's recommendation builds trust and drives action faster than ads ever could.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><path d="M24 13l2.5 5 5.5.8-4 3.9.95 5.5L24 25.5l-4.95 2.7.95-5.5-4-3.9 5.5-.8z" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinejoin="round"/><path d="M17 34h14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M20 37h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Highly Targeted Reach",
                desc: "Influencers speak directly to niche audiences, who are already interested in what you sell. That means your product gets in front of the people most likely to buy.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><circle cx="24" cy="24" r="10" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="24" cy="24" r="5" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="24" cy="24" r="1.5" fill="#fff"/><path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Stronger Amazon Rankings",
                desc: "External traffic is a major ranking signal for Amazon. When influencers drive clicks and conversions, your organic rankings improve, without increasing your ad spend.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><path d="M14 34V28M20 34V22M26 34V18M32 34V13" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><path d="M24 14l5-3 5 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.08}>
              <div>
                {item.icon}
                <h3 className="font-bold text-[17px] mb-3" style={{ color: "#000000" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 md:max-w-[760px]">
            {[
              {
                title: "More Visibility Across Channels",
                desc: "From Amazon Live streams to TikTok trends, influencer content travels fast. Getting your product featured in shoppable videos or trending posts can expose your brand to millions of potential customers.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><circle cx="22" cy="22" r="8" stroke="#fff" strokeWidth="2" fill="none"/><path d="M28.5 28.5l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M18 22h8M22 18v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: "Valuable Customer Insights",
                desc: "Influencers bring more than reach; they bring feedback. Their audience reactions give you a direct window into what real buyers think, helping you refine your product positioning and marketing strategy.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#ff9900"/><circle cx="24" cy="18" r="4" stroke="#fff" strokeWidth="2" fill="none"/><path d="M16 34c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="14" cy="20" r="3" stroke="#fff" strokeWidth="1.5" fill="none"/><path d="M9 32c0-3 2.2-5 5-5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="34" cy="20" r="3" stroke="#fff" strokeWidth="1.5" fill="none"/><path d="M39 32c0-3-2.2-5-5-5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.08}>
              <div>
                {item.icon}
                <h3 className="font-bold text-[17px] mb-3" style={{ color: "#000000" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex justify-center mb-0">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START INFLUENCER CAMPAIGN NOW →</span>
                <span className="svc-btn-bottom">START INFLUENCER CAMPAIGN NOW →</span>
              </span>
            </a>
          </div>

        </div>
      </section>


      {/* What We Offer Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What We Offer in Our Amazon Influencer<br />Marketing Service
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[660px] mx-auto">
              From creator selection to full campaign management, we handle the heavy lifting so you get authentic content, targeted traffic, and performance you can track.
            </p>
          </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "One-Time Campaign Planning & Setup",
                items: [
                  "Find the right influencers in your niche",
                  "Define goals, budget, and timeline",
                  "Align messaging with your brand voice",
                  "Handle product sample coordination",
                  "Set up everything within Amazon’s Creator platform",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900" opacity="0.15"/>
                    <path d="M10 18c0-2.2 1.8-4 4-4h2l10-6v28l-10-6h-2c-2.2 0-4-1.8-4-4v-8z" fill="#ff9900"/>
                    <path d="M30 18c2 1.5 3 3.5 3 6s-1 4.5-3 6" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    <path d="M34 14c3 2.5 5 6 5 10s-2 7.5-5 10" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
                  </svg>
                ),
              },
              {
                title: "Ongoing Monthly Campaign Management and Optimization",
                items: [
                  "Manage influencer communication and outreach",
                  "Monitor campaign performance and engagement",
                  "Track product sample deliveries",
                  "Collect and report influencer-generated content",
                  "Optimize strategy as needed to improve results",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900" opacity="0.15"/>
                    <path d="M24 14c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z" stroke="#ff9900" strokeWidth="2" fill="none"/>
                    <path d="M24 18v6l4 2" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M18 10l-2-3M30 10l2-3M14 18l-3-2M34 18l3-2" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                ),
              },
              {
                title: "Campaign Setup Deliverables",
                items: [
                  "Initial strategy and campaign setup report",
                  "Influencer targeting and outreach plan",
                  "Product positioning and creative content guidelines",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900" opacity="0.15"/>
                    <circle cx="24" cy="18" r="5" fill="#ff9900"/>
                    <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="#ff9900"/>
                    <circle cx="14" cy="20" r="3.5" stroke="#ff9900" strokeWidth="1.5" fill="none"/>
                    <path d="M9 33c0-3.5 2.2-6 5-6" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    <circle cx="34" cy="20" r="3.5" stroke="#ff9900" strokeWidth="1.5" fill="none"/>
                    <path d="M39 33c0-3.5-2.2-6-5-6" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </svg>
                ),
              },
              {
                title: "Monthly Management Deliverables",
                items: [
                  "Monthly campaign performance report",
                  "Influencer engagement and interaction logs",
                  "Sample shipment tracking",
                  "Continuous campaign optimization",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900" opacity="0.15"/>
                    <rect x="14" y="12" width="20" height="24" rx="2" stroke="#ff9900" strokeWidth="2" fill="none"/>
                    <path d="M18 20h12M18 25h12M18 30h8" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="30" cy="30" r="5" fill="#ff9900"/>
                    <path d="M28 30l1.5 1.5L32 28" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((card, i) => (
              <FadeIn key={card.title} direction="up" delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-1 h-full">
                {card.icon}
                <h3 className="font-bold text-[16px] leading-snug mb-3" style={{ color: "#000000" }}>{card.title}</h3>
                <div className="space-y-2.5">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5">
                        <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                        <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      <p className="text-[#000000] text-[14px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START INFLUENCER CAMPAIGN NOW →</span>
                <span className="svc-btn-bottom">START INFLUENCER CAMPAIGN NOW →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What We Need From You */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1659px] mx-auto flex flex-col lg:flex-row items-center gap-0">
          <FadeIn direction="right" className="flex-1 px-10 py-10">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              What We&apos;ll Need to Start<br /><span style={{ color: "#ff9900" }}>Your Influencer Campaign</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
              To ensure a seamless setup and successful execution, here&apos;s what we need from your side:
            </p>

            {[
              {
                group: "Account & Platform Eligibility",
                items: [
                  "Active Amazon seller account in good standing",
                  "Product(s) eligible for Amazon Creator Connections",
                  "Brand Registry enrollment (preferred)",
                  "Completed Amazon Storefront and seller profile",
                ],
              },
              {
                group: "Access & Permissions",
                items: [
                  "Child account access for campaign setup and monitoring",
                  "Required permissions granted in Seller Central",
                ],
              },
              {
                group: "Brand Responsibilities",
                items: [
                  "Provide free product samples to selected influencers (as applicable)",
                  "Timely responses for sample approvals and shipping coordination",
                ],
              },
            ].map((section) => (
              <div key={section.group} className="mb-6">
                <h3 className="font-bold text-[18px] mb-3" style={{ color: "#000000" }}>{section.group}</h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                        <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      <p className="text-[#000000] text-[15px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8">
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                  <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
                </span>
              </a>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[50%]">
            <Image src="/What-Is-Amazons-Creator-Connection-Program-1.webp" alt="Amazon Creator Connection Program" width={800} height={600} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>
        </div>
      </section>

      {/* Trusted By Stats Section */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-12" style={{ backgroundColor: "#f4f4f4" }}>

            <h2 className="text-center font-bold mb-10" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "36px", color: "#000000" }}>
              Trusted by 1,200+ Amazon Sellers
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* Stats */}
              <StatsCounter />

              {/* Expert Advice Card */}
              <div className="flex-shrink-0 flex flex-col items-center text-center gap-3 bg-white rounded-xl px-8 py-6 shadow-sm min-w-[180px]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#ff9900" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-8 h-8">
                    <path fill="#ffffff" d="M203.45,255.03h-29.15v-44.94c0-1.49-7.46-12.84-9.76-14.53-7.44-5.44-21.56-5.49-29.06,0-2.31,1.69-9.76,13.04-9.76,14.53v44.94h-29.15V110.5c0-4.59,8.9-36.83,12.05-38.96l81.16-.79c4.97,1.71,13.69,34.5,13.69,39.76v144.54ZM144.55,95.23c-43.52,6.28-37.89,73.26,6.43,72.12,49.45-1.27,43.36-79.31-6.43-72.12Z"/>
                    <path fill="#ffffff" d="M181.58,55.84h-63.17c9.04-13.87,17.37-31.43,27.1-44.56,1.5-2.03,2.31-4.83,5.67-4.02l30.4,48.58Z"/>
                    <path fill="#ffffff" d="M159.72,285.4c-2.05,12.16-19.44,6.87-19.44,2.43v-75.3c0-1.21,6.1-6.34,8.63-6.19,3.1-1.28,10.8,4.41,10.8,6.19,0,20.16,3.03,54.89,0,72.88Z"/>
                    <path fill="#ffffff" d="M81.98,261.1l-18.23,18.21c-1.35-18.49,5.14-41.59,18.23-55.86v37.65Z"/>
                    <path fill="#ffffff" d="M218.02,223.45c13.09,14.27,19.58,37.36,18.23,55.86l-18.23-18.21v-37.65Z"/>
                    <path fill="#ffffff" d="M146.99,109.69c26.23-4.24,35.93,42.13,1.78,41.1-27.21-.82-24.33-37.45-1.78-41.1Z"/>
                  </svg>
                </div>
                <p className="font-bold text-[13px]" style={{ color: "#000000" }}>Linda Davis</p>
                <p className="text-[11px]" style={{ color: "#67768e" }}>Account Lead</p>
                <p className="font-bold text-[16px] leading-tight" style={{ color: "#ff9900" }}>Need Expert<br />Advice?</p>
                <p className="text-[12px]" style={{ color: "#67768e" }}>Book Your Strategy Call Today!</p>
                <a href="/contact-us" className="svc-btn svc-btn-pink mt-1" style={{ fontSize: "12px", padding: "9px 20px" }}>
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">Book a Call</span>
                    <span className="svc-btn-bottom">Book a Call</span>
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AMZ Pro Venture Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Why Choose AMZ Pro Venture for Influencer<br />Collaborations?
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[660px] mx-auto">
              We connect your brand with creators who drive real visibility, engagement, and sales. Here&apos;s why sellers trust us:
            </p>
          </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10">
            {[
              {
                title: "Vetted Influencer Network",
                desc: "We partner with top influencers across niches, handpicked for engagement, authenticity, ensuring your brand shines.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="24" cy="18" r="5" fill="#fff"/>
                    <path d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10" fill="#fff"/>
                    <circle cx="12" cy="20" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none"/>
                    <path d="M8 32c0-3.3 2-5.5 4.5-5.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                    <circle cx="36" cy="20" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none"/>
                    <path d="M40 32c0-3.3-2-5.5-4.5-5.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </svg>
                ),
                dark: false,
              },
              {
                title: "Proven Expertise",
                desc: "With years of experience in Amazon marketing, we've helped 100+ sellers boost sales through influencer campaigns.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="24" cy="24" r="10" stroke="#fff" strokeWidth="2" fill="none"/>
                    <path d="M19 24l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                ),
                dark: true,
              },
              {
                title: "Tailored Strategies",
                desc: "We craft custom collaboration plans to match your brand goals, budget, and target audience.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M24 12c0 0-8 6-8 13a8 8 0 0016 0c0-7-8-13-8-13z" fill="#fff"/>
                    <path d="M20 37h8M21 40h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                dark: false,
              },
              {
                title: "End-to-End Management",
                desc: "From influencer outreach to campaign tracking, we handle everything, saving you time and hassle.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="24" cy="24" r="7" stroke="#fff" strokeWidth="2" fill="none"/>
                    <path d="M24 10v4M24 34v4M10 24h4M34 24h4M14.9 14.9l2.8 2.8M30.3 30.3l2.8 2.8M33.1 14.9l-2.8 2.8M17.7 30.3l-2.8 2.8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                dark: true,
              },
              {
                title: "Data-Driven Results",
                desc: "Use our advanced analytics to monitor sales, traffic, and ROI, optimizing campaigns for maximum growth.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M14 34V26M20 34V20M26 34V16M32 34V11" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ),
                dark: false,
              },
              {
                title: "Exclusive Opportunities",
                desc: "Access private brand deals, Amazon Live placements, and Creator Stars benefits through our industry connections.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M24 13l2.5 5.5 6 .9-4.3 4.2 1 6L24 27l-5.2 2.6 1-6-4.3-4.2 6-.9z" fill="#fff"/>
                    <path d="M17 36h14" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 39h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                dark: true,
              },
            ].map((card, i) => (
              <FadeIn key={card.title} direction="up" delay={i * 0.07}>
              <div
                className="p-8 h-full"
                style={{ backgroundColor: card.dark ? "#000000" : "#f4f4f4" }}
              >
                {card.icon}
                <h3 className="font-bold text-[17px] mb-3" style={{ color: card.dark ? "#ffffff" : "#000000" }}>{card.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: card.dark ? "rgba(255,255,255,0.65)" : "#67768e" }}>{card.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START INFLUENCER CAMPAIGN →</span>
                <span className="svc-btn-bottom">START INFLUENCER CAMPAIGN →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <FadeIn direction="up">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Influencers Are Already Promoting Your Competitors
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-8">
              Every day you wait is a missed chance to get your product in front of ready-to-buy audiences. Influencers move fast, and so does your market. Let us help you launch before the next trend passes you by.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START INFLUENCER CAMPAIGN TODAY →</span>
                <span className="svc-btn-bottom">START INFLUENCER CAMPAIGN TODAY →</span>
              </span>
            </a>
          </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection />


      <Footer />
    </main>
  );
}
