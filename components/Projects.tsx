'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Predictive Pricing Model',
    description: 'Developed predictive pricing model with 85% accuracy using ensemble learning',
    tags: ['Python', 'Machine Learning', 'Scikit-learn'],
    image: '🔬'
  },
  {
    title: 'Sales Analytics Dashboard',
    description: 'Built interactive Power BI dashboard improving decision speed by 40%',
    tags: ['Power BI', 'SQL', 'Data Visualization'],
    image: '📊'
  },
  {
    title: 'ETL Data Pipeline',
    description: 'Automated data pipeline processing 100M+ rows daily using Airbyte',
    tags: ['Airbyte', 'Python', 'ETL'],
    image: '⚙️'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Impactful projects that drove business value</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                View Details <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
