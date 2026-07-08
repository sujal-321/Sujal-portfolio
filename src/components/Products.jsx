import React from 'react';
import Eyebrow from './Eyebrow';

export default function Products() {
  const products = [
    {
      title: 'SEO Optimizer Platform',
      desc: 'Automated SEO auditing page analyzing core vitals, content structures, and keyword metrics. Generates custom suggestions dynamically using model API nodes.',
      tech: 'Next.js · OpenAI · PostgreSQL',
      status: 'Live',
      link: 'https://github.com'
    },
    {
      title: 'Webhook Relay Platform',
      desc: 'A robust relay capture mechanism designed to log, parse, retry, and forward incoming webhook streams with a low-latency administrative dashboard.',
      tech: 'Node.js · Redis · BullMQ · React',
      status: 'Live',
      link: 'https://github.com'
    },
    {
      title: 'AI Business Audit Scorecard',
      desc: 'Interactive business questionnaire assessing automation possibilities, computing operational scores, and producing recommended system paths.',
      tech: 'React · OpenAI · Supabase',
      status: 'Beta',
      link: 'https://github.com'
    },
    {
      title: 'Multi-Channel Notification System',
      desc: 'Scalable service layer broadcasting email notifications, SMS updates, and push notifications with template styling queues.',
      tech: 'Node.js · Redis · BullMQ',
      status: 'Live',
      link: 'https://github.com'
    }
  ];

  return (
    <section id="build-log" className="section">
      <div className="container">
        <div className="reveal">
          <Eyebrow num="04" text="Build Log" />
          <h2 className="heading-lg">
            Products and <span className="italic-accent">platforms I've shipped</span>
          </h2>
        </div>

        <div className="products-grid">
          {products.map((prod, index) => (
            <a
              key={index}
              href={prod.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal product-card"
            >
              <div>
                <div className="product-header">
                  <h3 className="heading-md" style={{ marginBottom: 0, fontSize: '20px' }}>{prod.title}</h3>
                  <span className="font-mono" style={{
                    fontSize: '9px',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'rgba(var(--accent-rgb), 0.05)',
                    color: 'var(--accent-light)'
                  }}>
                    {prod.status}
                  </span>
                </div>
                <p className="body-md" style={{ marginBottom: '24px' }}>{prod.desc}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>{prod.tech}</span>
                <span style={{ color: 'var(--accent-light)', fontSize: '14px' }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
