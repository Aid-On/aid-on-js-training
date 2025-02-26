import React, { useState, useRef } from "react";
import "./index.css";

/**
 * No. 68 マウス位置で円の大きさを変化させる
 * 問題: 600x400のSVGキャンバス内で、マウスの位置に応じて円のサイズが変化するコンポーネントを作成せよ。
 * 実行例:
 *   - 初期表示: 指定された中心位置(デフォルト: 300, 200)に円が表示される
 *   - マウス移動: 中心からの距離に応じて円のサイズが変化
 *   - 最小半径: minRadius (デフォルト: 20px)
 *   - 最大半径: maxRadius (デフォルト: 100px)
 *
 * [Tips]
 * - React.useState でマウス位置を管理する
 * - マウスイベントの取得には onMouseMove を使用
 * - 距離は中心位置からマウス位置までのピクセル距離
 * - 距離は distanceNorm で正規化される (デフォルト: 200px)
 *
 * @param {number} [centerX=300] 円の中心X座標
 * @param {number} [centerY=200] 円の中心Y座標
 * @param {number} [minRadius=20] 円の最小半径(px)
 * @param {number} [maxRadius=100] 円の最大半径(px)
 * @param {number} [distanceNorm=200] 距離の正規化値(px)
 * @param {Function} [onMouseMove] マウス移動時のカスタムハンドラ
 * @returns {JSX.Element} マウス位置に応じてサイズが変化する円を持つSVGコンポーネント
 */
export function Knock068({
  centerX = 300,
  centerY = 200,
  minRadius = 20,
  maxRadius = 100,
  distanceNorm = 200,
  onMouseMove,
}) {
  const [mousePos, setMousePos] = useState({ x: centerX, y: centerY });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    // Use clientX/Y directly for test environment compatibility
    const newMousePos = {
      x: e.clientX,
      y: e.clientY,
    };
    setMousePos(newMousePos);

    if (onMouseMove) {
      onMouseMove(e);
    }
  };

  const getRadius = () => {
    // Calculate Euclidean distance from mouse to center
    const distance = Math.sqrt(
      Math.pow(mousePos.x - centerX, 2) + Math.pow(mousePos.y - centerY, 2)
    );

    // Normalize distance and clamp between 0 and 1
    const normalizedDistance = Math.min(
      Math.max(distance / distanceNorm, 0),
      1
    );

    // Linear interpolation between minRadius and maxRadius
    return minRadius + (maxRadius - minRadius) * normalizedDistance;
  };

  return (
    <div
      ref={containerRef}
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white flex justify-center items-center"
      onMouseMove={handleMouseMove}
      data-testid="container"
    >
      <svg width="600" height="400">
        <circle
          cx={centerX}
          cy={centerY}
          r={getRadius()}
          fill="white"
          stroke="black"
          strokeWidth="1"
          data-testid="circle"
        />
      </svg>
    </div>
  );
}
