import React, { useState } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内でマウスの動きに追従する円を描画します。
 * 円の半径は30pxで、ウィンドウの境界内に留まります。
 * 初期位置は(180, 150)です。
 * @returns {JSX.Element} マウスに追従する円を持つSVGコンポーネント
 */
export function Knock66() {
  const [position, setPosition] = useState({ x: 180, y: 150 });
  const radius = 30;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(radius, Math.min(600 - radius, e.clientX - rect.left));
    const y = Math.max(radius, Math.min(400 - radius, e.clientY - rect.top));
    setPosition({ x, y });
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white"
      onMouseMove={handleMouseMove}
    >
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
