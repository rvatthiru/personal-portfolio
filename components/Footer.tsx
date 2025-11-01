'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800/50 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-4">
              Thirunarayanan Raman
            </h3>
            <p className="text-gray-400 text-sm">
              Data Analytics, BI, and Data Science professional focused on turning data into actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Experience', id: 'experience' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:rvatthiru@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 text-gray-300 hover:text-white"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thirunarayanan-raman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Thirunarayanan Raman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

