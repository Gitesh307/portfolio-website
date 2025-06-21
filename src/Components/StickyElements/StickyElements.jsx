import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const StickyElements = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Gitesh307',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/giteshsagvekar',
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/gitesh_sagvekar',
      icon: Instagram,
      color: 'hover:text-pink-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const emailVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8
      }
    }
  }

  return (
    <>
      {/* Left Sticky Social Icons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4"
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            variants={itemVariants}
            className="group relative"
          >
            <motion.a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`block p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 ${social.color}`}
              aria-label={`Visit my ${social.name} profile`}
            >
              <social.icon size={20} className="text-gray-600 dark:text-gray-400 transition-colors duration-300" />
            </motion.a>

            {/* Tooltip */}
            <div className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                {social.name}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900 dark:border-r-gray-100"></div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Decorative line below icons */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-px h-20 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mx-auto"
        />
      </motion.div>

      {/* Right Sticky Email */}
      <motion.div
        variants={emailVariants}
        initial="hidden"
        animate="visible"
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      >
        <div className="flex flex-col items-center space-y-6">
          {/* Decorative line above email */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-px h-20 bg-gradient-to-t from-gray-300 to-transparent dark:from-gray-600"
          />

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            className="group relative"
          >
            <a
              href="mailto:giteshsagvekar07@gmail.com"
              className="block p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:text-primary-600 dark:hover:text-accent-400"
              aria-label="Send me an email"
            >
              <div className="flex items-center">
                <Mail size={18} className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors duration-300 mr-3" />
                <div 
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors duration-300"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                >
                  giteshsagvekar07@gmail.com
                </div>
              </div>
            </a>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                Send Email
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900 dark:border-l-gray-100"></div>
              </div>
            </div>
          </motion.div>

          {/* Decorative line below email */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-px h-20 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"
          />
        </div>
      </motion.div>
    </>
  )
}

export default StickyElements