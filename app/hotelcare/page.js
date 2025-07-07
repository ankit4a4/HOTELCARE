"use client";
import HotelCareHero from "../../components/HotelCare/HotelCareHero";
import WhyChooseHotelCare from "../../components/HotelCare/WhyChooseHotelCare";
import MaintenancePlans from "../../components/HotelCare/MaintenancePlans";
import HotelWorkProcess from "../../components/HotelCare/HotelWorkProcess";
import ContactCTASection from "@/components/home/ContactCTASection";
import HotelServicesSection from "../../components/HotelCare/HotelServicesSection";

export default function HotelCare() {
  return (
    <div className="pt-16 lg:pt-20">
      <HotelCareHero />
      <WhyChooseHotelCare />
      <HotelServicesSection />
      <MaintenancePlans />
      <HotelWorkProcess />
      <ContactCTASection />
    </div>
  );
}
