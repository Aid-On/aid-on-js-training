import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 08 正の整数?
// 整数値を入力させ、値が正であれば "positive" と表示するプログラムを作成せよ。
// 0は正に含まれない。
// 実行例:
//   $ ./knock08
//   input number: 1
//   positive
//   $ ./knock08
//   input number: -1
//   (何も表示しない)
//   $ ./knock08
//   input number: 0
//   (何も表示しない)
//
// [Tips]
// - 値が正かどうかの判定: if (num > 0) { ... }
//
// @param {number} num
// @returns {string}
//   "input number: num\npositive"  (num が 正 のとき)
//   または
//   "input number: num" (num が 0 または負 のとき)
export const knock = (num = 1) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  throw TrainingSkipError("未実施");
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
