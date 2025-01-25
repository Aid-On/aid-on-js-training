import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw a spiral pattern of circles
 * @returns {JSX.Element} SVG component with spiral pattern
 */
export function knock74() {
  const [circles, setCircles] = useState([]);
  const centerX = 300;
  const centerY = 200;
  const radius = 10;
  const maxCircles = 50;

  useEffect(() => {
    const newCircles = [];
    for (let i = 0; i < maxCircles; i++) {
      const angle = i * 0.5;
      const distance = 5 * i;
      newCircles.push({
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle)
      });
    }
    setCircles(newCircles);
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {circles.map((pos, index) => (
          <circle 
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={radius}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
