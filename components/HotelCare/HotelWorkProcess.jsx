"use client";

import { motion } from "framer-motion";
import {
  FaRegHandshake,
  FaTools,
  FaCogs,
  FaClipboardCheck,
  FaSearch,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaRegHandshake className="text-xl" />,
    title: "Initial Assessment",
    description:
      "We begin with a site visit to understand your facility's condition, systems, and specific needs.",
  },
  {
    icon: <FaSearch className="text-xl" />,
    title: "Planning & Scheduling",
    description:
      "Our team designs a tailored maintenance plan aligned with your operational calendar.",
  },
  {
    icon: <FaTools className="text-xl" />,
    title: "Execution",
    description:
      "Our technicians carry out necessary maintenance, repairs, or upgrades with minimal disruption.",
  },
  {
    icon: <FaCogs className="text-xl" />,
    title: "System Optimization",
    description:
      "We apply long-term solutions to improve efficiency, reliability, and overall guest satisfaction.",
  },
  {
    icon: <FaClipboardCheck className="text-xl" />,
    title: "Final Inspection",
    description:
      "Each task is reviewed, tested, and approved to ensure everything meets our quality standards.",
  },
];

const HotelWorkProcess = () => {
  return (
    <section className="bg-[#faf9f5] py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#584910] to-[#e5e3dc] opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#584910] opacity-5 -mr-20 -mb-20"></div>
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#584910] opacity-5 -ml-20"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#584910] mb-4">
            How We Work <span className="text-[#2a2720]">With You</span>
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#584910] to-[#e5e3dc] rounded-full"></div>
          </div>
          <p className="text-[#5a5648] mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            From initial walkthrough to final inspection, our process ensures seamless maintenance tailored to your hotel's operations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#e5e3dc] transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Step connector dots */}
                {index !== 0 && (
                  <div className="hidden md:block absolute top-1/2 -left-4 w-2 h-2 rounded-full bg-[#584910] transform -translate-y-1/2"></div>
                )}

                <div className="h-full flex flex-col items-center">
                  {/* Step card */}
                  <div className="bg-white rounded-xl border border-[#e5e3dc] shadow-sm p-8 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center group hover:border-[#584910]/30">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#584910] text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-[#2a2720] mb-3">
                      {step.title}
                    </h4>
                    <p className="text-[#5a5648] leading-relaxed flex-grow">
                      {step.description}
                    </p>
                    {/* Step number */}
                    <div className="mt-6 w-8 h-8 flex items-center justify-center rounded-full bg-[#faf9f5] border border-[#e5e3dc] text-sm font-medium text-[#584910]">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelWorkProcess;