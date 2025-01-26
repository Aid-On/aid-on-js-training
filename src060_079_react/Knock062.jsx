import React, { useState, useCallback, useEffect } from "react";
import "./index.css";

/**
 * No. 62 矢印キーで円を左右に移動
 * 問題: 600x400のSVGキャンバス内で、左右の矢印キーを使って円を水平方向へ動かすコンポーネントを作成せよ。
 * 実行例:
 *   - 初期表示: x座標=-270に円(半径30px)が表示される
 *   - 左矢印キー: 円が左に10px移動 (例: -270 → -280)
 *   - 右矢印キー: 円が右に10px移動 (例: -270 → -260)
 *
 * [Tips]
 * - React.useState で円のx座標を管理する
 * - キーボードイベントの取得には onKeyDown または addEventListener を使用
 * - キー入力は e.key で判定 ('ArrowLeft'/'ArrowRight')
 *
 * @param {number} [initialX=-270] 円の初期x座標
 * @param {number} [moveDistance=10] 1回の移動距離(px)
 * @param {Function} [onMoveLeft] 左移動時のカスタムハンドラ
 * @param {Function} [onMoveRight] 右移動時のカスタムハンドラ
 * @returns {JSX.Element} キー操作で移動可能な円を持つSVGコンポーネント
 */
import React, { useState, useCallback, useEffect } from "react";

export function Knock062({
  initialX = 300,
  moveDistance = 10,
  onMoveLeft,
  onMoveRight,
}) {
  const [circleX, setCircleX] = useState(initialX);
  const circleY = 200;
  const radius = 30;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        setCircleX((x) => Math.max(x - moveDistance, 0)); // 左端で止まる
        if (onMoveLeft) onMoveLeft();
      } else if (e.key === "ArrowRight") {
        setCircleX((x) => Math.min(x + moveDistance, 600)); // 右端で止まる
        if (onMoveRight) onMoveRight();
      }
    },
    [moveDistance, onMoveLeft, onMoveRight]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 bg-white flex justify-center items-center">
      <svg width="600" height="400">
        <circle
          cx={circleX}
          cy={circleY}
          r={radius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
