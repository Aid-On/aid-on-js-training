import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 53 素因数分解
// 整数値を入力し、その値を素因数分解するプログラムを作成せよ。
// 素因数分解とは、ある数を素数の積で表すことである。
//
// 実行例:
// input number:
// 12
// 12 = 2 × 2 × 3
//
// input number:
// 13
// 13 = 13
//
// input number:
// 20
// 20 = 2 × 2 × 5
//
// 注意:
// - 出力は「N = X × Y × Z」の形式（素因数が1つの場合は「N = X」）
// - 素因数は小さい順に表示
// - 同じ素因数が複数回出現する場合はそのまま表示
// - 入力値が1以下の場合はエラーを出力

/**
 * 整数を素因数分解する関数
 * @param {number} value - 分解する整数値（2以上の整数）
 * @returns {string} - "N = X × Y × Z" の形式で素因数分解結果を返す
 * @throws {Error} - 入力値が1以下の場合は "2以上の整数を入力してください" というエラーを投げる
 */
export const knock = (value = 12) => {
  throw new TrainingSkipError("未実装");
};
