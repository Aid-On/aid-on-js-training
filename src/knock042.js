import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 42 小さい順?
// 整数値を3つ入力させ、それらの値が小さい順（等しくてもよい）に並んでいるか判定し、
// 小さい順に並んでいる場合はOK、そうなっていない場合はNGと表示するプログラムを作成せよ。
//
// 実行例:
// input number 1: 1
// input number 2: 2
// input number 3: 3
// OK
//
// input number 1: 1
// input number 2: 1
// input number 3: 3
// OK
//
// input number 1: 2
// input number 2: 1
// input number 3: 3
// NG

/**
 * 3つの数値が昇順（等しい場合を含む）に並んでいるか判定する関数
 * @param {number} num1 - 1つ目の整数値
 * @param {number} num2 - 2つ目の整数値
 * @param {number} num3 - 3つ目の整数値
 * @returns {string} - "OK" または "NG"
 */
export const knock = (num1 = 1, num2 = 2, num3 = 3) => {
  throw new TrainingSkipError("未実装");
};
