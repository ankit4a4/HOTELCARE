import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInformation = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+39 3663078074",
      description: "Call us for immediate assistance",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "info@emmeconstruction.com",
      description: "Send us your inquiry",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "The Core, Valley Road, Msida, MSD9021 Malta",
      description: "Proudly serving Malta and surrounding areas",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-quicksand text-[#584910] mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-[#5a5648] max-w-3xl mx-auto">
            Ready to discuss your yacht or hotel maintenance project? Our
            expert team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-[#f4f1eb] p-6 rounded-xl shadow hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl text-[#A5886E] mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold font-quicksand text-[#584910] mb-2">
                {info.title}
              </h3>
              <p className="text-lg font-medium text-[#2a2720] mb-2">
                {info.details}
              </p>
              <p className="text-sm text-[#5a5648]">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
