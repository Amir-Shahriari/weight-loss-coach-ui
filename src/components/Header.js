import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">MyFitnessApp</div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/input" className="nav-link">Input Details</Link>
        <Link to="/recommendations" className="nav-link">Recommendations</Link>
      </nav>
    </header>
  );
};

export default Header;
