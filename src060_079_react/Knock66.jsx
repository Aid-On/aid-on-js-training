import React, { useState } from 'react';
import './index.css';

/**
 * Draw a circle that follows mouse movement in a 600x400 window.
 * Circle has radius 30px and stays within window bounds.
 * Initial position is at (180, 150).
 * @returns {JSX.Element} SVG component with mouse-following circle
 */
export function Knock66() {
  const [position, setPosition] = useState({ x: 180, y: 150 });
  const radius = 30;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(radius, Math.min(600 - radius, e.clientX - rect.left));
    const y = Math.max(radius, Math.min(400 - radius, e.clientY - rect.top));
    setPosition({ x, y });
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white"
      onMouseMove={handleMouseMove}
    >
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
