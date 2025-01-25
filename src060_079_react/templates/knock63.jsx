import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw a circle that moves in a circular path
 * @returns {JSX.Element} SVG component with animated circle
 */
export function knock63() {
  const [angle, setAngle] = useState(0);
  const centerX = 300;
  const centerY = 200;
  const orbitRadius = 100;
  const circleRadius = 30;

  useEffect(() => {
    const timer = setInterval(() => {
      setAngle(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const circleX = centerX + orbitRadius * Math.cos(angle * Math.PI / 180);
  const circleY = centerY + orbitRadius * Math.sin(angle * Math.PI / 180);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {/* Orbit path */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={orbitRadius}
          fill="none"
          stroke="gray"
          strokeWidth="1"
          strokeDasharray="4"
        />
        {/* Moving circle */}
        <circle 
          cx={circleX} 
          cy={circleY} 
          r={circleRadius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
