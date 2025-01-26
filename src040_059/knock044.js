import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 44 通貨換算
// 日本円（整数値）を入力し、米ドルに換算した値を表示するプログラムを作成せよ。
// ただし、1ドル = 110.0円とし、結果は小数第2位まで表示すること。
//
// 実行例:
// input yen:
// 10000
// 90.91 dollars
//
// input yen:
// 5500
// 50.00 dollars
//
// input yen:
// 123
// 1.12 dollars

/**
 * 日本円をドルに換算する関数
 * @param {number} yen - 日本円（整数値）
 * @returns {string} - "XX.XX dollars" の形式で返す（小数第2位まで）
 */
export const knock = (yen = 10000) => {
  throw new TrainingSkipError("未実装");
};
