"use client";
import { motion } from "framer-motion";
import {
  FaAnchor,
  FaHotel,
  FaUsers,
  FaAward,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import AboutHero from "../../components/about/AboutHero";
import CompanyIntro from "../../components/about/CompanyIntro";
import MaintenancePackages from "../../components/about/MaintenancePackages";
import WhyChooseUs from "../../components/about/WhyChooseUs";
import OurServices from "../../components/about/OurServices";
import ContactCTASection from "../../components/home/ContactCTASection";

export default function About() {
  return (
    <div className="pt-16 lg:pt-20">
      <AboutHero />
      <CompanyIntro />
      <MaintenancePackages />
      <WhyChooseUs />
      <OurServices />
      <ContactCTASection />
    </div>
  );
}
