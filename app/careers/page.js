'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaTools, FaGraduationCap, FaHeart, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import PageHeader from '@/components/PageHeader';

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior Yacht Technician",
      department: "Yacht Services",
      location: "Malta",
      type: "Full-time",
      experience: "5+ years",
      description: "Experienced technician for yacht construction and repair projects. Must have marine industry background and attention to detail.",
      requirements: [
        "5+ years marine industry experience",
        "Knowledge of yacht systems and construction",
        "Strong problem-solving skills",
        "Ability to work in team environment"
      ]
    },
    {
      title: "Hotel Maintenance Specialist",
      department: "HotelCare",
      location: "Malta",
      type: "Full-time",
      experience: "3+ years",
      description: "Maintenance specialist for hotel facilities including electrical, plumbing, and HVAC systems. Experience in hospitality preferred.",
      requirements: [
        "3+ years maintenance experience",
        "Electrical and plumbing knowledge",
        "Hospitality industry experience preferred",
        "Professional appearance and demeanor"
      ]
    },
    {
      title: "Project Manager",
      department: "Both Divisions",
      location: "Malta",
      type: "Full-time",
      experience: "7+ years",
      description: "Experienced project manager to oversee yacht and hotel projects from conception to completion.",
      requirements: [
        "7+ years project management experience",
        "Construction or marine industry background",
        "Strong communication and leadership skills",
        "PMP certification preferred"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaUsers />,
      title: "Team Environment",
      description: "Work with skilled professionals in a collaborative and supportive environment."
    },
    {
      icon: <FaTools />,
      title: "Professional Development",
      description: "Opportunities for skill development and career advancement within our growing company."
    },
    {
      icon: <FaGraduationCap />,
      title: "Training Programs",
      description: "Access to industry training and certification programs to enhance your expertise."
    },
    {
      icon: <FaHeart />,
      title: "Work-Life Balance",
      description: "Competitive benefits package with emphasis on maintaining healthy work-life balance."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      <PageHeader
        title="Careers"
        subtitle="Join our team of skilled professionals"
        backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />

      {/* Company Culture */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-quicksand text-navy mb-6">
                Why Work With Us?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                EMME Construction offers a unique opportunity to work on diverse projects spanning the maritime and hospitality industries. Our team members are valued for their expertise and contribute to projects that make a real difference in Malta's economy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From luxury yacht construction to hotel maintenance, every day brings new challenges and opportunities to grow your skills in a supportive, professional environment.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <FaUsers className="text-gold text-2xl" />
                <span className="text-xl font-semibold text-navy">50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaGraduationCap className="text-gold text-2xl" />
                <span className="text-xl font-semibold text-navy">Continuous Learning</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team working"
                className="w-full h-96 object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-warm-gray">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Employee Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value our team members and offer comprehensive benefits to support their professional and personal growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 shadow-lg card-hover text-center"
              >
                <div className="text-3xl text-navy mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold font-quicksand text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-navy mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and be part of Malta's premier construction and maintenance company
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-warm-gray p-8 shadow-lg card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold font-quicksand text-navy mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <FaUsers className="mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <FaMapMarkerAlt className="mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <FaClock className="mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="bg-navy text-white px-4 py-2 text-center mb-2">
                        <span className="font-semibold">Experience Required</span>
                      </div>
                      <div className="text-center text-lg font-semibold text-gold">
                        {job.experience}
                      </div>
                    </div>
                    <button className="btn-primary w-full">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-navy">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-white mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to join our team? Here's how to get started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "01", title: "Submit Application", description: "Send your CV and cover letter to our HR team" },
              { step: "02", title: "Initial Interview", description: "Phone or video interview with our hiring manager" },
              { step: "03", title: "Final Interview", description: "In-person interview and site visit" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gold text-navy w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold font-quicksand text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-white p-8 inline-block shadow-lg">
              <FaEnvelope className="text-4xl text-navy mb-4 mx-auto" />
              <h3 className="text-xl font-semibold font-quicksand text-navy mb-2">
                Send Your Application
              </h3>
              <p className="text-gray-600 mb-4">
                Email your CV and cover letter to:
              </p>
              <a 
                href="mailto:careers@emmeconstruction.com"
                className="text-lg font-semibold text-gold hover:text-yellow-600 transition-colors"
              >
                careers@emmeconstruction.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}