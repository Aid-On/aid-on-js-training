import React, { useState } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内で左右の矢印キーで水平に移動する円を描画します。
 * 円の半径は30pxで、キー入力ごとに10pxずつ移動します。
 * 初期位置はx=-270で、キー入力で左右に移動できます。
 * @returns {JSX.Element} キー操作で移動可能な円を持つSVGコンポーネント
 */
export function Knock62() {
  const [circleX, setCircleX] = useState(-270);
  const circleY = 200;
  const radius = 30;

  const handleKeyDown = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    if (e.key === 'ArrowLeft') {
      setCircleX(x => x - 10);
    } else if (e.key === 'ArrowRight') {
      setCircleX(x => x + 10);
    }
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white focus:outline-none" 
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <svg width="600" height="400">
        <circle 
          cx={circleX} 
          cy={circleY} 
          r={radius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
