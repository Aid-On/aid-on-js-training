import React, { useState, useEffect } from "react";
import "./index.css";

/**
 * No. 75 アニメーションする円のパターン
 * 問題: 600x400のSVGキャンバス内で、6つの円が拡大縮小するアニメーションを作成せよ。
 * 実行例:
 *   - 初期表示: 中心座標(300,200)を中心に、半径80pxの円周上に6つの円が配置される
 *   - アニメーション: 各円が基本半径20pxを基準に±30%の範囲で拡大縮小する
 *   - タイミング: 50msごとに更新され、位相が0.1ずつ変化する
 *
 * [Tips]
 * - React.useState でアニメーションの時間を管理する
 * - useEffect で setInterval を使用してアニメーションを制御
 * - 円の座標計算には Math.cos と Math.sin を使用
 * - スケールの計算には Math.sin を使用して滑らかな拡大縮小を実現
 *
 * @param {Object} props コンポーネントのプロパティ
 * @param {number} [props.animationInterval=50] アニメーションの更新間隔(ms)
 * @param {number} [props.circleCount=6] 描画する円の数
 * @param {(time: number) => void} [props.onAnimationTick] アニメーションの各更新時に呼び出されるコールバック
 * @returns {JSX.Element} 拡大縮小する円のパターンを持つSVGコンポーネント
 */
export function Knock075({
  animationInterval = 50,
  circleCount = 6,
  onAnimationTick,
}) {
  const [time, setTime] = useState(0);
  const centerX = 300;
  const centerY = 200;
  const baseRadius = 20;

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = time + 0.1;
      setTime(newTime);
      if (onAnimationTick) {
        onAnimationTick(newTime);
      }
    }, animationInterval);
    return () => clearInterval(timer);
  }, [time, animationInterval, onAnimationTick]);

  /**
   * 円の位置とサイズを計算する
   * @returns {{ x: number, y: number, radius: number }[]} 各円の座標と半径
   */
  const getCircles = () => {
    return Array(circleCount)
      .fill(null)
      .map((_, index) => {
        const angle = (2 * Math.PI * index) / circleCount;
        const distance = 80;
        const x = centerX + distance * Math.cos(angle);
        const y = centerY + distance * Math.sin(angle);
        const scale = 1 + 0.3 * Math.sin(time + index * 0.5);

        return { x, y, radius: baseRadius * scale };
      });
  };

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {getCircles().map((circle, index) => (
          <circle
            key={index}
            cx={circle.x}
            cy={circle.y}
            r={circle.radius}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
