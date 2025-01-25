import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw expanding/contracting circles in a pattern
 * @returns {JSX.Element} SVG component with pulsing circle pattern
 */
export function knock75() {
  const [time, setTime] = useState(0);
  const centerX = 300;
  const centerY = 200;
  const baseRadius = 20;
  const circleCount = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t + 0.1);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const getCircles = () => {
    return Array(circleCount).fill(null).map((_, index) => {
      const angle = (2 * Math.PI * index) / circleCount;
      const distance = 80;
      const x = centerX + distance * Math.cos(angle);
      const y = centerY + distance * Math.sin(angle);
      const scale = 1 + 0.3 * Math.sin(time + index * 0.5);
      
      return { x, y, radius: baseRadius * scale };
    });
  };

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {getCircles().map((circle, index) => (
          <circle 
            key={index}
            cx={circle.x}
            cy={circle.y}
            r={circle.radius}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
