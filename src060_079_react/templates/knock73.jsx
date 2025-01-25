import React, { useState, useEffect } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw multiple bouncing circles with different velocities
 * @returns {JSX.Element} SVG component with multiple bouncing circles
 * 
 * ヒント:
 * 1. 複数の円の状態管理：
 *    const [circles, setCircles] = useState([
 *      { x: 100, y: 100, dx: 4, dy: 3 },
 *      { x: 200, y: 200, dx: -3, dy: 4 },
 *      ...
 *    ]);
 * 
 * 2. アニメーションの実装：
 *    - useEffect と setInterval を使用
 *    - 各円の位置を更新
 *    - 壁との衝突判定
 * 
 * 3. 衝突判定：
 *    - x + radius > 600 || x - radius < 0
 *    - y + radius > 400 || y - radius < 0
 * 
 * 4. 速度の反転：
 *    - 衝突時に dx または dy の符号を反転
 */
export function knock73() {
  throw new TrainingSkipError();
}
