import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Walmart Listing Creation | AMZ Pro Venture",
  description: "AI-optimized Walmart listing creation service by AMZ Pro Venture. Get keyword-rich, high-converting product listings that rank higher and sell more on Walmart Marketplace.",
};

export default function WalmartListingCreation() {
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-0 flex flex-col items-start text-left">

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(36px, 5vw, 58px)", color: "#ffffff" }}
          >
            Want Better Walmart Listing<br /><span style={{ color: "#ff9900" }}>Visibility &amp; Sales?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[620px] mb-7 text-left">
            Your product is great, but if your listing doesn&apos;t convert, you&apos;re leaving money on the table.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Strategic keyword & competitor analysis",
              "SEO-optimized titles, features, and descriptions",
              "Enhanced backend search terms and item specs 5.0",
              "High-quality, enhanced listing images",
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
            GET OPTIMIZED WALMART LISTINGS ?
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-60px] sm:mb-[-120px] lg:mb-[-180px] self-center">
            <Image
              src="/main-banner-1.webp"
              alt="Walmart Listing Creation"
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

      {/* What Is Walmart Listing Optimization */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                What Is Walmart Listing <span style={{ color: "#ff9900" }}>Optimization?</span>
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed">
                Walmart listing optimization is the process of enhancing your product listings, both front-end and back-end, to improve your ranking in search results, attract more views, and drive conversions. It directly impacts your visibility, traffic, sales performance, and chances of winning the Walmart Buy Box.
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[55%]">
              <Image src="/What-Is-Walmart-Listing-Optimization.webp" alt="What Is Walmart Listing Optimization" width={640} height={480} unoptimized className="w-full h-auto object-contain" />
            </div>

          </div>
        </div>
      </section>

      {/* Why Walmart Listing Optimization Matters */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Why Walmart Listing Optimization <span style={{ color: "#ff9900" }}>Matters</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[720px] mx-auto">
              Without optimization, your listings are invisible. Since the Walmart algorithm constantly evolves, Walmart search optimization is an ongoing strategy. We help you get there and maintain the Listing Quality score (LQS) to keep you on top.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image src="/Dont-Let-Poor-Account-Management-Cost-You-Sales.webp" alt="Why Walmart Listing Optimization Matters" width={560} height={520} unoptimized className="w-full h-auto object-contain" />
            </div>

            <div className="flex-1 space-y-8">
              {[
                {
                  title: "Increase Visibility & Ranking",
                  desc: "SEO-optimized listings rank higher in Walmart's search. Strategic keywords, compelling titles, and professional images improve Walmart product discoverability.",
                },
                {
                  title: "Turn Shoppers Into Customers",
                  desc: "An optimized listing does more than get clicks; it drives conversions. Benefit-focused copy, clear product details, and high-quality visuals remove purchase objections to boost your sales.",
                },
                {
                  title: "Build Brand Credibility & Loyalty",
                  desc: "Professional listings establish trust. Complete product information, accurate specifications, and engaging content lead to better reviews and repeat customers.",
                },
                {
                  title: "Stay Compliant & Avoid Penalties",
                  desc: "Keep your listings active and performing with optimization that follows Walmart's latest guidelines. No unpublished listings or hidden traffic losses.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold text-[19px] mb-2" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}

              <a href="/contact-us" className="svc-btn svc-btn-pink inline-block">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">OPTIMIZE PRODUCT LISTINGS ?</span>
                  <span className="svc-btn-bottom">OPTIMIZE PRODUCT LISTINGS ?</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What&apos;s Included in Our Walmart Listing Creation and <span style={{ color: "#ff9900" }}>Optimization Services</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[740px] mx-auto">
              We deliver full-scope Walmart listing creation and optimization tailored to your product, category, and customer base. Our Walmart listing strategy is designed to increase rankings and convert traffic into revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {[
              {
                title: "Keyword & Competitor Research",
                desc: "We analyze your top competitors and uncover keyword gaps using AI tools and Helium 10. This ensures we're targeting short and long-tail terms with high buying intent and real ranking opportunities.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="21" cy="21" r="7" fill="none" stroke="#fff" strokeWidth="2.2"/>
                    <path d="M26.5 26.5l5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M17 21h8M21 17v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Product Title Optimization",
                desc: "Your title will be SEO-rich, easy to read, and fully compliant with Walmart's ever-evolving rules. We tailor it to emphasize key product benefits, use cases, and top search terms.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M15 18h18M15 24h14M15 30h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M34 28l-2 2 2 2 4-4-4-4-2 2z" fill="#fff"/>
                  </svg>
                ),
              },
              {
                title: "Bullet Points That Sell",
                desc: "We craft bullet points designed for both customer intent and Walmart search engine optimization. Each bullet is structured to highlight benefits, address pain points, and communicate USPs.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="17" cy="18" r="2" fill="#fff"/>
                    <circle cx="17" cy="24" r="2" fill="#fff"/>
                    <circle cx="17" cy="30" r="2" fill="#fff"/>
                    <path d="M22 18h10M22 24h10M22 30h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Enhanced Product Description",
                desc: "Our Walmart product description optimization aligns every word with Walmart's search engine and customer behaviour. The copy is both informative and persuasive.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <rect x="14" y="14" width="20" height="20" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M18 20h12M18 24h12M18 28h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M30 30l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Backend Search Terms Optimization",
                desc: "Using keyword data from trusted tools and actual customer behavior, we optimize your backend terms to maximize visibility without redundancy.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="24" cy="24" r="7" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M29 29l4 4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M20 24h8M24 20v8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Fully Optimized Listing Images",
                desc: "You'll get fully optimized listing images designed to speak for your product, ranging from lifestyle shots to infographics that highlight features, benefits, and key differentiators.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <rect x="13" y="16" width="22" height="16" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
                    <circle cx="19" cy="22" r="2.5" fill="#fff"/>
                    <path d="M13 28l7-5 5 4 3-3 7 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                ),
              },
            ].map((item, i) => {
              const dark = i % 2 === 1;
              return (
                <div key={item.title} className="rounded-2xl p-8" style={{ backgroundColor: dark ? "#000000" : "#f4f4f4" }}>
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
                <span className="svc-btn-top">GET OPTIMIZED WALMART LISTINGS ?</span>
                <span className="svc-btn-bottom">GET OPTIMIZED WALMART LISTINGS ?</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Walmart Seller Account Setup */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <h2 className="font-bold text-center leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            Need Help Setting Up Your Walmart Seller<br />Account The Right Way
          </h2>
          <p className="text-center text-[#67768e] text-[16px] max-w-[680px] mx-auto mb-14">
            Want to sell to millions on Walmart.com? Setting up your Walmart Seller Central account is the first step. We guide you through the entire process, helping you meet Walmart&apos;s requirements without delays.
          </p>

          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image src="/Need-Help-Setting-Up-Your-Walmart-Seller-Account-The-Right-Way.webp" alt="Walmart Seller Account Setup" width={560} height={480} unoptimized className="w-full h-auto object-contain" />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-[22px] mb-3" style={{ color: "#000000" }}>What You&apos;ll Need</h3>
              <p className="text-[#67768e] text-[15px] mb-5">To register successfully, Walmart requires the following:</p>
              <div className="space-y-3 mb-8">
                {[
                  "Business Tax ID or Business License",
                  "Proof of Business Address",
                  "History of selling on marketplaces (Amazon, eBay, etc.)",
                  "Product listings with GTINs/UPCs and a GS1 Company Prefix",
                  "Compliance readiness for Walmart Fulfillment Services (WFS)",
                  "A structured Walmart-ready product catalog",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[#000000] text-[15px]">{item}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-[22px] mb-3" style={{ color: "#000000" }}>How We Help</h3>
              <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
                You provide the documents, and we provide our expert guidance every step of the way. From documentation checks to catalog formatting and compliance prep, we make sure your account setup is smooth, accurate, and ready for approval.
              </p>

              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">CONTACT US TO GET STARTED ?</span>
                  <span className="svc-btn-bottom">CONTACT US TO GET STARTED ?</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Why Partner with AMZ Pro Venture */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <h2 className="font-bold text-center leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            Why Partner with AMZ Pro Venture for <span style={{ color: "#ff9900" }}>Walmart Success?</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] max-w-[700px] mx-auto mb-12">
            We go beyond surface-level optimization, applying a structured, data-informed approach designed to improve visibility, increase conversions, and drive long-term growth.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                title: "Proven Track Record",
                desc: "With hundreds of optimized listings and more than a million dollars in measurable sales impact. We've helped brands, from solo sellers to aggregators, hit their next level on Walmart.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 mb-5" fill="none">
                    <path d="M4 26V18M10 26V12M16 26V16M22 26V8M28 26V12" stroke="#ff9900" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M4 12l6-5 6 4 6-6 6 4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Data-Driven Strategy",
                desc: "We use premium tools like Helium 10, Search Insights, and real customer query data to inform every decision. No guessing. Just smart, ROI-focused execution.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 mb-5" fill="none">
                    <rect x="3" y="8" width="6" height="18" rx="1" fill="#ff9900"/>
                    <rect x="13" y="14" width="6" height="12" rx="1" fill="#ff9900"/>
                    <rect x="23" y="4" width="6" height="22" rx="1" fill="#ff9900"/>
                    <circle cx="24" cy="9" r="3" fill="none" stroke="#ff9900" strokeWidth="1.5"/>
                  </svg>
                ),
              },
              {
                title: "Full-Scope Listing Expertise",
                desc: "We handle everything, from front-end like titles, bullets, A+ Content, and images, to back-end like search term optimization, indexing strategies, and compliance checks.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 mb-5" fill="none">
                    <circle cx="16" cy="16" r="7" stroke="#ff9900" strokeWidth="2"/>
                    <path d="M16 6v3M16 23v3M6 16h3M23 16h3M9.2 9.2l2.1 2.1M20.7 20.7l2.1 2.1M9.2 22.8l2.1-2.1M20.7 11.3l2.1-2.1" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 border border-gray-200" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                {item.icon}
                <h3 className="font-bold text-[17px] mb-3" style={{ color: "#ff9900" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[760px] mx-auto mb-12">
            {[
              {
                title: "Client-Centric, Growth-Focused Partnership",
                desc: "We're not a one-size-fits-all shop. We tailor every project, communicate clearly, and move fast, because your time (and your listing's performance) matters.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 mb-5" fill="none">
                    <circle cx="16" cy="11" r="4" stroke="#ff9900" strokeWidth="2"/>
                    <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="6" cy="12" r="3" stroke="#ff9900" strokeWidth="1.5"/>
                    <path d="M2 24c0-2.8 1.8-5.1 4.2-5.9" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="26" cy="12" r="3" stroke="#ff9900" strokeWidth="1.5"/>
                    <path d="M30 24c0-2.8-1.8-5.1-4.2-5.9" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Transparent Reporting & Ongoing Partnership",
                desc: "We work with a dedicated point of contact and provide clear, weekly progress updates so you always know where your listing stands. Expect clear communication and full transparency in how we work.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 mb-5" fill="none">
                    <rect x="4" y="6" width="24" height="20" rx="2" stroke="#ff9900" strokeWidth="2"/>
                    <path d="M9 13h14M9 18h10" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 6V4M20 6V4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 border border-gray-200" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                {item.icon}
                <h3 className="font-bold text-[17px] mb-3" style={{ color: "#ff9900" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET OPTIMIZED WALMART LISTINGS ?</span>
                <span className="svc-btn-bottom">GET OPTIMIZED WALMART LISTINGS ?</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What We Need From You To Get Started */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left — image placeholder */}
            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/What-We-Need-From-You-to-Deliver-the-Best-Results.webp"
                alt="What We Need From You To Get Started"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right — content */}
            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                What We Need From You<br />To Get Started
              </h2>
              <p className="text-[#67768e] text-[16px] mb-7">
                To create your optimized Walmart listing, we will need:
              </p>

              <div className="space-y-4 mb-7">
                {[
                  { bold: "Seller Central access:", text: "Secondary user permissions recommended for security" },
                  { bold: "Product information:", text: "Product features, benefits, USPs, and pricing strategy" },
                  { bold: "Product images:", text: "High-res main image on white background + lifestyle shots" },
                  { bold: "Brand guidelines:", text: "Tone, colors, and messaging preferences for consistency" },
                  { bold: "Competitor Listings (Optional):", text: "Helpful for competitive analysis and positioning" },
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

              <p className="text-[#67768e] text-[14px] leading-relaxed mb-8">
                <span className="font-semibold" style={{ color: "#000000" }}>Quick Note:</span> We understand gathering these details can be a process. Don&apos;t worry, our team will guide you through exactly what&apos;s needed for your specific products.
              </p>

              <a href="/contact-us" className="svc-btn">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">BOOK A FREE CONSULTATION ?</span>
                  <span className="svc-btn-bottom">BOOK A FREE CONSULTATION ?</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Don&apos;t Let Underperforming<br />Listings Hold You Back
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[600px] mx-auto mb-8">
              High-converting listings can generate $200K+ in monthly sales. We&apos;ll help transform your product into a top seller. Ready to unlock your listings&apos; full potential?
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">OPTIMIZE WALMART LISTINGS TODAY ?</span>
                <span className="svc-btn-bottom">OPTIMIZE WALMART LISTINGS TODAY ?</span>
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
