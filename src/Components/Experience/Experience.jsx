import React from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
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

  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)",
      position: "System Engineer",
      duration: "July 2021 – Dec 2023",
      location: "Pune, India",
      type: "Full-time",
      achievements: [
        "Maintained the New Product Submission app and collaborated with stakeholders in an agile environment",
        "Improved deployment speed by 40% by migrating from Ant to Maven and automating CI/CD pipelines with Jenkins & Spinnaker",
        "Enhanced frontend performance and reduced response time by 27% through code optimization",
        "Recognized with awards for team excellence and project coordination"
      ],
      color: "primary"
    },
    {
      company: "Clark University",
      position: "Program Assistant & TA",
      duration: "Oct 2024 – Present",
      location: "Worcester, MA",
      type: "Part-time",
      achievements: [
        "Revamped the Data Science Program website with ReactJS, increasing visibility by 30%",
        "Created detailed faculty, course, project, and alumni pages in collaboration with the program director",
        "Helped 30+ students in coursework and setup during Teaching Assistant role"
      ],
      color: "accent"
    },
    {
      company: "WeCan Initiative",
      position: "Web & App Developer",
      duration: "Nov 2024 – Present",
      location: "Worcester, MA",
      type: "Contract",
      achievements: [
        "Built a Django-based website for QR-enabled recycling bin tracking with PostgreSQL integration",
        "Led the design of a mobile app interface and collaborated with founders using agile methodology",
        "Focused on sustainability and user accessibility in platform features"
      ],
      color: "primary"
    }
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mt-4">
              My professional journey building scalable solutions and leading impactful projects
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform lg:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-primary-500 rounded-full transform lg:-translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <motion.div
                      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 card-hover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <Building className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.company}
                          </h3>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                          {exp.position}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Full-time' 
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : exp.type === 'Part-time'
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience