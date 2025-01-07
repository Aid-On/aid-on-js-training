import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 13 カウントアップ
// 整数値を入力させ、0 から入力値まで数を 1 ずつ増やして表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock13
//   input number: 5
//   0
//   1
//   2
//   3
//   4
//   5
// ※ 入力値が 0 以下の場合は考慮しなくてもよいものとする
//
// [Tips]
// - カウントアップには for 文が便利
//   for (var i = 0; i <= num; i++) { ... }
//
// @param {number} num
// @returns {string} "input number: num\n0\n1\n...num"
//
// input number: 3
// 0
// 1
// 2
// 3
export const knock = (num = 5) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  var text = "";
  for (var x = 0; x <= num; x++) {
    text += `${x}\n`;
  }
  return `input number: ${num}\n` + text;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};

// 1回目:
//  x = 0
//  count += 0 // => 0
// 2回目:
//   x++ => x = 1
//   x = 1
//   count += x // => 1
// 3回目:
//   x++ => x = 2
//   x = 2
//   count += x // => 3

/*
input number: 2
0
1
2
*/
