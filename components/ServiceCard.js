"use client";

import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 shadow-lg card-hover group"
    >
      <div className="text-4xl text-navy mb-4 group-hover:text-gold transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold font-quicksand mb-3 text-navy">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
