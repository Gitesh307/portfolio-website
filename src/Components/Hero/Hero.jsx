import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-pic-2.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={profile_img} alt="" className='profile-img' /> */}
      <h5>Hello I'm</h5>
      <h1><span>Gitesh Sagvekar,</span> Software Engineer.</h1>
      <p>I’m a Full Stack Software Engineer with a strong focus on building scalable, high-impact digital solutions. I’ve improved app performance by 27%, reduced deployment time by 40%, and enhanced user engagement through front-end optimization and CI/CD integration. At Clark University, I led a 30% boost in program visibility by revamping the Data Science website using ReactJS. I also co-developed the WeCan platform to streamline recycling via QR-enabled tracking using Django and PostgreSQL. With hands-on experience across React, Node.js, AWS, and Django, I thrive in agile teams that value innovation and impact.</p>
      <div className="hero-action">
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
