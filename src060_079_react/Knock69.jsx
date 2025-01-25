import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw multiple circles in a wave pattern
 * @returns {JSX.Element} SVG component with animated wave of circles
 */
export function Knock69() {
  const [time, setTime] = useState(0);
  const circleCount = 10;
  const baseY = 200;
  const amplitude = 50;
  const frequency = 0.1;
  const phaseShift = 0.5;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t + 0.1);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const circles = Array(circleCount).fill(null).map((_, index) => {
    const x = 100 + index * 50;
    const y = baseY + Math.sin(time + index * phaseShift) * amplitude;
    return { x, y };
  });

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {circles.map((pos, index) => (
          <circle 
            key={index}
            cx={pos.x}
            cy={pos.y}
            r="20"
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
