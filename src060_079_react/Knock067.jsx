import React, { useState } from 'react';
import './index.css';

/**
 * No. 67 マウスクリックで円の色が変わるグリッド
 * 問題: 600x400のSVGキャンバス内に、グリッド状に配置された円をクリックすると色が変化するコンポーネントを作成せよ。
 * 実行例:
 *   - 初期表示: NxNのグリッドに白い円が表示される
 *   - クリック時: クリックした円の色が白⇔黒で切り替わる
 *
 * [Tips]
 * - React.useState でグリッドの状態を管理する
 * - クリックイベントの取得には onClick を使用
 * - 円の状態は二次元配列で管理 (例: activeCircles[row][col])
 *
 * @param {number} [gridSize=5] グリッドの行列数
 * @param {number} [circleRadius=20] 各円の半径(px)
 * @param {number} [spacing=60] 円同士の間隔(px)
 * @param {number} [startX=150] X座標の開始位置
 * @param {number} [startY=100] Y座標の開始位置
 * @param {Function} [onCircleToggle] 円がクリックされた時のハンドラ (row: number, col: number) => void
 * @returns {JSX.Element} クリックで色が変化する円のグリッドを持つSVGコンポーネント
 */
export function Knock067({
  gridSize = 5,
  circleRadius = 20,
  spacing = 60,
  startX = 150,
  startY = 100,
  onCircleToggle
}) {

  const initialGrid = Array(gridSize).fill(null).map(() => 
    Array(gridSize).fill(false)
  );
  
  const [activeCircles, setActiveCircles] = useState(initialGrid);

  const handleCircleClick = (row, col) => {
    if (onCircleToggle) {
      onCircleToggle(row, col);
    }
    setActiveCircles(prev => {
      const newGrid = [...prev];
      newGrid[row][col] = !newGrid[row][col];
      return newGrid;
    });
  };

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white flex justify-center items-center">
      <svg width="600" height="400">
        {activeCircles.map((row, rowIndex) =>
          row.map((isActive, colIndex) => (
            <circle 
              key={`${rowIndex}-${colIndex}`}
              cx={startX + colIndex * spacing}
              cy={startY + rowIndex * spacing}
              r={circleRadius}
              fill={isActive ? "black" : "white"}
              stroke="black"
              strokeWidth="1"
              onClick={() => handleCircleClick(rowIndex, colIndex)}
              className="cursor-pointer"
            />
          ))
        )}
      </svg>
    </div>
  );
}
