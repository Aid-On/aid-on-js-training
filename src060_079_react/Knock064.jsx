import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No. 64 水平方向に跳ね返る円のアニメーション
 * 問題: 600x400のSVGキャンバス内で、自動的に水平方向に移動し、端で跳ね返る円を作成せよ。
 * 実行例:
 *   - 初期表示: 指定されたx座標に円(半径30px)が表示される
 *   - アニメーション: 50msごとに指定された速度で移動
 *   - 跳ね返り: ウィンドウの端(x=0またはx=600)で跳ね返る
 *
 * [Tips]
 * - React.useState で円の位置と移動方向を管理する
 * - useEffect でアニメーションタイマーを制御
 * - setInterval で定期的な位置更新を実装
 *
 * @param {number} [initialX=30] 円の初期x座標
 * @param {number} [initialY=200] 円の初期y座標
 * @param {number} [speed=5] 1フレームあたりの移動距離(px)
 * @param {Function} [onBounceLeft] 左端での跳ね返り時のカスタムハンドラ
 * @param {Function} [onBounceRight] 右端での跳ね返り時のカスタムハンドラ
 * @returns {JSX.Element} 跳ね返る円のアニメーションを持つSVGコンポーネント
 */
export function Knock64({
  initialX = 30,
  initialY = 200,
  speed = 5,
  onBounceLeft,
  onBounceRight
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const radius = 30;

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition(prev => {
        const nextX = prev.x + speed * direction;
        // Right boundary check
        if (nextX + radius > 600) {
          setDirection(-1);
          if (onBounceRight) {
            onBounceRight();
          }
          return { ...prev, x: 600 - radius };
        }
        // Left boundary check
        if (nextX - radius < 0) {
          setDirection(1);
          if (onBounceLeft) {
            onBounceLeft();
          }
          return { ...prev, x: radius };
        }
        return { ...prev, x: nextX };
      });
    }, 50);
    return () => clearInterval(timer);
  }, [direction, speed, onBounceLeft, onBounceRight]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        <circle 
          cx={position.x} 
          cy={position.y} 
          r={radius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
