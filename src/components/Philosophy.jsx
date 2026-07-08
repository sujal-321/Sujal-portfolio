import React from 'react';
import Eyebrow from './Eyebrow';

export default function Philosophy() {
  return (
    <section id="artist-statement" className="section">
      <div className="container">
        <div className="reveal" style={{ maxWidth: '840px', marginBottom: '48px' }}>
          <Eyebrow num="02" text="How I Think and Build" />
          <h2 className="heading-lg">
            Two studies in <span className="italic-accent">vision and action</span>
          </h2>
          <p className="body-lg" style={{ borderLeft: '2px solid rgba(var(--accent-rgb), 0.3)', paddingLeft: '24px', fontStyle: 'italic' }}>
            A philosophy of systems thinking: keep the architecture robust, focus on real-world outcomes, and build for operational leverage.
          </p>
        </div>

        <div className="tilt-cards-grid">
          {/* Card A.01 */}
          <div className="reveal tilt-card">
            <img src="/images/leverage-automation.png" alt="Automating the Repetitive" className="tilt-card-img" />
            <div className="tilt-card-overlay">
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className="font-mono">
                <span style={{ color: 'var(--text-primary)' }}>A.01 // LEVERAGE</span>
                <span>INDIA</span>
              </div>
              <div style={{ pointerEvents: 'none' }}>
                <h3 className="heading-md" style={{ color: '#ffffff', marginBottom: '8px' }}>Automate the Repetitive</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5', maxWidth: '340px' }}>
                  Every manual process is a system waiting to be born. Identify patterns, build the machine, and delegate the execution.
                </p>
              </div>
            </div>
          </div>

          {/* Card A.02 */}
          <div className="reveal tilt-card">
            <img src="/images/velocity-iteration.png" alt="Ship, Then Iterate" className="tilt-card-img" />
            <div className="tilt-card-overlay">
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className="font-mono">
                <span style={{ color: 'var(--text-primary)' }}>A.02 // VELOCITY</span>
                <span>PRODUCTION</span>
              </div>
              <div style={{ pointerEvents: 'none' }}>
                <h3 className="heading-md" style={{ color: '#ffffff', marginBottom: '8px' }}>Ship, Then Iterate</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5', maxWidth: '340px' }}>
                  Working software in production beats any slide deck. Gather real edge cases, observe model behavior, and optimize continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
