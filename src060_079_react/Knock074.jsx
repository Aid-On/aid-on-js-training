import React, { useState, useEffect } from "react";
import "./index.css";

/**
 * No. 74 螺旋パターンの描画
 * 問題: 600x400のSVGキャンバス内に、指定した個数の円を螺旋状に配置せよ。
 * 実行例:
 *   - 初期表示: 円が中心座標(300, 200)から始まり、徐々に外側へ螺旋を形成する
 *   - circleCountパラメータで円の個数を変更可能 (デフォルト: 50個)
 *   - angleIncrementパラメータで円の配置角度を調整可能 (デフォルト: 0.5ラジアン)
 *   - distanceIncrementパラメータで円の間隔を調整可能 (デフォルト: 5px)
 *
 * [Tips]
 * - React.useState で円の位置を管理する
 * - useEffect で初期配置やパラメータの変化に応じた円の再配置を行う
 * - パラメータを変更することで、様々な螺旋パターンを作成できる
 *
 * @param {number} [circleCount=50] 円の数
 * @param {number} [angleIncrement=0.5] 円を配置するごとの角度増分(ラジアン)
 * @param {number} [distanceIncrement=5] 円を配置するごとの半径方向の変化量(px)
 * @param {number} [radius=10] 円1つあたりの半径
 * @param {number} [centerX=300] 螺旋の中心X座標
 * @param {number} [centerY=200] 螺旋の中心Y座標
 * @returns {JSX.Element} 螺旋状のパターンを持つSVGコンポーネント
 */
export function Knock074({
  circleCount = 50,
  angleIncrement = 0.5,
  distanceIncrement = 5,
  radius = 10,
  centerX = 300,
  centerY = 200,
}) {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const newCircles = [];
    for (let i = 0; i < circleCount; i++) {
      const angle = i * angleIncrement;
      const distance = i * distanceIncrement;
      newCircles.push({
        x: centerX + distance * Math.cos(angle),
        y: centerY + distance * Math.sin(angle),
      });
    }
    setCircles(newCircles);
  }, [circleCount, angleIncrement, distanceIncrement, centerX, centerY]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white flex justify-center items-center">
      <svg width="600" height="400">
        {circles.map((pos, index) => (
          <circle
            key={index}
            cx={pos.x}
            cy={pos.y}
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
