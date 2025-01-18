// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Input Details</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
