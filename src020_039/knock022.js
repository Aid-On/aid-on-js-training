import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 22 -10以下または10以上
// 整数値を入力し、その値が -10 以下、または 10 以上の場合に "OK" を表示するプログラムを作成します。
// 条件に一致しない場合は何も表示しません。

// 実行例:
//   入力:
//     数値: 10
//   出力:
//     OK
//   入力:
//     数値: 0
//   出力:
//     （何も出力しない）

/**
 * -10以下または10以上を判定して結果を返す関数
 * @param {number} number - 入力された整数値
 * @returns {string} - 条件に一致する場合 "OK" を返す、一致しない場合は空文字列
 */
export const knock = (number) => {
  throw new TrainingSkipError("未実装");
};
