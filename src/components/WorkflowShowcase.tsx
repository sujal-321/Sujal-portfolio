'use client';

import { KeyboardEvent, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Scenario = {
  id: string; label: string; eyebrow: string; title: string; description: string; trigger: string;
  nodes: { app: string; title: string; detail: string; tone: 'lime' | 'pink' | 'white' }[];
  metrics: { value: string; label: string }[]; events: string[];
};

const scenarios: Scenario[] = [
  { id: 'lead', label: 'Lead response', eyebrow: 'Scenario 01 / New inquiry', title: 'From inquiry to a qualified conversation — automatically.', description: 'Every high-intent lead gets a thoughtful first response, a clean CRM record, and the next best action before your team opens its inbox.', trigger: 'New lead: Maya from Northstar', nodes: [{ app: 'FORM', title: 'Capture inquiry', detail: 'Website form received', tone: 'white' }, { app: 'AI', title: 'Qualify intent', detail: 'Score, summarize, enrich', tone: 'lime' }, { app: 'CRM', title: 'Create opportunity', detail: 'Route to the right owner', tone: 'pink' }, { app: 'SEND', title: 'Reply & book', detail: 'Personalized response sent', tone: 'lime' }], metrics: [{ value: '30 sec', label: 'first response' }, { value: '6', label: 'manual steps removed' }, { value: '100%', label: 'CRM capture' }], events: ['Inquiry received', 'Company enriched', 'Intent: high', 'Opportunity created', 'Meeting link sent'] },
  { id: 'revenue', label: 'Revenue ops', eyebrow: 'Scenario 02 / Pipeline hygiene', title: 'Keep the pipeline moving while the team sells.', description: 'The system notices stalled deals, gathers the context, drafts a relevant follow-up, and keeps every record ready for the next conversation.', trigger: 'Deal inactive for 5 days', nodes: [{ app: 'CRM', title: 'Detect stalled deal', detail: 'No activity in 5 days', tone: 'pink' }, { app: 'DATA', title: 'Gather context', detail: 'Pull activity and account news', tone: 'white' }, { app: 'AI', title: 'Draft follow-up', detail: 'Personalize the next message', tone: 'lime' }, { app: 'SYNC', title: 'Update & notify', detail: 'Log outcome and alert owner', tone: 'lime' }], metrics: [{ value: '0', label: 'stale-deal blind spots' }, { value: '4 hrs', label: 'saved each week' }, { value: '1 view', label: 'clean pipeline' }], events: ['Inactive deal found', 'Account signals pulled', 'Follow-up prepared', 'Owner notified', 'Next step logged'] },
  { id: 'support', label: 'Support agent', eyebrow: 'Scenario 03 / Customer question', title: 'Fast, grounded answers — with humans in the loop.', description: 'A knowledge-aware agent resolves routine questions, preserves every interaction, and escalates the exact cases that deserve a human response.', trigger: 'Customer asks: “Where is my order?”', nodes: [{ app: 'CHAT', title: 'Receive question', detail: 'Classify customer intent', tone: 'white' }, { app: 'KB', title: 'Search knowledge', detail: 'Ground answer in live data', tone: 'lime' }, { app: 'AI', title: 'Resolve or escalate', detail: 'Apply confidence guardrails', tone: 'pink' }, { app: 'HELP', title: 'Close the loop', detail: 'Reply or assign to specialist', tone: 'lime' }], metrics: [{ value: '24 / 7', label: 'coverage' }, { value: '< 1 min', label: 'time to answer' }, { value: '1 queue', label: 'for human review' }], events: ['Question received', 'Order status found', 'Confidence: 98%', 'Answer sent', 'Conversation saved'] },
];

export default function WorkflowShowcase() {
  const [selectedId, setSelectedId] = useState('lead');
  const [progress, setProgress] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const reducedMotion = useReducedMotion();
  const scenario = scenarios.find((item) => item.id === selectedId) ?? scenarios[0];

  useEffect(() => { setProgress(scenario.nodes.length); setIsRunning(false); }, [scenario.id, scenario.nodes.length]);
  useEffect(() => {
    if (!isRunning) return;
    if (reducedMotion) { setProgress(scenario.nodes.length); setIsRunning(false); return; }
    const timer = window.setInterval(() => setProgress((current) => {
      const next = current + 1;
      if (next >= scenario.nodes.length) { window.clearInterval(timer); setIsRunning(false); return scenario.nodes.length; }
      return next;
    }), 700);
    return () => window.clearInterval(timer);
  }, [isRunning, reducedMotion, scenario.nodes.length]);

  const runScenario = () => { setProgress(0); setIsRunning(true); };
  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? scenarios.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + scenarios.length) % scenarios.length;
    const nextScenario = scenarios[nextIndex];
    setSelectedId(nextScenario.id);
    document.getElementById(`scenario-tab-${nextScenario.id}`)?.focus();
  };

  return <section className="workflow-showcase" id="workflow" aria-labelledby="workflow-title">
    <div className="section-shell workflow-head"><div><p className="section-label">Automation, made visible</p><h2 id="workflow-title">See the work move without you chasing it.</h2></div><p>Explore the systems FlowState builds, then run the sequence to see how every handoff stays connected.</p></div>
    <div className="section-shell workflow-tabs" role="tablist" aria-label="Automation scenarios">{scenarios.map((item, index) => <button key={item.id} id={`scenario-tab-${item.id}`} type="button" role="tab" aria-selected={item.id === scenario.id} aria-controls="scenario-panel" tabIndex={item.id === scenario.id ? 0 : -1} className={item.id === scenario.id ? 'is-active' : ''} onClick={() => setSelectedId(item.id)} onKeyDown={(event) => handleTabKeyDown(event, index)}><span aria-hidden="true">{item.id === scenario.id ? '●' : '○'}</span>{item.label}</button>)}</div>
    <div className="section-shell workflow-console" id="scenario-panel" role="tabpanel" aria-labelledby={`scenario-tab-${scenario.id}`} tabIndex={0}>
      <div className="console-topline"><span className="live-indicator"><i /> {isRunning ? 'Automation running' : 'Automation ready'}</span><span>{scenario.eyebrow}</span></div>
      <div className="console-grid"><div className="scenario-copy"><p className="workflow-kicker">{scenario.trigger}</p><h3>{scenario.title}</h3><p>{scenario.description}</p><button className="run-button" type="button" onClick={runScenario} disabled={isRunning}><span className="play-mark" aria-hidden="true">{isRunning ? '↻' : '▶'}</span>{isRunning ? 'Running sequence…' : 'Run automation'}</button><p className="keyboard-note">Choose a scenario, then run the sequence.</p></div>
        <div className="workflow-map" aria-label={`${scenario.label} automation workflow`}><div className="flow-origin"><span className="pulse-dot" />Trigger</div><div className="flow-line line-origin" /><div className="workflow-nodes">{scenario.nodes.map((node, index) => { const complete = progress > index; const active = isRunning && progress === index; return <div className={`node-wrap ${complete ? 'is-complete' : ''} ${active ? 'is-processing' : ''}`} key={node.title}>{index > 0 && <div className="flow-line node-line" />}<motion.article layout className={`workflow-node tone-${node.tone}`} initial={false} animate={{ opacity: 1 }}><span className="node-number">0{index + 1}</span><span className="app-badge">{node.app}</span><h4>{node.title}</h4><p>{node.detail}</p><span className="node-state">{complete ? 'Complete' : active ? 'Processing' : 'Queued'}</span></motion.article></div>; })}</div></div></div>
      <div className="console-footer"><div className="event-stream" aria-live="polite"><p>Event stream</p><div>{scenario.events.map((event, index) => <span className={progress > index ? 'is-visible' : ''} key={event}><b>{progress > index ? '✓' : '·'}</b>{event}</span>)}</div></div><div className="workflow-metrics">{scenario.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div>
    </div>
  </section>;
}
