import { motion } from "framer-motion";

const packages = [
  {
    title: "Annual Maintenance Contract",
    description:
      "Ideal for year-round facilities. Our technicians will thoroughly understand your systems to deliver consistent, proactive care.",
    points: [
      "Fast intervention",
      "Preventive detection of failures and wear",
      "Optimized spare parts inventory",
      "Suggestions for future improvements",
    ],
  },
  {
    title: "Seasonal Maintenance Contract",
    description:
      "Designed for hotels operating seasonally. Focused support during peak months with flexible planning.",
    points: [
      "Scheduled interventions during active periods",
      "Continuous monitoring when open",
      "Prompt response to ensure full operations",
      "Adaptable based on tourist flow",
    ],
  },
  {
    title: "On-Call Service",
    description:
      "Maximum flexibility without contracts. Just call us when you need us—we'll be there within 2 hours.",
    points: [
      "Immediate availability",
      "No fixed costs",
      "Quick response (within 2 hours)",
      "Top-quality intervention by experts",
    ],
  },
];

const MaintenancePackages = () => {
  return (
    <section className="bg-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Tailored Maintenance <span className="text-[#584910]">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-[#584910] mx-auto mb-6"></div>
          <p className="text-black/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Flexible service packages designed for your facility's unique requirements
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              className="group relative bg-white rounded-xl shadow-lg p-8 space-y-5 border border-black/10 hover:border-[#584910]/30 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#584910] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"></div>
              
              <h3 className="text-2xl font-bold text-black group-hover:text-[#584910] transition-colors duration-300">
                {pkg.title}
              </h3>
              
              <p className="text-black/70">{pkg.description}</p>
              
              <ul className="space-y-3">
                {pkg.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mt-0.5 mr-2 text-[#584910] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-black/80">{point}</span>
                  </li>
                ))}
              </ul>
              
              
            </motion.div>
          ))}
        </div>

        {/* Highlight Note */}
        <motion.div
          className="bg-[#584910]/5 mt-12 p-8 rounded-xl text-center border border-[#584910]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-black font-medium text-lg">
            <span className="text-[#584910] font-bold">Guaranteed Response:</span> All services include a{' '}
            <span className="underline decoration-[#584910] decoration-2">2-hour response time</span> from initial contact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenancePackages;