import React from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a 200x200 square at (200,100) with an inscribed circle
 * @returns {JSX.Element} SVG component with square and inscribed circle
 * 
 * ヒント:
 * 1. 正方形の中に内接する円を描画します。
 * 
 * 2. 必要な要素：
 *    - rect要素（正方形）
 *      - x: 200（左端の位置）
 *      - y: 100（上端の位置）
 *      - width: 200（幅）
 *      - height: 200（高さ）
 * 
 *    - circle要素（内接円）
 *      - cx: 正方形のx + 正方形の幅/2
 *      - cy: 正方形のy + 正方形の高さ/2
 *      - r: 正方形の幅/2
 * 
 * 3. SVGの描画順序：
 *    後に描画した要素が前面に表示されます
 */
export function knock61() {
  throw new TrainingSkipError();
}
