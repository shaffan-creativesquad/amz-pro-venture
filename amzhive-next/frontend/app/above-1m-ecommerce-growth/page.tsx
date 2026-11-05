import LandingNavbar from "../components/LandingNavbar";
import LandingFooter from "../components/LandingFooter";
import Image from "next/image";
import FAQSection from "./FAQSection";
import FadeIn from "../components/FadeIn";
import GrowthAuditForm from "./GrowthAuditForm";

export const metadata = {
  title: "Grow Your Brand to a Million a Month | AMZ Pro Venture",
  description: "When e-commerce growth stalls, we find the leaks, rebuild what's broken, and add the sales channels that help you break through the $1M revenue ceiling.",
};

export default function Above1MEcommerceGrowth() {
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
      <LandingNavbar />

      {/* Hero Section */}
      <section id="hero" className="w-full py-20" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[900px] mx-auto px-10 flex flex-col items-center text-center">

          {/* Top Tag */}
          <span className="inline-block mb-6 text-[12px] font-semibold uppercase tracking-widest border border-white/20 rounded-full px-5 py-2" style={{ color: "#ff9900" }}>
            For Brands Stuck Between $200K – $800K/Mo
          </span>

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase text-center lg:text-left"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(36px, 5vw, 64px)", color: "#ffffff" }}
          >
            GROW YOUR BRAND{" "}
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
            <span style={{ color: "#ff9900" }}>A MILLION A MONTH</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[620px] mb-10">
            When e-commerce growth stalls, the market is rarely the problem. The system behind your brand is. As an Amazon growth agency, we find the leaks, rebuild what’s broken, and add the sales channels that help you break through the $1M revenue ceiling.
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
                <span className="font-bold text-[42px] leading-none" style={{ color: "#ff9900" }}>{stat.value}</span>
                <span className="text-white/50 text-[13px] uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Growth Audit Section */}
      <section id="audit" className="w-full pt-0 pb-0 overflow-hidden" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-10 mb-0 md:mb-[-100px] relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Left */}
              <div className="flex-1 p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                <p className="text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: "#ff9900" }}>$1 Million Growth Audit</p>
                <h2 className="font-bold leading-tight mb-5 uppercase" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#000000" }}>
                  Discover What’s Keeping Your Brand From $1M a Month
                </h2>
                <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
                  We score your business across the key levers that separate $1M brands from stalled ones. You’ll see exactly which gap is costing you the most revenue right now, and where to start fixing it.
                </p>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#ff9900" }}>Avg. Ad Budget Wasted</span>
                    <span className="text-[13px] font-bold" style={{ color: "#ff9900" }}>40%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "40%", backgroundColor: "#ff9900" }} />
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <div className="flex-1 p-12">
                <GrowthAuditForm />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Revenue Leaks Section */}
      <section id="revenue-leaks" className="bg-white pt-10 md:pt-[160px] pb-20 w-full">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <FadeIn direction="up"><p className="text-center text-[12px] font-bold uppercase tracking-widest mb-4" style={{ color: "#ff9900" }}>What’s Quietly Draining Your Revenue</p></FadeIn>
          <FadeIn direction="up" delay={0.08}>
          <h2
            className="text-center font-bold mb-2 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 4vw, 50px)", color: "#000000" }}
          >
            Why Your Brand Hasn’t Crossed 7 Figures Yet
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[3px] w-24 rounded-full" style={{ backgroundColor: "#ff9900" }} />
          </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.14}>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[680px] mx-auto">
            Growth rarely collapses from one big mistake. It slips away through a handful of small ones. If these sound familiar, the issue isn’t effort. It’s the system underneath.
          </p>
          </FadeIn>

          <div className="rounded-2xl border border-gray-200 overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
            {[
              {
                title: "Rising Ad Costs, Shrinking Profit",
                desc: "Sales may look good, but little profit is left after expenses. Ad costs keep going up, while sales stay about the same. We focus on getting more out of your ad spend, so you keep more of what you earn.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                ),
              },
              {
                title: "One Platform, One Point of Failure",
                desc: "If Amazon is your entire business, one policy change puts everything at risk. We shift part of your revenue onto channels you actually control",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>
                ),
              },
              {
                title: "Listing Suspensions That Keep Returning",
                desc: "One flagged listing can take down the product driving most of your sales, without warning. We watch your account health closely and act fast when issues appear.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                ),
              },
              {
                title: "One-Time Buyers Who Never Return",
                desc: "Every customer who doesn’t come back means paying full acquisition cost again. We build retention systems that turn first-time buyers into loyal repeat customers.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
              },
              {
                title: "Traffic That Doesn’t Convert",
                desc: "The clicks are coming in, but your customer count isn’t growing. Something between the ad and checkout is leaking. We find it and fix it.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                ),
              },
              {
                title: "Margins Too Thin to Scale",
                desc: "Sometimes, the numbers just don't add up. You may be spending more to get a customer than you earn from their first order. When that happens, growing your business can put even more pressure on your cash flow.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ff9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 0 0 7H6"/></svg>
                ),
              },
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.07}>
              <div className={`flex items-start gap-4 p-8 border-gray-200 h-full ${i % 2 === 0 ? "border-r" : ""} ${i < 4 ? "border-b" : ""}`}>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#fde8ef" }}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[16px] mb-2 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
              </FadeIn>
            ))}
            </div>
          </div>

          <FadeIn direction="up">
          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink" style={{ borderRadius: "9999px", padding: "14px 40px" }}>
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Show Me My Revenue Leaks</span>
                <span className="svc-btn-bottom">Show Me My Revenue Leaks</span>
              </span>
            </a>
          </div>
          </FadeIn>

        </div>
      </section>

      {/* $1 Million Roadmap Section */}
      <section id="roadmap" className="w-full py-24" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* Header */}
          <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="inline-block mb-5 text-[11px] font-bold uppercase tracking-widest border rounded-full px-5 py-2" style={{ color: "#ff9900", borderColor: "rgba(233,28,89,0.3)" }}>
              One Team, One System, Every Channel
            </span>
            <h2
              className="font-bold leading-tight mb-5 uppercase"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4vw, 56px)", color: "#ffffff" }}
            >
              Your $1M Roadmap™
            </h2>
            <p className="text-white/55 text-[16px] max-w-[600px] mx-auto leading-relaxed">
              One team and one proven system across every channel, built to move your brand from a stubborn plateau to leading its niche through focused Amazon brand scaling.
            </p>
          </div>
          </FadeIn>

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
                    "Amazon listings fully optimized for search and conversion.",
                    "PPC campaigns built around margin, not vanity metrics",
                    "Account health secured and monitored daily.",
                  ],
                },
                {
                  phase: "02",
                  title: "Expansion",
                  subtitle: "New Marketplaces",
                  bullets: [
                    "Launch on Walmart, eBay, and TikTok Shop without extra overhead.",
                    "Multi-channel inventory sync so nothing oversells",
                    "Listings optimized for each platform",
                  ],
                },
                {
                  phase: "03",
                  title: "Ownership",
                  subtitle: "Your Own Website",
                  bullets: [
                    "Shopify store built and connected to your Amazon catalog.",
                    "Email and SMS flows that bring customers back without ad spend.",
                    "You own the customer relationship, not the marketplace.",
                  ],
                },
                {
                  phase: "04",
                  title: "Domination",
                  subtitle: "Your Own Name",
                  bullets: [
                    "Brand Registry, trademark, and A+ Content secured",
                    "Influencer and content channels driving organic discovery",
                    "Revenue that no algorithm change can take away overnight",
                  ],
                },
              ].map((item, i) => (
                <FadeIn key={item.phase} direction="up" delay={i * 0.08}>
                <div
                  className="relative p-7 rounded-2xl overflow-hidden h-full"
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
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white" style={{ backgroundColor: "#ff9900" }}>
                      {item.phase}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#ff9900" }}>Phase {item.phase}</span>
                  </div>

                  <h3 className="font-bold mb-1" style={{ fontSize: "20px", color: "#ffffff" }}>{item.title}</h3>
                  <p className="text-[13px] font-semibold mb-5" style={{ color: "#ff9900" }}>{item.subtitle}</p>

                  <div className="space-y-2.5">
                    {item.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2.5">
                        <svg className="flex-shrink-0 mt-0.5 w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="8" fill="rgba(233,28,89,0.15)" />
                          <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-white/50 text-[13px] leading-snug">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>

            {/* Right: Image */}
            <FadeIn direction="left" className="flex-shrink-0 lg:w-[380px] flex flex-col items-center">
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
                  <span className="svc-btn-top">Start My Roadmap</span>
                  <span className="svc-btn-bottom" style={{ left: 0, right: 0, textAlign: "center" }}>Start My Roadmap</span>
                </span>
              </a>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Eggs In One Basket Section */}
      <section id="multi-channel" className="w-full overflow-hidden" style={{ background: "linear-gradient(135deg, #fff8f0 0%, #ffffff 60%)" }}>
        <div className="w-full flex flex-col lg:flex-row items-center">

          {/* Left: Text */}
          <FadeIn direction="right" className="flex-1 py-16 pl-10 pr-8 lg:pl-16">
            <h2
              className="font-black leading-tight mb-6 uppercase text-center lg:text-left"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 3.5vw, 54px)", color: "#000000" }}
            >
              Selling Only on Amazon =<br />
              <span style={{
                color: "#ff9900",
                textDecoration: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "#000000",
                textDecorationThickness: "3px",
                textUnderlineOffset: "8px",
              }}>Every Egg in One Basket…</span>
              <span className="block mt-3">One Bump and They All Crack at Once.</span>
            </h2>
            <p className="text-[#67768e] text-[15px] leading-relaxed mb-8 max-w-[480px] text-center lg:text-left mx-auto lg:mx-0">
              We expand your products onto other marketplaces, your own DTC store, and TikTok Shop, so one rough day on Amazon stays just that- not the end of your story. It’s the safest way to scale your Amazon business into a lasting 7-figure Amazon brand.
            </p>
            <div className="flex justify-center lg:justify-start">
            <a href="/contact-us" className="svc-btn svc-btn-pink" style={{ borderRadius: "9999px", padding: "14px 40px" }}>
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Go Multi-Channel Now</span>
                <span className="svc-btn-bottom">Go Multi-Channel Now</span>
              </span>
            </a>
            </div>
          </FadeIn>

          {/* Right: GIF — fills to edge */}
          <FadeIn direction="left" className="flex-1 flex items-end justify-end self-stretch">
            <Image
              src="/eggs.gif"
              alt="All eggs in one basket"
              width={800}
              height={500}
              unoptimized
              className="w-full h-full object-cover object-left"
            />
          </FadeIn>

        </div>
      </section>

      <FAQSection />

      <LandingFooter />
    </main>
  );
}
