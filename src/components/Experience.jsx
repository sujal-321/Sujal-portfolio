import React from 'react';
import Eyebrow from './Eyebrow';

export default function Experience() {
  const experiences = [
    {
      badge: 'AI AGENTS & VOICE',
      title: 'AI Receptionist Voice Agent',
      desc: 'Implemented a custom voice agent using VAPI connected to n8n workflow queues. It answers inbound phone queries, qualifies incoming business leads, reads availability from calendar APIs, and logs results directly to a Supabase database. Handles natural interruptions and returns transfers seamlessly to humans.',
      tech: ['VAPI', 'n8n', 'Supabase', 'Twilio', 'REST APIs'],
      metric: '400+ Calls'
    },
    {
      badge: 'OUTBOUND AUTOMATION',
      title: 'AI Outreach Engine',
      desc: 'Created an automated prospect research and personalized messaging funnel. n8n workflow triggers on lead source webhook, parses company websites via scrapers, queries LLMs with specific system prompts to draft personalized copy, and schedules emails/LinkedIn invites. Maximizes relevance dynamically.',
      tech: ['n8n', 'OpenAI', 'REST APIs', 'Webhooks', 'SMTP'],
      metric: '3x Reply Rate'
    },
    {
      badge: 'CONTENT WORKFLOWS',
      title: 'YouTube Content Automation Pipeline',
      desc: 'Architected a multi-step automation layout mapping the research-to-publishing pipeline. Automatically scraps trending search queries, generates video outline scripts using OpenAI models, drafts thumbnail prompt layouts, and directly pushes scheduled uploads to the YouTube API.',
      tech: ['n8n', 'OpenAI API', 'YouTube API', 'Node.js', 'Redis'],
      metric: '80% Less Time'
    }
  ];

  return (
    <section id="track-record" className="section">
      <div className="container">
        <div className="reveal">
          <Eyebrow num="03" text="Track Record" />
          <h2 className="heading-lg">
            Systems that <span className="italic-accent">run in production</span>
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="reveal exp-card">
              <div className="exp-info">
                <span className="badge">{exp.badge}</span>
                <h3 className="heading-md" style={{ marginBottom: '12px' }}>{exp.title}</h3>
                <p className="body-md" style={{ marginBottom: '16px', maxWidth: '720px' }}>{exp.desc}</p>
                <div className="exp-tech">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'left', minWidth: '160px' }}>
                <span className="font-mono" style={{ color: 'var(--text-tertiary)', fontSize: '10px', display: 'block', marginBottom: '4px' }}>
                  KEY METRIC
                </span>
                <div className="exp-metric">{exp.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
