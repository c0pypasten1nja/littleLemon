import React, { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navigation-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a aria-label="On Click" href="/">Home</a></li>
        <li><a aria-label="On Click" href="#about">About</a></li>
        <li><a aria-label="On Click" href="#menu">Menu</a></li>
        <li><a aria-label="On Click" href="/reservation">Reservations</a></li>
        <li><a aria-label="On Click" href="#">Order Online</a></li>
        <li><a aria-label="On Click" href="#">Login</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;

