'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    name: 'Tools & Platforms',
    skills: ['Power BI', 'Power Apps', 'Power Automate', 'ClickHouse', 'DBT'],
    level: 9
  },
  {
    name: 'Programming Languages',
    skills: ['SQL (MySQL, HiveQL)', 'Python', 'R'],
    level: 9
  },
  {
    name: 'Data & Cloud',
    skills: ['Azure', 'Hadoop', 'Databricks'],
    level: 8
  },
  {
    name: 'AI/ML & Analytics',
    skills: ['Machine Learning', 'Feature Engineering', 'Fine Tuning', 'GenAI', 'LLMs'],
    level: 8
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-transparent relative" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 text-lg">Technical skills across the data stack</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
              <div className="space-y-3 mb-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill}</span>
                      <span className="text-gray-300">{category.level}/10</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-gray-600 to-gray-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${category.level * 10}%` } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

