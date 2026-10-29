const projects = [
  { title: "Ponga London", desc: "Branding & Marketing", img: "/7ed19e331777d12dfae2285577d18248.webp" },
  { title: "Notabo", desc: "Website Design & Development", img: "/7a63e2e74d9fed573629af193eeecade.webp" },
];

export default function PortfolioRow() {
  return (
    <section className="w-full bg-white py-6 pb-16">
      <div className="max-w-[1440px] mx-auto px-10 grid grid-cols-2 gap-6">
        {projects.map((item) => (
          <div key={item.title} className="relative overflow-hidden group" style={{ height: "420px" }}>
            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: "linear-gradient(180deg, #FFFFFF00 0%, #ff9900 100%)" }} />
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
