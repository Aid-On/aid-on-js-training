import { TrainingSkipError } from "./common/TrainingSkipError.js";

// No. 45 タクシー料金
// タクシーの初乗り料金は1.7kmまで610円で、それを超えると313mごとに80円加算される。
// 走行距離（km）を入力し、料金を計算するプログラムを作成せよ。
// ただし、端数の距離は切り上げて計算すること。
//
// 実行例:
// input distance (km):
// 2.4
// 850 yen
//
// input distance (km):
// 1.7
// 610 yen
//
// input distance (km):
// 3.5
// 1170 yen
//
// 計算方法：
// 1. 1.7kmまでは610円
// 2. 1.7kmを超える場合：
//    超過距離を313mで割って切り上げた回数 × 80円を初乗り料金に加算

/**
 * タクシー料金を計算する関数
 * @param {number} distance - 走行距離（km）
 * @returns {string} - "XXX yen" の形式で料金を返す
 * @throws {Error} - 距離が0以下の場合は "距離は0より大きい値を入力してください" というエラーを投げる
 */
export const knock = (distance = 2.4) => {
  throw new TrainingSkipError("未実装");
};
