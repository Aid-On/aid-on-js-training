import React, { useState } from 'react';
import './index.css';

/**
 * Draw a circle with specified center coordinates in a 600x400 window
 * @param {Object} props - Component properties
 * @param {number} [props.cx=200] - X coordinate for circle center
 * @param {number} [props.cy=150] - Y coordinate for circle center
 * @returns {JSX.Element} SVG circle component
 */
export function Knock60({ cx = 200, cy = 150 }) {
  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        <circle 
          cx={cx} 
          cy={cy} 
          r="50" 
          fill="white" 
          stroke="black" 
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
