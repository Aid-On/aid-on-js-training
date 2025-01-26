import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 57 テスト集計
// テストの点数を入力し、合計点、平均点、最高点、最低点を計算するプログラムを作成せよ。
// 点数は配列として受け取り、結果はオブジェクトとして返すこと。
//
// 実行例:
// input scores:
// [80, 65, 90, 75, 85]
// 合計点: 395
// 平均点: 79.0
// 最高点: 90
// 最低点: 65
//
// input scores:
// [100, 100, 100]
// 合計点: 300
// 平均点: 100.0
// 最高点: 100
// 最低点: 100
//
// 注意:
// - 点数は0以上100以下の整数
// - 平均点は小数第1位まで表示（四捨五入）
// - 配列が空の場合はエラーを出力
// - 範囲外の点数が含まれる場合はエラーを出力

/**
 * テストの点数を集計する関数
 * @param {Array<number>} scores - テストの点数配列（0以上100以下の整数）
 * @returns {Object} - { total: number, average: string, max: number, min: number }
 * @throws {Error} - 配列が空の場合は "点数が入力されていません" というエラーを投げる
 * @throws {Error} - 範囲外の点数がある場合は "点数は0以上100以下の整数で入力してください" というエラーを投げる
 */
export const knock = (scores = [80, 65, 90, 75, 85]) => {
  throw new TrainingSkipError("未実装");
};
