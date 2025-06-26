// import React from 'react';
// import { motion } from 'framer-motion';
// import { Download } from 'lucide-react';
// import ResumePDF from './images/2200032197_GnaneswarKotari.pdf'; // Import the local PDF file

// export default function Resume() {
//   return (
//     <section id="resume" className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-purple-50">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           Resume
//         </motion.h2>

//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-xl shadow-lg p-8"
//           >
//             <div className="aspect-[8.5/11] bg-gray-100 rounded-lg mb-8">
//               {/* Resume Preview Placeholder */}
//               <div className="h-full flex items-center justify-center text-gray-400">
//                 Resume Preview
//               </div>
//             </div>

//             <motion.a
//               href={ResumePDF} // Use the imported file as the download link
//               download="Resume.pdf" // Specify the downloaded file name
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               <Download className="w-5 h-5" />
//               Download Resume
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import ResumePDF from './images/2200032197-GnaneswarKotari.pdf'; // Import the local PDF file

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8"
        >
          Resume
        </motion.h2>

        <div className="max-w-4xl mx-auto text-center">
          {/* Resume Description */}
          <p className="text-lg text-gray-600 mb-6">
            Discover my professional journey and achievements! Click below to view or download my resume, which outlines my skills, experience, and education in detail.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="space-y-4">
              {/* View Resume Button */}
              <motion.a
                href={ResumePDF} // Use the imported file as the view link
                target="_blank" // Opens the PDF in a new tab
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </motion.a>

              {/* Gap Between Buttons */}
              <div className="h-4"></div>

              {/* Download Resume Button */}
              <motion.a
                href={ResumePDF} // Use the imported file as the download link
                download="Resume.pdf" // Specify the downloaded file name
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
