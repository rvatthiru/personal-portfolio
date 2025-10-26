'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
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
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Journey
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Over the past 4 years, I've evolved from building BI dashboards to developing predictive models 
                that drive strategic decisions.
              </p>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Starting in Business Intelligence, I mastered data visualization and ETL processes, building 
                over 25 interactive dashboards that empowered stakeholders with real-time insights.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My transition to Data Science allowed me to leverage machine learning and statistical modeling, 
                achieving 85%+ accuracy in predictive analytics projects that directly impacted business outcomes.
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20" />
              
              <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                      <p className="text-gray-400">Expertise in SQL, Power BI, and data visualization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                      <p className="text-gray-400">Python, scikit-learn, and predictive modeling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">☁️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cloud & ETL</h3>
                      <p className="text-gray-400">Airbyte, data pipelines, and cloud infrastructure</p>
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
