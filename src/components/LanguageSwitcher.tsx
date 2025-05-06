import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  
  const containerVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const handleLanguageChange = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    changeLanguage(newLanguage);
  };
  
  return (
    <motion.div
      className="flex items-center gap-2"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <button
        onClick={handleLanguageChange}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
        aria-label={t('header.language')}
      >
        <span className="font-medium">{language.toUpperCase()}</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;