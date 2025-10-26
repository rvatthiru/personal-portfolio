'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Transform scroll position to create parallax effect
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
      
      {/* Animated gradient orbs */}
      <motion.div
        style={{ 
          y: y1,
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(128,128,128,0.05) 50%, transparent 70%)',
          left: '10%',
          top: '20%',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
      />
      
      <motion.div
        style={{ 
          y: y2,
          background: 'radial-gradient(circle, rgba(200,200,200,0.08) 0%, rgba(100,100,100,0.04) 50%, transparent 70%)',
          right: '15%',
          top: '60%',
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px)`,
        }}
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
      />
      
      <motion.div
        style={{ 
          y: y3,
          background: 'radial-gradient(circle, rgba(150,150,150,0.06) 0%, rgba(75,75,75,0.03) 50%, transparent 70%)',
          left: '60%',
          top: '10%',
          transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * -0.012}px)`,
        }}
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30"
            style={{
              width: '100%',
              top: `${30 + i * 30}%`,
            }}
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
