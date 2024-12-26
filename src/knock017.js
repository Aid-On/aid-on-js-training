import { TrainingSkipError } from "../src/common/TrainingSkipError.js";

// No. 17 配列を初期化
// 要素数10の整数型の配列を宣言し、i番目の要素の初期値を i とし、
// 順に値を表示するプログラムを作成せよ。
// 実行例:
//   $ ./knock17
//   0
//   1
//   2
//   3
//   4
//   5
//   6
//   7
//   8
//   9
//
// [Tips]
// - 配列を作るには: const arr = new Array(10); or const arr = [];
// - 例) 繰り返しで i を代入: arr[i] = i;
// - 結果を文字列として返す場合は "\n" で改行
//
// @returns {文字列} 0\n1\n2\n3\n4\n5\n6\n7\n8\n9
export const knock = () => {
  // ---- ⬇︎⬇︎ ここから ⬇︎⬇︎ ----
  throw new TrainingSkipError();
  // ---- ⬆︎⬆︎ ここまで ⬆︎⬆︎ ----
};
console.log(knock());
