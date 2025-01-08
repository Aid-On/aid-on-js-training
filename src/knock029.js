import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 29 5つの合計
// 整数値を5回入力し、それらの合計を計算して表示するプログラムを作成します。

// 実行例:
//   入力:
//     数値1: 11
//     数値2: 22
//     数値3: 33
//     数値4: 44
//     数値5: 55
//   出力:
//     sum = 165

// 【仕様】
// - 入力は必ず整数値5つである必要があります。
// - 入力が5つでない場合、以下のエラーメッセージを固定で出力します:
//     "入力値は5つの整数である必要があります"
// - エラーを出す理由:
//   - 不正な入力がある場合にプログラムが正しく動作しないことを防ぐため。
//   - ユーザーにどのような問題が発生しているのか明確に知らせるため。
// - 合計は配列内の整数値の和として計算します。

// [Tips]
// - このトレーニングでは、関数の引数として5つの整数値を配列にして受け取ります。
// - 入力が不正な場合は、以下のコードでエラーをスローします:
//     throw new Error("入力値は5つの整数である必要があります");
// - 配列を使うことで、複数の値を効率的に扱うことができます。

/**
 * 5つの整数値の合計を計算する関数
 * @param {number[]} numbers - 5つの整数値が入った配列
 * @returns {number} - 入力された整数値の合計
 * @throws {Error} - 入力が5つでない場合にエラーをスロー
 */
export const knock = (numbers) => {
  return TrainingSkipError("未実装");
};
