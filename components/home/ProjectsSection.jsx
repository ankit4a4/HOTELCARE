import { motion } from "framer-motion";
import img from "../../assets/home/luxury-yacht-3430348_1280.jpg"
import img2 from "../../assets/home/massage-2359592_1280.jpg"
import img3 from "../../assets/home/relax-2085676_1280.jpg"

const projects = [
    {
        title: "Yacht Interior Overhaul",
        description: "A luxurious yacht interior transformation using bespoke materials and high-end finishes.",
        image: img.src,
        tags: ["Luxury", "Marine", "Interior Design"]
    },
    {
        title: "Hotel Spa Renovation",
        description: "Complete spa upgrade for a 5-star hotel, including custom lighting and premium tiling.",
        image: img2.src,
        tags: ["Wellness", "Hotel", "Renovation"]
    },
    {
        title: "Villa Pool Refurbishment",
        description: "Modern pool redesign for a private villa with aesthetic lighting and leak-proof structure.",
        image: img3.src,
        tags: ["Outdoor", "Luxury", "Swimming Pool"]
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 bg-gradient-to-b from-[#f9f8f5] to-[#f0ede5]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-[#584910] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Featured Projects
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-[#b8a86e] mx-auto mt-4"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    ></motion.div>
                    <motion.p
                        className="text-[#666] mt-6 max-w-2xl mx-auto text-lg font-light"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Explore some of the standout work we've delivered for clients across Malta's hospitality and marine industries.
                    </motion.p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Image + Hover Overlay */}
                            <div className="relative h-72 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="mb-2 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm">{project.description}</p>
                                </div>
                            </div>

                            {/* Always Visible Content */}
                            <div className="bg-white p-6">
                                <h3 className="text-xl font-semibold text-[#584910] mb-2">
                                    {project.title}
                                </h3>
                              
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
