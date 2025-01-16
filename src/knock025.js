import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 25 -10未満?、-10以上0未満?、0以上?
// 整数値を入力し、その値に応じて以下の範囲に分類して結果を表示するプログラムを作成します:
// - -10未満: "range 1"
// - -10以上0未満: "range 2"
// - 0以上: "range 3"

// 実行例:
//   入力:
//     数値: -15
//   出力:
//     range 1
//   入力:
//     数値: -10
//   出力:
//     range 2
//   入力:
//     数値: 0
//   出力:
//     range 3

/**
 * 入力値を判定し、該当する範囲を返す関数
 * @param {number} number - 入力された整数値
 * @returns {string} - 範囲に応じた文字列 "range 1", "range 2", または "range 3"
 */
export const knock = (number) => {
  throw new TrainingSkipError("未実装");
};
