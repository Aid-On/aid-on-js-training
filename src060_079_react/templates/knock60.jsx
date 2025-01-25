import React from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a circle with specified center coordinates in a 600x400 window
 * @param {Object} props - Component properties
 * @param {number} [props.cx=200] - X coordinate for circle center
 * @param {number} [props.cy=150] - Y coordinate for circle center
 * @returns {JSX.Element} SVG circle component
 * 
 * ヒント:
 * 1. SVGを使って円を描画します。SVGの基本的な使い方は以下の通りです：
 *    <svg width="600" height="400">
 *      <circle cx="..." cy="..." r="..." />
 *    </svg>
 * 
 * 2. 必要な属性：
 *    - cx: 円の中心のX座標（デフォルト値: 200）
 *    - cy: 円の中心のY座標（デフォルト値: 150）
 *    - r: 円の半径（50を使用）
 *    - fill: 塗りつぶしの色（"white"を使用）
 *    - stroke: 線の色（"black"を使用）
 * 
 * 3. コンポーネントは以下のような構造になります：
 *    <div className="w-[600px] h-[400px] ...">
 *      <svg>
 *        <circle ... />
 *      </svg>
 *    </div>
 */
export function knock60({ cx = 200, cy = 150 }) {
  throw new TrainingSkipError();
}
