import React from 'react';
import venueLogo from '../assets/ramoji.png'; // Make sure this path is correct

const VenueSection = () => {
  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#00e6f6', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '30px' }}>
        📍 Venue
      </h2>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <a
          href="https://www.google.com/maps/place/Ramoji+Film+City/@17.2542051,78.6822498,17z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={venueLogo}
            alt="Ramoji Film City Logo"
            style={{
              maxWidth: '240px',
              marginBottom: '20px',
              borderRadius: '12px',
              background: 'white',
              padding: '10px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </a>

        <h3 style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#d633ff' }}>
          Ramoji Film City
        </h3>
        <p style={{ fontSize: '16px', color: '#cccccc', maxWidth: '500px' }}>
          One of the world’s largest integrated film cities, blending innovation, culture, and cinematic grandeur — an ideal destination for the ultimate tech showdown!
        </p>
      </div>
    </div>
  );
};

export default VenueSection;
