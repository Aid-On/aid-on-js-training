import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内にシェルピンスキーの三角形フラクタルを描画します。
 * 頂点座標(300,50)、(150,350)、(450,350)の三角形を基準に、深さ6まで再帰的に分割します。
 * 各点は半径1pxの黒い円で表現され、フラクタルパターンを形成します。
 * @returns {JSX.Element} シェルピンスキーの三角形フラクタルを持つSVGコンポーネント
 */
export function Knock77() {
  const [points, setPoints] = useState([]);
  const depth = 6;
  
  useEffect(() => {
    const generateSierpinski = (x1, y1, x2, y2, x3, y3, depth) => {
      if (depth === 0) {
        return [[x1, y1], [x2, y2], [x3, y3]];
      }
      
      const x12 = (x1 + x2) / 2;
      const y12 = (y1 + y2) / 2;
      const x23 = (x2 + x3) / 2;
      const y23 = (y2 + y3) / 2;
      const x31 = (x3 + x1) / 2;
      const y31 = (y3 + y1) / 2;
      
      return [
        ...generateSierpinski(x1, y1, x12, y12, x31, y31, depth - 1),
        ...generateSierpinski(x12, y12, x2, y2, x23, y23, depth - 1),
        ...generateSierpinski(x31, y31, x23, y23, x3, y3, depth - 1)
      ];
    };

    const points = generateSierpinski(300, 50, 150, 350, 450, 350, depth);
    setPoints(points);
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {points.map(([x, y], index) => (
          <circle 
            key={index}
            cx={x}
            cy={y}
            r="1"
            fill="black"
          />
        ))}
      </svg>
    </div>
  );
}
