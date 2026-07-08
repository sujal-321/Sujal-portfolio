import React from 'react';

export default function Eyebrow({ num, text }) {
  return (
    <div className="eyebrow">
      <span className="num">{num}</span>
      <span className="rule" />
      <span>{text}</span>
    </div>
  );
}
