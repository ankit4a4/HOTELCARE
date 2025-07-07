import HeroSectionYacht from "../../components/yachtservices/HeroSectionYacht";
import YachtExpertiseSection from "../../components/yachtservices/YachtExpertiseSection";
import YachtServicesGrid from "../../components/yachtservices/YachtServicesGrid";
import YachtWhyChooseUs from "../../components/yachtservices/YachtWhyChooseUs";
import TestimonialsSlider from "../../components/home/TestimonialsSlider.jsx";

export default function YachtServices() {
  return (
    <div className="pt-16 lg:pt-20">
      <HeroSectionYacht />
      <YachtExpertiseSection />
      <YachtServicesGrid />
      <YachtWhyChooseUs />
      <TestimonialsSlider />
    </div>
  );
}
