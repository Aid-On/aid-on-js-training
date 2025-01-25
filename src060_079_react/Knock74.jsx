import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内に螺旋状に配置された50個の円を描画します。
 * 各円の半径は10pxで、中心座標(300,200)から螺旋状に広がります。
 * 円と円の間の角度は0.5ラジアンで、距離は5pxずつ増加します。
 * @returns {JSX.Element} 螺旋状のパターンを持つSVGコンポーネント
 */
export function Knock74() {
  const [circles, setCircles] = useState([]);
  const centerX = 300;
  const centerY = 200;
  const radius = 10;
  const maxCircles = 50;

  useEffect(() => {
    const newCircles = [];
    for (let i = 0; i < maxCircles; i++) {
      const angle = i * 0.5;
      const distance = 5 * i;
      newCircles.push({
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle)
      });
    }
    setCircles(newCircles);
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {circles.map((pos, index) => (
          <circle 
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={radius}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
