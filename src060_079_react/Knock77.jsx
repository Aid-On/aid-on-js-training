import React, { useState, useEffect } from 'react';
import './index.css';

/**
 * No. 77 シェルピンスキーの三角形フラクタルを描画
 * 
 * 問題: 600x400のSVGキャンバス内で、シェルピンスキーの三角形フラクタルを描画するコンポーネントを作成せよ。
 * フラクタルの深さはプロパティとして設定可能とし、各点は黒い円として表示される。
 * 
 * 実行例:
 *   - 初期表示: 頂点座標(300,50)、(150,350)、(450,350)の三角形を基準に、指定された深さまで再帰的に分割
 *   - depth=6の場合: 約364個の点が描画される
 *   - depth=7の場合: 約1093個の点が描画される
 * 
 * [Tips]
 * - React.useState でフラクタルの点の配列を管理する
 * - 再帰関数でフラクタルパターンを生成する
 * - 深さは props として外部から制御可能にする
 * - SVG の circle 要素で各点を描画する
 * 
 * @param {number} [depth=6] フラクタルの深さ（再帰の深さ）
 * @param {Function} [onPointsGenerated] フラクタルの点が生成された後に呼ばれるコールバック関数
 * @returns {JSX.Element} シェルピンスキーの三角形フラクタルを持つSVGコンポーネント
 */
export function Knock77({
  depth = 6,
  onPointsGenerated
}) {
  const [points, setPoints] = useState([]);
  
  useEffect(() => {
    const generateSierpinski = (x1, y1, x2, y2, x3, y3, depth) => {
      if (depth === 0) {
        return [[x1, y1], [x2, y2], [x3, y3]];
      }
      
      const x12 = (x1 + x2) / 2;
      const y12 = (y1 + y2) / 2;
      const x23 = (x2 + x3) / 2;
      const y23 = (y2 + y3) / 2;
      const x31 = (x3 + x1) / 2;
      const y31 = (y3 + y1) / 2;
      
      return [
        ...generateSierpinski(x1, y1, x12, y12, x31, y31, depth - 1),
        ...generateSierpinski(x12, y12, x2, y2, x23, y23, depth - 1),
        ...generateSierpinski(x31, y31, x23, y23, x3, y3, depth - 1)
      ];
    };

    const newPoints = generateSierpinski(300, 50, 150, 350, 450, 350, depth);
    setPoints(newPoints);
    
    if (onPointsGenerated) {
      onPointsGenerated(newPoints);
    }
  }, [depth, onPointsGenerated]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        {points.map(([x, y], index) => (
          <circle 
            key={index}
            cx={x}
            cy={y}
            r="1"
            fill="black"
          />
        ))}
      </svg>
    </div>
  );
}
