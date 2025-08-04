import React from 'react';
import venueLogo from '../assets/iarelogo.png'; // Make sure this path is correct

const VenueSection = () => {
  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#00e6f6', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '30px' }}>
        📍 Venue
      </h2>

      <div className="d-flex flex-column align-items-center justify-content-center">
        <a
          href="https://www.google.com/maps/place/Institute+of+Aeronautical+Engineering/@17.599927,78.4177253,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8ecfe1af26dd:0x65666fa3c4a256d2!8m2!3d17.599927!4d78.4177253!16s%2Fg%2F11c3153d_b?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
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
          Institute of Aeronautical Engineering - IARE
        </h3>
        <p style={{ fontSize: '16px', color: '#cccccc', maxWidth: '500px' }}>
          A cutting-edge campus where technology takes flight — the Veltrixis Pvt.ltd offers the perfect launchpad for innovation, collaboration, and the ultimate Hackathon experience!"
        </p>
      </div>
    </div>
  );
};

export default VenueSection;
