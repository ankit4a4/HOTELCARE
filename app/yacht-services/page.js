'use client';

import { motion } from 'framer-motion';
import { FaShip, FaWrench, FaTools, FaCog, FaAnchor, FaStar } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';
import ServiceCard from '@/components/ServiceCard';

export default function YachtServices() {
  const services = [
    {
      icon: <FaShip />,
      title: "Yacht Construction",
      description: "Custom yacht construction from concept to completion, working with the finest materials and latest techniques."
    },
    {
      icon: <FaWrench />,
      title: "Yacht Transformation",
      description: "Complete vessel renovations and modifications to enhance performance, comfort, and aesthetics."
    },
    {
      icon: <FaTools />,
      title: "Yacht Repair",
      description: "Expert repair services for all yacht systems, from minor fixes to major overhauls."
    },
    {
      icon: <FaCog />,
      title: "Custom Modifications",
      description: "Specialized modifications and upgrades to meet specific owner requirements and preferences."
    },
    {
      icon: <FaAnchor />,
      title: "Maintenance Programs",
      description: "Comprehensive maintenance programs to keep your yacht in optimal condition year-round."
    },
    {
      icon: <FaStar />,
      title: "Luxury Upgrades",
      description: "Premium upgrades and luxury installations to enhance your yacht's comfort and value."
    }
  ];

  const projects = [
    {
      title: "Luxury Motor Yacht Refit",
      description: "Complete interior and exterior transformation of a 45-meter luxury motor yacht.",
      image: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Classic Sailing Yacht Restoration",
      description: "Authentic restoration of a vintage sailing yacht while preserving its classic character.",
      image: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Custom Superyacht Build",
      description: "From-scratch construction of a bespoke superyacht with cutting-edge technology.",
      image: "https://images.pexels.com/photos/1743482/pexels-photo-1743482.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <PageHeader
        title="Yacht Services"
        subtitle="Premium yacht construction, transformation, and repair services"
        backgroundImage="https://images.pexels.com/photos/1743482/pexels-photo-1743482.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Our Yacht Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive yacht services from construction to maintenance, delivered with uncompromising quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-warm-gray">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional yacht services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Initial assessment and project planning" },
              { step: "02", title: "Design", description: "Detailed design and specifications" },
              { step: "03", title: "Construction", description: "Expert craftsmanship and quality control" },
              { step: "04", title: "Delivery", description: "Final inspection and handover" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-navy text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold font-quicksand text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our expertise through successful yacht projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white shadow-lg card-hover overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-quicksand text-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-navy">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-white mb-6">
              Ready to Start Your Yacht Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our yacht services team to discuss your construction, transformation, or repair needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Get Quote
              </a>
              <a href="/about" className="bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-navy transition-all duration-300">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}