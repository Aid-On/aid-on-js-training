import { TrainingSkipError } from '../src/common/TrainingSkipError.js';

// No. 19 配列に入力値を格納
// 要素数5の整数型配列を宣言し、順に入力された整数値を配列の要素に代入し、
// すべての要素の値を表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock19
//   input number: 4
//   input number: 6
//   input number: 7
//   input number: 3
//   input number: 1
//   4
//   6
//   7
//   3
//   1
//
// [Tips]
// - 要素数5の配列を作る: const arr = new Array(5);
// - 5個の入力値を順番に配列に代入していく: arr[i] = inputs[i];
// - 入力を受け取る代わりに、関数の引数として配列を受け取る想定
// - 出力の形式:
//   1) まず全ての入力値を "input number: x" の形で表示 (改行区切り)
//   2) 続けて配列に入った値をそのまま表示 (改行区切り)
//
// @param {number[]} inputs - 要素数5の配列 (例: [4, 6, 7, 3, 1])
// @returns {string} 入力ログ + 要素を表示した文字列
export const knock = (inputs = [4, 6, 7, 3, 1]) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----

  throw new TrainingSkipError();

  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
