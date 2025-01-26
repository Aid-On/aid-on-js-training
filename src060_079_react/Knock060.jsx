import React, { useState, useCallback } from "react";
import "./index.css";

/**
 * No. 60 SVGで円を描画
 * 問題: 600x400のSVGキャンバス内で、指定された座標に円を描画するコンポーネントを作成せよ。
 * 実行例:
 *   - デフォルト表示: 中心座標(200, 150)に円(半径50px)が表示される
 *   - カスタム座標: propsでcx, cyを指定すると、その位置に円が表示される
 *
 * [Tips]
 * - SVGのcircle要素を使用して円を描画する
 * - 円の位置は中心座標(cx, cy)で指定する
 * - 円の大きさはr属性で指定する
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {number} [props.cx=200] - 円の初期X座標
 * @param {number} [props.cy=150] - 円の初期Y座標
 * @param {number} [props.radius=50] - 円の半径
 * @param {Function} [props.onMove] - マウス移動時のコールバック関数 (x, y) => void
 * @returns {JSX.Element} 円を描画するSVGコンポーネント
 */
export function Knock060({ cx = 200, cy = 150, onMove, radius = 50 }) {
  const [position, setPosition] = useState({ x: cx, y: cy });

  const handleMouseMove = useCallback(
    (e) => {
      const svgElement = e.currentTarget;
      const rect = svgElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (onMove) {
        onMove(x, y);
      }
      setPosition({ x, y });
    },
    [onMove]
  );

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white flex justify-center items-center">
      <svg width="600" height="400" onMouseMove={handleMouseMove}>
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
