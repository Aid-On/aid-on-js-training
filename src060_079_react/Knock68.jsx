import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内でマウスとの距離に応じてサイズが変化する円を描画します。
 * 円は中心(300, 200)に固定され、半径は20pxから100pxの間で変化します。
 * サイズは中心からのマウスの距離（200pxで正規化）に基づいて変化します。
 * @returns {JSX.Element} サイズが変化する円を持つSVGコンポーネント
 */
export function Knock68() {
  const [mousePos, setMousePos] = useState({ x: 300, y: 200 });
  const centerX = 300;
  const centerY = 200;
  const minRadius = 20;
  const maxRadius = 100;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const getRadius = () => {
    const distance = Math.sqrt(
      Math.pow(mousePos.x - centerX, 2) + 
      Math.pow(mousePos.y - centerY, 2)
    );
    const normalizedDistance = Math.min(distance, 200) / 200;
    return minRadius + (maxRadius - minRadius) * normalizedDistance;
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white"
      onMouseMove={handleMouseMove}
    >
      <svg width="600" height="400">
        <circle 
          cx={centerX}
          cy={centerY}
          r={getRadius()}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
