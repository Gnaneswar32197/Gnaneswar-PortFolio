// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, Linkedin, Send } from 'lucide-react';

// export default function Contact() {
//   const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus('sending');
    
//     // Simulate form submission
//     setTimeout(() => {
//       setFormStatus('success');
//       setTimeout(() => setFormStatus('idle'), 3000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="min-h-screen py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           Get in Touch
//         </motion.h2>

//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
//             <div className="space-y-6">
//               <motion.a
//                 href="mailto:2200032197cseh@gmail.com"
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
//               >
//                 <Mail className="w-6 h-6 text-blue-600" />
//                 <span>2200032197cseh@gmail.com</span>
//               </motion.a>

//               <motion.a
//                 href="tel:91+ 9063795154"
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
//               >
//                 <Phone className="w-6 h-6 text-blue-600" />
//                 <span>91+ 9063795154</span>
//               </motion.a>

//               <motion.a
//                 href="https://www.linkedin.com/in/gnaneswar-kotari-63325b246/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.05 }}
//                 className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
//               >
//                 <Linkedin className="w-6 h-6 text-blue-600" />
//                 <span>LinkedIn Profile</span>
//               </motion.a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   required
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
//                   formStatus === 'success'
//                     ? 'bg-green-600'
//                     : formStatus === 'error'
//                     ? 'bg-red-600'
//                     : 'bg-blue-600 hover:bg-blue-700'
//                 }`}
//                 disabled={formStatus === 'sending'}
//               >
//                 {formStatus === 'sending' ? (
//                   <>Sending...</>
//                 ) : formStatus === 'success' ? (
//                   <>Message Sent!</>
//                 ) : formStatus === 'error' ? (
//                   <>Error Sending</>
//                 ) : (
//                   <>
//                     <Send className="w-5 h-5" />
//                     Send Message
//                   </>
//                 )}
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    setFormStatus('sending');

    emailjs
      .sendForm(
        'service_20en2yc', // Replace with your EmailJS service ID
        'template_p8cgtxc', // Replace with your EmailJS template ID
        form,
        'I2KUbH2s1V_ANwIk1' // Replace with your EmailJS public user ID
      )
      .then(
        () => {
          setFormStatus('success');
          form.reset();
          setTimeout(() => setFormStatus('idle'), 3000);
        },
        () => {
          setFormStatus('error');
          setTimeout(() => setFormStatus('idle'), 3000);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.a
                href="mailto:2200032197cseh@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <Mail className="w-6 h-6 text-blue-600" />
                <span>2200032197cseh@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:91+ 9063795154"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <Phone className="w-6 h-6 text-blue-600" />
                <span>91+ 9063795154</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/gnaneswar-kotari-63325b246/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
                <span>LinkedIn Profile</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
                  formStatus === 'success'
                    ? 'bg-green-600'
                    : formStatus === 'error'
                    ? 'bg-red-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <>Sending...</>
                ) : formStatus === 'success' ? (
                  <>Message Sent!</>
                ) : formStatus === 'error' ? (
                  <>Error Sending</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
