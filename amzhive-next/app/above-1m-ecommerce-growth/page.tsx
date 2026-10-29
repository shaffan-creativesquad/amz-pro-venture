import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Above $1M Ecommerce Growth | AMZ Hive",
  description: "Scale your ecommerce business above $1M with AMZ Hive's expert growth strategies, account management, and data-driven optimization services.",
};

export default function Above1MEcommerceGrowth() {
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
      <section className="w-full py-20" style={{ backgroundColor: "#21242f" }}>
        <div className="max-w-[900px] mx-auto px-10 flex flex-col items-center text-center">

          {/* Top Tag */}
          <span className="inline-block mb-6 text-[12px] font-semibold uppercase tracking-widest border border-white/20 rounded-full px-5 py-2" style={{ color: "#E91C59" }}>
            For Brands Stuck Between $200K – $800K/mo
          </span>

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", color: "#ffffff" }}
          >
            SCALE YOUR BRAND{" "}
            <svg className="inline-block align-middle" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: "0.85em", height: "0.95em" }}>
              <defs>
                <clipPath id="cup-clip2">
                  <path d="M10 3 H30 L26.5 24 Q20 32 13.5 24 Z" />
                </clipPath>
                <linearGradient id="cup-gold" x1="10" y1="3" x2="32" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFE566" />
                  <stop offset="30%" stopColor="#FFC200" />
                  <stop offset="65%" stopColor="#E8880A" />
                  <stop offset="100%" stopColor="#C05A00" />
                </linearGradient>
                <linearGradient id="handle-gold" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                  <stop offset="0%" stopColor="#FFC200" />
                  <stop offset="100%" stopColor="#E8880A" />
                </linearGradient>
                <linearGradient id="base-gold" x1="12" y1="32" x2="28" y2="42" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFD44A" />
                  <stop offset="100%" stopColor="#C05A00" />
                </linearGradient>
                <linearGradient id="cup-shadow" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                  <stop offset="0%" stopColor="rgba(120,50,0,0.45)" />
                  <stop offset="40%" stopColor="rgba(0,0,0,0)" />
                </linearGradient>
              </defs>
              <g><circle cx="20" cy="3" r="1.5" fill="#FFE566" opacity="0.9" /><line x1="20" y1="1" x2="20" y2="5" stroke="#FFE566" strokeWidth="0.8" /><line x1="18" y1="3" x2="22" y2="3" stroke="#FFE566" strokeWidth="0.8" /></g>
              <path d="M10 3 H30 L26.5 24 Q20 32 13.5 24 Z" fill="url(#cup-gold)" />
              <path d="M10 3 H18 L16 24 Q14 29 13.5 24 Z" fill="url(#cup-shadow)" />
              <line x1="11.5" y1="10" x2="28.5" y2="10" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
              <line x1="12.5" y1="16" x2="27.5" y2="16" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
              <line x1="13.5" y1="21" x2="26.5" y2="21" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              <g clipPath="url(#cup-clip2)">
                <rect x="7" y="1" width="9" height="35" fill="rgba(255,255,255,0.42)" rx="2" />
              </g>
              <path d="M13 7 Q15 4.5 22 4" stroke="rgba(255,255,255,0.65)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M10 8 Q3.5 9 4 18 Q4.5 24 12.5 22.5" stroke="url(#handle-gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M10 8 Q3.5 9 4 18 Q4.5 24 12.5 22.5" stroke="rgba(255,220,80,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M30 8 Q36.5 9 36 18 Q35.5 24 27.5 22.5" stroke="url(#handle-gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M30 8 Q36.5 9 36 18 Q35.5 24 27.5 22.5" stroke="rgba(255,220,80,0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <g>
                <path d="M20 10 L21.4 14 H25.5 L22.3 16.4 L23.5 20.5 L20 18.2 L16.5 20.5 L17.7 16.4 L14.5 14 H18.6 Z" fill="rgba(255,255,255,0.92)" />
                <path d="M20 10 L21.4 14 H25.5 L22.3 16.4 L23.5 20.5 L20 18.2 L16.5 20.5 L17.7 16.4 L14.5 14 H18.6 Z" fill="rgba(255,235,100,0.55)" />
              </g>
              <rect x="17.5" y="30" width="5" height="6" fill="url(#base-gold)" rx="1" />
              <rect x="18.2" y="30" width="2" height="6" fill="rgba(255,220,80,0.3)" rx="0.5" />
              <rect x="11" y="35" width="18" height="5" rx="2.5" fill="url(#base-gold)" />
              <rect x="12.5" y="36" width="15" height="1.8" rx="0.9" fill="rgba(255,230,100,0.45)" />
              <rect x="11" y="38.5" width="18" height="1.5" rx="2.5" fill="rgba(120,50,0,0.3)" />
            </svg>
            {" "}TO{" "}
            <span style={{ color: "#E91C59" }}>A MILLION A MONTH</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[620px] mb-10">
            If your e-commerce growth has stalled, the problem isn&apos;t the market, it&apos;s the system underneath it. We find the leaks, rebuild what&apos;s broken, and add the sales channels that break the $1M Revenue ceiling.
          </p>

          {/* Platform Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { src: "/Amazon-Ads-Partner-Badge-1.webp", alt: "Amazon Ads Partner" },
              { src: "/Amazon-SPN-Badge-1.webp", alt: "Amazon SPN" },
              { src: "/Walmart-Marketplace-Badge-1.webp", alt: "Walmart Marketplace" },
              { src: "/Shopify-Badge-4.webp", alt: "Shopify" },
              { src: "/Tiktok-Badge-1.webp", alt: "TikTok Shop" },
            ].map((badge) => (
              <Image key={badge.alt} src={badge.src} alt={badge.alt} width={150} height={75} unoptimized className="h-16 w-auto object-contain" />
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-8 border-t border-white/10 w-full">
            {[
              { value: "340+", label: "Accounts Managed" },
              { value: "40%", label: "Avg. Monthly Growth Rate" },
              { value: "10", label: "Growth Channels" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="font-bold text-[42px] leading-none" style={{ color: "#E91C59" }}>{stat.value}</span>
                <span className="text-white/50 text-[13px] uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Growth Audit Section */}
      <section className="w-full pt-0 pb-0 overflow-hidden" style={{ backgroundColor: "#21242f" }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-10 mb-[-100px] relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Left */}
              <div className="flex-1 p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                <p className="text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: "#E91C59" }}>$1 Million Growth Audit</p>
                <h2 className="font-bold leading-tight mb-5 uppercase" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#1e293b" }}>
                  Find Out What&apos;s Standing Between Your E-Commerce Brand And $1M A Month
                </h2>
                <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
                  We score your business across the most critical levers that separate $1M brands from stuck ones. You&apos;ll see exactly which one is costing you the most revenue right now.
                </p>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#E91C59" }}>Avg. Ad Budget Wasted</span>
                    <span className="text-[13px] font-bold" style={{ color: "#E91C59" }}>40%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "40%", backgroundColor: "#E91C59" }} />
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="flex-1 p-12">
                <form action="/contact-us" method="GET" className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] font-semibold" style={{ color: "#1e293b" }}>Name</label>
                      <input type="text" name="name" className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#E91C59]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] font-semibold" style={{ color: "#1e293b" }}>Email</label>
                      <input type="email" name="email" className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#E91C59]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] font-semibold" style={{ color: "#1e293b" }}>Phone</label>
                      <input type="tel" name="phone" className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#E91C59]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[14px] font-semibold" style={{ color: "#1e293b" }}>Store Or Brand URL</label>
                      <input type="url" name="store_url" className="border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-gray-50 focus:outline-none focus:border-[#E91C59]" />
                    </div>
                  </div>
                  <button type="submit" className="w-full font-bold uppercase tracking-widest text-white rounded-lg py-4 text-[14px] hover:bg-black transition-colors" style={{ backgroundColor: "#E91C59" }}>
                    NEXT
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Revenue Leaks Section */}
      <section className="bg-white pt-[160px] pb-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <p className="text-center text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: "#E91C59" }}>What&apos;s Quietly Draining Your Revenue</p>
          <h2
            className="text-center font-bold mb-2 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 50px)", color: "#1e293b" }}
          >
            There&apos;s a Reason You&apos;re Stuck Below 7 Figures
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[3px] w-24 rounded-full" style={{ backgroundColor: "#E91C59" }} />
          </div>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[680px] mx-auto">
            Growth doesn&apos;t die from one big failure. It leaks away through a handful of small ones. If these feel familiar, the problem isn&apos;t effort. It&apos;s the system underneath.
          </p>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              {
                title: "Profit Disappearing Behind Rising Ad Costs",
                desc: "Sales and revenue look fine, but real margins are weak. Ad costs creep up every month while your top line stays flat. We rebuild ad accounts around what you keep, not what you spend.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E91C59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                ),
              },
              {
                title: "One Platform, One Point of Failure",
                desc: "If Amazon is your whole business, Amazon's next policy change is your whole risk. We move part of your revenue onto channels you actually control.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E91C59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
                ),
              },
              {
                title: "Listing Suspensions Keep Showing Up",
                desc: "One flagged listing can take down the product carrying most of your sales, with no notice. We monitor account health before it becomes a crisis, and fix it fast when it doesn't wait.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E91C59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                ),
              },
              {
                title: "Customers Buy Once and Disappear",
                desc: "Every sale that never repeats means you're paying full acquisition cost: that's renting sales, not building a brand. We build retention systems that turn one-time buyers into repeat customers.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E91C59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
              },
              {
                title: "Traffic That Isn't Turning Into Growth",
                desc: "You're getting clicks, but the customer count isn't moving. Something between the ad and the checkout is leaking. We find it and close it.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E91C59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                ),
              },
              {
                title: "Thin Margins Baked Into the Business",
                desc: "Sometimes the problem is in the math: what a customer is worth on their first order versus what it costs to win them. When that gap is too narrow, scaling makes the cash problem worse.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#E91C59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 0 0 7H6"/></svg>
                ),
              },
            ].map((item, i) => (
              <div key={item.title} className={`flex items-start gap-4 p-8 border-gray-200 ${i % 2 === 0 ? "border-r" : ""} ${i < 4 ? "border-b" : ""}`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#fde8ef" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[16px] mb-2 leading-snug" style={{ color: "#1e293b" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink" style={{ borderRadius: "9999px", padding: "14px 40px" }}>
              <span className="svc-btn-inner">
                <span className="svc-btn-top">SHOW ME MY REVENUE LEAKS →</span>
                <span className="svc-btn-bottom">SHOW ME MY REVENUE LEAKS →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* $1 Million Roadmap Section */}
      <section className="w-full py-24" style={{ backgroundColor: "#21242f" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block mb-5 text-[11px] font-bold uppercase tracking-widest border rounded-full px-5 py-2" style={{ color: "#E91C59", borderColor: "rgba(233,28,89,0.3)" }}>
              One Team, One System, One Channel
            </span>
            <h2
              className="font-bold leading-tight mb-5 uppercase"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4vw, 56px)", color: "#ffffff" }}
            >
              $1 Million Roadmap™
            </h2>
            <p className="text-white/55 text-[16px] max-w-[600px] mx-auto leading-relaxed">
              One team, one system, every channel. Built to take your brand from a stubborn plateau to dominating your niche.
            </p>
          </div>

          {/* Phases + Image */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* Left: 4 phase cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  phase: "01",
                  title: "Foundation",
                  subtitle: "Brand Clarity",
                  bullets: [
                    "Amazon listing fully optimized for search and conversion",
                    "PPC campaigns structured around margin, not vanity metrics",
                    "Account health locked down and monitored daily",
                  ],
                },
                {
                  phase: "02",
                  title: "Expansion",
                  subtitle: "New Marketplaces",
                  bullets: [
                    "Add Walmart, eBay, and TikTok Shop without extra overhead",
                    "Multi-channel inventory sync so nothing oversells",
                    "Platform-specific listing optimization for each channel",
                  ],
                },
                {
                  phase: "03",
                  title: "Ownership",
                  subtitle: "Your Own Website",
                  bullets: [
                    "Shopify store built and connected to your Amazon catalog",
                    "Email and SMS flows that bring customers back without ad spend",
                    "You own the customer relationship, not the marketplace",
                  ],
                },
                {
                  phase: "04",
                  title: "Domination",
                  subtitle: "Your Own Name",
                  bullets: [
                    "Brand registry, trademark, and A+ content locked in",
                    "Influencer and content channels driving organic discovery",
                    "Revenue no algorithm change can take away overnight",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="relative p-7 rounded-2xl overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* Phase number — large watermark */}
                  <span
                    className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none"
                    style={{ fontSize: "64px", color: "rgba(233,28,89,0.07)", fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                  >
                    {item.phase}
                  </span>

                  {/* Pink badge */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white" style={{ backgroundColor: "#E91C59" }}>
                      {item.phase}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#E91C59" }}>Phase {item.phase}</span>
                  </div>

                  <h3 className="font-bold mb-1" style={{ fontSize: "20px", color: "#ffffff" }}>{item.title}</h3>
                  <p className="text-[13px] font-semibold mb-5" style={{ color: "#E91C59" }}>{item.subtitle}</p>

                  <div className="space-y-2.5">
                    {item.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <svg className="flex-shrink-0 mt-0.5 w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="8" fill="rgba(233,28,89,0.15)" />
                          <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#E91C59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-white/50 text-[13px] leading-snug">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="flex-shrink-0 lg:w-[380px] flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden w-full" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Image
                  src="/Expansion-New-Marketplaces_-1.webp"
                  alt="Expansion — New Marketplaces"
                  width={380}
                  height={440}
                  unoptimized
                  className="w-full h-auto object-contain"
                />
              </div>
              <a href="/contact-us" className="svc-btn svc-btn-pink svc-btn-hover-white mt-8 w-full" style={{ textAlign: "center" }}>
                <span className="svc-btn-inner" style={{ textAlign: "center" }}>
                  <span className="svc-btn-top">START MY ROADMAP →</span>
                  <span className="svc-btn-bottom" style={{ left: 0, right: 0, textAlign: "center" }}>START MY ROADMAP →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  );
}
