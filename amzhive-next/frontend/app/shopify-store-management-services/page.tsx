import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Shopify Store Creation & Management | AMZ Pro Venture",
  description: "AI-powered Shopify Store Creation and Management service by AMZ Pro Venture. Build and grow your Shopify store with expert strategy, design, and full-service management.",
};

export default function ShopifyStoreCreationManagement() {
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

      <HeroSection />

      {/* Why You Need an Expert Shopify Store Management Service */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="flex-shrink-0 w-full lg:w-[45%]">
              <Image
                src="/Why-You-Need-an-Expert-Shopify-Store-Management-Service-1837x2048.webp"
                alt="Why You Need an Expert Shopify Store Management Service"
                width={560}
                height={480}
                unoptimized
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-8" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                Why You Need an Expert Shopify Store <span style={{ color: "#ff9900" }}>Management Service</span>
              </h2>

              <div className="space-y-6 mb-8">
                {[
                  { title: "Maximizes Sales with Optimized SEO & Ads", desc: "Enhances your store's visibility through strategic SEO, Google Shopping, and paid ad campaigns that attract high-intent buyers and drive more revenue." },
                  { title: "Streamlined Operations & Compliance", desc: "From inventory sync to tax setup and payment gateways, we handle every operational detail so your store runs smoothly and stays compliant." },
                  { title: "Enhanced User Experience", desc: "From fast-loading pages to mobile-optimized design and intuitive navigation, we ensure every visitor enjoys a seamless shopping experience that converts." },
                  { title: "Leverages Advanced Tools & Integrations", desc: "Seamless tools and app integrations for automation, analytics, and marketing that save you time and multiply your store's performance." },
                  { title: "Data-Driven Growth", desc: "With performance tracking, A/B testing, and regular reporting, every decision is backed by real data to drive consistent, measurable growth." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                      <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-[15px] leading-relaxed" style={{ color: "#000000" }}>
                      <span className="font-semibold">{item.title}: </span>
                      <span className="text-[#67768e]">{item.desc}</span>
                    </p>
                  </div>
                ))}
              </div>

              <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
                OPTIMIZE MY SHOPIFY STORE NOW →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* What's Included in Our Shopify Store Management Services */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            What&apos;s Included in Our Shopify Store <span style={{ color: "#ff9900" }}>Management Services</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[700px] mx-auto mb-14">
            Our Shopify store growth solutions equip your store with everything needed to thrive in a competitive e-commerce landscape.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SEO & Metadata Optimization",
                desc: "Boost your store's search engine rankings with keyword-rich titles, meta descriptions, and structured data, driving organic traffic and click-through rates.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#ff9900" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M8 11h6M11 8v6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Broken Link Management",
                desc: "We audit and fix broken links to ensure a seamless user experience and maintain strong SEO performance.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Payment Gateways & Tax Setup",
                desc: "Set up secure payment options and automated tax calculations to ensure compliance and a smooth checkout experience.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="1" y="4" width="22" height="16" rx="2" stroke="#ff9900" strokeWidth="2"/><line x1="1" y1="10" x2="23" y2="10" stroke="#ff9900" strokeWidth="2"/></svg>,
              },
              {
                title: "Buy With Prime Integration",
                desc: "Leverage Amazon&apos;s Prime audience with fast shipping options, adding trust and boosting conversions via seamless Shopify integration.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Theme Customization",
                desc: "From minor tweaks to full redesigns, we tailor your Shopify theme to align with your brand and enhance user engagement.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M12 20h9" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "New Page Creation",
                desc: "Build custom pages like About Us or campaign landing pages with SEO-friendly designs to enhance storytelling and conversions.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="13" x2="12" y2="17" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><line x1="10" y1="15" x2="14" y2="15" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Product Pages & Category Setup",
                desc: "Craft compelling product listings and organized collections with rich media and filters for easy navigation and higher sales.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="#ff9900" strokeWidth="2"/><path d="M16 10a4 4 0 01-8 0" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Sales & Performance Tracking",
                desc: "Monitor key metrics like revenue, AOV, and conversions with Shopify Analytics and custom reports to optimize performance.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "User Journey & UI Optimization",
                desc: "Streamline the customer journey with UI updates, A/B testing, and apps for upsells, coupons, and subscriptions to boost retention.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#ff9900" strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
                {item.icon}
                <h3 className="font-bold text-[16px] mb-2 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Count on Us for Your Shopify Store Management */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <h2 className="text-center font-bold leading-tight mb-14" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            Why Count on Us for Your Shopify <span style={{ color: "#ff9900" }}>Store Management</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-10">
            {[
              {
                title: "Expertise in Shopify E-commerce Management",
                desc: "Our team delivers tailored strategies, from SEO to app integrations, ensuring your store thrives in a competitive market.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Proven Shopify Sales Optimization",
                desc: "We drive conversions with user journey enhancements, maximizing your ROI.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Comprehensive Shopify Store Maintenance Services",
                desc: "From broken link fixes to payment and tax setups, we keep your store technically sound and compliant.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Customized Shopify Store Growth Solutions",
                desc: "We craft personalized roadmaps for startups, scaling businesses, and retail veterans to achieve sustainable growth.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26A7 7 0 0112 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 21h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Data-Driven Performance Tracking",
                desc: "Our analytics and reporting provide actionable insights, ensuring continuous optimization for long-term success.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 h-6"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item, i) => {
              const dark = i % 2 === 1;
              return (
                <div key={item.title} className="p-8 flex flex-col" style={{ backgroundColor: dark ? "#000000" : "#f4f4f4" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 flex-shrink-0" style={{ backgroundColor: "#ff9900" }}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[16px] mb-3 leading-snug" style={{ color: dark ? "#ffffff" : "#000000" }}>{item.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: dark ? "#94a3b8" : "#67768e" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[14px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
              GET SHOPIFY STORE MANAGEMENT →
            </a>
          </div>

        </div>
      </section>

      {/* What We Need From You */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-16 items-center">

          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What We Need From You to <span style={{ color: "#ff9900" }}>Provide the Best Results</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
              To manage your Shopify store for the best results, we&apos;ll need you to provide the following:
            </p>
            <div className="space-y-5 mb-8">
              {[
                { title: "Store Access:", desc: "User, secondary account, or collab access." },
                { title: "Brand Assets:", desc: "Logos, product images, and brand guidelines." },
                { title: "Business Goals:", desc: "Target audience and objectives (e.g., sales, conversions)." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[16px] leading-relaxed">
                    <span className="font-semibold">{item.title}</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[#67768e] text-[15px] leading-relaxed">
              We&apos;ll guide you through every step of the process to ensure accuracy.
            </p>
          </div>

          <div className="flex-shrink-0 w-full lg:w-[480px]">
            <Image src="/What-We-Need-From-You-8-1376x1536.webp" alt="What We Need From You" width={480} height={420} unoptimized className="w-full h-auto object-contain" />
          </div>

        </div>
      </section>

      {/* Who This Service is For */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10 flex flex-col lg:flex-row gap-16 items-center">

          <div className="flex-shrink-0 w-full lg:w-[480px]">
            <Image src="/Who-This-Service-is-For-2.webp" alt="Who This Service is For" width={480} height={420} unoptimized className="w-full h-auto object-contain" />
          </div>

          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Who This Service <span style={{ color: "#ff9900" }}>is For</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
              Our Shopify store management services provide the crucial support needed to run a high-performing store.
            </p>
            <div className="space-y-5 mb-10">
              {[
                "Busy entrepreneurs needing full Shopify e-commerce management to launch and optimize their online stores without tech teams",
                "Growing retailers seeking Shopify store optimization and sales tracking to boost conversions and streamline operations",
                "Hands-off professionals relying on experts for Shopify store maintenance services like SEO, ads, and app integrations.",
                "Marketing leads outsourcing Shopify store growth solutions, including theme customizations and Buy With Prime setups",
                "Experienced sellers transitioning to Shopify, requiring setups and user journey optimizations for sustained revenue",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold mt-0.5" style={{ backgroundColor: "#ff9900" }}>
                    {i + 1}
                  </div>
                  <p className="text-[#000000] text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
              GET EXPERT SHOPIFY MANAGEMENT →
            </a>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Don&apos;t Risk Your Shopify Sales<br />With an Unoptimized Store
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[480px] mx-auto mb-8">
              Get expert Shopify management today and watch your store grow without the stress and risk of DIY management.
            </p>
            <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
              GET FREE SHOPIFY STORE AUDIT →
            </a>
          </div>
        </div>
      </section>

      <FAQSection />


      <Footer />
    </main>
  );
}
