import React from 'react';
import { FaHotel, FaShip, FaHome, FaBriefcase, FaSwimmingPool, FaStore } from 'react-icons/fa';
import { motion } from 'framer-motion';

const industries = [
  {
    title: "Hotels & Resorts",
    description: "Luxury renovations, interior upgrades, and facility maintenance for high-end hospitality.",
    icon: <FaHotel />,
  },
  {
    title: "Yachts",
    description: "Expert refits, maintenance, and interior work for private and commercial yachts.",
    icon: <FaShip />,
  },
  {
    title: "Private Villas",
    description: "Complete upgrades, tiling, and pool work for upscale residential villas.",
    icon: <FaHome />,
  },
  {
    title: "Corporate Offices",
    description: "Modern office fit-outs, lighting solutions, and sustainable workspaces.",
    icon: <FaBriefcase />,
  },
  {
    title: "Pools & Spas",
    description: "Leak detection, renovations, and decorative finishings for spas and pools.",
    icon: <FaSwimmingPool />,
  },
  {
    title: "Commercial Spaces",
    description: "Durable, aesthetic construction for retail stores, lounges, and showrooms.",
    icon: <FaStore />,
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 px-4 bg-[#f8f6f2]" id="industries">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#584910] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industries We <span className="text-white bg-[#584910] px-3 py-1 rounded-md">Serve</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#584910] mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="text-[#555] mt-6 max-w-2xl mx-auto text-lg font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We bring specialized expertise across multiple sectors to deliver tailored construction excellence.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-[#ddd] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-full bg-[#584910]/10 text-[#584910] flex items-center justify-center text-2xl mb-5 group-hover:bg-[#584910]/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-[#584910] text-xl font-semibold mb-3 group-hover:text-black transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[#444] text-base leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
