import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react'; // Added Mail icon
import profileImage from './images/pic.jpeg';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Gnaneswar32197', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gnaneswar-kotari-63325b246/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:2200032197cseh@gmail.com', label: 'Email' }, // Added email link
];

const backgroundVariants = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 20,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        variants={backgroundVariants}
        animate="animate"
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #3B82F6 0%, #8B5CF6 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 lg:w-96 lg:h-96"
          >
            <motion.div
              animate={{
                rotate: 360,
                borderColor: ['#3B82F6', '#8B5CF6', '#3B82F6'],
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-4"
            />
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-white shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hi, I'm Gnaneswar
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Aspiring DevOps Engineer with a strong foundation. I’m committed to staying updated on the latest trends and technologies. Eager to contribute and grow in the field.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon className="w-6 h-6 text-gray-700" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
