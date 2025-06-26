// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, ExternalLink } from 'lucide-react';
// import Amazon from './images/aws-certified-cloud-practitioner.png';


// const certifications = [
//   {
//     title: 'AWS Certified Solutions Architect',
//     organization: 'Amazon Web Services',
//     date: 'May 17, 2024',
//     expiry: 'May 17, 2027',
//     image: Amazon,
//     verifyLink: 'https://www.credly.com/badges/e9bd0b7a-dc2a-4250-9359-714e5d85f116/public_url'
//   },
//   {
//     title: 'Professional Cloud Developer',
//     organization: 'Google Cloud',
//     date: 'Mar 2023',
//     expiry: 'Mar 2026',
//     image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=400&h=300',
//     verifyLink: '#'
//   },
//   {
//     title: 'MongoDB Developer Certification',
//     organization: 'MongoDB University',
//     date: 'Jun 2023',
//     expiry: 'No Expiry',
//     image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=400&h=300',
//     verifyLink: '#'
//   }
// ];

// export default function Certifications() {
//   return (
//     <section id="certifications" className="min-h-screen py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           Certifications
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certifications.map((cert, index) => (
//             <motion.div
//               key={cert.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.2 }}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={cert.image}
//                   alt={cert.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
//                   <Award className="w-8 h-8 text-white" />
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
//                 <p className="text-blue-600 mb-4">{cert.organization}</p>
                
//                 <div className="space-y-2 text-sm text-gray-600 mb-4">
//                   <p>Issued: {cert.date}</p>
//                   <p>Expires: {cert.expiry}</p>
//                 </div>

//                 <motion.a
//                   href={cert.verifyLink}
//                   whileHover={{ scale: 1.05 }}
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <ExternalLink className="w-4 h-4" />
//                   Verify
//                 </motion.a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Amazon from './images/aws-certified-cloud-practitioner.png';
import Aviatrix from './images/multicloud-network-associate.png';
import RedHat from './images/red-hat-certified-enterprise-application-developer.png';
import Salesforce from './images/ai-associate.png';
import Microsoft from './images/Microsoft.png';


const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: 'May 17, 2024',
    expiry: 'May 17, 2027',
    image: Amazon,
    verifyLink: 'https://www.credly.com/badges/e9bd0b7a-dc2a-4250-9359-714e5d85f116/public_url'
  },
  {
    title: 'Multicloud Network Associate',
    organization: 'Aviatrix',
    date: 'September 28, 2024',
    expiry: 'September 28, 2027',
    image: Aviatrix,
    verifyLink: 'https://www.credly.com/badges/35529281-d0af-49e3-b263-acaf79b7d8f8/public_url'
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    organization: 'Red Hat',
    date: 'September 25, 2024',
    expiry: 'September 25, 2027',
    image: RedHat,
    verifyLink: 'https://www.credly.com/badges/0d8ea00c-59db-4e6e-a223-6500d4cec762/public_url'
  },
  {
    title: 'Salesforce Certified AI Associate',
    organization: 'Salesforce',
    date: 'October 20, 2024',
    expiry: 'No Expiry',
    image: Salesforce,
    verifyLink: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=3KCM4zNGj7FsPl0CEt6Ou8+yprKc7Ql7gZm+VNwvgw4od5Vt8sOtnbGRmvpaxOk9'
  },
  {
    title: 'Microsoft Azure - 900',
    organization: 'Microsoft',
    date: 'June 19, 2025',
    image: Microsoft
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 flex justify-center items-center bg-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-auto h-full object-contain" // Ensures the badge fits nicely
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-blue-600 mb-4">{cert.organization}</p>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>Issued: {cert.date}</p>
                  <p>Expires: {cert.expiry}</p>
                </div>

                <motion.a
                  href={cert.verifyLink}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
