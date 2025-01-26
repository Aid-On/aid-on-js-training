import React, { useState } from "react";
import "./index.css";

/**
 * No. 71 マウスクリックで円を追加
 * 問題: 600x400のSVGキャンバス内で、クリックした位置に円を表示するコンポーネントを作成せよ。
 * 実行例:
 *   - 初期表示: 空のキャンバスが表示される
 *   - クリック時: クリックした座標に白色で黒い枠線の円が追加される
 *   - 制限: 最大5個までの円を同時に表示可能
 *
 * [Tips]
 * - クリック位置の取得には e.clientX, e.clientY を使用
 * - getBoundingClientRect() でキャンバスの位置を取得し、相対座標に変換
 * - React.useState で円の位置情報を配列として管理
 *
 * @param {number} [maxCircles=5] 表示可能な円の最大数
 * @param {number} [circleRadius=20] 円の半径(px)
 * @param {Function} [onCircleAdd] 円が追加された時のカスタムハンドラ
 * @returns {JSX.Element} クリックで円を追加できるSVGコンポーネント
 */
export function Knock071({ maxCircles = 5, circleRadius = 20, onCircleAdd }) {
  const [circles, setCircles] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newCircle = { x, y };

    setCircles((prev) => {
      if (prev.length < maxCircles) {
        if (onCircleAdd) {
          onCircleAdd(newCircle);
        }
        return [...prev, newCircle];
      }
      return prev;
    });
  };

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white cursor-pointer">
      <svg width="600" height="400" onClick={handleClick} data-testid="canvas">
        {circles.map((pos, index) => (
          <circle
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={circleRadius}
            fill="white"
            stroke="black"
            strokeWidth="1"
            data-testid="circle"
          />
        ))}
      </svg>
    </div>
  );
}
