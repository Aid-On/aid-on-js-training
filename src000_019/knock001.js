import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 01 足し算
// A + B を計算して結果を表示するプログラムを作成せよ。
// 実行例:
//   $ node src/knock01.js
//   12345 + 23456 = 35801
// 変数は使用してもしなくてもよい。
//
// [Tips]
// - 足し算のやり方: const sum = a + b;
//
// @param {number} a
// @param {number} b
// @returns {number} a + b
export const knock = (a = 12345, b = 23456) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  return a + b;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
