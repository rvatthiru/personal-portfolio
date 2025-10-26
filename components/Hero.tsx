'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  
  const animations = [
    "Building robust data pipelines",
    "Turning data into insights", 
    "Driving business decisions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animations.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent" id="home">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-white to-gray-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Thirunarayanan Raman
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transforming data into decisions that drive impact
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full font-semibold overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={scrollToContact}
                  className="group px-8 py-4 border-2 border-gray-400 rounded-full font-semibold hover:bg-gray-400 hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Animated Content */}
          <div className="flex items-center justify-center">
            <motion.div
              key={currentAnimation}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-md h-80 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center overflow-hidden"
            >
                     {/* Minimalist Background */}
                     <div className="absolute inset-0 overflow-hidden">
                       {/* Subtle gradient overlay */}
                       <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50" />
                     </div>

              {/* Main Animation Text */}
              <motion.div
                key={currentAnimation}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {animations[currentAnimation]}
                </div>
                
                       {/* Minimalist Animated Icons */}
                       <div className="flex justify-center mb-4">
                         {currentAnimation === 0 && (
                           <motion.div
                             className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center"
                             animate={{ 
                               scale: [1, 1.05, 1],
                               rotate: [0, 2, -2, 0]
                             }}
                             transition={{ 
                               duration: 3, 
                               repeat: Infinity,
                               ease: "easeInOut"
                             }}
                           >
                             <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                             </svg>
                           </motion.div>
                         )}
                         {currentAnimation === 1 && (
                           <motion.div
                             className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center"
                             animate={{ 
                               scale: [1, 1.05, 1],
                               opacity: [0.8, 1, 0.8]
                             }}
                             transition={{ 
                               duration: 3, 
                               repeat: Infinity,
                               ease: "easeInOut"
                             }}
                           >
                             <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
                             </svg>
                           </motion.div>
                         )}
                         {currentAnimation === 2 && (
                           <motion.div
                             className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center"
                             animate={{ 
                               scale: [1, 1.05, 1],
                               y: [0, -2, 0]
                             }}
                             transition={{ 
                               duration: 3, 
                               repeat: Infinity,
                               ease: "easeInOut"
                             }}
                           >
                             <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                               <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10S9.79 14 12 14 16 12.21 16 10 14.21 6 12 6ZM12 12C10.9 12 10 11.1 10 10S10.9 8 12 8 14 8.9 14 10 13.1 12 12 12Z"/>
                             </svg>
                           </motion.div>
                         )}
                       </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
