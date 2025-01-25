import React, { useState } from 'react';
import './index.css';

/**
 * Draw a 10x10 grid of circles with alternating colors
 * @returns {JSX.Element} SVG component with colored grid pattern
 */
export function Knock70() {
  const gridSize = 10;
  const circleRadius = 15;
  const spacing = 40;
  const startX = 100;
  const startY = 50;

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {Array(gridSize).fill(null).map((_, row) =>
          Array(gridSize).fill(null).map((_, col) => (
            <circle 
              key={`${row}-${col}`}
              cx={startX + col * spacing}
              cy={startY + row * spacing}
              r={circleRadius}
              fill={(row + col) % 2 === 0 ? "white" : "black"}
              stroke="black"
              strokeWidth="1"
            />
          ))
        )}
      </svg>
    </div>
  );
}
