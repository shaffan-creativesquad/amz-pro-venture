import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import FAQSection from "./FAQSection";
import StatsCounter from "./StatsCounter";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Amazon Account Suspended | AMZ Pro Venture",
  description: "Expert Amazon account suspension reinstatement services — appeals, Plan of Action, and full account recovery by AMZ Pro Venture.",
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

      {/* Hero Section */}
      <section className="w-full overflow-visible" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-10 pt-16 pb-0 flex flex-col items-start text-left">

          {/* Label */}
          <p className="text-white/70 text-sm font-medium mb-4 tracking-wide">
            Amazon ASIN Reinstatement
          </p>

          {/* Heading */}
          <h1
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "48px", color: "#ffffff" }}
          >
            Losing Revenue Due to{" "}
            <span style={{ color: "#ff9900" }}>Suspended Listings?</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-[16px] leading-relaxed max-w-[720px] mb-5 text-left">
            Get your suspended Amazon listings back quickly, effectively, and with full compliance, so you can start selling again with confidence.
          </p>

          <div className="space-y-3 mb-8">
            {["Fast & reliable listing recovery", "Support for all major suspension types", "Deep policy & compliance expertise", "One free re-appeal included"].map((item) => (
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
            REINSTATE MY AMAZON LISTING →
          </a>

          {/* Hero Image */}
          <div className="w-full max-w-[700px] relative z-10 mb-[-180px] self-center">
            <Image
              src="/Banner-Image-7-1486x1536.webp"
              alt="Amazon Account Suspended"
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

      {/* Who Is This For? */}
      <section className="w-full py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #fff8f0 100%)" }}>
        <div className="max-w-[1659px] mx-auto px-10 flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}>
              <span className="text-[#000000]">We Resolve A Complete Range of </span>
              <span className="text-[#ff9900]">Amazon ASIN Suspensions</span>
            </h2>
            <p className="text-[#67768e] text-[16px] mb-8">As a trusted Amazon ASIN reinstatement service provider, AMZ Pro Venture helps sellers recover listings suspended for a wide range of violations. Here are the most common issues we handle:</p>
            <div className="space-y-4">
              {[
                { title: "Product Authenticity or Counterfeit Claims:", desc: "Claims of fake or misrepresented products." },
                { title: "Restricted Product or Compliance Violations:", desc: "Listings flagged for prohibited items or missing documentation." },
                { title: "Product Safety Complaints:", desc: "Reports related to health risks, safety hazards, or injury claims." },
                { title: "Listing Policy Violations:", desc: "Title, bullet points, images, or descriptions not following Amazon guidelines." },
                { title: "Intellectual Property or Infringement Complaints:", desc: "Trademark or copyright issues, often requiring retraction from the rights owner." },
                { title: "Used Sold as New / Condition Complaints:", desc: "Buyers report receiving items that appear used or not as described." },
                { title: "Unapproved Medical or Ingredient Claims:", desc: "Listings flagged for unsupported health claims or banned substances." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-1 w-5 h-5" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[16px]"><strong>{item.title}</strong> {item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="/contact-us" className="svc-btn svc-btn-pink">
                <span className="svc-btn-inner">
                  <span className="svc-btn-top">TALK TO A REINSTATEMENT EXPERT →</span>
                  <span className="svc-btn-bottom">TALK TO A REINSTATEMENT EXPERT →</span>
                </span>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <Image src="/We-Resolve-A-Complete-Range-of-Amazon-ASIN-Suspensions.webp" alt="We Resolve Amazon ASIN Suspensions" width={500} height={420} unoptimized className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-white py-20 w-full">
        <div className="max-w-[1140px] mx-auto px-10">

          <h2
            className="text-center font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}
          >
            <span className="text-[#000000]">Why Amazon Sellers Count on Us For </span>
            <span className="text-[#ff9900]">Listing/ASIN Reinstatement</span>
          </h2>
          <p className="text-center text-[#67768e] text-[16px] mb-14 max-w-[680px] mx-auto">
            As a leading Amazon seller reinstatement service in the USA, AMZ Pro Venture has helped hundreds of sellers recover their suspended listings with speed, precision, and proven expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "500+ Successful Listing/ASIN Reinstatements",
                desc: "Trusted by sellers across categories for fast, reliable Amazon ASIN reinstatement.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M118.49,172.82c5.94-6.45,11.62-11.32,15.72-17.29,11.7-17,18-36.22,20-56.72.49-5.13,2.72-6.62,7.34-7,14.23-1.2,23.67,3.84,26.3,18.12s2,29.1,2.79,43.69a41.65,41.65,0,0,1-.58,5.64c2.47.15,4.7.41,6.92.41,13.78,0,27.55,0,41.32-.18,8.47-.1,16.48.66,21.18,9.11,3.76,6.77,2.57,15-3.35,24,9.3,10.77,9.64,19.63,1.17,30.46,11.3,12.56,7.9,29.89-7,34,.66,5.15,2.14,10.3,1.79,15.32-.58,8.27-6.11,14.7-14.27,14.68q-50.31-.08-100.6-1.82c-6.66-.23-13.19-3.85-20.23-6.05-2.09,7.73-8.19,9.32-16,9.16-17-.34-34.08,0-51.12-.12-10.3,0-13.78-3.58-13.79-13.95q0-50.77,0-101.54c0-10.1,3.76-13.68,14.1-13.7q25.21,0,50.42,0C112,159.09,113.65,160.23,118.49,172.82Z"/>
                    <path fill="#ff9900" d="M170.27,65.26c.34,5.95-1.15,7.63-5.28,5.62a6.56,6.56,0,0,1-1.24-.63c-9.16-7.46-18-7-27.59-.18-5.11,3.65-8.09,1.66-6.26-4.2,3.72-11.87.5-20.31-9.38-27.31-3.91-2.78-2.51-6.42,2-6.37,12.48.12,20.31-5.12,24-17.24,1.34-4.39,5.39-4.53,6.8-.14,3.81,11.91,11.23,17.67,23.9,17.34,4.2-.11,6.35,3.27,2.29,6.32C169.55,46,164.81,54.76,170.27,65.26Z"/>
                    <path fill="#ff9900" d="M49.59,63.22c4.17-.85,8-2,12-2.35,6.43-.63,11.27-2.59,13.56-9.52,1.2-3.64,4.38-6.62,6.66-9.9,2.33,3.26,5.7,6.22,6.79,9.86,2.47,8.31,8.82,8.88,15.61,9.79,3,.4,5.83,1.94,8.73,3-1.6,2.41-2.7,5.49-4.88,7.1-7.49,5.53-10.09,12.18-6.56,21a16.08,16.08,0,0,1,.7,4.83c.22,3.63-1.49,6.13-4.84,3.64C86.9,92.92,77,92.59,66.53,100.58c-3,2.34-6.44.34-5.14-3.08,5.19-13.59-.08-23.06-10.6-31C50.34,66.13,50.31,65.23,49.59,63.22Z"/>
                    <path fill="#ff9900" d="M253.48,65.07c-2,2.14-3.43,4.35-5.44,5.73-8.4,5.81-10.42,13.32-7.2,22.84.72,2.12-.17,4.78-.32,7.19l-7-1.6a1.67,1.67,0,0,1-.64-.28c-7.66-6.15-15.23-6.43-23.19-.25-2,1.51-5,1.6-7.57,2.35-.27-2.88-.55-5.76-.78-8.64a3.5,3.5,0,0,1,.29-1.36c2.51-7.52,1.76-14-5.64-18.57-1.55-1-2.7-2.56-4-3.87-3.78-3.74-2.7-6,2.17-7.08a2.7,2.7,0,0,1,.68-.12C207,62.23,214,56.21,217.62,45c1.64-5.06,5.48-4.89,7-.17,3.78,11.6,10.94,17.6,23.38,16.81a7,7,0,0,1,3.26,1.12C251.86,63,252.23,63.69,253.48,65.07Z"/>
                  </svg>
                ),
              },
              {
                title: "Deep Knowledge of Amazon Policies",
                desc: "Our team understands Amazon's evolving rules and appeal process inside and out.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M160,270.3H30.47c-7.64,0-11.82-4.14-11.82-11.66q0-121.23,0-242.48c0-7.59,4.13-11.71,11.75-11.71h182.1c7.63,0,11.8,4,11.81,11.67q.06,57.5,0,115c0,.63-.1,1.26-.15,1.93H210.71V18.53h-178v238h3q56.76,0,113.54,0a3.67,3.67,0,0,1,3.88,2.26C155.14,262.58,157.53,266.19,160,270.3Z"/>
                    <path fill="#ff9900" d="M153.31,205c0-7.22.21-14.44,0-21.65-.48-13.3,7.64-27,21.56-31.75,9.74-3.34,19.59-6.45,29.56-9,11-2.79,21.93-1.73,32.69,1.66l20.8,6.56a33,33,0,0,1,23.43,32c0,13.71.1,27.42,0,41.13-.22,27.4-12.61,47.46-36.94,59.91-8.39,4.29-17.2,7.76-25.86,11.51a4,4,0,0,1-2.89-.08c-8.91-4-17.91-7.79-26.62-12.19-20.27-10.23-32.21-26.77-35-49.28-1.19-9.49-.65-19.2-.9-28.81Zm9.63,0h.44c0,9.13-.72,18.33.16,27.37,1.63,16.78,10,30.15,24.3,38.9,9,5.47,18.94,9.27,28.5,13.73a3.43,3.43,0,0,0,2.45-.25c7.1-3.11,14.31-6,21.23-9.52,20-10.06,30.76-26.42,31.58-48.77.53-14.49.14-29,.08-43.54-.05-11-6.55-19.66-17.05-23-7.09-2.23-14.16-4.53-21.26-6.69-8.49-2.57-17.22-3.64-25.86-1.47-9.51,2.4-18.82,5.56-28.21,8.42A23.05,23.05,0,0,0,163,181.84C162.88,189.54,162.94,197.24,162.94,204.94Z"/>
                    <path fill="#ff9900" d="M76.07,38.55c15.59-.06,27.73,12.17,27.76,28a27.71,27.71,0,0,1-55.41.08C48.39,50.74,60.34,38.62,76.07,38.55Zm0,6.45A21.27,21.27,0,1,0,97.36,66.19,21.19,21.19,0,0,0,76.09,45Z"/>
                    <path fill="#ff9900" d="M48.43,208.46a27.52,27.52,0,0,1,28-27.75,27.8,27.8,0,1,1-28,27.75Zm27.43,21.21a21.21,21.21,0,0,0,21.53-20.93c.16-11.57-9.34-21.41-20.75-21.48A21.36,21.36,0,0,0,54.85,208.5C54.64,219.91,64.26,229.61,75.86,229.67Z"/>
                    <path fill="#ff9900" d="M76.29,109.67a27.73,27.73,0,1,1-27.87,27.61A27.48,27.48,0,0,1,76.29,109.67ZM76,158.54a21.22,21.22,0,1,0,.27-42.43A21.46,21.46,0,0,0,54.85,137.5,21.13,21.13,0,0,0,76,158.54Z"/>
                    <path fill="#ff9900" d="M151.2,76.58q19,0,38,0c1.87,0,3.51.59,4,2.35.36,1.23.36,3.12-.36,4a6,6,0,0,1-4.09,1.8c-15.46.13-30.93.08-46.39.08H113.53c-3.27,0-5-1.46-5-4.17,0-2.56,1.75-4,4.89-4H151.2Z"/>
                    <path fill="#ff9900" d="M134.35,55.93H113.67c-3.42,0-5.08-1.32-5.11-4s1.7-4.17,5-4.17h41.6c3.05,0,4.85,1.52,4.89,4.06s-1.71,4.1-4.79,4.1c-7,0-14,0-20.92,0Z"/>
                    <path fill="#ff9900" d="M134.35,118.91H155c3.25,0,5,1.49,5,4.13s-1.83,4-4.92,4H113.31c-3.07,0-4.76-1.52-4.72-4.16s1.62-4,4.84-4Z"/>
                    <path fill="#ff9900" d="M163.14,147.84c-2.84,2.66-5.52,5.22-8.28,7.7a2.89,2.89,0,0,1-1.77.38q-19.92,0-39.83,0c-3,0-4.74-1.68-4.67-4.26s1.62-4,4.66-4q24.25,0,48.51,0C162.2,147.72,162.64,147.8,163.14,147.84Z"/>
                    <path fill="#ff9900" d="M145,219v8.13h-4.37q-13.44,0-26.88,0c-3.27,0-5.1-1.46-5.17-4.05a3.76,3.76,0,0,1,3.22-4.11,6.14,6.14,0,0,1,1.42-.18q15.12,0,30.24,0A13.33,13.33,0,0,1,145,219Z"/>
                    <path fill="#ff9900" d="M145,190.35v7.75c-.62.06-1.23.17-1.84.17-9.94,0-19.88,0-29.81,0-2,0-3.72-.68-4.48-2.57a3.68,3.68,0,0,1,1-4.58,4.69,4.69,0,0,1,2.58-1c10.58-.07,21.16,0,31.74,0A3.34,3.34,0,0,1,145,190.35Z"/>
                    <path fill="#ff9900" d="M171.2,205.19q0-11.41,0-22.85a14.46,14.46,0,0,1,9.82-14c9.5-3.07,19-6,28.7-8.52,7.21-1.87,14.47-.79,21.54,1.41s14.33,4.49,21.48,6.8c6.44,2.09,10.59,7.41,10.64,14.17.12,14.92.51,29.85-.08,44.74-.71,17.75-9.17,31.25-24.93,39.71-6.33,3.4-13,6.13-19.58,9.08a3.4,3.4,0,0,1-2.46.15c-7.77-3.58-15.87-6.63-23.14-11-14.26-8.63-21.46-21.82-22-38.49C171,219.31,171.2,212.25,171.2,205.19Zm35,20.63a3.28,3.28,0,0,1-.62-.32c-2.91-2.87-5.79-5.76-8.72-8.61-3.46-3.38-7.84-3.56-10.87-.49s-2.95,7.5.39,10.89c4.5,4.56,9,9.08,13.59,13.6,4,4,8.07,4,12.1-.09q17.9-17.94,35.82-35.87c3.48-3.49,3.72-8.17.54-11.27s-7.54-2.71-11.06.83Z"/>
                    <path fill="#ff9900" d="M72,69.52,83.48,57.88c.5-.51,1-1.34,1.58-1.39,1.3-.13,2.9-.28,3.89.35a2.54,2.54,0,0,1,.25,4Q81.78,68.55,74.09,76A2.81,2.81,0,0,1,70,75.74c-2.23-2.2-4.46-4.39-6.63-6.64a2.94,2.94,0,0,1-.06-4.48c1.44-1.45,3.07-1.25,4.44.18S70.39,67.77,72,69.52Z"/>
                    <path fill="#ff9900" d="M72,211.82l12.32-12.54c1.11-1.12,2.53-1.87,3.81-.79a6,6,0,0,1,1.58,3.36c.11.55-.64,1.39-1.18,1.93Q81.84,210.64,75,217.4c-2.17,2.15-3.56,2.15-5.72,0q-2.82-2.77-5.59-5.61c-1.62-1.66-1.81-3.55-.56-4.88s3.31-1.29,5,.47C69.47,208.74,70.61,210.18,72,211.82Z"/>
                    <path fill="#ff9900" d="M71.74,140.89c4.57-4.63,8.43-8.59,12.34-12.49,1.71-1.7,3.56-1.91,4.86-.58a3,3,0,0,1,0,4.49q-7.23,7.4-14.63,14.6c-1.44,1.41-3.06,1.24-4.48-.15-2.18-2.13-4.33-4.27-6.45-6.46a3,3,0,0,1-.21-4.51c1.2-1.38,3.16-1.31,4.63.25S70.35,139.14,71.74,140.89Z"/>
                  </svg>
                ),
              },
              {
                title: "Custom, Policy-Aligned Action Plans",
                desc: "No copy-paste templates. Every case gets a tailored Plan of Action based on real root cause analysis.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#ff9900"/>
                    <path d="M12 9v4M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Fast Response & Clear Communication",
                desc: "We act quickly, keep you informed, and support you through every step of the reinstatement process.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 15l-2 2-1-1" stroke="#ff9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Free Re-Appeal Included",
                desc: "If the first appeal is denied, we will revise and resubmit at no extra cost, because your success is our priority.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="w-10 h-10 mb-5">
                    <path fill="#ff9900" d="M215.67,115.69c-.47-4.82-.84-8.56-1.32-13.45-12.62,0-24.86-.51-37,.16-9.91.54-14.07-2.78-13.55-13.05.63-12.24.15-24.53.15-37.73H49.73V270.06H213.31c7.54-19-8-42.12,13.79-60.08,0,23.59.3,44.86-.44,66.1-.08,2.28-6.17,6.15-9.55,6.24-22.29.57-44.59.3-66.89.3-33.84,0-67.68-.21-101.51.14-8.41.09-11.65-2.57-11.5-11.19.65-38,1.14-76,1.15-114,0-35.32-.33-70.65-1.24-105.95-.27-10.81,3.5-13.91,14-13.77,37.29.5,74.59-.08,111.88.49,5.39.09,11.86,3,15.88,6.67C192.7,57.73,205.7,71.41,219,84.76,231.55,97.39,231,103.49,215.67,115.69ZM200.09,88.77,177,65.71V88.77Z"/>
                    <path fill="#ff9900" d="M261.48,162l-84.77,83.62-38.78-38.76,84.45-83.46Z"/>
                    <path fill="#ff9900" d="M155,31.89H18.57V249.1l13.22,1.42c-.17,3.48-.34,7-.52,10.47-31.65,2.2-25.43,1.86-25.54-23.78-.29-68.38-.1-136.75-.09-205.13,0-14.27.54-14.82,15-14.83q51.24,0,102.49,0C141.8,17.24,141.8,17.25,155,31.89Z"/>
                    <path fill="#ff9900" d="M269.79,155.4l-41.07-42.57c5.77-5.39,12.92-12.17,20.19-18.83,6-5.5,12.37-5.81,18.35-.07q11.6,11.14,22.74,22.74c6,6.19,6.54,12.68,0,19S276.87,148.5,269.79,155.4Z"/>
                    <path fill="#ff9900" d="M127.87,131.45c-15.71,0-31.43.41-47.1-.28-4-.18-7.89-3.81-11.83-5.85,4.12-2.25,8.2-6.38,12.35-6.45q47.67-.83,95.36,0c4.4.07,8.73,3.81,13.09,5.84-4.54,2.26-9,6.24-13.63,6.47C160.06,132,144,131.46,127.87,131.45Z"/>
                    <path fill="#ff9900" d="M178.32,152.63c-5.37,10.16-12.22,12.52-21.61,12.29-25.34-.61-50.72.05-76.06-.48-4-.08-7.88-3.78-11.82-5.81,3.88-2,7.72-5.68,11.62-5.74C112.65,152.42,144.86,152.63,178.32,152.63Z"/>
                    <path fill="#ff9900" d="M146.51,185.5C140,193.75,134.88,199,124.9,198.36c-14.86-.91-29.84.2-44.71-.54-3.86-.19-7.54-4-11.3-6.23,3.59-2,7.13-5.72,10.76-5.81C101.27,185.22,122.91,185.5,146.51,185.5Z"/>
                    <path fill="#ff9900" d="M166,251.51l-35.23,2.65c.85-12.09,1.69-23.85,2.46-34.7C144.05,230,154.73,240.49,166,251.51Z"/>
                    <path fill="#ff9900" d="M125.08,219.64v12c-16.43,0-32.47.25-48.48-.26-2.6-.08-5.1-3.55-7.65-5.45,2.74-2.09,5.41-5.87,8.22-6C92.84,219.34,108.55,219.64,125.08,219.64Z"/>
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

          <p className="text-[#000000] text-[15px] leading-relaxed mb-10">
            <strong>Important Note:</strong> While AMZ Pro Venture specializes in both account and ASIN reinstatement, this service specifically focuses on Amazon listing and ASIN reinstatement.
          </p>

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

      {/* What We Need From You */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1659px] mx-auto flex flex-col lg:flex-row items-center gap-0">
          <div className="flex-shrink-0 w-full lg:w-[50%]">
            <Image src="/document.webp" alt="What We Need from You" width={800} height={600} unoptimized className="w-full h-auto object-contain" />
          </div>
          <div className="flex-1 px-10 py-10">
            <h2 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}>
              <span className="text-[#000000]">What We Need From You to Deliver the </span>
              <span className="text-[#ff9900]">Best Results</span>
            </h2>
            <div className="space-y-4 mb-8">
              {[
                "Seller Central child account access",
                "Invoices from your supplier or brand",
                "Letter of Authorization (if applicable)",
                "Product and packaging images (if requested)",
                "Any Amazon communication related to the issue",
                "Completed reinstatement intake questionnaire",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 w-[22px] h-[22px]" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-[#000000] text-[16px]">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-[#67768e] text-[15px] leading-relaxed max-w-[480px] mb-8">
              <strong className="text-[#000000]">Important:</strong> We do not create or fake documentation. All information must be genuine and seller-provided. Don&apos;t worry, we&apos;ll guide you through the entire process of documentation.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">BOOK A FREE CONSULTATION →</span>
                <span className="svc-btn-bottom">BOOK A FREE CONSULTATION →</span>
              </span>
            </a>
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

      {/* We Resolve Full Range Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-10">

          <div className="text-center mb-10">
            <h2 className="font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px" }}>
              <span className="text-[#000000]">Our Listing & ASIN </span>
              <span className="text-[#ff9900]">Reinstatement Process</span>
            </h2>
            <p className="text-[#67768e] text-[16px] max-w-[700px] mx-auto">
              Dealing with Amazon ASIN suspension isn’t just about submitting a form; it requires strategy, documentation, and a deep understanding of Amazon’s policies. At SPCTEK, we follow a clear, proven process to maximize your chances of reinstatement while keeping you informed every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[
              {
                title: "Initial Case Assessment & Documentation",
                items: ["We begin by reviewing your suspended ASIN and Amazon’s performance notifications to assess reinstatement potential. If we see a strong chance of success, we proceed.",
                   "Once accepted, we guide you in gathering the required documents, like invoices, authorization letters, or certifications, for a compliant appeal."],
                note: null,
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-1">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="9" y="3" width="6" height="4" rx="1" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12h6M9 16h4" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Plan of Action (POA) Creation",
                items: ["Our team drafts a custom, case-specific POA that directly addresses Amazon’s concerns.",
                  "We ensure that the plan is aligned with Amazon’s policies and structured to meet their expectations for reinstatement.",],
                note: null,
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-1">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="#ff9900"/>
                    <path d="M12 9v4M12 17h.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Submission & Tracking",
                items: ["We submit your appeal via the appropriate Seller Central channel or escalate it when needed.", "Our team closely monitors the appeal’s progress, communicates with Amazon, and keeps you updated throughout."],
                note: null,
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-1">
                    <path d="M22 2L11 13" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22 11 13 2 9l20-7z" stroke="#ff9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: "Free One-Time Re-Appeal",
                items: ["If the first appeal is denied but the case is still valid, we revise the POA based on Amazon’s feedback and resubmit, at no additional cost."],
                note: null,
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 mb-1">
                    <circle cx="12" cy="12" r="12" fill="#ff9900"/>
                    <path d="M12 7v5.5M12 16.5h.01" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="flex flex-col gap-4 p-6 border border-gray-200 bg-white" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
                {card.icon ? card.icon : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[27px] h-[27px]" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#ff9900" />
                    <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <h3 className="font-bold text-[16px] leading-snug" style={{ color: "#ff9900" }}>{card.title}</h3>
                <div className="space-y-2">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="flex-shrink-0 mt-0.5 w-[18px] h-[18px]" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#ff9900" />
                        <path d="M6 12.5l4 4 8-8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-[#000000] text-[14px]">{item}</p>
                    </div>
                  ))}
                </div>
                {card.note && <p className="text-[#67768e] text-[13px] leading-relaxed">{card.note}</p>}
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Downtime CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-10">
          <div className="rounded-2xl px-10 py-16 text-center" style={{ backgroundColor: "#f4f4f4" }}>
            <h2 className="font-bold leading-tight mb-5" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "45px", color: "#000000" }}>
              Let&apos;s Get Your Listing Back Online
            </h2>
            <p className="text-[#67768e] text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8">
              If your product has been taken down, don&apos;t wait. Start with our ASIN reinstatement, and we&apos;ll guide you through every step of getting reinstated quickly, confidently, and compliantly.
            </p>
            <a href="/contact-us" className="svc-btn svc-btn-pink">
              <span className="svc-btn-inner">
                <span className="svc-btn-top">REINSTATE MY AMAZON LISTING →</span>
                <span className="svc-btn-bottom">REINSTATE MY AMAZON LISTING →</span>
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
