import React from 'react';
import missionImage from '../assets/Missionimg.png'; // Replace with your correct path

const MissionSection = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      {/* Left Side - Image */}
      <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
        <img
          src={missionImage}
          alt="Mission"
          style={{
            width: '80%',
            maxWidth: '400px',
            borderRadius: '20px',
            backgroundColor: '#041425',
            padding: '20px',
          }}
        />
      </div>

      {/* Right Side - Text */}
      <div style={{ flex: '1 1 500px', padding: '20px', maxWidth: '600px' }}>
        <h2 style={{ color: '#d000ff', fontWeight: 'bold', fontSize: '2.5rem' }}>
          Our Mission
        </h2>
        <div
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#d000ff',
            margin: '10px 0 20px 0',
            borderRadius: '5px',
          }}
        ></div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          We are on a mission to harness the power of AI-Tech and New Techonolgy expertise to build 
          impact-driven solutions that address society’s most pressing challenges.
        </p>

        <div
          style={{
            backgroundColor: '#003b65',
            borderRadius: '10px',
            padding: '15px 20px',
            marginTop: '20px',
            color: '#f4edf6ff',
            fontWeight: '600',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            fontStyle: 'italic',
          }}
        >
         "Just as the ocean’s waves move with purpose, 
         we strive to be the current behind transformative ideas — pushing purpose forward with technology."
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
