import React, { useState } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a circle that changes size based on mouse distance
 * @returns {JSX.Element} SVG component with interactive circle
 * 
 * ヒント:
 * 1. マウス位置の状態管理：
 *    const [mousePos, setMousePos] = useState({ x: 300, y: 200 });
 * 
 * 2. 半径の計算：
 *    - マウスと円の中心との距離を計算：
 *      Math.sqrt(
 *        Math.pow(mousePos.x - centerX, 2) + 
 *        Math.pow(mousePos.y - centerY, 2)
 *      )
 *    - 距離に基づいて半径を調整：
 *      minRadius + (maxRadius - minRadius) * (distance / maxDistance)
 * 
 * 3. マウス移動の処理：
 *    - onMouseMove イベントを使用
 *    - クライアント座標から要素内の相対座標に変換
 */
export function knock68() {
  throw new TrainingSkipError();
}
