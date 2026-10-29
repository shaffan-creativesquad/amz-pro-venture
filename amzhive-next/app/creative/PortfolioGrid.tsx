const projects = [
  { title: "Sola Glam", desc: "Website Development & Marketing", img: "/Component-65-1.png" },
  { title: "Sculpt Neon Sign", desc: "Website Branding & Design", img: "/be40f3b096995f9cb87da3c6c5deb390.png" },
  { title: "Bik & Bold", desc: "Shopify Refresh & Subscription Model", img: "/70d2cc93b40b26aae4dc3ca9f40ce49a.png" },
  { title: "Fancii", desc: "Product Research & Development", img: "/0dab44a5cbd1623a7380fb1311c7130e.png" },
];

export default function PortfolioGrid() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-2 gap-6">
        {projects.map((item) => (
          <div key={item.title} className="relative overflow-hidden group" style={{ height: "420px" }}>
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: "linear-gradient(180deg, #FFFFFF00 0%, #E91C59 100%)" }} />
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h3 className="font-bold text-[22px] mb-1" style={{ color: "#ffffff" }}>{item.title}</h3>
              <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.8)" }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
