import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 24 -10以上0未満、または10以上
// 整数値を入力し、その値が -10 以上 0 未満、または 10 以上の場合に "OK" を表示し、
// 条件に一致しない場合は "NG" を表示するプログラムを作成します。

// 実行例:
//   入力:
//     数値: -5
//   出力:
//     OK
//   入力:
//     数値: 10
//   出力:
//     OK
//   入力:
//     数値: 5
//   出力:
//     NG

/**
 * -10以上0未満、または10以上を判定して結果を返す関数
 * @param {number} number - 入力された整数値
 * @returns {string} - 条件に一致する場合 "OK"、一致しない場合 "NG"
 */
export const knock = (number) => {
  throw new TrainingSkipError("未実装");
};
