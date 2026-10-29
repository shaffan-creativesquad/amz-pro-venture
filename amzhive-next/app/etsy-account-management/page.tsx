import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";

export const metadata = {
  title: "Etsy Account Management | AMZ Hive",
  description: "AI-powered Etsy Account Management service by AMZ Hive. Grow your Etsy shop with expert listing optimization, ads management, and full-service account management.",
};

export default function EtsyAccountManagement() {
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
            ARE YOU LOSING ETSY<br /><span style={{ color: "#E91C59" }}>SALES TO COMPETITORS?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[620px] mb-7 text-left">
            We manage every aspect of your Etsy business, from listing creation to shop health, to ensure fast, compliant, and sustainable growth.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Streamlined inventory, catalog & order workflows",
              "Expert support from launch to scale",
              "Proactive monitoring of Etsy metrics (Shop Performance)",
              "Full Etsy policy compliance & dispute handling",
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
            LET&apos;S BUILD YOUR ETSY GROWTH PLAN →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Main-Banner-5.webp"
              alt="Etsy Account Management"
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

      {/* Why Top Etsy Sellers Trust AMZ Hive */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-12">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Why Top Etsy Sellers Trust AMZ Hive for Expert <span style={{ color: "#E91C59" }}>Account Management</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[720px] mx-auto">
              We manage every aspect of your Etsy shop for optimum performance. Our approach is tailored specifically to the unique, creative nature of Etsy.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-1 space-y-6">
              {[
                { title: "Data-Driven and Proactive Management", desc: "We plan ahead, forecasting promotions, optimizing seasonal cycles, and refining listings for long-term success on Etsy's search and discovery ecosystem." },
                { title: "Etsy-Specific SEO & Listing Optimization", desc: "Optimized titles, tags, item descriptions, attributes, and high-quality images that improve visibility in Etsy search and appeal to buyers." },
                { title: "Visual Branding & Shop Design", desc: "We create cohesive Etsy shop banners, logos, about pages, and section displays to express your brand story and convert browsers into buyers." },
                { title: "Automation Tools", desc: "We use automation tools to manage repetitive tasks like order tracking, inventory updates, and messaging, enabling faster operations and fewer errors." },
                { title: "Measurable Impact", desc: "We deliver real results that show measurable growth in the key areas of business. Our regular reporting helps you track performance over time." },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[14px]" style={{ backgroundColor: "#E91C59" }}>
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[16px] mb-1" style={{ color: "#1e293b" }}>{item.title}:</h3>
                    <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <a href="/contact-us" className="svc-btn svc-btn-pink inline-block mt-4">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">MANAGE MY ETSY ACCOUNT →</span>
                  <span className="svc-btn-bottom">MANAGE MY ETSY ACCOUNT →</span>
                </span>
              </a>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/Why-Top-Etsy-Sellers-Trust-SPCTEK-for-Expert-Account-Management.webp"
                alt="Why Top Etsy Sellers Trust AMZ Hive"
                width={560}
                height={560}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* What You Risk Without Expert Etsy Management */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image src="/Dont-Let-Poor-Account-Management-Cost-You-Sales.webp" alt="What You Risk Without Expert Etsy Management" width={560} height={480} unoptimized className="w-full h-auto object-contain" />
            </div>

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
                What You Risk Without Expert <span style={{ color: "#E91C59" }}>Etsy Management</span>
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed mb-7">
                Mismanaging your Etsy shop not only hurts your revenue, but it can also damage your brand image and account standings. Here&apos;s what you risk without expert management:
              </p>

              <div className="space-y-4 mb-7">
                {[
                  "Suppressed listings due to missing keywords or tags",
                  "Lower shop performance scores, losing search rank, and visibility",
                  "Negative feedback handling issues, risking Star Seller eligibility",
                  "Reduced buyer trust due to slow order fulfillment or ineffective communication",
                  "Lost seasonal momentum due to missed promotional calendar opportunities",
                  "Policy violations and IP issues leading to account suspension",
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
                We help you keep your Etsy shop healthy, visible, and compliant so you can grow your business without worry.
              </p>

              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">GET ETSY ACCOUNT MANAGEMENT →</span>
                  <span className="svc-btn-bottom">GET ETSY ACCOUNT MANAGEMENT →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What's Included in Our Monthly Etsy Account Management Plan */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-14">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              What&apos;s Included in Our Monthly Etsy Account <span style={{ color: "#E91C59" }}>Management Plan</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[740px] mx-auto">
              Our service offers everything you need to run a thriving Etsy shop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {[
              {
                title: "Shop Setup & Onboarding",
                desc: "We provide a complete setup of your Etsy shop, including branding, shipping profiles, payment settings, store sections, about page, and shop policies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M14 28l10-14 10 14H14z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M20 28v6h8v-6" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M22 34v-4h4v4" fill="none" stroke="#fff" strokeWidth="1.5"/>
                  </svg>
                ),
              },
              {
                title: "Listing Creation & Optimization",
                desc: "We create titles, keyword tags, item specifics, descriptions, and images optimized for Etsy search and buyer behavior.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <rect x="14" y="13" width="20" height="22" rx="2" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M18 19h12M18 23h12M18 27h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Inventory & Order Management",
                desc: "We provide real-time stock syncing, fulfillment coordination, shipping label setup, automatic tracking updates, and order issue resolution.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <rect x="13" y="18" width="9" height="9" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <rect x="26" y="18" width="9" height="9" rx="1" fill="none" stroke="#fff" strokeWidth="2"/>
                    <path d="M16 31h16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M24 14v4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Shop Promotions & Advertising",
                desc: "We set up and manage Etsy Ads, sales events, coupon strategies, and seasonal promotions to increase traffic and conversions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M14 28c0-6 6-10 10-10s10 4 10 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 33l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24 14v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Data Analytics & Weekly Reports",
                desc: "Our weekly reports offer actionable insights and include a performance dashboard tracking to monitor views, favorites, sales, conversions, ROI, and other metrics.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M14 34V26M20 34V20M26 34V24M32 34V16" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M14 20l6-5 6 4 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Policy Compliance Monitoring",
                desc: "We monitor Etsy standards, fees, updates, and take corrective action before issues arise, so your account always stays in good standing.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <path d="M24 13l8 3v8c0 5-8 10-8 10s-8-5-8-10v-8l8-3z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M19 24l3.5 3.5 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Regular Pricing & Keyword Optimization",
                desc: "We perform regular analysis of competitors, pricing, keyword trends, and demand dynamics to keep your store adaptive and visible.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5">
                    <circle cx="24" cy="24" r="24" fill="#E91C59"/>
                    <circle cx="22" cy="22" r="7" fill="none" stroke="#fff" strokeWidth="2.2"/>
                    <path d="M27.5 27.5l5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M19 22h6M22 19v6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
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

      {/* Built for Etsy Sellers Who Want to Thrive */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-12">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Built for Etsy Sellers Who Want to <span style={{ color: "#E91C59" }}>Thrive, Not Just Get By</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[680px] mx-auto">
              Our Etsy account management services are the perfect match for you if you&apos;re looking to dominate.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-1 space-y-8">
              {[
                { title: "Artisans & Handmade Sellers", desc: "Focus on creativity and let us handle optimization, listings, policy compliance, and all the heavy lifting." },
                { title: "Print-on-Demand or Vintage Sellers", desc: "Save time with expert catalog management and image workflows." },
                { title: "Boutique Brands", desc: "Build a strong brand identity with high-quality visuals and SEO optimized listings." },
                { title: "Multi-channel Entrepreneurs", desc: "Leverage product catalog across Etsy, Shopify, and Amazon with seamless, integrated support." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold text-[20px] mb-2" style={{ color: "#1e293b" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <a href="/contact-us" className="svc-btn svc-btn-pink inline-block mt-4">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">GET ETSY ACCOUNT MANAGEMENT →</span>
                  <span className="svc-btn-bottom">GET ETSY ACCOUNT MANAGEMENT →</span>
                </span>
              </a>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/Built-for-Etsy-Sellers-Who-Want-to-Thrive-Not-Just-Get-By.webp"
                alt="Built for Etsy Sellers Who Want to Thrive"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
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
                src="/What-We-Need-from-You-to-Deliver-the-Best-Results.webp"
                alt="What We Need from You to Deliver the Best Results"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
                What We Need from You to Deliver the <span style={{ color: "#E91C59" }}>Best Results</span>
              </h2>
              <p className="text-[#67768e] text-[16px] mb-7">
                We&apos;re committed to helping you succeed in your Etsy journey, so to ensure smooth and effective engagement, we&apos;ll need you to provide:
              </p>

              <div className="space-y-4 mb-7">
                {[
                  "Etsy business account access",
                  "Product details & pricing",
                  "High-res product images (we can provide editing support)",
                  "Branding files or style guidelines (if available)",
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
                Don&apos;t worry, we&apos;ll guide you through the process. If you don&apos;t have high quality product images? We can help you with our image editing service.
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

      {/* Stats Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-14" style={{ backgroundColor: "#f4f4f4" }}>

            <h2 className="font-bold text-center mb-12" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(24px,3vw,38px)", color: "#1e293b" }}>
              Trusted by Etsy Sellers Worldwide
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-10">

              <StatsCounter />

              {/* Expert Card */}
              <div className="flex-shrink-0 rounded-2xl p-6 text-center" style={{ backgroundColor: "#ffffff", minWidth: "200px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: "#f4f4f4" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8">
                    <circle cx="24" cy="18" r="8" fill="#1e293b"/>
                    <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#1e293b"/>
                  </svg>
                </div>
                <p className="font-bold text-[14px] mb-0.5" style={{ color: "#1e293b" }}>Linda Davis</p>
                <p className="text-[12px] mb-4" style={{ color: "#67768e" }}>Account Expert</p>
                <p className="font-bold text-[16px] mb-1" style={{ color: "#E91C59" }}>Need Expert Advice?</p>
                <p className="text-[12px] mb-4" style={{ color: "#67768e" }}>Book Your Strategy Call Today!</p>
                <a href="/contact-us" className="svc-btn svc-btn-pink text-[12px]" style={{ padding: "10px 20px" }}>
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
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Get a 15-Day Trial for Just $1 &ndash; No Commitment Needed
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              Unmanaged accounts lead to wasted fees, suspended listings, and declining seller performance. Act now to keep your Etsy store running smoothly, protect your reputation, and utilize every sale opportunity.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET ETSY ACCOUNT MANAGEMENT →</span>
                <span className="svc-btn-bottom">GET ETSY ACCOUNT MANAGEMENT →</span>
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
