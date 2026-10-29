import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "AI Predictive FBA Inventory Audit & Forecasting | AMZ Pro Venture",
  description: "AI-powered FBA inventory audit and forecasting service by AMZ Pro Venture. Predict demand, prevent stockouts, and optimize your Amazon inventory.",
};

export default function FBAInventoryAudit() {
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
            Amazon FBA Inventory Management
          </p>

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6 uppercase"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "48px", color: "#ffffff" }}
          >
            Are Stockouts Hurting<br />Your Amazon{" "}
            <span style={{ color: "#ff9900" }}>FBA Sales?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[720px] mb-5 text-left">
            Amazon FBA inventory management is key to running a successful Amazon business. We help you with:
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Comprehensive Inventory Audit",
              "Inventory Health Management",
              "AI-Powered Demand Forecasting",
              "Overstock & Aged Inventory Solutions",
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
            GET YOUR FREE FBA INVENTORY AUDIT →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Main-Image.webp"
              alt="AI Predictive FBA Inventory Audit & Forecasting"
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

      {/* What Is FBA Inventory Audit & Forecasting Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — text */}
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,48px)", color: "#000000" }}>
              What Is <span style={{ color: "#ff9900" }}>FBA Inventory Audit<br />&amp; Forecasting?</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-5">
              Amazon inventory auditing is the process of reviewing and analyzing your FBA stock to spot problems and opportunities. It covers things like excess or stranded inventory, slow movers, items at risk of going out of stock, and overall inventory health.
            </p>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-5">
              Amazon inventory forecasting is about predicting how much stock you&apos;ll need in the future. This prediction is based on data, such as past sales, seasonality, trends, and supplier lead times.
            </p>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10">
              Deep audits and accurate forecasting help you avoid stockouts, costly overage fees, and maintain healthy cash flows. So, you&apos;re always ready to provide your customers with what they order.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET YOUR FREE FBA INVENTORY AUDIT →</span>
                <span className="svc-btn-bottom">GET YOUR FREE FBA INVENTORY AUDIT →</span>
              </span>
            </a>
          </div>

          {/* Right — image */}
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/What-Is-FBA-Inventory-Audit-Forecasting.webp" alt="FBA Inventory Audit & Forecasting" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </div>

        </div>
      </section>

      {/* Why You Need Expert Inventory Management Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="flex flex-col lg:flex-row gap-14 items-center mb-14">
            <div className="flex-1">
              <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
                Why You Need an Expert Amazon <span style={{ color: "#ff9900" }}>Inventory Management Service</span>
              </h2>
              <p className="text-[#67768e] text-[16px] leading-relaxed">
                Poor inventory performance damages your Amazon business on multiple fronts. Overstocking and stockouts kill ranking, drain storage costs, tie up capital, and damage customer trust. Here&apos;s why you need an expert Amazon inventory optimization service:
              </p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[480px]">
              <Image src="/Why-You-Need-an-Expert-Amazon-Inventory-Management-Service.webp" alt="Why You Need an Expert Amazon Inventory Management Service" width={480} height={400} unoptimized className="w-full h-auto object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "Protect Rankings",
                desc: "Running out of stock doesn't just mean missed sales; it damages your hard-earned rankings. Expert Amazon inventory management helps your products maintain visibility and product rankings.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="w-11 h-11 flex-shrink-0"><circle cx="22" cy="22" r="22" fill="#ff9900"/><path d="M22 11l2.8 6.5 7 .6-5.2 4.6 1.6 6.8L22 26l-6.2 3.5 1.6-6.8-5.2-4.6 7-.6z" fill="#fff"/></svg>,
              },
              {
                title: "Cut Down Storage Fees",
                desc: "Overstocking racks up long-term storage and aged inventory fees that erode your margins. Experts identify slow movers, excess stock, and when to liquidate, so you can avoid unnecessary costs.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="w-11 h-11 flex-shrink-0"><circle cx="22" cy="22" r="22" fill="#ff9900"/><rect x="11" y="19" width="22" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2"/><path d="M11 24h22" stroke="#fff" strokeWidth="1.5"/><path d="M17 19v-3a5 5 0 0110 0v3" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M19 28h6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Improve Cash Flow",
                desc: "Tied-up inventory means locked-up money, leading to cash availability problems. Accurate forecasting keeps your cash flow healthy, not drifting in a sea of excess stock.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="w-11 h-11 flex-shrink-0"><circle cx="22" cy="22" r="22" fill="#ff9900"/><circle cx="22" cy="22" r="8" stroke="#fff" strokeWidth="2" fill="none"/><path d="M22 18v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 12v2M22 30v2M12 22h2M30 22h2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: "Customer Trust",
                desc: "Customers expect fast and reliable delivery. Stockouts damage your reputation and ratings. Staying in-stock builds trust and keeps reviews positive.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="w-11 h-11 flex-shrink-0"><circle cx="22" cy="22" r="22" fill="#ff9900"/><circle cx="22" cy="17" r="5" fill="#fff"/><path d="M13 35c0-5 4-9 9-9s9 4 9 9" fill="#fff"/></svg>,
              },
              {
                title: "Scaling Safety",
                desc: "Sustainable growth can't happen without data-backed, smart forecasting and restocking decisions. Proper inventory management lets you scale confidently without drowning in stock problems.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="w-11 h-11 flex-shrink-0"><circle cx="22" cy="22" r="22" fill="#ff9900"/><path d="M13 32V26M18 32V20M23 32V17M28 32V12M33 32V18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-5 bg-white rounded-xl p-6 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                {item.icon}
                <div>
                  <h3 className="font-bold text-[16px] mb-2" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET YOUR FREE FBA INVENTORY AUDIT →</span>
                <span className="svc-btn-bottom">GET YOUR FREE FBA INVENTORY AUDIT →</span>
              </span>
            </a>
          </div>

        </div>
      </section>


      {/* What’s Included Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1400px] mx-auto px-10">

          <div className="text-center mb-12">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              What&apos;s Included in Our Monthly Amazon FBA<br />Inventory Audit &amp; Forecasting Service
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[680px] mx-auto">
              Our Amazon seller inventory solutions ensure you always have the right products in the right quantities at the right times. Here&apos;s what&apos;s included in your monthly subscription plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {[
              {
                title: "Comprehensive Inventory Audit",
                items: [
                  "FBA inventory levels for all your SKUs",
                  "Items that are overstocked, understocked, or at risk",
                  "Top health metrics by SKU",
                  "Recommendations for restocking, returns, disposal or price adjustments",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M164.01,39.21v70.05c-21.98-7.48-40.79-9.13-61.18,3.42-38.59,23.75-38.59,79.93,0,103.68,20.35,12.52,39.26,11.1,61.18,3.42v70.05h-57.59v-26.46c-6.82.06-16.4-9.15-22.22-7.56-3.53.96-15.92,16.87-17.47,16.87-9.61-12.58-29.77-25.75-38.23-38.06-1.13-1.64-1.94-1.67-.78-3.93,1.99-3.85,15.58-13.35,16.19-16.58l-7.54-20.79H9.91v-57.59h26.46l7.54-20.79c-.61-3.23-14.21-12.74-16.19-16.58-1.16-2.25-.35-2.29.78-3.93,8.46-12.31,28.62-25.48,38.23-38.06,1.55,0,13.94,15.91,17.47,16.87,5.82,1.59,15.4-7.62,22.22-7.56v-26.46h57.59Z"/>
                    <path fill="#ff9900" d="M177.24,289.82l-2.12-126.59c1.69-5.05,18.32-1.63,23.14-2.61v20.24s68.48,0,68.48,0v-20.24h23.35v129.2h-112.85ZM212.82,215.66c11.74-11.74,25.4-9.54,38.91-2.36,11-7.05,7.14-11.03-3.21-15-42.08-16.13-74.65,36.15-44.1,65.89,28.85,28.09,74.2,1.91,68.54-36.63-15.06,5.43-11,21.02-23.47,30.21-28.29,20.86-60.59-18.2-36.67-42.12ZM265.17,210.44c-2.36-.64-2.58.63-3.89,1.53-5.31,3.66-25.35,27.43-28.21,27.93l-12.45-10.67-8.24,8.24,20.69,19.56,36.12-35.72-4.02-10.86Z"/>
                    <path fill="#ff9900" d="M238.73,137.28v-56.82c16.2-11.24,34.15-20.53,51.37-30.35v58.37l-51.37,28.8Z"/>
                    <path fill="#ff9900" d="M226.27,78.13v59.15l-45.67-25.16-5.7-5.19v-52.92c0-.23,1.87-4.09,2.33-3.88l49.04,28.01Z"/>
                    <path fill="#ff9900" d="M282.31,37.68l-1.62,3.8-47.67,26.97-50.34-28.48c-.72-3.26,1.44-2.1,3.09-3.07,15.64-9.2,31.44-18.3,47.5-26.73l49.04,27.5Z"/>
                    <path fill="#ff9900" d="M262.08,151.29l-1.56,24.91h-56.04v-24.91h57.59ZM251.18,160.63h-37.36l2.27,5.86c11.62-3.65,23.7,1.25,35.08-1.23v-4.63Z"/>
                  </svg>
                ),
              },
              {
                title: "Demand Forecasting & Restock Planning",
                items: [
                  "AI-powered demand analytics based on seasonality, velocity and growth trends",
                  "Lead time and supplier delivery compatibility included",
                  "Restock recommendations with quantity and timing",
                  "Minimum order point (MOP) with safety stock strategy",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M87.73,165.22c16.54-4.93,15.26,11.87,27.53,12.31,0-1.13,1.53-2.83,1.53-3.32v-29.06c0-.3-2.06-1.55-1.38-2.06l17.99,8.29v73.35l-63.66-36.67v-72.65l17.99,10.38v39.44Z"/>
                    <path fill="#ff9900" d="M203.97,158.3c-30.46-2.81-51.29,25.5-40.15,53.91l-23.51,12.51v-73.35l63.66-35.98v42.9Z"/>
                    <path fill="#ff9900" d="M161.08,278.71c-.81,3.2.63,2.28,1.74,3.16,4.6,3.62,12.48,4.58,9.31,12.06-2.37,1.63-21.74-11.95-23.61-14.43-1.07-1.42-1.5-2.3-1.33-4.15.12-1.3,13.5-21.32,14.77-21.62,2.31-.53,6.15.22,5.86,3.32l-10.9,15.43c71.89-3.45,125.53-69.21,114.64-140.94-6.15-40.5-30.13-71.38-65.26-91.12-4.01-2.26-16.34-4.68-14.78-10.11l3.38-2.1c57.43,21.19,92.11,79.34,83.6,140.28-8.18,58.6-57.92,107.1-117.43,110.22Z"/>
                    <path fill="#ff9900" d="M143.08,26.85C21.26,35.66-17.51,195.84,90.07,257.67c4.57,2.63,19.91,6.77,18.4,12.02l-3.38,2.1C47.69,250.52,12.99,192.46,21.5,131.52S79.42,24.42,138.92,21.29c.81-3.2-.63-2.28-1.74-3.16-4.6-3.62-12.48-4.58-9.31-12.06,2.53-1.76,24.69,13.88,24.98,17.36.25,3.05-13.67,21.88-16.22,22.56s-3.16-.1-4.61-1.89l11.07-17.26Z"/>
                    <path fill="#ff9900" d="M192.53,165.56c42.9-7.32,50.73,55.96,11.77,61.57-43.42,6.26-48.92-55.23-11.77-61.57ZM213.2,182.04c-3.42.93-19.41,20.52-20.99,20.52-2.66-1.92-8.97-11.89-12.46-6.9-2.64,4.03,10.6,15.87,13.57,15.08,1.61-.42,23.11-21.87,23.81-23.38,1.53-3.33-.04-6.37-3.92-5.32Z"/>
                    <polygon fill="#ff9900" points="73.89 108.5 136.05 73.12 152.74 82.88 90.05 119.28 73.89 108.5"/>
                    <path fill="#ff9900" d="M199.82,108.5l-61.92,37.15-16.95-8.13,2.28-3.92,57.18-32.85c7-2.13,12.45,6.82,19.41,7.74Z"/>
                    <path fill="#ff9900" d="M98.8,125.07l2.28-3.92,57.2-32.83c6.01-1.98,11.64,4.13,16.6,7.01l-60.83,36.12-15.25-6.38Z"/>
                    <path fill="#ff9900" d="M109.87,165.22c-5.31-4.07-7.34-8.63-15.22-6.92v-29.06l15.22,10.38v25.6Z"/>
                  </svg>
                ),
              },
              {
                title: "Cash Flow & Cost Optimization",
                items: [
                  "Forecasting avoidable holding costs, FBA fees, storage fees, and more",
                  "Analysis of excess inventory to free up cash",
                  "Insights on the financial impact of rebalancing or reducing inventory",
                  "Prioritization planning for which products to avoid that hurt ROI",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M54.33,49.35v16.59h102.02c60.29,4.33,97.61,72.13,66.92,124.98h-31.8l8.53-11.66c21.89-38.73-4.06-84.55-48.07-87.33-31.18-1.97-64.31,1.48-95.69-.03l-1.91.86v16.31l-45.89-30.14,45.89-29.59Z"/>
                    <path fill="#ff9900" d="M108.52,109.08l-8.74,12c-21.52,39.23,4.56,84.43,48.84,86.99h97.05s0-17.14,0-17.14l45.89,30.14-45.89,29.59v-16.59l-100.4.03c-61.6-3.35-99.27-71.23-68.55-125.01h31.8Z"/>
                    <path fill="#ff9900" d="M154.42,109.08l-.56,8.85c5.17-.05,10.19,1.4,14.89,3.37l-2.17,12.11c-4.23-3.22-18.71-6.27-22.13-1.8-5.92,7.73,12.26,13.26,16.97,16.08,18.71,11.23,11.08,34.66-9.77,34.93-.53.5.95,7.3-.83,8.3h-8.02l.56-8.29-14.93-3.33,1.92-12.17c.67-.87.64-.29,1.21-.08,5.08,1.85,19.35,6.47,23.44,1.5,5.97-7.26-10.96-12.67-15.23-15.22-10.39-6.19-17.13-20.16-7.18-29.86,3.74-3.64,8.52-4.12,12.99-5.81v-8.57h8.85Z"/>
                  </svg>
                ),
              },
              {
                title: "Ongoing Monitoring & Monthly Reporting",
                items: [
                  "Monthly inventory health trends, restock suggestions, forecast accuracy report",
                  "Regular alerts for low inventory levels, aging stock or ongoing issues",
                  "Comparison with an optimizer report to improve performance",
                  "Corrective actions taken each month for better performance",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4">
                    <path fill="#ff9900" d="M258.87,90.83l-15.24-10.12c-3.11-10.52,5.14-32.32-10.21-34.71l-199.22.57-5,3.69,1.07,128.62,7.56,1.85,112.84.18,19.11,21.46,18.08,10.18h-28.25c-3.3,1.98-3.05,13.75-.82,15.31,7.1,1.76,14.52-.61,21.59,1.59,11.04,3.44,23.07,26.44,5.39,28.1-32.3-2.36-68.3,2.85-100.13-.02-19.27-1.73-6.54-26.12,6.2-28.71,6.31-1.29,13.04.79,19.32-.96l1.36-15.31H30.66c-.6,0-6.77-2.95-7.91-3.69-7.77-5.06-10.8-14.32-11.63-23.14-3.83-40.9,2.8-87.42-.01-128.92,1.86-16.56,9.98-25.42,26.74-26.87,62.84-5.45,133.45,4.19,197.11.05,9.27-.43,23.9,12.22,23.9,21.01v39.85Z"/>
                    <path fill="#ff9900" d="M231.08,208.44c-54.06,12.21-99.76-38.82-76.33-90.59,19.48-43.04,78.67-49.55,108.43-13.22,23.16,28.28,16.86,63.49-5.74,89.76l32.65,62.35c0,10.53-17.51,20.47-25.5,11.66l-33.52-59.95ZM207.84,101.39c-56.69,6.36-49.48,95.29,12.48,87.81,54.61-6.6,45.97-94.37-12.48-87.81Z"/>
                    <path fill="#ff9900" d="M124.13,124.15c2.08.35,1.96-2.51,2.45-4.03,4.17-13,5.39-31.44,10.49-43.14,1.07-2.46,2.08-4.71,5.17-5.07,2.41-.03,2.96,1.71,3.92,3.39,1.4,2.45,9.71,26.15,9.47,27.6s-4.9,8.65-6.87,9.65c-2.09-5.41-2.58-13.74-7.25-17.38l-11.64,52.85-3.85,4.96c-1.69.52-2.95-.09-4.21-1.16-4.21-3.57-10.81-49.52-13.65-58.09l-11.68,65.81c-.71,4.24-3.99,6.35-7.6,3.83-3.91-2.73-14.25-53.92-16.95-62.4l-12.49,22.99h-22.79c-9.6-13.03,9.31-9.35,17.68-10.19,3.57-5.23,11.64-31.29,15.69-32.85,1.56-.6,3.64-.31,5.35-.32l15.4,53.68,12.33-70.99c2.9-3.45,8.12-1.42,8.41,3.18l12.62,57.66Z"/>
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 flex flex-col gap-1">
                {card.icon}
                <h3 className="font-bold text-[16px] leading-snug mb-3" style={{ color: "#000000" }}>{card.title}</h3>
                <div className="space-y-2.5">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#ff9900"/>
                        <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      <p className="text-[#000000] text-[14px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOST SALES WITH AUDIT & FORECASTING →</span>
                <span className="svc-btn-bottom">BOOST SALES WITH AUDIT & FORECASTING →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What We Need From You */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1659px] mx-auto flex flex-col lg:flex-row items-center gap-0">
          <div className="flex-1 px-10 py-10">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              What We Need From You?
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-6">
              To deliver our services with the best results, we need you to provide us with the following things:
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Amazon Seller Central account access",
                "Data regarding the current inventory in your warehouse",
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

            <p className="text-[#67768e] text-[16px] leading-relaxed mb-8">
              You&apos;ll get guidance every step of the way to ensure a seamless collaboration. If anything else is needed for optimum results, we&apos;ll inform you duly for timely management.
            </p>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
              </span>
            </a>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[50%]">
            <Image src="/what-we-need-from-you-5.webp" alt="What We Need from You" width={800} height={600} unoptimized className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Take Control of Your Amazon FBA Inventory
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-8">
              Poor inventory planning is drowning in quicksand; it kills the sales momentum, drains your capital, and damages rankings. With our Inventory Audit &amp; Forecasting Service, you can avoid it by confidently knowing what you have, what to order, and when to order.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">SCHEDULE YOUR AUDIT TODAY →</span>
                <span className="svc-btn-bottom">SCHEDULE YOUR AUDIT TODAY →</span>
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
