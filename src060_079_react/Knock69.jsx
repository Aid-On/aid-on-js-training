import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No.69 波状に動く円のアニメーション
 * 問題: 600x400のSVGキャンバス内で、複数の円が時間経過とともに波状に動くアニメーションを実装せよ。
 * 
 * 実行例:
 *   - 初期表示: 指定された数の円が水平に並ぶ
 *   - アニメーション: 各円が正弦波に沿って上下に動く
 *   - カスタマイズ: circleCount, amplitude, frequency などのパラメータで動きを調整可能
 * 
 * [Tips]
 *   - Math.sin() を使用して波の動きを計算
 *   - useEffect と setInterval でアニメーションを制御
 *   - 位相差(phaseShift)を使って円同士の動きをずらす
 * 
 * @param {number} [circleCount=10] 表示する円の数
 * @param {number} [amplitude=50] 波の振幅(px)
 * @param {number} [frequency=0.1] 波の周波数
 * @param {number} [phaseShift=0.5] 円同士の位相差
 * @param {number} [intervalMs=50] アニメーション更新間隔(ms)
 * @returns {JSX.Element} 波状に動く円のアニメーションを持つSVGコンポーネント
 */
export function Knock69({
  circleCount = 10,
  amplitude = 50,
  frequency = 0.1,
  phaseShift = 0.5,
  intervalMs = 50
}) {
  const [time, setTime] = useState(0);
  const baseY = 200;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t + frequency);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [frequency, intervalMs]);

  const circles = Array(circleCount).fill(null).map((_, index) => {
    // Distribute circles evenly across the width, leaving margin on both sides
    const spacing = (500 - 100) / (circleCount - 1); // 500px usable width (600px - 2*50px margin)
    const x = 50 + index * spacing; // Start from 50px margin
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
            data-testid={`wave-circle-${index}`}
          />
        ))}
      </svg>
    </div>
  );
}
