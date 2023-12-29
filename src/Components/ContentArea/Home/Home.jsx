import React from 'react';
import dummyData from '/src/Assets/dummyData.jsx'; 
import './home.css';
import { Listing } from '../Listing/Listing';

export default function Home ({products}) {

  return (
    <div className="home-page">
      <section className="featured-listings">
        <h2>Featured Items</h2>
        <Listing products={products} numberofItems={6}/>
      </section>

      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          {dummyData.benefits.map((benefit, index) => (
            <li key={index}>
              <div className="benefit-icon">🚀</div>
              {benefit}
            </li>
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