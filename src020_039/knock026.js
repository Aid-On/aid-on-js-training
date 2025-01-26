import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 26 switch-case
// 整数値を入力し、その値が以下の条件に応じて結果を表示するプログラムを作成します:
// - 1: "one"
// - 2: "two"
// - 3: "three"
// - それ以外: "others"
//
// 実行例:
//   入力:
//     数値: 1
//   出力:
//     one
//   入力:
//     数値: 0
//   出力:
//     others
//
// [Tips]
// - このトレーニングでは、関数の引数として入力値を受け取る想定です。
//   関数名や引数はあらかじめ用意されているので、自分で書き換えないようにしましょう。
// - `switch-case` 文は、特定の値ごとに異なる処理を実行するときに便利です。
//   書き方の基本は次のとおり:
//     switch (値) {
//       case 条件1:
//         // 条件1に一致したときの処理
//         break;
//       case 条件2:
//         // 条件2に一致したときの処理
//         break;
//       default:
//         // どの条件にも一致しないときの処理
//     }
// - `break` 文は、条件に一致した処理が終わったら次の条件に進まないようにするために必要です。
// - すべての条件に該当しない場合は、`default` を使って処理を記述します。
// - このコードでは、指定された数値に応じて"one", "two", "three", または"others"を返します。

/**
 * 入力値を判定し、該当する文字列を返す関数
 * @param {number} number - 入力された整数値
 * @returns {string} - 条件に応じた文字列 ("one", "two", "three", または "others")
 */
export const knock = (number) => {
  throw new TrainingSkipError("未実装");
};
