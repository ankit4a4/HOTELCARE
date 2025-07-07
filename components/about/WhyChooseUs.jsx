import { motion } from "framer-motion";
import {
  FaAward,
  FaUserCheck,
  FaClock,
  FaGem,
  FaHeadset,
  FaLeaf,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaAward className="text-[#a5886e] text-2xl" />,
    title: "20+ Years Experience",
    description:
      "A legacy of delivering trusted, high-quality solutions across hospitality and marine sectors.",
  },
  {
    icon: <FaUserCheck className="text-[#a5886e] text-2xl" />,
    title: "Certified Professionals",
    description:
      "Our team is composed of licensed specialists with expertise in every domain.",
  },
  {
    icon: <FaClock className="text-[#a5886e] text-2xl" />,
    title: "Fast Turnaround",
    description:
      "We ensure timely project completion without compromising on precision.",
  },
  {
    icon: <FaGem className="text-[#a5886e] text-2xl" />,
    title: "Premium Quality",
    description:
      "Every detail is crafted using top-grade materials and refined workmanship.",
  },
  {
    icon: <FaHeadset className="text-[#a5886e] text-2xl" />,
    title: "24/7 Support",
    description:
      "Round-the-clock support to keep your operations running smoothly.",
  },
  {
    icon: <FaLeaf className="text-[#a5886e] text-2xl" />,
    title: "Eco-Conscious",
    description:
      "Committed to sustainable methods that respect both luxury and the planet.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-5 md:py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3a3520] mb-3">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-[#b8a86e] mx-auto mb-5"></div>
          <p className="text-[#6b6651] text-base md:text-lg max-w-2xl mx-auto">
            Experience excellence crafted through decades of dedication, precision, and trust in the hospitality and marine industry.
          </p>
        </motion.div>

        {/* 2 Column Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#f1eee6] rounded-full shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#3a3520] mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-[#6b6651] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
