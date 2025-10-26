'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'COSMO.ai – Conversational AI Chatbot',
    description: 'Built a context-aware AI chatbot using Mistral AI, LlamaIndex, Jina embeddings, FastAPI, MongoDB, and Qdrant to deliver accurate (87%), consistent responses to student queries on compliance, programs, and policies.',
    tags: ['Mistral AI', 'LlamaIndex', 'FastAPI', 'MongoDB', 'Qdrant'],
    image: '🤖',
    period: 'Feb 2025 – Apr 2025'
  },
  {
    title: 'SMART Inventory Optimization Model',
    description: 'Built a SARIMAX and polynomial regression-based demand forecasting model (20% improved accuracy) and applied EOQ optimization techniques to reduce excess inventory by 7.5%, enhancing procurement and working capital efficiency.',
    tags: ['SARIMAX', 'Polynomial Regression', 'EOQ', 'Python', 'Forecasting'],
    image: '📦',
    period: 'Sep 2024 – Oct 2024'
  },
  {
    title: 'Multi-Class Prediction of Cirrhosis Outcomes',
    description: 'Developed an XGBoost model for liver cirrhosis patient data with 83% accuracy, deployed on Databricks using MLFlow to track the performance with scalable and automated pipelines for real-time analytics.',
    tags: ['XGBoost', 'Databricks', 'MLFlow', 'Python', 'Healthcare'],
    image: '🏥',
    period: 'Mar 2024 – Apr 2024'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-transparent relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-cyan-200 text-lg">Impactful projects that drove business value</p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="group bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="text-sm text-gray-500 bg-gray-700 px-2 py-1 rounded">{project.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                View Details <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

