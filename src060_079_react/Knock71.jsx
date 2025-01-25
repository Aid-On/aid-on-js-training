import React, { useState } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内でクリックした位置に円を表示します。
 * クリックした場所に白色で黒い枠線の円を追加します。
 * 最大5個までの円を同時に表示できます。
 * @returns {JSX.Element} クリックで円を追加できるSVGコンポーネント
 */
export function Knock71() {
  const maxCircles = 5;
  const [circles, setCircles] = useState([]);
  // Initialize with empty array
  const circleRadius = 20;

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCircles(prev => {
      if (prev.length < maxCircles) {
        return [...prev, { x, y }];
      }
      return prev;
    });
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white cursor-pointer"
      onClick={handleClick}
    >
      <svg width="600" height="400">
        {circles.map((pos, index) => (
          <circle 
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={circleRadius}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
