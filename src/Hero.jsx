import React from 'react';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Beautiful Landing Page<br />
            Design for You
          </h1>
          <p className="hero-subtitle">
            A good design is not only aesthetically pleasing, but also<br />
            functional. It should be able to solve the problem
          </p>
          <Button variant="primary" size="large">
            Get Started
          </Button>
        </div>
        
        <div className="hero-image-wrapper">
          
          <div className="hero-image">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
