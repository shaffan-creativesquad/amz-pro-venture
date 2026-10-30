import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnersBar from "../components/PartnersBar";
import Image from "next/image";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Proactive Account Health Monitoring | AMZ Pro Venture",
  description: "Proactive Amazon account health monitoring services by AMZ Pro Venture. Stay ahead of issues and protect your seller account from suspensions and penalties.",
};

export default function ProactiveAccountHealthMonitoring() {
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

      <PartnersBar />

      {/* Here's What We Help You Achieve Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <FadeIn direction="up">
            <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Why Amazon Account Health  <span style={{ color: "#ff9900" }}>Monitoring Matters?</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[680px] mx-auto mb-14">
              Your amazon business is only as strong as your account health! Maintaining a healthy Amazon account not only helps you to stop costly suspensions in their tracks, but also helps you to:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {[
              {
                title: "Prevent Costly Suspensions",
                desc: "Catch issues early and stay in Amazon’s good graces with proactive monitoring and rapid resolution.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><path fill="#ff9900" d="M156.06,11.5l21.21,4.28c28.61,8.61,53.49,34.13,60.66,63.3,1.34,5.45,1.49,11.08,3.07,16.42v14c-1.72,7.77-2.66,15.67-5.24,23.26-8.05,23.71-28.87,45.82-52.72,53.74v14h31.48c6.15,0,12.19,6.81,11.3,13.23-1.21,8.63-22.33,28.04-29.26,34.8s-14.55,12.89-21.53,19.46c-7.43,7-13.89,15.92-22.97,20.51h-4c-9.07-4.6-15.55-13.51-22.97-20.51-7.32-6.9-15.34-13.44-22.53-20.46-6.8-6.64-27.06-25.24-28.26-33.8-.9-6.42,5.15-13.23,11.3-13.23h31.48v-14c-27.28-8.86-49.6-35.83-55.67-63.8-.97-4.46-.87-9.07-2.3-13.2.27-4.59-.37-9.45,0-14,3.63-44.29,39.74-80.23,83.94-84h12.99ZM144.86,30.8c-101.95,7.93-77.83,165.5,23.01,141.02,83.48-20.26,63.73-147.77-23.01-141.02Z"/><path fill="#ff9900" d="M160.55,54.5c4.6,1.31.7,9.01,1.53,9.97l15.86,3.12-3.05,22.76c-5.39,2.34-9.84-3.18-15.29-4.9-3.04-.96-6.9-1.79-9.98-.98-4.98,3.75,13.06,9.34,14.77,10.18,25.2,12.34,18.52,40.06-6.25,45.96l-1.68,9.96c-8.88-1.27-20.65,4.61-17.51-8.97l-18.76-4.66,4.49-23.51c2.18-1.69,5.47,2.08,7.71,3.24,6.71,3.49,12.65,7.04,20.66,5.83.1-1.76.29-3.05-.99-4.5-2.23-2.54-15.9-5.98-21.02-9.97-13.05-10.17-10.9-28.9,2.09-37.96,7.57-5.28,13.02-1.96,10.93-15.56,4.42.79,12.67-1.08,16.49,0Z"/></svg>,
              },
              {
                title: "Protect Listing Continuity",
                desc: "Stop suppressed listings before they affect inventory performance and search visibility.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><path fill="#ff9900" d="M263.71,65.52V38.91c-4.15,0-8.31.18-12.43-.12-7.2-.53-14.4-1.18-21.56-2.11a226.8,226.8,0,0,1-50-12.47,189.34,189.34,0,0,1-28.79-13.53c-.31-.19-.61-.41-.92-.61h-.28a10.83,10.83,0,0,1-1.16.89A205.7,205.7,0,0,1,92.91,32.48,238.58,238.58,0,0,1,41.45,39c-1.72,0-3.44-.06-5.16-.1V75.6c.05.51.15,1,.15,1.52q0,10.53,0,21c0,.51-.1,1-.15,1.52v22.68c.19,3.21.37,6.42.56,9.63,1.16,19.41,4.59,38.34,11.8,56.5,7.84,19.76,20,36.39,35.86,50.48a715.09,715.09,0,0,0,57.6,45.53l7.52,5.42h.81l0-.06L159,283.7c18.68-13.42,37-27.36,54.15-42.68,10.23-9.13,19.83-18.8,27.08-30.59a149.49,149.49,0,0,0,19-48.37,214.79,214.79,0,0,0,4.25-38.17c0-1,.15-2,.24-2.92v-19c-.07-1.25-.21-2.5-.21-3.75q0-15.44.06-30.87C263.56,66.72,263.66,66.12,263.71,65.52Zm-18.85,55.39c-.28,17.63-2.32,35.05-7.76,51.93A115.2,115.2,0,0,1,218,209.46c-5.58,7-12.21,13.11-18.94,19-15.45,13.62-31.77,26.13-48.45,38.19l-.69.46c-3.44-2.52-6.91-5-10.33-7.58C124.18,248,109.15,236,94.81,223.06,75.28,205.47,64.29,183.3,59,158a201.62,201.62,0,0,1-3.93-41c-.06-19.51,0-39,0-58.53V57.29c5.46-.62,10.74-1.16,16-1.84a253.06,253.06,0,0,0,49-11.33A212.8,212.8,0,0,0,148.91,32a2.14,2.14,0,0,1,2.2,0A235.67,235.67,0,0,0,213.37,53a281.46,281.46,0,0,0,31,4.17,4.84,4.84,0,0,1,.54.14c0,.48,0,1,0,1.48,0,6.77-.05,13.54-.05,20.3C244.88,93,245.09,107,244.86,120.91Z"/><path fill="#ff9900" d="M149.75,248.89c-9.93-7.87-20-15.55-29.69-23.64-7.2-6-14.15-12.32-20.86-18.85-10.53-10.25-17-23-21.7-36.75a142,142,0,0,1-6.53-32c-1.3-13.22-1.1-26.47-1-39.72.08-8.58,0-17.17,0-25.76V70.78c5.91-1,11.67-1.75,17.39-2.8a253.81,253.81,0,0,0,61.37-19.33,2.68,2.68,0,0,1,2.59,0,249.29,249.29,0,0,0,60.41,19.1c5.9,1.08,11.86,1.89,17.8,2.82a3.15,3.15,0,0,1,.47.17c0,1.79,0,3.6,0,5.41,0,14.24.22,28.47,0,42.7-.21,17.17-2,34.15-7.47,50.55-3.89,11.64-9.26,22.5-17.14,32-5.54,6.66-12,12.4-18.54,18.06-11.63,10.09-23.77,19.56-36.13,28.74C150.52,248.35,150.29,248.51,149.75,248.89Z"/></svg>,
              },
              {
                title: "Maintain Key Metrics",
                desc: "Improve core performance indicators like Order Defect Rate (ODR), Late Shipment Rate (LSR), and Valid Tracking Rate (VTR).",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><path fill="#ff9900" d="M197.54,126.41c-5.57,5.44-11.18,10.83-16.7,16.33q-22.72,22.66-45.37,45.44a7.84,7.84,0,0,0-1.76,2.95q-9.86,28.51-19.57,57.08c-.72,2.13-1.67,3.07-4,3.08-4.08,0-8.15.48-12.23.55a12.45,12.45,0,0,1-12.8-10.65c-.5-3-.82-6.11-1.1-9.18a3.14,3.14,0,0,0-2.46-3c-3.75-1.32-7.45-2.83-11-4.5a2.63,2.63,0,0,0-3.35.43c-2.13,1.83-4.37,3.53-6.61,5.22-5.73,4.34-12.65,3.83-17.74-1.27Q35.92,221.9,29,215c-5.34-5.36-5.76-12.2-1.1-18.14,1.62-2.08,3.19-4.19,4.93-6.16,1-1.14,1-2,.33-3.36a108.79,108.79,0,0,1-4.42-10.52A3.59,3.59,0,0,0,25,174a58.49,58.49,0,0,1-8.35-1.07,12.28,12.28,0,0,1-10-12q-.16-10.89,0-21.77c.12-6.73,4.9-11.76,11.64-12.54,2.35-.26,4.68-.61,7-.78a3,3,0,0,0,3-2.42,94,94,0,0,1,4.06-10.37,3.25,3.25,0,0,0-.6-4.08c-1.67-1.91-3.19-4-4.76-6-4.27-5.46-4-12.38.76-17.34s9.79-10,14.79-14.84a12.73,12.73,0,0,1,17.1-1c2.11,1.58,4.07,3.35,6.25,4.81a3.62,3.62,0,0,0,2.85.27c4.3-1.68,8.56-3.46,12.75-5.4A3.89,3.89,0,0,0,83.48,67c.54-2.75.64-5.58,1.13-8.35A12.53,12.53,0,0,1,97,48.22q10.62-.12,21.23,0a12.77,12.77,0,0,1,12.67,11.22c.41,3-.12,6.77,1.47,9,1.47,2,5.47,2,7.85,3.67,5.34,3.68,9.31,2.42,13.84-1.75,5.83-5.35,12.87-4.6,18.46,1,4.74,4.75,9.57,9.41,14.22,14.25,5.59,5.81,5.88,12.83,1,19.18a24.07,24.07,0,0,1-2.56,3.18c-2.48,2.29-2.86,4.61-1,7.58a21,21,0,0,1,2.35,6.06c.57,2.34,1.91,3.2,4.16,3.33s4.28.45,6.42.7Zm-130.35,24a40.83,40.83,0,1,0,40.72-40.63A40.68,40.68,0,0,0,67.19,150.4Z"/><path fill="#ff9900" d="M121.06,251.8c2.5-7.31,4.83-14.15,7.16-21,4-11.66,7.95-23.33,12-35a11.27,11.27,0,0,1,2.51-4.05Q196.44,138,250.19,84.14a10.76,10.76,0,0,1,10.73-3,32.61,32.61,0,0,1,8.83,3.35,58.71,58.71,0,0,1,20.5,20.25,23.43,23.43,0,0,1,2.27,4.93c1.72,5.26.85,9.84-3.27,13.92-15.73,15.57-31.33,31.27-47,46.93q-29,29.07-58.1,58.12a11.88,11.88,0,0,1-4.28,2.68Q151.45,241.4,123,251.29C122.53,251.44,122.09,251.53,121.06,251.8Zm115.66-142L149,197.14l27.44,26.8,87.31-86.86ZM133.64,239.23l33.1-11.55-21.28-23Z"/></svg>,
              },
              {
                title: "Stay Audit-Ready",
                desc: "Be prepared for any documentation or compliance checks Amazon may throw your way.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><path fill="#ff9900" d="M182.77,32.86v55.17c-19.53,1.79-38.29,11.67-50.33,27.04H44.88c-7.21,1.41-4.35,12.36-1.15,12.36h80.5c-4.41,8.65-7.82,18.3-7.88,28.15l-71.48.02c-6.5,2.07-6.5,10.27,0,12.34l69.64.17,8.59,28H43.72c-2.6,0-6.61,10.85,1.15,12.36l86.44.25c13.91,14.04,31.01,25.68,51.46,26.79v16.89H10.51V89.15h53.48c.89,0,3.94-5.29,3.94-6.19v-50.1h114.84ZM164.49,59.61c2.41-2.42,2.35-10.66-2.58-10.96l-71.01.98c-3.32,5.54-2.29,10.64,4.59,11.37,15.3,1.62,47.57,1.36,63.12.05,1.74-.15,4.64-.2,5.88-1.44Z"/><path fill="#ff9900" d="M184.8,100.75c54.75-4.75,88.12,60.72,50.91,101.56l11.8,11.8,6.76-6.71,32.61,34.92c9.91,17.3-10.51,33.34-25.33,19.7l-30.34-32.69,5.53-6.6-10.77-10.74c-29.58,19.8-68.97,12.55-88-17.79-24.28-38.71,1.86-89.55,46.84-93.45ZM189.28,117.61c-58.58,1.19-55.28,89.42.81,88.73,59.05-.73,57.26-89.91-.81-88.73Z"/><polygon fill="#ff9900" points="54.42 76.77 20.64 76.77 54.42 42.99 54.42 76.77"/><path fill="#ff9900" d="M218.53,137.84c1.61,2.53,1.99,5.74.52,8.42l-29.48,42.58c-2.04,2.52-6.91,2.08-9.4.59-1.16-.7-14.6-21.26-14.96-22.57-1.58-5.66,4.31-9.78,9.67-7.31,2.96,1.36,8.34,12.87,9.58,12.91l24.53-34.54c2.63-2.12,6.79-1.85,9.54-.07Z"/></svg>,
              },
              {
                title: "Fuel Long-Term Growth",
                desc: "A healthy account unlocks access to the Buy Box, Prime eligibility, Premium A+ Content, Vine, and more.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-12 h-12 mb-4"><path fill="#ff9900" d="M242.59,57.73c-4.61-4.53-9.31-9-13.86-13.69a18.77,18.77,0,0,1-2.29-3.9c1.35-.68,2.63-1.71,4.06-2q30-5.73,60.06-11.26c4.88-.91,5.46-.29,4.55,4.65q-5.57,30.39-11.25,60.77c-.23,1.19-1.1,2.91-2,3.14s-2.49-.78-3.38-1.66c-4.81-4.73-9.49-9.58-14.72-14.91-6.32,6.49-12.23,12.7-18.28,18.76q-37,37.13-74.09,74.22c-2.23,2.25-3.64,2.26-5.86,0q-25.77-26-51.72-51.85c-3.12-3.11-3.51-3.15-6.62,0q-39.75,39.72-79.46,79.47c-3,3-3.1,3.07-6.2,0C16.36,194.28,11.22,189,6,183.94c-1.94-1.86-1.87-3.05.07-5Q56.66,128.49,107.16,77.89c3.19-3.19,3.45-3.18,6.55-.08q25.89,25.91,51.75,51.83c2,2,3.54,2.4,5.72.21q35.31-35.44,70.71-70.78A9.7,9.7,0,0,0,242.59,57.73Z"/><path fill="#ff9900" d="M263.23,273.43h-33.4c-.08-1.34-.2-2.55-.2-3.77q0-62.25,0-124.51a8.85,8.85,0,0,1,2.9-6.93c9.09-8.89,18-18,27.05-26.9a13.18,13.18,0,0,1,3.07-1.7,13.41,13.41,0,0,1,.78,3.13q.06,78.76,0,157.53C263.42,271.28,263.3,272.28,263.23,273.43Z"/><path fill="#ff9900" d="M110,145.72V273.31H76.38v-3.66q0-43.68,0-87.35a8.1,8.1,0,0,1,2.54-6.38c9.23-9.07,18.33-18.28,27.51-27.41A45.49,45.49,0,0,1,110,145.72Z"/><path fill="#ff9900" d="M212.13,273.45H178.72c-.09-1.13-.25-2.24-.25-3.34,0-25-.08-50,0-75a7.18,7.18,0,0,1,1.86-4.5c9.46-9.66,19-19.19,28.65-28.71a9.42,9.42,0,0,1,2.55-1.3,7.83,7.83,0,0,1,.88,2.41q0,54.69,0,109.37A5.82,5.82,0,0,1,212.13,273.45Z"/><path fill="#ff9900" d="M127.38,273.33v-3.88q0-51.07.05-102.16a16.74,16.74,0,0,1,.9-3.78,18.18,18.18,0,0,1,3.28,2.06c9.2,9.11,18.39,18.25,27.45,27.51a7.64,7.64,0,0,1,2.24,4.71c.14,24.65.09,49.3.08,74a13.43,13.43,0,0,1-.23,1.59Z"/><path fill="#ff9900" d="M58.79,196.93V273.4H25.65c-.08-1-.25-2-.25-2.94,0-12.61-.08-25.21.06-37.81a7.69,7.69,0,0,1,1.76-4.88c9.43-9.67,19-19.19,28.61-28.72A28.3,28.3,0,0,1,58.79,196.93Z"/></svg>,
              },
              
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.08}>
                <div>
                  {item.icon}
                  <h3 className="font-bold text-[17px] mb-2" style={{ color: "#000000" }}>{item.title}</h3>
                  <p className="text-[#67768e] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Start Optimizing Account Health ?</span>
                <span className="svc-btn-bottom">Start Optimizing Account Health ?</span>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* How We Protect Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">

          <FadeIn direction="up">
            <h2 className="text-center font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              How We <span style={{ color: "#ff9900" }}>Protect Your Amazon Business</span>
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-center text-[#67768e] text-[16px] leading-relaxed max-w-[760px] mx-auto mb-14">
              Our 360° account health monitoring system creates a safety net around your account. From real-time alerts to expert solutions, here&apos;s what your monthly subscription includes:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "24/7 Monitoring For Preventive Action",
                desc: "We track your Account Health Dashboard around the clock so you don't have to.",
                bullets: ["Real-time flag detection for immediate action", "Daily checks on ODR, LSR, A-Z claims, and compliance warnings"],
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#ff9900"/><rect x="12" y="14" width="24" height="18" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M17 34v2M24 34v2M31 34v2M14 36h20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 27V24M21 27V21M25 27V24M29 27V18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Proactive Violation & Notification Handling",
                desc: "We detect and respond to Amazon violations before they turn into costly suspensions.",
                bullets: ["Immediate action on new warnings or notices", "Clear interpretation and proactive POA drafting (when applicable)"],
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#ff9900"/><path d="M24 11l9 4v7c0 6-4 11-9 13-5-2-9-7-9-13v-7l9-4z" stroke="#fff" strokeWidth="2" fill="none" strokeLinejoin="round"/><path d="M19 24l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Root Cause Analysis & Resolution",
                desc: "We go beyond surface-level fixes to resolve root problems affecting your account.",
                bullets: ["In-depth analysis of compliance and metric-related violations", "Strategic action plans + documentation guidance for resolution"],
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#ff9900"/><path d="M15 33l6-12 5 8 4-6 5 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="35" cy="15" r="4" stroke="#fff" strokeWidth="2" fill="none"/><path d="M32 18l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
              {
                title: "Weekly Reports & Action Plan",
                desc: "We deliver consistent reporting so you're never in the dark about your account status.",
                bullets: ["Weekly Account Health Reports and performance snapshots", "Actionable next steps to protect or boost critical metrics"],
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#ff9900"/><rect x="14" y="11" width="20" height="26" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M18 18h12M18 22h12M18 26h8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M26 31l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              },
              {
                title: "Long-Term Compliance Strategy for Future Proofing",
                desc: "We equip you with the tools and practices to stay healthy long-term.",
                bullets: ["Best practice guides, SOPs, and seller checklists", "Integrates with AMZ Pro Venture services (Reinstatement, PPC, Listing Optimization) for unified support"],
                dark: false,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#ff9900"/><path d="M24 13v11l7 4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="24" cy="24" r="10" stroke="#fff" strokeWidth="2" fill="none"/></svg>,
              },
              {
                title: "Additional Performance Case Handling",
                desc: "We actively manage and support Amazon-specific scenarios that impact your account health.",
                bullets: ["ODR tracking + trend reporting", "A-Z claim appeals (as applicable by Amazon)", "LSR & VTR performance monitoring", "Feedback removal requests (within Amazon policy)", "Policy violation support (compliance docs required from seller)"],
                dark: true,
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-12 h-12 mb-5"><circle cx="24" cy="24" r="24" fill="#ff9900"/><rect x="12" y="14" width="24" height="20" rx="2" stroke="#fff" strokeWidth="2" fill="none"/><path d="M12 20h24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M19 17v3M24 17v3M29 17v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 27h5M26 27h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.08}>
                <div className="p-8 h-full" style={{ backgroundColor: item.dark ? "#000000" : "#ffffff" }}>
                  {item.icon}
                  <h3 className="font-bold text-[17px] mb-3 leading-snug" style={{ color: item.dark ? "#ffffff" : "#000000" }}>{item.title}</h3>
                  <p className="text-[14px] leading-relaxed mb-4" style={{ color: item.dark ? "#cbd5e1" : "#67768e" }}>{item.desc}</p>
                  <div className="space-y-2">
                    {item.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[18px] h-[18px] mt-0.5" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#ff9900" />
                          <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[13px] leading-relaxed" style={{ color: item.dark ? "#cbd5e1" : "#000000" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">Optimize Amazon Account Health ?</span>
                <span className="svc-btn-bottom">Optimize Amazon Account Health ?</span>
              </span>
            </a>
          </div>

        </div>
      </section>


      {/* What We Need Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — image */}
          <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/What-we-need-from-you-2.webp" alt="What We Need From You" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

          {/* Right — text */}
          <FadeIn direction="left" className="flex-1">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              What We Need From You to <span style={{ color: "#ff9900" }}>Deliver the Best Results</span>
            </h2>

            <p className="text-[#67768e] text-[16px] leading-relaxed mb-7">
              We&apos;re committed to helping you succeed, but great outcomes start with the right inputs. To ensure a smooth and effective engagement, please provide:
            </p>

            <div className="space-y-4 mb-6">
              {[
                "Child Access to Seller Central (with performance and case permissions)",
                "Any recent performance notifications or policy alerts",
                "Product-level or compliance documentation (if needed)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-[#67768e] text-[14px] leading-relaxed mb-8">
              <span className="font-semibold text-[#000000]">Note:</span> All documentation must be supplied by the seller. We do not create invoices, certifications, or product photography. Don&apos;t worry, our team will guide you through exactly what&apos;s needed.
            </p>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION ?</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION ?</span>
              </span>
            </a>
          </FadeIn>

        </div>
      </section>

      {/* Onboarding Checklist Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — text */}
          <FadeIn direction="right" className="flex-1">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              Onboarding <span style={{ color: "#ff9900" }}>Checklist</span>
            </h2>

            <p className="text-[#67768e] text-[16px] leading-relaxed mb-7">
              To ensure a smooth start, please confirm the following before we begin:
            </p>

            <div className="space-y-5 mb-8">
              {[
                "Your Amazon seller account is currently active. If suspended, please start with our Reinstatement Service to get your account back fast.",
                "All business and contact information in your Seller Central account is accurate and up to date.",
                "There are no pending verification requests, such as ID, tax info, or account documentation from Amazon.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">OPTIMIZE AMAZON ACCOUNT HEALTH ?</span>
                <span className="svc-btn-bottom">OPTIMIZE AMAZON ACCOUNT HEALTH ?</span>
              </span>
            </a>
          </FadeIn>

          {/* Right — image */}
          <FadeIn direction="left" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/on-boarding-check-list-2.webp" alt="Onboarding Checklist" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

        </div>
      </section>

      {/* What's Not Included Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — image */}
          <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/What-Is-Amazon-Account-Health-Management.webp" alt="What's Not Included" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

          {/* Right — text */}
          <FadeIn direction="left" className="flex-1">
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              What&apos;s Not Included in <span style={{ color: "#ff9900" }}>This Service</span>
            </h2>

            <p className="text-[#67768e] text-[16px] leading-relaxed mb-7">
              These services are handled separately and require a different engagement scope.
            </p>

            <div className="space-y-6 mb-8">
              {[
                { label: "Direct Amazon Customer Service", desc: "We don't respond to customer messages or manage order inquiries on your behalf." },
                { label: "Listing Creation or Creative Updates", desc: "For new listings, A+ content design, or product detail edits, please explore our Listing Optimization Services." },
                { label: "Suspension Reinstatement", desc: "If your account is currently deactivated, please begin with our Amazon Reinstatement Service." },
                { label: "Creation of Compliance Documents", desc: "We do not generate invoices, certifications, or product photography. These must be provided by the seller." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-relaxed">
                    <span className="font-bold">{item.label}</span> — {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">AVAIL ADDITIONAL SERVICES ?</span>
                <span className="svc-btn-bottom">AVAIL ADDITIONAL SERVICES ?</span>
              </span>
            </a>
          </FadeIn>

        </div>
      </section>

      {/* Why Trust AMZ Pro Venture Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-14 items-center">

          {/* Left — image */}
          <FadeIn direction="right" className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/Banner-1-2-1536x1536.webp" alt="Why Top Amazon Brands Trust AMZ Pro Venture" width={500} height={460} unoptimized className="w-full h-auto object-contain" />
          </FadeIn>

          {/* Right — text */}
          <FadeIn direction="left" className="flex-1">
            <h2 className="font-bold leading-tight mb-8" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,3.5vw,45px)", color: "#000000" }}>
              Why Top Amazon Brands <span style={{ color: "#ff9900" }}>Trust AMZ Pro Venture?</span>
            </h2>

            <div className="space-y-6 mb-8">
              {[
                { label: "Compliance-Centric from Day One", desc: "We speak Amazon's language and write appeals they trust. Our team understands the policies, patterns, and processes that make or break seller accounts." },
                { label: "Proactive by Design", desc: "We don't wait for violations. We monitor in real-time, act early, and build preventive measures that keep you ahead of Amazon's enforcement curve." },
                { label: "Strategic Growth Partner", desc: "You focus on scaling your business. We handle the compliance, communication, and backend complexity so your account stays healthy, active, and profitable." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px] mt-0.5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[15px] leading-relaxed">
                    <span className="font-bold">{item.label}</span> — {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION ?</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION ?</span>
              </span>
            </a>
          </FadeIn>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-10">
          <FadeIn direction="up">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "clamp(28px,4vw,45px)", color: "#000000" }}>
              Don&apos;t Wait for a <span style={{ color: "#ff9900" }}>Red Flag to Act</span>
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              Amazon rarely gives second chances, and account health issues often snowball if ignored. Protect your revenue. Safeguard your account.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">OPTIMIZE AMAZON ACCOUNT HEALTH ?</span>
                <span className="svc-btn-bottom">OPTIMIZE AMAZON ACCOUNT HEALTH ?</span>
              </span>
            </a>
          </div>
          </FadeIn>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  );
}
