import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";

export const metadata = {
  title: "AI-Powered Vendor Central Management | AMZ Hive",
  description: "AI-powered Amazon Vendor Central management services by AMZ Hive. Optimize your vendor operations, improve performance, and grow your brand.",
};

export default function AIPoweredVendorCentralManagement() {
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
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4.5vw, 58px)", color: "#ffffff" }}
          >
            Is Vendor Central Management <span style={{ color: "#E91C59" }}>Overwhelming?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[560px] mb-5 text-left">
            Maximize efficiency, compliance, and profits with end-to-end Vendor Central management.
          </p>

          <div className="space-y-3 mb-8">
            {["Data-driven inventory forecasting", "24/7 compliance monitoring", "Optimized listings & pricing strategy", "Stronger vendor negotiations"].map((item) => (
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
            GET A FREE VENDOR ACCOUNT AUDIT →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Banner-1-1.webp"
              alt="AI-Powered Vendor Central Management"
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

      {/* What's Included Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2
            className="text-center font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}
          >
            <span className="text-[#1e293b]">Is Vendor Central Costing</span>
            <span className="text-[#E91C59]">You More Than It Makes?</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[680px] mx-auto">
            Amazon Vendor Central is complex and costly if mismanaged. From chargebacks to compliance headaches and inventory chaos, it can quickly drain profits and stall growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Chargebacks Eating Your Margins",
                desc: "Constant unexplained fines and invalid deductions cutting deep into your profit.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5"><path fill="#E91C59" d="M139.53,10.19c189.6-15.92,201.19,279.15,11.59,280.23C-24.35,291.43-39.13,25.19,139.53,10.19ZM144.04,51.59c-.4,30.04,0,60.13,0,90.17,0,22.42,39.1,76.47,46.95,100.63,1.02,4.16-.61,2.24-2.66,3.04-65.99,25.73-136.66-19.86-140.63-90.34l-26.63-.03c2.01,95.28,106.14,153.7,190.45,110.5l-6-18.24c21.93-9.06,41.48-33.29,50.17-55.4,28.56-72.67-22.58-150.55-99.25-155.82l-.1-16.3C85.79,15.69,21.04,73.81,21.07,144.85l26.63-.03c1.32-41.07,29.72-79.27,68.6-92.28,4.29-1.43,23.84-6.44,26.69-6.07,4.8.62,1.06,4.86,1.05,5.12ZM68.83,150.4c12.05,14.97,36.78-5.93,22.03-21.01-13.23-13.52-33.83,6.36-22.03,21.01ZM76.48,193.96l9.12-2.02c10.9-17.32,31.9-32.99,42.93-49.28,5.91-8.73-.11-13.36-7.05-9.11-.99.61-12.78,14.57-15.38,17.41-10.1,11.08-18.57,23.81-29.51,34.22l-.11,8.78ZM115.94,197.51c16.74,13.49,35.67-13.37,19.03-24.12-16.03-10.36-32.71,13.1-19.03,24.12Z"/><path fill="#E91C59" d="M156.34,46.47c101.78,8.38,133.83,142.14,44.1,192.68l-44.1-87.14V46.47ZM207.57,97.72l-.89-10.39-9.34-1.93-.27,12.04c-13.16,1.69-22.32,15.18-15.85,27.67,3.97,7.67,13.62,9.22,15.17,11.46,2.41,3.49.37,11.95.94,16.48l-7.93-.28-2.34-9.97-6.23.91-1.64,16.23,3.06,3.07,15.1.28v12.31c14.11,2.35,8.02-7.69,10.58-11.96.55-.92,9.04-3.04,11.84-5.58,13.15-11.92,3.74-30.97-12.32-32.81l.13-17.29h8.18s.02,8.22.02,8.22l6.93-.25,3.01-3.12c.43-4.24,2.08-13.12-3.06-14.8l-15.1-.27Z"/></svg>
                ),
              },
              {
                title: "PO & Shipping Chaos",
                desc: "Manual order management, missed shipping windows, and inventory mismatches.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5"><path fill="#E91C59" d="M78.89,207.45c-6.86,0-13.4,0-20,0-5.73,0-11.15-1-11-8.29.13-6.79,5.17-7.86,10.7-7.81,2.53,0,5.06-.09,7.59,0,9.29.4,17.22-.23,25-7.9,11-10.83,28.66-7.9,39.43,3.5a14.65,14.65,0,0,0,9.41,4.19q34.17.54,68.33,0a16.33,16.33,0,0,0,10.09-4.56c12.31-12.19,30.59-13.25,41.87-.86,4.86,5.34,9.65,6.44,16.59,5.08v-39H230.08c-14.2,0-17.88-3.71-17.89-17.93V80.44H71.66c-2.28,0-5.22.79-6.68-.32-2.63-2-5.83-5.08-6-7.9C58.79,70,62.47,67,65.07,65.31c1.63-1,4.44-.28,6.71-.28H207.69c18.61,0,19.3.6,21.79,19.76,6.9,0,13.92-.07,20.94,0,12.57.14,21.85,6,27.22,17.19,5.12,10.68,9.75,21.62,14.12,32.63a37,37,0,0,1,2.29,12.54c.29,13.16.16,26.32.09,39.48-.06,12.34-6.35,19.61-18.47,20.6-4.38.36-6.48,1.13-7.56,6-2.84,13-14.37,21.73-27.43,21.95-13.48.23-24.87-8.34-28.63-21.52-.55-1.91-1.17-3.8-1.83-5.94h-72c-1.82,9.33-5.3,18.27-14.21,22.72a40,40,0,0,1-18,4.43C92.41,234.65,83,224.76,78.89,207.45Zm195.89-71.31c-4.56-10.24-8.46-20-13.33-29.31-1.38-2.65-5.45-5.13-8.5-5.43-7.9-.76-15.92-.25-23.83-.25v35ZM108.63,219.46c7.11,0,13.53-6.6,13.31-13.68a13.37,13.37,0,1,0-13.31,13.68Zm144.64-13.62a13.36,13.36,0,0,0-13.61-13.1,13.19,13.19,0,0,0-12.68,14,13.15,13.15,0,1,0,26.29-.86Z"/><path fill="#E91C59" d="M42.06,158.9c8.84,0,17.68,0,26.51,0,5.36,0,8.83,2.29,8.63,8.08-.19,5.32-3.49,7.48-8.53,7.48q-26.88,0-53.77,0c-5.34,0-9-2.36-9.13-7.83-.13-5.71,3.75-7.77,9-7.76Z"/><path fill="#E91C59" d="M70.8,113.73c-8.33,0-16.67-.07-25,0-5.41.06-9.78-1.37-10-7.6s3.94-8,9.46-8q26.14.06,52.29,0c5.28,0,9.37,2,9.43,7.48,0,5.73-3.86,8.26-9.61,8.17C88.49,113.63,79.65,113.72,70.8,113.73Z"/><path fill="#E91C59" d="M56,144.1c-8.6,0-17.19,0-25.78,0-5.61,0-9.5-2.16-9.42-8.25s4.29-7.35,9.37-7.35q26.16,0,52.32,0c5.55,0,9.78,1.94,9.48,8.09-.27,5.46-4.13,7.6-9.44,7.54C73.69,144,64.84,144.1,56,144.1Z"/></svg>
                ),
              },
              {
                title: "Wasted Data Potential",
                desc: "You have Amazon Retail Analytics (ARA), yet zero insight driving real decisions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5"><path fill="#E91C59" d="M229.51,89.29l-.27,7.5-9.57,3.41-7.65,99.92c-34.94-2.75-61.97,23.07-55.93,58.83,1.35,8.01,7.06,13.56,9.26,20.88h-69.02c-5.65,0-17.95-12.27-18.02-18.92l-13.94-160.7-9.84-3.16c-.81-2.17.85-7.75,2.91-7.75h172.07ZM133.68,114.98c-17.92,4.26-16.03,39.16,5.94,42,30.8,3.98,34.3-51.56-5.94-42Z"/><path fill="#E91C59" d="M182.85,27.07c-.51-.41-3.07-.48-4.87-1.85-3.72-2.83-6.22-7.81-10.66-9.81l-.03,21.4,21.38,1.93c.51-.61-4.92-10.36-5.81-11.66,4.13,3.37,8.14,6.64,11.67,10.69v43.75c-29.64-.35-65.18,5.47-94.4,2.04-2.83-.33-5-.24-6.71-3.02V9.57h72.91c5.44,5.9,11.93,10.84,16.53,17.5ZM166.32,48.46c-19.76.04-39.56-.03-59.3,0v3.89h72.91c.41,0,3.54-3.29,2.92-3.87-5.6-1.73-11.32-.03-16.53-.02ZM108,58.18l-2.88,2.92,2.88,2.92h71.94l2.88-2.92-2.88-2.92h-71.94ZM182.85,69.84h-75.83v3.89h75.83v-3.89Z"/><path fill="#E91C59" d="M234.67,220.22c36.46,41.16-26.32,96.97-62.53,55.73-37.2-42.36,27.17-95.67,62.53-55.73ZM208.81,233.87c-1.32,1.03-1.78,4.44-3.78,5.02l-3.37-.12-16.16-15.18-5.63,3.76c-4.64,6.85,14.27,16.84,14.29,20.37-4.08,9.97-18.88,12.02-13.24,24.32,4.03,2.83,19.2-12.25,22.34-15.52l17.5,17.41,5.95-5.8c2.94-5.67-14.03-13.97-14.77-20.4,0-8.14,27.15-16.41,9.09-24.15-3.83,3.82-7.98,6.98-12.22,10.28Z"/></svg>
                ),
              },
              {
                title: "Fear of Account Suspension",
                desc: "One policy violation could put your listings (and revenue) at risk.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5"><path fill="#E91C59" d="M294.53,150c0,79.59-64.84,144.54-144.33,144.57A144.65,144.65,0,0,1,5.47,149.61c0-79.49,65-144.16,144.69-144.14C229.7,5.49,294.52,70.37,294.53,150ZM150.7,23.06C80.11,23,23.18,79.17,23.06,149.05c-.12,70.59,56.1,127.75,125.79,127.88,70.68.13,127.93-56,128.08-125.63C277.08,80.15,221,23.15,150.7,23.06Z"/><path fill="#E91C59" d="M174.12,196c-4.09,4.3-8.33,8.73-12.54,13.19C151,220.52,149,220.49,138.13,209c-4.2-4.45-8.47-8.85-13.17-13.77-5.88,6.15-11.31,12-17,17.67-6.27,6.28-10,6.28-16.23-.09-7.33-7.43-14.37-15.13-21.68-22.57-3.87-3.94-4.41-7.93-.55-11.91s8.17-3.13,11.95.53c6.13,5.92,12.18,11.92,19.36,19,4.83-5.21,9.6-10.54,14.57-15.68,8.55-8.85,10.56-8.76,19.45.17,4.87,4.9,9.82,9.72,15.47,15.29,4-4.12,7.79-8.14,11.67-12.09,13-13.23,13-13.25,26.21.31,3.7,3.8,7.15,7.85,10.65,11.71,6.66-6.32,12.49-11.71,18.14-17.28,4-3.9,8.12-6.9,13.12-2.22,5.28,4.95,2.71,9.36-1.57,13.66-7,7-13.62,14.38-20.59,21.4-5.94,6-9.66,5.87-15.71.14Z"/><path fill="#E91C59" d="M102.89,93.4a14.73,14.73,0,0,1,15,15.23,15.16,15.16,0,0,1-14.67,15c-8,.23-15.58-7-15.73-15S94.45,93.43,102.89,93.4Z"/><path fill="#E91C59" d="M182,108.09c.13-8.61,6.84-14.94,15.56-14.68,8.09.25,14.81,7,14.82,14.89,0,8.08-7.38,15.41-15.46,15.33A15.13,15.13,0,0,1,182,108.09Z"/></svg>
                ),
              },
              {
                title: "Inventory Issues",
                desc: "Overstock today, stockout tomorrow; forecasting remains a guessing game.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#E91C59" d="M78.8,265.12c21.91-8.8,42-16.7,61.81-25,2.41-1,5.48-4.24,5.52-6.49.41-22.15.25-44.32.25-67.79-21.73,9.3-41.65,17.57-61.28,26.48-2.81,1.27-5.95,5.55-6,8.51C78.56,221.65,78.8,242.51,78.8,265.12Z"/>
                    <path fill="#E91C59" d="M296,167.38c-21.93,8.82-42,16.75-61.9,25.09-2.4,1-5.42,4.29-5.46,6.56-.42,21.52-.25,43-.25,66,21.65-8.61,41.77-16.37,61.6-24.79,2.73-1.16,5.68-5.64,5.75-8.64C296.23,210.75,296,189.87,296,167.38Z"/>
                    <path fill="#E91C59" d="M153.59,155.27c22.1-9,42.45-17.12,62.6-25.68,2.22-.94,4.75-4.4,4.79-6.73.36-21.19.21-42.39.21-65.24-22.28,9-43.36,17.34-64.25,26.14-1.75.74-3.18,4.41-3.21,6.73C153.49,111.31,153.59,132.13,153.59,155.27Z"/>
                    <path fill="#E91C59" d="M153.58,165.85c0,23.05-.22,43.92.23,64.78.07,3.18,2.51,8,5.12,9.16,20.11,8.65,40.53,16.58,61.76,25.1v-70.3l-29.48-12.51c-.7,6.71-1.24,11.93-1.79,17.16-5.29-7.43-5.81-16.92-10.82-21.88C172.83,171.64,163.08,169.94,153.58,165.85Z"/>
                    <path fill="#E91C59" d="M71.65,265.11c0-22.59.19-43.48-.23-64.36a11,11,0,0,0-5.09-8c-7.37-3.63-15.27-6.17-22.92-9.11-1.54,6.05-2.8,11-4.47,17.54-7.92-8.5,1.84-20-10.27-23.94C20.63,174.6,12.89,171,4,167.5c0,22.59-.28,43.1.29,63.59.1,3.26,3.35,8.07,6.36,9.36C30.12,248.83,49.91,256.43,71.65,265.11Z"/>
                    <path fill="#E91C59" d="M146.42,155.26c0-22.64.12-43.06-.14-63.48,0-2.74-1.29-7-3.24-7.93-8.72-4.2-17.89-7.44-27.08-11.1-1.33,6.94-2.3,12-3.66,19.09C95,62.1,94.48,61.62,79.12,59.7v68.83Z"/>
                    <path fill="#E91C59" d="M290,162.14c-12.43-5.3-23.5-8.46-32.86-14.33-22.16-13.89-43.44-13.64-65.78-.68-9.2,5.34-19.67,8.5-29.87,12.77,16.88,13.15,32.95,14.69,49.7,3.67a32.41,32.41,0,0,1,10-4.08c2.09-.53,4.52.32,6.81.56l.51,3.06-28.78,13.12c-.24.94-.47,1.88-.71,2.82,10,2.68,21.11,9.51,29.78,7.2C249.07,180.85,268.19,171.06,290,162.14Z"/>
                    <path fill="#E91C59" d="M78.09,157.94c.34,1.71.69,3.43,1,5.15l-29,13.49c9.32,5.53,19.88,12.4,27.7,10.07,20.71-6.18,40.22-16.33,63-26.1-22.66-9-42.21-16.8-61.84-24.4a9.82,9.82,0,0,0-6.61-.13c-20.19,8.3-40.29,16.85-59.75,25C34.8,184.63,56.25,162.76,78.09,157.94Z"/>
                    <path fill="#E91C59" d="M213.84,53c-22-6.49-41.13-12.19-60.3-17.67a13.62,13.62,0,0,0-7.14,0c-19.17,5.49-38.28,11.2-57.35,16.82,20.13,19.77,42.84,2.27,64.12,3.56l.57,4.42L126,67.46c-.12,1.08-.24,2.17-.35,3.25,9.72,2,20.41,7.67,29,5.37C173.78,71,191.87,61.89,213.84,53Z"/>
                  </svg>
                ),
              },
              {
                title: "No Leverage with Amazon",
                desc: "You walk into vendor negotiations underprepared and underpowered.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#E91C59" d="M184.84,115.17c.82-9.36,4.89-23.32,10.23-31.17,3.95-5.81,11.42-11.83,17.01-16.15-2.16-6.97-3.18-13.53,4.27-17.02-3.17-8.23-12.64-26.54-5.89-34.24,5.33-6.07,10.7,2.43,13.39,2,1.43-.23,3.29-2.87,5.2-3.49,6.77-2.19,9.31,3.91,11.93,3.49,1.43-.23,3.29-2.87,5.2-3.49,6.77-2.19,9.31,3.91,11.93,3.49,3.15-.5,10.92-10.11,14.59,1.57,3.79,12.04-7.86,25.46-7.54,29.36.11,1.32,6.09,5.1,6.5,10.33.29,3.59-2.36,5.7-2.29,6.8.06,1,12,10.45,14.56,13.66,15.35,19.25,13.76,55.14,12.31,79.18-.6,10.01-1.01,8.47-.13,18.58.94,10.76,2.41,29.61-12.24,30.56l-110.46-8.51,21.28,57.94c-.16,12.15,3.93,24.91-11.94,26.36s-51.86,1.74-67.2-.04c-5.63-.65-9.68-3.57-10.59-9.4-3.63-23.21,16.3-57.33,24.18-79.14l-106.33-7.17c-17.79-1.91-20.88-5.05-19.27-23.51.9-10.34,3.19-15.66,14.24-17.15-38.06-43.35,2.17-111.29,58.55-97.1,48.64,12.24,59.6,73.17,22.83,104.93l85.66,5.73v-46.4ZM263.35,27.37c-6.72,4.36-10.32-2.31-13.78-2.64-2.36-.22-4.91,3.89-8.46,4.09-4.05.22-6.07-3.84-8.68-4.09-2.35-.22-4.94,3.9-8.47,4.1s-4.02-2.67-6.31-2.17l7.38,21.88h30.95s7.36-21.18,7.36-21.18ZM51.69,59.12C21.98,63.75,4.59,99.1,14.88,126.66c2.45,6.55,12.06,20.25,18.6,22.8,12.56,4.9,36.11,1.5,50.03,4.33,52.71-26.66,27.77-103.96-31.81-94.67ZM194.83,108.03c-2.23,16.63,1.66,37.82,0,54.97l88.59,6.46c4.44-2.49,2.56-21.7,2.72-27.22.42-14.53,2.72-32.8-3.19-46.67-4.46-10.47-14.49-19.12-24.6-23.94-.81,4.14,6.5,16.41-1.42,17.21-6.42.65-4.21-4.96-5.66-8.7-3.35-8.65-15.42-11.3-22.11-4.88-2.07,1.99-6.51,22.3-12.25,10.61-1.57-3.2,2.9-11.56-1.36-9.95-8.57,3.24-19.53,23.25-20.73,32.11ZM183.41,254.37c.28-1.96-.45-3.63-.98-5.45-2.42-8.34-12.24-35.71-16.39-42.15-5.92-9.2-17.58-12.03-26.82-5.87-10.47,6.97-17.32,41.17-22.91,53.47h67.1Z"/>
                    <path fill="#E91C59" d="M63.48,77.33v7.15c5.08-.25,16.8.14,13.56,7.14l-13.55-1.44-.09,16.27c21.54,2.83,21.79,26.49.15,28.05l-.07,7.09h-4.27s-.01-7.14-.01-7.14c-5.89-.65-18.26-.46-15.69-8.56l15.69,2.85.09-16.26c-20.69-3.83-21.32-26.11-.14-28.05l.06-7.1h4.27ZM59.2,90.19c-11.41,2.64-12.88,10.24-2.11,15.68,2.9.38,1.85-.12,2.12-2.09.56-4.19-.39-9.25-.01-13.58ZM71.7,116.23c-1.71-1.71-5.83-1.81-8.21-1.77v14.27c6.69,1.03,13.71-7,8.21-12.5Z"/>
                    <path fill="#E91C59" d="M92.92,103.14c7.66-2.5,10.69,9.44,3.83,11.16-6.15,1.54-8.62-9.6-3.83-11.16Z"/>
                    <path fill="#E91C59" d="M27.36,103.19c7.21-1.78,8.38,11.29,1.15,11.3-5.76,0-6.93-9.88-1.15-11.3Z"/>
                    <path fill="#E91C59" d="M235.89,96.28c43.65-6.05,50.92,58.31,12.14,64.95-46.91,8.04-54.93-59.02-12.14-64.95Z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                {item.icon}
                <h3 className="font-bold text-[18px] mb-3 leading-snug" style={{ color: "#E91C59" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">get a free account audit</span>
                <span className="svc-btn-bottom">get a free account audit</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* What's Included Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
            What&apos;s Included in Our End-to-End <span style={{ color: "#E91C59" }}>Vendor Central Management</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[780px] mx-auto">
            Our end-to-end management is designed to protect your margins, simplify operations, and scale your wholesale channel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-12">
            {[
              {
                dark: false,
                title: "Profitability & Financial Management",
                items: ["Chargeback disputes with root cause analysis & SOPs", "Invoice reconciliation & deduction tracking", "Strategic pricing for retail/wholesale alignment", "Co-op fee, damage allowance, and profitability audits"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="1.5"/>
                    <path d="M7 8h10M7 12h7M7 16h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                dark: true,
                title: "Efficient Operations",
                items: ["Full-cycle PO management & reconciliation", "Inventory forecasting powered by AI tools", "Return and damage reduction strategies"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    <rect x="9" y="3" width="6" height="4" rx="1" stroke="#fff" strokeWidth="1.5"/>
                    <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                dark: false,
                title: "Compliance & Account Health",
                items: ["24/7 health monitoring & flag alerts", "Rapid POA drafting & submission", "Product safety & documentation support", "Suppression recovery & listing reinstatement"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M12 3l8 4v5c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10V7l8-4z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="p-8" style={{ backgroundColor: item.dark ? "#1e293b" : "#f4f4f4" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#E91C59" }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[18px] mb-4 leading-snug" style={{ color: item.dark ? "#ffffff" : "#1e293b" }}>{item.title}</h3>
                <div className="space-y-3">
                  {item.items.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-5 h-5 mt-0.5" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#E91C59"/>
                        <path d="M6 12.5l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-[15px] leading-snug" style={{ color: item.dark ? "rgba(255,255,255,0.65)" : "#67768e" }}>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">OPTIMIZE MY VENDOR CENTRAL ACCOUNT →</span>
                <span className="svc-btn-bottom">OPTIMIZE MY VENDOR CENTRAL ACCOUNT →</span>
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* What We Need From You */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1659px] mx-auto flex flex-col lg:flex-row items-center gap-0">
          <div className="flex-shrink-0 w-full lg:w-[50%]">
            <Image src="/what-we-need-from-you-3-1024x1024.webp" alt="What We Need from You" width={800} height={600} unoptimized className="w-full h-auto object-contain" />
          </div>
          <div className="flex-1 px-10 py-10">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
              What We Need From You
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-8 max-w-[520px]">
              We&apos;re committed to helping you succeed, but great outcomes start with the right inputs. To ensure a smooth and effective engagement, please provide:
            </p>
            <div className="space-y-4 mb-6">
              {[
                "Child access to your account",
                "Documents required by Amazon (when applicable)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#E91C59"/>
                    <path d="M6 12.5l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#1e293b] text-[16px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[#67768e] text-[15px] leading-relaxed max-w-[480px] mb-8">
              Don&apos;t worry, we are committed to guiding you through every step of the process.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">TALK TO A VENDOR CENTRAL EXPERT →</span>
                <span className="svc-btn-bottom">TALK TO A VENDOR CENTRAL EXPERT →</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By Stats Section */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-12" style={{ backgroundColor: "#f4f4f4" }}>

            <h2 className="text-center font-bold mb-10" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "36px", color: "#1e293b" }}>
              Trusted by 1,200+ Amazon Sellers
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* Stats */}
              <StatsCounter />

              {/* Expert Advice Card */}
              <div className="flex-shrink-0 flex flex-col items-center text-center gap-3 bg-white rounded-xl px-8 py-6 shadow-sm min-w-[180px]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#E91C59" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-8 h-8">
                    <path fill="#ffffff" d="M203.45,255.03h-29.15v-44.94c0-1.49-7.46-12.84-9.76-14.53-7.44-5.44-21.56-5.49-29.06,0-2.31,1.69-9.76,13.04-9.76,14.53v44.94h-29.15V110.5c0-4.59,8.9-36.83,12.05-38.96l81.16-.79c4.97,1.71,13.69,34.5,13.69,39.76v144.54ZM144.55,95.23c-43.52,6.28-37.89,73.26,6.43,72.12,49.45-1.27,43.36-79.31-6.43-72.12Z"/>
                    <path fill="#ffffff" d="M181.58,55.84h-63.17c9.04-13.87,17.37-31.43,27.1-44.56,1.5-2.03,2.31-4.83,5.67-4.02l30.4,48.58Z"/>
                  </svg>
                </div>
                <p className="font-bold text-[13px]" style={{ color: "#1e293b" }}>Linda Davis</p>
                <p className="text-[11px]" style={{ color: "#67768e" }}>Account Lead</p>
                <p className="font-bold text-[16px] leading-tight" style={{ color: "#E91C59" }}>Need Expert<br />Advice?</p>
                <p className="text-[12px]" style={{ color: "#67768e" }}>Book Your Strategy Call Today!</p>
                <a href="/contact-us" className="svc-btn svc-btn-pink mt-1" style={{ fontSize: "12px", padding: "9px 20px" }}>
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">Book a Call</span>
                    <span className="svc-btn-bottom">Book a Call</span>
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
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#1e293b" }}>
              Ready to Scale Your <span style={{ color: "#E91C59" }}>Ready to Take Control of Vendor Central?</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              Partner with SPCTEK and turn Amazon Vendor Central into your most profitable sales channel.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">get a free account audit →</span>
                <span className="svc-btn-bottom">get a free account audit →</span>
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
