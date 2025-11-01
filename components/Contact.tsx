'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        'service_cyw18x4',
        'template_mkjbt4r',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Contact Form Submission',
          message: formData.message,
        },
        'XE70Bku_mFTQgjj_I'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-16 px-6 bg-transparent relative" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 text-lg">Open to new opportunities and collaborations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div>
              <label className="block text-gray-300 mb-1 font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all text-white placeholder-gray-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all text-white placeholder-gray-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Subject (Optional)</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all text-white placeholder-gray-400"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="What is this about?"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all resize-none text-white placeholder-gray-400"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-500 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 text-white shadow-lg shadow-gray-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
            </button>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300 text-center"
              >
                ✓ Message sent successfully! Check your inbox.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-center"
              >
                ✗ Failed to send message. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>

          {/* Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/20 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:rvatthiru@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-lg hover:from-gray-700/30 hover:to-gray-600/30 transition-all border border-gray-600/20 hover:border-gray-500/40"
                >
                  <Mail className="w-6 h-6 text-gray-300" />
                  <span className="text-gray-300">rvatthiru@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/thirunarayanan-raman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-lg hover:from-gray-600/30 hover:to-gray-500/30 transition-all border border-gray-500/20 hover:border-gray-400/40"
                >
                  <Linkedin className="w-6 h-6 text-gray-300" />
                  <span className="text-gray-300">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
