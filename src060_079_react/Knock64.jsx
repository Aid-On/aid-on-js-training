import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内で水平に跳ね返る円を描画します。
 * 円の半径は30pxで、ウィンドウの端（右端はx=470）で跳ね返ります。
 * アニメーションは50msごとに更新され、1フレームあたり5pxの速度で移動します。
 * @returns {JSX.Element} 跳ね返る円のアニメーションを持つSVGコンポーネント
 */
export function Knock64() {
  const [position, setPosition] = useState({ x: 30, y: 200 });
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const radius = 30;
  const speed = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition(prev => {
        const nextX = prev.x + speed * direction;
        if (nextX + radius > 600) {
          setDirection(-1);
          return { ...prev, x: 470 };
        }
        if (nextX - radius < 0) {
          setDirection(1);
          return { ...prev, x: radius };
        }
        return { ...prev, x: nextX };
      });
    }, 50);
    return () => clearInterval(timer);
  }, [direction]);

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
