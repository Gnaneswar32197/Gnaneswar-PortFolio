import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gnaneswar32197' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gnaneswar-kotari-63325b246/' },
    { icon: Mail, href: 'mailto:2200032197cseh@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 mb-6 md:mb-0"
          >
            © 2025 Gnaneswar Kotari. All rights reserved.
          </motion.p>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#3B82F6' }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}