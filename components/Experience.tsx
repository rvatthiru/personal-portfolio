'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Associate Data Analyst',
    company: 'Vibrant America',
    period: 'Aug 2025 – Present',
    location: 'San Jose, CA',
    achievements: [
      'Built an analytics pipeline (Airbyte → ClickHouse → DBT), improving data reliability and reducing reporting effort by 40%',
      'Engineered a Power BI dashboard on turnaround times and workloads, cutting SLA breaches by 20% through automated email alerts'
    ]
  },
  {
    role: 'Business Intelligence Intern',
    company: 'Federal Home Loan Bank of Dallas',
    period: 'Jan 2025 – May 2025',
    location: 'Irving, TX',
    achievements: [
      'Automated the fund request process using Power Apps + Power Automate + MS SQL, reducing manual entry by 60% and accelerating SLA-compliant disbursements',
      'Developed a Power BI dashboard to identify slow SQL queries and optimise indexing and joins, cutting execution time by 30% and boosting system responsiveness',
      'Built an app using Power Platform to evaluate loan eligibility using Azure Document Intelligence and Python, and real-time dashboard updates, reducing processing delays by 40%'
    ]
  },
  {
    role: 'Data Science Intern',
    company: 'UST',
    period: 'May 2024 – Aug 2024',
    location: 'Aliso Viejo, CA',
    achievements: [
      'Analyzed sales trends and developed a forecasting model (Prophet; RMSE: 2.68), enabling FY25 budget optimization',
      'Deployed XGBoost models for customer segmentation and CLV prediction with 96% accuracy, enabling marketing to identify high-value segments, optimise targeting, and boost retention campaigns'
    ]
  },
  {
    role: 'Associate Analyst',
    company: 'Newell Brands',
    period: 'Apr 2022 – Jul 2023',
    location: 'India',
    achievements: [
      'Developed a Power BI + Power Apps workflow to rationalize 100+ suppliers, saving $2.5M in procurement through tail-spend reduction',
      'Built ETL pipelines with SQL and Python to create feature-ready datasets for ad-hoc dashboards, cutting prep time by 30% and enabling procurement insights',
      'Streamlined supplier request process by integrating Power Platform with automated email updates to track request status, cutting submission time by 50%'
    ]
  },
  {
    role: 'Data Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'Aug 2020 – Apr 2022',
    location: 'India',
    achievements: [
      'Created a Power BI dashboard using DAX and M-Query to track energy delivery and pricing, revealing 12% higher churn in undercut regions and guiding pricing strategy adjustments',
      'Published a real-time Power BI dashboard on ServiceNow data, alerting high-priority SLA-risk tickets and sending automated emails via Power Automate, cutting breaches by 40%',
      'Automated data extraction and transformation from Hadoop using HiveQL scripts, reducing manual prep by 20%, and built Power BI dashboards to deliver high-level business insights across energy operations'
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-gray-900" id="experience">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey in data</p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600" />

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
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                      <span className="text-purple-400 font-semibold">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-purple-500 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

