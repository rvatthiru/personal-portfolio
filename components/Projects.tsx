'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

const projects = [
  {
    title: 'COSMO.ai – Conversational AI Chatbot',
    abstract: 'Built a context-aware AI chatbot using Mistral AI, LlamaIndex, Jina embeddings, FastAPI, MongoDB, and Qdrant to deliver accurate (87%), consistent responses to student queries on compliance, programs, and policies.',
    star: {
      situation: 'Student queries about compliance, programs, and policies were handled manually, leading to inconsistent responses and high response times.',
      task: 'Develop an AI-powered chatbot to provide accurate, consistent, and instant responses to student queries.',
      action: 'Built a context-aware AI chatbot using Mistral AI, LlamaIndex, Jina embeddings, FastAPI, MongoDB, and Qdrant for vector storage and retrieval.',
      result: 'Achieved 87% accuracy in responses with consistent, instant answers to student queries, significantly improving user experience.'
    },
    impact: 'Reduced response time from hours to seconds, improved student satisfaction, and streamlined compliance information delivery.',
    tools: ['Mistral AI', 'LlamaIndex', 'FastAPI', 'MongoDB', 'Qdrant', 'Jina Embeddings']
  },
  {
    title: 'SMART Inventory Optimization Model',
    abstract: 'Built a SARIMAX and polynomial regression-based demand forecasting model (20% improved accuracy) and applied EOQ optimization techniques to reduce excess inventory by 7.5%, enhancing procurement and working capital efficiency.',
    star: {
      situation: 'Company faced challenges with excess inventory and inaccurate demand forecasting, leading to increased carrying costs and working capital inefficiency.',
      task: 'Develop an advanced demand forecasting model and implement inventory optimization techniques to reduce excess inventory.',
      action: 'Built SARIMAX and polynomial regression-based demand forecasting model and applied EOQ optimization techniques.',
      result: 'Achieved 20% improved accuracy in demand forecasting and reduced excess inventory by 7.5%.'
    },
    impact: 'Enhanced procurement efficiency, improved working capital management, and reduced carrying costs.',
    tools: ['SARIMAX', 'Polynomial Regression', 'EOQ', 'Python', 'Forecasting']
  },
  {
    title: 'Multi-Class Prediction of Cirrhosis Outcomes',
    abstract: 'Developed an XGBoost model for liver cirrhosis patient data with 83% accuracy, deployed on Databricks using MLFlow to track the performance with scalable and automated pipelines for real-time analytics.',
    star: {
      situation: 'Healthcare providers needed accurate prediction models for liver cirrhosis patient outcomes to improve treatment planning and patient care.',
      task: 'Develop a machine learning model to predict cirrhosis outcomes with high accuracy and deploy it for real-time analytics.',
      action: 'Developed an XGBoost model for liver cirrhosis patient data and deployed on Databricks using MLFlow for performance tracking.',
      result: 'Achieved 83% accuracy in predicting cirrhosis outcomes with scalable, automated pipelines for real-time analytics.'
    },
    impact: 'Improved treatment planning accuracy, enhanced patient care outcomes, and enabled data-driven healthcare decisions.',
    tools: ['XGBoost', 'Databricks', 'MLFlow', 'Python', 'Healthcare Analytics']
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-24 px-6 bg-transparent relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg">Impactful projects that drove business value</p>
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
              className="group bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-400 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{project.abstract}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* STAR Format */}
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Situation</h3>
                <p className="text-gray-300">{selectedProject.star.situation}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Task</h3>
                <p className="text-gray-300">{selectedProject.star.task}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Action</h3>
                <p className="text-gray-300">{selectedProject.star.action}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Result</h3>
                <p className="text-gray-300">{selectedProject.star.result}</p>
              </div>
            </div>

            {/* Impact */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Impact</h3>
              <p className="text-gray-300">{selectedProject.impact}</p>
            </div>

            {/* Tools Used */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full text-sm text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

