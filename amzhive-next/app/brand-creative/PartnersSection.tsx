import Image from "next/image";

const cards = [
  {
    title: "Complete Strategy",
    text: "We will incorporate a full customer persona and a total segmenting your audience for the most effective communications. We can help design and delivery your automated customer acquisition schema to move your customers through every stage based on their unique needs and desires.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 37 37" fill="none">
        <path d="M33.2031 27.7351L33.2031 10.6879C33.2031 10.123 32.7538 9.66504 32.1996 9.66504L25.5093 9.66504C24.9551 9.66504 24.5058 10.123 24.5058 10.6879L24.5058 27.7351C24.5058 28.3 24.9551 28.758 25.5093 28.758L32.1996 28.758C32.7538 28.758 33.2031 28.3 33.2031 27.7351Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.5078 19.2114L9.12023 19.2114" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.12119 6.9375L14.4734 6.9375C15.0057 6.9375 15.5163 7.15303 15.8927 7.53666C16.2691 7.9203 16.4805 8.44063 16.4805 8.98317L16.4805 29.4399C16.4805 29.9824 16.2691 30.5028 15.8927 30.8865C15.5163 31.2701 15.0057 31.4856 14.4734 31.4856L9.12119 31.4856" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.09987 6.93765C3.09987 8.63234 4.44782 10.0062 6.11048 10.0062C7.77314 10.0062 9.12109 8.63234 9.12109 6.93765C9.12109 5.24296 7.77314 3.86914 6.11048 3.86914C4.44782 3.86914 3.09987 5.24296 3.09987 6.93765Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.09987 19.2116C3.09987 20.9062 4.44782 22.2801 6.11048 22.2801C7.77314 22.2801 9.12109 20.9062 9.12109 19.2116C9.12109 17.5169 7.77314 16.1431 6.11048 16.1431C4.44782 16.1431 3.09987 17.5169 3.09987 19.2116Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.09987 31.4855C3.09987 33.1801 4.44782 34.554 6.11048 34.554C7.77314 34.554 9.12109 33.1801 9.12109 31.4855C9.12109 29.7909 7.77314 28.417 6.11048 28.417C4.44782 28.417 3.09987 29.7909 3.09987 31.4855Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "CRM Integration",
    text: "We can integrate any CRM platform to manage content personalisation and analytics, working alongside a Marketing Attribution strategy to ensure your customers' commercial journey is covered. This allows us to streamline your communications and create better, long lasting relationships with your subscribers.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 33 33" fill="none">
        <g clipPath="url(#clip0_1010_21300)">
          <path d="M26.9886 26.433L17.5149 31.6016C17.2118 31.767 16.8722 31.8537 16.5269 31.8537C16.1817 31.8537 15.842 31.767 15.539 31.6016L6.06524 26.433C5.79043 26.2833 5.55327 26.073 5.37174 25.8181C5.19021 25.5633 5.06908 25.2704 5.01749 24.9617L1.45761 3.60387C1.4085 3.30843 1.42431 3.00582 1.50396 2.7171C1.58362 2.42837 1.7252 2.16047 1.91887 1.932C2.11252 1.70353 2.35363 1.51998 2.6254 1.3941C2.89718 1.26823 3.19311 1.20306 3.49261 1.20313H29.5612C29.8606 1.20326 30.1563 1.26858 30.428 1.39454C30.6996 1.52049 30.9405 1.70408 31.1341 1.93252C31.3276 2.16096 31.4691 2.4288 31.5487 2.71743C31.6281 3.00605 31.644 3.30854 31.5949 3.60387L28.035 24.9617C27.9841 25.2704 27.8634 25.5634 27.682 25.8185C27.5008 26.0734 27.2636 26.2837 26.9886 26.433Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.7461 7.39062H9.30859L10.3398 13.5781H22.7148L21.6836 21.8281L16.5273 24.9219L11.3711 21.8281" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs><clipPath id="clip0_1010_21300"><rect width="33" height="33" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
  {
    title: "Segmentation And Marketing Automation",
    text: "Grow your audience by creating groups based on constant engagement patterns alongside welding data. This then informs the full strategy, connecting to marketing automations and funnels. Don't then hit your audience with the right content at the right time creating a more relevant and progressive personalisation technique to develop brand engagement across every stage of the customer journey.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 37 37" fill="none">
        <path d="M2.73337 3.521H34.2666C34.2666 3.521 35.8437 3.521 35.8437 5.09812V27.1717C35.8437 27.1717 35.8437 28.7488 34.2666 28.7488H2.73337C2.73337 28.7488 1.15625 28.7488 1.15625 27.1717V5.09812C1.15625 5.09812 1.15625 3.521 2.73337 3.521Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.274 21.164L14.5689 21.9703C14.1959 22.1468 13.7918 22.2481 13.3796 22.2685C12.9674 22.2888 12.5552 22.2279 12.1667 22.0889C11.778 21.95 11.4206 21.7358 11.1148 21.4588C10.8089 21.1818 10.5606 20.8472 10.3841 20.4741C10.2076 20.1011 10.1062 19.697 10.0859 19.2847C10.0655 18.8726 10.1265 18.4604 10.2655 18.0718C10.4044 17.6833 10.6185 17.3257 10.8956 17.0199C11.1727 16.7142 11.5073 16.4658 11.8803 16.2893L13.5854 15.4814L16.274 21.164Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.273 21.164C19.6061 19.5867 23.3316 19.031 26.9799 19.5668L28.11 19.7333L22.2008 7.23193L21.6118 8.21089C19.7134 11.3739 16.9207 13.9038 13.5859 15.4814L16.273 21.164Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.2734 21.1641C16.6251 21.9084 17.1244 22.5733 17.7411 23.1184C18.3579 23.6636 19.0791 24.0777 19.8609 24.3353" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Personalisation",
    text: "Leverage your subscriber data by personalising your email communications for higher engagement in both email and SMS marketing. This system allows you to tailor their experience at your business based on the information they give you, feeding them the content they need when they want it.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 37 37" fill="none">
        <path d="M12.9102 12.1406C12.9102 13.8272 13.5802 15.4447 14.7728 16.6374C15.9654 17.83 17.5829 18.5 19.2695 18.5C20.9561 18.5 22.5737 17.83 23.7663 16.6374C24.9589 15.4447 25.6289 13.8272 25.6289 12.1406C25.6289 10.454 24.9589 8.83648 23.7663 7.64386C22.5737 6.45126 20.9561 5.78125 19.2695 5.78125C17.5829 5.78125 15.9654 6.45126 14.7728 7.64386C13.5802 8.83648 12.9102 10.454 12.9102 12.1406Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.86328 31.2187C8.86328 28.4589 9.95965 25.812 11.9112 23.8604C13.8628 21.9089 16.5096 20.8125 19.2695 20.8125C22.0294 20.8125 24.6763 21.9089 26.6279 23.8604C28.5793 25.812 29.6758 28.4589 29.6758 31.2187" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Design and Copywriting",
    text: "Ensure your message is in the wording. We'll create copy focused on telling your customer's story on the journey of their unique path down the funnel, increasing the insight from your customers to keep them happy and contribute towards conversion.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 33 33" fill="none">
        <path d="M7.21875 31.9687C6.12473 31.9687 5.07552 31.5341 4.30193 30.7605C3.52835 29.9869 3.09375 28.9377 3.09375 27.8437V8.97867C3.0955 8.33869 3.24614 7.70789 3.53375 7.13617L6.28375 1.63617C6.36962 1.46546 6.50123 1.32198 6.66391 1.22171C6.82659 1.12145 7.01392 1.06836 7.205 1.06836C7.39608 1.06836 7.58341 1.12145 7.74609 1.22171C7.90877 1.32198 8.04038 1.46546 8.12625 1.63617L10.8762 7.13617C11.1639 7.70789 11.3145 8.33869 11.3162 8.97867V27.8437C11.3163 28.9329 10.8854 29.978 10.1178 30.7508C9.35015 31.5236 8.308 31.9614 7.21875 31.9687Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.09375 8.9375H11.3438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.09375 25.4375H11.3438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5938 1.03125H27.8438C27.8438 1.03125 29.9062 1.03125 29.9062 3.09375V29.9062C29.9062 29.9062 29.9062 31.9688 27.8438 31.9688H19.5938C19.5938 31.9688 17.5312 31.9688 17.5312 29.9062V3.09375C17.5312 3.09375 17.5312 1.03125 19.5938 1.03125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5312 7.21875H22.3438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5312 13.4062H22.3438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5312 19.5938H22.3438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5312 25.7812H22.3438" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "HTML Coding",
    text: "Email is consumed across a vast array of specialist client software, so it's imperative the end product renders flawlessly. We create and test all our templates cross-platform rigorously tested to ensure your customers always have a positive user experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 44 35" fill="none">
        <path d="M15.8058 9.52783L4.03125 18.3508L15.8058 27.1737" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M29.707 9.52783L41.4816 18.3508L29.707 27.1737" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M25.708 3.65625L19.8047 33.0767" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Testing & Optimisation",
    text: "Understanding the customer lifecycle is critical to achieving a positive return. We continuously analyse your campaigns through constant optimisation and A/B testing to maximise your results, based on the performance of the data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 37 37" fill="none">
        <g clipPath="url(#clip0_1010_21270)">
          <path d="M33.3025 31.2188H17.4387C17.1209 31.2168 16.8065 31.1522 16.5137 31.0287C16.2208 30.9052 15.955 30.7252 15.7318 30.499C15.5084 30.2728 15.3319 30.0049 15.2121 29.7104C15.0923 29.416 15.0317 29.1009 15.0338 28.783V17.4517C15.0106 17.146 15.0502 16.8389 15.15 16.5491C15.2498 16.2592 15.4077 15.9928 15.6142 15.7662C15.8206 15.5394 16.0711 15.3574 16.3503 15.2311C16.6297 15.1047 16.9318 15.0367 17.2383 15.0313H33.3025C33.9574 15.0267 34.5886 15.2765 35.0631 15.728C35.5376 16.1794 35.8183 16.7974 35.8462 17.4517V28.783C35.8185 29.4388 35.5382 30.0584 35.0642 30.5123C34.5901 30.9663 33.9589 31.2194 33.3025 31.2188Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.4375 31.2188V35.8437" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.6562 35.8438H31.2187" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.09375 12.7186V6.70613C8.12563 6.12393 8.38685 5.57806 8.82025 5.188C9.25364 4.79795 9.82392 4.59547 10.4062 4.62488C10.9886 4.59547 11.5589 4.79795 11.9923 5.188C12.4256 5.57806 12.6869 6.12393 12.7187 6.70613V12.7186" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.09375 9.25H12.7187" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.125 23.125H26.5937C26.9004 23.125 27.1945 23.2468 27.4113 23.4637C27.6282 23.6805 27.75 23.9746 27.75 24.2812V25.4375C27.75 25.7441 27.6282 26.0383 27.4113 26.255C27.1945 26.472 26.9004 26.5937 26.5937 26.5937H23.125V23.125Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.125 19.6562H26.5938C26.9004 19.6562 27.1945 19.778 27.4113 19.995C27.6282 20.2117 27.75 20.5059 27.75 20.8125V21.9688C27.75 22.2754 27.6282 22.5695 27.4113 22.7863C27.1945 23.0032 26.9004 23.125 26.5938 23.125H23.125V19.6562Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.4088 17.3437H3.56377C3.24591 17.3417 2.93157 17.2772 2.63868 17.1537C2.34579 17.0302 2.0801 16.8501 1.85678 16.6239C1.63345 16.3978 1.45686 16.1298 1.3371 15.8354C1.21733 15.5409 1.15674 15.2258 1.15877 14.9079V3.57667C1.13562 3.271 1.17516 2.96381 1.27496 2.67396C1.37476 2.38411 1.53271 2.11771 1.73913 1.89107C1.94556 1.66444 2.1961 1.48236 2.47539 1.35601C2.75469 1.22965 3.05686 1.16167 3.36336 1.15625H19.6587C19.9711 1.15807 20.2799 1.22273 20.5668 1.34639C20.8535 1.47004 21.1125 1.65015 21.3284 1.87599C21.5442 2.10183 21.7122 2.3688 21.8228 2.66098C21.9332 2.95314 21.9837 3.26456 21.9712 3.57667V10.4062" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.4062 17.3438V21.9687" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.78125 21.9688H10.4062" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs><clipPath id="clip0_1010_21270"><rect width="37" height="37" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col items-center gap-12">

        <Image
          src="/Group-1321317430.webp"
          alt="Email marketing partners"
          width={600}
          height={200}
          unoptimized
          className="w-auto h-auto max-w-full"
        />

        <Image
          src="/Group-1321317470-1024x403.webp"
          alt="Mailchimp and Klaviyo integrations"
          width={1024}
          height={403}
          unoptimized
          className="w-full h-auto"
        />

        {/* Cards grid */}
        <div className="w-full grid grid-cols-4 gap-6 pt-4" style={{ gridAutoRows: "1fr" }}>
          {cards.map((card, i) => {
            const isDark = i % 2 === 1;
            return (
              <div
                key={i}
                className="flex flex-col gap-4 p-8"
                style={{ backgroundColor: isDark ? "#1c1f24" : "#f7f7f7" }}
              >
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: "60px", height: "60px", backgroundColor: "#E91C59" }}
                >
                  {card.icon}
                </div>
                <h3
                  className="font-bold leading-snug"
                  style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif", fontSize: "18px", color: isDark ? "#ffffff" : "#1e293b" }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: "14px", color: isDark ? "rgba(255,255,255,0.6)" : "#67768e", lineHeight: "1.7" }}>
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
