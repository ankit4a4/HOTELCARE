// components/ServicesSection.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from "../../assets/home/YachtServices.jpg";
import img2 from "../../assets/home/HotelCare.jpg";
import bgImage from "../../assets/home/bg.webp";

const ServicesSection = () => {
    return (
        <section
            style={{ backgroundImage: `url(${bgImage.src})` }}
            className="py-20 bg-cover bg-center bg-no-repeat" id="services"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#253745] mb-4"
                        data-aos="fade-up"
                    >
                        Discover Our Expertise
                    </h2>
                    <div
                        className="w-20 h-1 bg-[#584910] mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    />
                    <p
                        className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Tailored services crafted for the most demanding marine and hospitality environments.
                    </p>
                </div>

                {/* Yacht Services Block */}
                <div
                    className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-[5px]"
                    data-aos="fade-up"
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                            <span className="inline-block bg-[#584910]/10 text-[#584910] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                Premium Service
                            </span>
                            <h3 className="text-3xl font-bold text-[#253745] mb-4">Yacht Services</h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                From complete construction to luxury upgrades, our specialists transform yachts with exceptional craftsmanship and reliability.
                            </p>
                            <Link href="/yacht-services">
                                <span className="inline-flex items-center bg-[#584910] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#483a0c] transition-all duration-300 group">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <div className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden">
                            <Image
                                src={img1.src}
                                alt="Yacht Services"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-500 hover:scale-105 rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-[#584910]/20" />
                        </div>
                    </div>
                </div>

                {/* HotelCare Services Block */}
                <div
                    className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-[5px]"
                    data-aos="fade-up"
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden order-2 lg:order-1">
                            <Image
                                src={img2.src}
                                alt="HotelCare Services"
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform rounded-lg duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-[#584910]/20" />
                        </div>
                        <div className="lg:w-1/2 p-8 md:p-10 flex flex-col justify-center order-1 lg:order-2">
                            <span className="inline-block bg-[#584910]/10 text-[#584910] px-3 py-1 rounded-full text-xs font-semibold mb-3">
                                Comprehensive Care
                            </span>
                            <h3 className="text-3xl font-bold text-[#253745] mb-4">HotelCare Division</h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Trusted by top hospitality groups, we handle all hotel maintenance needs from pool care to full renovation with unmatched precision.
                            </p>
                            <Link href="/hotelcare">
                                <span className="inline-flex items-center bg-[#584910] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#483a0c] transition-all duration-300 group">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
