import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Privacy Policy | AMZ Pro Venture",
  description: "Privacy Policy for AMZ Pro Venture - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}
