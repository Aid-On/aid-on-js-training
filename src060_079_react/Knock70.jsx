import React, { useState } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内に10x10のグリッド状の円を描画します。
 * 各円の半径は15pxで、40pxの間隔で配置されます。
 * 市松模様のように、隣り合う円が白と黒で交互に配色されます。
 * @returns {JSX.Element} 市松模様状の円のグリッドを持つSVGコンポーネント
 */
export function Knock70() {
  const gridSize = 10;
  const circleRadius = 15;
  const spacing = 40;
  const startX = 100;
  const startY = 50;

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {Array(gridSize).fill(null).map((_, row) =>
          Array(gridSize).fill(null).map((_, col) => (
            <circle 
              key={`${row}-${col}`}
              cx={startX + col * spacing}
              cy={startY + row * spacing}
              r={circleRadius}
              fill={(row + col) % 2 === 0 ? "white" : "black"}
              stroke="black"
              strokeWidth="1"
            />
          ))
        )}
      </svg>
    </div>
  );
}
