import React, { useState, useEffect } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a circle that bounces horizontally between window edges
 * @returns {JSX.Element} SVG component with bouncing circle animation
 * 
 * ヒント:
 * 1. 必要な状態：
 *    - 位置: const [position, setPosition] = useState({ x: 30, y: 200 });
 *    - 方向: const [direction, setDirection] = useState(1); // 1=右, -1=左
 * 
 * 2. アニメーションのロジック：
 *    - setInterval で定期的に位置を更新
 *    - 端に到達したら方向を反転（direction を -1 倍）
 * 
 * 3. 跳ね返りの条件：
 *    - 右端: x + radius >= 600
 *    - 左端: x - radius <= 0
 * 
 * 4. クリーンアップを忘れずに：
 *    return () => clearInterval(timer);
 */
export function knock64() {
  throw new TrainingSkipError();
}
