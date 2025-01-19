// HomePage.js: Welcome page for the application

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="welcome-title">Welcome to MyFitnessApp</h1>
      <p className="welcome-message">Your personalized guide to fitness and health.</p>
      <p className="instructions">Navigate to the Input Page to get started on your fitness journey!</p>
    </div>
  );
};

export default HomePage;
