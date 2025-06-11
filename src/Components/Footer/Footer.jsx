import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import logo from '../../assets/GITESH_icon_logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={logo} alt="Gitesh Sagvekar" className="h-12 w-auto mb-6" />
                <p className="text-gray-300 leading-relaxed mb-6">
                  Full Stack Software Engineer passionate about building scalable, 
                  high-impact digital solutions. Let's create something amazing together.
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>Made with</span>
                  <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
                  <span>and lots of ☕</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                <nav className="space-y-3">
                  {[
                    { name: 'Home', href: '#home' },
                    { name: 'About', href: '#about' },
                    { name: 'Certifications', href: '#certifications' },
                    { name: 'Experience', href: '#experience' },
                    { name: 'Contact', href: '#contact' }
                  ].map((link) => (
                    <AnchorLink
                      key={link.name}
                      href={link.href}
                      offset={50}
                      className="block text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </AnchorLink>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:giteshsagvekar07@gmail.com"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    giteshsagvekar07@gmail.com
                  </a>
                  <a
                    href="tel:+17745198635"
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    +1 774-519-8635
                  </a>
                  <p className="text-gray-300">
                    Massachusetts, United States
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Gitesh Sagvekar. All rights reserved.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex space-x-4 text-sm text-gray-400"
              >
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms of Service</span>
              </motion.div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer