import React from "react";
import "./index.css";

/**
 * No.70 市松模様の円グリッドを描画
 * 問題: 600x400の領域に、gridSize x gridSize の円を描画。
 *       円の色は白黒が交互になるように設定せよ。
 *       circleRadius や spacing などのパラメータを適切に調整し、
 *       テストで検証しやすいようコンポーネントの引数として設定すること。
 *
 * [実装のポイント]
 * - グリッドサイズは引数で指定可能（デフォルト: 10x10）
 * - 円の半径と間隔も引数で調整可能
 * - 市松模様は行と列の和の偶奇で判定
 *
 * @param {number} [gridSize=10] 描画する円グリッドの行数・列数
 * @param {number} [circleRadius=15] 各円の半径
 * @param {number} [spacing=40] 円と円の間隔(px)
 * @returns {JSX.Element} 市松模様状の円を描画したdiv要素
 */
export function Knock070({ gridSize = 10, circleRadius = 15, spacing = 40 }) {
  const startX = 100;
  const startY = 50;

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {Array(gridSize)
          .fill(null)
          .map((_, row) =>
            Array(gridSize)
              .fill(null)
              .map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={startX + col * spacing}
                  cy={startY + row * spacing}
                  r={circleRadius}
                  fill={(row + col) % 2 === 0 ? "white" : "black"}
                  stroke="black"
                  strokeWidth="1"
                />
              ))
          )}
      </svg>
    </div>
  );
}
