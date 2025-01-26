import React, { useState, useEffect } from "react";
import "./index.css";

/**
 * No. 76 モンテカルロ法でπを近似計算
 * 問題: 300x300の正方形内に半径150pxの円を描き、ランダムな点を生成してπを近似計算するコンポーネントを作成せよ。
 *
 * 実行例:
 *   - 初期表示: 空の正方形と円が表示される
 *   - 50msごとに: ランダムな点が1つ追加され、πの近似値が更新される
 *   - 点の色分け: 円内は青、円外は赤で表示
 *
 * [Tips]
 * - 円の内外判定には Math.sqrt(x * x + y * y) <= radius を使用
 * - ランダムな点生成には createPoint プロップを使用すると、テストが容易になる
 * - 点が追加されるたびに onPointAdded コールバックで通知可能
 *
 * @param {Function} [createPoint] カスタム点生成関数 (x, y を含むオブジェクトを返す)
 * @param {Function} [onPointAdded] 点が追加された時のコールバック関数
 * @returns {JSX.Element} モンテカルロ法によるπ計算のビジュアライゼーションを持つSVGコンポーネント
 */
export function Knock076({ createPoint, onPointAdded }) {
  const [points, setPoints] = useState([]);
  const [piEstimate, setPiEstimate] = useState(0);
  const size = 300;
  const radius = size / 2;
  const centerX = 300;
  const centerY = 200;
  const maxPoints = 1000;

  const defaultCreatePoint = () => ({
    x: Math.random() * size - radius,
    y: Math.random() * size - radius,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (points.length >= maxPoints) return;

      const { x, y } = (createPoint || defaultCreatePoint)();
      const isInside = Math.sqrt(x * x + y * y) <= radius;

      const newPoint = { x, y, isInside };
      setPoints((prev) => [...prev, newPoint]);

      if (onPointAdded) {
        onPointAdded(newPoint);
      }

      const insideCount =
        points.filter((p) => p.isInside).length + (isInside ? 1 : 0);
      const totalCount = points.length + 1;
      setPiEstimate((4 * insideCount) / totalCount);
    }, 50);
    return () => clearInterval(timer);
  }, [points]);

  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white flex justify-center items-center">
      <div className="absolute top-2 left-2 text-sm">
        π ≈ {piEstimate.toFixed(4)}
      </div>
      <svg width="600" height="400">
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
        <rect
          x={centerX - radius}
          y={centerY - radius}
          width={size}
          height={size}
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
        {points.map((point, index) => (
          <circle
            key={index}
            cx={centerX + point.x}
            cy={centerY + point.y}
            r="2"
            fill={point.isInside ? "blue" : "red"}
          />
        ))}
      </svg>
    </div>
  );
}
