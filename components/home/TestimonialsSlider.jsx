import React, { useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bgImage from "../../assets/home/bg.webp";

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    position: "CEO, BlueWave Hotels",
    message:
      "EMME Construction's precision in executing our luxury hotel renovation was remarkable. They delivered ahead of schedule while maintaining impeccable quality standards that exceeded our expectations.",
    rating: 5,
    avatar: "AM",
  },
  {
    id: 2,
    name: "Clara J.",
    position: "Yacht Owner",
    message:
      "The craftsmanship on our superyacht interior was breathtaking. Every material selection and finish was executed with meticulous attention to detail that truly reflects EMME's expertise.",
    rating: 5,
    avatar: "CJ",
  },
  {
    id: 3,
    name: "Robert T.",
    position: "Director, Malta Luxury Resorts",
    message:
      "Working with EMME was a masterclass in professional construction. Their team's knowledge of premium finishes and seamless project management sets them apart in the industry.",
    rating: 5,
    avatar: "RT",
  },
  {
    id: 4,
    name: "Elena B.",
    position: "Villa Owner",
    message:
      "From tiling to pool renovations, EMME's team impressed us with their professionalism and attention to detail. Highly recommended!",
    rating: 5,
    avatar: "EB",
  },
  {
    id: 5,
    name: "Mark D.",
    position: "Manager, Oceanline Yachts",
    message:
      "We rely on EMME for our ongoing yacht upgrades. Always responsive, efficient, and consistent in delivering quality work.",
    rating: 5,
    avatar: "MD",
  },
  {
    id: 6,
    name: "Sarah W.",
    position: "Luxury Property Consultant",
    message:
      "The high-end finish and seamless execution on every EMME project I’ve seen is second to none.",
    rating: 5,
    avatar: "SW",
  },
];

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    beforeChange: (_, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div className="absolute -bottom-8 left-0 right-0">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-[#584910] w-6" : "bg-[#584910]/30"
        }`}
        aria-label={`Go to testimonial ${i + 1}`}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const renderStars = (rating) =>
    Array(5)
      .fill()
      .map((_, i) => (
        <FaStar
          key={i}
          className={`text-sm ${i < rating ? "text-[#584910]" : "text-gray-300"}`}
        />
      ));

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundAttachment: "fixed",
      }}
      className="relative py-24 px-4"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-[#584910]">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-[#584910] mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Hear from those who have experienced the EMME standard of excellence.
          </p>
        </div>

        {/* Slider & Arrows */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => document.querySelector(".slick-prev").click()}
            className="hidden md:flex absolute left-[-3rem] top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-[#584910] hover:bg-[#584910] hover:text-white transition-all z-10 hover:scale-105"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          <button
            onClick={() => document.querySelector(".slick-next").click()}
            className="hidden md:flex absolute right-[-3rem] top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-[#584910] hover:bg-[#584910] hover:text-white transition-all z-10 hover:scale-105"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-lg" />
          </button>

          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 outline-none">
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100/50">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-[#584910] flex items-center justify-center text-white text-xl font-medium mb-6">
                      {testimonial.avatar}
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">{renderStars(testimonial.rating)}</div>

                    {/* Quote */}
                    <FaQuoteLeft className="text-3xl text-[#584910] opacity-20 mb-8" />

                    {/* Message */}
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light max-w-3xl mb-8 italic">
                      "{testimonial.message}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-[#584910] mt-2 uppercase tracking-wider font-medium">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
