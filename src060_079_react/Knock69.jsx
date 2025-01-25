import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内で波状に動く10個の円を描画します。
 * 円は半径20pxで、50pxの振幅と0.1の周波数で波を描きます。
 * アニメーションは50msごとに更新され、波の位相が0.1ずつ変化します。
 * @returns {JSX.Element} 波状に動く円のアニメーションを持つSVGコンポーネント
 */
export function Knock69() {
  const [time, setTime] = useState(0);
  const circleCount = 10;
  const baseY = 200;
  const amplitude = 50;
  const frequency = 0.1;
  const phaseShift = 0.5;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t + 0.1);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const circles = Array(circleCount).fill(null).map((_, index) => {
    const x = 100 + index * 50;
    const y = baseY + Math.sin(time + index * phaseShift) * amplitude;
    return { x, y };
  });

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {circles.map((pos, index) => (
          <circle 
            key={index}
            cx={pos.x}
            cy={pos.y}
            r="20"
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
