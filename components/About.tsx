'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="py-16 px-6 bg-transparent relative" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Master&apos;s in Business Analytics & AI from UTD, plus 4+ years working with data across BI, analytics, and data science. I've learned that the best insights are useless if they don't get used — so I make sure mine do.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I build things: dashboards that execs check daily, pipelines that actually work, and models that improve decisions. If it helps someone avoid a bad call or find a better path, I'm interested.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/18ECZkFHFAYhSf_fsIHOaJPfECAxrlJII"
                alt="Thirunarayanan Raman"
                className="w-full h-auto rounded-3xl object-contain shadow-lg"
                style={{ minHeight: '350px', maxHeight: '500px' }}
                onError={(e) => {
                  console.log('Image failed to load, trying fallback');
                  e.currentTarget.src = 'https://drive.google.com/uc?export=view&id=18ECZkFHFAYhSf_fsIHOaJPfECAxrlJII';
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
