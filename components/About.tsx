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
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent"
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
              <p className="text-cyan-200 text-lg mb-4 leading-relaxed">
                I&apos;m currently pursuing my M.S. in Business Analytics and Artificial Intelligence (STEM) 
                at The University of Texas at Dallas with a GPA of 3.97, specializing in Advanced Statistics, 
                Predictive Analytics, Machine Learning, and Deep Learning.
              </p>
              <p className="text-cyan-200 text-lg mb-4 leading-relaxed">
                With 4+ years of experience in data analytics and business intelligence, I&apos;ve built 
                analytics pipelines, automated processes, and developed predictive models that have 
                driven significant business impact across multiple industries.
              </p>
              <p className="text-cyan-200 text-lg leading-relaxed">
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
              {/* Decorative gradient circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-3xl blur-3xl opacity-20" />
              
              <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Education</h3>
                      <p className="text-gray-400">M.S. Business Analytics & AI, UT Dallas (GPA: 3.97)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                      <p className="text-gray-400">Microsoft Data Analyst Associate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Impact</h3>
                      <p className="text-gray-400">40% reduction in SLA breaches, $2.5M+ savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
