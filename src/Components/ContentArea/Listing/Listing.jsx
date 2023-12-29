import React from 'react';
import './listing.css';

export function Listing({ products, numberofItems, selectedCategory }) {
  // Check if products is defined and is an array, otherwise default to an empty array
  const slicedProducts = products ?? [];
  console.log(selectedCategory);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? slicedProducts.filter((product) => product.category === selectedCategory)
    : slicedProducts;

  return (
    <div className="app-container">
      <div className="product-list">
        {filteredProducts.slice(0, numberofItems).map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p className="price">${product.price} <label>/ week</label></p>
              <p>{product.description}</p>
            </div>
            <button id="rent-btn" onClick={() => onRentClick(product.id)}>
              Rent
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const onRentClick = (productId) => {
  //logic for handling rent button click
  console.log(`Rent button clicked for product with ID ${productId}`);
};