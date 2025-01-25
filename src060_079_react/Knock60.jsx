import React, { useState } from 'react';
import './index.css';

/**
 * 600x400のウィンドウ内に指定された中心座標で円を描画します。
 * @param {Object} props - コンポーネントのプロパティ
 * @param {number} [props.cx=200] - 円の中心のX座標
 * @param {number} [props.cy=150] - 円の中心のY座標
 * @returns {JSX.Element} 円を描画するSVGコンポーネント
 */
export function Knock60({ cx = 200, cy = 150 }) {
  return (
    <div className="w-[600px] h-[400px] border border-gray-300 relative bg-white">
      <svg width="600" height="400">
        <circle 
          cx={cx} 
          cy={cy} 
          r="50" 
          fill="white" 
          stroke="black" 
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
