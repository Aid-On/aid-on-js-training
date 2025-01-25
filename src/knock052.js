import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 52 閏年
// 西暦年を入力し、その年が閏年かどうかを判定するプログラムを作成せよ。
// 閏年の条件：
// 1. 西暦年が4で割り切れる年は閏年
// 2. ただし、100で割り切れる年は閏年でない
// 3. ただし、400で割り切れる年は閏年
//
// 実行例:
// input year:
// 2000
// 2000年は閏年です
//
// input year:
// 2100
// 2100年は閏年ではありません
//
// input year:
// 2024
// 2024年は閏年です
//
// 注意:
// - 出力は「XXXX年は閏年です」または「XXXX年は閏年ではありません」の形式
// - 負の年も入力される可能性がある（紀元前の年）

/**
 * 閏年判定を行う関数
 * @param {number} year - 西暦年（整数値、負の値も可）
 * @returns {string} - "XXXX年は閏年です" または "XXXX年は閏年ではありません"
 */
export const knock = (year = 2000) => {
  throw new TrainingSkipError("未実装");
};
