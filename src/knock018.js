import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

// No. 18 配列を入力値で初期化
// 要素数10の整数型配列を宣言し、整数値を入力させ、その値で全要素を初期化する。
// すべての要素の値を表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock18
//   input number: 6
//   6
//   6
//   6
//   6
//   6
//   6
//   6
//   6
//   6
//   6
//
// [Tips]
// - 要素数10の配列を作る: const arr = new Array(10);
// - 全要素を同じ値にする: arr.fill(num);
// - 全要素の値を文字列として表示するとき、改行で区切る: arr.join('\n')
//
// @param {number} num
// @returns {string} "input number: num\n" + (numを10回表示)
export const knock = (num = 6) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----

  throw new TrainingSkipError();

  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
