import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 03 入力
// 整数値を入力させ、その入力値を表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock03
//   input number: 123
//   your number is 123
//
// [Tips]
// - このトレーニングでは、関数の引数として入力値を受け取る想定
// - テンプレートリテラル(``)を使うと変数を文字列に埋め込める
//   例) `Hello, ${name}`
//
// @param {number} num
// @returns {string} "input number: num\nyour number is num"
export const knock = (num = 123) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  return `input number: ${num}\nyour number is ${num}`;
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
