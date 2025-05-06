import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  
  useEffect(() => {
    const parallaxEffect = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const shapes = container.querySelectorAll('.shape');
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;
      
      shapes.forEach((shape, index) => {
        const speed = 0.03 + (index * 0.01);
        const htmlShape = shape as HTMLElement;
        htmlShape.style.transform = `translate(${deltaX * 50 * speed}px, ${deltaY * 50 * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', parallaxEffect);
    
    return () => {
      window.removeEventListener('mousemove', parallaxEffect);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  
  const shapeVariants = [
    {
      initial: { x: -50, y: -50, opacity: 0.7 },
      animate: {
        x: [0, 20, -20, 0],
        y: [0, -30, 30, 0],
        opacity: [0.7, 0.9, 0.7],
        transition: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }
    },
    {
      initial: { x: 50, y: 50, opacity: 0.5 },
      animate: {
        x: [0, -40, 40, 0],
        y: [0, 40, -40, 0],
        opacity: [0.5, 0.8, 0.5],
        transition: {
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }
    },
    {
      initial: { x: 0, y: 0, opacity: 0.6 },
      animate: {
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
        opacity: [0.6, 0.9, 0.6],
        transition: {
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      }
    }
  ];
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full overflow-hidden -z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#020c1b] via-[#0a192f] to-[#0a1f3d]"></div>
      
      <motion.div 
        className="shape absolute top-[10%] left-[20%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-blue-900/30 to-blue-400/30 blur-[80px]"
        variants={shapeVariants[0]}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="shape absolute top-[30%] right-[15%] w-[250px] h-[500px] md:w-[350px] md:h-[700px] rounded-full bg-gradient-to-l from-blue-800/40 to-blue-300/40 blur-[100px]"
        variants={shapeVariants[1]}
        initial="initial"
        animate="animate"
      />
      
      <motion.div 
        className="shape absolute bottom-[15%] left-[30%] w-[400px] h-[200px] md:w-[600px] md:h-[300px] rounded-full bg-gradient-to-tr from-blue-700/30 to-blue-200/30 blur-[90px]"
        variants={shapeVariants[2]}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default AnimatedBackground;