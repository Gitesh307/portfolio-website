import React from 'react';
import './Experience.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="title-box">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="experience-list">
        <div className="experience-item">
          <h2>Tata Consultancy Services (TCS), Pune, India</h2>
          <p className="exp-duration">System Engineer | July 2021 – Dec 2023</p>
          <ul>
            <li>Maintained the New Product Submission app and collaborated with stakeholders in an agile environment.</li>
            <li>Improved deployment speed by 40% by migrating from Ant to Maven and automating CI/CD pipelines with Jenkins & Spinnaker.</li>
            <li>Enhanced frontend performance and reduced response time by 27% through code optimization.</li>
            <li>Recognized with awards for team excellence and project coordination.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>Clark University, Worcester, MA</h2>
          <p className="exp-duration">Program Assistant & TA | Oct 2024 – Present</p>
          <ul>
            <li>Revamped the Data Science Program website with ReactJS, increasing visibility by 30%.</li>
            <li>Created detailed faculty, course, project, and alumni pages in collaboration with the program director.</li>
            <li>Helped 30+ students in coursework and setup during Teaching Assistant role.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h2>WeCan Initiative, Worcester, MA</h2>
          <p className="exp-duration">Web & App Developer | Nov 2024 – Present</p>
          <ul>
            <li>Built a Django-based website for QR-enabled recycling bin tracking with PostgreSQL integration.</li>
            <li>Led the design of a mobile app interface and collaborated with founders using agile methodology.</li>
            <li>Focused on sustainability and user accessibility in platform features.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
