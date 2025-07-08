import { motion } from "framer-motion";
import { FaTools, FaFan, FaBolt, FaWater, FaLightbulb } from "react-icons/fa";

const hotelServices = [
    {
        icon: <FaTools className="text-3xl" />,
        title: "General Maintenance",
        description: "We provide routine maintenance across the entire hotel, quickly resolving wear-and-tear issues in guest rooms, common areas, and service zones. Our fast-response team ensures everything stays fully functional and aligned with the highest five-star hospitality standards."
    },
    {
        icon: <FaBolt className="text-3xl" />,
        title: "Electrical Systems",
        description: "Our certified technicians handle the maintenance and upgrading of the entire electrical infrastructure, including lighting, distribution panels, sockets, emergency systems, and automation wiring. We operate discreetly and efficiently to prevent disruptions and ensure uninterrupted service for both guests and staff."
    },
    {
        icon: <FaFan className="text-3xl" />,
        title: "HVAC & Air Conditioning",
        description: "We design and install underfloor and wall-mounted heating systems, as well as all types of air conditioning systems—both ducted and single-function units—ensuring an ideal indoor climate in lobbies, guest rooms, and common areas."
    },
    {
        icon: <FaLightbulb className="text-3xl" />,
        title: "Room Automation",
        description: "We design, supply, and install smart automation systems for any hotel function, ensuring functionality and energy efficiency in guest rooms, common areas, and all zones where automation is required. Our solutions enhance the guest experience while optimizing energy consumption and integrating seamlessly with the hotel’s design."
    },
    {
        icon: <FaWater className="text-3xl" />,
        title: "Plumbing & Water Systems",
        description: "We design and repair plumbing systems made from any type of material, and we plan and fully renovate all types of bathrooms or water-dependent facilities. We also design and install water-saving systems throughout the entire property."
    },
    {
        icon: <FaTools className="text-3xl" />,
        title: "Spa & Pool",
        description: "We design and install swimming pools along with their complete systems, and provide various types of pool covers. We also design and install pool water heating systems. As authorized resellers, we supply and install both indoor and outdoor cryotherapy tubs in a range of models. We offer specialized maintenance for pools, saunas, steam rooms, and wellness centers, covering pumps, filtration systems, water treatment, and temperature control. Our services ensure safety, hygiene, and the luxurious comfort expected in wellness areas."
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