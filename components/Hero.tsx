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
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating Data Elements */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gray-400 rounded-full opacity-30"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
                
                {/* Connecting Lines */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <svg className="w-full h-full">
                    <motion.line
                      x1="20%"
                      y1="30%"
                      x2="80%"
                      y2="70%"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.line
                      x1="80%"
                      y1="30%"
                      x2="20%"
                      y2="70%"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </svg>
                </motion.div>
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
                
                {/* Animated Icons based on current message */}
                <div className="text-6xl mb-4">
                  {currentAnimation === 0 && (
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⚙️
                    </motion.div>
                  )}
                  {currentAnimation === 1 && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      📊
                    </motion.div>
                  )}
                  {currentAnimation === 2 && (
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🎯
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
