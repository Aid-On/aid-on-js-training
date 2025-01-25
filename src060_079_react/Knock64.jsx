import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw a circle that bounces horizontally between window edges
 * @returns {JSX.Element} SVG component with bouncing circle animation
 */
export function Knock64() {
  const [position, setPosition] = useState({ x: 30, y: 200 });
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const radius = 30;
  const speed = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition(prev => {
        const nextX = prev.x + speed * direction;
        if (nextX + radius > 600) {
          setDirection(-1);
          return { ...prev, x: 500 };
        }
        if (nextX - radius < 0) {
          setDirection(1);
          return { ...prev, x: radius };
        }
        return { ...prev, x: nextX };
      });
    }, 50);
    return () => clearInterval(timer);
  }, [direction]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        <circle 
          cx={position.x} 
          cy={position.y} 
          r={radius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
