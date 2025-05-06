import React from 'react';
import { motion } from 'framer-motion';

interface AppStoreBadgesProps {
  className?: string;
}

const AppStoreBadges: React.FC<AppStoreBadgesProps> = ({ className = '' }) => {
  const badgeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <motion.div
        className="h-[45px] bg-black/70 border border-white/20 text-white rounded-lg px-4 py-2 flex items-center gap-2 backdrop-blur-sm cursor-not-allowed opacity-75"
        variants={badgeVariants}
        initial="initial"
        animate="animate"
        custom={0}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[0.65rem] leading-none">Coming soon on the</span>
          <span className="text-sm font-semibold">App Store</span>
        </div>
      </motion.div>
      
      <motion.div
        className="h-[45px] bg-black/70 border border-white/20 text-white rounded-lg px-4 py-2 flex items-center gap-2 backdrop-blur-sm cursor-not-allowed opacity-75"
        variants={badgeVariants}
        initial="initial"
        animate="animate"
        custom={1}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.271-.641V2.455c0-.222.088-.428.271-.641M16.681 0l4.11 4.109L16.681 0zM5.496 1.028l12.93 12.93-12.93 12.93-2.189-2.189L13.792 12 3.306 1.511l2.19-2.19M16.681 24l4.11-4.11-4.11 4.11zM21.878 11.308l-3.252-3.252L21.878 11.308z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-[0.65rem] leading-none">Coming soon on</span>
          <span className="text-sm font-semibold">Google Play</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AppStoreBadges;