import React from 'react';
import './index.css';

/**
 * No. 61 正方形と内接円の描画
 * 問題: 600x400のSVGキャンバス内に正方形とその内接円を描画するコンポーネントを作成せよ。
 * 実行例:
 *   - デフォルト表示: 座標(200,100)に200x200の正方形を描画
 *   - 正方形の中心に半径100pxの円を配置（正方形と円の境界が接する）
 *   - カスタム座標・サイズにも対応可能
 *
 * [Tips]
 * - 正方形のサイズを指定すると、内接円の半径は自動的にその半分になる
 * - 座標は正方形の左上を基準とする
 *
 * @param {number} [squareSize=200] 正方形のサイズ(px)
 * @param {number} [squareX=200] 正方形のX座標
 * @param {number} [squareY=100] 正方形のY座標
 * @returns {JSX.Element} 正方形と内接円を持つSVGコンポーネント
 */
export function Knock061({
  squareSize = 200,
  squareX = 200,
  squareY = 100
}) {
  // Calculate the inscribed circle radius based on square size
  const circleRadius = squareSize / 2;
  
  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white flex justify-center items-center">
      <svg width="600" height="400">
        <rect 
          x={squareX} 
          y={squareY} 
          width={squareSize} 
          height={squareSize}
          fill="white"
          stroke="black"
          strokeWidth="1"
          data-testid="square"
        />
        <circle 
          cx={squareX + circleRadius} 
          cy={squareY + circleRadius}
          r={circleRadius}
          fill="white"
          stroke="black"
          strokeWidth="1"
          data-testid="circle"
        />
      </svg>
    </div>
  );
}
