import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 54 最大最小
// 整数値を複数入力し、その中から最大値と最小値を求めるプログラムを作成せよ。
//
// 実行例:
// input numbers:
// 10 -5 8 3 2 7
// 最大値: 10
// 最小値: -5
//
// input numbers:
// 1 1 1 1
// 最大値: 1
// 最小値: 1
//
// 注意:
// - 入力値は配列として受け取る
// - 配列が空の場合はエラーを出力
// - 出力は「最大値: X」「最小値: Y」の形式で2行

/**
 * 配列の最大値と最小値を求める関数
 * @param {Array<number>} numbers - 整数値の配列
 * @returns {Array<string>} - ["最大値: X", "最小値: Y"] の形式で返す
 * @throws {Error} - 配列が空の場合は "配列が空です" というエラーを投げる
 */
export const knock = (numbers = [10, -5, 8, 3, 2, 7]) => {
  throw new TrainingSkipError("未実装");
};
