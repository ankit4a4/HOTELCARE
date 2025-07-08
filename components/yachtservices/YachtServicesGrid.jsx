"use client";
import { motion } from "framer-motion";
import {
    FaTools,
    FaPaintRoller,
    FaCouch,
    FaBolt,
    FaWater,
    FaShip,
} from "react-icons/fa";
import bg from "../../assets/home/bg.webp"

const services = [
    {
        icon: <FaTools />,
        title: "Mechanical Maintenance",
        desc: "Engine servicing, systems calibration & performance checks.",
    },
    {
        icon: <FaBolt />,
        title: "Electrical Systems",
        desc: "Full rewiring, lighting design, panel upgrades & fault diagnosis.",
    },
    {
        icon: <FaPaintRoller />,
        title: "Refits & Repainting",
        desc: "Interior & exterior painting using marine-grade materials.",
    },
    {
        icon: <FaCouch />,
        title: "Interior Renovation",
        desc: "Luxury cabin redesigns, carpentry, upholstery & smart storage.",
    },
    {
        icon: <FaWater />,
        title: "Water System Upgrades",
        desc: "Water filtration, pumps, plumbing repairs & sanitation systems.",
    },
    {
        icon: <FaShip />,
        title: "Deck Restoration",
        desc: "Teak deck repair, sealing, sanding & anti-slip enhancements.",
    },
];

const YachtServicesGrid = () => {
    return (
        <section
            style={{ backgroundImage: `url(${bg.src})` }}
            className="bg-white md:py-16 py-6 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#584910]">
                        Marine Services We Offer
                    </h2>
                    <div className="w-20 h-1 bg-[#584910] mx-auto my-4 rounded-full"></div>
                    <p className="text-[#555] max-w-3xl mx-auto text-lg">
                        We ensure your vessel runs flawlessly — from technical overhauls to aesthetic excellence.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-[#faf9f5] border border-[#e4e1db] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-[#584910] text-3xl mb-4">{service.icon}</div>
                            <h4 className="text-xl font-semibold text-[#2a2720] mb-2">{service.title}</h4>
                            <p className="text-[#5a5648] text-sm leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YachtServicesGrid;
