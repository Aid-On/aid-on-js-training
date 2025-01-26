import React, { useState, useCallback, useRef } from "react";
import "./index.css";

export function Knock072({
  maxTrailLength = 10,
  circleRadius = 5,
  onMouseMove,
}) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newPos = {
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      };

      setPositions((prev) => {
        const newPositions = [...prev, newPos].slice(-maxTrailLength);

        if (onMouseMove) {
          onMouseMove({ x: newPos.x, y: newPos.y, event: e });
        }

        return newPositions;
      });
    },
    [maxTrailLength, onMouseMove]
  );

  return (
    <div
      ref={containerRef}
      data-testid="container"
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white flex justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <svg width="600" height="400">
        {positions.map((pos, index) => (
          <circle
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={circleRadius}
            opacity={(index + 1) / positions.length}
            fill="black"
            data-testid={`trail-circle-${index}`}
          />
        ))}
      </svg>
    </div>
  );
}
