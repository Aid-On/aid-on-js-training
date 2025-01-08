import { TrainingSkipError } from "../src/common/TrainingSkipError.js";
// No. 19 1日の降水量計算
// 1時間あたりの降水量 n を受け取り、24時間での降水量を計算するプログラムを作成せよ。
// 実行例:
//   $ node src/paizaD303.js
//   入力: 50
//   出力: 1200
//
// [Tips]
// - 数値を24倍する: const total = n * 24;
// - 計算結果を返す: return total;
//
// @param {number} n - 1時間あたりの降水量
// @returns {number} 24時間の降水量
export const knock = (n) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  const total = n * 24;
  return total;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
