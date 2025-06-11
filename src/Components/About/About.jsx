import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Zap } from 'lucide-react'
import profile_img from '../../assets/Gitesh_Pic.png'

const About = () => {
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

  const techCategories = [
    {
      icon: Code,
      title: "Frontend & Backend",
      skills: ["JavaScript", "TypeScript", "React.js", "Node.js", "Django", "Spring Boot"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Jenkins", "CI/CD"]
    },
    {
      icon: Zap,
      title: "Tools & Platforms",
      skills: ["Salesforce", "Postman", "GitHub", "JIRA", "REST APIs"]
    }
  ]

  const achievements = [
    { number: '3+', label: 'Years of Experience', color: 'text-primary-600' },
    { number: '5+', label: 'Projects Completed', color: 'text-accent-600' },
    { number: '3+', label: 'Certifications', color: 'text-primary-600' }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mt-4">
              Passionate about solving real-world problems through innovative code
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Image */}
            <motion.div variants={itemVariants} className="relative">
            <div className="relative mx-auto max-w-sm aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl lg:mx-0">
                <img
                  src={profile_img}
                  alt="Gitesh Sagvekar"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-500/10 to-accent-500/10"></div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Full Stack Software Engineer with a passion for solving real-world problems through code. 
                  My journey into tech began with a fascination for how digital products work behind the scenes, 
                  which led me to pursue a Bachelor's in Information Technology and later, a Master's in Computer Science at Clark University.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Over the years, I've sharpened my skills by working across diverse environments, from contributing to 
                  scalable enterprise solutions at Tata Consultancy Services, to leading impactful university and 
                  community-driven projects in the U.S.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I take pride in building efficient, user-focused applications that scale, whether it's reducing 
                  deployment time by 40% or improving app performance by 27%.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Tech Stack & Expertise
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg card-hover border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-3">
                      <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`text-4xl sm:text-5xl font-bold ${achievement.color} mb-2 group-hover:animate-pulse`}>
                    {achievement.number}
                  </div>
                  <div className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About