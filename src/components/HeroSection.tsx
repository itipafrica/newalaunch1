import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import AppStoreBadges from './AppStoreBadges';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute right-6 bottom-12 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div 
        className="w-[2px] h-16 bg-white/20 rounded-full overflow-hidden"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1 }}
      >
        <motion.div 
          className="w-full h-1/3 bg-white rounded-full"
          initial={{ y: -60 }}
          animate={{ y: 60 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
        />
      </motion.div>
      <motion.span 
        className="text-sm text-white/50 uppercase tracking-widest"
        initial={{ y: 0 }}
        animate={{ y: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        Scroll
      </motion.span>
    </motion.div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden">
      <motion.div
        className="max-w-3xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 mx-auto">
          <Logo className="h-28 md:h-40 text-white mx-auto" />
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          {t('hero.tagline')}
        </motion.h1>
        
        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-lg md:text-xl py-2 px-6 font-medium inline-block mb-10"
        >
          {t('hero.comingSoon')}
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <AppStoreBadges className="justify-center" />
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;