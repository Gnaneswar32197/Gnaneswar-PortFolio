import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    degree: 'B.Tech (Computer Science and Engineering)',
    institution: 'KL University',
    location: 'Vaddeswaram, Vijayawada',
    year: '2022-2026',
    achievements: [
      'Software Modelling and Devops',
      'GPA: 9.21',
    ]
  },
  {
    degree: 'Grades XI–XII',
    institution: 'Narayana Junior College',
    location: 'Ongole',
    year: '2020-2022',
    achievements: [
      'First Class with Distinction',
      'Percentage: 80.7',
    ]
  },
  {
    degree: 'Grade X',
    institution: 'Bhashyam High School',
    location: 'Ongole',
    year: '2019-2020',
    achievements: [
      'First Class with Distinction',
      'Percentage: 81',
    ]
  }
];

const TimelinePoint = ({ active }: { active: boolean }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    className={`w-4 h-4 rounded-full ${
      active ? 'bg-blue-600' : 'bg-gray-300'
    } relative`}
  >
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 0, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 bg-blue-400 rounded-full"
    />
  </motion.div>
);

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey, highlighting key achievements and specializations
            in computer science and technology.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          {education.map((edu, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <motion.div
                key={edu.degree}
                ref={ref}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <TimelinePoint active={inView} />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-white p-6 rounded-xl shadow-lg mx-4 md:mx-8"
                >
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Award className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}