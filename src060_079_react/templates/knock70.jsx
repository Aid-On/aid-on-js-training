import React from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a 10x10 grid of circles with alternating colors
 * @returns {JSX.Element} SVG component with colored grid pattern
 * 
 * ヒント:
 * 1. グリッドの生成：
 *    Array(10).fill(null).map((_, row) =>
 *      Array(10).fill(null).map((_, col) => ...)
 *    )
 * 
 * 2. 円の配置：
 *    - 各円の中心座標を計算：
 *      cx = startX + col * spacing
 *      cy = startY + row * spacing
 * 
 * 3. 色の交互配置：
 *    - (row + col) % 2 === 0 で白黒を判定
 *    - fill属性に "white" または "black" を設定
 * 
 * 4. グリッドのサイズ設定：
 *    - spacing = 40 (円と円の間隔)
 *    - startX = 100 (開始X座標)
 *    - startY = 50 (開始Y座標)
 */
export function knock70() {
  throw new TrainingSkipError();
}
