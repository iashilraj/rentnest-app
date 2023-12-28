import React from 'react';
import HeaderComponent from './Components/Header/HeaderComponent';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import ContentArea from './Components/ContentArea/ContentArea';
import './styles.css';

import { useState } from 'react';

function App() {
    const [activeMenu, setActiveMenu] = useState('home');
  
    const handleMenuSelect = (menu) => {
      setActiveMenu(menu);
    };
  
    return (
      <div className="App">
        <HeaderComponent />
        <Menu onMenuSelect={handleMenuSelect} />
        <ContentArea activeMenu={activeMenu} />
        <Footer />
      </div>
    );
  }
  
  export default App;