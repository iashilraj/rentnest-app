import React, { useState, useEffect } from 'react';
import HomePage from './Home/home';
import { Listing } from './Listing/Listing';

const ContentArea = ({ activeMenu }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data!", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content-area">
      {activeMenu === 'home' && <HomeContent products={products}/>}
      {activeMenu === 'listings' && <ListingsContent products={products} />}
      {activeMenu === 'profile' && <ProfileContent />}
    </div>
  );
};

const HomeContent = ({products}) => (
  <div>
    <HomePage products={products}/>
  </div>
);

const ListingsContent = ({ products }) => {
  // Create a Set to store unique category names
  const uniqueCategories = new Set();

  // Filter and add unique category names to the Set
  products.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  // Convert the Set back to an array
  const uniqueCategoriesArray = Array.from(uniqueCategories);

  return (
    <div>
      <section className="categories">
        <h2>Categories</h2>
        <ul>
          {uniqueCategoriesArray.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </section>
      <Listing products={products} />
    </div>
  );
};

const ProfileContent = () => (
  <div className='profile'>
    <h2>Profile</h2>
    <p>This is the profile content area.</p>
  </div>
);

export default ContentArea;