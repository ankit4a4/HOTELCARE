import Image from "next/image";
import { motion } from "framer-motion";
import yachtImg from "../../assets/home/YachtServices.jpg";
import hotelImg from "../../assets/home/HotelCare.jpg";
import bg from "../../assets/home/bg.webp";

const CompanyIntro = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="py-16 md:py-20 px-4"
        >
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-20">
                {/* Intro Heading */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3a3520] mb-3">
                        Who We Are
                    </h2>
                    <div className="w-20 h-1 bg-[#b8a86e] mx-auto mb-5"></div>
                    <p className="text-[#6b6651] text-base md:text-lg max-w-2xl mx-auto">
                        HotelCare, a division of EMME Construction Ltd, was born from years
                        of high-end hospitality experience. We started aboard luxury yachts
                        where every detail matters, and evolved to serve hotels and
                        accommodation facilities across Malta with the same dedication to
                        precision, discretion, and excellence.
                    </p>
                </motion.div>

                {/* Section 1 - HotelCare Division */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white rounded-2xl shadow-lg p-2 md:p-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4 md:order-1">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#3a3520]">
                            HotelCare Division
                        </h3>
                        <p className="text-[#6b6651] text-sm md:text-base leading-relaxed">
                            HotelCare is our dedicated division focused exclusively on the
                            maintenance and transformation of hospitality spaces. With
                            services ranging from electrical and plumbing systems to pool
                            maintenance and interior renovations, we ensure every hotel and
                            accommodation facility remains functional, elegant, and
                            guest-ready. Our professionals intervene swiftly—often within 2
                            hours—to provide reliable, discreet solutions without disrupting
                            your operations.
                        </p>
                    </div>

                    <div className="relative rounded-lg overflow-hidden shadow-md aspect-video w-full h-64 md:h-72 md:order-2">
                        <Image
                            src={hotelImg}
                            alt="Hotel maintenance services"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                            <h3 className="text-white font-medium text-lg">
                                Hospitality Precision
                            </h3>
                        </div>
                    </div>
                </motion.div>

                {/* Section 2 - Yacht Heritage */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white rounded-2xl shadow-lg p-2 md:p-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="relative rounded-lg overflow-hidden shadow-md aspect-video w-full h-64 md:h-72">
                        <Image
                            src={yachtImg}
                            alt="Luxury yacht maintenance"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                            <h3 className="text-white font-medium text-lg">
                                Maritime Excellence
                            </h3>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#3a3520]">
                            Yacht Heritage
                        </h3>
                        <p className="text-[#6b6651] text-sm md:text-base leading-relaxed">
                            Our roots lie in the maintenance and transformation of luxury
                            yachts over 30 meters long, where perfection isn’t optional—it’s
                            essential. This elite marine background shaped our attention to
                            detail and refined our technical skills. Today, we apply this
                            legacy to land-based facilities, combining yachting precision with
                            hospitality demands for flawless, elegant, and lasting results.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyIntro;
