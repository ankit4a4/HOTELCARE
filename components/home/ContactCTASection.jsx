import React from "react";
import { motion } from "framer-motion";

const ContactCTASection = () => {
    return (
        <section
            id="contact"
            className="relative py-28 px-4 overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#b8a86e] mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#584910] mix-blend-multiply filter blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#584910] leading-tight"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Ready to Bring <br className="hidden md:block" /> Your <span className="text-[#b8a86e]">Vision</span> to Life?
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[#555] text-lg md:text-xl mb-8 font-light leading-relaxed">
                            Whether you're planning a hotel upgrade or a yacht transformation,
                            our specialists are here to support you with premium craftsmanship and timely service.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-[#584910] text-white rounded-full font-medium hover:bg-[#b8a86e] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Get in Touch
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-[#584910] border border-[#584910] rounded-full font-medium hover:bg-[#f0ede5] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Call Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="w-full h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Luxury Interior Design"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>

                    {/* Image badge */}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-[#584910] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Featured Project</p>
                                <p className="text-sm font-medium text-[#584910]">Grand Hotel Renovation</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTASection;