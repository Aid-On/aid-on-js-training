import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 33 入力値抜き
// 整数値を入力し、1から9までの数字を順に表示しますが、入力された値は表示しません。

// 実行例:
//   入力:
//     数値: 7
//   出力:
//     1
//     2
//     3
//     4
//     5
//     6
//     8
//     9

// 【Tips】
// - このトレーニングでは、繰り返し処理（forループ）を使います。
// - 条件分岐（if文）を使って、表示する数字を制御します。
// - 入力値と一致する場合にスキップするには、`continue` を使用すると便利です。
//   例:
//     for (let i = 1; i <= 9; i++) {
//       if (i === 入力値) {
//         continue; // この繰り返しをスキップ
//       }
//       console.log(i); // 入力値以外を表示
//     }

/**
 * 入力値以外の1から9までの数字を配列として返す関数
 * @param {number} exclude - 入力された整数値
 * @returns {Array<number>} - 入力値以外の1から9までの数字
 */
export const knock = (exclude) => {
  throw new TrainingSkipError("未実装");
};
