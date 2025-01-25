import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内でモンテカルロ法によるπの計算をシミュレーションします。
 * 300x300の正方形内に半径150pxの円を描き、1000個のランダムな点を生成します。
 * 円の内外の点の比率から πの値を推定し、画面左上に表示します。
 * 点は円内が青、円外が赤で表示され、50msごとに1点ずつ追加されます。
 * @returns {JSX.Element} モンテカルロ法によるπ計算のビジュアライゼーションを持つSVGコンポーネント
 */
export function Knock76() {
  const [points, setPoints] = useState([]);
  const [piEstimate, setPiEstimate] = useState(0);
  const size = 300;
  const radius = size / 2;
  const centerX = 300;
  const centerY = 200;
  const maxPoints = 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      if (points.length >= maxPoints) return;

      const x = Math.random() * size - radius;
      const y = Math.random() * size - radius;
      const isInside = Math.sqrt(x * x + y * y) <= radius;

      setPoints(prev => [...prev, { x, y, isInside }]);
      
      const insideCount = points.filter(p => p.isInside).length + (isInside ? 1 : 0);
      const totalCount = points.length + 1;
      setPiEstimate((4 * insideCount) / totalCount);
    }, 50);
    return () => clearInterval(timer);
  }, [points]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <div className="absolute top-2 left-2 text-sm">π ≈ {piEstimate.toFixed(4)}</div>
      <svg width="600" height="400">
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
        <rect 
          x={centerX - radius} 
          y={centerY - radius}
          width={size}
          height={size}
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
        {points.map((point, index) => (
          <circle 
            key={index}
            cx={centerX + point.x}
            cy={centerY + point.y}
            r="2"
            fill={point.isInside ? "blue" : "red"}
          />
        ))}
      </svg>
    </div>
  );
}
