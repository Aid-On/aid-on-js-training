import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No. 72 マウスの軌跡アニメーション
 * 問題: 600x400のSVGキャンバス内で、マウスの動きに追従する軌跡効果のある円を描画せよ。
 * 実行例:
 *   - 初期表示: キャンバスは空の状態
 *   - マウス移動: 最大10個の円（半径15px）がマウス座標に沿って表示される
 *   - 不透明度: 古い円ほど透明（0.3）で、新しい円ほど不透明（1.0）
 *
 * [Tips]
 * - React.useState で円の位置履歴を配列として管理する
 * - マウスイベントの取得には onMouseMove を使用
 * - マウス座標は e.clientX, e.clientY から取得（getBoundingClientRect()でオフセットを考慮）
 *
 * @param {number} [maxTrailLength=10] 軌跡として表示する円の最大数
 * @param {number} [circleRadius=15] 円の半径(px)
 * @param {Function} [onMouseMove] マウス移動時のカスタムハンドラ
 * @returns {JSX.Element} マウスの軌跡アニメーションを持つSVGコンポーネント
 */
export function Knock72({
  maxTrailLength = 10,
  circleRadius = 15,
  onMouseMove
}) {
  const [positions, setPositions] = useState([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (onMouseMove) {
      onMouseMove({ x, y, event: e });
    }
    
    setPositions(prev => {
      const newPositions = [...prev, { x, y }];
      if (newPositions.length > maxTrailLength) {
        return newPositions.slice(-maxTrailLength);
      }
      return newPositions;
    });
  };

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white"
      onMouseMove={handleMouseMove}
    >
      <svg width="600" height="400">
        {positions.map((pos, index) => (
          <circle 
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={circleRadius}
            fill="white"
            stroke="black"
            strokeWidth="1"
            opacity={0.3 + (0.7 * index / positions.length)}
          />
        ))}
      </svg>
    </div>
  );
}
