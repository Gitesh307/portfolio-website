import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import profile_img from '../../assets/Gitesh_Pic.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/GiteshSagvekarResume.pdf'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-beige-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-beige-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={profile_img}
                alt="Gitesh Sagvekar"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-beige-200 dark:border-gray-700 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-beige-300/20 to-gray-300/20 animate-glow"></div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-beige-100 dark:bg-gray-800 text-beige-800 dark:text-beige-200 text-sm font-medium border border-beige-200 dark:border-gray-700">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance"
          >
            <span className="gradient-text">Gitesh Sagvekar</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
          >
            Full Stack Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed text-balance"
          >
            I build scalable, high-impact digital solutions with{' '}
            <span className="font-semibold text-beige-700 dark:text-beige-400">3+ years of experience</span>.
            Specialized in React, Node.js, AWS, and modern web technologies.
            I've improved app performance by 27% and reduced deployment time by 31%.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '5+', label: 'Projects Completed' },
              { number: '3+', label: 'Certifications' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
            
            <AnchorLink href="#contact" offset={50}>
              <button className="btn-secondary group">
                <Mail size={20} className="mr-2 group-hover:animate-pulse" />
                Get In Touch
              </button>
            </AnchorLink>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <AnchorLink href="#about" offset={50}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-gray-400 dark:text-gray-600 hover:text-beige-600 dark:hover:text-beige-400 transition-colors duration-300 cursor-pointer"
              >
                <span className="text-sm font-medium mb-2">Scroll to explore</span>
                <ArrowDown size={20} />
              </motion.div>
            </AnchorLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero