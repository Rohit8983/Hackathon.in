import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const speakers = {
  technical: Array(5).fill({
    name: 'Vicky Ray',
    title: 'Founder & CEO',
    company: '@ Raynex',
    linkedin: '#',
  }),
  cxo: Array(2).fill({
    name: 'Vicky Ray',
    title: 'Founder & CEO',
    company: '@ Raynex',
    linkedin: '#',
  }),
};

const styles = {
  section: {
    backgroundColor: '#0b0020',
    padding: '60px 30px',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    color: '#d000ff',
    marginBottom: '40px',
    fontWeight: '800',
  },
  subTitle: {
    fontSize: '20px',
    color: '#ffffff',
    marginTop: '40px',
    marginBottom: '20px',
    fontWeight: '600',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  },
  card: {
    background: 'transparent',
    color: 'white',
    maxWidth: '150px',
    textAlign: 'center',
  },
  imagePlaceholder: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '2px solid #00f0ff',
    margin: '0 auto 10px',
  },
  company: {
    color: '#d000ff',
    fontSize: '14px',
  },
  linkedinIcon: {
    color: '#d000ff',
    fontSize: '20px',
    marginTop: '5px',
    display: 'inline-block',
  },
};

const SpeakerCard = ({ name, title, company, linkedin }) => (
  <div style={styles.card}>
    <div style={styles.imagePlaceholder}></div>
    <h4>{name}</h4>
    <p>{title}</p>
    <p style={styles.company}>{company}</p>
    <a href={linkedin} style={styles.linkedinIcon}><FaLinkedin /></a>
  </div>
);

const SpeakersSection = () => (
  <div style={styles.section}>
    <h2 style={styles.title}>OUR SPEAKERS</h2>
    <h3 style={styles.subTitle}>TECHNICAL SPEAKERS</h3>
    <div style={styles.grid}>
      {speakers.cxo.map((speaker, idx) => (
        <SpeakerCard key={`cxo-${idx}`} {...speaker} />
      ))}
    </div>
  </div>
);

export default SpeakersSection;
