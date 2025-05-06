import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Truck, ShoppingBag, CreditCard, Smartphone } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="bg-blue-600/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Truck size={24} />,
      titleKey: 'about.features.delivery.title',
      descriptionKey: 'about.features.delivery.description',
    },
    {
      icon: <ShoppingBag size={24} />,
      titleKey: 'about.features.variety.title',
      descriptionKey: 'about.features.variety.description',
    },
    {
      icon: <CreditCard size={24} />,
      titleKey: 'about.features.payment.title',
      descriptionKey: 'about.features.payment.description',
    },
    {
      icon: <Smartphone size={24} />,
      titleKey: 'about.features.mobile.title',
      descriptionKey: 'about.features.mobile.description',
    },
  ];

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
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;