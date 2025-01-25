import React, { useState } from 'react';
import './index.css';

/**
 * Draw a circle that follows mouse movement
 * @returns {JSX.Element} SVG component with mouse-following circle
 */
export function Knock66() {
  const [position, setPosition] = useState({ x: 300, y: 200 });
  const radius = 30;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ 
      x: Math.max(radius, Math.min(600 - radius, x)),
      y: Math.max(radius, Math.min(400 - radius, y))
    });
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
