import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 48 繰り返し計算
// 整数値を入力し、以下の規則で計算を繰り返すプログラムを作成せよ。
// 規則：
// - 値が偶数なら2で割る
// - 値が奇数なら3倍して1を足す
// この計算を繰り返し、最終的に必ず1になる。
//
// 実行例:
// input number:
// 7
// 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
//
// input number:
// 8
// 8 → 4 → 2 → 1
//
// 注意：
// - 計算過程をすべて表示する
// - 矢印は半角の→を使用する
// - 最後の数字の後ろには矢印をつけない

/**
 * 繰り返し計算を行い、計算過程を表示する関数
 * @param {number} value - 開始値（正の整数）
 * @returns {string} - "X → Y → Z → ... → 1" の形式で計算過程を返す
 * @throws {Error} - 入力値が0以下の場合は "正の整数を入力してください" というエラーを投げる
 */
export const knock = (value = 7) => {
  throw new TrainingSkipError("未実装");
};
