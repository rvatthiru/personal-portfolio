'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-transparent relative" id="about">
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
                I&apos;m pursuing my M.S. in Business Analytics and AI at UT Dallas (GPA: 3.97), 
                specializing in Advanced Statistics, Predictive Analytics, Machine Learning, and Deep Learning.
              </p>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                With 4+ years of experience in data analytics and business intelligence, I&apos;ve built 
                analytics pipelines, automated processes, and developed predictive models that have 
                driven significant business impact across multiple industries.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans from building Power BI dashboards and ETL pipelines to developing 
                machine learning models with 96% accuracy, always focused on delivering actionable 
                insights that drive strategic decisions.
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
                src="https://drive.google.com/uc?export=view&id=18ECZkFHFAYhSf_fsIHOaJPfECAxrlJII"
                alt="Thirunarayanan Raman"
                className="w-full h-auto rounded-3xl object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
