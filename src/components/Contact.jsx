import React, { useState } from 'react';
import Eyebrow from './Eyebrow';

export default function Contact() {
  const emailVal = 'sujal.threen@gmail.com'; // User's email

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [submitTarget, setSubmitTarget] = useState(null); // 'supabase' | 'n8n' | 'localstorage'

  const socialLinks = [
    { name: 'Send Email', url: `mailto:${emailVal}`, icon: '✉' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sujal-darla-5b6652415/', icon: '🔗' },
    { name: 'GitHub', url: 'https://github.com/sujal-321', icon: '💻' },
    { name: 'Instagram', url: 'https://instagram.com/flow.stateai', icon: '📸' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    setSubmitTarget(null);

    const payload = {
      name,
      email,
      timestamp: new Date().toISOString(),
    };

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const supabaseTable = import.meta.env.VITE_SUPABASE_TABLE || 'leads';
      const n8nWebhook = import.meta.env.VITE_N8N_WEBHOOK_URL;

      if (supabaseUrl && supabaseKey) {
        // Option A: Submit directly to Supabase PostgREST REST API
        const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify(payload)
        });
        if (!response.ok) {
          throw new Error(`Supabase returned status ${response.status}`);
        }
        setSubmitTarget('supabase');
      } else if (n8nWebhook) {
        // Option B: Submit to n8n Webhook
        const response = await fetch(n8nWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
        if (!response.ok) {
          throw new Error(`n8n webhook returned status ${response.status}`);
        }
        setSubmitTarget('n8n');
      } else {
        // Option C: Save to Local Storage Mock DB (with minor loading latency for realism)
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        const existingLeads = JSON.parse(localStorage.getItem('portfolio_leads') || '[]');
        existingLeads.push(payload);
        localStorage.setItem('portfolio_leads', JSON.stringify(existingLeads));
        setSubmitTarget('localstorage');
      }

      setStatus('success');
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Lead submission failed:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container contact-grid-container">
        <div className="contact-grid">
          {/* Left Column: Context & Links */}
          <div className="contact-left reveal">
            <Eyebrow num="06" text="Signal" />
            <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
              Let's build <span className="italic-accent">something autonomous</span>
            </h2>
            <p className="body-lg" style={{ marginBottom: '32px' }}>
              I am open for AI automation consulting, custom workflow integrations, and full-stack SaaS contracts.
            </p>
            <p className="body-md">
              If your team spends hours on manual data sorting, copy-pasting, lead qualifying, or email drafts, let's turn that process into a machine.
            </p>

            <div className="contact-links">
              {socialLinks.map((link, index) => {
                const isEmail = link.url.startsWith('mailto:');
                return (
                  <a
                    key={index}
                    href={link.url}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    className="contact-link"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-right reveal">
            <div className="contact-form-card">
              {status === 'success' ? (
                <div className="form-status form-status-success">
                  <span className="status-title">🚀 Connection Established!</span>
                  <span className="status-desc">
                    Your details have been successfully transmitted. I will review your request and get back to you shortly.
                  </span>
                  {submitTarget === 'localstorage' && (
                    <span className="status-db-indicator">
                      💾 Saved to browser LocalStorage (Mock DB)
                    </span>
                  )}
                  {submitTarget === 'supabase' && (
                    <span className="status-db-indicator">
                      ⚡ Synced with Supabase PostgreSQL DB
                    </span>
                  )}
                  {submitTarget === 'n8n' && (
                    <span className="status-db-indicator">
                      🤖 Triggered n8n automation relay
                    </span>
                  )}
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-submit"
                    style={{ marginTop: '16px' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="lead-name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="lead-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., James Bond"
                      required
                      disabled={status === 'submitting'}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lead-email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="lead-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., agent.darla@flowstate.ai"
                      required
                      disabled={status === 'submitting'}
                      className="form-input"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="form-status form-status-error">
                      <span className="status-title">⚠️ Transmission Error</span>
                      <span className="status-desc">{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-submit"
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
