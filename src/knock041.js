import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 41 1桁の自然数?
// 整数値を入力させ、その値が一桁の自然数かそうでないか判定するプログラムを作成せよ。
//
// 実行例:
// input number:
// 6
// 6 is a single figure.
//
// input number:
// 10
// 10 is not a single figure.
//
// input number:
// -3
// -3 is not a single figure.
//
// input number:
// 0
// 0 is not a single figure.
//
// 一桁の自然数＝0より大きく、かつ、9以下の整数、として判定すればよい。

/**
 * 1桁の自然数判定関数
 * @param {number} value - 判定する整数値
 * @returns {string} - "<value> is a single figure." または "<value> is not a single figure."
 */
export const knock = (value = 6) => {
  throw new TrainingSkipError("未実装");
};
