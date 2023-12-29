import React, { useState } from 'react';
import './menu.css';

const Menu = ({ onMenuSelect }) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    onMenuSelect(menu);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul>
        <li onClick={() => handleMenuClick('home')} className={activeMenu === 'home' ? 'active' : ''}>
          Home
        </li>
        <li onClick={() => handleMenuClick('listings')} className={activeMenu === 'listings' ? 'active' : ''}>
          Listings
        </li>
        <li onClick={() => handleMenuClick('profile')} className={activeMenu === 'profile' ? 'active' : ''}>
          Profile
        </li>
      </ul>
    </nav>
  );
};

export default Menu;