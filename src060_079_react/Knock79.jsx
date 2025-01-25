import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内にマンデルブロ集合を可視化します。
 * 複素平面上の点を2pxごとにサンプリングし、最大100回の反復で収束判定を行います。
 * 収束しない点は黒く、収束する点は反復回数に基づいてHSL色相で着色されます。
 * 表示範囲は実部[-2.5,1]、虚部[-1,1]の領域です。
 * @returns {JSX.Element} マンデルブロ集合の可視化を持つSVGコンポーネント
 */
export function Knock79() {
  const [points, setPoints] = useState([]);
  const width = 600;
  const height = 400;
  const maxIterations = 100;

  useEffect(() => {
    const calculateMandelbrot = () => {
      const newPoints = [];
      for (let px = 0; px < width; px += 2) {
        for (let py = 0; py < height; py += 2) {
          const x0 = (px - width * 0.7) * 3.5 / width;
          const y0 = (py - height / 2) * 2 / height;
          
          let x = 0;
          let y = 0;
          let iteration = 0;
          
          while (x * x + y * y <= 4 && iteration < maxIterations) {
            const xtemp = x * x - y * y + x0;
            y = 2 * x * y + y0;
            x = xtemp;
            iteration++;
          }
          
          if (iteration < maxIterations) {
            newPoints.push({ x: px, y: py, iteration });
          }
        }
      }
      setPoints(newPoints);
    };

    calculateMandelbrot();
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        <rect width="600" height="400" fill="black" />
        {points.map((point, index) => (
          <circle 
            key={index}
            cx={point.x}
            cy={point.y}
            r="1"
            fill={`hsl(${(point.iteration * 2) % 360}, 50%, 50%)`}
          />
        ))}
      </svg>
    </div>
  );
}
