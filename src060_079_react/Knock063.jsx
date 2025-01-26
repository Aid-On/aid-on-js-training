import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No. 63 円軌道アニメーション
 * 問題: 600x400のSVGキャンバス内で、中心点を軸に円を軌道上で回転させるコンポーネントを作成せよ。
 * 実行例:
 *   - 初期表示: 中心座標(300, 200)を中心とした半径100pxの軌道上に半径30pxの円が表示される
 *   - アニメーション: 50msごとに2度ずつ時計回りに回転する
 *   - 軌道: 点線で表示される
 *
 * [Tips]
 * - React.useState でアニメーションの角度を管理する
 * - setInterval を使用して定期的に角度を更新する
 * - Math.cos と Math.sin を使用して円の座標を計算する
 *
 * @param {number} [angleIncrement=2] 1回の更新で進む角度(度)
 * @param {number} [interval=50] アニメーションの更新間隔(ms)
 * @param {number} [orbitRadius=100] 軌道の半径(px)
 * @param {number} [circleRadius=30] 移動する円の半径(px)
 * @param {number} [centerX=300] 中心のX座標
 * @param {number} [centerY=200] 中心のY座標
 * @returns {JSX.Element} 円軌道上を移動する円のアニメーションを持つSVGコンポーネント
 */
export function Knock063({
  angleIncrement = 2,
  interval = 50,
  orbitRadius = 100,
  circleRadius = 30,
  centerX = 300,
  centerY = 200
}) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAngle(prev => (prev + angleIncrement) % 360);
    }, interval);
    return () => clearInterval(timer);
  }, [angleIncrement, interval]);

  const circleX = centerX + orbitRadius * Math.cos(angle * Math.PI / 180);
  const circleY = centerY + orbitRadius * Math.sin(angle * Math.PI / 180);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {/* Orbit path */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={orbitRadius}
          fill="none"
          stroke="gray"
          strokeWidth="1"
          strokeDasharray="4"
          data-testid="orbit-path"
        />
        {/* Moving circle */}
        <circle 
          cx={circleX} 
          cy={circleY} 
          r={circleRadius}
          fill="white"
          stroke="black"
          strokeWidth="1"
          data-testid="moving-circle"
        />
      </svg>
    </div>
  );
}
