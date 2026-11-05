import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import ChallengeVsSolutionSection from "./ChallengeVsSolutionSection";
import StatsSection from "./StatsSection";
import BusinessModelsSection from "./BusinessModelsSection";
import GrowthSolutionsSection from "./GrowthSolutionsSection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import ROICalculatorSection from "./ROICalculatorSection";
import PartnerStepsSection from "./PartnerStepsSection";
import RequirementsSection from "./RequirementsSection";
import BestPartnerSection from "./BestPartnerSection";
import ComparisonSection from "./ComparisonSection";
import StepByStepSection from "./StepByStepSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";

export default function TikTokShop() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <ChallengeVsSolutionSection />
      <StatsSection />
      <BusinessModelsSection />
      <GrowthSolutionsSection />
      <SuccessStoriesSection />
      <ROICalculatorSection />
      <PartnerStepsSection />
      <RequirementsSection />
      <BestPartnerSection />
      <ComparisonSection />
      <StepByStepSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
