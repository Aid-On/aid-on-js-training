import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 05 入力と四則演算
// 整数値を2つ入力させ、それらの値の和、差、積、商と余りを求めるプログラムを作成せよ。
// 差と商は1つ目の値から2つ目の値を引いた、あるいは割った結果とする。
// 余りは0になる場合もそのまま表示する
// 実行例:
//   $ ./knock05
//   input 1st number: 123
//   input 2nd number: 7
//   和: 130
//   差: 116
//   積: 861
//   商: 17, 余り: 4
//
// [Tips]
// - 足し算: a + b
// - 引き算: a - b
// - 掛け算: a * b
// - 商(割り算): JavaScriptで割り算をすると小数になる可能性がある
//   → 整数だけ欲しい場合は「Math.floor(a / b)」または「parseInt(a / b, 10)」を使う
// - 余り: a % b
//
// @param {number} a
// @param {number} b
// @returns {string}
//  "input 1st number: a\n
//   input 2nd number: b\n
//   和: 🥸\n
//   差: 🥸\n
//   積: 🥸\n
//   商: 🥸, 余り: 🥸"
export const knock = (a = 123, b = 7) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  return TrainingSkipError("未実装");
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
