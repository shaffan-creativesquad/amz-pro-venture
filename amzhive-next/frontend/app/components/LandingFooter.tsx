import Link from "next/link";
import Image from "next/image";

export default function LandingFooter() {
  return (
    <footer className="w-full">
      {/* Gradient line */}
      <div className="w-full">
        <Image src="/Line-3.png" alt="" width={1440} height={6} className="w-full h-auto" unoptimized />
      </div>

      {/* Bottom bar */}
      <div className="bg-white py-4">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#000000] text-sm">Copyright 2026 AMZ Pro Venture</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-[#000000] text-sm hover:text-[#ff9900] transition-colors">Privacy Policy</Link>
            <span className="text-[#bfbfbf]">|</span>
            <Link href="/terms-condition" className="text-[#000000] text-sm hover:text-[#ff9900] transition-colors">Terms &amp; Condition</Link>
            <span className="text-[#bfbfbf]">|</span>
            <Link href="/refund-policy" className="text-[#000000] text-sm hover:text-[#ff9900] transition-colors">Refund policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
