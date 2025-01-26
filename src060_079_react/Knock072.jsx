import React, { useState, useCallback, useRef } from "react";
import "./index.css";

/**
 * マウスの動きに追従する円の軌跡を描画するコンポーネント
 * @param {Object} props
 * @param {number} [props.maxTrailLength=10] 軌跡として表示する円の最大数
 * @param {number} [props.circleRadius=5] 円の半径
 * @param {Function} [props.onMouseMove] マウス移動時のカスタムハンドラ
 * @returns {JSX.Element} マウスの軌跡を表示するSVGコンポーネント
 */
export function Knock072({
  maxTrailLength = 10,
  circleRadius = 5,
  onMouseMove,
}) {
  const containerRef = useRef(null);
  // Initialize with maxTrailLength positions at center
  const [positions, setPositions] = useState(() =>
    Array(maxTrailLength).fill({ x: 300, y: 200 })
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newPos = {
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      };

      // Update positions array by removing oldest position and adding new one
      setPositions((prev) => {
        const newPositions = [...prev.slice(1), newPos];

        // Call onMouseMove callback with position and event
        if (onMouseMove) {
          onMouseMove({ x: newPos.x, y: newPos.y, event: e });
        }

        return newPositions;
      });
    },
    [maxTrailLength, onMouseMove]
  );

  return (
    <div
      ref={containerRef}
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white"
      onMouseMove={handleMouseMove}
      data-testid="container"
    >
      <svg width="600" height="400">
        {positions.map((pos, index) => (
          <circle
            key={index}
            cx={pos.x}
            cy={pos.y}
            r={circleRadius}
            opacity={(index + 1) / positions.length}
            fill="black"
            data-testid={`trail-circle-${index}`}
          />
        ))}
      </svg>
    </div>
  );
}
