import React from 'react';
import img1 from "../../assets/ourmenu/1.jpg";
import img2 from "../../assets/ourmenu/2.jpg";
import img3 from "../../assets/ourmenu/3.jpg";
import img4 from "../../assets/ourmenu/4.jpg";
import img5 from "../../assets/ourmenu/5.jpg";
import img6 from "../../assets/ourmenu/6.jpg";
import img7 from "../../assets/ourmenu/7.jpg";

const OurMenuImagesGrid = () => {
    return (
        <div className="px-4 py-8 md:px-8 lg:px-12 max-w-7xl mx-auto">
            {/* Gallery Title - Optional */}
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Work Highlights</h2>

            {/* Image Grid Container */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">

                {/* Big Image - Takes full width in mobile, 2 columns in desktop */}
                <div className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={img1.src}
                        alt="Special dish 1"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    </div>
                </div>

                {/* Medium Image */}
                <div className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={img2.src}
                        alt="Menu item 2"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    </div>
                </div>

                {/* Small Image */}
                <div className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={img3.src}
                        alt="Menu item 3"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    </div>
                </div>

                {/* Big Image */}
                <div className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={img4.src}
                        alt="Special dish 2"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    </div>
                </div>

                {/* Medium Image */}
                <div className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={img5.src}
                        alt="Menu item 5"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    </div>
                </div>

                {/* Small Image */}
                <div className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={img6.src}
                        alt="Menu item 6"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    </div>
                </div>

                {/* Big Image */}
                <div className="relative group break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={img7.src}
                        alt="Special dish 3"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMenuImagesGrid;