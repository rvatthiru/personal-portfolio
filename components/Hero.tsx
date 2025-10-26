'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download, Linkedin } from 'lucide-react';
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

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/16_6ZrvXWoXIyaqSFytwp9hftk_3WHi7U/view?usp=sharing', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/thirunarayanan-raman', '_blank');
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
                       className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
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
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full font-semibold overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    View More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={downloadCV}
                  className="group px-8 py-4 border-2 border-gray-400 rounded-full font-semibold hover:bg-gray-400 hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2 text-gray-300 hover:text-gray-200"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </motion.div>

              {/* Social Icons */}
              <motion.div 
                className="flex gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <button
                  onClick={scrollToContact}
                  className="p-3 border border-gray-400 rounded-full hover:bg-gray-400 hover:bg-opacity-10 transition-all duration-300 text-gray-300 hover:text-gray-200"
                >
                  <Mail className="w-6 h-6" />
                </button>
                
                <button
                  onClick={openLinkedIn}
                  className="p-3 border border-gray-400 rounded-full hover:bg-gray-400 hover:bg-opacity-10 transition-all duration-300 text-gray-300 hover:text-gray-200"
                >
                  <Linkedin className="w-6 h-6" />
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
                     className="relative w-full max-w-2xl h-auto flex flex-col items-center justify-center"
            >

                     {/* Animated GIFs */}
                     <motion.div
                       key={currentAnimation}
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0, scale: 0.8 }}
                       transition={{ duration: 0.5 }}
                       className="relative z-10 flex flex-col items-center justify-center"
                     >
                       {/* GIF Container */}
                       <div className="mb-6">
                         {currentAnimation === 0 && (
                           <motion.img
                             src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
                             alt="Data Pipeline Animation"
                             className="w-80 h-80 object-contain"
                             animate={{ 
                               scale: [1, 1.02, 1]
                             }}
                             transition={{ 
                               duration: 3, 
                               repeat: Infinity,
                               ease: "easeInOut"
                             }}
                           />
                         )}
                         {currentAnimation === 1 && (
                           <motion.img
                             src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
                             alt="Data Analytics Animation"
                             className="w-80 h-80 object-contain"
                             animate={{ 
                               scale: [1, 1.02, 1]
                             }}
                             transition={{ 
                               duration: 3, 
                               repeat: Infinity,
                               ease: "easeInOut"
                             }}
                           />
                         )}
                         {currentAnimation === 2 && (
                           <motion.img
                             src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVy/giphy.gif"
                             alt="Business Strategy Animation"
                             className="w-80 h-80 object-contain"
                             animate={{ 
                               scale: [1, 1.02, 1]
                             }}
                             transition={{ 
                               duration: 3, 
                               repeat: Infinity,
                               ease: "easeInOut"
                             }}
                           />
                         )}
                       </div>
                       
                       {/* Text below GIF */}
                       <motion.div
                         key={`text-${currentAnimation}`}
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -10 }}
                         transition={{ duration: 0.3 }}
                         className="text-center"
                       >
                         <div className="text-xl md:text-2xl text-white font-medium">
                           {animations[currentAnimation]}
                         </div>
                       </motion.div>
                     </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
