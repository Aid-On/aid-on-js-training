import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 20 割って掛ける
// 整数値を2つ入力し、1つ目の値を2つ目の値で割った結果を表示し、
// 続けてその結果に2つ目の値を掛けた結果を表示するプログラムを作成します。
// 計算はすべて整数型で行い、小数点以下は切り捨てられます。

// 実行例:
//   入力:
//     1つ目の値: 10
//     2つ目の値: 3
//   出力:
//     [3, 9]

// 注意:
// - 割り算の結果が割り切れない場合、整数型で切り捨てられる。
// - 2つ目の値が0の場合、エラーを出力してください。

/**
 * 割って掛ける関数
 * @param {number} value1 - 1つ目の整数値
 * @param {number} value2 - 2つ目の整数値
 * @returns {Array<number>} - [割り算の結果, 掛け算の結果]
 */
export const knock = (value1 = 10, value2 = 3) => {
  throw new TrainingSkipError("未実装");
};
