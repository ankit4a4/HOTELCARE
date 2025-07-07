"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import hotelHero from "../../assets/HotelCare/hotelHero.jpg";
const ContactHero = () => {
    return (
        <div>


            <section className="relative  h-[40vh] md:h-[350px] overflow-hidden md:py-20 py-10 px-4">
                {/* Background Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={hotelHero.src}
                        alt="HotelCare hero background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto text-center text-white relative z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Contact Us
                    </motion.h1>

                    <motion.p
                        className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-light"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Get in touch with our expert team
                    </motion.p>

                </div>
            </section>
        </div>
    )
}

export default ContactHero
