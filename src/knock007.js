import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 07 0 or not 0
// 整数値を入力させ、値が0なら "zero"、0でなければ "not zero" と表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock07
//   input number: 0
//   zero
//   $ ./knock07
//   input number: 1
//   not zero
//
// [Tips]
// - 数値が0かどうかの判定: if (num === 0) { ... } else { ... }
//
// @param {number} num
// @returns {string}
//   "input number: num\nzero"  (num が 0 のとき)
//   または
//   "input number: num\nnot zero" (num が 0 以外のとき)
export const knock = (num = 0) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  throw new TrainingSkipError("未実施");
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
