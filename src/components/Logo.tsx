import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

  return (
    <motion.svg 
      className={`w-auto ${className}`}
      viewBox="0 0 2000 1109.04"
      initial="hidden"
      animate="visible"
    >
      <motion.path 
        variants={pathVariants}
        d="M34.3,306.5h43.59l303.07,338.31h3.5v-338.31h34.16v473.26h-18.12L72.31,403.83h-2.81v365.13h-35.2v-462.45Z"
        fill="currentColor"
      />
      <motion.path 
        variants={pathVariants}
        d="M865.72,306.5v30h-243.79v165.31h163.23v30h-163.23v207.16h243.79v29.97h-321.54v-462.45h321.54Z"
        fill="currentColor"
      />
      <motion.path 
        variants={pathVariants}
        d="M972.09,306.5l138.11,351.54,121.34-317.35,125.22,318.77L1668.91,14.59h37.66l-355.04,758.21h-23.01l-114.41-288.41-109.49,288.41h-26.51l-183.81-466.3h77.78Z"
        fill="currentColor"
      />
      <motion.path 
        variants={pathVariants}
        d="M1748.08,296.04l217.63,472.92h-79.17l-70.44-154.15h-198.46l-210.01,475.71h-39.08l360-794.48h19.54ZM1631.24,584.83h170.54l-84.06-183.12-86.48,183.12Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};

export default Logo;