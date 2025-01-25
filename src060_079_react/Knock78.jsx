import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内に二分木フラクタルを描画します。
 * 座標(300,350)から上向きに開始し、深さ8まで再帰的に枝分かれします。
 * 各枝の長さは親の0.7倍で、分岐角度は親に対して±45度です。
 * 各枝は黒い線で描画され、幅は1pxです。
 * @returns {JSX.Element} 二分木フラクタルを持つSVGコンポーネント
 */
export function Knock78() {
  const [lines, setLines] = useState([]);
  const startX = 300;
  const startY = 350;
  const length = 100;
  const angle = Math.PI / 2;
  const depth = 8;

  useEffect(() => {
    const generateTree = (x, y, len, angle, depth) => {
      if (depth === 0) return [];

      const endX = x + len * Math.cos(angle);
      const endY = y - len * Math.sin(angle);
      
      return [
        { x1: x, y1: y, x2: endX, y2: endY },
        ...generateTree(endX, endY, len * 0.7, angle + Math.PI / 4, depth - 1),
        ...generateTree(endX, endY, len * 0.7, angle - Math.PI / 4, depth - 1)
      ];
    };

    setLines(generateTree(startX, startY, length, angle, depth));
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {lines.map((line, index) => (
          <line 
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
