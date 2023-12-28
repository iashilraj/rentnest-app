import React, { useState, useEffect } from 'react';
import './footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      // Set the state to show/hide the footer based on scroll position
      setShowFooter(isAtBottom);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${showFooter ? 'show' : 'hide'}`}>
      <p>&copy; 2023 RentNest. All rights reserved.</p>
    </div>
  );
};

export default Footer;