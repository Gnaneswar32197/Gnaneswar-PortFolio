// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, Cloud, PenTool as Tool, Users, CheckCircle } from 'lucide-react';
// import { useInView } from 'react-intersection-observer';

// interface Skill {
//   name: string;
//   proficiency: number;
// }

// interface SkillCategory {
//   title: string;
//   icon: any;
//   skills: Skill[];
// }

// const skillCategories: SkillCategory[] = [
//   {
//     title: 'Languages',
//     icon: Code2,
//     skills: [
//       { name: 'C', proficiency: 85 },
//       { name: 'Java', proficiency: 90 },
//       { name: 'SQL', proficiency: 80 },
//       { name: 'HTML', proficiency: 95 },
//       { name: 'CSS', proficiency: 85 },
//       { name: 'React.js', proficiency: 90 }
//     ]
//   },
//   {
//     title: 'Technologies',
//     icon: Cloud,
//     skills: [
//       { name: 'AWS Cloud', proficiency: 85 },
//       { name: 'MongoDB', proficiency: 80 },
//       { name: 'CI/CD', proficiency: 75 }
//     ]
//   },
//   {
//     title: 'Tools',
//     icon: Tool,
//     skills: [
//       { name: 'Application Resiliency', proficiency: 85 }
//     ]
//   },
//   {
//     title: 'Soft Skills',
//     icon: Users,
//     skills: [
//       { name: 'Team Collaboration', proficiency: 95 },
//       { name: 'Communication', proficiency: 90 },
//       { name: 'Problem-Solving', proficiency: 95 }
//     ]
//   }
// ];

// const ProgressBar = ({ progress }: { progress: number }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   return (
//     <div ref={ref} className="h-2 bg-gray-200 rounded-full overflow-hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         animate={inView ? { width: `${progress}%` } : { width: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
//       />
//     </div>
//   );
// };

// const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
//   const Icon = category.icon;
  
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.2 }}
//       whileHover={{ scale: 1.02 }}
//       className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
//     >
//       <div className="flex items-center gap-3 mb-6">
//         <div className="p-3 bg-blue-100 rounded-lg">
//           <Icon className="w-6 h-6 text-blue-600" />
//         </div>
//         <h3 className="text-xl font-bold">{category.title}</h3>
//       </div>

//       <div className="space-y-4">
//         {category.skills.map((skill) => (
//           <div key={skill.name}>
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-gray-700">{skill.name}</span>
//               <span className="text-sm text-gray-500">{skill.proficiency}%</span>
//             </div>
//             <ProgressBar progress={skill.proficiency} />
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default function Skills() {
//   return (
//     <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A comprehensive overview of my technical abilities and professional competencies,
//             showcasing the depth and breadth of my expertise.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {skillCategories.map((category, index) => (
//             <SkillCard key={category.title} category={category} index={index} />
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-12 p-6 bg-white rounded-xl shadow-lg"
//         >
//           <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//             <CheckCircle className="w-5 h-5 text-green-500" />
//             Additional Competencies
//           </h3>
//           <div className="flex flex-wrap gap-3">
//             {['Version Control', 'Agile Methodologies', 'Code Review', 'Documentation'].map((skill) => (
//               <motion.span
//                 key={skill}
//                 whileHover={{ scale: 1.05 }}
//                 className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, PenTool as Tool, Users, CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  proficiency: number;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'C', proficiency: 85 },
      { name: 'Java', proficiency: 90 },
      { name: 'SQL', proficiency: 80 },
      { name: 'HTML', proficiency: 95 },
      { name: 'CSS', proficiency: 85 },
      { name: 'React.js', proficiency: 90 }
    ]
  },
  {
    title: 'Technologies',
    icon: Cloud,
    skills: [
      { name: 'AWS Cloud', proficiency: 85 },
      { name: 'MongoDB', proficiency: 80 },
      { name: 'CI/CD', proficiency: 75 }
    ]
  },
  {
    title: 'Tools',
    icon: Tool,
    skills: [
      { name: 'Application Resiliency', proficiency: 85 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Team Collaboration', proficiency: 95 },
      { name: 'Communication', proficiency: 90 },
      { name: 'Problem-Solving', proficiency: 95 }
    ]
  }
];

const ProgressBar = ({ progress }: { progress: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
      />
    </div>
  );
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">{skill.name}</span>
            </div>
            <ProgressBar progress={skill.proficiency} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies,
            showcasing the depth and breadth of my expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-white rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Additional Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Version Control', 'Agile Methodologies', 'Code Review', 'Documentation'].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
