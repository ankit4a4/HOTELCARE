// components/WhyChooseUs.jsx
import React from 'react';
import { FaTools, FaClock, FaUserTie, FaShieldAlt, FaLeaf, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaUserTie />,
    title: "20+ Years Experience",
    desc: "A legacy of delivering trusted, high-quality solutions across hospitality and marine sectors.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Certified Professionals",
    desc: "Our team is composed of licensed specialists with expertise in every domain.",
  },
  {
    icon: <FaClock />,
    title: "Fast Turnaround",
    desc: "We ensure timely project completion without compromising on precision.",
  },
  {
    icon: <FaStar />,
    title: "Premium Quality",
    desc: "Every detail is crafted using top-grade materials and refined workmanship.",
  },
  {
    icon: <FaTools />,
    title: "24/7 Support",
    desc: "Round-the-clock support to keep your operations running smoothly.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Conscious",
    desc: "Committed to sustainable methods that respect both luxury and the planet.",
  },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
      id="why-choose-us"
      style={{
        background: 'linear-gradient(to bottom, #f8f6f2, #efe9dd)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#584910] blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#A5886E] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#584910] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-[#584910]">Us</span>
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#584910] mx-auto"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-lg text-[#555] mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We combine decades of expertise with cutting-edge solutions to deliver unparalleled service quality.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#ddd] group-hover:border-[#584910]/50 transition-all duration-500">
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#584910]/10 flex items-center justify-center text-[#584910] text-2xl group-hover:bg-[#584910]/20 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#584910] mb-3 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#333] text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
