import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Amazon Account Suspended | AMZ Pro Venture",
  description: "Expert Amazon account suspension reinstatement services â€” appeals, Plan of Action, and full account recovery by AMZ Pro Venture.",
};

export default function AmazonAccountSuspended() {
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

      {/* What's Included Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2
            className="text-center font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}
          >
            <span className="text-[#000000]">Why Amazon Sellers Trust Us For </span>
            <span className="text-[#ff9900]">PPC Campaign Management</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[680px] mx-auto">
            As a leading Amazon PPC management agency, AMZ Pro Venture has helped hundreds of sellers maximize their ad spend, boost visibility, and scale their business profitably.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Get Seen by Ready-to-Buy Shoppers",
                desc: "Appear at the top of search results and product pages, where buying decisions happen.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M298.39,52.52l-9.72,14c-14.4-8.69-28.55-18.12-43.56-25.87-6.25-3.23-14.33-3-21.63-3.91-.25,0-2.15,4.88-1.3,6.07,1.34,1.88,4.37,2.55,7.27,4,5.79-8.42,11.78-5.42,18.74-.92,14.76,9.54,30,18.32,46.55,28.31-8,9.44-15.2,18-22.47,26.63-3.18,3.75-6.13,7.77-9.76,11-1.76,1.58-5.7,3.08-7.24,2.19-18.49-10.8-36.71-22.06-55.1-33.25l-.5.68c-11,15-13.67,29.53-5.88,48.37,7,17,7,36.94,10.69,55.45,1.92,9.53,6,18.63,7.79,28.18,2.51,13.4,4.64,27,5.32,40.58.54,10.77-7.14,15.73-17.7,13.35-15.45-3.48-21.76-19-15.73-32.65,2-4.52-3.6-12.39-5.73-18.73-1.87,1.71-4.73,3.09-5.43,5.19-2.87,8.65-4.41,17.78-7.68,26.26-8,20.75-20.92,27.93-42.44,22.82-9.73-2.32-18.93-7-28.22-11-7-3-8.9-9-6-15.44,3-6.8,8.78-7.68,15.7-5.16,7.64,2.78,15.56,4.76,23.35,7.12,7.12,2.16,11-1.14,11.45-7.87,1.09-16.15,2.47-32.36,2.16-48.51-.3-15.29-2.58-30.53-4.06-45.79-1-10.55-6.46-16.73-17-19.61-11-3-21.52-7.59-35.65-12.72,2,4.69,2.49,8.59,4.12,9.15,5.7,2,5.58,4.83,3.89,9.77-5.29,15.44-10.17,31-15,46.63-1.8,5.85-4.46,7.66-10.68,5.4C54.35,177.8,41.52,174,28.74,170c-5.94-1.84-8.51-4-5.76-11.19,5.39-14,9.75-28.42,13.94-42.83,2.11-7.27,4.63-12.3,14.32-7.4,1.54-5,2.82-9.13,4.11-13.29l-2.93-1.64c-6,6.31-15,9.08-18,19-4.35,14.62-9.47,29-14.64,44.66L1.61,146.9V143c7.24-12.64,14.88-25.07,21.54-38,3.53-6.84,6.66-12,14.24-7.24C48,87.3,59.49,83,73.29,86.37c19.37,4.68,38.79,9.13,58,14.27,15.22,4.06,26.95,0,35.82-12.92,9.62-14,20.91-27.19,28.61-42.2,7.84-15.27,19.5-15.81,33.3-14.5,2.52.23,5.15-.46,7.7-.88,3.61-.6,7.75-2.88,10.68-1.79,17.14,6.32,34,13.4,50.95,20.23ZM57.6,110.59l19.53,6.35c3.88-5,3-8.32-2.83-9.2C69,106.93,62.43,98.25,57.6,110.59ZM226.71,51.11c-5.09-.48-9.13-1.78-9.83-.77C213.51,55.21,211,60.71,208.24,66l3.37,2.13Z"/>
                    <path fill="#ff9900" d="M168.9,63.43c.08,17.84-13.63,32-31.15,32.19a31.86,31.86,0,0,1-32-31.42A31.07,31.07,0,0,1,137,32.37C155.14,32.17,168.82,45.49,168.9,63.43Z"/>
                  </svg>
                ),
              },
              {
                title: "Improve Organic Rankings Through Paid Momentum",
                desc: "PPC boosts sales velocity, which helps your listings climb the organic ranks faster.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M195.19,209q0,38.25,0,76.52c0,6.28-2.11,8.44-8.29,8.44H113c-5.95,0-8.18-2.26-8.18-8.22q0-76.69,0-153.4c0-6.36,2-8.37,8.28-8.37q37,0,74,0c6,0,8.17,2.13,8.17,8.14Q195.21,170.52,195.19,209Z"/>
                    <path fill="#ff9900" d="M5.44,237.32q0-24.66,0-49.31c0-5.63,2.4-8,8.08-8q37,0,74,0c6.15,0,8.37,2.23,8.37,8.43q0,48.57,0,97.16c0,6.19-2.17,8.32-8.45,8.32q-37,0-74,0c-5.65,0-8-2.35-8-8Q5.42,261.62,5.44,237.32Z"/>
                    <path fill="#ff9900" d="M249.12,293.92H212c-5.61,0-7.84-2.14-7.85-7.74q0-29.6,0-59.21c0-6.44,2.15-8.6,8.56-8.6h59.21c4.9,0,9.8,0,14.71,0,5.47.06,7.94,2.44,7.95,7.79q0,30.15,0,60.31c0,4.86-2.61,7.41-7.53,7.42C274.38,293.94,261.75,293.92,249.12,293.92Z"/>
                    <path fill="#ff9900" d="M149.86,6.06c1.27,2.05,2.11,3.2,2.74,4.45,3.34,6.68,6.52,13.44,10.05,20a6.46,6.46,0,0,0,4,2.89c7.58,1.35,15.24,2.32,22.85,3.51a15.8,15.8,0,0,1,3.26,1.29A14.52,14.52,0,0,1,191,41.15c-5.3,5.26-10.63,10.5-16.06,15.64a5.8,5.8,0,0,0-2,6.11c1.46,7.07,2.55,14.21,3.65,21.35a18,18,0,0,1-.3,4.17,20.94,20.94,0,0,1-4.05-1.15c-6.44-3.26-12.88-6.54-19.2-10a5.59,5.59,0,0,0-6.12,0c-6.54,3.61-13.18,7-19.83,10.44a13.11,13.11,0,0,1-3.38.73,13.12,13.12,0,0,1-.38-3.48c1.14-7.25,2.26-14.52,3.74-21.7.6-3-.24-4.8-2.32-6.73-5.36-5-10.58-10.21-15.78-15.41a12.65,12.65,0,0,1-1.68-3A15,15,0,0,1,110.18,37c7.49-1.18,15-2.46,22.51-3.32a5.84,5.84,0,0,0,5.18-3.84c3.15-6.63,6.44-13.2,9.7-19.78C148.09,9,148.74,8,149.86,6.06Z"/>
                  </svg>
                ),
              },
              {
                title: "Maximize Every Click with Smart Targeting",
                desc: "Only pay for high-intent traffic by leveraging precise keyword strategies and negative keyword filtering.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M195.61,293.94q-11.45-19.8-22.9-39.6c-2-3.49-3.92-7-6.33-11.38-9.49,7.39-18.59,14.59-27.82,21.6-2,1.48-4.46,3.28-6.65,3.2-4.44-.15-5.59-3.55-5.56-7.71.13-15.13.05-30.26.05-45.39,0-38.35-.07-76.7.15-115,0-3,2.12-5.91,3.25-8.86,3.1,1.29,7,1.8,9.18,4q57.44,56.94,114.39,114.35c2.18,2.2,2.77,6,4.1,9-3.11,1.28-6.18,3.53-9.34,3.66-10.84.46-21.71.18-33.68.18,2.94,5.46,5.45,10.22,8.06,14.94,5.13,9.3,10.38,18.54,15.47,27.87,3.39,6.21,2.68,8.36-3.56,11.62q-16.83,8.82-33.69,17.57Z"/>
                    <path fill="#ff9900" d="M134.18,6.06c1.29,2.7,3.58,5.35,3.69,8.1.44,10.58.16,21.19.19,31.79,0,3.95-.78,7.43-5.61,7.56-5.19.15-6.1-3.37-6.07-7.66.07-10.6-.24-21.21.2-31.79.12-2.71,2.45-5.34,3.76-8Z"/>
                    <path fill="#ff9900" d="M165.44,67.94c-1.19-.87-3.62-1.73-4.15-3.26-.65-1.88-.53-5.08.69-6.37,8.33-8.82,16.87-17.45,25.77-25.69,1.42-1.31,5.52-1.27,7.32-.15,1.4.88,2.38,5.56,1.43,6.57-9,9.61-18.4,18.81-27.76,28.06C168.22,67.6,167.14,67.53,165.44,67.94Z"/>
                    <path fill="#ff9900" d="M104.39,62.37C103.2,64,102.3,66.44,100.76,67c-1.91.63-5.12.45-6.43-.79-8.8-8.31-17.44-16.82-25.6-25.74-1.3-1.42-1-6.3.46-7.68s6.16-1.28,7.67.1c8.76,8,17,16.61,25.37,25.1C103.18,58.91,103.51,60.5,104.39,62.37Z"/>
                    <path fill="#ff9900" d="M72.06,161.39c-1.29-1-3.56-1.79-4-3.17-.59-2-.67-5.17.52-6.44,8.45-9,17.13-17.75,26.17-26.13,1.31-1.22,5.85-.94,7.18.38s1.92,6,.75,7.24c-8.52,9.17-17.54,17.89-26.51,26.65C75.39,160.7,73.89,160.77,72.06,161.39Z"/>
                    <path fill="#ff9900" d="M198.68,90.33c5.53,0,11.15-.55,16.57.24,2.41.35,5.87,3.07,6.33,5.24.82,3.89-2.38,6.11-6.33,6.14-11.5.09-23,.33-34.48-.25-2.2-.11-4.22-3.69-6.33-5.67,2.12-1.9,4.06-5.12,6.39-5.44C186.68,89.8,192.71,90.33,198.68,90.33Z"/>
                    <path fill="#ff9900" d="M66,102c-5.54,0-11.18.63-16.57-.26-2.64-.43-6.37-3.37-6.83-5.72-.74-3.78,2.6-5.73,6.65-5.71,11.28.07,22.59-.27,33.85.26,2.27.11,5.74,3,6.31,5.21,1,4.07-2.27,6.07-6.16,6.18C77.53,102.1,71.78,102,66,102Z"/>
                  </svg>
                ),
              },
              {
                title: "Use Real Data to Make Smarter Decisions",
                desc: "Gain insights into shopper behavior and keyword trends to refine your overall strategy.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M81.32,290.43c.78-15.82-.24-30.6-5.07-45.73-5.99-18.76-18.74-31.25-27.84-47.85-22.22-40.56-30.26-93.18-8.01-135.57C79.67-13.52,229.67-6.85,249.72,79.21c6.98,29.97-9.8,46.03,8.84,74.82,3.4,5.25,13.29,13.84,14.01,17.97,2.35,13.59-13.56,16.28-22.08,22.1.56,9.84,7.14,12.96-1.84,20.61l5.83.13c4.09,9.8-6.24,11.47-7.51,15.13-2.61,7.57,2.48,18.47-2.53,27.35-7.01,12.43-38.5,9.33-51.57,11.18l2,21.92h-113.54ZM201.02,129.27c4.36-3.69,26.56,6.59,15.95-25.28-3.58-4.49-10.24-1.48-14.18-3.74-1.27-.73-7.27-14.5-7.57-16.46-1.33-8.63,10.07-10.96,6.69-18.4-.6-1.31-13.18-13.45-14.42-13.77-5.83-1.18-10.36,7.52-15.51,7.67-.92.03-16.28-6.27-16.98-6.86-4.45-3.79,1.74-14.91-8.99-16.9-2.61-.49-17.34-.56-18.59.22-3.02,4.09-1.06,12.48-3.19,15.74-.5.76-15.44,7.46-16.49,7.61-5.44.78-9.22-5.36-13.95-7.41-5.55-1.35-14.23,10.98-18.23,15.06-1.43,5.57,7.66,8.88,7.62,15.53-.02,4.45-6.3,11.65-6.81,16.96l-17.04,5.28c-5.64,32.59,12.78,20.51,17.83,24.75.87.73,6.09,19.25,5.19,21.6-1.16,3.04-5.54,6.11-6.72,9.58-1.35,5.56,10.89,14.13,14.95,18.14l15.65-9.1c2.48,4.7,18.08,6.8,18.74,7.58,2.05,2.43-4.09,15.52,7.21,17.68,15.67,3,23.19-1.1,21.09-17.65l18.72-7.52c5.6,2.35,11.72,11.66,17.95,7.47,25.45-17.1,3.36-23.56,3.32-29.03,0-.83,3.73-4.5,4.63-6.97.99-2.73,2.67-11.39,3.14-11.79Z"/>
                    <path fill="#ff9900" d="M146.76,51.71l.13,9.53-5.8,2.09,28.89,11.96,8.18-11.81c18.2,9.07-3.18,15.55-3.19,16.81,22.44,21.75,19.74,57.81-5.07,76.64-41.65,31.61-98.58-12.67-77.61-61.68,7.98-18.66,24.11-25.14,41.83-31.88l.96-1.97c-1.34.17-3.55.16-3.97-1.34-3.2-11.29,7.34-12.44,15.65-8.35ZM107.93,85.97c-40.11,40.03,22.3,102.38,63.02,60.03,37.64-39.15-22.25-100.72-63.02-60.03Z"/>
                    <path fill="#ff9900" d="M137.09,81.27l1.69,34.42-22.59,27.3c-24.88-19.98-10.7-61.1,20.9-61.72Z"/>
                  </svg>
                ),
              },
              {
                title: "Scale Profitably with Predictable Performance",
                desc: "Turn your ad campaigns into a controllable growth engine that fuels long-term brand success.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M135.58,38.7c77.23-10.45,127.47,69.21,84.06,134.09l-28.07,46.97-83.96-.55c-19.82-42.3-55.26-72.43-38.4-123.48,9.03-27.33,37.41-53.12,66.36-57.03ZM164.33,66.61h-28.35v25.85c0,.61-7.28,5.72-9.16,5.77-3.43.1-16.15-9.19-20.03-11.43l-14.16,24.81c9.24,4.79,24.31,7.65,21.7,20.86-1.42,7.2-20.8,10.46-19.82,16.37l11.49,21.15c12.14-2.36,21.39-18.21,33.39-7.21l1.5,24.83h25.22s1.91-27.28,1.91-27.28c11.24-10.75,18.37,4.5,30.27,6.47l12.63-22.49c-.72-3.06-20.01-9.77-21.31-13.76-.62-1.91-.82-10.66.01-11.99.97-1.54,18.95-8.37,19.63-11.27l-11.82-22.12c-4.52-2.64-17.74,10.51-22.64,11.24-2.72.41-10.46-4.6-10.46-5.63v-24.18Z"/>
                    <path fill="#ff9900" d="M187.68,251.71l-.15,23.94-2.59,2.5-12.27.23c-.15,3.92,1.36,8.87-2.51,11.67-7.48.96-5.88-7.01-5.81-11.67l-27.41-.02c-.12,16-11,16.17-9.28.02l-13.36.02-1.66-26.69h75.04Z"/>
                    <polygon fill="#ff9900" points="189.34 228.36 186.71 243.47 112.65 243.36 110.97 228.36 189.34 228.36"/>
                    <path fill="#ff9900" d="M37.14,122.01c16.4-3.62,20.58,10.77,9.59,12.92-16.5,3.22-21.55-10.27-9.59-12.92Z"/>
                    <path fill="#ff9900" d="M90.37,25.12c10.69-3.59,17.3,15.62,12.37,19.09-9.15,6.87-19.73-16.61-12.37-19.09Z"/>
                    <path fill="#ff9900" d="M249.79,123.71c4.44-4.37,22.13-3.14,19.35,6.76-2.78,9.91-30.15,3.88-19.35-6.76Z"/>
                    <path fill="#ff9900" d="M203.78,25.15c15.86-5.34,7.16,20.76-1.84,19.86-11.17-.65-2.42-18.43,1.84-19.86Z"/>
                    <path fill="#ff9900" d="M65.72,81.39c-3.33,5.24-19.29-3.34-19.69-8.88-1.02-14.07,26.06-1.16,19.69,8.88Z"/>
                    <path fill="#ff9900" d="M245.6,66.95c17.64-3.6,5.16,17.37-6.73,16.12-10.13-5.83-1.62-14.41,6.73-16.12Z"/>
                    <path fill="#ff9900" d="M147.04,10.11c13.31-4.43,10.81,19.72,4.46,21.3-9.37,2.33-9.28-19.7-4.46-21.3Z"/>
                    <path fill="#ff9900" d="M145.5,108.66c35.5-8.17,33.05,47.89-1.27,37.25-16.26-5.04-15.42-33.41,1.27-37.25Z"/>
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

          <div className="flex justify-center mt-4">
            <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
              GET YOUR FREE AMAZON PPC AUDIT →
            </a>
          </div>

        </div>
      </section>

      {/* Why Most Sellers Struggle Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1659px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Why Most Sellers Struggle With <span style={{ color: "#ff9900" }}>Amazon PPC</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-8 max-w-[560px]">
              Amazon PPC isn&apos;t set-and-forget; it&apos;s complex, data-heavy, and constantly changing. Most sellers waste thousands trying to figure it out. Here&apos;s why Amazon ads often fail:
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Wasted spend on broad, unprofitable keywords.",
                "Great products buried under poor targeting or structure.",
                "Confusing ad data that's hard to analyze or act on.",
                "No time or expertise to manage and test campaigns.",
                "Struggling to maintain RoAS as competition grows.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[16px]">{item}</p>
                </div>
              ))}
            </div>
            <a href="/contact-us" className="inline-block bg-[#ff9900] text-white font-semibold uppercase tracking-wider text-[13px] rounded-full hover:bg-black transition-colors" style={{ padding: "14px 32px" }}>
              OPTIMIZE MY AMAZON PPC →
            </a>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/Why-Most-Sellers-Struggle-With-Amazon-PPC.webp" alt="Why Sellers Struggle With Amazon PPC" width={500} height={420} unoptimized className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Complete Amazon Advertising Management Services */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">
          <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
            Complete Amazon Advertising Management Services:<br /><span style={{ color: "#ff9900" }}>Everything You Need to Succeed</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[700px] mx-auto mb-14">
            Our full-service approach takes the guesswork out of Amazon PPC, helping you stay ahead of the competition. Here&apos;s what&apos;s included in your monthly management:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              {
                title: "Competitor Research",
                desc: "We dive deep into your rivals' strategies to uncover opportunities and outsmart them.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#ff9900" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M11 8v6M8 11h6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Extensive Keyword Research",
                desc: "We pinpoint the exact keywords your ideal customers use to find products like yours.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#ff9900" strokeWidth="2"/><path d="M21 21l-4.35-4.35" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M8 11h6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Campaign Creation Across Ad Types",
                desc: "From Sponsored Products to Sponsored Brands and Display Ads, we cover every angle of the buyer journey.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M3 11l19-9-9 19-2-8-8-2z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Smart Campaign Structuring & Bidding Strategy",
                desc: "We craft efficient campaign structures and bidding plans to stretch your budget and scale results.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26A7 7 0 0112 2z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 21h6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Negative Keyword Optimization",
                desc: "We eliminate wasteful clicks by blocking irrelevant searches that won't convert.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><circle cx="11" cy="11" r="8" stroke="#ff9900" strokeWidth="2"/><path d="M21 21l-4.35-4.35M8 11h6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><line x1="4.93" y1="4.93" x2="17.07" y2="17.07" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Ongoing A/B Testing",
                desc: "We continuously test creatives, targeting, and placements to keep improving performance.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#ff9900" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#ff9900" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#ff9900" strokeWidth="2"/><path d="M17.5 14v7M14 17.5h7" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Weekly Monitoring & Adjustments",
                desc: "Your campaigns stay sharp with weekly tweaks.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Performance Reporting & RoAS Insights",
                desc: "You get clear, actionable reports with insights and recommendations to fuel growth.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M18 20V10M12 20V4M6 20v-6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Competitor Ads Analysis",
                desc: "We track where your competitors are investing to keep you one step ahead.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#ff9900" strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Strategic Scaling & Expansion",
                desc: "We grow your reach with remarketing and new keyword opportunities to capture fresh audiences.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-4"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)" }}>
                {item.icon}
                <h3 className="font-bold text-[16px] mb-2 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">OPTIMIZE MY AMAZON PPC →</span>
                <span className="svc-btn-bottom">OPTIMIZE MY AMAZON PPC →</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Smarter Keyword Strategies Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1659px] mx-auto px-10 flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}>
              <span className="text-[#000000]">Smarter Keyword Strategies for </span>
              <span className="text-[#ff9900]">Smarter Ad Spend</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10 max-w-[560px]">
              Not all keywords perform the same, and that&apos;s exactly why we test, track, and optimize across every match type to uncover what truly drives results.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Broad Match",
                  desc: "We use Broad Match to cast a wider net and identify high-performing search terms. This format allows your ad to appear for related phrases, variations, and extended queries, generating the most impressions and valuable keyword data for further optimization.",
                },
                {
                  title: "Phrase Match",
                  desc: "Phrase Match ensures your ad appears only when the core phrase is present in the search query, allowing for greater relevance without sacrificing discoverability. It&apos;s ideal for balancing reach and control.",
                },
                {
                  title: "Exact Match",
                  desc: "When it&apos;s time to get surgical, Exact Match is the tool. Your ad shows only when the exact keyword is searched, delivering the highest targeting accuracy, better click-through rates, and more efficient ad spend.",
                },
                {
                  title: "Ongoing A/B Testing & Bid Optimization",
                  desc: "We continuously test how keywords perform across all match types and adjust bids in real-time, doubling down on what works and cutting what doesn&apos;t. That means every dollar works harder, and every campaign gets smarter.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[16px] leading-relaxed">
                    <strong>{item.title}:</strong> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/broad-match.webp" alt="Smarter Keyword Strategies for Amazon PPC" width={500} height={420} unoptimized className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Level Up Add-Ons Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-start">

          {/* Left: heading + cards */}
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Level Up Your Performance With <span style={{ color: "#ff9900" }}>Powerful Add-Ons</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed mb-10 max-w-[620px]">
              Give your Amazon PPC campaigns the extra support they need with optional add-ons, designed to increase visibility, conversions, and finally. From high-converting copy to data-driven strategies, these additions help you grow in a rounded marketplace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Product Image Enhancement",
                  desc: "Professionally edited product images and lifestyle shots that grab attention and increase click-through rates.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8 mb-3"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#ff9900" strokeWidth="2"/><circle cx="8.5" cy="8.5" r="1.5" stroke="#ff9900" strokeWidth="2"/><path d="M21 15l-5-5L5 21" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
                {
                  title: "A+ Content Creation",
                  desc: "We create converting A+ pages that tell your brand story, build trust, and drive higher conversions.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8 mb-3"><path d="M12 20h9" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
                {
                  title: "Free Program Enrollment",
                  desc: "Gain credibility, buy box wins, certified reviews and higher chances of going viral and achieving higher orders.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8 mb-3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
                {
                  title: "Auto-Bids Optimization",
                  desc: "Stay ahead of competitors with high-performing auto bids and real-time adjustments that maximize your ad efficiency.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8 mb-3"><path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26A7 7 0 0112 2z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 21h6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
                },
                {
                  title: "Amazon Storefront Design",
                  desc: "Create a business-branded storefront that tells your brand story and showcases your full product range.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8 mb-3"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
                {
                  title: "External Traffic Campaigns",
                  desc: "Running outside traffic to Amazon listings using Meta ads, Google, and other platforms to boost sales velocity.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-8 h-8 mb-3"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="15 3 21 3 21 9" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="10" y1="14" x2="21" y2="3" stroke="#ff9900" strokeWidth="2" strokeLinecap="round"/></svg>,
                },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 border border-gray-200" style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.08)" }}>
                  {item.icon}
                  <h3 className="font-bold text-[16px] mb-2 leading-snug" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="flex-shrink-0 w-full lg:w-[420px] lg:sticky lg:top-24">
            <Image src="/16.webp" alt="Amazon PPC Add-Ons" width={420} height={520} unoptimized className="w-full h-auto object-contain" />
          </div>

        </div>
      </section>

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Ready to Transform Your Amazon Ads Performance?
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              Get started now with our Free Amazon PPC Audit.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">GET A FREE AMAZON PPC AUDIT</span>
                <span className="svc-btn-bottom">GET A FREE AMAZON PPC AUDIT</span>
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
