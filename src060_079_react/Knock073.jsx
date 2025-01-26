import React, { useState, useEffect } from "react";
import "./index.css";

/**
 * No. 73 複数の円をアニメーションさせて跳ね返りを実装
 * 問題: 600x400のSVGキャンバス内で、複数の円を異なる速度で動かし、壁に当たると跳ね返るアニメーションを実装せよ。
 * 実行例:
 *   - 初期表示: 3つの円（半径20px）が異なる位置に表示される
 *   - アニメーション: 各円が設定された速度で移動し、壁に当たると反射する
 *   - 衝突判定: 円が画面端（x=0,600やy=0,400）に触れると、その方向の速度が反転する
 *
 * [Tips]
 * - React.useState で円の位置と速度を管理する
 * - useEffect と setInterval でアニメーションを実装
 * - 円の位置が画面端に達したら速度を反転（dx = -dx または dy = -dy）
 *
 * @param {Object} props コンポーネントのプロパティ
 * @param {Array<{x: number, y: number, dx: number, dy: number}>} [props.initialCircles] 円の初期位置と速度の配列
 * @param {number} [props.intervalMs=50] アニメーションの更新間隔（ミリ秒）
 * @param {number} [props.width=600] SVGキャンバスの幅
 * @param {number} [props.height=400] SVGキャンバスの高さ
 * @param {number} [props.radius=20] 円の半径
 * @returns {JSX.Element} 複数の跳ね返る円のアニメーションを持つSVGコンポーネント
 */
export function Knock073({
  intervalMs = 50,
  initialCircles = [
    { x: 100, y: 100, dx: 4, dy: 3 },
    { x: 200, y: 200, dx: -3, dy: 4 },
    { x: 300, y: 150, dx: 5, dy: -3 },
  ],
  width = 600,
  height = 400,
  radius = 20,
}) {
  const [circles, setCircles] = useState(initialCircles);

  useEffect(() => {
    const timer = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let { x, y, dx, dy } = circle;
          x += dx;
          y += dy;

          if (x + radius > width || x - radius < 0) dx = -dx;
          if (y + radius > height || y - radius < 0) dy = -dy;

          return {
            x: Math.max(radius, Math.min(width - radius, x)),
            y: Math.max(radius, Math.min(height - radius, y)),
            dx,
            dy,
          };
        })
      );
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs, width, height, radius]);

  return (
    <div
      className={`w-[${width}px] h-[${height}px] border border-gray-300 relative bg-white flex justify-center items-center`}
    >
      <svg width={width} height={height}>
        {circles.map((circle, index) => (
          <circle
            key={index}
            cx={circle.x}
            cy={circle.y}
            r={radius}
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
