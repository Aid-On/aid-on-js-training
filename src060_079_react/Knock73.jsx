import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内で異なる速度で跳ね返る3つの円を描画します。
 * 各円の半径は20pxで、それぞれ異なる初期位置と速度を持ちます。
 * ウィンドウの端に到達すると反射して跳ね返ります。
 * アニメーションは50msごとに更新されます。
 * @returns {JSX.Element} 複数の跳ね返る円のアニメーションを持つSVGコンポーネント
 */
export function Knock73() {
  const [circles, setCircles] = useState([
    { x: 100, y: 100, dx: 4, dy: 3 },
    { x: 200, y: 200, dx: -3, dy: 4 },
    { x: 300, y: 150, dx: 5, dy: -3 }
  ]);
  const radius = 20;

  useEffect(() => {
    const timer = setInterval(() => {
      setCircles(prevCircles => 
        prevCircles.map(circle => {
          let { x, y, dx, dy } = circle;
          x += dx;
          y += dy;

          if (x + radius > 600 || x - radius < 0) dx = -dx;
          if (y + radius > 400 || y - radius < 0) dy = -dy;

          return {
            x: Math.max(radius, Math.min(600 - radius, x)),
            y: Math.max(radius, Math.min(400 - radius, y)),
            dx,
            dy
          };
        })
      );
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {circles.map((circle, index) => (
          <circle 
            key={index}
            cx={circle.x}
            cy={circle.y}
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
