import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "FBA Wholesale Management | AMZ Pro Venture",
  description: "Expert FBA Wholesale account management services by AMZ Pro Venture. Optimize your wholesale operations, improve performance, and grow your brand on Amazon.",
};

export default function FBAWholesaleManagement() {
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
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(32px, 4.5vw, 58px)", color: "#ffffff" }}
          >
            NEED HELP SCALING AMAZON <span style={{ color: "#ff9900" }}>FBA WHOLESALE?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[560px] mb-5 text-left">
            Running a wholesale business on Amazon requires more than just sourcing products. From listing compliance to inventory management, we handle the complexities so you can focus on selling and scaling.
          </p>

          <div className="space-y-3 mb-8">
            {["Optimized product listings", "24/7 account health monitoring", "Dynamic pricing management", "Restricted category ungating", "Data-driven inventory management and forecasting"].map((item) => (
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
            MANAGE MY FBA WHOLESALE BUSINESS →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Main-Banner.webp"
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
            <span className="text-[#000000]">Why Amazon Wholesale is the </span>
            <span className="text-[#ff9900]">Smartest Way to Scale Fast</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[680px] mx-auto">
            Build a 6–7 Figure Amazon Business by Selling What People Already Trust
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Massive Market Reach",
                desc: "Instantly access millions of ready-to-buy Amazon customers without needing to build an audience.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M291.33,182c-21.84-5.29-41.2-9.69-60.34-14.92-3-.82-7-5.31-7.09-8.24-2.28-54.22-29.63-81.3-84-82.5a21.51,21.51,0,0,1-3.55-1c-4.55-21.44-9.22-43.46-14.31-67.42,47.06-6.8,88,3.92,122.35,35C285.49,80,300.47,126.61,291.33,182Z"/>
                    <path fill="#ff9900" d="M125.78,292.9c.86-3.49,1.7-6.9,2.64-10.67C185,283.84,226,260,251.88,207.35l-31.29-8.09c-21.21,37.56-53,54.26-96.6,50.37l-11.4,42.49-11.16-3.91,9.77-40.27C100.38,240.88,89,235.24,79.88,227s-15.95-19.12-24.5-29.71L16.5,210.94l-4.45-11.1,38.14-14.07c.72-15.85-.14-30.91,2.42-45.36,4.16-23.48,17.7-41.9,38-54.2,9.17-5.55,13-10.76,8.62-21.12C97.11,60,96.63,54.22,95.39,48.73,44.31,63,11,122.54,20.05,183.5l-12.6,5.6c-.4-15.95-2.26-29.92-.82-43.53,5.81-55,54.66-110.45,98.27-112.08,3.51,15.23,6.86,30.63,10.64,45.92,1.93,7.76-3.93,8.44-8.51,10.66-41.28,20-57.8,67.88-36.23,107,14.93,27.09,38.32,41.41,69.63,41,30.81-.37,53.08-15.31,68-41.82,1.78-3.15,3.15-6.53,5.36-11.17L266,198.6C255.88,256.14,187.51,302,125.78,292.9Z"/>
                    <path fill="#ff9900" d="M21.77,223.73l10.84-4.85c13.62,22.7,31.33,40,54.54,51.62,2.74,1.38,3,7.77,2.91,12.48C59.36,271.82,37.41,252.23,21.77,223.73Z"/>
                    <path fill="#ff9900" d="M174.37,125.94h13.24V195.6l-13.24.68Z"/>
                    <path fill="#ff9900" d="M146.05,141.38V195.3H132.63V141.38Z"/>
                    <path fill="#ff9900" d="M111.62,154.34h13.46V195.4H111.62Z"/>
                    <path fill="#ff9900" d="M153.44,154.43h13.19v41.19l-13.19.7Z"/>
                    <path fill="#ff9900" d="M104.65,175.6v19.83l-13.19.93V175.6Z"/>
                  </svg>
                ),
              },
              {
                title: "Lower Startup Costs",
                desc: "Skip the high costs of product development, no need to invent or manufacture.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M264.83,133l-27.96-.26C232.35,43.6,124.02-1.14,62.75,68.34c-52.01,58.98-17.16,151.67,59.98,163.3,5.94.9,12.91-1.02,18.73.07,4.28.8,28.17,24.25,27.06,25.76C70.36,280.53-13.73,193.29,14.77,95.52,28.7,47.71,75.07,9.41,124.97,6.06c77.77-5.22,136.71,50,139.87,126.95Z"/>
                    <path fill="#ff9900" d="M264.82,226.95l21.94.38,3.89,3.22c.64,2.15-.3,3.92-1.15,5.8-1.54,3.4-47.27,48.65-52.81,52.9-2.59,1.99-4.76,4.6-8.27,5.04-3.51-.44-5.68-3.05-8.27-5.04-6.21-4.76-51.92-51.25-53.01-55.08-3.25-11.47,17.84-6.15,24.89-7.2,2.55-2.56-2.42-61.02.65-72.25.65-2.38,3.18-7.63,5.21-7.63h63.42l3.52,3.52v76.34Z"/>
                    <path fill="#ff9900" d="M147.39,57.81l.31,13.79c19.72,4.66,36.42,18.3,34.93,40.25l-20.9-.26c.62-28.07-55.72-26.72-46.86-1.29,4.03,11.57,58.06,8.41,68.32,32.68,6.95,16.44.61,38.2-15.36,46.87-3.83,2.08-19.31,5.64-20.1,6.92-4.96,7.99,5.92,17.38-21.5,13.75l-.09-16.36c-23.57-1.15-40.09-21.38-37.49-44.74,23.35-3.11,16.88,2.94,25.82,15.3,13.74,19.01,55.16,12.23,48.94-8.91-5.32-18.08-57.52-10.83-69.52-36.28-10.74-22.77,9.4-45.71,32.11-47.85l.23-13.88h21.16Z"/>
                  </svg>
                ),
              },
              {
                title: "Faster Scalability",
                desc: "Partner with suppliers, not factories. Scale by expanding product lines, not production cycles.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M116.75,226.23c7.82-.87,15.35-1.77,22.89-2.47a4.43,4.43,0,0,1,2.77,1.43c11.58,10.75,25.12,17.54,40.82,19.61,26.28,3.47,48.81-4.54,66.41-24.19,19-21.27,24.48-46.36,15.54-73.48S236.91,102.86,208.89,97c-24.81-5.22-47,1.39-65.89,18.36a5.26,5.26,0,0,1-4.56,1.62c-7.08-.9-14.18-1.6-21.77-2.42.83-1.17,1.41-2.07,2.08-2.9,14.45-18,32.87-29.68,55.49-34.54,1.57-.34,2.22-.8,2.16-2.45-.11-3.45,0-6.9-.06-10.36a7.44,7.44,0,0,0-.26-1.09c-1.82,0-3.69,0-5.57,0-4-.1-6-2.12-6-6.13q0-8.41,0-16.83c0-4.08,2.14-6.18,6.27-6.19q23.31,0,46.61,0c3.82,0,6,2.27,6.07,6.17.05,5.61,0,11.22,0,16.83,0,4-2.15,6.07-6.06,6.12-1.88,0-3.75,0-5.85,0,0,4.29,0,8.25.06,12.2a2,2,0,0,0,1.23,1.52A96,96,0,0,1,244.58,89.5a2.63,2.63,0,0,0,.7.12c2.95-3.45,5.95-7,9-10.5,3.51-4,6.64-4.28,10.65-.87,3.21,2.75,6.43,5.48,9.65,8.23,3.47,3,3.78,6.43.83,9.91-3.11,3.69-6.26,7.34-9.47,11.1,21.87,26.86,28.95,57.05,19.35,90.39-7.26,25.22-23,44.19-46.15,56.6C193.39,279.06,141.08,261.76,116.75,226.23Z"/>
                    <path fill="#ff9900" d="M154,215.44l28.8-32.39c3.21-3.61,6.52-7.14,9.58-10.86a7.05,7.05,0,0,0,1.54-4.1c.1-18.29.06-36.58.06-54.86v-2.76c18.7-1.1,45.53,10.62,56.29,38.35a60.29,60.29,0,0,1-24.59,73C201.37,236.9,171.35,231.83,154,215.44Z"/>
                    <path fill="#ff9900" d="M75.19,161.25c18.28,0,36.56,0,54.84,0,7,0,11.41,6.33,8.92,12.54-1.47,3.65-4.77,5.69-9.28,5.69H44.82c-8.36,0-16.73,0-25.09,0a9.19,9.19,0,0,1-9-7.11,9.06,9.06,0,0,1,5.58-10.47,14.31,14.31,0,0,1,4.81-.64Q48.15,161.21,75.19,161.25Z"/>
                    <path fill="#ff9900" d="M88.58,195.1c13.89,0,27.78,0,41.66,0a9.21,9.21,0,0,1,7.09,15.22c-2.09,2.5-5,3.23-8.11,3.22q-29.11,0-58.22,0c-7.77,0-15.53,0-23.29,0-4.83,0-8.34-2.45-9.59-6.44a9.19,9.19,0,0,1,9.06-12C61,195.07,74.78,195.1,88.58,195.1Z"/>
                    <path fill="#ff9900" d="M98.69,145.55c-10.44,0-20.88,0-31.32,0a8.84,8.84,0,0,1-8.65-5.8c-1.39-3.66-.63-7.7,2.5-10.07a11,11,0,0,1,6.07-2.33c21-.17,42.1-.14,63.15-.09a9.07,9.07,0,0,1,9.14,8.73c.2,5.09-3.34,9.36-8.54,9.46-10.78.22-21.57.07-32.35.07Z"/>
                  </svg>
                ),
              },
              {
                title: "Higher Conversions",
                desc: "Leverage the trust of well-known brands to drive more clicks, higher conversion rates, and fewer returns.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M157.79,210.65c.13,7.79,9.19,7.33,11.52,12.87.57,1.34,1,2.74,1.42,3.87.35,1.61-.16,2.8-1.38,3.06-2.25.47-4.76,1.14-6.69-.63-1-.92-1.26-2.67-2.16-3.81-2.23-2.78-5.4-3-7.68-.76-2.62,2.57-2.6,6.13.78,8.3,3.66,2.36,7.85,3.86,11.59,6.14a12.14,12.14,0,0,1,3.06,18.21c-3.13,3.72-10.58,2.89-10.49,10a30.44,30.44,0,0,1-3.15-.09c-.38-6.83-7.35-6.41-10.73-9.86-2.32-2.39-4.78-5.89-2.19-8.33,2-1.88,6.44-2.87,8.46,2.12,1.38,3.43,4.53,4.37,8.08,3.27a4.94,4.94,0,0,0,3.79-4.4c.3-4-2.71-5.49-5.7-6.91a67.68,67.68,0,0,1-8.65-4.31c-7.77-5.14-7.61-15.81.35-20.39,3-1.72,6.67-2.16,6.57-6.92C154.55,210.56,157.77,210,157.79,210.65Z"/>
                    <path fill="#ff9900" d="M245.13,65c-2.57-1.78-4.06-1-5.6,1.44-3.54,5.5,5.76,2.23,4.09,6.31-29.66,17-170.67,15-187.2-.79,6.75-4,14.66-4.16,21.49-7.1-1.4-5.86-5.26-5.94-9.17-4.69A138.45,138.45,0,0,0,53.17,66C47,68.81,45.61,72.69,50.65,78.3c6.11,6.76,11.93,13.82,17.47,21.06,20.69,27,43,53,54.53,85.88,1.94,5.54,1.89,8.83-3.26,13.08-18.09,15-23.54,40.72-14.26,62.52,9.11,21.4,32.05,35.71,54,33.73,24.51-2.23,43.84-18.37,50-41.75,6-22.63-3.08-45.88-23.89-59.69-4-2.67-4.67-4.83-3.13-9.08a187.67,187.67,0,0,1,24.38-45.64q20.82-29,41.73-58c1.37-1.9,3.1-3.75,3.76-5.91C253.85,68.58,248.58,67.4,245.13,65ZM199.57,239.89a43.74,43.74,0,0,1-43.87,43.43c-24.08-.11-43.81-19.67-44-43.59-.2-24.83,19.8-44.42,45-44.1C180.87,196,199.73,215.41,199.57,239.89Z"/>
                    <path fill="#ff9900" d="M163,76a19.44,19.44,0,0,1-19.61-19.45C143.61,46.42,152.5,38,163,38a19,19,0,0,1,0,38Z"/>
                    <path fill="#ff9900" d="M96.91,27.46a19,19,0,1,1,.7,37.95c-10.76.23-20-8.59-20-19.06C77.59,36.34,86.56,27.57,96.91,27.46Z"/>
                    <path fill="#ff9900" d="M218.53,70.66A19,19,0,0,1,199.35,52c-.21-10.73,8.56-19.34,19.58-19.21,10.36.12,19.06,8.92,18.94,19.15A19.27,19.27,0,0,1,218.53,70.66Z"/>
                    <path fill="#ff9900" d="M137.36,35.52c-8.27-.06-15.26-7-15.21-15.07,0-7.67,7.73-15.24,15.44-15.2s15.08,7.45,15.11,15.43S145.7,35.59,137.36,35.52Z"/>
                  </svg>
                ),
              },
              {
                title: "FBA Fulfillment Included",
                desc: "Let Amazon handle logistics, storage, packing, shipping, and customer service, all streamlined through FBA.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M258.21,102.54c-36.14,21.36-69.59,41.33-103.36,60.73-2.88,1.65-8.67.71-11.89-1.15-33-19-65.8-38.44-101.27-59.3L93.88,71.6c31.05,55,88.77,45.41,111.26-.11Z"/>
                    <path fill="#ff9900" d="M144.27,173.51c-4.51,10.67-8.09,19.77-12.15,28.65-5.91,12.93-13.85,16.47-25.73,9.72C79.6,196.68,53,181.09,27.15,164.36c-4.54-2.94-8-12.86-6.76-18.35,2.79-12.1,8.93-23.43,14.42-36.84,19.5,11.36,37.54,21.79,55.51,32.35C108,151.9,125.55,162.4,144.27,173.51Z"/>
                    <path fill="#ff9900" d="M149.33,100.33c-26.82-.2-47.13-20.74-47.06-47.62.06-27.23,21.34-47.92,48.8-47.46,26.43.45,46.68,21.62,46.33,48.45C197.05,80.34,176.24,100.53,149.33,100.33Zm26.51-62.51-4-3.15-29.65,27.8L123.9,50.73c7.21,23.79,16.33,26.76,30.21,13.17,5.89-5.76,11.82-11.51,17.32-17.63C173.49,44,174.41,40.67,175.84,37.82Z"/>
                    <path fill="#ff9900" d="M155.83,173.16l109-64.23c5.48,13.61,11.87,25.72,14.83,38.62,1.18,5.17-3.53,14.62-8.38,17.74-25.38,16.32-51.48,31.55-77.72,46.48-11.87,6.75-20.07,3.39-25.93-9.15-3.51-7.49-6.45-15.25-9.6-22.91C157.35,178,156.85,176.18,155.83,173.16Z"/>
                    <path fill="#ff9900" d="M154.84,294.75V199.28c3.12,5,4.71,7.43,6.16,9.92,8.46,14.49,21.28,18.7,35.95,10.58,18.39-10.18,36.28-21.25,54.45-31.83,2.8-1.64,6-2.68,10.54-4.71,0,14.61.61,27.71-.36,40.71-.31,4.07-4,9.28-7.59,11.5C222,255,189.59,274.08,154.84,294.75Z"/>
                    <path fill="#ff9900" d="M144.41,198.88v95.63C110,274,77.25,254.76,44.9,234.9c-3.53-2.17-6.65-7.72-6.95-11.92-.91-12.59-.33-25.29-.33-41,20.35,11.89,38.69,22.58,57,33.32C118.47,229.29,129.81,226.21,144.41,198.88Z"/>
                  </svg>
                ),
              },
              {
                title: "Bigger Margins, Bigger Profits",
                desc: "Buy in bulk at distributor pricing and resell at a markup to gain profit from volume and smart pricing strategies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M140.11,131.52c32.46-3.84,65.55,13.56,79.86,43.02,34.81,71.69-42.51,142.78-111.43,102.06-62.92-37.18-40.72-136.53,31.57-145.08ZM126.56,158.93c-.93-12.43-10.93-4.17-17.16.44-21.64,16.01-32.89,53.97-16.85,76.69l5.89-2.13c-14.4-26.6-1.04-65.03,28.12-75ZM155.28,174.74c-1.4-.88-1.81-3.76-2.85-5.25l-3.57-1.14c-5.02,13.45-22.08,15.38-16.6,32.9,4.77,15.24,25.81,8.13,29.11,20.34,4.07,15.08-18.03,16.37-27.77,14.72-1.59,8.71,9.64,5.71,11.42,7.44l1.45,6.71,8.21-.12c-3.07-10.52,12.33-8.88,14.02-22.46,2.88-23.17-17.42-18.62-26.53-24.19-15.97-9.78,10.6-28.09,24.21-21.3,1.17-8.4-7.81-5.56-11.11-7.65Z"/>
                    <path fill="#ff9900" d="M112.5,74.6h-26.94s-1.16-4.64-1.16-4.64L149.15,11.5l66.45,58.46-1.16,4.65h-26.94s0,58.57,0,58.57c-22.42-12.92-52.55-12.93-74.99,0v-58.59Z"/>
                    <path fill="#ff9900" d="M25.8,126.16l-21.08-1.16,48.35-45.54,50.05,45.54-21.09,1.15c-1.03,1.03.89,23.92-.09,29.2-1.11,5.97-10.06,17.14-12.73,24.77-8.98,25.65-5.77,45.42,3.46,70.25H29.31c-.71,0-1.8,2.97-3.52,2.34v-126.55Z"/>
                    <path fill="#ff9900" d="M227.33,250.36c9.23-24.83,12.44-44.6,3.46-70.25-2.67-7.63-11.62-18.8-12.73-24.77-.98-5.28.94-28.17-.09-29.2l-21.09-1.15,50.05-45.54,48.35,45.54-21.08,1.16v126.55c-1.72.62-2.8-2.34-3.52-2.34h-43.35Z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-white border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                {item.icon}
                <h3 className="font-bold text-[18px] mb-3 leading-snug" style={{ color: "#ff9900" }}>{item.title}</h3>
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
          <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
            What&apos;s Included in Our FBA Wholesale <span style={{ color: "#ff9900" }}>Account Management Plan</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[780px] mx-auto">
            We simplify the complex Amazon FBA reimbursements with a transparent, effective workflow. Here&apos;s how we get your money back:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {[
              {
                title: "Product Listings",
                desc: "We handle all the details of getting your wholesale products live under existing ASINs.",
                items: ["List under existing ASINs without risking listing errors", "Ensure full compliance with Amazon's policies and category rules", "Assist with category and subcategory approvals when needed"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <rect x="4" y="2" width="14" height="18" rx="2" stroke="#ff9900" strokeWidth="1.5"/>
                    <path d="M8 7h8M8 11h6M8 15h4" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Account Health Monitoring & Violation Management",
                desc: "Your account health is the foundation of your business, and we actively protect it.",
                items: ["Daily review of your Account Health Dashboard", "Real-time alerts and resolution of performance notifications", "Up to one violation appeal submission per month to Amazon"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="#ff9900" strokeWidth="1.5"/>
                    <path d="M12 6v6l4 2" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Inventory Management & Forecasting",
                desc: "Avoid stockouts, reduce excess inventory, and increase FBA efficiency.",
                items: ["AI and data-driven restock and replenishment recommendations", "Ongoing IPI score monitoring and improvement strategies", "Proactive support for removal orders and stranded inventory"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" stroke="#ff9900" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M12 12l9-4.5M12 12v9M12 12L3 7.5" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                title: "Dynamic Pricing Management",
                desc: "Maximize profit and win the Buy Box with strategic, responsive pricing.",
                items: ["Pricing guidance based on real-time Buy Box trends", "Floor price alerts and auto-adjustment strategies", "Competitive analysis to help you stay ahead without racing to the bottom"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#ff9900" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="4" stroke="#ff9900" strokeWidth="1.5"/>
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.08)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "#fde8ef" }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[18px] mb-2 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[15px] mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.items.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-5 h-5 mt-0.5" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#ff9900"/>
                        <path d="M6 12.5l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-[#67768e] text-[14px] leading-snug">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">MANAGE MY FBA WHOLESALE BUSINESS →</span>
                <span className="svc-btn-bottom">MANAGE MY FBA WHOLESALE BUSINESS →</span>
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* Ungating Service Section */}
      <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
        <div className="max-w-[1659px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <Image src="/Expand-Your-Product-Range-with-Brand-Category-Approvals-1536x1536.webp" alt="Amazon Brand & Category Ungating" width={700} height={700} unoptimized className="w-full h-auto object-contain" />
          </div>
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Amazon Brand &amp; Category <span style={{ color: "#ff9900" }}>Ungating Service</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-6">
              Selling popular, in-demand products often means getting ungated in restricted categories or brands. We help you cut through the red tape and gain access fast and reliably.
            </p>
            <p className="font-bold text-[17px] mb-4" style={{ color: "#000000" }}>What We Handle:</p>
            <div className="space-y-3 mb-6">
              {[
                "Assistance with brand, category, and ASIN-level ungating",
                "Step-by-step document submission and communication with Amazon",
                "Typically completed in 24–72 hours (depends on Amazon's review)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-5 h-5 mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900"/>
                    <path d="M6 12.5l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#000000] text-[15px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[#67768e] text-[14px] leading-relaxed mb-8 max-w-[500px]">
              <strong className="text-[#000000]">Note:</strong> The documents must be provided by you. We do not create invoices, certifications, or authorization letters. But don&apos;t worry, our team will guide you through exactly what&apos;s needed.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">UNGATE RESTRICTED BRANDS →</span>
                <span className="svc-btn-bottom">UNGATE RESTRICTED BRANDS →</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1659px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Who This Service <span style={{ color: "#ff9900" }}>Is For</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-6">
              Our FBA Wholesale Account Management plan is built for sellers who are ready to grow, not just get started.
            </p>
            <div className="space-y-4 mb-6">
              {[
                "Amazon wholesale sellers listing under existing ASINs",
                "FBA sellers with active catalogs and supplier relationships",
                "Sellers who need help managing backend operations — listing, inventory, pricing, and health",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900"/>
                    <path d="M6 12.5l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#000000] text-[16px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[#67768e] text-[14px] leading-relaxed mb-8 max-w-[500px]">
              <strong className="text-[#000000]">Note:</strong> This plan is for sellers who have already sourced products. Sourcing and supplier negotiation can be provided as an add-on.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
              </span>
            </a>
          </div>
          <div className="flex-1">
            <Image src="/Who-This-Service-Is-For.webp" alt="Who This Service Is For" width={700} height={700} unoptimized className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Trusted By Stats Section */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-12" style={{ backgroundColor: "#f4f4f4" }}>

            <h2 className="text-center font-bold mb-10" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "36px", color: "#000000" }}>
              Trusted by 1,200+ Amazon Sellers
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* Stats */}
              <StatsCounter />

              {/* Expert Advice Card */}
              <div className="flex-shrink-0 flex flex-col items-center text-center gap-3 bg-white rounded-xl px-8 py-6 shadow-sm min-w-[180px]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#ff9900" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-8 h-8">
                    <path fill="#ffffff" d="M203.45,255.03h-29.15v-44.94c0-1.49-7.46-12.84-9.76-14.53-7.44-5.44-21.56-5.49-29.06,0-2.31,1.69-9.76,13.04-9.76,14.53v44.94h-29.15V110.5c0-4.59,8.9-36.83,12.05-38.96l81.16-.79c4.97,1.71,13.69,34.5,13.69,39.76v144.54ZM144.55,95.23c-43.52,6.28-37.89,73.26,6.43,72.12,49.45-1.27,43.36-79.31-6.43-72.12Z"/>
                    <path fill="#ffffff" d="M181.58,55.84h-63.17c9.04-13.87,17.37-31.43,27.1-44.56,1.5-2.03,2.31-4.83,5.67-4.02l30.4,48.58Z"/>
                  </svg>
                </div>
                <p className="font-bold text-[13px]" style={{ color: "#000000" }}>Linda Davis</p>
                <p className="text-[11px]" style={{ color: "#67768e" }}>Account Lead</p>
                <p className="font-bold text-[16px] leading-tight" style={{ color: "#ff9900" }}>Need Expert<br />Advice?</p>
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
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Don&apos;t Let Account Issues Stall Your Wholesale Growth
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              The longer you wait, the more sales (and buy box) you risk losing. Start fixing what&apos;s holding you back.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">TALK TO AN FBA WHOLESALE EXPERT →</span>
                <span className="svc-btn-bottom">TALK TO AN FBA WHOLESALE EXPERT →</span>
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
