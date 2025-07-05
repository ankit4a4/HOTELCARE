'use client';

import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="relative h-64 lg:h-80 flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-6xl font-bold font-quicksand mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;