import React from 'react';
import dummyData from '/src/Assets/dummyData.jsx'; 
import './home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="featured-listings">
        <h2>Featured Listings</h2>
        <div className="listing-container">
          {dummyData.featuredListings.map((listing) => (
            <div key={listing.id} className="listing">
              <div className="image-container">
              <img src={listing.image} alt={listing.title} />
              </div>
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <p>Category: {listing.category}</p>
              <p>Price: ${listing.price} per day</p>
              <p>Location: {listing.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2>Categories</h2>
        <ul>
          {dummyData.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </section>

      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          {dummyData.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>
          Discover a wide range of items available for rent. Sign up, explore listings, and book your favorite items
          hassle-free.
        </p>
        <button>Get Started</button>
      </section>

      <section className="testimonials">
        <h2>What Users Are Saying</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"I found the perfect furniture for my new apartment. Easy process and great choices!"</p>
            <p>- Happy Renter</p>
          </div>
          <div className="testimonial">
            <p>"The variety of electronics available is impressive. I highly recommend this platform."</p>
            <p>- Satisfied Customer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;