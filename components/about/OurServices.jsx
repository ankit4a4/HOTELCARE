import { motion } from "framer-motion";
import {
    FaBroom,
    FaTools,
    FaBolt,
    FaThLarge,
    FaCogs,
    FaSwimmingPool,
    FaSnowflake,
} from "react-icons/fa";
import bg from "../../assets/home/bg.webp"

const services = [
    {
        icon: <FaBroom />,
        title: "Cleaning",
        description: "Internal & external cleaning — rooms, corridors, facades.",
    },
    {
        icon: <FaTools />,
        title: "Plumbing",
        description: "New installations, repairs & system upgrades.",
    },
    {
        icon: <FaBolt />,
        title: "Electrical",
        description: "Full electrical system design and maintenance.",
    },
    {
        icon: <FaThLarge />,
        title: "Flooring",
        description: "Install any flooring type or replace carpet with ease.",
    },
    {
        icon: <FaCogs />,
        title: "Automation",
        description: "Smart internal systems for enhanced facility control.",
    },
    {
        icon: <FaSwimmingPool />,
        title: "Pools",
        description: "Pool construction, covers & heating systems.",
    },
    {
        icon: <FaSnowflake />,
        title: "Cryotherapy",
        description: "Setup of cryo tubs for indoor and outdoor use.",
    },
];

const OurServices = () => {
    return (
        <section
            style={{ backgroundImage: `url(${bg.src})` }}
            className="relative py-6 md:py-16 px-4 bg-white overflow-hidden">
            {/* Decorative Blurs */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#584910] mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-black mix-blend-multiply filter blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block text-sm font-semibold text-[#584910] mb-3 tracking-wide uppercase">
                        What We Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Comprehensive <span className="text-[#584910]">Hospitality</span> Services
                    </h2>
                    <div className="w-24 h-1 bg-[#584910] mx-auto mb-6 rounded-full"></div>
                    <p className="text-[#555] text-lg max-w-3xl mx-auto leading-relaxed">
                        HotelCare specializes in premium maintenance and transformation services designed exclusively for luxury hospitality venues.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group rounded-2xl p-6 border border-gray-200 bg-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 bg-[#f6f6f6]">
                                <div className="text-2xl text-[#584910]">
                                    {item.icon}
                                </div>
                            </div>
                            <h4 className="text-xl font-semibold text-black mb-3">{item.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                   
                </div>
            </div>
        </section>
    );
};

export default OurServices;
