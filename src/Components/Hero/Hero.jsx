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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary-500/15 to-primary-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <motion.div
                className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Main image */}
                <img
                  src={profile_img}
                  alt="Gitesh Sagvekar"
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl relative z-10"
                />
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 animate-spin-slow opacity-75 blur-sm"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400/30 via-accent-400/20 to-secondary-400/30 animate-pulse-glow"></div>
                
                {/* Floating particles effect */}
                <div className="absolute -inset-4">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-accent-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-8 left-4 w-1 h-1 bg-secondary-400 rounded-full animate-ping delay-700"></div>
                </div>
                
                {/* Inner highlight */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-200 dark:border-primary-800">
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
            <span className="font-semibold text-primary-600 dark:text-primary-400">3+ years of experience</span>.
            Specialized in React, Node.js, AWS, and modern web technologies.
            I've improved app performance by 27% and reduced deployment time by 31%.
          </motion.p>

          {/* Enhanced Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12"
          >
            {[
              { number: '3+', label: 'Years Experience', color: 'from-primary-500 to-primary-600' },
              { number: '5+', label: 'Projects Completed', color: 'from-accent-500 to-accent-600' },
              { number: '3+', label: 'Certifications', color: 'from-secondary-500 to-secondary-600' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:animate-pulse`}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
            
            <AnchorLink href="#contact" offset={50}>
              <motion.button 
                className="btn-secondary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={20} className="mr-2 group-hover:animate-pulse" />
                Get In Touch
              </motion.button>
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
                className="flex flex-col items-center text-gray-400 dark:text-gray-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 cursor-pointer"
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