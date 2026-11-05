import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ChallengeSection from "./ChallengeSection";
import StrategySection from "./StrategySection";
import ResultsSection from "./ResultsSection";

export const metadata = {
  title: "Shopify Case Study: Scaling SpeedBump Revenue by 954% | AMZ ProVenture",
  description: "See how AMZ ProVenture scaled SpeedBump's monthly revenue by 954% in three months through Meta Ads, email marketing, organic social growth, and Shopify conversion optimization.",
};

export default function ShopifyCaseStudyPage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <StrategySection />
      <ResultsSection />
      <Footer />
    </main>
  );
}
