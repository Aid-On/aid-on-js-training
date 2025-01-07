import { TrainingSkipError } from "../src/common/TrainingSkipError.js";
// No. D235 5人兄弟の体重計算
// 1人の体重 W を受け取り、5人兄弟の総重量を計算するプログラムを作成せよ。
// 実行例:
//   $ node src/paizaD235.js
//   入力: 50
//   出力: 250
//
// [Tips]
// - 1人の体重 W を5倍する: const totalWeight = W * 5;
// - 計算結果を返す: return totalWeight;
//
// @param {number} W - 1人の体重
// @returns {number} 5人兄弟の総重量
export const knock = (W) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  const totalWeight = W * 5;
  return totalWeight;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
