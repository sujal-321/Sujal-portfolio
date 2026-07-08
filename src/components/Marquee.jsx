import React from 'react';

export default function Marquee({ items }) {
  // Double the items array to create a seamless looping effect
  const doubledItems = [...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {doubledItems.map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
