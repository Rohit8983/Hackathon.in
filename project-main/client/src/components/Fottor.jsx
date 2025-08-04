import React from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#002c4b',
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
        padding: '60px 20px 30px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* Left: Info */}
        <div style={{ flex: '1 1 400px' }}>
          <h3
            style={{
              color: '#d000ff',
              fontWeight: '700',
              fontSize: '20px',
              borderBottom: '2px solid #d000ff',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            Velrixs Pvt.ltd
          </h3>
          <p style={{ color: '#ffffffcc', lineHeight: '1.6', fontSize: '16px' }}>
            "Where Tech Meets Purpose."
            Dive into a high-energy challenge to solve society’s toughest issues using cutting-edge tools — from AI to blockchain, IoT to data science.
            It’s more than a hackathon — it’s your launchpad to make change real.
          </p>
          <div style={{ marginTop: '24px', display: 'flex', gap: '20px' }}>
            <a href="https://www.instagram.com/veltrixis_pvt_ltd?igsh=MWJ0emhkNGdneGpuaA==" style={{ color: '#00e6f6', fontSize: '20px' }}><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/veltrixis-pvtltd-278157377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{ color: '#00e6f6', fontSize: '20px' }}><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right: Contact */}
        <div style={{ flex: '1 1 400px' }}>
          <h3
            style={{
              color: '#d000ff',
              fontWeight: '700',
              fontSize: '20px',
              borderBottom: '2px solid #d000ff',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            Contact Us
          </h3>

          {/* Address */}
          <p style={{ display: 'flex', alignItems: 'start', color: '#ffffffcc', fontSize: '16px', lineHeight: '1.6' }}>
            <HiOutlineLocationMarker style={{ marginRight: '10px', color: '#d000ff', fontSize: '20px' }} />
            Institute of Aeronautical Engineering, Dundigal Road, Dundigal, Hyderabad, Telangana 500043
          </p>

          {/* Phone numbers */}
          <p style={{ color: '#ffffffcc', marginLeft: '30px', marginTop: '10px' }}>
            📞 Bootham (+91 93935-11259)
          </p>
          <p style={{ color: '#ffffffcc', marginLeft: '30px' }}>
            📞 Ch. Sai Raj (+91 79950-45146)
          </p>

          {/* Email */}
          <p style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <HiOutlineMail style={{ marginRight: '10px', color: '#d000ff', fontSize: '20px' }} />
            <a href="mailto:veltrixispvt.ltd@gmail.com" style={{ color: '#00e6f6', textDecoration: 'none' }}>
              veltrixispvt.ltd@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #d000ff', margin: '40px auto 20px', maxWidth: '1200px' }}></div>

      {/* Footer Bottom */}
      <div style={{ textAlign: 'center', color: '#ffffffcc', fontSize: '14px' }}>
        © 2025 Veltrixis
        <div style={{ color: '#d000ff', fontStyle: 'italic', marginTop: '4px' }}>
          "Next-Gen Tech. Real-World Impact."
        </div>
      </div>
    </footer>
  );
};

export default Footer;
