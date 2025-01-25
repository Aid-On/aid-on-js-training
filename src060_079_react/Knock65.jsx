import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内で斜めに跳ね返る円を描画します。
 * 円の半径は30pxで、x方向に5px、y方向に5pxの速度で移動します。
 * ウィンドウの端に到達すると反射して跳ね返ります。
 * アニメーションは50msごとに更新されます。
 * @returns {JSX.Element} 斜めに跳ね返る円のアニメーションを持つSVGコンポーネント
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
