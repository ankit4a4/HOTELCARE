import { useState } from "react";
import { motion } from "framer-motion";
import { FaAnchor, FaClock, FaEnvelope, FaHotel, FaPhone } from "react-icons/fa";
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
        });
    };
    return (
        <section className="section-padding bg-warm-gray">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white p-8 shadow-lg">
                            <h3 className="text-2xl font-bold font-quicksand text-navy mb-6">
                                Send us a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="service"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy transition-colors"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="yacht-construction">
                                                Yacht Construction
                                            </option>
                                            <option value="yacht-transformation">
                                                Yacht Transformation
                                            </option>
                                            <option value="yacht-repair">Yacht Repair</option>
                                            <option value="hotel-cleaning">Hotel Cleaning</option>
                                            <option value="hotel-maintenance">
                                                Hotel Maintenance
                                            </option>
                                            <option value="pool-maintenance">
                                                Pool Maintenance
                                            </option>
                                            <option value="interior-renovation">
                                                Interior Renovation
                                            </option>
                                            <option value="annual-contract">
                                                Annual Maintenance Contract
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn-primary font-medium py-4"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>



                    {/* Service Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >

                        <div className="bg-gold text-white p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <FaHotel className="text-2xl text-navy mr-3" />
                                <h3 className="text-xl font-bold font-quicksand">
                                    HotelCare Division
                                </h3>
                            </div>
                            <p className="text-gray-800 mb-4">
                                For hotel maintenance and Annual Maintenance Contract
                                inquiries.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <FaPhone className="text-navy mr-2" />
                                    <span className="text-gray-800">+35679657869</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-navy mr-2" />
                                    <span className="text-gray-800">
                                        service.hotelcare@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Yacht Services Contact */}
                        <div className="bg-navy text-white p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <FaAnchor className="text-2xl text-gold mr-3" />
                                <h3 className="text-xl font-bold font-quicksand">
                                    Yacht Services
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                For yacht construction, transformation, and repair inquiries.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <FaPhone className="text-gold mr-2" />
                                    <span>+35679657869</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-gold mr-2" />
                                    <span>emme.construction.ltd@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* HotelCare Contact */}

                        {/* Emergency Contact */}
                        <div className="bg-gray-800 text-white p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <FaClock className="text-2xl text-red-500 mr-3" />
                                <h3 className="text-xl font-bold font-quicksand">
                                    Accounting services
                                </h3>
                            </div>
                            <p className="text-gray-300 mb-4">
                                For account related query.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <FaPhone className="text-red-500 mr-2" />
                                    <span>+35679657869</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="text-gold mr-2" />
                                    <span>emme.construction.ltd@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
