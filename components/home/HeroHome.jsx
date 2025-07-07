import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaConciergeBell } from 'react-icons/fa';
import img1 from "../../assets/home/HotelCare.jpg";
import img2 from "../../assets/home/HotelCare.jpg";
import img3 from "../../assets/home/HotelCare.jpg";
import { useRouter } from 'next/navigation';

const HeroHome = () => {
    const backgroundImages = [img1.src, img2.src, img3.src];
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                {backgroundImages.map((src, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${src})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentImage ? 1 : 0 }}
                        transition={{ duration: 1.5 }}
                    />
                ))}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl px-4 py-20 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-12"
                >
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0.5, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                        className="inline-flex items-center justify-center mb-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#584910] rounded-full blur-md opacity-70 animate-pulse" />
                            <FaConciergeBell className="relative text-5xl text-[#584910]" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#584910] to-yellow-100">
                            HOTELCARE DIVISION
                        </span>
                        <span className="block mt-2 text-white">by EMME CONSTRUCTION LTD</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        className="text-lg md:text-xl max-w-2xl mx-auto font-light text-blue-100 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Dedicated to elevating hospitality standards with expert hotel maintenance, pool services,
                        renovations, and 24/7 support in Malta.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-[#584910] text-white font-bold rounded-lg text-base shadow-md"
                            onClick={() => router.push('/yacht-services')}
                        >
                            Explore HotelCare Services
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border-2 border-[#584910] text-white font-bold rounded-lg text-base"
                            onClick={() => router.push('/contact')}
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    {[
                        { value: "10+", label: "Years in Hospitality" },
                        { value: "150+", label: "Hotels Maintained" },
                        { value: "99%", label: "Uptime Guarantee" },
                        { value: "24/7", label: "Assistance Available" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-blue-200">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroHome;
