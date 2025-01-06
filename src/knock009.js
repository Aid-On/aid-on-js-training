import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 09 正? 負? 0?
// 整数値を入力させ、
//   値が正 (num > 0) であれば "positive"
//   値が負 (num < 0) であれば "negative"
//   値が 0 なら "zero"
// と表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock09
//   input number: 1
//   positive
//   $ ./knock09
//   input number: -1
//   negative
//   $ ./knock09
//   input number: 0
//   zero
//
// [Tips]
// - if (num > 0) { ... } else if (num < 0) { ... } else { ... }
//
// @param {number} num
// @returns {string}
//   "input number: num\npositive"   (num > 0)
//   "input number: num\nnegative"   (num < 0)
//   "input number: num\nzero"       (num === 0)
export const knock = (num = 1) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  throw TrainingSkipError("未実施");
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
