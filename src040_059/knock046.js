import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 46 入場料
// 遊園地の入場料金は、大人1人1000円、子供1人500円である。
// 団体割引として、10人以上のグループは1人あたりの料金を2割引きにする。
// 大人と子供の人数を入力し、支払う料金の合計を計算するプログラムを作成せよ。
//
// 実行例:
// input number of adults:
// 2
// input number of children:
// 3
// 3500 yen
//
// input number of adults:
// 5
// input number of children:
// 7
// 8400 yen
//
// 計算方法：
// 1. 通常料金 = (大人 × 1000円) + (子供 × 500円)
// 2. 合計人数が10人以上なら、合計金額を20%引き

/**
 * 遊園地の入場料を計算する関数
 * @param {number} adults - 大人の人数
 * @param {number} children - 子供の人数
 * @returns {string} - "XXX yen" の形式で料金を返す
 * @throws {Error} - 人数が負の値の場合は "人数は0以上の値を入力してください" というエラーを投げる
 */
export const knock = (adults = 2, children = 3) => {
  throw new TrainingSkipError("未実装");
};
