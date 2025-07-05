'use client';

import { motion } from 'framer-motion';
import { FaHotel, FaSparkles, FaWrench, FaSwimmingPool, FaPalette, FaShieldAlt, FaClock, FaThumbsUp } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';

export default function HotelCare() {
  const services = [
    {
      icon: <FaSparkles />,
      title: "Internal & External Cleaning",
      description: "Comprehensive cleaning services for all hotel areas, from guest rooms to public spaces and exterior facades."
    },
    {
      icon: <FaWrench />,
      title: "System Maintenance",
      description: "Expert maintenance of electrical, plumbing, and air conditioning systems to ensure optimal performance."
    },
    {
      icon: <FaSwimmingPool />,
      title: "Pool Maintenance & Covers",
      description: "Complete swimming pool maintenance services and custom pool cover design and installation."
    },
    {
      icon: <FaPalette />,
      title: "Interior Renovations",
      description: "Full interior renovation services with support from our in-house design studio for hospitality environments."
    }
  ];

  const benefits = [
    {
      icon: <FaClock />,
      title: "Fast Response",
      description: "24/7 availability with rapid response times to minimize disruption to your guests."
    },
    {
      icon: <FaShieldAlt />,
      title: "Single Point of Contact",
      description: "One dedicated contact for all your maintenance needs, eliminating vendor coordination hassles."
    },
    {
      icon: <FaThumbsUp />,
      title: "Better Guest Experience",
      description: "Professional, discreet service that enhances rather than disrupts your guests' experience."
    }
  ];

  const contractFeatures = [
    "Preventive maintenance scheduling",
    "Priority response for emergencies",
    "Regular system inspections",
    "Inventory management and optimization",
    "Detailed maintenance reporting",
    "Seasonal preparation services"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <PageHeader
        title="HotelCare"
        subtitle="Professional hotel maintenance and transformation services"
        backgroundImage="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-quicksand text-navy mb-6">
                Introducing HotelCare
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                HotelCare is EMME Construction's specialized division dedicated to the hospitality industry. We understand that hotels and accommodation facilities require unique maintenance approaches that prioritize guest satisfaction and operational efficiency.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team brings decades of experience in both construction and hospitality environments, ensuring that every service we provide enhances your property's value while maintaining the highest standards of guest experience.
              </p>
              <div className="flex items-center space-x-4">
                <FaHotel className="text-gold text-3xl" />
                <span className="text-xl font-semibold text-navy">Specialized Hospitality Expertise</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Hotel lobby"
                className="w-full h-96 object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-warm-gray">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance and transformation services tailored for hospitality environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Annual Maintenance Contract */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-quicksand text-navy mb-6">
                Annual Maintenance Contract
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Annual Maintenance Contract provides comprehensive, proactive maintenance services designed to prevent issues before they impact your guests. This contract-based approach ensures consistent service delivery and optimal facility performance.
              </p>
              <div className="space-y-3">
                {contractFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-navy text-white p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold font-quicksand mb-4">
                Contract Benefits
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaShieldAlt className="text-gold mr-3 mt-1" />
                  <div>
                    <strong>Preventive Maintenance:</strong> Scheduled maintenance to prevent costly breakdowns
                  </div>
                </li>
                <li className="flex items-start">
                  <FaWrench className="text-gold mr-3 mt-1" />
                  <div>
                    <strong>Inventory Optimization:</strong> Efficient management of spare parts and supplies
                  </div>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-gold mr-3 mt-1" />
                  <div>
                    <strong>Single Technical Contact:</strong> One point of contact for all maintenance needs
                  </div>
                </li>
                <li className="flex items-start">
                  <FaThumbsUp className="text-gold mr-3 mt-1" />
                  <div>
                    <strong>Professional Service:</strong> Fast, discreet, and professional service delivery
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose HotelCare */}
      <section className="section-padding bg-warm-gray">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Why Choose HotelCare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The advantages of partnering with our specialized hospitality maintenance division
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ServiceCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Hotel pool area"
                className="w-full h-96 object-cover shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold font-quicksand text-navy mb-6">
                Hospitality Expertise
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our HotelCare team consists of professionals with extensive experience in hospitality environments. We understand the unique challenges of maintaining hotel facilities while ensuring minimal disruption to guest experiences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From luxury resorts to boutique hotels, our team has the expertise to handle any hospitality maintenance challenge with professionalism and discretion.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy mb-2">25+</div>
                  <p className="text-gray-600">Hotel Partners</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy mb-2">15+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gold">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-white mb-6">
              Ready to Enhance Your Hotel?
            </h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Contact our HotelCare team to discuss your maintenance needs and Annual Maintenance Contract options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-navy text-white px-8 py-3 hover:bg-dark-blue transition-all duration-300">
                Get Consultation
              </a>
              <a href="/about" className="bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-gold transition-all duration-300">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}