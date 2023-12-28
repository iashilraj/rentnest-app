import React from 'react';
import HomePage from './Home/home';

const ContentArea = ({ activeMenu }) => {
  return (
    <div className="content-area">
      {activeMenu === 'home' && <HomeContent />}
      {activeMenu === 'listings' && <ListingsContent />}
      {activeMenu === 'profile' && <ProfileContent />}
    </div>
  );
};

const HomeContent = () => (
  <div>
   <HomePage />
  </div>
);

const ListingsContent = () => (
  <div>
    <h2>Listings</h2>
    <p>This is the listings content area.</p>
  </div>
);

const ProfileContent = () => (
  <div>
    <h2>Profile</h2>
    <p>This is the profile content area.</p>
  </div>
);

export default ContentArea;