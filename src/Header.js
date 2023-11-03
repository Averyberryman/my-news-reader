import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button className="home-button" onClick={() => navigate('/')}>
        Home
      </button>
      <h1 className="header-title">World News Today</h1>
    </header>
  );
};

export default Header;
