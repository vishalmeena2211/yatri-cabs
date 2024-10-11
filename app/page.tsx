import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero-section/hero-section";
import YatriInfoSections from "@/components/info-section/info-sections";
import Navbar from "@/components/navbar/navbar";
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
