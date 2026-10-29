import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";

export const metadata = {
  title: "Amazon Reimbursement Claims | AMZ Hive",
  description: "Expert Amazon reimbursement claims services to recover money owed to your business. AMZ Hive helps you claim every dollar you deserve.",
};

export default function ReimbursementClaims() {
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

      <HeroSection />

      {/* Here's What We Help You Achieve Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
            Here&apos;s What We Help You <span style={{ color: "#E91C59" }}>Achieve</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-14">
            We help get back your Amazon FBA funds by digging up the missed reimbursement opportunities and expediting the claims process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {[
              {
                title: "Recover Lost Inventory & Funds",
                desc: "We detect hidden losses across your account and convert them into reinvestable capital, fast.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#E91C59"/><path d="M32 16a10 10 0 1 0 2.3 10.5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/><polyline points="34 12 34 18 28 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Save Hours of Manual Work",
                desc: "You focus on scaling your brand. We handle the auditing, filing, and follow-up.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><defs><style>{`.cls-1sv2{fill:#E91C59;}`}</style></defs><path className="cls-1sv2" d="M245.17,12.14l-40.96,43.16c4.26,19.28,20.36,36.23,40.18,39.42l43.53-39.83c-2.96,23.43.96,46.76-8.13,69.27-15.22,37.67-55.43,24.01-86.24,17.71,13.42-33.12-20.72-41.67-41.03-57.01-1.22-13.98-4.35-30.88.93-44.28,11.86-30.15,65.01-28.38,91.72-28.45Z"/><path className="cls-1sv2" d="M12.18,192.03v-97.32c8.23,3.91,16.75,7.8,25.41,10.72,19.96,6.74,22.97,8.31,41.41-3.63,17.3-11.2,21.94-27.19,44.77-16.19,11.3,5.45,43.34,23.12,51.98,30.6,14.53,12.57,2.14,36.05-17.93,28.24-23.05-8.96-24.11-26.58-49.81-4.79-19.8,16.79-38,37.28-57.93,54.14-11.67,6.7-25.5-1.03-37.9-1.77Z"/><path className="cls-1sv2" d="M184.72,197.94c8.12,14.81-5.14,28.17-20.64,22.12,2.31,15.26-7.17,24.53-22.13,19.18,6.39,13.4-5.88,27.6-19.72,20.44-2.73-1.41-23.01-22.16-23.86-24.8-3.86-11.98,8.69-21.62,19.99-19.26-8.89-14.23,1.8-29.02,17.69-23.59-13.74-16.9,6.11-36.06,22.11-20.63-5.25-13.46,7.77-25.9,21.21-18.98,2.76,1.42,24.49,23.65,25.34,26.28,4.02,12.46-8.05,22.08-19.98,19.26Z"/><path className="cls-1sv2" d="M141.93,150.76l-12.28,6.13c-12.3,8.13-8.47,15.49-13.18,22.95-.69,1.1-7.63,5.4-9.91,8.51-3.81,5.2-4.19,11.82-6.74,15.38-2.33,3.25-9.02,6.22-12.19,11.41-6.88,11.25-3.1,22.05,1.03,33.36-15.81,16.95-37.12,53.6-63.95,33.48-16.96-12.72-15.73-30.41-2.97-45.73,14.7-17.65,47.07-40.42,65.66-56.73,13.04-11.45,25.69-23.61,38.36-35.49l16.17,6.73ZM41.24,243.96c-10.73,3.2-7.32,24.48,7.87,19.69,12.86-4.05,6.88-24.1-7.87-19.69Z"/></svg>,
              },
              {
                title: "Boost Your Bottom Line",
                desc: "Our reimbursements create a passive, recurring revenue stream from money you're already owed.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><defs><style>{`.cls-1sv3{fill:#E91C59;}`}</style></defs><path className="cls-1sv3" d="M27.67,202.4,7.33,182.76l105-105.16,54.4,55.07,74.15-74.5-17-13.88c.32-.9.64-1.81,1-2.71l67.81-12.79c-4.27,23.26-8.32,45.31-12.82,69.77l-18.2-17.1-93.48,94-57-57.57C82.67,146.7,55,174.75,27.67,202.4Z"/><path className="cls-1sv3" d="M260.13,112.18v159H228.18c-.17-2.58-.49-5.22-.5-7.86,0-37.7-.23-75.41.25-113.1.07-4.79,2.86-10.32,6-14.14,7.4-8.91,15.8-17,23.79-25.4Z"/><path className="cls-1sv3" d="M109.1,271.21H76.84c0-25.56.65-50.61-.28-75.6-.45-12,2.44-21,11.85-28.72,6.92-5.66,12.6-12.84,18.83-19.34l1.86,1.35Z"/><path className="cls-1sv3" d="M210.38,159.47V271.08H177.71c0-25.47,0-50.77.06-76.07a6.37,6.37,0,0,1,1.37-4.15C188.9,180.89,198.79,171.06,210.38,159.47Z"/><path className="cls-1sv3" d="M128.14,271V165.53l2.16-1.59c9.37,9.84,18.81,19.63,28,29.6a8.14,8.14,0,0,1,1.59,5.1c.1,23.85.06,47.71.06,72.34Z"/><path className="cls-1sv3" d="M59.42,196.26v74.88H26.77c0-13.37-.05-26.45.07-39.54a6.42,6.42,0,0,1,1.51-4.1C38.09,217.55,48,207.74,59.42,196.26Z"/></svg>,
              },
            ].map((item) => (
              <div key={item.title}>
                {item.icon}
                <h3 className="font-bold text-[17px] mb-2" style={{ color: "#1e293b" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 md:max-w-[680px]">
            {[
              {
                title: "Ensure Full Amazon Compliance",
                desc: "All claims are filed strictly within Amazon's policies, protecting your account and seller health.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-4"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="13" y="14" width="18" height="14" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><path d="M13 22h18M17 18v6M31 28v4M13 28h12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M28 32l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Gain Peace of Mind",
                desc: "With real-time audits and active monitoring, your FBA account is under expert watch.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><defs><style>{`.cls-1sv5{fill:#E91C59;}`}</style></defs><path className="cls-1sv5" d="M100.49,243.84V194.6c21.45-6.74,32.81-20.18,32.41-38.6-1.72-.15-3.49-.36-5.27-.45-1.55-.08-3.11,0-4.49,0-6,20.37-14.85,28.15-30.51,27.35-14.37-.74-23.37-9.85-26.29-26.95H56.49c-2,17.42,10.17,32.24,31.84,38.47v49.65c-6.29,0-12.75.23-19.17-.19-1.33-.09-3.18-2.43-3.62-4.05-3.29-12-10.53-20.67-20.83-27.58a87.85,87.85,0,0,1-35.09-99.7C21.26,75,55.81,49.07,95.05,50.42c12.74.43,25.34,5.61,38,8.72,4.2,1,5.74,3.83,5.39,8.2s-.07,8.94-.07,13.42c0,21.92,5.82,28.56,28.13,31.3,0,3.77-.41,7.71.12,11.52.44,3.12,1.2,7,3.32,8.77,1.36,1.12,5.46-1,8.29-1.84,1-.27,1.83-.93,5.28-2.76-1.25,14-2.36,26.32-3.45,38.46-8,.36-14.15-.14-20,1a33.08,33.08,0,0,0-24.75,44.07c1.6,4.42.6,6.62-2,10.18-4.83,6.68-8.42,14.27-13,22.34ZM115.17,75.18c1.11-3.82,2-6.75,2.78-9.61C86.34,51.52,39,71,26,103.32l8.89,4.76C53.71,78,80.36,67.25,115.17,75.18ZM17.62,126.67l10.6,2.26,2.59-10.61L20.06,115Z"/><path className="cls-1sv5" d="M179,116.38c-.81-.93-1.08-1.1-1.09-1.29-1.31-14.29-1.31-14.29-15.23-15-8.42-.43-12.24-4.31-12.27-12.93q-.12-31.56,0-63.11c.05-9.17,3.27-12.42,12.28-12.43q59.55-.09,119.12,0c8.32,0,12.51,4.13,12.57,12.58q.19,31.15,0,62.32c-.05,9.29-4.22,13.49-13.51,13.53-21.83.12-43.66.33-65.48-.11-8.27-.16-15.35,1.43-21.85,6.67C189.08,110.22,184,113,179,116.38ZM166.76,60.52H277.23V50.23H166.76ZM277.59,72.45H167V82.9H277.59Zm-.17-44.28H189.21V38.46h88.21ZM177.11,38.64V28.14H167v10.5Z"/><path className="cls-1sv5" d="M271.81,242.53l-71.65-19.14V176.64l71.65-19.1Z"/><path className="cls-1sv5" d="M188.4,177.73v43.45c-9.35,0-18.83,1.15-27.9-.31-10.12-1.61-16.84-12.39-16.07-22.37.84-10.77,9.3-19.36,20.46-20.68a41.4,41.4,0,0,1,4.73-.08Z"/><path className="cls-1sv5" d="M283.43,199.75q0-22.86,0-45.72c0-4.27-.39-9.45,5.57-9.21,5.6.22,5.43,5.28,5.42,9.62q0,45.72,0,91.45c0,4.29.26,9.16-5.8,9.12-5.77,0-5.16-4.81-5.16-8.75Q283.41,223,283.43,199.75Z"/><path className="cls-1sv5" d="M122,256.21v9.58H67.45v-9.58Z"/><path className="cls-1sv5" d="M177.64,233.6h11v32.71c0,5.25.53,10.58-.24,15.71-.35,2.33-3.27,4.27-5,6.39-1.9-2-5.38-4-5.44-6.13C177.44,266.33,177.64,250.37,177.64,233.6Z"/><path className="cls-1sv5" d="M122,278.6v9.2H67.18v-9.2Z"/></svg>,
              },
            ].map((item) => (
              <div key={item.title}>
                {item.icon}
                <h3 className="font-bold text-[17px] mb-2" style={{ color: "#1e293b" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">RECOVER FBA FUNDS →</span>
                <span className="svc-btn-bottom">RECOVER FBA FUNDS →</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What's Included in Our Reimbursement Claims Service */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
            What&apos;s Included in Our <span style={{ color: "#E91C59" }}>Amazon Reimbursement Claims & Recovery Service</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[700px] mx-auto mb-14">
            Our end-to-end service is built to maximize your recoveries while keeping your account safe and compliant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Full 18-Month FBA Reimbursement Audit", desc: "We analyze up to 18 months of historical FBA transactions to uncover missed or incorrect reimbursements Amazon may owe you, across multiple claim types.", dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="14" y="12" width="14" height="18" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="29" cy="29" r="6" stroke="#fff" strokeWidth="2" fill="none"/><path d="M33.5 33.5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M17 17h8M17 21h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { title: "Discrepancy Identification Across All Claim Types", desc: "We thoroughly audit your account to uncover all eligible issues for recovery, like lost or damaged inventory, overcharged FBA fees, unreturned refunds, and unreimbursed destroyed stock.", dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="14" y="16" width="8" height="8" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><rect x="26" y="16" width="8" height="8" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><rect x="14" y="28" width="8" height="8" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><path d="M26 32h8M30 28v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg> },
              { title: "Filing & Managing Claims", desc: "We file, track, and follow up on every valid claim with Amazon Seller Support, ensuring proper documentation and full alignment with Amazon's reimbursement policies.", dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="14" y="11" width="20" height="26" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M18 18h12M18 22h12M18 26h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M26 31l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { title: "Updated Claims Dashboard", desc: "Get full visibility with your own claims dashboard, where you can track submitted claims, status updates, and recovered amounts in real time.", dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="12" y="14" width="24" height="18" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M17 34v2M24 34v2M31 34v2M14 36h20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 27V24M21 27V21M25 27V24M29 27V18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg> },
              { title: "Dedicated Reimbursement Specialist", desc: "You'll work with a dedicated reimbursement specialist who ensures claims are handled accurately and promptly.", dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><circle cx="24" cy="18" r="5" stroke="#fff" strokeWidth="2" fill="none"/><path d="M14 36c0-5.5 4.5-8 10-8s10 2.5 10 8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M31 22l2 2M35 20l-2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { title: "100% Policy-Compliant Process", desc: "Our methods are Amazon-compliant. No policy violations, no risks, just professional, ethical claim filing that protects your account standing.", dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><path d="M24 11l9 4v7c0 6-4 11-9 13-5-2-9-7-9-13v-7l9-4z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M19 24l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { title: "Fast Turnaround Time", desc: "We complete the deep audit of your account within 3-5 business days of account access being granted.", dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><circle cx="24" cy="24" r="10" stroke="#fff" strokeWidth="2" fill="none"/><path d="M24 17v7l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            ].map((item) => (
              <div key={item.title} className="p-8" style={{ backgroundColor: item.dark ? "#1e293b" : "#f4f4f4" }}>
                {item.icon}
                <h3 className="font-bold text-[16px] mb-3 leading-snug" style={{ color: item.dark ? "#ffffff" : "#1e293b" }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: item.dark ? "#cbd5e1" : "#67768e" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">RECOVER FBA FUNDS →</span>
                <span className="svc-btn-bottom">RECOVER FBA FUNDS →</span>
              </span>
            </a>
          </div>

        </div>
      </section>


      {/* Trusted by 1,200+ Amazon Sellers Section */}
      <section className="w-full py-16" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-10">

          <h2 className="text-center font-bold mb-12" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,42px)", color: "#1e293b" }}>
            Trusted by 1,200+ Amazon Sellers
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-12 items-center justify-center flex-1">
              {[
                { value: "150+", label: "Successful Reimbursements" },
                { value: "$400+", label: "Recovered For Sellers" },
                { value: "96.5%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-4">
                  <div className="w-[140px] h-[140px] rounded-full flex items-center justify-center" style={{ border: "3px solid #E91C59", backgroundColor: "#ffffff" }}>
                    <span className="font-bold text-[28px]" style={{ color: "#1e293b" }}>{stat.value}</span>
                  </div>
                  <p className="text-[#67768e] text-[15px] text-center">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Expert CTA Card */}
            <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center min-w-[220px]" style={{ boxShadow: "0px 4px 20px 0px rgba(0,0,0,0.08)" }}>
              <div className="w-14 h-14 rounded-full bg-[#E91C59] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                  <circle cx="12" cy="8" r="4" fill="#fff"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#fff"/>
                </svg>
              </div>
              <p className="font-semibold text-[14px] text-[#1e293b] mb-0.5">Linda Davis</p>
              <p className="text-[#67768e] text-[12px] mb-4">Amazon Seller</p>
              <h3 className="font-bold text-[18px] mb-1" style={{ color: "#E91C59" }}>Need Expert<br />Advice?</h3>
              <p className="text-[#67768e] text-[13px] mb-5">Book Your Strategy Call Today!</p>
              <a href="/contact-us" className="svc-btn svc-btn-pink" style={{ fontSize: "12px", padding: "10px 20px" }}>
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">BOOK A CALL →</span>
                  <span className="svc-btn-bottom">BOOK A CALL →</span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left */}
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#1e293b" }}>
              Simple, <span style={{ color: "#E91C59" }}>Performance-Based Pricing</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10 max-w-[540px]">
              Our pricing is designed to be straightforward, transparent, and results-driven.
            </p>

            <div className="space-y-8 mb-10">
              <div>
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#1e293b" }}>One-Time Audit Fee: <span style={{ color: "#E91C59" }}>$99</span></h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed max-w-[500px]">
                  For sellers ready to take action, a <span className="font-semibold text-[#1e293b]">$99 flat fee</span> unlocks a full audit of your account history, detailed reporting, and reimbursement filing. We&apos;ll only move forward if we find valid claims worth pursuing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#1e293b" }}>Success-Based Fee: <span style={{ color: "#E91C59" }}>10–15% of Recovered Amount</span></h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed max-w-[500px]">
                  After reimbursements are successfully credited to your Amazon account, we charge a <span className="font-semibold text-[#1e293b]">10–15% fee</span> based only on the actual amount recovered.
                </p>
              </div>
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
              </span>
            </a>
          </div>

          {/* Right — image */}
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/Simple-Performance-Based-Pricing.webp" alt="Performance-Based Pricing" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </div>

        </div>
      </section>

      {/* What We Need Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row-reverse gap-14 items-center">

          {/* Right — text */}
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-8" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#1e293b" }}>
              What We Need to Secure Your <span style={{ color: "#E91C59" }}>Amazon Reimbursements</span>
            </h2>

            <div className="space-y-6 mb-10">
              {[
                { label: "Seller Central Access", desc: "Grant us secure child permissions to safely manage your account." },
                { label: "Required Amazon Documents", desc: "Provide essential paperwork like invoices and packaging slips as needed." },
                { label: "We Take Care of Everything Else", desc: "Our team handles the entire reimbursement process, ensuring you get what's yours." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#E91C59" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#1e293b] text-[15px] leading-relaxed">
                    <span className="font-bold">{item.label}:</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
              </span>
            </a>
          </div>

          {/* Left — image */}
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/what-we-need-from-you-4.webp" alt="What We Need to Secure Your Amazon Reimbursements" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </div>

        </div>
      </section>

      {/* Claim Types Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2 className="text-center font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,48px)", color: "#1e293b" }}>
            Every Discrepancy Discovered. Every Dollar Recovered.
          </h2>
          <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-3">
            At AMZ Hive, our approach is rooted in continuous R&amp;D. We&apos;re not just running standard checks; we&apos;re constantly analyzing Amazon&apos;s ever-evolving FBA systems to uncover new types of discrepancies.
          </p>
          <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-14">
            Here are some of the key reimbursement types we recover for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Disposed Inventory",
                desc: "Sellable units mistakenly marked as unsellable or disposed of at Amazon Fulfillment Centers.",
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="13" y="20" width="22" height="14" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M17 20v-3a7 7 0 0 1 14 0v3" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M20 27v4M24 27v4M28 27v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: "Lost in Warehouse",
                desc: "Inventory that's disappeared, been incorrectly stowed, or gone missing during bin transfers or FC checks.",
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="13" y="16" width="14" height="16" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><circle cx="34" cy="28" r="6" stroke="#fff" strokeWidth="2" fill="none"/><path d="M38.5 32.5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M16 20h8M16 24h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M34 25v3l2 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Damaged Inbound",
                desc: "Units damaged en route by Amazon-partnered carriers or within Amazon's own facilities.",
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="13" y="15" width="22" height="18" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M24 21v4M24 27v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M13 21h22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 15v6M28 15v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: "Inbound Discrepancies",
                desc: "Shipments partially received or incorrectly logged at destination warehouses.",
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="12" y="13" width="16" height="20" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><path d="M15 18h10M15 22h8M15 26h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><circle cx="33" cy="30" r="5" stroke="#fff" strokeWidth="2" fill="none"/><path d="M37 34l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Inbound Retroclaims",
                desc: "Claims previously denied or overlooked that we reopen, reassess, and often recover.",
                dark: false,

                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="14" y="13" width="14" height="18" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><path d="M17 18h8M17 22h6M17 26h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M32 26a6 6 0 1 0 2.3 5.5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/><polyline points="34 22 34 27 29 27" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Lost Removal Orders",
                desc: "Inventory requested for removal from FBA but never successfully returned to you.",
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="14" y="12" width="14" height="18" rx="1" stroke="#fff" strokeWidth="2" fill="none"/><path d="M17 17h8M17 21h8M17 25h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M30 28l5 5M35 28l-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Unused Shipping Charges",
                desc: "Paid for Amazon-partnered shipping that was never actually used—eligible for reimbursement.",
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><path d="M14 24h20M24 14v20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M18 18l-4-4M34 18l4-4M18 30l-4 4M34 30l4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
              {
                title: "Pick & Pack Fee Overcharges",
                desc: "Incorrect product dimensions or weights leading to inflated Amazon fees.",
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#E91C59"/><rect x="12" y="14" width="24" height="20" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M12 20h24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M19 17v3M24 17v3M29 17v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 27h5M26 27h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="p-8" style={{ backgroundColor: item.dark ? "#1e293b" : "#f4f4f4" }}>
                {item.icon}
                <h3 className="font-bold text-[16px] mb-3 leading-snug" style={{ color: item.dark ? "#ffffff" : "#1e293b" }}>{item.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: item.dark ? "#cbd5e1" : "#67768e" }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#1e293b" }}>
              Act Fast: Amazon&apos;s Reimbursement Window Has Shrunk
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              Amazon has reduced the reimbursement claims window <span className="font-semibold text-[#1e293b]">from 18 months to just 60 days</span> for most fulfillment center-related issues. If you don&apos;t act quickly, you&apos;ll lose your money permanently.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">START YOUR FBA AUDIT NOW →</span>
                <span className="svc-btn-bottom">START YOUR FBA AUDIT NOW →</span>
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
