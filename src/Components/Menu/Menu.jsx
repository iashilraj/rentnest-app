import React, { useState } from 'react';
import './menu.css';

const Menu = ({ onMenuSelect }) => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    onMenuSelect(menu);
  };

  return (
    <nav className="menu">
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