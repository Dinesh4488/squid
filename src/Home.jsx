import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import FloatingIcons from './FloatingIcons';
import DashboardMockup from './DashboardMockup';
import Companies from './Companies';
import CTABanner from './CTABanner';
import ContactForm from './ContactForm';
import Footer from './Footer';
import { isAuthenticated } from './auth';
import './App.css';

const Home = () => {
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  useEffect(() => {
    const handleAuthChange = () => {
      setAuthenticated(isAuthenticated());
    };

    // Listen to auth change event (fired on login/logout)
    window.addEventListener('auth-change', handleAuthChange);
    
    return () => {
      window.removeEventListener('auth-change', handleAuthChange);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      {!authenticated && <DashboardMockup />}
      <Features />
      <FloatingIcons />
      <Companies />
      <CTABanner />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
