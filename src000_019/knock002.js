import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 02 余り
// 12345 を 7 で割った結果（剰余）を返すプログラムを作成せよ。
// 実行例:
//   $ ./knock02
//   12345 ÷ 7 = 4
//
// [Tips]
// - 余り(剰余)の計算: x % y
//
// @param {number} a
// @param {number} b
// @returns {number} result
export const knock = (a = 12345, b = 7) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  return a % b;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

// result 結果
// 足し算 a + b
// 引き算 a - b
// 掛け算 a * b
// 割り算 a / b
// 割り算の余り a % b
