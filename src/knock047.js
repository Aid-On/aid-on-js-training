import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 47 値の入れ替え
// 2つの整数値を入力し、それらの値を入れ替えて表示するプログラムを作成せよ。
//
// 実行例:
// input first number:
// 5
// input second number:
// 8
// first number = 8
// second number = 5
//
// 注意:
// - 入力された2つの値を交換して表示する
// - 実際のプログラミングでは、一時変数を使って値を交換するのが一般的

/**
 * 2つの値を入れ替える関数
 * @param {number} first - 1つ目の数値
 * @param {number} second - 2つ目の数値
 * @returns {Array<string>} - ["first number = X", "second number = Y"] の形式で返す
 */
export const knock = (first = 5, second = 8) => {
  throw new TrainingSkipError("未実装");
};
