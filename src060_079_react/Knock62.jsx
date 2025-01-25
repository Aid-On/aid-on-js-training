import React, { useState, useCallback, useEffect } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内で左右の矢印キーで水平に移動する円を描画します。
 * 円の半径は30pxで、キー入力ごとに10pxずつ移動します。
 * 初期位置はx=-270で、キー入力で左右に移動できます。
 * @returns {JSX.Element} キー操作で移動可能な円を持つSVGコンポーネント
 */
export function Knock62({
  initialX = -270,
  onMoveLeft,
  onMoveRight,
  moveDistance = 10
}) {
  const [circleX, setCircleX] = useState(initialX);
  const circleY = 200;
  const radius = 30;

  const handleKeyDown = useCallback((e) => {
    e.preventDefault(); // Prevent default scroll behavior
    if (e.key === 'ArrowLeft') {
      if (onMoveLeft) {
        onMoveLeft();
      }
      setCircleX(x => x - moveDistance);
    } else if (e.key === 'ArrowRight') {
      if (onMoveRight) {
        onMoveRight();
      }
      setCircleX(x => x + moveDistance);
    }
  }, [moveDistance, onMoveLeft, onMoveRight]);

  useEffect(() => {
    // Add event listener to document to ensure it catches all keyboard events
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div 
      className="w-[600px] h-[400px] border border-gray-300 relative bg-white focus:outline-none" 
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
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
