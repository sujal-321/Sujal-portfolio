import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTopScroll = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header-nav ${visible ? 'visible' : ''}`}>
      <a href="#top" onClick={handleTopScroll} className="nav-pill" aria-label="Back to top">
        <span>Sujal Darla</span>
        <span className="nav-dot" />
      </a>
    </header>
  );
}
