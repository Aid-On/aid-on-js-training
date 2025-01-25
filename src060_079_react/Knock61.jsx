import React from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内の座標(200,100)に200x200の正方形と内接円を描画します。
 * 正方形の中心に半径100pxの円を配置し、正方形と円の境界が接するように描画します。
 * @returns {JSX.Element} 正方形と内接円を持つSVGコンポーネント
 */
export function Knock61() {
  // For a square of size 200, the inscribed circle radius is 100
  // Circle center is square's bottom-left + half the square size
  const squareSize = 200;
  const circleRadius = squareSize / 2;
  const squareX = 200;
  const squareY = 100;
  
  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        <rect 
          x={squareX} 
          y={squareY} 
          width={squareSize} 
          height={squareSize}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
        <circle 
          cx={squareX + circleRadius} 
          cy={squareY + circleRadius}
          r={circleRadius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
