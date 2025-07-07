"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "../../assets/yacht/heroYacht.jpg";

const HeroSectionYacht = () => {
    return (
        <section className="relative h-[40vh] md:h-[70vh] w-full overflow-hidden">
            <Image
                src={bg}
                alt="c:\Users\Ankit\Downloads\racing-boat-188903_1280.jpg"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Yacht Maintenance & Refit Services
                </motion.h1>

                <motion.p
                    className="text-[#d1cfc7] text-lg md:text-2xl max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Precision. Discretion. Excellence at Sea.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSectionYacht;
