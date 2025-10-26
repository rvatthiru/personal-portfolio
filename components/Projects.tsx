// TypeScript fix applied - build should now succeed

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  abstract: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  impact: string;
  tools: string[];
}

const projects = [
  {
    title: 'COSMO.ai – Conversational AI Chatbot',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
    abstract: 'Built a context-aware AI chatbot using Mistral AI, LlamaIndex, Jina embeddings, FastAPI, MongoDB, and Qdrant to deliver accurate (87%), consistent responses to student queries on compliance, programs, and policies.',
    star: {
      situation: 'Manual handling of student queries led to inconsistent responses and delays.',
      task: 'Develop an AI chatbot for instant, accurate responses to student queries.',
      action: 'Built context-aware chatbot using Mistral AI, LlamaIndex, FastAPI, MongoDB, and Qdrant.',
      result: 'Achieved 87% accuracy with instant responses, improving user experience.'
    },
    impact: 'Reduced response time from hours to seconds, improved student satisfaction, and streamlined compliance information delivery.',
    tools: ['Mistral AI', 'LlamaIndex', 'FastAPI', 'MongoDB', 'Qdrant', 'Jina Embeddings']
  },
  {
    title: 'SMART Inventory Optimization Model',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
    abstract: 'Built a SARIMAX and polynomial regression-based demand forecasting model (20% improved accuracy) and applied EOQ optimization techniques to reduce excess inventory by 7.5%, enhancing procurement and working capital efficiency.',
    star: {
      situation: 'Excess inventory and inaccurate demand forecasting increased carrying costs.',
      task: 'Develop demand forecasting model and implement inventory optimization.',
      action: 'Built SARIMAX and polynomial regression model with EOQ optimization techniques.',
      result: 'Achieved 20% improved accuracy and reduced excess inventory by 7.5%.'
    },
    impact: 'Enhanced procurement efficiency, improved working capital management, and reduced carrying costs.',
    tools: ['SARIMAX', 'Polynomial Regression', 'EOQ', 'Python', 'Forecasting']
  },
  {
    title: 'Multi-Class Prediction of Cirrhosis Outcomes',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
    abstract: 'Developed an XGBoost model for liver cirrhosis patient data with 83% accuracy, deployed on Databricks using MLFlow to track the performance with scalable and automated pipelines for real-time analytics.',
    star: {
      situation: 'Healthcare providers needed accurate prediction models for cirrhosis outcomes.',
      task: 'Develop ML model to predict cirrhosis outcomes with high accuracy.',
      action: 'Developed XGBoost model and deployed on Databricks using MLFlow.',
      result: 'Achieved 83% accuracy with scalable, automated pipelines for real-time analytics.'
    },
    impact: 'Improved treatment planning accuracy, enhanced patient care outcomes, and enabled data-driven healthcare decisions.',
    tools: ['XGBoost', 'Databricks', 'MLFlow', 'Python', 'Healthcare Analytics']
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Auto-close modal when scrolling or navigating to different sections
  useEffect(() => {
    let lastScrollY = 0;
    
    const handleScroll = () => {
      if (selectedProject) {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        // Get all section elements
        const sections = [
          { id: 'home', element: document.getElementById('home') },
          { id: 'about', element: document.getElementById('about') },
          { id: 'experience', element: document.getElementById('experience') },
          { id: 'skills', element: document.getElementById('skills') },
          { id: 'projects', element: document.getElementById('projects') },
          { id: 'contact', element: document.getElementById('contact') }
        ];

        // Find which section is currently most visible
        let currentSection = 'projects';
        let maxVisibility = 0;

        sections.forEach(({ id, element }) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the section is visible
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(windowHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibilityRatio = visibleHeight / Math.min(rect.height, windowHeight);
            
            if (visibilityRatio > maxVisibility) {
              maxVisibility = visibilityRatio;
              currentSection = id;
            }
          }
        });
        
        // Close modal if:
        // 1. User is not in projects section, OR
        // 2. User has scrolled significantly within projects section
        if (currentSection !== 'projects' || scrollDelta > 50) {
          closeModal();
        }
        
        lastScrollY = currentScrollY;
      }
    };

    if (selectedProject) {
      // Initialize scroll position
      lastScrollY = window.scrollY;
      
      // Use a debounced scroll handler to avoid too many calls
      let timeoutId: NodeJS.Timeout;
      const debouncedHandler = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScroll, 100);
      };

      window.addEventListener('scroll', debouncedHandler);
      return () => {
        window.removeEventListener('scroll', debouncedHandler);
        clearTimeout(timeoutId);
      };
    }
  }, [selectedProject]);

  return (
    <section className="py-16 px-6 bg-transparent relative" id="projects">
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
              <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = 'https://via.placeholder.com/400x300/374151/9ca3af?text=' + encodeURIComponent(project.title);
                  }}
                />
              </div>
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
            className="bg-gray-800 rounded-2xl p-6 max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* STAR Format */}
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Situation</h3>
                <p className="text-gray-300 text-sm">{selectedProject.star.situation}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Task</h3>
                <p className="text-gray-300 text-sm">{selectedProject.star.task}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Action</h3>
                <p className="text-gray-300 text-sm">{selectedProject.star.action}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Result</h3>
                <p className="text-gray-300 text-sm">{selectedProject.star.result}</p>
              </div>
            </div>

            {/* Impact */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-1">Impact</h3>
              <p className="text-gray-300 text-sm">{selectedProject.impact}</p>
            </div>

            {/* Tools Used */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool, i) => (
                  <span key={i} className="px-2 py-1 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full text-xs text-gray-900 font-medium">
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

