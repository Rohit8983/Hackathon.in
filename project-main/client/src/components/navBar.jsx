import React from 'react';
import icon from '../assets/icon.png'; // Adjust the path if needed

const Navbar = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center px-4"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'transparent',
        padding: '10px 0',
        backdropFilter: 'blur(6px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Logo */}
      <a href="/" className="d-flex align-items-center">
        <img
          src={icon}
          alt="Hackathon Icon"
          style={{ width: '130px', height: '70px', objectFit: 'contain' }}
        />
      </a>

      {/* Nav Links */}
      <div className="d-flex gap-4 align-items-center flex-wrap">
        {[
          { label: 'HOME', href: '/' },
          { label: 'EVENT', href: '#tracks' },
          { label: 'ABOUT US', href: '#about' },
          { label: 'FAQ', href: '/faq' },
          { label: 'CONTACT US', href: '#contact' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-white text-decoration-none"
            style={{
              fontWeight: '500',
              fontSize: '14px',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.color = '#d000ff')}
            onMouseOut={(e) => (e.target.style.color = 'white')}
          >
            {item.label}
          </a>
        ))}

        {/* Register Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSczKT7aFylAlo-21qD-hOO6vWozfIh4hMMIPwl1E5LU_WbY7Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button
            style={{
              backgroundColor: '#d000ff',
              border: 'none',
              borderRadius: '20px',
              padding: '8px 16px',
              fontWeight: '600',
              color: '#0c0624',
              fontSize: '14px',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#b300e6')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#d000ff')}
          >
            Registration
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
