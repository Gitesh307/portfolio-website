import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import Certifications_Data from '../../assets/certifications_data'

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="certifications" className="py-20 lg:py-32">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mt-4">
              Professional certifications that validate my expertise in cloud technologies and development
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="space-y-8">
            {Certifications_Data.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-beige-200 dark:border-gray-700 overflow-hidden card-hover">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-beige-100 dark:bg-beige-900/30 text-beige-700 dark:text-beige-400 rounded-full text-sm font-bold">
                          {cert.c_no}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Certification
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-beige-700 dark:group-hover:text-beige-400 transition-colors duration-300">
                        {cert.c_name}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {cert.c_desc}
                      </p>
                      
                      <button
                        onClick={() => setModalImage(cert.c_img)}
                        className="inline-flex items-center text-beige-700 dark:text-beige-400 hover:text-beige-800 dark:hover:text-beige-300 font-medium transition-colors duration-200 group/btn"
                      >
                        View Certificate
                        <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>

                    {/* Image */}
                    <div className="relative">
                      <motion.img
                        src={cert.c_img}
                        alt={cert.c_name}
                        className="w-full h-64 lg:h-full object-cover rounded-xl shadow-lg cursor-pointer"
                        onClick={() => setModalImage(cert.c_img)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Certificate"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications