"use client"
import { motion } from "framer-motion";
import img from "../../assets/about/aboutHero.jpg";
const OurMenuHero = () => {
    return (
        <>
            <section className="relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with fixed positioning */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${img.src})` }}
                >
                    {/* Gradient overlay - more subtle than solid black */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-0"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.6, -0.05, 0.01, 0.99]
                        }}
                    >
                        Our Menu
                    </motion.h1>

                    <motion.p
                        className="text-white mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0.6, -0.05, 0.01, 0.99]
                        }}
                    >

                    </motion.p>

                    {/* Optional decorative element */}
                    <motion.div
                        className="mt-10 mx-auto w-20 h-1 bg-[#b8a86e]"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.8,
                            ease: [0.6, -0.05, 0.01, 0.99]
                        }}
                    />
                </div>
            </section>
        </>
    )
}

export default OurMenuHero
