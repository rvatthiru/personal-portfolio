'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-24 px-6 bg-transparent relative" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-cyan-200 text-lg">Open to new opportunities and collaborations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-cyan-200 mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/30 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-white placeholder-gray-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-cyan-200 mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/30 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all text-white placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-cyan-200 mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/50 border border-emerald-500/30 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all resize-none text-white placeholder-gray-400"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-white shadow-lg shadow-emerald-500/25"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </motion.form>

          {/* Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-emerald-900/20 rounded-2xl p-8 border border-emerald-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:rvatthiru@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-lg hover:from-emerald-600/30 hover:to-cyan-600/30 transition-all border border-emerald-500/20 hover:border-emerald-400/40"
                >
                  <Mail className="w-6 h-6 text-emerald-300" />
                  <span className="text-emerald-200">rvatthiru@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/thirunarayanan-raman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-lg hover:from-cyan-600/30 hover:to-indigo-600/30 transition-all border border-cyan-500/20 hover:border-cyan-400/40"
                >
                  <Linkedin className="w-6 h-6 text-cyan-300" />
                  <span className="text-cyan-200">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
