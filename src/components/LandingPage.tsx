import React from 'react';
import './LandingPage.css';

const seasons = [
  { name: 'spring', label: 'Spring' },
  { name: 'summer', label: 'Summer' },
  { name: 'autumn', label: 'Autumn' },
  { name: 'winter', label: 'Winter' },
];

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      {seasons.map((season) => (
        <div key={season.name} className={`season-section ${season.name}`}>
          <div 
            className="season-bg" 
            style={{ backgroundImage: `url(/assets/seasons/${season.name}.png)` }}
          />
          
          <div className="season-content">
            <h1>{season.label}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
