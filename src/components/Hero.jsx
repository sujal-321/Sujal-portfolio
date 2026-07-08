import React, { useRef } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

export default function Hero() {
  const containerRef = useRef(null);
  const progress = useScrollProgress(containerRef);

  // 10 frames for scroll animation (excluding the last three)
  const totalFrames = 10;
  const currentFrameIndex = Math.min(
    totalFrames,
    Math.max(1, Math.floor(progress * (totalFrames - 0.01)) + 1)
  );

  // Generate frame source URLs: /images/ezgif-frame-001.jpg to /images/ezgif-frame-010.jpg
  const frames = Array.from({ length: totalFrames }, (_, i) => {
    const frameNum = String(i + 1).padStart(3, '0');
    return `/images/ezgif-frame-${frameNum}.jpg`;
  });

  // Calculate panel opacities and translates
  // Panel 1 (Intro): Fades out from progress 0 to 0.4
  const panel1Opacity = Math.max(0, 1 - progress / 0.4);
  const panel1TranslateY = progress * -50; // scrolls up

  // Panel 2 (Proof): Fades in from progress 0.5 to 0.9
  let panel2Opacity = 0;
  if (progress > 0.4) {
    panel2Opacity = Math.min(1, (progress - 0.4) / 0.4);
  }
  const panel2TranslateY = Math.max(0, (1 - (progress - 0.4) / 0.4) * 30); // slides up

  const handleCTAClick = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} id="top" className="hero-scroll-container">
      <div className="hero-sticky-track">
        {/* Frame Preloading & Render Container */}
        <div className="hero-bg-frames">
          {frames.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Frame ${i + 1}`}
              className={`hero-frame-img ${i + 1 === currentFrameIndex ? 'active' : ''}`}
            />
          ))}
          <div className="hero-scrim-left" />
          <div className="hero-scrim-bottom" />
        </div>

        {/* Text Content overlay */}
        <div className="container hero-content-wrapper">
          {/* Panel 1: Intro */}
          <div
            className="hero-panel"
            style={{
              opacity: panel1Opacity,
              transform: `translateY(${panel1TranslateY}px)`,
              pointerEvents: panel1Opacity > 0.1 ? 'auto' : 'none',
            }}
          >
            <div className="reveal revealed" style={{ maxWidth: '640px' }}>
              <span className="font-mono" style={{ color: 'var(--accent-light)', display: 'block', marginBottom: '16px' }}>
                AI AUTOMATION ENGINEER
              </span>
              <h1 className="heading-xl" style={{ marginBottom: '24px' }}>
                Sujal Darla
              </h1>
              <p className="body-lg" style={{ marginBottom: '32px' }}>
                I build AI systems that automate repetitive work using agents, n8n, APIs, and custom software.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#contact" onClick={handleCTAClick} className="btn btn-primary">
                  Get in touch
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Panel 2: Proof Panel */}
          <div
            className="hero-panel"
            style={{
              opacity: panel2Opacity,
              transform: `translateY(${panel2TranslateY}px)`,
              pointerEvents: panel2Opacity > 0.1 ? 'auto' : 'none',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div className="eyebrow" style={{ marginBottom: '32px' }}>
                <span className="num">PROVED IMPACT</span>
                <span className="rule" />
                <span>Production scale</span>
              </div>
              
              <div className="hero-stats-grid">
                <div>
                  <div className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: '700' }}>15+</div>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>AI Agents Deployed</div>
                </div>
                <div>
                  <div className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: '700' }}>$2M+</div>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>Revenue Automated</div>
                </div>
                <div>
                  <div className="heading-md" style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: '700' }}>500+</div>
                  <div className="font-mono" style={{ fontSize: '9px', color: 'var(--text-secondary)' }}>Hours Saved Monthly</div>
                </div>
              </div>

              <p className="body-lg" style={{ marginBottom: '32px' }}>
                I design and ship autonomous systems that integrate deeply with existing business tools, generating leads, handling support, and boosting operation efficiency.
              </p>
              
              <a href="#contact" onClick={handleCTAClick} className="btn btn-primary">
                Book a Free Audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
