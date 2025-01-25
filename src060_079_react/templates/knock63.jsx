import React, { useState, useEffect } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a circle that moves in a circular path
 * @returns {JSX.Element} SVG component with animated circle
 * 
 * ヒント:
 * 1. 円運動の計算に必要な状態：
 *    const [angle, setAngle] = useState(0);
 * 
 * 2. アニメーションには useEffect と setInterval を使用：
 *    useEffect(() => {
 *      const timer = setInterval(() => {
 *        setAngle(prev => (prev + 2) % 360);
 *      }, 50);
 *      return () => clearInterval(timer);
 *    }, []);
 * 
 * 3. 円運動の座標計算：
 *    x = centerX + radius * Math.cos(angle * Math.PI / 180)
 *    y = centerY + radius * Math.sin(angle * Math.PI / 180)
 * 
 * 4. 軌道の表示：
 *    - 点線の円を背景に表示（strokeDasharray="4"）
 *    - その上に動く円を表示
 */
export function knock63() {
  throw new TrainingSkipError();
}
