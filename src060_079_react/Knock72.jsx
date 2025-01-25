import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw circles that follow mouse movement with trail effect in a 600x400 window.
 * Maintains a trail of 10 circles with increasing opacity (0.3 to 1.0).
 * Each circle has radius 15px and follows mouse position.
 * @returns {JSX.Element} SVG component with mouse trail animation
 */
export function Knock72() {
  const [positions, setPositions] = useState([]);
  const maxTrailLength = 10;
  const circleRadius = 15;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setPositions(prev => {
      const newPositions = [...prev, { x, y }];
      if (newPositions.length > maxTrailLength) {
        return newPositions.slice(-maxTrailLength);
      }
      return newPositions;
    });
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white"
      onMouseMove={handleMouseMove}
    >
      <svg width="600" height="400">
        {positions.map((pos, index) => (
          <circle 
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={circleRadius}
            fill="white"
            stroke="black"
            strokeWidth="1"
            opacity={0.3 + (0.7 * index / positions.length)}
          />
        ))}
      </svg>
    </div>
  );
}
