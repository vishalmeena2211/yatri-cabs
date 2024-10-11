import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero-section/hero-section";
import YatriInfoSections from "@/components/info-section/info-sections";
import Navbar from "@/components/navbar/navbar";
import TariffsAndComparison from "@/components/tarrifs/tariffs-and-comparison";
import WhyChooseOneWayCab from "@/components/whyus/why-choose-one-way-cab";
import YatriFeatures from "@/components/features/yatri-features";
import YatriLanding from "@/components/landing-component/yatri-landing";

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
