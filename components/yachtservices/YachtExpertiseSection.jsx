"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import yachtDetail from "../../assets/yacht/Details.jpg";

const YachtExpertiseSection = () => {
  return (
    <section className="md:py-16 py-6 px-4 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src={yachtDetail}
            alt="Yacht Expertise"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#584910]">
            Our Expertise on Water
          </h2>
          <div className="w-16 h-1 bg-[#584910] rounded-full mb-2"></div>
          <p className="text-[#555] text-lg leading-relaxed">
            With roots in the world of superyachts, our team understands the precision,
            discretion, and top-tier materials required to meet maritime standards.
            We bring this level of perfection to every yacht we touch—whether it’s
            for maintenance, refits, or custom installations.
          </p>
          <p className="text-[#555] text-base leading-relaxed">
            Every project is treated with care, whether it's luxury interior upgrades,
            hull repainting, or onboard automation. Our marine-grade craftsmanship
            ensures your vessel remains exceptional both in function and aesthetics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default YachtExpertiseSection;
