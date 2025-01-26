import React, { useState, useCallback } from 'react';
import './index.css';

/**
 * No. 66 マウスの動きに追従する円
 * 問題: マウスの動きに追従する円を実装してください。
 * 実行例:
 *   - 初期表示: 指定された位置(デフォルト: x=180, y=150)に円が表示される
 *   - マウス移動: マウスの位置に円が追従する
 *   - 境界制御: 円がウィンドウの境界を超えないように制御される
 *
 * [Tips]
 * - React.useState で円の位置を管理する
 * - マウスイベントの取得には onMouseMove を使用
 * - マウス位置は e.clientX, e.clientY で取得
 * - getBoundingClientRect() でコンテナの位置を考慮
 *
 * @param {Object} props
 * @param {number} [props.initialX=180] - 円の初期X座標
 * @param {number} [props.initialY=150] - 円の初期Y座標
 * @param {number} [props.radius=30] - 円の半径（ピクセル）
 * @param {number} [props.width=600] - ウィンドウの幅（ピクセル）
 * @param {number} [props.height=400] - ウィンドウの高さ（ピクセル）
 * @param {Function} [props.onMove] - マウス移動時のコールバック関数 ({x: number, y: number}) => void
 * @returns {JSX.Element} マウスに追従する円を持つSVGコンポーネント
 */
export function Knock066({
  initialX = 180,
  initialY = 150,
  radius = 30,
  width = 600,
  height = 400,
  onMove
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
    position: 'relative',
    backgroundColor: 'white',
    border: '1px solid #d1d5db',
    overflow: 'hidden'
  };

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = Math.round(e.clientX - rect.left);
    const mouseY = Math.round(e.clientY - rect.top);
    
    // Call onMove with raw mouse position
    if (onMove) {
      onMove({ x: mouseX, y: mouseY });
    }

    // Ensure the circle stays within bounds
    const newX = Math.max(radius, Math.min(width - radius, mouseX));
    const newY = Math.max(radius, Math.min(height - radius, mouseY));
    
    setPosition({ x: newX, y: newY });
  }, [radius, width, height, onMove]);

  return (
    <div 
      data-testid="container"
      style={containerStyle}
      className="flex justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <svg 
        data-testid="svg-container"
        width={width} 
        height={height}
      >
        <circle 
          data-testid="circle"
          cx={position.x} 
          cy={position.y} 
          r={radius}
          fill="white"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
