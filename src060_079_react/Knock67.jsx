import React, { useState } from 'react';
import './index.css';

/**
 * Draw a grid of circles that change color on click
 * @returns {JSX.Element} SVG component with interactive grid of circles
 */
export function Knock67() {
  const gridSize = 5;
  const circleRadius = 20;
  const spacing = 60;
  const startX = 150;
  const startY = 100;

  const initialGrid = Array(gridSize).fill(null).map(() => 
    Array(gridSize).fill(false)
  );
  
  const [activeCircles, setActiveCircles] = useState(initialGrid);

  const handleCircleClick = (row, col) => {
    setActiveCircles(prev => {
      const newGrid = [...prev];
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {activeCircles.map((row, rowIndex) =>
          row.map((isActive, colIndex) => (
            <circle 
              key={`${rowIndex}-${colIndex}`}
              cx={startX + colIndex * spacing}
              cy={startY + rowIndex * spacing}
              r={circleRadius}
              fill={isActive ? "black" : "white"}
              stroke="black"
              strokeWidth="1"
              onClick={() => handleCircleClick(rowIndex, colIndex)}
              className="cursor-pointer"
            />
          ))
        )}
      </svg>
    </div>
  );
}
