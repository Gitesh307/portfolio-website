import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Globe, Eye } from 'lucide-react'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

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

  const projects = [
    {
      id: 0,
      title: "WeCan — Smart Waste Management System",
      description: "Built using Django, PostgreSQL, and JavaScript. Enables users to scan QR-coded trash bins, schedule pickups, and track recycling. Integrated a chatbot for FAQs and used ML for user behavior insights.",
      image: "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://wecan-4520.onrender.com/",
      githubUrl: "https://github.com/Gitesh307/WeCan",
      technologies: ["Django", "PostgreSQL", "JavaScript", "HTML/CSS", "Machine Learning"],
      category: "Full Stack"
    },
    {
      id: 1,
      title: "Clark DS Program Website",
      description: "Redesigned the official Clark Data Science site using React. Showcased faculty, course info, and student projects with improved UI/UX and mobile responsiveness.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "http://www.cs.clarku.edu/~data-science/",
      githubUrl: "https://github.com/Gitesh307/data-science",
      technologies: ["ReactJS", "JavaScript", "CSS", "Responsive Design"],
      category: "Frontend"
    },
    {
      id: 2,
      title: "BarberShop Appointment Website",
      description: "A full-stack appointment scheduler built with React and Node.js. Users can book slots, manage appointments, and view services with real-time feedback.",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://barber-house.onrender.com/",
      githubUrl: "https://github.com/Gitesh307/barber-house",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Real-time"],
      category: "Full Stack"
    },
    {
      id: 3,
      title: "ASL-Based Desktop Controller",
      description: "Computer Vision-based project to control desktop actions using American Sign Language (ASL) gestures. Implemented using OpenCV and MediaPipe for gesture recognition.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://asl-desktop-control-demo.com",
      githubUrl: "https://github.com/Gitesh307/asl-desktop-controller",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      category: "AI/ML"
    }
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack':
        return <Database className="w-4 h-4" />
      case 'Frontend':
        return <Globe className="w-4 h-4" />
      case 'AI/ML':
        return <Eye className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-black">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle mt-4">
              A showcase of my recent work spanning full-stack development, AI/ML, and modern web technologies
            </p>
          </motion.div>

          {/* Project Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-4 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                    activeProject === index
                      ? 'text-white bg-primary-500 dark:bg-accent-600 shadow-lg'
                      : 'text-secondary bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(project.category)}
                    <span className="hidden sm:inline">{project.title.split(' —')[0]}</span>
                    <span className="sm:hidden">{project.title.split(' ')[0]}</span>
                  </div>
                  {activeProject === index && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-primary-500 dark:bg-accent-600 rounded-xl -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Project Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl shadow-light dark:shadow-dark border-default overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative group overflow-hidden">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-dark-800/90 text-gray-900 dark:text-dark-50">
                      {projects[activeProject].category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Title and Links */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                        {projects[activeProject].title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        <motion.a
                          href={projects[activeProject].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-4 py-2 bg-primary-500 dark:bg-accent-600 text-white rounded-lg font-medium text-sm hover:bg-primary-600 dark:hover:bg-accent-500 transition-colors duration-200"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Visit Project
                        </motion.a>
                        
                        <motion.a
                          href={projects[activeProject].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-dark-50 rounded-lg font-medium text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <Github size={16} className="mr-2" />
                          GitHub
                        </motion.a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary leading-relaxed text-lg">
                      {projects[activeProject].description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-dark-300 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Navigation Dots */}
          <motion.div variants={itemVariants} className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-primary-500 dark:bg-accent-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
