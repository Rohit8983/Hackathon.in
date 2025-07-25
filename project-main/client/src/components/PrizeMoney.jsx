import React from 'react';
import Prize1 from '../assets/prize1.png'; 
import Prize2 from '../assets/prize2.png';
import Prize3 from '../assets/prize3.png'; 

const prizes = [
  { position: '1st Prize', amount: '₹30,000', image: Prize1, gift: '+ Exclusive Swag & Goodies 🎁' },
  { position: '2nd Prize', amount: '₹20,000', image: Prize2, gift: '+ Gift Hampers 🎉' },
  { position: '3rd Prize', amount: '₹10,000', image: Prize3, gift: '+ Surprise Tech Goodies 🎮' },
];

const PrizesRewardsSection = () => {
  return (
    <div
      style={{
        backgroundColor: '#0c0624',
        color: 'white',
        padding: '80px 40px', // Increased horizontal padding
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          color: '#d633ff',
          fontWeight: '900',
          fontSize: '2.5rem',
          marginBottom: '40px',
        }}
      >
        🏆 Prizes & Rewards
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px', // More spacing between cards
        }}
      >
        {prizes.map((prize, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              color: '#0c0624',
              padding: '24px',
              borderRadius: '16px',
              width: '240px', // Slightly wider for better layout
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            <img
              src={prize.image}
              alt={prize.position}
              style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain',
                marginBottom: '16px',
              }}
            />
            <h4 style={{ fontWeight: '700', marginBottom: '10px' }}>{prize.position}</h4>
            <p
              style={{
                backgroundColor: '#d633ff',
                color: 'white',
                borderRadius: '6px',
                padding: '8px 14px',
                fontWeight: '600',
                display: 'inline-block',
                fontSize: '1rem',
              }}
            >
              {prize.amount}
            </p>
            <p
              style={{
                marginTop: '14px',
                fontSize: '0.92rem',
                color: '#5a189a',
                fontWeight: '500',
              }}
            >
              {prize.gift}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizesRewardsSection;
