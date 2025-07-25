import React from 'react';
import aiImg from '../assets/AI.png';
import innovationImg from '../assets/innovation.png';
import web3Img from '../assets/web3.png';
import climateImg from '../assets/climate.png';
import ideathonImg from '../assets/ideathon.png';

const tracks = [
  {
    title: 'AI-Tech',
    img: aiImg,
    desc: 'Explore predictive models, neural networks, and real-time AI systems to revolutionize industries.',
  },
  {
    title: 'Open Innovation',
    img: innovationImg,
    desc: 'Collaborate on futuristic solutions across health, finance, education, and more — no limits, just ideas.',
  },
  {
    title: 'Cyber & Defense',
    img: web3Img,
    desc: 'Build secure digital infrastructures, combat cyber threats, and enhance digital sovereignty.',
  },
  {
    title: 'Healthcare Tech',
    img: climateImg,
    desc: 'Design solutions to improve diagnostics, digital health records, mental wellness, and accessibility.',
  },
  {
    title: 'Social Impact',
    img: ideathonImg,
    desc: 'Drive change through technology that uplifts communities, empowers voices, and builds for good.',
  },
];

const TracksSection = () => {
  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '60px 20px' }}>
      <div className="container text-center">
        <h2
          style={{
            color: '#d633ff',
            fontWeight: '900',
            fontSize: '2.5rem',
            marginBottom: '20px',
          }}
        >
          🧠 Tracks or Themes
        </h2>

        {/* First Row: 3 items */}
        <div className="d-flex justify-content-center flex-wrap gap-5 mt-5">
          {tracks.slice(0, 3).map((track, idx) => (
            <div
              key={idx}
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: '236px' }}
            >
              <img
                src={track.img}
                alt={track.title}
                style={{
                  width: '236px',
                  height: '168px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '10px',
                }}
              />
              <p
                style={{
                  color: '#00e6f6',
                  fontWeight: '1000',
                  fontFamily: 'Kyiv*Type Titling',
                  fontSize: '24px',
                  marginBottom: '6px',
                }}
              >
                {track.title}
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#cccccc',
                  fontFamily: 'Inter',
                  lineHeight: '1.4',
                }}
              >
                {track.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 items centered */}
        <div className="d-flex justify-content-center flex-wrap gap-5 mt-4">
          {tracks.slice(3).map((track, idx) => (
            <div
              key={idx}
              className="d-flex flex-column align-items-center"
              style={{ maxWidth: '236px' }}
            >
              <img
                src={track.img}
                alt={track.title}
                style={{
                  width: '236px',
                  height: '168px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  marginBottom: '10px',
                }}
              />
              <p
                style={{
                  color: '#00e6f6',
                  fontWeight: '1000',
                  fontFamily: 'Kyiv*Type Titling',
                  fontSize: '24px',
                  marginBottom: '6px',
                }}
              >
                {track.title}
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#cccccc',
                  fontFamily: 'Inter',
                  lineHeight: '1.4',
                }}
              >
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
