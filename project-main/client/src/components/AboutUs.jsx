import React from 'react';
import aiImage from '../assets/Aboutimg.png'; // Ensure AI.png is in src/assets/

const AboutSection = () => {
  return (
    <div
      id="about"
      style={{
        backgroundColor: '#0c0624',
        color: 'white',
        padding: '80px 20px',
        fontFamily: '"Inter", sans-serif', // 👈 Use the new font here
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* Left: Text Content */}
        <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
          <h2
            style={{
              color: '#d633ff',
              fontWeight: '900',
              fontSize: '2.5rem', // Slightly smaller for better flow
              marginBottom: '20px',
              display: 'inline-block',
              borderBottom: '4px solid #d633ff',
            }}
          >
            About Us
          </h2>

          <p
            style={{
              color: '#00e6f6',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '1.8',
              marginBottom: '24px',
            }}
          >
            CodeSurfers 2025 is a 36-hour in-person hackathon organized by Veltrixis, bringing together coders, designers, tech enthusiasts, and innovators from across the country to create groundbreaking technology solutions that shape the future.
           <br></br>Our mission is to cultivate a thriving ecosystem of innovation by empowering individuals of all skill levels to collaborate, experiment, and build impactful prototypes that address real-world challenges.

            <br></br>Through live mentorship, interactive workshops, and exciting on-site mini challenges, participants will gain hands-on experience, build strong networks, and explore pathways to take their ideas to the next level.
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              fontWeight: '400',
              color: '#f0f0f0',
            }}
          >
            "CodeSurfers 2025" empowers future-focused innovators to design inclusive, scalable, and forward-thinking tech solutions. In a high-energy in-person setting, 
            participants will collaborate using cutting-edge tools, tackling pressing problems with creativity and purpose. 
            The event is designed to be beginner-friendly, expert-driven, and deeply impact-focused — turning ideas into ventures that can thrive beyond the hackathon.
          </p>

          <div style={{ marginTop: '30px' }}>
            <button
              style={{
                padding: '12px 24px',
                backgroundColor: '#2c1a40',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '16px',
                fontFamily: '"Inter", sans-serif',
                cursor: 'pointer',
              }}
            >
              Read more
            </button>
          </div>
        </div>

        {/* Right: AI Image */}
        <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
          <img
            src={aiImage}
            alt="AI themed visual"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
