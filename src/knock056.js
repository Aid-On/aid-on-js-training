import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 56 2進数変換
// 10進数の整数値を入力し、その値を2進数に変換して表示するプログラムを作成せよ。
//
// 実行例:
// input decimal number:
// 13
// 1101
//
// input decimal number:
// 8
// 1000
//
// input decimal number:
// 0
// 0
//
// 注意:
// - 負の数の場合はエラーを出力
// - 出力は2進数の文字列（先頭の0は省略）
// - 0の場合は "0" を出力

/**
 * 10進数を2進数に変換する関数
 * @param {number} decimal - 10進数の整数値（0以上の整数）
 * @returns {string} - 2進数の文字列
 * @throws {Error} - 負の数の場合は "0以上の整数を入力してください" というエラーを投げる
 */
export const knock = (decimal = 13) => {
  throw new TrainingSkipError("未実装");
};
