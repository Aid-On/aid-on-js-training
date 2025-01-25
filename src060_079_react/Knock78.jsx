import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw a binary tree fractal
 * @returns {JSX.Element} SVG component with binary tree fractal
 */
export function Knock78() {
  const [lines, setLines] = useState([]);
  const startX = 300;
  const startY = 350;
  const length = 100;
  const angle = Math.PI / 2;
  const depth = 8;

  useEffect(() => {
    const generateTree = (x, y, len, angle, depth) => {
      if (depth === 0) return [];

      const endX = x + len * Math.cos(angle);
      const endY = y - len * Math.sin(angle);
      
      return [
        { x1: x, y1: y, x2: endX, y2: endY },
        ...generateTree(endX, endY, len * 0.7, angle + Math.PI / 4, depth - 1),
        ...generateTree(endX, endY, len * 0.7, angle - Math.PI / 4, depth - 1)
      ];
    };

    setLines(generateTree(startX, startY, length, angle, depth));
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {lines.map((line, index) => (
          <line 
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
