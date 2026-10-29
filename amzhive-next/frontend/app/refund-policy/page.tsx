import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RefundPolicyContent from "./RefundPolicyContent";
import FadeIn from "../components/FadeIn";

export const metadata = {
  title: "Refund Policy | AMZ Pro Venture",
  description: "Refund Policy for AMZ Pro Venture - Learn about our 100% money back guarantee and refund terms.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <RefundPolicyContent />
      <Footer />
    </>
  );
}
