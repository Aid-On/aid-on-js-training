import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 19 配列に入力値を格納
// 要素数5の整数型配列を宣言し、順に入力された整数値を配列の要素に代入し、
// すべての要素の値を表示するプログラムを作成せよ。
//
//
// @param {number[]} inputs - 要素数5の配列 (例: [4, 6, 7, 3, 1])
// @returns {string} 入力ログ + 要素を表示した文字列
export const knock = (inputs = [4, 6, 7, 3, 1]) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  throw new TrainingSkipError();
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
