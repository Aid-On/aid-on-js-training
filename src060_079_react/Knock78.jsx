import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No. 78 二分木フラクタルの描画
 * 問題: 600x400のSVGキャンバス内に、再帰的な二分木フラクタルを描画するコンポーネントを作成せよ。
 * 実行例:
 *   - 初期表示: 座標(300,350)から上向きに開始
 *   - 再帰処理: 指定された深さまで枝分かれを繰り返す
 *   - 枝の特徴: 親の枝より短く（デフォルトで0.7倍）、±45度の角度で分岐
 *
 * [Tips]
 * - React.useState で線分の配列を管理する
 * - 再帰関数を使って枝分かれを生成する
 * - SVGのline要素で各枝を描画する
 *
 * @param {number} [initialDepth=8] フラクタルの深さ（0で描画なし）
 * @param {number} [initialLength=100] 最初の枝の長さ(px)
 * @param {number} [branchRatio=0.7] 子の枝の長さの比率（親に対する倍率）
 * @param {number} [branchAngle=45] 分岐時の角度（度数法）
 * @returns {JSX.Element} 二分木フラクタルを持つSVGコンポーネント
 */
export function Knock78({
  initialDepth = 8,
  initialLength = 100,
  branchRatio = 0.7,
  branchAngle = 45
}) {
  const [lines, setLines] = useState([]);
  const startX = 300;
  const startY = 350;
  const startAngle = Math.PI / 2; // 上向きから開始

  useEffect(() => {
    const generateTree = (x, y, len, angle, depth) => {
      if (depth === 0) return [];

      const endX = x + len * Math.cos(angle);
      const endY = y - len * Math.sin(angle);
      const branchAngleRad = (branchAngle * Math.PI) / 180; // 度数法からラジアンに変換
      
      return [
        { x1: x, y1: y, x2: endX, y2: endY },
        ...generateTree(endX, endY, len * branchRatio, angle + branchAngleRad, depth - 1),
        ...generateTree(endX, endY, len * branchRatio, angle - branchAngleRad, depth - 1)
      ];
    };

    setLines(generateTree(startX, startY, initialLength, startAngle, initialDepth));
  }, []);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {lines.map((line, index) => (
          <line 
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
