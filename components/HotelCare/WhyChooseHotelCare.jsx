"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserCheck, FaClock, FaStar, FaLeaf, FaPhoneAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaShieldAlt className="text-2xl text-[#584910]" />,
        title: "20+ Years Experience",
        description: "A legacy of delivering trusted, high-quality solutions across hospitality and marine sectors.",
    },
    {
        icon: <FaUserCheck className="text-2xl text-[#584910]" />,
        title: "Certified Professionals",
        description: "Our team is composed of licensed specialists with expertise in every domain.",
    },
    {
        icon: <FaClock className="text-2xl text-[#584910]" />,
        title: "Fast Turnaround",
        description: "We ensure timely project completion without compromising on precision.",
    },
    {
        icon: <FaStar className="text-2xl text-[#584910]" />,
        title: "Premium Quality",
        description: "Every detail is crafted using top-grade materials and refined workmanship.",
    },
    {
        icon: <FaPhoneAlt className="text-2xl text-[#584910]" />,
        title: "24/7 Support",
        description: "Round-the-clock support to keep your operations running smoothly.",
    },
    {
        icon: <FaLeaf className="text-2xl text-[#584910]" />,
        title: "Eco-Conscious",
        description: "Committed to sustainable methods that respect both luxury and the planet.",
    },
];

const WhyChooseHotelCare = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-[#2a2720] mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Why Choose <span className="text-[#b8a86e]">HotelCare</span>?
                </motion.h2>
                <div className="w-20 h-1 bg-[#b8a86e] mx-auto mb-10 rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-[#faf9f5] border border-[#e4ded2] p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 rounded-full bg-white border border-[#b8a86e] flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-[#2a2720]">{feature.title}</h4>
                        </div>
                        <p className="text-sm text-[#5a5648]">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseHotelCare;
