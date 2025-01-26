import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 40 even or odd
// 整数値を入力させ、その値が偶数ならばeven、奇数ならばoddと表示するプログラムを作成せよ。
//
// 実行例:
// input number:
// 6
// 6 is even.
//
// input number:
// 7
// 7 is odd.
//
// 偶数＝2で割り切れる＝2で割った余りが0

/**
 * 偶数・奇数判定関数
 * @param {number} value - 判定する整数値
 * @returns {string} - "<value> is even." または "<value> is odd."
 */
export const knock = (value = 6) => {
  throw new TrainingSkipError("未実装");
};
