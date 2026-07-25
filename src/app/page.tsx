'use client';

import { FormEvent, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import WorkflowShowcase from '@/components/WorkflowShowcase';
import '../styles/flowstate.css';

const services = [
  { number: '01', title: 'Lead response systems', description: 'Qualify inbound leads, route high-intent conversations, and book meetings while your team stays focused on closing.', outcomes: ['Voice & chat agents', 'CRM handoffs', 'Calendar booking'] },
  { number: '02', title: 'Revenue operations automation', description: 'Remove manual follow-up, enrichment, reporting, and pipeline admin with workflows that fit the way your team already works.', outcomes: ['Sales workflows', 'Email automation', 'Data enrichment'] },
  { number: '03', title: 'AI support & knowledge systems', description: 'Give customers and internal teams fast, grounded answers from the knowledge your business already owns.', outcomes: ['Knowledge bases', 'Document processing', 'Human escalation'] },
];

const workflow = [
  ['Discover', 'Map bottlenecks, handoffs, and the measurable outcome worth improving.'],
  ['Design', 'Specify the workflow, guardrails, integrations, and human decision points.'],
  ['Build', 'Ship production-ready automations with observability, testing, and clean ownership.'],
  ['Improve', 'Track results, review failures, and expand only where the system proves value.'],
];

const stack = ['n8n', 'OpenAI', 'Claude', 'LangGraph', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Redis', 'Docker'];
type FormStatus = 'idle' | 'sending' | 'sent' | 'fallback' | 'error';

export default function HomePage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [emailDraftUrl, setEmailDraftUrl] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const pageRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const revealProps = reducedMotion ? {} : {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.7, ease: 'easeOut' as const },
  };

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const lead = { name: String(formData.get('name') || '').trim(), email: String(formData.get('email') || '').trim(), company: String(formData.get('company') || '').trim(), challenge: String(formData.get('challenge') || '').trim() };
    setStatus('sending');
    setEmailDraftUrl(null);
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
      if (response.ok) { form.reset(); setStatus('sent'); return; }
      if (response.status === 503) {
        const subject = encodeURIComponent(`FlowState project inquiry — ${lead.company || lead.name}`);
        const body = encodeURIComponent(`Name: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company}\n\nWhat I want to automate:\n${lead.challenge}`);
        setEmailDraftUrl(`mailto:sujal.threen@gmail.com?subject=${subject}&body=${body}`);
        setStatus('fallback'); return;
      }
      setStatus('error');
    } catch { setStatus('error'); }
  }

  async function copyEmail() {
    const email = 'sujal.threen@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 3_000);
    } catch {
      window.prompt('Copy this email address:', email);
    }
  }

  function movePageLight(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== 'mouse' || !pageRef.current) return;
    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;
    pageRef.current.style.setProperty('--pointer-x', `${x}%`);
    pageRef.current.style.setProperty('--pointer-y', `${y}%`);
    pageRef.current.style.setProperty('--pointer-drift-x', `${(x - 50) * 0.16}px`);
    pageRef.current.style.setProperty('--pointer-drift-y', `${(y - 50) * 0.12}px`);
  }

  function resetPageLight() {
    if (!pageRef.current) return;
    pageRef.current.style.setProperty('--pointer-x', '73%');
    pageRef.current.style.setProperty('--pointer-y', '37%');
    pageRef.current.style.setProperty('--pointer-drift-x', '0px');
    pageRef.current.style.setProperty('--pointer-drift-y', '0px');
  }

  return (
    <main ref={pageRef} onPointerMove={movePageLight} onPointerLeave={resetPageLight}>
      <div className="page-cursor-glow" aria-hidden="true" />
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="FlowState Agency home"><img src="/images/flowstate_logo_vibrant2.png" alt="FlowState Agency" /></a>
        <nav aria-label="Primary navigation"><a href="#services">Systems</a><a href="#process">Process</a><a href="#about">About</a></nav>
        <a className="nav-cta" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
      </header>

      <motion.section className="hero section-shell" id="top" tabIndex={-1} aria-labelledby="hero-title" {...revealProps}>
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-signal" aria-hidden="true"><i /><i /><i /></div>
        <p className="kicker">FlowState Agency · AI automation engineering</p>
        <h1 id="hero-title">Build a business that <em>moves</em> without the manual drag.</h1>
        <p className="hero-copy">FlowState designs and deploys dependable AI agents and workflow automations for teams ready to remove repetitive work and scale their operations with intent.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">Map your automation opportunity <span aria-hidden="true">→</span></a><a className="text-link" href="#services">Explore the systems we build <span aria-hidden="true">↓</span></a></div>
        <div className="hero-meta" aria-label="Agency specialties"><span>AI agents</span><span>Workflow automation</span><span>Production integrations</span></div>
      </motion.section>

      <WorkflowShowcase />

      <motion.section className="intro section-shell" aria-labelledby="intro-title" {...revealProps}>
        <p className="section-label">The work</p><h2 id="intro-title">Automation should create capacity — not another system to manage.</h2>
        <p>I build practical automation around the work that slows growth: lead response, customer operations, internal handoffs, and data-heavy back office tasks. Every engagement starts with a business bottleneck and ends with a system your team can trust.</p>
      </motion.section>

      <motion.section className="section-shell services" id="services" aria-labelledby="services-title" {...revealProps}>
        <div className="section-heading"><p className="section-label">What FlowState builds</p><h2 id="services-title">Systems that turn operational friction into forward motion.</h2></div>
        <div className="service-grid">{services.map((service, index) => <motion.article className="service-card" key={service.number} whileHover={reducedMotion ? undefined : { y: -8, transition: { duration: 0.2 } }} {...(reducedMotion ? {} : { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.5, delay: index * 0.12 } })}><p className="service-number">{service.number}</p><h3>{service.title}</h3><p>{service.description}</p><ul aria-label={`${service.title} capabilities`}>{service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></motion.article>)}</div>
      </motion.section>

      <motion.section className="fit-section section-shell" aria-labelledby="fit-title" {...revealProps}>
        <div><p className="section-label">Built for real operations</p><h2 id="fit-title">For teams where speed, follow-through, and a great customer experience matter.</h2></div>
        <div className="fit-list" aria-label="Industries FlowState supports"><span>Real estate</span><span>Marketing agencies</span><span>SaaS</span><span>E-commerce</span><span>Travel</span><span>Service businesses</span></div>
      </motion.section>

      <motion.section className="section-shell process" id="process" aria-labelledby="process-title" {...revealProps}>
        <div className="section-heading"><p className="section-label">How we work</p><h2 id="process-title">Start with the outcome. Engineer the system around it.</h2></div>
        <ol className="process-list">{workflow.map(([step, description], index) => <motion.li key={step} {...(reducedMotion ? {} : { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.45, delay: index * 0.1 } })}><span>0{index + 1}</span><div><h3>{step}</h3><p>{description}</p></div></motion.li>)}</ol>
      </motion.section>

      <motion.section className="about section-shell" id="about" aria-labelledby="about-title" {...revealProps}>
        <div className="about-intro"><p className="section-label">The builder behind FlowState</p><h2 id="about-title">Sujal Darla is an AI automation engineer who cares about what happens after the demo.</h2></div>
        <div className="about-body"><p>I combine AI agent design, n8n orchestration, backend APIs, and production deployment to create systems that are maintainable, observable, and valuable to the people using them every day.</p><p>The goal is never “AI for AI’s sake.” It&apos;s to eliminate manual work, shorten response times, and build repeatable operations that help a business grow.</p><a className="text-link" href="https://github.com/sujal-321" target="_blank" rel="noreferrer">See the engineering work on GitHub <span aria-hidden="true">↗</span></a></div>
      </motion.section>

      <motion.section className="stack section-shell" aria-labelledby="stack-title" {...revealProps}><p className="section-label">Production-minded stack</p><h2 id="stack-title">Orchestrated for reliability, built to evolve.</h2><div className="stack-list" aria-label="Technology stack">{stack.map((item, index) => <motion.span key={item} whileHover={reducedMotion ? undefined : { scale: 1.06, borderColor: '#d8ff3e' }} {...(reducedMotion ? {} : { initial: { opacity: 0, scale: 0.92 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.3, delay: index * 0.05 } })}>{item}</motion.span>)}</div></motion.section>

      <motion.section className="contact section-shell" id="contact" aria-labelledby="contact-title" {...revealProps}>
        <div className="contact-copy"><p className="section-label">Start a conversation</p><h2 id="contact-title">What would your team do with more time?</h2><p>Tell me where work gets stuck. I&apos;ll help you identify the highest-leverage opportunity to automate.</p><button type="button" className="email-link" onClick={copyEmail}>sujal.threen@gmail.com <span aria-hidden="true">↑</span></button><p className="email-copy-status" aria-live="polite">{emailCopied ? 'Email copied — paste it into your preferred email app.' : 'Click to copy email address.'}</p></div>
        <form className="lead-form" onSubmit={submitLead}><label>Name<input name="name" required autoComplete="name" /></label><label>Work email<input name="email" type="email" required autoComplete="email" /></label><label>Company <span>(optional)</span><input name="company" autoComplete="organization" /></label><label>What do you want to automate?<textarea name="challenge" required rows={4} /></label><button className="button button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send project inquiry'} <span aria-hidden="true">→</span></button><div className="form-status" aria-live="polite">{status === 'sent' && 'Thanks — your inquiry is on its way. I’ll be in touch soon.'}{status === 'fallback' && <><span>Your email app needs one more click.</span> <a href={emailDraftUrl ?? undefined}>Open email app →</a></>}{status === 'error' && 'Something went wrong. Please email sujal.threen@gmail.com directly.'}</div></form>
      </motion.section>
      <footer className="site-footer"><span>© {new Date().getFullYear()} FlowState Agency</span><div><a href="https://linkedin.com/in/sujal-darla-5b6652415/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/sujal-321" target="_blank" rel="noreferrer">GitHub</a></div></footer>
    </main>
  );
}
