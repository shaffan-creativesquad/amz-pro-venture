import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ChallengeSection from "./ChallengeSection";
import StrategySection from "./StrategySection";
import ResultsSection from "./ResultsSection";

export const metadata = {
  title: "Website Design Case Study: Driving 27% More Amazon Traffic & 23% Higher User Engagement | AMZ Pro Venture",
  description: "See how AMZ Pro Venture helped a wellness brand increase Amazon store traffic by 27%, reduce bounce rate by 15%, and boost user engagement by 23% through a conversion-focused website redesign.",
};

export default function CaseStudyPage() {
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
