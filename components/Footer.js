"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../assets/logo.png"; // ← Actual path

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

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={logo}
              alt="EMME Construction Logo"
              className="w-[60%]  object-contain"
              priority
            />
            <p className="mt-4">
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
            <h3 className="text-lg font-semibold font-quicksand">
              Yacht Services
            </h3>
            <ul className="space-y-1">
              {yachtServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/yacht-services"
                    className="text-gray-300 hover:text-gold transition duration-200 text-sm"
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
            <h3 className="text-lg font-semibold font-quicksand">HotelCare</h3>
            <ul className="space-y-1">
              {hotelServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/hotelcare"
                    className="text-gray-300 hover:text-gold transition duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info (shifted here) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold font-quicksand">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gold" />
                <span>+356 2123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gold" />
                <span>info@emmeconstruction.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gold" />
                <span>Malta</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 EMME CONSTRUCTION LTD. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-gold transition duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-gold transition duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
