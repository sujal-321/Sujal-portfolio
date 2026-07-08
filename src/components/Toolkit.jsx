import React from 'react';
import Eyebrow from './Eyebrow';

export default function Toolkit() {
  const toolsData = [
    {
      category: 'AI & LLMs',
      tools: ['OpenAI API', 'Claude', 'Gemini', 'Groq', 'LangChain', 'LangGraph', 'Pinecone', 'Qdrant']
    },
    {
      category: 'Automation & Backend',
      tools: ['n8n', 'Webhooks', 'REST APIs', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker']
    },
    {
      category: 'Frontend & Tools',
      tools: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vite', 'HTML5 / CSS3', 'Git', 'GitHub']
    }
  ];

  return (
    <section id="toolkit" className="section">
      <div className="container">
        <div className="reveal">
          <Eyebrow num="05" text="Toolkit" />
          <h2 className="heading-lg">
            Technologies I <span className="italic-accent">deploy daily</span>
          </h2>
        </div>

        <div className="toolkit-grid">
          {toolsData.map((group, index) => (
            <div key={index} className="reveal toolkit-col">
              <h3 className="font-mono" style={{ color: 'var(--accent-light)', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginBottom: '16px' }}>
                {group.category}
              </h3>
              <div className="toolkit-tags">
                {group.tools.map((tool, idx) => (
                  <span key={idx} className="toolkit-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
