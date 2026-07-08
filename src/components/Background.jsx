import React from 'react';
import Eyebrow from './Eyebrow';
import Marquee from './Marquee';

export default function Background() {
  const disciplines = [
    'AI Agents',
    'n8n Workflow Automation',
    'Custom AI Integrations',
    'Full Stack Development',
    'React & Vite',
    'Next.js',
    'TypeScript',
    'Node.js & Express',
    'Supabase & PostgreSQL',
    'Redis & BullMQ',
    'Docker & Infrastructure',
    'REST APIs & Webhooks',
    'LangGraph & LangChain',
    'OpenAI / Claude / Gemini',
    'Vector Databases (Pinecone, Qdrant)',
    'Git & GitHub Release Ownership'
  ];

  return (
    <section id="origin" className="section">
      <div className="container">
        <div className="reveal">
          <Eyebrow num="01" text="Background & Working Style" />
          <h2 className="heading-lg" style={{ maxWidth: '20ch' }}>
            An AI automation engineer <span className="italic-accent">who thinks in systems</span>
          </h2>
        </div>

        <Marquee items={disciplines} />

        <div className="profile-grid">
          {/* Left Column: Bio and Timeline */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p className="body-lg drop-cap">
              I build the automated pipelines and intelligent agents that businesses rely on: voice receptionists that manage support queues, scrapers that fuel outbound engines, and custom backends that coordinate complex integrations. I bridge the gap between interface logic and model APIs.
            </p>
            <p className="body-md">
              Graduating with a BTech in CSE, I focus entirely on AI agent development and workflow orchestration. I run my projects under the brand <strong>Agent Darla</strong>, developing production-grade solutions that run autonomously and save teams hundreds of hours every month.
            </p>
            <p className="body-md">
              I do my best work when a business has high-friction manual operations. I analyze the bottlenecks, write the architectural spec, assemble the tools (n8n, Supabase, LLMs), and deliver custom software that works robustly in production.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px dashed var(--border)', paddingTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-mono)' }}>/</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '20px', fontStyle: 'italic' }}>Sujal Darla</span>
              <span className="font-mono" style={{ color: 'var(--text-tertiary)' }}>· AI Automation Engineer</span>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="font-mono" style={{ color: 'var(--text-tertiary)', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>
                Through the years
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">'22</div>
                  <div className="timeline-title">Full Stack Architectures · CMS systems</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">'23</div>
                  <div className="timeline-title">Discovered workflow automation · n8n environments</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">'24</div>
                  <div className="timeline-title">Launched "Agent Darla" brand · production automation builds</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">'25</div>
                  <div className="timeline-title">AI outreach setups · LangChain pipelines · Webhook relays</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">'26</div>
                  <div className="timeline-title">Autonomous voice agents · CRM synchronization · AI SaaS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait and Vitals definition table */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: '4/5',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}>
              <img
                src="/images/sujal-1.jpg"
                alt="Sujal Darla"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(0.1) contrast(1.05)'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(var(--accent-rgb), 0.05)',
                mixBlendMode: 'multiply'
              }} />
            </div>

            <div>
              <h3 className="font-mono" style={{ color: 'var(--text-tertiary)', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '16px' }}>
                Vitals
              </h3>
              <div className="vitals-list">
                <div className="vital-row">
                  <span className="vital-label">Currently</span>
                  <span className="vital-value" style={{ fontWeight: 600, fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Founder · Agent Darla</span>
                </div>
                <div className="vital-row">
                  <span className="vital-label">Education</span>
                  <span className="vital-value">BTech CSE · CMR Institute of Technology</span>
                </div>
                <div className="vital-row">
                  <span className="vital-label">Based in</span>
                  <span className="vital-value">India</span>
                </div>
                <div className="vital-row">
                  <span className="vital-label">Focused on</span>
                  <span className="vital-value">AI Agents, Workflow Orchestration & SaaS</span>
                </div>
                <div className="vital-row">
                  <span className="vital-label">Open to</span>
                  <span className="vital-value">Automation consulting, custom development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
