import React, { useState, useEffect } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw a Sierpinski triangle fractal
 * @returns {JSX.Element} SVG component with Sierpinski triangle
 * 
 * ヒント:
 * 1. フラクタル生成関数：
 *    const generateSierpinski = (x1, y1, x2, y2, x3, y3, depth) => {
 *      if (depth === 0) return [[x1, y1], [x2, y2], [x3, y3]];
 *      
 *      // 各辺の中点を計算
 *      const x12 = (x1 + x2) / 2;
 *      const y12 = (y1 + y2) / 2;
 *      // ... 他の中点も同様に
 *      
 *      // 3つの小さな三角形に分割して再帰
 *      return [
 *        ...generateSierpinski(x1, y1, x12, y12, x31, y31, depth - 1),
 *        // ... 他の2つの三角形も同様に
 *      ];
 *    };
 * 
 * 2. 初期三角形の頂点：
 *    - top: (300, 50)
 *    - left: (150, 350)
 *    - right: (450, 350)
 * 
 * 3. 再帰の深さ：
 *    - depth = 6 が適切
 * 
 * 4. 点の描画：
 *    - 各点を小さな円として描画
 */
export function knock77() {
  throw new TrainingSkipError();
}
