import React, { useState } from 'react';
import './index.css';

/**
 * Draw a circle that moves horizontally based on user input
 * @returns {JSX.Element} Interactive SVG component with movable circle
 */
export function Knock62() {
  const [circleX, setCircleX] = useState(300);
  const circleY = 200;
  const radius = 30;

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft' && circleX > radius) {
      setCircleX(prev => prev - 10);
    } else if (e.key === 'ArrowRight' && circleX < 600 - radius) {
      setCircleX(prev => prev + 10);
    }
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white focus:outline-none" 
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <svg width="600" height="400">
        <circle 
          cx={circleX} 
          cy={circleY} 
          r={radius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
