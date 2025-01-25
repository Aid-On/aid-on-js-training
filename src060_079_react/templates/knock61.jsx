import React from 'react';
import './index.css';

/**
 * Draw a 200x200 square at (200,100) with an inscribed circle
 * @returns {JSX.Element} SVG component with square and inscribed circle
 */
export function knock61() {
  // For a square of size 200, the inscribed circle radius is 100
  // Circle center is square's bottom-left + half the square size
  const squareSize = 200;
  const circleRadius = squareSize / 2;
  const squareX = 200;
  const squareY = 100;
  
  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        <rect 
          x={squareX} 
          y={squareY} 
          width={squareSize} 
          height={squareSize}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
        <circle 
          cx={squareX + circleRadius} 
          cy={squareY + circleRadius}
          r={circleRadius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
