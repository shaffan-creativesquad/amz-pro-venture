import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import CheckoutAnimation from "./CheckoutAnimation";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Account Management for Amazon | AMZ Pro Venture",
  description: "Expert Amazon account management services — listing optimization, account health, PPC, and full store management by AMZ Pro Venture.",
};

export default function AccountManagementForAmazon() {
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

          {/* Label */}
          <p className="text-white/70 text-sm font-medium mb-4 tracking-wide">
            Account Management for Amazon
          </p>

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 48px)", color: "#ffffff" }}
          >
            Full-Service Amazon{" "}
            <span style={{ color: "#ff9900" }}>Account Management.</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[720px] mb-12 text-left">
            Running a successful Amazon store demands constant attention — from account health and listing optimization to PPC campaigns and customer service. Our Amazon Account Management experts take full ownership of your seller account so you can focus on growing your business while we handle the day-to-day operations.
          </p>

          {/* Checkout Animation */}
          <div className="w-full max-w-[1100px] relative z-10 mb-[-60px] sm:mb-[-120px] lg:mb-[-180px]">
            <CheckoutAnimation />
          </div>

        </div>
      </section>

      {/* Spacer */}
      <div className="bg-white pt-[80px] sm:pt-[140px] lg:pt-[200px]" />

      <PartnersBar />

      {/* Who Is This For? */}
      <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
        <div className="max-w-[1659px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">
          <FadeIn direction="right" className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}>
              <span className="text-[#000000]">Struggling to Manage Your </span>
              <span className="text-[#ff9900]">Amazon Seller Account?</span>
            </h2>
            <p className="text-[#67768e] text-[18px] mb-8">Optimize your seller account for maximum sales and visibility, while ensuring strong account health and full policy compliance.</p>
            <div className="space-y-5">
              {[
                "Strategic oversight to drive sales",
                "Brand management for stronger visibility",
                "Streamlined inventory and listing operations",
                "Proactive account health management",
                "Amazon Policy compliance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-[22px] h-[22px]" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] font-semibold text-[18px]">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/second-01-scaled.png" alt="Who Is This For" width={500} height={420} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 w-full max-w-[1659px] mx-auto">
        <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

          <FadeIn direction="right" className="flex-1">
            <h2
              className="font-bold leading-tight mb-10"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}
            >
              <span className="text-[#ff9900]">Why Choose Our </span>
              <span className="text-[#000000]">Amazon Account<br />Management Services?</span>
            </h2>

            <div className="space-y-7">
              {[
                {
                  title: "Dedicated Account Managers",
                  desc: "A dedicated expert manages your account full-time — monitoring performance, resolving issues, and driving growth.",
                },
                {
                  title: "Listing Optimization & SEO",
                  desc: "We craft keyword-rich titles, bullet points, and A+ content that rank higher and convert better.",
                },
                {
                  title: "Account Health Monitoring",
                  desc: "We proactively track your seller metrics, address policy violations, and keep your account in top standing.",
                },
                {
                  title: "PPC & Advertising Management",
                  desc: "Our Amazon PPC specialists manage your ad campaigns to maximize ROI and reduce wasted ad spend.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-[27px] h-[27px]" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 className="text-[#000000] font-bold text-[24px] mb-1">{item.title}</h3>
                    <p className="text-[#67768e] text-[18px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[630px]">
            <Image
              src="/Amazon-3-01-scaled.png"
              alt="Amazon Account Management"
              width={630}
              height={520}
              unoptimized
              className="w-full h-auto object-contain"
            />
          </FadeIn>

        </div>
      </section>

      {/* Built for Sellers Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <FadeIn direction="up">
            <h2
              className="text-center font-bold mb-4"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}
            >
              <span className="text-[#000000]">Built for Sellers Who Want to </span>
              <span className="text-[#ff9900]">Thrive, Not Just Survive</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[620px] mx-auto">
              We&apos;re not here to maintain, we&apos;re here to multiply. If you&apos;re aiming for real scale, you&apos;re in the right place.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              {
                title: "New Sellers Launching with Confidence",
                desc: "Set your brand up for success from day one with expert guidance, optimized listings, and a winning ad strategy.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M203.45,255.03h-29.15v-44.94c0-1.49-7.46-12.84-9.76-14.53-7.44-5.44-21.56-5.49-29.06,0-2.31,1.69-9.76,13.04-9.76,14.53v44.94h-29.15V110.5c0-4.59,8.9-36.83,12.05-38.96l81.16-.79c4.97,1.71,13.69,34.5,13.69,39.76v144.54ZM144.55,95.23c-43.52,6.28-37.89,73.26,6.43,72.12,49.45-1.27,43.36-79.31-6.43-72.12Z"/>
                    <path fill="#ff9900" d="M181.58,55.84h-63.17c9.04-13.87,17.37-31.43,27.1-44.56,1.5-2.03,2.31-4.83,5.67-4.02l30.4,48.58Z"/>
                    <path fill="#ff9900" d="M159.72,285.4c-2.05,12.16-19.44,6.87-19.44,2.43v-75.3c0-1.21,6.1-6.34,8.63-6.19,3.1-1.28,10.8,4.41,10.8,6.19,0,20.16,3.03,54.89,0,72.88Z"/>
                    <path fill="#ff9900" d="M81.98,261.1l-18.23,18.21c-1.35-18.49,5.14-41.59,18.23-55.86v37.65Z"/>
                    <path fill="#ff9900" d="M218.02,223.45c13.09,14.27,19.58,37.36,18.23,55.86l-18.23-18.21v-37.65Z"/>
                    <path fill="#ff9900" d="M146.99,109.69c26.23-4.24,35.93,42.13,1.78,41.1-27.21-.82-24.33-37.45-1.78-41.1Z"/>
                  </svg>
                ),
              },
              {
                title: "Busy Entrepreneurs Who Need a Trusted Partner",
                desc: "Offload the complexity of Amazon PPC and account management and gain back time to focus on your business.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M108.19,111.34c4.56,3.28-5.32,12.87-7.36,16.49-3.81,6.79-7.66,13.18,1.17,18.1,23.81,13.27,27.01-22.54,47.42-19.74,29.74,15.09,56.26,35.22,82.72,55.21,5.2,9.43-1.12,18.02-11.82,15.14-13.1-6.16-29.75-22.57-42.27-27.69-2.66-1.09-6.99-1.4-6.22,2.25.82,3.9,37.33,18.67,40.36,28.34,2.09,6.68-4.33,10.24-10.34,9.05-7.28-1.44-33.61-20.15-37.25-19.56-2.24,1.94-2.76,2.14-.74,4.67,4.34,5.42,29.54,14.06,30.48,19.79-2.63,25.37-37.01-8.49-42.3-3.33-.28,2.25-.2,2.94,1.34,4.59,4.1,4.4,23.24,7.03,20.9,15.57-1.6,3.31-6.09,6.05-9.71,6.05-1.97,0-16.15-5.81-17.79-7.09-4.88-3.81-1.45-6.71-1.92-11.28-1.29-12.72-12.02-10.88-14.6-14.45-1.24-1.71-1.13-6.22-2.75-9.13-3.08-5.55-10.71-6.34-11.81-7.99-.99-1.48-.66-5.16-1.65-7.59-3.05-7.53-12.25-11.24-19.35-6.82-2.1,1.31-1.43,4.99-5.32,3.87-.77-.22-1.58-3.3-3.37-4.63-6.87-5.12-13.62-4.07-20.45.26l-9.66-11.05,29.37-53.36c4.57-3.45,16.55,5.01,22.9,4.34Z"/>
                    <path fill="#ff9900" d="M103.57,141.07c-.91-.97-1.51-2.73-1.33-4.05.93-7.14,24.17-36.04,30.66-40.49,3.2-2.2,6.92-3.35,10.72-3.8,24.99-3,44.84,15.52,69.85,11.6,2.82,1.8,23.12,38.39,25.91,44.12,1.61,3.31,4.31,6.9,3.78,10.71-.51,3.62-12.51,13.46-16.24,12.41-2.94-.82-20.96-16.14-25.62-19.35-9.6-6.63-41.79-28.98-51.3-30.51-22.34-3.6-25.72,23.71-39.38,22.34-1.36-.14-6.18-2.07-7.04-2.97Z"/>
                    <path fill="#ff9900" d="M282.54,62.4c1.08,2.22,1.37,4.58,1.54,7.03,1.1,15.13,2.12,62.67-.9,75.77-2.56,11.1-16.61,16.76-25.97,21.18-2.03-.52-4.67-5.45-5.93-7.4-7.54-11.68-26.35-41.92-30.9-53.55-.86-2.19-1.67-4.28-.86-6.67l56.63-35.8,6.38-.55Z"/>
                    <path fill="#ff9900" d="M19.68,63.72c4.25-1.06,53.31,32.03,60.94,36.34,1,3.24-.54,5.65-1.76,8.42-6.04,13.76-21.48,38.6-30.01,51.81-1.67,2.59-3.16,5.79-5.93,7.36-2.27.59-18.45-9.52-20.85-11.74-3.01-2.77-4.95-6.1-5.64-10.2-2.06-12.22-2.09-63.69-.38-76.29.32-2.35.93-5.03,3.63-5.71Z"/>
                    <path fill="#ff9900" d="M98.89,175.96c7.39-2.17,12.6,4.77,10.36,11.72-.46,1.44-16.46,23.43-17.82,24.44-7.03,5.22-15.91-1.29-14.06-8.66,1.09-4.32,17.61-26.35,21.52-27.49Z"/>
                    <path fill="#ff9900" d="M113.4,193.11c7.44-2.18,12.52,4.73,10.35,11.7-.65,2.09-12.81,18.83-14.52,19.82-4.83,2.79-11.14,1.4-13.41-3.99-1.97-5.74,13.8-26.42,17.58-27.53Z"/>
                    <path fill="#ff9900" d="M127.92,210.27c5.77-1.67,12.43,3.51,11.89,9.48-.42,4.67-11.65,18.68-17.16,17.8-15.84-2.51.33-25.85,5.28-27.28Z"/>
                    <path fill="#ff9900" d="M72.47,173.37c19.62-5.87,11.49,24.6-2.85,22.17-10.58-1.79-4.7-19.92,2.85-22.17Z"/>
                  </svg>
                ),
              },
              {
                title: "Established Brands Ready to Expand",
                desc: "Whether you're launching new ASINs, entering new marketplaces, or optimizing underperforming SKUs, we help you scale with precision.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M204,95.66V204.79H96.19V95.66Z"/>
                    <path fill="#ff9900" d="M268.29,256.28V224.94h16.09v60.65H224.54V269.17h32.35l-39.67-36.12,16.48-12.4Z"/>
                    <path fill="#ff9900" d="M46.14,268.82H75.25v16.67h-60V225.24H31.43v28.17l34.69-36.66c5.53,6.7,8.86,10.74,12.18,14.78l3.82,1.41L43.85,265.39Z"/>
                    <path fill="#ff9900" d="M82.18,66.89,69.49,80.72C58.17,68.05,47.42,56,36.68,44L32.1,46.58V74.8H15.34V14.41H75.27V31H43.19Z"/>
                    <path fill="#ff9900" d="M265.32,45.62l-34.4,35.82L219.77,66.35,254.64,34c-.44-.92-.87-1.84-1.31-2.75H224.48V14.55h60.24V74.7H268.39V46.6Z"/>
                  </svg>
                ),
              },
              {
                title: "Internal Teams Seeking Expert Support & Clarity",
                desc: "Get the strategic insight, systems, and execution your team needs to boost performance and drive sustainable growth.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M184.82,168c-33,26.15-79.49,18.24-103.13-12.24a73.25,73.25,0,0,1,6.73-97.54c26.36-25.77,68.51-27.47,97.28-3.92,29.61,24.24,36.35,69.46,10.5,102.35,1.86,1.74,3.81,3.49,5.68,5.31,2.93,2.88,5.84,5.79,8.7,8.74a1.8,1.8,0,0,0,2.37.5c10.79-4.65,21.63-2.61,30,5.69,13.53,13.46,27.13,26.86,40.45,40.52,7.41,7.59,9.37,16.88,6,26.9s-10.51,15.83-20.82,17.57c-8.88,1.5-16.67-1.09-23.06-7.43Q225.68,234.82,206,215c-8.83-8.84-11-19.06-6.3-30.69a2,2,0,0,0-.12-1.75c-4.78-4.86-9.62-9.65-14.45-14.45C185.07,168.05,184.93,168,184.82,168Zm-45.47-.4a56.9,56.9,0,1,0-57-56.77A56.84,56.84,0,0,0,139.35,167.6Z"/>
                    <path fill="#ff9900" d="M68.9,75.94c-9.05,19.44-10.34,38.86-4.23,59.19-3.32.85-6.57,1.89-9.9,2.5a57.11,57.11,0,0,1-28.32-2,2.27,2.27,0,0,1-1.86-2.6c.07-9.87,0-19.75.05-29.63,0-1.46-.36-2.44-2-2.47s-1.91,1.07-1.9,2.47c0,9.21,0,18.41,0,27.61v2.26a48.41,48.41,0,0,1-11.32-6.94c-.33-.27-.38-1-.38-1.52,0-11.48-.09-23,0-34.42A14.7,14.7,0,0,1,23.73,75.86c5.11-.13,10.07.16,15,2S48.5,79,53.26,77.05C58.25,75,63.38,76.08,68.9,75.94Z"/>
                    <path fill="#ff9900" d="M257.64,132.85q0-8.35,0-16.73c0-4.17,0-8.34,0-12.51,0-1.42-.11-2.67-1.9-2.71s-2,1.28-2,2.76c0,9.88,0,19.75,0,29.63,0,1.11-.2,1.79-1.38,2.18a57.5,57.5,0,0,1-37.54-.15c-.29-.1-.55-.24-1-.44a79,79,0,0,0,3.6-29.58,77.73,77.73,0,0,0-7.62-28.79c.23-.16.37-.33.51-.34,4.95-.39,9.94-1,14.72.86a23.68,23.68,0,0,0,17.56,0,26.92,26.92,0,0,1,16.65-.29c6.08,1.69,10,7.17,10,13.73.15,11.47.05,23,0,34.42,0,.5-.13,1.24-.47,1.47-3.51,2.4-7.08,4.71-10.64,7Z"/>
                    <path fill="#ff9900" d="M61,57.42A16.3,16.3,0,0,1,44.52,73.67,16.36,16.36,0,1,1,44.82,41,16.58,16.58,0,0,1,61,57.42Z"/>
                    <path fill="#ff9900" d="M217.43,57.27A16.32,16.32,0,0,1,233.84,41,16.58,16.58,0,0,1,250,57.38a16.28,16.28,0,0,1-16.23,16.29A16.48,16.48,0,0,1,217.43,57.27Z"/>
                    <path fill="#ff9900" d="M163.08,154.18V129.12c0-1.66-.05-3.32,0-5,.07-1.43-.46-2.31-1.92-2.32s-1.95.81-1.94,2.27c0,9.88,0,19.76.06,29.64a2.45,2.45,0,0,1-2,2.84,58.14,58.14,0,0,1-36.53-.1c-1.33-.43-1.62-1.11-1.61-2.39,0-9.94,0-19.88,0-29.82,0-1.8-.87-2.68-2.34-2.43s-1.56,1.3-1.56,2.5q0,13.71,0,27.43v2.36a19.47,19.47,0,0,1-2.27-1c-2.76-1.71-5.53-3.41-8.2-5.25a2.92,2.92,0,0,1-1.11-2.06c-.07-11.59-.11-23.19,0-34.79a14.38,14.38,0,0,1,14.14-14.11,82.07,82.07,0,0,1,11,.54c2.52.33,4.91,1.53,7.42,2a20.06,20.06,0,0,0,11.18-1.31c5.54-2.11,11.27-1.91,16.84-.63,6.21,1.43,10.49,7.35,10.52,13.74,0,11.47,0,23,0,34.42a2.43,2.43,0,0,1-.49,1.65A48.91,48.91,0,0,1,163.08,154.18Z"/>
                    <path fill="#ff9900" d="M122.86,78.2a16.37,16.37,0,0,1,16.46-16.29,16.66,16.66,0,0,1,16.26,16.42,16.36,16.36,0,1,1-32.72-.13Z"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08} direction="up">
                <div className="p-8 bg-white border border-gray-200 h-full" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                  {item.icon}
                  <h3 className="font-bold text-[18px] mb-3 leading-snug" style={{ color: "#ff9900" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Get a Free Consultation</span>
                <span className="svc-btn-bottom">Get a Free Consultation</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* Plans & Pricing Intro */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1659px] mx-auto flex flex-col lg:flex-row items-center gap-0">
          <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[50%]">
            <Image src="/first-01-scaled.png" alt="Account Management Plans" width={800} height={600} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>
          <FadeIn direction="left" className="flex-1 px-10 py-10">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)" }}>
              <span className="text-[#ff9900]">Account Management </span>
              <span className="text-[#000000]">Plans &amp;<br />Pricing</span>
            </h2>
            <p className="text-[#ff9900] font-semibold text-[16px] mb-4">Flexible Monthly Management Plans</p>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[480px]">
              We offer <strong className="text-[#000000]">tailored management packages</strong> designed to fit your store size and goals — from startups to established brands scaling to seven figures.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans & Pricing Cards */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center mb-10">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px, 5vw, 52px)" }}>
              <span className="text-[#ff9900]">Account Management </span>
              <span className="text-[#000000]">X AMZ Pro Venture</span>
            </h2>
            <p className="text-[#000000] font-semibold text-[18px] mb-6">Full-Service Amazon Management — Monthly Retainer</p>
            <a href="/contact-us" className="svc-btn">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Contact for Pricing</span>
                <span className="svc-btn-bottom">Contact for Pricing</span>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
            {[
              { title: "Complete Listing Management", desc: "Full creation, optimization, and maintenance of all your product listings." },
              { title: "Dedicated Account Manager", desc: "A single point of contact who knows your account inside and out." },
              { title: "PPC & Ad Management", desc: "Data-driven ad campaigns that lower ACoS and boost revenue." },
              { title: "Brand Registry Support", desc: "Full assistance with Amazon Brand Registry, A+ content, and Brand Store." },
              { title: "Multi-Marketplace Expansion", desc: "Expand your reach to Amazon US, UK, CA, AE, and more." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07} direction="up">
              <div className="flex flex-col gap-3 p-6 border border-gray-200 h-full" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[27px] h-[27px]" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#ff9900" />
                  <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="font-bold text-[16px] leading-snug" style={{ color: "#ff9900" }}>{item.title}</h3>
                <p className="text-[#000000] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center justify-center gap-4">
              <a href="/contact-us" className="svc-btn">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Contact Us</span>
                  <span className="svc-btn-bottom">Contact Us</span>
                </span>
              </a>
              <a href="tel:2067046094" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Call Now</span>
                  <span className="svc-btn-bottom">Call Now</span>
                </span>
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Level Up Add-Ons Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center mb-12">
            <h2 className="font-bold mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)", color: "#000000" }}>
              Level Up With Vital Add-Ons
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[580px] mx-auto">
              Our add-ons are built to provide you with the additional support your Amazon account needs to level-up.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[480px]">
              <Image src="/27.webp" alt="Amazon Add-Ons" width={480} height={420} unoptimized className="w-full h-auto object-contain" />
            </FadeIn>

            <FadeIn direction="left" className="flex-1 space-y-8">
              <div>
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#000000" }}>Pay-Per-Click (PPC) Campaign Management</h3>
                <p className="text-[#67768e] text-[16px] leading-relaxed">Our experts craft and manage targeted ad campaigns to maximize your advertising budget and drive more sales.</p>
              </div>
              <div>
                <h3 className="font-bold text-[22px] mb-3" style={{ color: "#000000" }}>Customer Support Management</h3>
                <p className="text-[#67768e] text-[16px] leading-relaxed">We handle buyer-seller interactions, respond to reviews, and address concerns quickly to strengthen your brand&apos;s reputation and customer trust.</p>
              </div>
              <div>
                <a href="/contact-us" className="svc-btn svc-btn-pink">
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">Get Add-Ons</span>
                    <span className="svc-btn-bottom">Get Add-Ons</span>
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Additional Support Section */}
      <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center mb-12">
            <h2 className="font-bold mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(26px, 4.5vw, 45px)", color: "#000000" }}>
              Additional Support That Sets Us Apart
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[680px] mx-auto leading-relaxed">
              While others focus on the big picture, we drive deeper to ensure nothing slips through the cracks. Here&apos;s how we go above and beyond to support your success.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-14 items-center">
            <FadeIn direction="right" className="flex-1 space-y-6">
              {[
                {
                  title: "Auto & Catalog Backup",
                  desc: "Your data, always protected. We maintain regular backups of your ad campaigns and catalog, giving you continuity should we ever need to restore systems or revert to a previous data state.",
                },
                {
                  title: "Amazon Case Log Management",
                  desc: "Working with Seller Support? We handle all case submissions, escalations, and resolutions at Amazon on your behalf, increasing the velocity of outcomes.",
                },
                {
                  title: "Bi-Weekly Client Calls",
                  desc: "No surprises, no guesswork. We establish a regular bi-weekly communication cadence so you&apos;re always informed, aligned, and can make every decision with confidence.",
                },
                {
                  title: "Predictive Search Recommendations",
                  desc: "We proactively surface keyword and listing insights to help you stay ahead of competitors and capture more organic traffic before trends shift.",
                },
                {
                  title: "Expert Seller Central Assistance",
                  desc: "From account setup to ongoing operations, our team provides hands-on Seller Central support to keep your account healthy and performing at its best.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-[22px] h-[22px]" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-[17px] mb-1" style={{ color: "#000000" }}>{item.title}</h3>
                    <p className="text-[#67768e] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <a href="/contact-us" className="svc-btn">
                  <span className="svc-btn-inner">
                    <span className="svc-btn-top">Build a Free Checklist</span>
                    <span className="svc-btn-bottom">Build a Free Checklist</span>
                  </span>
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[440px]">
              <Image src="/banner-image-9-991x1024.webp" alt="Additional Support" width={440} height={460} unoptimized className="w-full h-auto object-contain" />
            </FadeIn>
          </div>

        </div>
      </section>

      {/* Trusted By Stats Section */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-2xl px-10 py-12" style={{ backgroundColor: "#f4f4f4" }}>

            <h2 className="text-center font-bold mb-10" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(22px, 3.5vw, 36px)", color: "#000000" }}>
              Trusted by 1,200+ Amazon Sellers
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-10 items-center justify-center flex-1">
                {[
                  { value: "1,200+", label: "Accounts Managed" },
                  { value: "$20M+", label: "Managed in Revenue" },
                  { value: "33%", label: "Average Sales Increase" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-4">
                    <div className="relative flex items-center justify-center" style={{ width: "160px", height: "160px" }}>
                      <div className="absolute inset-0 rounded-full" style={{ border: "2px solid #e5e7eb" }} />
                      <div className="absolute rounded-full" style={{ inset: "10px", border: "2px solid #ff9900" }} />
                      <span className="font-bold text-[28px] relative z-10" style={{ color: "#000000" }}>{stat.value}</span>
                    </div>
                    <p className="text-[#67768e] text-[15px] text-center">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Expert Advice Card */}
              <div className="flex-shrink-0 flex flex-col items-center text-center gap-3 bg-white rounded-xl px-8 py-6 shadow-sm min-w-[180px]">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1" style={{ backgroundColor: "#ff9900" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-8 h-8">
                    <path fill="#ffffff" d="M203.45,255.03h-29.15v-44.94c0-1.49-7.46-12.84-9.76-14.53-7.44-5.44-21.56-5.49-29.06,0-2.31,1.69-9.76,13.04-9.76,14.53v44.94h-29.15V110.5c0-4.59,8.9-36.83,12.05-38.96l81.16-.79c4.97,1.71,13.69,34.5,13.69,39.76v144.54ZM144.55,95.23c-43.52,6.28-37.89,73.26,6.43,72.12,49.45-1.27,43.36-79.31-6.43-72.12Z"/>
                    <path fill="#ffffff" d="M181.58,55.84h-63.17c9.04-13.87,17.37-31.43,27.1-44.56,1.5-2.03,2.31-4.83,5.67-4.02l30.4,48.58Z"/>
                    <path fill="#ffffff" d="M159.72,285.4c-2.05,12.16-19.44,6.87-19.44,2.43v-75.3c0-1.21,6.1-6.34,8.63-6.19,3.1-1.28,10.8,4.41,10.8,6.19,0,20.16,3.03,54.89,0,72.88Z"/>
                    <path fill="#ffffff" d="M81.98,261.1l-18.23,18.21c-1.35-18.49,5.14-41.59,18.23-55.86v37.65Z"/>
                    <path fill="#ffffff" d="M218.02,223.45c13.09,14.27,19.58,37.36,18.23,55.86l-18.23-18.21v-37.65Z"/>
                    <path fill="#ffffff" d="M146.99,109.69c26.23-4.24,35.93,42.13,1.78,41.1-27.21-.82-24.33-37.45-1.78-41.1Z"/>
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

      <FAQSection />

      {/* CTA Banner */}
      <section className="w-full bg-white py-10">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <FadeIn direction="up">
          <div
            className="rounded-2xl px-6 sm:px-10 lg:px-14 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{ backgroundColor: "#ff9900" }}
          >
            <div>
              <h2 className="font-bold text-[32px] mb-2" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", color: "#ffffff" }}>
                Ready to Grow Your Amazon Store?
              </h2>
              <p className="text-white/90 text-[16px]">Let our experts manage your account while you focus on scaling your brand.</p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <a href="/contact-us" className="svc-btn svc-btn-hover-white">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Contact Us</span>
                  <span className="svc-btn-bottom">Contact Us</span>
                </span>
              </a>
              <a href="tel:2067046094" className="svc-btn svc-btn-white">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">Call Now</span>
                  <span className="svc-btn-bottom">Call Now</span>
                </span>
              </a>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
