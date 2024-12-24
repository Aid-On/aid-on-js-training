import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

// No. 06 0?
// 整数値を入力させ、値が 0 なら "zero" と表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock06
//   input number: 0
//   zero
//   (値が 0 以外の場合は何も表示しない)
//
// [Tips]
// - 0 かどうかを判定する: if (num === 0) { ... }
// - ここでは出力内容を関数の戻り値として返す想定
//
// @param {number} num
// @returns {string}
//   "input number: num\nzero" (num が 0 のとき)
//   または
//   "input number: num" (num が 0 以外のとき)
export const knock = (num = 0) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----

  throw new TrainingSkipError();

  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
