import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navBar';
import AboutSection from '../components/AboutUs';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import backgroundImage from '../assets/image.png';
import TracksSection from '../components/TracksSection';
import PrizesRewardsSection from '../components/PrizeMoney';
import Judges from '../components/judges';
import Speaker from '../components/speaker';
import Scheduling from '../components/scheduling';
import Partners from '../components/partners';
import Footer from '../components/Fottor';
import VenueSection from '../components/VenueSection'; // ✅ Fixed path

const HackathonLandingPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-13T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          background: 'black',
          color: 'white',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          textAlign: 'center',
          paddingTop: '80px',
          position: 'relative'
        }}
      >
        <Navbar />

        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', lineHeight: '1.3' }}>
            BUILD.<br />BREAK.<br />INNOVATE<br />AT CODESURFERS 2025.
          </h1>
          <h4 className="text-info mt-4">
            Join us at the most awaited, Ultimate 36-Hour Hackathon Experience on the <br />13th - 14th of September.
          </h4>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button
              className="btn btn-outline-light px-4 py-2"
              onClick={() =>
                window.open(
                  'https://docs.google.com/forms/d/e/1FAIpQLSczKT7aFylAlo-21qD-hOO6vWozfIh4hMMIPwl1E5LU_WbY7Q/viewform'
                )
              }
              style={{
                backgroundColor: '#b04cff',
                borderRadius: '10px',
                fontWeight: 'bold'
              }}
            >
              Register Now
            </button>

            <button
              className="btn btn-outline-light px-4 py-2"
              style={{
                borderColor: '#b04cff',
                color: '#b04cff',
                borderRadius: '10px',
                fontWeight: 'bold'
              }}
            >
              Learn More
            </button>
          </div>

          <div className="d-flex justify-content-center gap-4 mt-5 fs-5 flex-wrap">
            <div>
              <div className="fs-3">{timeLeft.days}</div>
              Days
            </div>
            <div>
              <div className="fs-3">{String(timeLeft.hours).padStart(2, '0')}</div>
              Hours
            </div>
            <div>
              <div className="fs-3">{String(timeLeft.minutes).padStart(2, '0')}</div>
              Minutes
            </div>
            <div>
              <div className="fs-3">{String(timeLeft.seconds).padStart(2, '0')}</div>
              Seconds
            </div>
          </div>
        </div>
      </div>

      {/* Sections below the Hero */}
      <AboutSection />
      <VisionSection />
      <MissionSection />

      <div id="tracks" style={{ backgroundColor: '#0c0624', padding: '60px 20px' }}>
        <TracksSection />
      </div>

      <PrizesRewardsSection />
      <VenueSection /> {/* ✅ Venue section component */}
      <Judges />
      <Scheduling />
      <Partners />

      <div id="contact" style={{ height: '100px', backgroundColor: '#0c0624' }}>
        <Footer />
      </div>
    </>
  );
};

export default HackathonLandingPage;
