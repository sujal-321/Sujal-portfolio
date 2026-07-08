import React from 'react';
import Navbar from './components/Navbar';
import TOCRail from './components/TOCRail';

import Hero from './components/Hero';
import StatusBand from './components/StatusBand';
import Background from './components/Background';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Products from './components/Products';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  // Initialize IntersectionObserver scroll reveal fade-ins
  useScrollReveal();

  return (
    <>
      {/* Skip Navigation Link for accessibility */}
      <a href="#main" className="skip-link">Skip to content</a>
      
      {/* Background warm glow overlay */}
      <div className="warm-wash" aria-hidden="true" />
      
      {/* Floating Header & Navigation Controls */}
      <Navbar />
      <TOCRail />

      
      {/* Scrollable Layout Content */}
      <main id="main">
        {/* 00 Intro / Frame Zoom Scroll Hero */}
        <Hero />
        
        {/* Status / Now Band */}
        <StatusBand />
        
        {/* 01 Background & Working Style */}
        <Background />
        
        {/* 02 Philosophy / Visual Studies */}
        <Philosophy />
        
        {/* 03 Experience / Track Record */}
        <Experience />
        
        {/* 04 Products / Build Log */}
        <Products />
        
        {/* 05 Toolkit */}
        <Toolkit />
        
        {/* 06 Contact / Signal */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div style={{ textAlign: 'left' }}>
            <span className="font-mono" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent-light)', display: 'block', marginBottom: '8px' }}>
              AGENT DARLA
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
              © 2026 Sujal Darla. All rights reserved.
            </span>
          </div>
          <div className="font-mono" style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>
            "Every manual process is a system waiting to be born."
          </div>
        </div>
      </footer>
    </>
  );
}
