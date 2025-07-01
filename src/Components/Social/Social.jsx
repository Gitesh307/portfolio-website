import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react'

const Social = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Gitesh307',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/giteshvs/',
      icon: Linkedin,
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/giteshvs/',
      icon: Instagram,
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-50 dark:hover:bg-pink-900/20'
    }
  ]

  return (
    <section className="py-16 bg-alt">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Connect with Me
          </h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Let's stay connected! Follow me on social media for updates on my latest projects, 
            tech insights, and professional journey.
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-4 rounded-2xl bg-card border-default shadow-light dark:shadow-dark transition-all duration-300 ${social.bgColor}`}
                aria-label={`Visit my ${social.name} profile`}
              >
                <social.icon 
                  size={28} 
                  className={`text-secondary transition-colors duration-300 ${social.color}`} 
                />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                  </div>
                </div>

                {/* External link indicator */}
                <ExternalLink 
                  size={12} 
                  className="absolute -top-1 -right-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Social
