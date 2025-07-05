'use client';

import { motion } from 'framer-motion';
import { FaAnchor, FaHotel, FaUsers, FaAward, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';

export default function About() {
  return (
    <div className="pt-16 lg:pt-20">
      <PageHeader
        title="About Us"
        subtitle="Excellence in yacht services and hotel maintenance since 1985"
        backgroundImage="https://images.pexels.com/photos/1743482/pexels-photo-1743482.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-quicksand text-navy mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded in 1985, EMME CONSTRUCTION LTD has been at the forefront of Malta's maritime industry for nearly four decades. What started as a small yacht repair workshop has evolved into a comprehensive marine services company with an expanding portfolio that now includes our specialized HotelCare division.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our journey began with a simple vision: to provide uncompromising quality in yacht construction and maintenance services. Over the years, we have built a reputation for excellence that extends beyond the marina to Malta's hospitality sector.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <FaCalendarAlt className="text-gold text-2xl" />
                <span className="text-xl font-semibold text-navy">Established 1985</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-gold text-2xl" />
                <span className="text-xl font-semibold text-navy">Based in Malta</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury yacht"
                className="w-full h-96 object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-warm-gray">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by excellence, integrity, and innovation in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaAward />}
              title="Excellence"
              description="We strive for perfection in every project, from the smallest repair to the most complex yacht transformation."
              delay={0}
            />
            <ServiceCard
              icon={<FaUsers />}
              title="Integrity"
              description="Built on trust and transparency, we maintain honest relationships with our clients and partners."
              delay={0.1}
            />
            <ServiceCard
              icon={<FaAnchor />}
              title="Innovation"
              description="Continuously evolving our methods and services to meet the changing needs of the maritime and hospitality industries."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Two Divisions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Our Divisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two specialized divisions delivering comprehensive solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Yacht Division */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-navy text-white p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FaAnchor className="text-4xl text-gold mr-4" />
                <h3 className="text-2xl font-bold font-quicksand">
                  Yacht Services Division
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our core division specializes in comprehensive yacht services, from initial construction to complete transformations and ongoing maintenance. We work with vessels of all sizes, from luxury private yachts to commercial marine craft.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span>Custom yacht construction</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span>Complete vessel transformations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span>Expert repair and maintenance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                  <span>Custom modifications and upgrades</span>
                </div>
              </div>
            </motion.div>

            {/* HotelCare Division */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gold text-white p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <FaHotel className="text-4xl text-navy mr-4" />
                <h3 className="text-2xl font-bold font-quicksand">
                  HotelCare Division
                </h3>
              </div>
              <p className="text-gray-800 mb-6 leading-relaxed">
                Our newest division brings our expertise to Malta's hospitality sector. We provide comprehensive maintenance and transformation services designed specifically for hotels and accommodation facilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3"></span>
                  <span className="text-gray-800">Internal and external cleaning</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3"></span>
                  <span className="text-gray-800">System maintenance (electrical, plumbing, AC)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3"></span>
                  <span className="text-gray-800">Swimming pool maintenance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3"></span>
                  <span className="text-gray-800">Interior renovations and design</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="section-padding bg-warm-gray">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals with decades of combined experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white p-6 shadow-lg card-hover">
                <div className="text-4xl text-navy mb-4">50+</div>
                <h3 className="text-xl font-semibold font-quicksand text-navy mb-2">
                  Skilled Professionals
                </h3>
                <p className="text-gray-600">
                  Expert craftsmen and technicians
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white p-6 shadow-lg card-hover">
                <div className="text-4xl text-navy mb-4">300+</div>
                <h3 className="text-xl font-semibold font-quicksand text-navy mb-2">
                  Yachts Serviced
                </h3>
                <p className="text-gray-600">
                  Vessels of all sizes and types
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white p-6 shadow-lg card-hover">
                <div className="text-4xl text-navy mb-4">25+</div>
                <h3 className="text-xl font-semibold font-quicksand text-navy mb-2">
                  Hotel Partners
                </h3>
                <p className="text-gray-600">
                  Trusted hospitality clients
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-white p-6 shadow-lg card-hover">
                <div className="text-4xl text-navy mb-4">39</div>
                <h3 className="text-xl font-semibold font-quicksand text-navy mb-2">
                  Years of Experience
                </h3>
                <p className="text-gray-600">
                  Decades of industry expertise
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}