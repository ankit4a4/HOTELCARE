import { motion } from "framer-motion";
import { FaTools, FaFan, FaBolt, FaWater, FaLightbulb } from "react-icons/fa";

const hotelServices = [
    {
        icon: <FaTools className="text-3xl" />,
        title: "General Maintenance",
        description: "We handle all ongoing upkeep tasks across the hotel premises, from repairing furniture, locks, and fittings to resolving wear-and-tear issues in guest rooms, common areas, and service zones. Our rapid-response team ensures everything stays functional and aligned with five-star hospitality standards."
    },
    {
        icon: <FaBolt className="text-3xl" />,
        title: "Electrical Systems",
        description: "Our certified technicians maintain and upgrade the entire electrical infrastructure, covering lighting, power distribution panels, sockets, emergency backup, and automation wiring. We work discreetly and efficiently to prevent downtime and ensure uninterrupted service for guests and staff."
    },
    {
        icon: <FaFan className="text-3xl" />,
        title: "HVAC & Air Conditioning",
        description: "We provide complete maintenance of heating, ventilation, and air conditioning systems, including chillers, split units, and centralized systems. Regular servicing, filter cleaning, and performance checks ensure ideal indoor climate control for lobbies, rooms, and wellness zones."
    },
    {
        icon: <FaLightbulb className="text-3xl" />,
        title: "Room Automation",
        description: "We install and maintain smart automation systems for lighting, blinds, access cards, and energy-saving features in rooms and suites. Our solutions elevate the guest experience while optimizing power usage and integrating seamlessly into your hotel's design."
    },
    {
        icon: <FaWater className="text-3xl" />,
        title: "Plumbing & Water Systems",
        description: "From leak detection and pipe repairs to full restroom refurbishments, our plumbing team ensures reliable water flow, drainage, and hygiene standards. We also manage boilers, water heaters, pumps, and water-saving systems across the property."
    },
    {
        icon: <FaTools className="text-3xl" />,
        title: "Spa & Pool Technical Support",
        description: "We offer specialized maintenance for pools, saunas, steam rooms, and spas, covering pump systems, filtration, water treatment, and temperature regulation. Our services guarantee safety, hygiene, and the luxurious comfort expected in wellness areas."
    },
];


const HotelServicesSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#f9f8f3] to-[#f0ede1] md:py-16 py-6 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2a2618] mb-6">
                        <span className="relative inline-block">
                            <span className="relative z-10">HotelCare</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#b8a86e]/40 -rotate-1 z-0"></span>
                        </span> Services
                    </h2>
                    <p className="text-[#5a5542] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                        From luxury suites to spa areas, we deliver precise, high-performance technical solutions tailored to the hospitality environment.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#b8a86e]/10 blur-xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#b8a86e]/10 blur-xl"></div>

                    {hotelServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-[#e5e1d5] overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f9f8f3] to-[#f0ede1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Icon container */}
                            <div className="relative z-10 w-16 h-16 mb-6 rounded-xl bg-[#b8a86e]/10 flex items-center justify-center text-[#b8a86e] group-hover:bg-[#b8a86e] group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>

                            <h4 className="relative z-10 text-xl font-bold text-[#2a2618] mb-3 group-hover:text-[#b8a86e] transition-colors duration-300">
                                {service.title}
                            </h4>
                            <p className="relative z-10 text-[#5a5542] leading-relaxed">
                                {service.description}
                            </p>


                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}

            </div>
        </section>
    );
};

export default HotelServicesSection;