import { TrainingSkipError } from "./common/TrainingSkipError.js";
// No. 32 5の倍数でbar
// 1から20まで順に表示しますが、5の倍数の場合は数字の代わりに "bar" を配列に格納します。

// 実行例:
//   出力: [1, 2, 3, 4, "bar", 6, 7, 8, 9, "bar", ..., 19, "bar"]

// 【Tips】
// - このトレーニングでは、結果を1つずつ配列に追加していきます。
// - 配列の最後に値を追加するには `push` メソッドを使います。
//   例:
//     const arr = []; // 空の配列を作る
//     arr.push(1); // 配列の最後に1を追加 → arrは [1]
//     arr.push(2); // 配列の最後に2を追加 → arrは [1, 2]
// - 5の倍数かどうかを判定するには、`%`（剰余演算子）を使います。
//   例: `x % 5 === 0` のとき、xは5の倍数です。

/**
 * 1から20までの数字を格納した配列を作成し、5の倍数の場合は "bar" を格納する関数
 * @returns {Array<number|string>} - 数字と "bar" を含む配列
 */
export const knock = () => {
  throw new TrainingSkipError("未実装");
};
