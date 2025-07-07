"use client";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaUserShield, FaRegCheckCircle } from "react-icons/fa";
import img from "../../assets/yacht/Feature.jpg";

const features = [
    {
        icon: <FaRegCheckCircle />,
        title: "Marine-Grade Precision",
        desc: "Our team follows strict marine standards for safety and quality.",
    },
    {
        icon: <FaStar />,
        title: "Luxury-Level Finishes",
        desc: "We transform technical upgrades into aesthetic statements.",
    },
    {
        icon: <FaClock />,
        title: "Timely Turnaround",
        desc: "Work delivered on schedule with zero compromise on detail.",
    },
    {
        icon: <FaUserShield />,
        title: "Trusted Specialists",
        desc: "Years of experience on superyachts and high-end marine craft.",
    },
];

const YachtWhyChooseUs = () => {
    return (
        <section className="bg-[#faf9f5] py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#584910]">
                        Why Choose Our <br />
                        Yacht Expertise?
                    </h2>
                    <div className="w-20 h-1 bg-[#584910] rounded-full"></div>

                    <div className="space-y-5">
                        {features.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="text-[#584910] text-xl">{item.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-[#2a2720]">{item.title}</h4>
                                    <p className="text-[#5a5648] text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                    <img src={img.src} alt="Yacht Expertise" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                    {/* Badge Overlay */}
                    <div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-lg shadow-md backdrop-blur-sm">
                        <p className="text-xs text-gray-500">Our Standard</p>
                        <p className="text-sm font-medium text-[#584910]">Marine-Grade Excellence</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default YachtWhyChooseUs;
