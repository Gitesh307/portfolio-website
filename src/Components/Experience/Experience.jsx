import React from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
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
      company: "Edkonnect",
      position: "Full Stack Developer (Part-time)",
      duration: "Dec 2025 – Present",
      location: "Remote",
      type: "Part-time",
      achievements: [
        "Built a full-stack tutoring marketplace using React and a TypeScript backend (Express, tRPC, Drizzle, MySQL), supporting multi-role workflows",
        "Designed secure backend architecture with JWT authentication, refresh-token rotation, email verification, and role-based access control",
        "Implemented Stripe-powered billing flows for subscriptions, installments, and payments with webhook-based reconciliation",
        "Developed scalable backend systems handling scheduling, messaging, and real-world user workflows"
      ]
    },
    {
      company: "Amgen",
      position: "Full Stack Engineer",
      duration: "Jan 2025 – Nov 2025",
      location: "USA (Remote)",
      type: "Contract",
      achievements: [
        "Built and optimized high-volume REST APIs in Java, improving response time and supporting production-scale traffic across enterprise healthcare systems",
        "Developed scalable Spring Boot microservices following SOLID principles, enabling modular and maintainable backend architecture",
        "Designed backend services for healthcare workflows, translating complex business and regulatory requirements into secure, production-ready systems",
        "Developed Python-based automation and validation services, improving processing reliability and reducing manual effort",
        "Implemented data transformation pipelines in Python, reducing inconsistencies across distributed systems by ~30%",
        "Managed AWS infrastructure (EC2, S3, ELB, CloudFront) to support scalable deployments and high availability"
      ]
    },
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
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 bg-alt">
      <div className="container-custom section-padding">
        <div>
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mt-4">
              My professional journey building scalable solutions and leading impactful projects
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600 dark:from-accent-500 dark:to-accent-400 transform lg:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.position}-${exp.duration}`}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-white dark:bg-gray-950 border-4 border-primary-500 dark:border-accent-500 rounded-full transform lg:-translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                    <motion.div
                      className="bg-card p-8 rounded-2xl shadow-light dark:shadow-dark card-hover border-default"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <Building className="w-5 h-5 text-accent mr-2" />
                          <h3 className="text-xl font-bold text-primary">
                            {exp.company}
                          </h3>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-accent mb-3">
                          {exp.position}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-secondary">
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
                            <div className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-secondary leading-relaxed">
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
        </div>
      </div>
    </section>
  )
}

export default Experience
