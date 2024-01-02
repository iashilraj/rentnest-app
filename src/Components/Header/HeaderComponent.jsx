import React from 'react';
//import './Header.css';

const Header = () => {
  const handleReload = () => {
    window.location.reload();
  };  
  return (
    <header className="header">
      <a href="#" onClick={handleReload}><img src="https://i.imgur.com/IoGsmhr.png"></img></a>
      
    </header>
  );
};

export default Header;