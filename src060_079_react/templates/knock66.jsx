import React, { useState } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a circle that follows mouse movement
 * @returns {JSX.Element} SVG component with mouse-following circle
 * 
 * ヒント:
 * 1. マウス位置の状態管理：
 *    const [position, setPosition] = useState({ x: 300, y: 200 });
 * 
 * 2. マウス移動イベントの処理：
 *    - onMouseMove イベントを使用
 *    - クライアント座標から要素内の相対座標に変換：
 *      const rect = e.currentTarget.getBoundingClientRect();
 *      const x = e.clientX - rect.left;
 *      const y = e.clientY - rect.top;
 * 
 * 3. 円が画面外に出ないように制限：
 *    x = Math.max(radius, Math.min(600 - radius, x))
 *    y = Math.max(radius, Math.min(400 - radius, y))
 */
export function knock66() {
  throw new TrainingSkipError();
}
