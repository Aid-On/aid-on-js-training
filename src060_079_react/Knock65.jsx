import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * Draw a circle that bounces diagonally in the window
 * @returns {JSX.Element} SVG component with bouncing circle animation
 */
export function Knock65() {
  const [position, setPosition] = useState({ x: 30, y: 30 });
  const [velocity, setVelocity] = useState({ dx: 5, dy: 5 });
  const radius = 30;

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition(prev => {
        const nextX = prev.x + velocity.dx;
        const nextY = prev.y + velocity.dy;
        
        let newDx = velocity.dx;
        let newDy = velocity.dy;

        if (nextX + radius >= 600 || nextX - radius <= 0) {
          newDx = -velocity.dx;
        }
        if (nextY + radius >= 400 || nextY - radius <= 0) {
          newDy = -velocity.dy;
        }

        setVelocity({ dx: newDx, dy: newDy });

        return {
          x: Math.max(radius, Math.min(600 - radius, nextX)),
          y: Math.max(radius, Math.min(400 - radius, nextY))
        };
      });
    }, 50);
    return () => clearInterval(timer);
  }, [velocity]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
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
