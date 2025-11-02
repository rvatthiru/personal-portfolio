'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Briefcase, X } from 'lucide-react';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tools: string[];
}

const experiences: Experience[] = [
  {
    role: 'Associate Data Analyst',
    company: 'Vibrant America',
    period: 'Aug 2025 – Present',
    location: 'San Jose, CA',
    summary: 'Built analytics pipelines and Power BI dashboards to improve data reliability and reduce SLA breaches through automated monitoring and reporting.',
    achievements: [
      'Built an analytics pipeline (Airbyte → ClickHouse → DBT), improving data reliability and reducing reporting effort by 40%',
      'Engineered a Power BI dashboard on turnaround times and workloads, cutting SLA breaches by 20% through automated email alerts'
    ],
    tools: ['Airbyte', 'ClickHouse', 'DBT', 'Power BI', 'SQL', 'Data Pipelines']
  },
  {
    role: 'Business Intelligence Intern',
    company: 'Federal Home Loan Bank of Dallas',
    period: 'Jan 2025 – May 2025',
    location: 'Irving, TX',
    summary: 'Automated fund request processes and developed Power BI dashboards using Power Platform integration with Azure Document Intelligence for loan eligibility evaluation.',
    achievements: [
      'Automated the fund request process using Power Apps + Power Automate + MS SQL, reducing manual entry by 60% and accelerating SLA-compliant disbursements',
      'Developed a Power BI dashboard to identify slow SQL queries and optimise indexing and joins, cutting execution time by 30% and boosting system responsiveness',
      'Built an app using Power Platform to evaluate loan eligibility using Azure Document Intelligence and Python, and real-time dashboard updates, reducing processing delays by 40%'
    ],
    tools: ['Power Apps', 'Power Automate', 'Power BI', 'MS SQL', 'Azure Document Intelligence', 'Python']
  },
  {
    role: 'Data Science Intern',
    company: 'UST',
    period: 'May 2024 – Aug 2024',
    location: 'Aliso Viejo, CA',
    summary: 'Developed forecasting models and deployed XGBoost models for customer segmentation and CLV prediction with high accuracy to enable marketing optimization.',
    achievements: [
      'Analyzed sales trends and developed a forecasting model (Prophet; RMSE: 2.68), enabling FY25 budget optimization',
      'Deployed XGBoost models for customer segmentation and CLV prediction with 96% accuracy, enabling marketing to identify high-value segments, optimise targeting, and boost retention campaigns'
    ],
    tools: ['Prophet', 'XGBoost', 'Python', 'Machine Learning', 'Forecasting', 'Customer Analytics']
  },
  {
    role: 'Associate Analyst',
    company: 'Newell Brands',
    period: 'Apr 2022 – Jul 2023',
    location: 'India',
    summary: 'Developed Power BI workflows and ETL pipelines to rationalize suppliers and streamline procurement processes, resulting in significant cost savings.',
    achievements: [
      'Developed a Power BI + Power Apps workflow to rationalize 100+ suppliers, saving $2.5M in procurement through tail-spend reduction',
      'Built ETL pipelines with SQL and Python to create feature-ready datasets for ad-hoc dashboards, cutting prep time by 30% and enabling procurement insights',
      'Streamlined supplier request process by integrating Power Platform with automated email updates to track request status, cutting submission time by 50%'
    ],
    tools: ['Power BI', 'Power Apps', 'SQL', 'Python', 'ETL Pipelines', 'Procurement Analytics']
  },
  {
    role: 'Data Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'Aug 2020 – Apr 2022',
    location: 'India',
    summary: 'Created Power BI dashboards and automated data extraction processes to track energy delivery, pricing, and ServiceNow tickets with real-time monitoring.',
    achievements: [
      'Created a Power BI dashboard using DAX and M-Query to track energy delivery and pricing, revealing 12% higher churn in undercut regions and guiding pricing strategy adjustments',
      'Published a real-time Power BI dashboard on ServiceNow data, alerting high-priority SLA-risk tickets and sending automated emails via Power Automate, cutting breaches by 40%',
      'Automated data extraction and transformation from Hadoop using HiveQL scripts, reducing manual prep by 20%, and built Power BI dashboards to deliver high-level business insights across energy operations'
    ],
    tools: ['Power BI', 'DAX', 'M-Query', 'Power Automate', 'Hadoop', 'HiveQL', 'ServiceNow']
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  // Auto-close modal when scrolling or navigating to different sections
  useEffect(() => {
    let lastScrollY = 0;
    
    const handleScroll = () => {
      if (selectedExperience) {
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
        let currentSection = 'experience';
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
        // 1. User is not in experience section, OR
        // 2. User has scrolled significantly within experience section
        if (currentSection !== 'experience' || scrollDelta > 50) {
          closeModal();
        }
        
        lastScrollY = currentScrollY;
      }
    };

    if (selectedExperience) {
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
  }, [selectedExperience]);

  return (
    <section className="py-16 px-6 bg-transparent relative" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey in data</p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 via-gray-400 to-gray-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-12 sm:ml-16 md:ml-0`}>
                  <div 
                    className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-400 transition-all duration-300 cursor-pointer hover:scale-105"
                    onClick={() => openModal(exp)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full" />
                      <span className="text-gray-300 font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                    <p className="text-gray-300">{exp.summary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
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
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedExperience.role}</h2>
                <p className="text-gray-400 text-lg">{selectedExperience.company}</p>
                <p className="text-gray-500 text-sm">{selectedExperience.location} • {selectedExperience.period}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 sm:p-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Summary</h3>
              <p className="text-gray-300 text-base sm:text-sm">{selectedExperience.summary}</p>
            </div>

            {/* Key Achievements */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
              <ul className="space-y-3">
                {selectedExperience.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 text-base sm:text-sm flex items-start gap-2">
                    <span className="text-gray-400 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.tools.map((tool, i) => (
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

