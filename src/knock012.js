import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

// No. 12 ごあいさつ指定回
// 整数値を入力させ、その値の回数だけ Hello World! を繰り返して表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock12
//   input number: 7
//   Hello World!
//   Hello World!
//   ... (合計7回)
//
// [Tips]
// - 入力値 num の回数だけ繰り返すには for文やwhile文などを使用
//   for (let i = 0; i < num; i++) { ... }
//
// @param {number} num
// @returns {string} "input number: num\n" + "Hello World!\n" * num
export const knock = (num = 7) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----

  var t = `input number: ${num}\n`;
  var count = 0;
  for (var x = 0; x < num; x++) {
    count += x;
    t += 'Hello World!\n';
  }
  return t;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
