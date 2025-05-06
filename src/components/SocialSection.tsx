import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const SocialSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { icon: <Instagram size={24} />, url: '#', delay: 0 },
    { icon: <Facebook size={24} />, url: '#', delay: 0.1 },
    { icon: <Twitter size={24} />, url: '#', delay: 0.2 },
    { icon: <Linkedin size={24} />, url: '#', delay: 0.3 },
  ];

  return (
    <section ref={ref} className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('social.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('social.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="w-12 h-12 bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + social.delay }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;