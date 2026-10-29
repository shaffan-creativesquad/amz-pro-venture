import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Walmart Account Management | AMZ Pro Venture",
  description: "AI-powered Walmart account management service by AMZ Pro Venture. Grow your Walmart marketplace presence with expert listing, inventory, and ads management.",
};

export default function WalmartAccountManagement() {
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
            Need Expert Management To<br />Grow <span style={{ color: "#ff9900" }}>Walmart Sales?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[620px] mb-7 text-left">
            We manage every part of your Walmart seller account: listings, inventory, compliance, and more, so you can grow consistently without the stress.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Expert listing and inventory management",
              "Enhanced visibility and brand positioning",
              "Dedicated support from setup to scale",
              "Proactive policy compliance and issue resolution",
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
            LET'S BUILD YOUR WALMART GROWTH PLAN →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Main-Banner-3.webp"
              alt="Walmart Account Management"
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

      {/* Why Top Sellers Rely on AMZ Pro Venture Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Why Top Sellers Rely on AMZ Pro Venture for Walmart Account Management
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[640px] mx-auto">
              We don&apos;t just maintain your Walmart store; we turn it into a high-performing channel. Here&apos;s what sets us apart:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-14 items-center">

            {/* Left — features */}
            <div className="flex-1 space-y-8">
              {[
                {
                  title: "Proactive and Strategic Management",
                  desc: "No more guesswork. We create a roadmap for your account with weekly tracking, forecasting, and smart execution.",
                },
                {
                  title: "AI Tools for Higher Efficiency",
                  desc: "We use AI-powered optimization tools to manage various aspects of your account, ensuring accuracy and efficiency.",
                },
                {
                  title: "Growth-Driven Approach",
                  desc: "Our structured approach helps you launch, maintain, and grow your presence predictably and profitably.",
                },
                {
                  title: "Real Results That Matter",
                  desc: "We provide real results with smarter planning for higher ROI, expert support for peace of mind, and Walmart SEO for greater reach and sales.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold text-[18px] mb-2" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}

              <a href="/contact-us" className="inline-block svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">WALMART ACCOUNT MANAGEMENT →</span>
                  <span className="svc-btn-bottom">WALMART ACCOUNT MANAGEMENT →</span>
                </span>
              </a>
            </div>

            {/* Right — image */}
            <div className="flex-shrink-0 w-full lg:w-[500px]">
              <Image
                src="/Why-Sellers-Trust-SPCTEK-for-Walmart-Account-Management.webp"
                alt="Why Top Sellers Trust AMZ Pro Venture for Walmart"
                width={500}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* What You Risk Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — image */}
          <div className="flex-shrink-0 w-full lg:w-[480px]">
            <Image
              src="/Dont-Let-Poor-Account-Management-Cost-You-Sales.webp"
              alt="What You Risk With Poor Account Management"
              width={480}
              height={500}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right — content */}
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What You Risk With Poor Account Management
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-7">
              Running a Walmart store without expert help can lead to lost revenue and account risks. Here&apos;s what to avoid:
            </p>

            <div className="space-y-4 mb-7">
              {[
                "Missed sales from weak SEO or poor listing optimization",
                "Stranded inventory due to inaccurate data or late updates",
                "Policy violations and account flags that risk deactivation",
                "Disrupted cash flow from frozen sales or delayed payouts",
                "Low ratings and poor feedback from incomplete or inaccurate listings",
                "Listing suppressions that result in zero visibility",
                "Slow growth due to unmanaged compliance or inventory",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-5 h-5 mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900"/>
                    <path d="M6 12.5l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-[#67768e] text-[15px] leading-relaxed mb-8">
              AMZ Pro Venture keeps your Walmart account healthy, updated, and in full compliance, so you can grow without worry.
            </p>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET WALMART ACCOUNT MANAGEMENT →</span>
                <span className="svc-btn-bottom">GET WALMART ACCOUNT MANAGEMENT →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1200px] mx-auto px-10">

          <div className="text-center mb-12">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,42px)", color: "#000000" }}>
              Everything You Need for Walmart Success<br />in One Complete Plan
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[680px] mx-auto">
              AMZ Pro Venture handles every moving part of your Walmart account — so you can focus on growing your business, not managing the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Detailed Account Audit",
                desc: "A full review of your account health, listing gaps, policy flags, and growth opportunities before we begin.",
              },
              {
                title: "Product Listing Optimization",
                desc: "Keyword-rich titles, descriptions, and attributes crafted to improve search ranking and content scores.",
              },
              {
                title: "Catalog & Inventory Management",
                desc: "Bulk listing management, inventory monitoring, restock alerts, and catalog organization across your full range.",
              },
              {
                title: "Account Health Monitoring & Policy Compliance",
                desc: "Continuous tracking of your seller metrics with proactive steps to prevent violations and maintain good standing.",
              },
              {
                title: "Brand Protection & Setup Support",
                desc: "Assistance with Brand Portal setup and protecting your listings from unauthorized sellers and content changes.",
              },
              {
                title: "Product Launch Management",
                desc: "Strategic launch plans for new SKUs — including listing creation, keyword targeting, and early visibility campaigns.",
              },
              {
                title: "Fulfillment & Promotion Support",
                desc: "WFS onboarding guidance, promo setup, and fulfillment troubleshooting to keep orders flowing smoothly.",
              },
              {
                title: "One Listing Reinstatement per Month",
                desc: "We handle one suppressed or removed listing reinstatement per month as part of your standard management plan.",
              },
              {
                title: "Weekly Reporting & Insights",
                desc: "Stay in the loop with clear performance updates, KPIs, and strategic suggestions.",
              },
              {
                title: "Walmart SEO Strategy",
                desc: "We implement smart keyword strategies and refreshes to help your listings stay discoverable.",
              },
              {
                title: "Catalog Cleanup & Troubleshooting",
                desc: "We fix product variations, incomplete listings, and content errors to keep your store running smoothly.",
              },
              {
                title: "Full-Service Operations",
                desc: "Our team handles everything so you can focus on growth, not operational hassles.",
              },
            ].map((item, i) => {
              const dark = i % 2 === 1;
              return (
                <div key={item.title} className="rounded-2xl p-7 flex flex-col gap-4" style={{ backgroundColor: dark ? "#000000" : "#f4f4f4" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#ff9900" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[15px] leading-snug mb-2" style={{ color: dark ? "#ffffff" : "#000000" }}>{item.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.65)" : "#67768e" }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-12">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START GROWING ON WALMART →</span>
                <span className="svc-btn-bottom">START GROWING ON WALMART →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Optional Add-On Services */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2 className="font-bold text-center mb-14" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            Optional Add-On Services
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-1">
              <div className="mb-10">
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#000000" }}>Walmart PPC Management</h3>
                <p className="text-[#67768e] text-[16px] leading-relaxed">
                  Our team sets up and manages ads that are targeted, data-backed, and focused on driving conversions.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#000000" }}>Customer Support Assistance</h3>
                <p className="text-[#67768e] text-[16px] leading-relaxed">
                  We handle customer messages and feedback to protect your brand reputation and maintain high seller ratings.
                </p>
              </div>
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">GET ADD-ONS →</span>
                  <span className="svc-btn-bottom">GET ADD-ONS →</span>
                </span>
              </a>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[50%]">
              <Image src="/Add-ons.webp" alt="Optional Add-On Services" width={600} height={480} unoptimized className="w-full h-auto object-contain" />
            </div>

          </div>
        </div>
      </section>

      {/* Walmart Seller Account Setup */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

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
                  <span className="svc-btn-top">CONTACT US TO GET STARTED →</span>
                  <span className="svc-btn-bottom">CONTACT US TO GET STARTED →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What Sets AMZ Pro Venture Apart */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2 className="font-bold text-center leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            What Sets <span style={{ color: "#ff9900" }}>AMZ Pro Venture Apart</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] max-w-[620px] mx-auto mb-12">
            We&apos;re not here to maintain, we&apos;re here to multiply. If you&apos;re aiming for real scale, you&apos;re in the right place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Ad & Catalog Backups",
                desc: "Your data is secure and backed up, with easy access to past campaigns and listing versions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M32 28a6 6 0 10-11.9-1H18a4 4 0 100 8h14a4 4 0 000-8z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M24 22v6M21 25l3-3 3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Walmart Support Case Management",
                desc: "Our team communicates with Walmart support to resolve listing, shipping, or policy issues quickly.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <circle cx="24" cy="20" r="4" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M16 34c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <circle cx="32" cy="16" r="3" fill="none" stroke="#fff" strokeWidth="1.5"/>
                    <circle cx="16" cy="16" r="3" fill="none" stroke="#fff" strokeWidth="1.5"/>
                    <path d="M36 28c0-2.8-1.8-5.2-4.4-6.2M12 28c0-2.8 1.8-5.2 4.4-6.2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                  </svg>
                ),
              },
              {
                title: "Bi-Weekly Strategy Calls",
                desc: "We stay aligned through regular check-ins and ongoing support from our dedicated account managers.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M24 14v2M24 32v2M14 24h2M32 24h2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="24" cy="24" r="6" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M24 21v3l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Restock Recommendations",
                desc: "We provide insights and reminders to help you reorder inventory at the right time.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M16 28h16M16 32h10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="14" y="20" width="20" height="16" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M20 20v-2a4 4 0 018 0v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M22 25l1.5 1.5L26 23" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Seller Center Support",
                desc: "From shipping settings to listing uploads, we take care of the technical side so you don't have to.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#ff9900"/>
                    <path d="M18 20h12M18 24h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 16h20a2 2 0 012 2v10a2 2 0 01-2 2h-8l-4 4v-4h-8a2 2 0 01-2-2V18a2 2 0 012-2z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
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
                <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-3xl px-10 py-12" style={{ backgroundColor: "#f4f4f4" }}>

            <h2 className="font-bold text-center mb-10" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px,3vw,36px)", color: "#000000" }}>
              Trusted by Walmart Sellers Worldwide
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-10">
              <StatsCounter />

              {/* Right CTA card */}
              <div className="flex-shrink-0 bg-white rounded-2xl px-8 py-8 flex flex-col items-center text-center gap-3 w-full lg:w-[220px]" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#ff9900" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-8 h-8">
                    <circle cx="20" cy="14" r="7" fill="#fff"/>
                    <path d="M6 36c0-7.7 6.3-14 14-14s14 6.3 14 14" fill="#fff"/>
                  </svg>
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#67768e" }}>Linda Davis<br/>Account Director</p>
                <h3 className="font-bold text-[18px] leading-snug" style={{ color: "#ff9900" }}>Need Expert Advice?</h3>
                <p className="text-[12px]" style={{ color: "#67768e" }}>Book Your Strategy Call Today!</p>
                <a href="/contact-us" className="svc-btn svc-btn-pink mt-2" style={{ fontSize: "12px" }}>
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">BOOK A CALL →</span>
                    <span className="svc-btn-bottom">BOOK A CALL →</span>
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Get a Free Walmart Account Audit
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-8">
              Start your Walmart success journey with a free Walmart account audit and experience our account management expertise in action.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Get Free Account Audit Now →</span>
                <span className="svc-btn-bottom">Get Free Account Audit Now →</span>
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
