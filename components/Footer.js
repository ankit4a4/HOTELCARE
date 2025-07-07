"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/logo.png";

const Footer = () => {
  const yachtServices = [
    "Yacht Construction",
    "Yacht Transformation",
    "Yacht Repair",
    "Custom Modifications",
  ];

  const hotelServices = [
    "Internal & External Cleaning",
    "System Maintenance",
    "Pool Maintenance",
    "Interior Renovations",
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "HotelCare", href: "/hotelcare" },
    { label: "Yacht Services", href: "/yacht-services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo + Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={logo}
              alt="EMME Construction Logo"
              className="w-[60%] object-contain"
              priority
            />
            <p className="mt-4 text-sm text-gray-400">
              Premium yacht services and professional hotel maintenance
              solutions in Malta.
            </p>
          </motion.div>

          {/* Yacht Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold font-quicksand text-[#584910]">
              Yacht Services
            </h3>
            <ul className="space-y-1">
              {yachtServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/yacht-services"
                    className="text-gray-400 hover:text-[#584910] transition duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* HotelCare Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold font-quicksand text-[#584910]">
              HotelCare
            </h3>
            <ul className="space-y-1">
              {hotelServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/hotelcare"
                    className="text-gray-400 hover:text-[#584910] transition duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold font-quicksand text-[#584910]">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#584910] transition duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold font-quicksand text-[#584910]">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-[#584910]" />
                <span>+39 3663078074</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#584910]" />
                <span>info@emmeconstruction.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#584910]" />
                <span>The Core, Valley Road, Msida, MSD9021 Malta</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 EMME CONSTRUCTION LTD. All rights reserved. Powered by{" "}
            <span className="text-[#D83030] ">Rank</span>mantra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
