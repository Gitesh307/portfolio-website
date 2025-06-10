import React, { useState } from 'react';
import './Certifications.css';
import { Fade } from 'react-awesome-reveal';
import theme_pattern from '../../assets/theme_pattern.svg';
import Certifications_Data from '../../assets/certifications_data';

const Certifications = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <Fade direction="up" triggerOnce cascade damping={0.1}>
    <div id='certifications' className='certifications'>
      <div className="title-box">
        <h1>Certifications</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="certifications-container">
        {Certifications_Data.map((cert, index) => (
          <div key={index} className='certification-item'>
            <div className="cert-info">
              <h3>{cert.c_no}</h3>
              <h2>{cert.c_name}</h2>
              <p>{cert.c_desc}</p>
            </div>
            <div className="cert-img">
              <img 
                src={cert.c_img} 
                alt={cert.c_name}
                onClick={() => setModalImage(cert.c_img)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal-backdrop" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Certification Zoom" className="modal-image" />
        </div>
      )}
    </div>
    </Fade>
  );
};

export default Certifications;
