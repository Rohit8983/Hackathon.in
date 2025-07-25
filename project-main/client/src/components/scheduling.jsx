import React, { useState } from 'react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1Schedule = [
    { time: '09:00 AM', event: 'Registration' },
    { time: '10:00 AM', event: 'Opening ceremony' },
    { time: '11:00 AM', event: 'Idea submission' },
    { time: '12:00 PM', event: 'Round-1: Design Phase' },
    { time: '02:00 PM', event: 'Lunch' },
    { time: '03:00 PM', event: 'Round-2: Development of core code' },
    { time: '09:00 PM', event: 'Dinner' },
    { time: '10:00 PM', event: 'Continuation Round-2' },
  ];

  const day2Schedule = [
    { time: '08:00 AM', event: 'Breakfast' },
    { time: '09:00 AM', event: 'Round-3: Finalizing Solution' },
    { time: '12:00 PM', event: 'Project Submission' },
    { time: '01:00 PM', event: 'Lunch' },
    { time: '02:00 PM', event: 'Final Presentations & Demos' },
    { time: '05:00 PM', event: 'Judging & Feedback' },
    { time: '06:00 PM', event: 'Closing Ceremony' },
    { time: '07:00 PM', event: 'Networking & Departure' },
  ];

  const scheduleToDisplay = activeDay === 1 ? day1Schedule : day2Schedule;

  return (
    <div style={{ backgroundColor: '#0c0624', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '40px' }}>
        <div
          onClick={() => setActiveDay(1)}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '24px',
            borderBottom: activeDay === 1 ? '2px solid #00d5ff' : 'none',
            color: activeDay === 1 ? '#00d5ff' : '#fff',
          }}
        >
          Day 1
          <div style={{ fontSize: '12px', color: '#bbb' }}>Sep 13, 2025</div>
        </div>
        <div
          onClick={() => setActiveDay(2)}
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '24px',
            borderBottom: activeDay === 2 ? '2px solid #00d5ff' : 'none',
            color: activeDay === 2 ? '#00d5ff' : '#fff',
          }}
        >
          Day 2
          <div style={{ fontSize: '12px', color: '#bbb' }}>Sep 14, 2025</div>
        </div>
      </div>

      <div
        style={{
          display: 'inline-block',
          border: '2px solid #9a00ff',
          borderRadius: '20px',
          overflow: 'hidden',
          width: '90%',
          maxWidth: '400px',
        }}
      >
        <table style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#0c0624', color: 'white' }}>
          <tbody>
            {scheduleToDisplay.map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #222' }}>
                <td style={{ color: '#00d5ff', padding: '10px', fontWeight: 'bold', width: '120px' }}>{item.time}</td>
                <td style={{ padding: '10px' }}>{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
