import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No. 65 斜めに跳ね返る円のアニメーション
 * 問題: 600x400のSVGキャンバス内で、斜めに移動して壁で跳ね返る円を描画するコンポーネントを作成せよ。
 * 実行例:
 *   - 初期表示: 指定された初期位置(デフォルト: x=30, y=30)に円(半径30px)が表示される
 *   - アニメーション: 指定された速度(デフォルト: dx=5, dy=5)で斜めに移動
 *   - 衝突: ウィンドウの端に到達すると反射して跳ね返る
 *   - 更新間隔: 指定されたミリ秒間隔(デフォルト: 50ms)でアニメーションが更新される
 *
 * [Tips]
 * - React.useState で円の位置と速度を管理する
 * - useEffect でアニメーションタイマーを制御する
 * - 衝突判定は円の半径を考慮して行う
 * - onCollideX/onCollideYハンドラーで衝突イベントをカスタマイズ可能
 *
 * @param {number} [initialX=30] 円の初期x座標
 * @param {number} [initialY=30] 円の初期y座標
 * @param {number} [velocityX=5] x方向の速度(px/フレーム)
 * @param {number} [velocityY=5] y方向の速度(px/フレーム)
 * @param {number} [intervalMs=50] アニメーション更新間隔(ミリ秒)
 * @param {Function} [onCollideX] x方向の壁との衝突時のカスタムハンドラ
 * @param {Function} [onCollideY] y方向の壁との衝突時のカスタムハンドラ
 * @returns {JSX.Element} 跳ね返る円のアニメーションを持つSVGコンポーネント
 */
export function Knock65({
  initialX = 30,
  initialY = 30,
  velocityX = 5,
  velocityY = 5,
  intervalMs = 50,
  onCollideX,
  onCollideY
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [velocity, setVelocity] = useState({ dx: velocityX, dy: velocityY });
  const radius = 30;

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition(prev => {
        const nextX = prev.x + velocity.dx;
        const nextY = prev.y + velocity.dy;
        
        let newDx = velocity.dx;
        let newDy = velocity.dy;

        // Check for X-axis collision
        if (nextX + radius >= 600 || nextX - radius <= 0) {
          newDx = -velocity.dx;
          onCollideX?.();
        }
        // Check for Y-axis collision
        if (nextY + radius >= 400 || nextY - radius <= 0) {
          newDy = -velocity.dy;
          onCollideY?.();
        }

        setVelocity({ dx: newDx, dy: newDy });

        return {
          x: Math.max(radius, Math.min(600 - radius, nextX)),
          y: Math.max(radius, Math.min(400 - radius, nextY))
        };
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [velocity, intervalMs, onCollideX, onCollideY]);

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
