import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No.79 マンデルブロ集合のビジュアライズ
 * 問題: SVGキャンバス内にマンデルブロ集合を可視化するコンポーネントを作成せよ。
 * 
 * 実装要件:
 *   - 複素平面上の点を2pxごとにサンプリング
 *   - 各点について最大反復回数まで計算を実行
 *   - 収束しない点は黒く表示
 *   - 収束する点は反復回数に基づいてHSL色相で着色
 *   - 表示範囲は実部[-2.5,1]、虚部[-1,1]の領域
 * 
 * [Tips]
 *   - React.useEffect でマンデルブロ集合の計算を実行
 *   - React.useState で計算結果の点群を管理
 *   - SVG要素を使用して点を描画
 *   - パフォーマンス向上のため、計算は2pxごとに実施
 * 
 * @param {number} [width=600] SVGキャンバスの幅
 * @param {number} [height=400] SVGキャンバスの高さ
 * @param {number} [maxIterations=100] 最大反復回数
 * @param {number} [samplingRate=2] サンプリング間隔（ピクセル単位）
 * @returns {JSX.Element} マンデルブロ集合の可視化を持つSVGコンポーネント
 */
export function Knock79({
  width = 600,
  height = 400,
  maxIterations = 100,
  samplingRate = 2
}) {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const calculateMandelbrot = () => {
      const newPoints = [];
      for (let px = 0; px < width; px += samplingRate) {
        for (let py = 0; py < height; py += samplingRate) {
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
  }, [width, height, maxIterations, samplingRate]);

  return (
    <div className={`w-[${width}px] h-[${height}px] border border-gray-300 relative bg-white`}>
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="black" />
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
