'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [showDisintegration, setShowDisintegration] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setShowDisintegration(true);
      setTimeout(() => {
        setIsLoading(false);
        // Re-enable scrolling
        document.body.style.overflow = 'unset';
      }, 200); // 200ms delay after disintegration
    }, 1500);

    return () => {
      clearTimeout(timer);
      // Cleanup: re-enable scrolling if component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading || !isClient) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: showDisintegration ? 0 : 1,
        scale: showDisintegration ? 0.8 : 1,
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Film opening disintegration effect - small dots */}
      {showDisintegration && (
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: '4px',
                height: '4px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [1, 1.5, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 1.2,
                delay: Math.random() * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center relative z-10">
        {/* Welcome Message */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-200 bg-clip-text text-transparent mb-4">
            Hello there
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-6xl md:text-8xl"
          >
            👋
          </motion.div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl text-gray-300 mb-8"
        >
          Welcome to my portfolio
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
                opacity: 0
              }}
              animate={{ 
                y: -100,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
