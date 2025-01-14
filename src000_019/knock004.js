import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 04 入力と計算
// 整数値を入力させ、その入力値を3倍した計算結果を表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock04
//   input number: 123
//   answer = 369
//
// [Tips]
// - 入力値を3倍する: const result = num * 3;
// - テンプレートリテラルで複数行の文字列を作るときは "\n" を使う
//   例) `行1\n行2`
//
// @param {number} num
// @returns {string} "input number: num\nanswer = (3倍した値)"
export const knock = (num = 123) => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  const result = num * 3;
  return TrainingSkipError("未実装");
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
