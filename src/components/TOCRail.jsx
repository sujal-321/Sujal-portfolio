import React, { useState, useEffect } from 'react';

export default function TOCRail() {
  const sections = [
    { id: 'top', num: '00', label: 'Intro' },
    { id: 'origin', num: '01', label: 'Background' },
    { id: 'artist-statement', num: '02', label: 'Philosophy' },
    { id: 'track-record', num: '03', label: 'Experience' },
    { id: 'build-log', num: '04', label: 'Products' },
    { id: 'toolkit', num: '05', label: 'Toolkit' },
    { id: 'contact', num: '06', label: 'Contact' }
  ];

  const [activeId, setActiveId] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 'top';
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentActive = section.id;
            break;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="toc-rail" aria-label="Section navigation">
      {sections.map((sec) => (
        <a
          key={sec.id}
          href={`#${sec.id}`}
          onClick={(e) => handleLinkClick(e, sec.id)}
          className={`toc-item ${activeId === sec.id ? 'active' : ''}`}
        >
          <span className="toc-num" style={{ fontSize: '10px' }}>{sec.num}</span>
          <span className="toc-tick" />
          <span className="toc-label" style={{ fontSize: '10px' }}>{sec.label}</span>
        </a>
      ))}
    </nav>
  );
}
