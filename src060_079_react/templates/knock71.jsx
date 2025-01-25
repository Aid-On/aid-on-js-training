import React, { useState } from 'react';
import { TrainingSkipError } from '../../src/common/TrainingSkipError';
import './index.css';

/**
 * Draw circles that appear at clicked positions
 * @returns {JSX.Element} SVG component with click-to-add circles
 * 
 * ヒント:
 * 1. 円の位置を配列で管理：
 *    const [circles, setCircles] = useState([]);
 * 
 * 2. クリックイベントの処理：
 *    - onClick イベントで座標を取得
 *    - クライアント座標から要素内の相対座標に変換
 *    - 新しい円の位置を配列に追加
 * 
 * 3. 円の数制限：
 *    - circles.length < 10 の場合のみ追加
 * 
 * 4. 複数の円の描画：
 *    circles.map((pos, index) => (
 *      <circle key={index} cx={pos.x} cy={pos.y} ... />
 *    ))
 */
export function knock71() {
  throw new TrainingSkipError();
}
