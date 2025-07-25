import React from 'react';
import visionImg from '../assets/Visionimg.png'; // Make sure this is the image you uploaded

const VisionSection = () => {
  return (
    <div style={{ backgroundColor: '#000', padding: '80px 20px', color: 'white' }}>
      <div
        className="container d-flex flex-column flex-lg-row align-items-center justify-content-between"
        style={{ gap: '40px', maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Text Content */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: '#d633ff',
              fontSize: '40px',
              fontWeight: 'bold',
              borderBottom: '4px solid #d633ff',
              display: 'inline-block',
              paddingBottom: '8px',
            }}
          >
            Our Vision
          </h2>
          <p style={{ fontSize: '18px', marginTop: '20px', color: '#cfcfcf' }}>
            We provide the technology, education, connections, and solutions that help 
            changemakers navigate their journey — so they can focus on what they do best:
          </p>
          <div
            style={{
              marginTop: '20px',
              padding: '16px 24px',
              backgroundColor: '#003366',
              borderRadius: '8px',
              fontStyle: 'italic',
              fontWeight: '600',
              fontSize: '18px',
              maxWidth: '550px',
            }}
          >
            "Empowering changemakers. Creating ripples. Making waves."
          </div>
        </div>

        {/* Image */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img
            src={visionImg}
            alt="Vision Illustration"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '20px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
