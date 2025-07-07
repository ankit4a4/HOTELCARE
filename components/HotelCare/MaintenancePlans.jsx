"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import bg from "../../assets/home/bg.webp";

const plans = [
  {
    icon: <FaCalendarAlt className="text-4xl text-[#584910]" />,
    title: "Annual Maintenance Contract",
    description:
      "Perfect for hotels that operate all year. We offer scheduled maintenance and long-term reliability with minimal disruption.",
    points: [
      "Rapid response to technical issues",
      "Regular inspections & preventive care",
      "Inventory management of critical parts",
      "Personalized upgrade suggestions",
    ],
  },
  {
    icon: <FaClock className="text-4xl text-[#584910]" />,
    title: "Seasonal Maintenance Contract",
    description:
      "Tailored for seasonal hotels. We align our services with your operational calendar to ensure readiness during peak times.",
    points: [
      "Pre-opening facility checks",
      "Operational support during high season",
      "Mid-season evaluations & tune-ups",
      "Flexible scheduling based on tourist trends",
    ],
  },
  {
    icon: <FaPhoneAlt className="text-4xl text-[#584910]" />,
    title: "On-Call Support",
    description:
      "No contract needed. Our technicians are on standby to resolve any urgent issues—fast and efficiently.",
    points: [
      "Available 24/7, all year round",
      "No long-term commitments",
      "Arrival within 2 hours (Malta-wide)",
      "Experienced professionals every time",
    ],
  },
];

const MaintenancePlans = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg.src})` }}
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a2720]">
            Tailored{" "}
            <span className="text-[#b8a86e]">Maintenance Solutions</span>
          </h2>
          <p className="text-[#5a5648] text-lg mt-4 max-w-2xl mx-auto">
            Flexible service packages designed to match your hotel’s specific
            maintenance needs.
          </p>
          <div className="w-24 h-1 bg-[#b8a86e] mt-6 mx-auto rounded-full"></div>
        </motion.div>

        {/* Plan Cards */}
        <div className="space-y-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white/80 border border-[#e2ddd3] rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col md:flex-row items-start gap-6 backdrop-blur-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center bg-[#f2eee7] rounded-xl shadow-inner">
                  {plan.icon}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2a2720] mb-2">
                  {plan.title}
                </h3>
                <p className="text-[#5a5648] text-base mb-3">
                  {plan.description}
                </p>
                <ul className="list-disc pl-5 text-sm text-[#584910] space-y-1">
                  {plan.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenancePlans;
