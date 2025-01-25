import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内でマウスの動きに追従する軌跡効果のある円を描画します。
 * 不透明度が増加（0.3から1.0）する10個の円で軌跡を表現します。
 * 各円の半径は15pxで、マウスの位置に追従します。
 * @returns {JSX.Element} マウスの軌跡アニメーションを持つSVGコンポーネント
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
