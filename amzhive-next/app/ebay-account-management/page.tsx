import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";

export const metadata = {
  title: "eBay Account Management | AMZ Hive",
  description: "AI-powered eBay Account Management service by AMZ Hive. Grow your eBay store with expert listing optimization, ads management, and full-service account management.",
};

export default function EbayAccountManagement() {
  return (
    <main>
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
          bottom: 0; left: 0;
          width: 100%; height: 0;
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
          top: 100%; left: 0;
          transition: transform 0.35s ease;
        }
        .svc-btn:hover .svc-btn-bottom { transform: translateY(-100%); }
        .svc-btn-pink { background-color: #E91C59 !important; }
        .svc-btn-pink::before { background-color: #1e293b !important; }
        .svc-btn-white { background-color: #ffffff !important; color: #1e293b !important; }
        .svc-btn-white::before { background-color: #1e293b !important; }
        .svc-btn-white:hover { color: #ffffff !important; }
        .svc-btn-hover-white::before { background-color: #ffffff !important; }
        .svc-btn-hover-white:hover { color: #1e293b !important; }
      `}</style>
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="w-full overflow-visible" style={{ backgroundColor: "#21242f" }}>
        <div className="max-w-[1440px] mx-auto px-10 pt-16 pb-0 flex flex-col items-start text-left">

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(36px, 5vw, 58px)", color: "#ffffff" }}
          >
            IS EBAY STORE MANAGEMENT<br /><span style={{ color: "#E91C59" }}>HURTING YOUR PROFITS?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[620px] mb-7 text-left">
            We manage every part of your eBay business, from listings to inventory to account health, for fast, safe, and long-term growth.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Expert listing optimization for higher conversions",
              "Inventory, fulfillment, and catalog syncing",
              "Top Rated Seller & Top Rated Plus support",
              "Proactive account health protection",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#E91C59" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-white/80 text-[16px]">{item}</p>
              </div>
            ))}
          </div>

          <a href="/contact-us" className="inline-block bg-[#E91C59] text-white font-semibold uppercase tracking-wider text-[14px] rounded-[6px] hover:bg-black transition-colors mb-6" style={{ padding: "14px 28px" }}>
            LET&apos;S BUILD YOUR EBAY GROWTH PLAN →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Main-Banner-3-1.webp"
              alt="eBay Account Management"
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

      {/* Why Sellers Trust AMZ Hive For eBay Account Management */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Why Sellers Trust AMZ Hive For eBay<br /><span style={{ color: "#E91C59" }}>Account Management</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[720px] mx-auto">
              We don&apos;t just run your eBay store, we build it to win. Our approach blends strategy, optimization, and hands-on execution to deliver long-term results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {[
              {
                title: "Proactive Strategy That Keeps You Ahead",
                desc: "We don't wait for issues to arise. From optimizing your listings to managing promotions, we run your store with a future-focused game plan tailored to your goals.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <circle cx="24" cy="22" r="7" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M24 15v-2M24 31v2M17 22h-2M33 22h2M19.1 17.1l-1.4-1.4M30.3 28.3l1.4 1.4M19.1 26.9l-1.4 1.4M30.3 15.7l1.4-1.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M21 22l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Smart SEO & Best Match Optimization",
                desc: "Our eBay SEO experts improve your search rankings with optimized titles, structured data, and mobile-friendly listings designed to perform in eBay's Best Match algorithm.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <circle cx="22" cy="22" r="7" fill="none" stroke="#fff" strokeWidth="2.2"/>
                    <path d="M27.5 27.5l5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M19 22h6M22 19v6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M32 18l2-2M32 18h-3M32 18v-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Automation & Real-Time Tools",
                desc: "We utilize powerful tools and automation to synchronize listings, track inventory, and enhance conversion rates, saving you time while delivering better results.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M16 28l4-4-4-4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 32h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <circle cx="30" cy="18" r="4" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M28 18h4M30 16v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Growth That Impacts the Bottom Line",
                desc: "With better visibility, your listings attract more clicks. Optimized product pages lead to higher conversion rates, turning browsers into buyers.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M14 32l5-7 5 4 5-8 5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M30 16h4v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col">
                {item.icon}
                <h3 className="font-bold text-[18px] mb-3" style={{ color: "#1e293b" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">MANAGE MY EBAY ACCOUNT →</span>
                <span className="svc-btn-bottom">MANAGE MY EBAY ACCOUNT →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Without Expert eBay Management */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
                Without Expert eBay Management, You Risk <span style={{ color: "#E91C59" }}>More Than Just Profits</span>
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  "Policy violations putting your account at risk of suspension or bans",
                  "Blocked or hidden listings due to inaccurate product details",
                  "Slow response times hurting your seller rating and customer trust",
                  "Poor SEO leading to low visibility and reduced sales opportunities",
                  "Weak pricing strategy giving your competitors the upper hand",
                  "Mishandled disputes resulting in negative feedback",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#E91C59"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[#1e293b] text-[15px] leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
                Without expert support, these issues can quickly add up and hurt both your profits and your long-term growth.
              </p>

              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">MANAGE MY EBAY ACCOUNT →</span>
                  <span className="svc-btn-bottom">MANAGE MY EBAY ACCOUNT →</span>
                </span>
              </a>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image src="/Without-Expert-eBay-Management-You-Risk-More-Than-Just-Profits.webp" alt="Without Expert eBay Management" width={560} height={480} unoptimized className="w-full h-auto object-contain" />
            </div>

          </div>
        </div>
      </section>

      {/* Scale Your eBay Store with Full-Service Monthly Management */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Scale Your eBay Store with Full-Service Monthly <span style={{ color: "#E91C59" }}>Management</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[740px] mx-auto">
              Our monthly eBay Account Management plan includes everything you need to grow smart, safe, and sustainably.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {[
              {
                title: "Listing Creation & Optimization",
                desc: "We craft high-performance listings using the right titles, images, keywords, and item specifics to boost discoverability and conversions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <rect x="14" y="13" width="20" height="22" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M18 19h12M18 23h12M18 27h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M29 29l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Professional Copywriting",
                desc: "Your listings are written by experienced writers who balance SEO with persuasion for better click-throughs and more sales.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M16 32l2-6 14-14 4 4-14 14-6 2z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M28 18l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Inventory & Catalog Management",
                desc: "We prevent overselling, stockouts, and data errors by keeping your inventory synced and catalog fully optimized.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <rect x="13" y="20" width="9" height="9" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <rect x="26" y="20" width="9" height="9" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <rect x="13" y="13" width="9" height="5" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <rect x="26" y="13" width="9" height="5" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M16 33h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Account Health Monitoring",
                desc: "We track seller metrics and performance daily, handling issues like defects, late shipments, or negative feedback before they impact your ratings.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M13 26l4-4 4 4 4-8 4 6 3-3" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="13" y="30" width="22" height="3" rx="1" fill="none" stroke="#fff" strokeWidth="1.5"/>
                  </svg>
                ),
              },
              {
                title: "Returns & Dispute Resolution",
                desc: "We manage returns and buyer disputes with proactive strategies to maintain a healthy reputation and avoid unnecessary losses.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M16 20h16M16 24h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M30 28l4-4-4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 30c0 2 1.5 4 4 4h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Promotions & Seasonal Campaigns",
                desc: "We set up targeted deals, coupon campaigns, and sales events to increase traffic during key periods and boost conversion rates.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M18 30l12-12M19 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0zM27 28a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M24 14v2M24 32v2M14 24h2M32 24h2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Weekly Reports & Strategy Reviews",
                desc: "Stay in control with detailed reports on traffic, conversions, best-sellers, and more. Plus, we also offer actionable insights from our team.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M14 34V26M20 34V20M26 34V24M32 34V16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M14 20l6-5 6 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "eBay Compliance & Policy Updates",
                desc: "Never get caught off guard. We keep your account updated with eBay's latest rules and changes so you're always protected.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M24 13l8 3v8c0 5-8 10-8 10s-8-5-8-10v-8l8-3z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M19 24l3.5 3.5 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item, i) => {
              const dark = i % 2 === 1;
              return (
                <div key={item.title} className="rounded-2xl p-8" style={{ backgroundColor: dark ? "#1e293b" : "#ffffff" }}>
                  {item.icon}
                  <h3 className="font-bold text-[17px] mb-3" style={{ color: dark ? "#ffffff" : "#1e293b" }}>{item.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.65)" : "#67768e" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Top Rated Seller Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/We-Help-You-Unlock-the-Power-of-Top-Rated-Seller-Top-Rated-Plus.webp"
                alt="We Help You Unlock the Power of Top Rated Seller"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
                We Help You Unlock the Power of <span style={{ color: "#E91C59" }}>Top Rated Seller & Top Rated Plus</span>
              </h2>
              <p className="text-[#67768e] text-[16px] mb-7">
                Top Rated Seller and Top Rated Plus are signs that buyers trust you. To qualify and maintain your Top Rated Seller status, we actively manage and ensure these performance metrics:
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "eBay account active for over 90 days",
                  "At least 100 transactions and $1,000+ in U.S. sales over the last 12 months",
                  "Defect rate under 0.5%",
                  "Cases closed without resolution under 0.3%",
                  "Late shipment rate under 3%",
                  "Over 95% of tracking uploaded on time",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#E91C59"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[15px]" style={{ color: "#1e293b" }}>{item}</p>
                  </div>
                ))}
              </div>

              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">GET SELLER BADGE HELP →</span>
                  <span className="svc-btn-bottom">GET SELLER BADGE HELP →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Level Up with Vital Add-Ons */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Level Up with Vital <span style={{ color: "#E91C59" }}>Add-Ons</span>
            </h2>
            <p className="text-[#67768e] text-[16px]">
              Supercharge your results with add-ons built for serious sellers.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/Level-Up-with-Vital-Add-Ons.webp"
                alt="Level Up with Vital Add-Ons"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1 space-y-10">
              <div>
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#1e293b" }}>
                  eBay Ads <span style={{ color: "#E91C59" }}>(Promoted Listings)</span>
                </h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed">
                  We create and manage both Standard and Advanced ad campaigns, designed to drive traffic, impressions, and ROI.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#1e293b" }}>
                  Customer Support <span style={{ color: "#E91C59" }}>Services</span>
                </h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed">
                  Our team handles customer messages, returns, feedback, and reviews, so you stay responsive and maintain top seller scores.
                </p>
              </div>
              <a href="/contact-us" className="svc-btn svc-btn-pink inline-block">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">GET ADD-ONS →</span>
                  <span className="svc-btn-bottom">GET ADD-ONS →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What We Need From You to Deliver Maximum Results */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/What-we-need-from-you-.webp"
                alt="What We Need From You to Deliver Maximum Results"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
                What We Need From You to Deliver <span style={{ color: "#E91C59" }}>Maximum Results</span>
              </h2>
              <p className="text-[#67768e] text-[16px] mb-7">
                Great results start with collaboration. Here&apos;s what we&apos;ll need:
              </p>

              <div className="space-y-4 mb-7">
                {[
                  "eBay Business Account Access",
                  "Product Info & Pricing",
                  "High-Quality Images",
                  "Brand Guidelines (optional)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#E91C59"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[15px]" style={{ color: "#1e293b" }}>{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[#67768e] text-[14px] leading-relaxed mb-8">
                Need help with photography or branding? We&apos;ve got you covered.
              </p>

              <a href="/contact-us" className="svc-btn svc-btn-pink">
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
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Don&apos;t Wait Until Sales Drop or Your Account&apos;s at Risk
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-8">
              Every day you delay expert eBay management, you&apos;re missing out on potential revenue, stronger visibility, and long-term customer trust. Your Competitors are optimizing, are you?
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET EBAY ACCOUNT MANAGEMENT →</span>
                <span className="svc-btn-bottom">GET EBAY ACCOUNT MANAGEMENT →</span>
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
