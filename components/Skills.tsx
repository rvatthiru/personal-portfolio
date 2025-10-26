'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    name: 'Certifications',
    skills: ['Microsoft Data Analyst Associate'],
    level: 100
  },
  {
    name: 'Tools & Platforms',
    skills: ['Power BI', 'Power Apps', 'Power Automate', 'Excel', 'ClickHouse', 'DBT', 'Airbyte'],
    level: 95
  },
  {
    name: 'Programming Languages',
    skills: ['SQL (MySQL, HiveQL)', 'Python', 'R'],
    level: 90
  },
  {
    name: 'Data & Cloud',
    skills: ['Azure', 'Hadoop', 'MongoDB', 'Databricks'],
    level: 85
  },
  {
    name: 'AI/ML & Analytics',
    skills: ['Machine Learning', 'Deep Learning', 'Feature Engineering', 'Fine Tuning', 'GenAI', 'LLMs'],
    level: 88
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-800 to-gray-900" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg">Technical skills across the data stack</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
              <div className="space-y-3 mb-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill}</span>
                      <span className="text-purple-400">{category.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${category.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
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

