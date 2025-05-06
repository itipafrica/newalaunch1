import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const PreviewSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mockupVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        delay: custom * 0.3,
        ease: "easeOut" 
      }
    })
  };

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('preview.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('preview.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
          <motion.div
            className="relative group perspective-1000"
            variants={mockupVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/20 backdrop-blur-md p-4 rounded-[3rem] border border-white/10 shadow-xl">
              <div className="relative w-60 sm:w-72 aspect-[9/19] overflow-hidden rounded-[2.3rem] border-8 border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
                  <div className="text-center px-4">
                    <h4 className="text-white font-bold text-xl mb-2">NEWA</h4>
                    <p className="text-blue-200 text-sm">{t('preview.app')}</p>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-800 rounded-b-lg"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 rounded-[3rem] pointer-events-none transition-opacity duration-300 blur-xl -z-10"></div>
          </motion.div>

          <motion.div
            className="relative group perspective-1000"
            variants={mockupVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            whileHover={{ scale: 1.05, rotateY: -5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/20 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-xl">
              <div className="relative w-80 sm:w-96 aspect-[16/10] overflow-hidden rounded-xl border-8 border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-800 to-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-white font-bold text-2xl mb-2">NEWA</h4>
                    <p className="text-blue-200">{t('preview.website')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 rounded-3xl pointer-events-none transition-opacity duration-300 blur-xl -z-10"></div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-gray-300 text-center max-w-2xl mx-auto mt-12"
        >
          {t('preview.experience')}
        </motion.p>
      </div>
    </section>
  );
};

export default PreviewSection;