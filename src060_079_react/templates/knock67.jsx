import React, { useState } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a grid of circles that change color on click
 * @returns {JSX.Element} SVG component with interactive grid of circles
 * 
 * ヒント:
 * 1. グリッドの状態管理：
 *    const [activeCircles, setActiveCircles] = useState(
 *      Array(5).fill(null).map(() => Array(5).fill(false))
 *    );
 * 
 * 2. クリックハンドラの実装：
 *    const handleCircleClick = (row, col) => {
 *      setActiveCircles(prev => {
 *        const newGrid = [...prev];
 *        newGrid[row][col] = !newGrid[row][col];
 *        return newGrid;
 *      });
 *    };
 * 
 * 3. グリッドの描画：
 *    - 二重のmap関数でグリッドを生成
 *    - 各円の位置は以下で計算：
 *      cx = startX + colIndex * spacing
 *      cy = startY + rowIndex * spacing
 * 
 * 4. クリック可能な要素の設定：
 *    - className="cursor-pointer"
 *    - onClick={handleCircleClick}
 */
export function knock67() {
  throw new TrainingSkipError();
}
