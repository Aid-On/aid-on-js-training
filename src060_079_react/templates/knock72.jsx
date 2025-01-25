import React, { useState } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw circles that follow mouse movement with trail effect
 * @returns {JSX.Element} SVG component with mouse trail animation
 * 
 * ヒント:
 * 1. 軌跡の位置を配列で管理：
 *    const [positions, setPositions] = useState([]);
 * 
 * 2. マウス移動の処理：
 *    - onMouseMove イベントで座標を取得
 *    - 新しい位置を配列に追加
 *    - 配列の長さを制限（例：最大10個）
 * 
 * 3. 透明度の設定：
 *    - 古い円ほど透明に
 *    - opacity={0.3 + (0.7 * index / positions.length)}
 * 
 * 4. 軌跡の描画：
 *    positions.map((pos, index) => (
 *      <circle key={index} cx={pos.x} cy={pos.y} ... />
 *    ))
 */
export function knock72() {
  throw new TrainingSkipError();
}
