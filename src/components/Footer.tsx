import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const footerLinks = [
    { text: t('footer.terms'), href: '#' },
    { text: t('footer.privacy'), href: '#' },
    { text: t('footer.contact'), href: '#' },
  ];
  
  return (
    <footer className="py-8 px-6 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-4">
            <Logo className="h-8 text-white" />
            <p className="text-gray-400 text-sm">
              {t('footer.rights')}
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.text}
              </a>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <LanguageSwitcher />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;