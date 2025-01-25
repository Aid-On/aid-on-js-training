import React, { useState } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a circle that moves horizontally based on user input
 * @returns {JSX.Element} Interactive SVG component with movable circle
 * 
 * ヒント:
 * 1. useStateフックを使って円の位置を管理します：
 *    const [circleX, setCircleX] = useState(300);
 * 
 * 2. キーボードイベントの処理：
 *    - onKeyDown イベントを使用
 *    - 左矢印キー: e.key === 'ArrowLeft'
 *    - 右矢印キー: e.key === 'ArrowRight'
 * 
 * 3. キーボードフォーカスのために必要な属性：
 *    - tabIndex={0}
 *    - className="... focus:outline-none"
 * 
 * 4. 移動の制限：
 *    - 左端: x > radius
 *    - 右端: x < 600 - radius
 */
export function knock62() {
  throw new TrainingSkipError();
}
