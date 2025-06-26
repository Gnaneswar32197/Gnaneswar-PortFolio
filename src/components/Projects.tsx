// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, ExternalLink, Folder, Star } from 'lucide-react';
// import { useInView } from 'react-intersection-observer';

// const projects = [
//   {
//     title: 'Indian Cultural Management System',
//     description: 'Developed a comprehensive platform to preserve and promote Indian heritage platform using React, Node.js, and MongoDB',
//     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
//     github: 'https://github.com/Gnaneswar32197/Indian-Cultural-Management',
//     demo: '#',
//     featured: true
//   },
//   {
//     title: 'Task Management App',
//     description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
//     image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&h=500',
//     technologies: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
//     github: '#',
//     demo: '#',
//     featured: true
//   },
//   {
//     title: 'Weather Dashboard',
//     description: 'A weather dashboard with interactive maps, detailed forecasts, and historical weather data visualization.',
//     image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&h=500',
//     technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
//     github: '#',
//     demo: '#',
//     featured: false
//   }
// ];

// const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
//     >
//       <div className="relative overflow-hidden aspect-video">
//         <motion.img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         {project.featured && (
//           <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-yellow-400 rounded-full">
//             <Star className="w-4 h-4" />
//             <span className="text-sm font-medium">Featured</span>
//           </div>
//         )}
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
//           {project.title}
//         </h3>
//         <p className="text-gray-600 mb-4 line-clamp-2">
//           {project.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mb-6">
//           {project.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>

//         <div className="flex gap-4">
//           <motion.a
//             href={project.github}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
//           >
//             <Github className="w-4 h-4" />
//             Code
//           </motion.a>
//           <motion.a
//             href={project.demo}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <ExternalLink className="w-4 h-4" />
//             Live Demo
//           </motion.a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default function Projects() {
//   const [selectedFilter, setSelectedFilter] = React.useState<'all' | 'featured'>('all');

//   const filteredProjects = selectedFilter === 'all' 
//     ? projects 
//     : projects.filter(p => p.featured);

//   return (
//     <section id="projects" className="min-h-screen py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Folder className="w-8 h-8 text-blue-600" />
//             <h2 className="text-4xl font-bold">Featured Projects</h2>
//           </div>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             A showcase of my best work, featuring full-stack applications, 
//             responsive web designs, and innovative solutions.
//           </p>
//         </motion.div>

//         <div className="flex justify-center gap-4 mb-12">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setSelectedFilter('all')}
//             className={`px-6 py-2 rounded-full ${
//               selectedFilter === 'all'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             } transition-colors`}
//           >
//             All Projects
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setSelectedFilter('featured')}
//             className={`px-6 py-2 rounded-full ${
//               selectedFilter === 'featured'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-white text-gray-700 hover:bg-gray-100'
//             } transition-colors`}
//           >
//             Featured
//           </motion.button>
//         </div>

//         <motion.div
//           layout
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredProjects.map((project, index) => (
//             <ProjectCard key={project.title} project={project} index={index} />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Importing local images
import pic1 from './images/indian.png';
import pic2 from './images/library.png';
// import pic3 from '../images/pic3.jpeg';
import pic3 from './images/StreamReview.png';

const projects = [
  {
    title: 'Indian Cultural Management System',
    description: 'Developed a comprehensive platform to preserve and promote Indian heritage platform using React, Node.js, and MongoDB.',
    image: pic1, // Local image path
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Gnaneswar32197/Indian-Cultural-Management',
    demo: 'https://indian-cultural.netlify.app/',
    featured: true
  },
  {
    title: 'Online Resource Library',
    description: 'A web-based platform that organizes and provides seamless access to educational resources, empowering students and educators with tools to search, manage, and collaborate for enhanced learning experiences.',
    image: pic2, // Local image path
    technologies: ['React', 'MySql', 'Tailwind CSS', 'SpringBoot'],
    github: 'https://github.com/Gnaneswar32197/SDP-PROJECT-S16-28',
    demo: 'https://online-resource-library.netlify.app/',
    featured: true
  },
  {
    title: 'Online Movie Review App',
    description: 'A dynamic web-based platform for sharing and exploring movie and TV show reviews. Users can submit reviews, rate movies, comment on others’ reviews, and discover content through personalized dashboards and advanced search features.',
    image: pic3, // Local image path
    technologies: ['React', 'MongoDB Cloud', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/Gnaneswar32197/MovieReviewApp_FrontEnd',
    github1: 'https://github.com/Gnaneswar32197/MovieReviewApp_Backend',
    demo: 'https://movie-review-app-front-end-livid.vercel.app/',
    featured: true
  },
  
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-yellow-400 rounded-full">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Featured</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = React.useState<'all' | 'featured'>('all');

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Folder className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my best work, featuring full-stack applications, 
            responsive web designs, and innovative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFilter('all')}
            className={`px-6 py-2 rounded-full ${
              selectedFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition-colors`}
          >
            All Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedFilter('featured')}
            className={`px-6 py-2 rounded-full ${
              selectedFilter === 'featured'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } transition-colors`}
          >
            Featured
          </motion.button>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
