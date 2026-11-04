import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ChallengeSection from "./ChallengeSection";
import StrategySolutionSection from "./StrategySolutionSection";
import ResultsSection from "./ResultsSection";

export const metadata = {
  title: "Facebook Ads Case Study: From 42 Leads in 3 Years to 908 Leads in Under 3 Months | AMZ ProVenture",
  description: "See how AMZ ProVenture transformed a tax and bookkeeping firm's Facebook Ads from years of ineffective spending into a scalable lead generation system delivering 908 leads in under 3 months.",
};

export default function FacebookAdsCaseStudyPage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <StrategySolutionSection />
      <ResultsSection />
      <Footer />
    </main>
  );
}
