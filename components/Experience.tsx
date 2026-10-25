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
    role: 'Senior Associate Data Analyst',
    company: 'Vibrant America',
    period: 'Aug 2025 – Present',
    location: 'San Jose, CA',
    summary: 'Own commercial analytics for a B2B diagnostics business: forecasting, pipeline visibility, attribution, and CRM signals that sales leadership and the field use.',
    achievements: [
      'Owned the weekly forecast and pipeline rhythm in SQL, Excel, and Power BI for a $108M (2025) / $75M (2026) book, with one narrative for sales leadership',
      'Linked about $75M of tracked 2025 revenue to NRR, ARR, ROAS, and CPA so channel tradeoffs used a shared definition',
      'Reverse-ETL’d account priorities into HubSpot via Hightouch (Protect / Grow / Re-engage) so sellers executed from CRM, not slides',
      'Shipped a Cube-grounded Slack analytics agent adopted by 25+ people, and co-authored data contracts after legacy models had obscured $2.5M in reported revenue'
    ],
    tools: ['SQL', 'Power BI', 'dbt', 'HubSpot', 'Hightouch', 'Cube.js', 'Airbyte']
  },
  {
    role: 'Business Intelligence Intern',
    company: 'Federal Home Loan Bank of Dallas',
    period: 'Jan 2025 – May 2025',
    location: 'Irving, TX',
    summary: 'Housing-finance analytics for sales coverage and loan-operations reliability.',
    achievements: [
      'Built an Excel, SQL, and Power BI utilization model that scored quiet accounts and surfaced $15M+ in pipeline for sales outreach',
      'Automated intake-to-payment workflows with SQL and Power Platform: processing delays down 40%, on-time disbursements up 60%'
    ],
    tools: ['Excel', 'SQL', 'Power BI', 'Power Platform']
  },
  {
    role: 'Data Science Intern',
    company: 'UST',
    period: 'May 2024 – Aug 2024',
    location: 'Aliso Viejo, CA',
    summary: 'Forecasting and lead scoring for GTM planning and SDR/AE routing.',
    achievements: [
      'Built a demand forecast (Prophet, RMSE 2.68) that finance and GTM used for planning baselines',
      'Built signal-based scoring and routing for SDR/AE conversion: conversion up 6%, CAC down $300 per user'
    ],
    tools: ['Prophet', 'Python', 'SQL', 'Forecasting', 'Lead scoring']
  },
  {
    role: 'Associate Analyst',
    company: 'Newell Brands',
    period: 'Apr 2022 – Jul 2023',
    location: 'India',
    summary: 'Partner-book coverage and process automation for a large vendor portfolio.',
    achievements: [
      'Ranked 100+ accounts by health and drove $2.5M in annual savings by focusing coverage on the top of the book',
      'Cut partner onboarding time 50% by automating request and approval workflows in Power Platform'
    ],
    tools: ['Power BI', 'Power Apps', 'SQL', 'Python', 'ETL Pipelines', 'Procurement Analytics']
  },
  {
    role: 'Data Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'Aug 2020 – Apr 2022',
    location: 'India',
    summary: 'Pricing analysis and executive GTM reporting for SalesOps and RevOps.',
    achievements: [
      'Quantified 12% higher churn in underpriced regions to guide pricing and retention decisions',
      'Automated executive GTM reporting from Hadoop into Power BI, cutting leadership time-to-insight 20%'
    ],
    tools: ['Power BI', 'SQL', 'Hadoop']
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

