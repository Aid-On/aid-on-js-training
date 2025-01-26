import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 55 夢想花again
// 指定された文字を指定された回数だけ表示するプログラムを作成せよ。
// ただし、表示する文字と回数は引数として受け取ること。
//
// 実行例:
// input character:
// *
// input count:
// 5
// *****
//
// input character:
// +
// input count:
// 3
// +++
//
// 注意:
// - 文字は1文字のみ
// - 回数は正の整数
// - 出力の最後には改行を入れない
// - 回数が0以下の場合はエラーを出力

/**
 * 指定された文字を指定回数繰り返す関数
 * @param {string} char - 繰り返す文字（1文字）
 * @param {number} count - 繰り返す回数（正の整数）
 * @returns {string} - 指定された文字を指定回数繰り返した文字列
 * @throws {Error} - 文字が1文字でない場合は "1文字を指定してください" というエラーを投げる
 * @throws {Error} - 回数が0以下の場合は "正の整数を指定してください" というエラーを投げる
 */
export const knock = (char = "*", count = 5) => {
  throw new TrainingSkipError("未実装");
};
