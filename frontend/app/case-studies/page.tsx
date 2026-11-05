import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import CaseStudiesGridSection from "./CaseStudiesGridSection";

export const metadata = {
  title: "Case Studies: Real E-Commerce & Digital Marketing Results | AMZ ProVenture",
  description: "Explore AMZ ProVenture's real case studies across Amazon, Shopify, Meta Ads, Facebook Ads, and WooCommerce — see the measurable results we achieve for our clients.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <CaseStudiesGridSection />
      <Footer />
    </main>
  );
}
