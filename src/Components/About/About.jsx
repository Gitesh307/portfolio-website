import React from 'react'
import './About.css'
import { Fade } from 'react-awesome-reveal';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Gitesh_Pic.png'


const About = () => {
  return (
    <Fade direction="up" triggerOnce cascade damping={0.1}>
    <div id='about' className='about' initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm a Full Stack Software Engineer with a passion for solving real-world problems through code. My journey into tech began with a fascination for how digital products work behind the scenes, which led me to pursue a Bachelor's in Information Technology and later, a Master's in Computer Science at Clark University.</p>
                <p>Over the years, I’ve sharpened my skills by working across diverse environments, from contributing to scalable enterprise solutions at Tata Consultancy Services, to leading impactful university and community-driven projects in the U.S. At Clark, I redesigned the Data Science Program website, increasing visibility by 30%, and co-developed the WeCan recycling platform using Django and PostgreSQL, bringing sustainability into the digital space. Each role helped me grow not just technically, but also as a collaborator and problem-solver in agile teams.</p>
                <p>I take pride in building efficient, user-focused applications that scale, whether it's reducing deployment time by 40% or improving app performance by 27%.</p>
            </div>
            <div className="about-techstack">
  <h2>Tech Stack</h2>
  <ul>
    <li><strong>Languages & Frameworks:</strong> JavaScript, TypeScript, Java, Python, HTML, CSS, ReactJS, Node.js, Django, Spring Boot</li>
    <li><strong>Databases:</strong> PostgreSQL, MongoDB, SQL</li>
    <li><strong>Cloud & DevOps:</strong> AWS, Azure, Google Cloud (GCP Certified), Docker, Jenkins, Spinnaker, CI/CD pipelines</li>
    <li><strong>Other Tools:</strong> Salesforce (Apex, LWC), Postman, GitHub, JIRA, Agile SCRUM, REST APIs</li>
  </ul>
</div>

            {/* <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
            </div> */}
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>CERTIFICATIONS</p>
        </div>
      </div>
    </div>
    </Fade>
  )
}

export default About
