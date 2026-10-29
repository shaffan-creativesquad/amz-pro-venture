import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Walmart Ads Management | AMZ Pro Venture",
  description: "AI-powered Walmart Ads Management service by AMZ Pro Venture. Drive more traffic, boost conversions, and maximize your ROI with expertly managed Walmart PPC campaigns.",
};

export default function WalmartAdsManagement() {
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

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(36px, 5vw, 58px)", color: "#ffffff" }}
          >
            ARE WALMART ADS DRAINING<br />BUDGET WITH <span style={{ color: "#ff9900" }}>LOW ROI?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[620px] mb-7 text-left">
            We create and manage high-performing Walmart Ad campaigns that grow your sales, cut wasted spend, and keep you visible across the competition.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Increase brand awareness",
              "Smart keyword targeting",
              "Eliminate wasted ad spend",
              "Reach high-intent buyers",
              "Scale profitably",
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
            GET YOUR FREE WALMART PPC AUDIT →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Main-Banner-4.webp"
              alt="Walmart Ads Management"
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

      {/* Why Walmart Ads Matter More Than Ever */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image src="/Why-Walmart-Ads-Matter-More-Than-Ever.webp" alt="Why Walmart Ads Matter More Than Ever" width={560} height={480} unoptimized className="w-full h-auto object-contain" />
            </div>

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                Why Walmart Ads Matter<br />More Than <span style={{ color: "#ff9900" }}>Ever</span>
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
                Walmart&apos;s marketplace is growing fast, and so is the competition. Strategic advertising is now the key to getting noticed, winning clicks, and driving consistent sales.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { bold: "Reach High-Intent Buyers:", text: "Appear at the top of search results and product pages, where buying decisions happen." },
                  { bold: "Improve Organic Rankings:", text: "Ads increase sales velocity, which helps your listings climb the organic ranks faster." },
                  { bold: "Precise Targeting:", text: "Only pay for high-intent traffic by leveraging precise keyword strategies." },
                  { bold: "Data-Backed Decisions:", text: "Gain insights into shopper behavior and keyword trends to refine your overall strategy." },
                  { bold: "Scale with Confidence:", text: "Turn your ad campaigns into a controllable growth engine that fuels long-term brand success." },
                ].map((item) => (
                  <div key={item.bold} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[15px]" style={{ color: "#000000" }}>
                      <span className="font-semibold">{item.bold}</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <a href="/contact-us" className="svc-btn svc-btn-pink inline-block">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">OPTIMIZE MY WALMART ADS →</span>
                  <span className="svc-btn-bottom">OPTIMIZE MY WALMART ADS →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Why Most Sellers Struggle With Walmart Ads */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                Why Most Sellers Struggle With Walmart Ads
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
                Walmart PPC management isn&apos;t set-and-forget; it&apos;s complex, data-heavy, and constantly changing. Most sellers waste thousands trying to figure it out. Here&apos;s why Walmart ads often fail:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Wasted spend on broad, unprofitable keywords.",
                  "Great products buried under poor targeting or structure.",
                  "Confusing ad data that's hard to analyze or act on.",
                  "No time or expertise to manage and test campaigns.",
                  "Struggling to maintain RoAS as competition grows.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[#000000] text-[15px] leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">OPTIMIZE MY WALMART ADS →</span>
                  <span className="svc-btn-bottom">OPTIMIZE MY WALMART ADS →</span>
                </span>
              </a>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image src="/Need-Help-Setting-Up-Your-Walmart-Seller-Account-The-Right-Way.webp" alt="Why Most Sellers Struggle With Walmart Ads" width={560} height={480} unoptimized className="w-full h-auto object-contain" />
            </div>

          </div>
        </div>
      </section>

      {/* Complete Walmart Ads Management */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Complete Walmart Ads Management: Everything<br />You Need to <span style={{ color: "#ff9900" }}>Succeed</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[740px] mx-auto">
              Our full-service Walmart PPC management approach helps you stay ahead of the competition. Here&apos;s what&apos;s included in your monthly ads management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {[
              {
                title: "Competitor Research",
                desc: "We dive deep into your rivals' strategies to uncover opportunities and outsmart them.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="21" cy="21" r="7" fill="none" stroke="#fff" strokeWidth="2.2"/>
                    <path d="M26.5 26.5l5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <circle cx="32" cy="18" r="3" fill="#fff"/>
                    <path d="M29 18h6M32 15v6" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Extensive Keyword Research",
                desc: "Our PPC keyword strategy pinpoints the exact keywords your ideal customers use to find products like yours.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="21" cy="22" r="7" fill="none" stroke="#fff" strokeWidth="2.2"/>
                    <path d="M26.5 27.5l5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M17 22h8M21 18v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Campaign Creation Across Ad Types",
                desc: "We're experts in all types of Walmart Sponsored Search ads. From Sponsored Products to Sponsored Brands and Display Ads, we cover every stage of the buyer journey.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <rect x="13" y="17" width="22" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M17 21h4v2h-4zM25 21h6M25 25h6M17 25h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M30 15l2-2M30 33l2 2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Smart Campaign Structuring & Bidding Strategy",
                desc: "We craft efficient campaign structures and bidding plans to stretch your budget and scale results.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M15 32l4-5 4 3 4-6 4 4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <circle cx="30" cy="18" r="4" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M28 18h4M30 16v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Weekly Monitoring & Adjustments",
                desc: "Your campaigns stay sharp with weekly tweaks and adjustments, no autopilot here.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="24" cy="24" r="7" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M24 20v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 13v2M24 33v2M13 24h2M33 24h2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Performance Reporting & RoAS Insights",
                desc: "You get clear, actionable reports with insights and recommendations to fuel growth.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M14 34V26M20 34V20M26 34V24M32 34V16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M14 20l6-5 6 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Competitor Ads Analysis",
                desc: "We track where your competitors are investing to keep you one step ahead.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <rect x="13" y="22" width="8" height="12" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <rect x="20" y="16" width="8" height="18" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <rect x="27" y="19" width="8" height="15" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                  </svg>
                ),
              },
              {
                title: "Strategic Scaling & Expansion",
                desc: "We grow your reach with remarketing and new keyword opportunities to capture fresh audiences and further increase your Walmart Ad ROI.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M14 32l5-7 5 4 5-8 5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M30 16h4v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item, i) => {
              const dark = i % 2 === 1;
              return (
                <div key={item.title} className="rounded-2xl p-8" style={{ backgroundColor: dark ? "#000000" : "#ffffff" }}>
                  {item.icon}
                  <h3 className="font-bold text-[17px] mb-3" style={{ color: dark ? "#ffffff" : "#000000" }}>{item.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.65)" : "#67768e" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START OPTIMIZING WALMART ADS →</span>
                <span className="svc-btn-bottom">START OPTIMIZING WALMART ADS →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What We Need From You To Get Started */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left — image placeholder */}
            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/Is-SPCTEKs-Walmart-Ads-Management-Right-for-You.webp"
                alt="Is AMZ Pro Venture's Walmart Ads Management Right for You"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right — content */}
            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                Is AMZ Pro Venture&apos;s Walmart Ads Management Right for <span style={{ color: "#ff9900" }}>You?</span>
              </h2>
              <p className="text-[#67768e] text-[16px] mb-7">
                You&apos;re a perfect fit if:
              </p>

              <div className="space-y-4 mb-7">
                {[
                  "You're a Walmart seller ready to scale profitably.",
                  "You've run ads before, but the results aren't matching your spend.",
                  "You want expert strategy and full management, not guesswork.",
                  "You don't have time to learn complex ad systems yourself.",
                  "You're ready to invest in growth and long-term performance.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[15px]" style={{ color: "#000000" }}>{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#67768e] text-[14px] leading-relaxed mb-8">
                <span className="font-semibold" style={{ color: "#000000" }}>Quick Note:</span> We understand gathering these details can be a process. Don&apos;t worry, our team will guide you through exactly what&apos;s needed for your specific products.
              </p>

              <a href="/contact-us" className="svc-btn">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                  <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What We Need From You to Deliver the Best Results */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/What-we-need-from-you.webp"
                alt="What We Need From You to Deliver the Best Results"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                What We Need From You to Deliver the <span style={{ color: "#ff9900" }}>Best Results</span>
              </h2>
              <p className="text-[#67768e] text-[16px] mb-7">
                To get the most from this service, we need:
              </p>

              <div className="space-y-4 mb-7">
                {[
                  "Access to your Walmart Advertising Console",
                  "Compliant product listings that meet Walmart's standards",
                  "Active Inventory",
                  "Product photos and listing content that's ready for traffic",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[15px]" style={{ color: "#000000" }}>{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#67768e] text-[14px] leading-relaxed mb-8">
                Not quite there yet? We offer <span className="font-semibold" style={{ color: "#000000" }}>pre-ads optimizations</span> (listing optimization, image upgrades) as separate services to get you Ads-ready.
              </p>

              <a href="/contact-us" className="svc-btn">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                  <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Stop Letting Your Walmart Ad<br />Spend Go to Waste Without ROI
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-8">
              Without expert Walmart Ads management, your budget bleeds on low-performing campaigns while competitors take the top spots. Act now to protect your ROI, capture visibility, and turn every dollar into sales.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET YOUR FREE WALMART PPC AUDIT →</span>
                <span className="svc-btn-bottom">GET YOUR FREE WALMART PPC AUDIT →</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  );
}
