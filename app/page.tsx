import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import YatriInfoSections from "@/components/info-sections";
import Navbar from "@/components/navbar";
import TariffsAndComparison from "@/components/tariffs-and-comparison";
import WhyChooseOneWayCab from "@/components/why-choose-one-way-cab";
import YatriFeatures from "@/components/yatri-features";
import YatriLanding from "@/components/yatri-landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <YatriFeatures />
      <YatriLanding />
      <TariffsAndComparison />
      <WhyChooseOneWayCab />
      <YatriInfoSections />
      <Footer />
    </>
  );
}
