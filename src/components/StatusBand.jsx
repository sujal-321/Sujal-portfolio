import React from 'react';

export default function StatusBand() {
  return (
    <div className="status-band">
      <div className="container">
        <div className="status-grid">
          <div className="status-now-indicator">
            <span className="status-pulse-dot" />
            <span>NOW · JUL '26</span>
          </div>
          
          <div className="status-item">
            <span className="status-label">Building</span>
            <span className="status-val">AI Voice Receptionist</span>
            <span className="status-desc">n8n + VAPI + custom CRM integrations</span>
          </div>

          <div className="status-item">
            <span className="status-label">Learning</span>
            <span className="status-val">Agent Observability</span>
            <span className="status-desc">LangGraph + custom MCP servers</span>
          </div>

          <div className="status-item">
            <span className="status-label">Listening</span>
            <span className="status-val">Lex Fridman Podcast</span>
            <span className="status-desc">#451 Sam Altman on AGI timeline</span>
          </div>

          <div className="status-item">
            <span className="status-label">Last Shipped</span>
            <span className="status-val">AI Outreach Engine v2</span>
            <span className="status-desc">Multi-agent personalizing outbound leads</span>
          </div>
        </div>
      </div>
    </div>
  );
}
