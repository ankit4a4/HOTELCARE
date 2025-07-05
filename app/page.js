"use client";
import HeroHome from "../components/home/HeroHome";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSlider from "../components/home/TestimonialsSlider";
import IndustriesSection from "../components/home/IndustriesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ContactCTASection from "../components/home/ContactCTASection";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSlider />
      <IndustriesSection />
      <ProjectsSection />
      <ContactCTASection />
    </>
  );
}
