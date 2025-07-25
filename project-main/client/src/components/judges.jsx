import React from 'react';

// Example image imports (replace with actual paths in your assets)
import pratheesha from '../organizers/prathibha.png';
import ritwik from '../organizers/rikky.png';
import jeshma from '../organizers/jashitha.png';
import manideep from '../organizers/CHMANIDEEP.png';
import gunadeep from '../organizers/gunadheep.png';
import bhagyaraj from '../organizers/SHIVADITYARAJESHGANGONE.png';
import rohit from '../organizers/rohit.png';
import spurthi from '../organizers/SRIKARICHAKINAM.png';
import rajeshwar from '../organizers/eshwer.png';
import sandeep from '../organizers/SANDEEP.png';
import yamini from '../organizers/YAMINI.png';
import tanish from '../organizers/San.png';

const teamData = {
  coreMembers: [
    { name: 'V. Prathibha Reddy', role: 'Organiser', image: pratheesha },
    { name: 'S.Rithwik Pranash Reddy', role: 'Co-Organiser', image: ritwik },
  ],
  teamMembers: [
    { name: 'Jishitha Reddy Kesari', role: 'CR/PR Head', image: jeshma },
    { name: 'Ch Manideep', role: 'Digital Marketer Head', image: manideep },
    { name: 'M. Sai Eshwar', role: 'Markating Manager Head', image: rajeshwar },
    { name: 'SHIVADITYA RAJESH GANGONE ', role: 'Logistics Head', image: bhagyaraj },
    { name: 'P. Rohit', role: 'Tech Lead', image: rohit },
    { name: 'SRIKARI CHAKINAM ', role: 'Content Writer', image: spurthi },
    { name: 'Sandeep', role: 'PR Coordinator & Media Team', image: sandeep },
    { name: 'Sannutha', role: 'Hospitality Head', image: tanish },
  ]
};

const TeamCard = ({ person }) => (
  <div className="col-6 col-md-3 mb-4 d-flex justify-content-center">
    <div
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #7929ec',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        width: '100%',
        maxWidth: '180px',
      }}
    >
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '2px solid #7929ec',
          margin: '0 auto 10px',
          overflow: 'hidden',
          backgroundColor: '#222',
        }}
      >
        <img
          src={person.image}
          alt={person.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'rgba(13, 5, 33, 1)' }}
        />
      </div>
      <div style={{ color: '#ffffff', fontWeight: 'bold' }}>{person.name}</div>
      <div style={{ color: '#bbbbbb', fontSize: '0.9rem' }}>{person.role}</div>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '60px 20px' }}>
      <div className="container text-center">

        <h2 style={{ color: '#d633ff', fontWeight: '900', fontSize: '48px', marginBottom: '30px' }}>
          MEET OUR TEAM
        </h2>

        <h3 style={{ color: '#f946ff', fontWeight: '700', marginBottom: '20px' }}>CORE MEMBERS</h3>
        <div className="row justify-content-center mb-5" style={{fontFamily: 'Kufam'}}>
          {teamData.coreMembers.map((person, idx) => (
            <TeamCard key={`core-${idx}`} person={person} />
          ))}
        </div>

        <h3 style={{ color: '#f946ff', fontWeight: '700', marginBottom: '20px' }}>TEAM MEMBERS</h3>
        <div className="row justify-content-center" style={{ fontFamily: 'Kufam' }}>
          {teamData.teamMembers.map((person, idx) => (
            <TeamCard key={`team-${idx}`} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
